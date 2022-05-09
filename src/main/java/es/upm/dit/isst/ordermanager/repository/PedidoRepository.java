package es.upm.dit.isst.ordermanager.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.ordermanager.model.Pedido;
@Repository

public interface PedidoRepository extends CrudRepository<Pedido, String>{
    List<Pedido> findByCliente(String cliente);
    List<Pedido> findByRepartidor(String repartidor);
    //Optional<Pedido> findByID(String string);
}
