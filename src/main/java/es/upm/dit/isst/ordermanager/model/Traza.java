package es.upm.dit.isst.ordermanager.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;

@javax.persistence.Entity
public class Traza {
    @Id
    private String trazaid;
    @Column(name = "fecha_y_hora", columnDefinition = "TIMESTAMP")
    private LocalDateTime fechahora;
    private double ubicacion;
    @ManyToOne(targetEntity = Pedido.class)
    @JoinColumn(name="pedido_id", nullable=false, referencedColumnName = "id")
    private Pedido pedido;

    public String getId() {
        return this.trazaid;
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

    public double getUbicacion() {
        return this.ubicacion;
    }

    public void setUbicacion(double ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Pedido getPedido() {
        return this.pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

}
