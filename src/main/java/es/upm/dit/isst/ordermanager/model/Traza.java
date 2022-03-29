package es.upm.dit.isst.ordermanager.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;

@Entity
public class Traza {
    @Id
    private String trazaid;

    @Column(name = "fecha_y_hora", columnDefinition = "TIMESTAMP")
    private LocalDateTime fechahora;
    
    //datos de coordenadas en formato gpx por ejemplo: 40.45849506276571,-3.644177913665772
    private double latitud;
    private double longitud;
    private String pedidoId;

    public String gettrazaid() {
        return this.trazaid;
    }
    public void settrazaid(String trazaid) {
        this.trazaid=trazaid;
    }

    public String getPedidoId() {
        return pedidoId;
    }

    public void setPedidoId(String pedidoId) {
        this.pedidoId = pedidoId;
    }

    public double getLongitud() {
        return longitud;
    }

    public void setLongitud(double longitud) {
        this.longitud = longitud;
    }

    public double getLatitud() {
        return latitud;
    }

    public void setLatitud(double latitud) {
        this.latitud = latitud;
    }

    public void setId(String id) {
        this.trazaid = id;
    }

    public LocalDateTime getFechahora() {
        return this.fechahora;
    }

    public void setFechahora(LocalDateTime fechahora) {
        this.fechahora = fechahora;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((fechahora == null) ? 0 : fechahora.hashCode());
        long temp;
        temp = Double.doubleToLongBits(latitud);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(longitud);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        result = prime * result + ((pedidoId == null) ? 0 : pedidoId.hashCode());
        result = prime * result + ((trazaid == null) ? 0 : trazaid.hashCode());
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
        Traza other = (Traza) obj;
        if (fechahora == null) {
            if (other.fechahora != null)
                return false;
        } else if (!fechahora.equals(other.fechahora))
            return false;
        if (Double.doubleToLongBits(latitud) != Double.doubleToLongBits(other.latitud))
            return false;
        if (Double.doubleToLongBits(longitud) != Double.doubleToLongBits(other.longitud))
            return false;
        if (pedidoId == null) {
            if (other.pedidoId != null)
                return false;
        } else if (!pedidoId.equals(other.pedidoId))
            return false;
        if (trazaid == null) {
            if (other.trazaid != null)
                return false;
        } else if (!trazaid.equals(other.trazaid))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Traza [fechahora=" + fechahora + ", latitud=" + latitud + ", longitud=" + longitud + ", pedidoId="
                + pedidoId + ", trazaid=" + trazaid + "]";
    }

    

    // public Pedido getPedido() {
    //     return this.pedido;
    // }

    // public void setPedido(Pedido pedido) {
    //     this.pedido = pedido;
    // }

}
