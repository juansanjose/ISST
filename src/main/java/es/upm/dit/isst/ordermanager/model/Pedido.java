package es.upm.dit.isst.ordermanager.model;


import javax.persistence.Id;

@javax.persistence.Entity
public class Pedido {
    @Id
    private String id;
    private String origen;
    private String destino;

    private String estado;
    private String idvehiculo;
    private String repartidor;
    private String cliente;

    
    //@OneToMany(mappedBy="pedido")
    //private Set<Traza> trazas;


    public String getId() {
        return this.id;
    }

    public void setId(String id) {
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

    public String getEstado() {
        return this.estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getIdvehiculo() {
        return this.idvehiculo;
    }

    public void setIdvehiculo(String idvehiculo) {
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

/*     public Set<Traza> getTrazas() {
        return this.trazas;
    }

    public void setTrazas(Set<Traza> trazas) {
        this.trazas = trazas;
    } */
 

    
}
