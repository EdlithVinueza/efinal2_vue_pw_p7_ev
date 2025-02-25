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

