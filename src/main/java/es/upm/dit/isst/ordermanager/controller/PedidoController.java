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
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.ordermanager.model.Pedido;
import es.upm.dit.isst.ordermanager.repository.PedidoRepository;

public class PedidoController {
    private final PedidoRepository pedidoRepository;

    public static final Logger log = org.slf4j.LoggerFactory.getLogger(PedidoController.class);

    public PedidoController(PedidoRepository t) {

        this.pedidoRepository = t;

    }

    @GetMapping("/pedidos")

    List<Pedido> readAll() {

      return (List<Pedido>) pedidoRepository.findAll();

    }

 

    @PostMapping("/pedidos")

    ResponseEntity<Pedido> create(@RequestBody Pedido newPedido) throws URISyntaxException {

      Pedido result = pedidoRepository.save(newPedido);

      return ResponseEntity.created(new URI("/pedidos/" + result.getId())).body(result);

    }


    @GetMapping("/pedidos/{id}")

    ResponseEntity<Pedido> read(@PathVariable String id) {

      return pedidoRepository.findById(id).map(pedido ->

         ResponseEntity.ok().body(pedido)

      ).orElse(new ResponseEntity<Pedido>(HttpStatus.NOT_FOUND));

    }

    @PutMapping("/pedidos/{id}")

    ResponseEntity<Pedido> update(@RequestBody Pedido newPedido, @PathVariable String id) {

      return pedidoRepository.findById(id).map(pedido -> {

        pedido.setOrigen(newPedido.getOrigen());

        pedido.setDestino(newPedido.getDestino());

        pedido.setTrazas(newPedido.getTrazas());

        pedido.setEstado(newPedido.getEstado());

        pedido.setIdvehiculo(newPedido.getIdvehiculo());

        pedido.setRepartidor(newPedido.getRepartidor());

        pedidoRepository.save(pedido);

        return ResponseEntity.ok().body(pedido);

      }).orElse(new ResponseEntity<Pedido>(HttpStatus.NOT_FOUND));

    }

    @DeleteMapping("pedidos/{id}")

    ResponseEntity<Pedido> delete(@PathVariable String id) {

      pedidoRepository.deleteById(id);

      return ResponseEntity.ok().body(null);

    }
//El ID es el nombre del cliente (creo)
    @GetMapping("/pedidos/cliente/{id}")

    List<Pedido> readCliente(@PathVariable String id) {

      return (List<Pedido>) pedidoRepository.findByCliente(id);

    }
//El ID es el nombre del repartidor (creo)
    @GetMapping("/pedidos/repartidor/{id}")

    List<Pedido> readRepartidor(@PathVariable String id) {

      return (List<Pedido>) pedidoRepository.findByRepartidor(id);

    }
//Para el estado
    @PostMapping("/pedidos/{id}/incrementa")

    ResponseEntity<Pedido> incrementa(@PathVariable String id) {

      return pedidoRepository.findById(id).map(pedido -> {

        pedido.setEstado(pedido.getEstado() + 1);

        pedidoRepository.save(pedido);

        return ResponseEntity.ok().body(pedido);

      }).orElse(new ResponseEntity<Pedido>(HttpStatus.NOT_FOUND));  

    }
}
