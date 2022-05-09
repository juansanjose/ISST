package es.upm.dit.isst.ordermanager.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.ordermanager.model.Traza;
@Repository

public interface TrazaRepository extends CrudRepository<Traza, String>{
    List<Traza> findByPedidoId(String pedidoid);
}
