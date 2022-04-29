package es.upm.dit.isst.ordermanager;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.junit.jupiter.api.Assertions.assertFalse;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.time.LocalDateTime;
import java.util.Optional;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;

import es.upm.dit.isst.ordermanager.model.Pedido;
import es.upm.dit.isst.ordermanager.model.Traza;
import es.upm.dit.isst.ordermanager.repository.PedidoRepository;
import es.upm.dit.isst.ordermanager.repository.TrazaRepository;

@SpringBootTest
class OrdermanagerApplicationTests {

	@Autowired
	private PedidoRepository repo;
	@Autowired
	private TrazaRepository trepo;
	@Test
    final void testPedido() {

		Pedido pedido = new Pedido();
		pedido.setId("1");
		pedido.setOrigen("Origen");
		pedido.setDestino("Destino");
		pedido.setEstado("Estado");
		pedido.setIdvehiculo("123");
		pedido.setRepartidor("Marcos");
		pedido.setCliente("Juan");

		repo.save(pedido);

		Optional<Pedido> pedido2 = repo.findById("1");

		assertEquals(pedido2.get().getId(), pedido.getId());
		assertEquals(pedido2.get().getOrigen(), pedido.getOrigen());
		assertEquals(pedido2.get().getDestino(), pedido.getDestino());
		assertEquals(pedido2.get().getIdvehiculo(), pedido.getIdvehiculo());
		assertEquals(pedido2.get().getRepartidor(), pedido.getRepartidor());
		assertEquals(pedido2.get().getCliente(), pedido.getCliente());


		pedido.setEstado("Estado2");
		repo.save(pedido);
		pedido2 =(repo.findById("1"));
		assertNotEquals(pedido2.get().getEstado(), "Estado");

		repo.delete(pedido);
		pedido2= repo.findById("1");
		assertFalse(pedido2.isPresent());
	}

	@Test
	final void testTraza() {

		Pedido pedido = new Pedido();
		pedido.setId("2");
		pedido.setOrigen("Origen");
		pedido.setDestino("Destino");
		pedido.setEstado("Estado");
		pedido.setIdvehiculo("123");
		pedido.setRepartidor("Marcos");
		pedido.setCliente("Juan");

		repo.save(pedido);

		Traza traza = new Traza();
		traza.setId("1");
		traza.setLatitud(0.0);
		traza.setLongitud(0.0);
		traza.setFechahora(LocalDateTime.of(2000, 12, 6, 1, 23));
		traza.setPedido(pedido);

		trepo.save(traza);

		Optional<Traza> traza2 = trepo.findById("1");

		assertEquals(traza2.get().getId(), traza.getId());
		assertEquals(traza2.get().getLatitud(), traza.getLatitud());
		assertEquals(traza2.get().getLongitud(), traza.getLongitud());
		assertEquals(traza2.get().getFechahora(), traza.getFechahora());

		traza.setLatitud(0.1);
		trepo.save(traza);
		traza2= trepo.findById("1");
		assertNotEquals(traza2.get().getLatitud(), 0.0);

		trepo.delete(traza);
		traza2= trepo.findById("1");
		assertFalse(traza2.isPresent());
	}
}
