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
