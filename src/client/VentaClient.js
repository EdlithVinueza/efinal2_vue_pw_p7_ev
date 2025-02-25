import axios from 'axios';

const url = 'http://localhost:8081//supermaxi/v1.1/productos';

const crearProducto = async (producto) => {
    try {
        const response = await axios.post(url, producto);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const crearProductoFachada = async (producto) => {
    return await crearProducto(producto);
}

const buscarProductoPorId = async (id) => {
    try {
        const response = await axios.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const buscarProductoPorIdFachada = async (id) => {
    return await buscarProductoPorId(id);
}

const buscarTodasLasVentas = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const buscarTodasLasVentasFachada = async () => {
    return await buscarTodasLasVentas();
}


/*
Forma de los to
package uce.edu.ec.service.to;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VentaTo {
    private String numeroVenta;
    private String cedulaCliente;
    private BigDecimal totalVenta;
    private List<DetalleVentaTo> detallesVenta;
}
  package uce.edu.ec.service.to;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetalleVentaTo {
    private Integer cantidad;
    private BigDecimal precioUnitario;
    private BigDecimal subtotal;
    private Integer productoId;
}  
 */


/*Quarqus
package uce.edu.ec.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import uce.edu.ec.service.IVentaService;
import uce.edu.ec.service.to.VentaTo;

import java.util.List;

@Path("/ventas")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class VentaController {

    @Inject
    IVentaService ventaService;

    @POST
    public Response crearVenta(VentaTo ventaTo) {
        try {
            ventaService.crearVenta(ventaTo);
            return Response.status(Response.Status.CREATED).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                           .entity("Error al crear la venta: " + e.getMessage())
                           .build();
        }
    }

    @GET
    @Path("/{id}")
    public Response buscarVentaPorId(@PathParam("id") Integer id) {
        try {
            VentaTo ventaTo = ventaService.buscarVentaPorId(id);
            return Response.ok(ventaTo).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                           .entity("Error al buscar la venta: " + e.getMessage())
                           .build();
        }
    }

    @GET
    public Response todasLasVentas() {
        try {
            List<VentaTo> ventas = ventaService.todasLasVentas();
            return Response.ok(ventas).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                           .entity("Error al obtener las ventas: " + e.getMessage())
                           .build();
        }
    }
}

*/