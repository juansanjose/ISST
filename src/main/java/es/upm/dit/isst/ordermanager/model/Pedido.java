package es.upm.dit.isst.ordermanager.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Pedido {
    @Id
    private String id;
    private String origen;
    private String destino;

    private int estado;
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

    public int getEstado() {
        return this.estado;
    }

    public void setEstado(int estado) {
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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((cliente == null) ? 0 : cliente.hashCode());
        result = prime * result + ((destino == null) ? 0 : destino.hashCode());
        result = prime * result + estado;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((idvehiculo == null) ? 0 : idvehiculo.hashCode());
        result = prime * result + ((origen == null) ? 0 : origen.hashCode());
        result = prime * result + ((repartidor == null) ? 0 : repartidor.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Pedido other = (Pedido) obj;
        if (cliente == null) {
            if (other.cliente != null)
                return false;
        } else if (!cliente.equals(other.cliente))
            return false;
        if (destino == null) {
            if (other.destino != null)
                return false;
        } else if (!destino.equals(other.destino))
            return false;
        if (estado != other.estado)
            return false;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (idvehiculo == null) {
            if (other.idvehiculo != null)
                return false;
        } else if (!idvehiculo.equals(other.idvehiculo))
            return false;
        if (origen == null) {
            if (other.origen != null)
                return false;
        } else if (!origen.equals(other.origen))
            return false;
        if (repartidor == null) {
            if (other.repartidor != null)
                return false;
        } else if (!repartidor.equals(other.repartidor))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Pedido [cliente=" + cliente + ", destino=" + destino + ", estado=" + estado + ", id=" + id
                + ", idvehiculo=" + idvehiculo + ", origen=" + origen + ", repartidor=" + repartidor + "]";
    }

/*     public Set<Traza> getTrazas() {
        return this.trazas;
    }

    public void setTrazas(Set<Traza> trazas) {
        this.trazas = trazas;
    } */
 

    
}
