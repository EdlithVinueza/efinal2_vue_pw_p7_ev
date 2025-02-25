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
};

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

const buscarProductoPorCodigoBarras = async (codigoBarras) => {
    try {
        const response = await axios.get(`${url}/codigo/${codigoBarras}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}   

export const buscarProductoPorCodigoBarrasFachada = async (codigoBarras) => {
    return await buscarProductoPorCodigoBarras(codigoBarras);
}

const todosLosProductos = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const todosLosProductosFachada = async () => {
    return await todosLosProductos();
}

const actualizarProducto = async (producto) => {
    try {
        await axios.put(url, producto);
    } catch (error) {
        console.error(error);
    }
}

export const actualizarProductoFachada = async (producto) => {
    await actualizarProducto(producto);
}

const eliminarProducto = async (id) => {
    try {
        await axios.delete(`${url}/${id}`);
    } catch (error) {
        console.error(error);
    }
}

export const eliminarProductoFachada = async (id) => {  
    await eliminarProducto(id);
}

/*
Forma de los to
package uce.edu.ec.service.to;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductoTo {
    private Integer id;
    private String codigoBarras;
    private String nombre;
    private String categoria;
    private Integer stock;
    private Double precio;
}
 */


/*
package uce.edu.ec.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import uce.edu.ec.service.IProductoService;
import uce.edu.ec.service.to.ProductoTo;

import java.util.List;

@Path("/productos")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProductoController {

    @Inject
    IProductoService productoService;

    @POST
    public Response crearProducto(ProductoTo productoTo) {
        try {
            productoService.crearProducto(productoTo);
            return Response.status(Response.Status.CREATED).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                           .entity("Error al crear el producto: " + e.getMessage())
                           .build();
        }
    }

    @GET
    @Path("/{id}")
    public Response buscarProductoPorId(@PathParam("id") Integer id) {
        try {
            ProductoTo productoTo = productoService.buscarProductoPorId(id);
            return Response.ok(productoTo).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                           .entity("Error al buscar el producto: " + e.getMessage())
                           .build();
        }
    }

    @GET
    @Path("/codigo/{codigoBarras}")
    public Response buscarProductoPorCodigoBarras(@PathParam("codigoBarras") String codigoBarras) {
        try {
            ProductoTo productoTo = productoService.buscarProductoPorCodigoBarras(codigoBarras);
            return Response.ok(productoTo).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                           .entity("Error al buscar el producto: " + e.getMessage())
                           .build();
        }
    }

    @GET
    public Response todosLosProductos() {
        try {
            List<ProductoTo> productos = productoService.todosLosProductos();
            return Response.ok(productos).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                           .entity("Error al obtener los productos: " + e.getMessage())
                           .build();
        }
    }

    @PUT
    public Response actualizarProducto(ProductoTo productoTo) {
        try {
            productoService.actualizarProducto(productoTo);
            return Response.ok().build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                           .entity("Error al actualizar el producto: " + e.getMessage())
                           .build();
        }
    }

    @DELETE
    @Path("/{id}")
    public Response eliminarProducto(@PathParam("id") Integer id) {
        try {
            productoService.eliminarProducto(id);
            return Response.noContent().build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                           .entity("Error al eliminar el producto: " + e.getMessage())
                           .build();
        }
    }
}
 */