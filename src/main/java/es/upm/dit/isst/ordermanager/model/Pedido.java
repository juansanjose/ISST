package es.upm.dit.isst.ordermanager.model;

import java.util.Set;

import javax.persistence.Id;
import javax.persistence.OneToMany;

@javax.persistence.Entity
public class Pedido {
    @Id
    private int id;
    private String origen;
    private String destino;

    private int estado;
    private int idvehiculo;
    private String repartidor;
    private String cliente;

    
    @OneToMany(mappedBy="pedido")
    private Set<Traza> trazas;


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOrigen() {
        return this.origen;
    }

    public void setOrigen(String origen) {
        this.origen = origen;
    }

    public String getDestino() {
        return this.destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public int getEstado() {
        return this.estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public int getIdvehiculo() {
        return this.idvehiculo;
    }

    public void setIdvehiculo(int idvehiculo) {
        this.idvehiculo = idvehiculo;
    }

    public String getRepartidor() {
        return this.repartidor;
    }

    public void setRepartidor(String repartidor) {
        this.repartidor = repartidor;
    }

    public String getCliente() {
        return this.cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public Set<Traza> getTrazas() {
        return this.trazas;
    }

    public void setTrazas(Set<Traza> trazas) {
        this.trazas = trazas;
    }
 

    
}
