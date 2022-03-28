package es.upm.dit.isst.ordermanager.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import es.upm.dit.isst.ordermanager.model.Pedido;

public interface PedidoRepository extends CrudRepository<Pedido, String>{
    List<Pedido> findByCliente(String cliente);
    List<Pedido> findByRepartidor(String repartidor);
}