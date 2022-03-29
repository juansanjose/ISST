package es.upm.dit.isst.ordermanager.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.ordermanager.model.Pedido;
import es.upm.dit.isst.ordermanager.repository.PedidoRepository;
//@RequestMapping("/api/pedido")
@RestController
public class PedidoController {
    private final PedidoRepository pedidoRepository;

    public static final Logger log = org.slf4j.LoggerFactory.getLogger(PedidoController.class);

    public PedidoController(PedidoRepository t) {

        this.pedidoRepository = t;

    }

    @GetMapping("/api/pedido/all")

    List<Pedido> readAll() {

      return (List<Pedido>) pedidoRepository.findAll();

    }

 

    @PostMapping("/api/pedido/create")

    ResponseEntity<Pedido> create(@RequestBody Pedido newPedido) throws URISyntaxException {

      Pedido result = pedidoRepository.save(newPedido);

      return ResponseEntity.created(new URI("/pedidos/" + result.getId())).body(result);

    }


    @GetMapping("/api/pedido/{id}")

    ResponseEntity<Pedido> read(@PathVariable String id) {

      return pedidoRepository.findById(id).map(pedido ->

         ResponseEntity.ok().body(pedido)

      ).orElse(new ResponseEntity<Pedido>(HttpStatus.NOT_FOUND));

    }

    @PutMapping("/api/pedido/change/{id}")

    ResponseEntity<Pedido> update(@RequestBody Pedido newPedido, @PathVariable String id) {

      return pedidoRepository.findById(id).map(pedido -> {

        pedido.setOrigen(newPedido.getOrigen());

        pedido.setDestino(newPedido.getDestino());

        pedido.setEstado(newPedido.getEstado());

        pedido.setIdvehiculo(newPedido.getIdvehiculo());

        pedido.setRepartidor(newPedido.getRepartidor());

        pedidoRepository.save(pedido);

        return ResponseEntity.ok().body(pedido);

      }).orElse(new ResponseEntity<Pedido>(HttpStatus.NOT_FOUND));

    }

    @DeleteMapping("/api/pedido/delete/{id}")

    ResponseEntity<Pedido> delete(@PathVariable String id) {

      pedidoRepository.deleteById(id);

      return ResponseEntity.ok().body(null);

    }
//El ID es el nombre del cliente (creo)
    @GetMapping("/api/pedido/cliente/{id}")

    List<Pedido> readCliente(@PathVariable String id) {

      return (List<Pedido>) pedidoRepository.findByCliente(id);

    }
//El ID es el nombre del repartidor (creo)
    @GetMapping("/api/pedido/repartidor/{id}")

    List<Pedido> readRepartidor(@PathVariable String id) {

      return (List<Pedido>) pedidoRepository.findByRepartidor(id);

    }
//Para el estado
    @PostMapping("/api/pedido/{id}/increment")

    ResponseEntity<Pedido> incrementa(@PathVariable String id) {

      return pedidoRepository.findById(id).map(pedido -> {

        pedido.setEstado(pedido.getEstado() + 1);

        pedidoRepository.save(pedido);

        return ResponseEntity.ok().body(pedido);

      }).orElse(new ResponseEntity<Pedido>(HttpStatus.NOT_FOUND));  

    }
}
