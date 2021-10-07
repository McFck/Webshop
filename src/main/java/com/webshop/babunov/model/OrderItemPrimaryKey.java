package com.webshop.babunov.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Embeddable
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "order")
public class OrderItemPrimaryKey implements Serializable {

    @ManyToOne(optional = false, fetch = FetchType.LAZY) // LAZY / EAGER to test
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne(optional = false, fetch = FetchType.EAGER) // LAZY / EAGER to test
    @JoinColumn(name = "item_id")
    private Item item;

    public Order getOrder() {
        return this.order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Item getItem() {
        return this.item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;

        result = prime * result + ((this.order.getId() == null)
                ? 0
                : this.order
                .getId()
                .hashCode());
        result = prime * result + ((this.item.getId() == null)
                ? 0
                : this.item
                .getId()
                .hashCode());

        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        OrderItemPrimaryKey other = (OrderItemPrimaryKey) obj;
        if (this.order == null) {
            if (other.order != null) {
                return false;
            }
        } else if (!this.order.equals(other.order)) {
            return false;
        }

        if (this.item == null) {
            if (other.item != null) {
                return false;
            }
        } else if (!this.item.equals(other.item)) {
            return false;
        }

        return true;
    }
}