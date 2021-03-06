package es.upm.dit.isst.ordermanager.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.ordermanager.model.Traza;
import es.upm.dit.isst.ordermanager.repository.TrazaRepository;
//@RequestMapping("/api/traza")
@CrossOrigin
@RestController
public class TrazaController {
    
    private final TrazaRepository trazaRepository;

    public static final Logger log = org.slf4j.LoggerFactory.getLogger(TrazaController.class);

    public TrazaController(TrazaRepository t) {

        this.trazaRepository = t;

    }

    @GetMapping("/api/traza/pedido/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','USER','REPARTIDOR') ")

    public List<Traza> readPedido(@PathVariable String id) {

      return (List<Traza>) trazaRepository.findByPedidoId(id);

    }
    @PostMapping("/api/traza/create")
    @PreAuthorize("hasAnyRole('ADMIN','USER','REPARTIDOR') ")

    public ResponseEntity<Traza> create(@RequestBody Traza newTraza) throws URISyntaxException {

      Traza result = trazaRepository.save(newTraza);

      return ResponseEntity.created(new URI("/trazas/" + result.getId())).body(result);

    }
}
