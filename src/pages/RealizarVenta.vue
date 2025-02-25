<template>
  <div class="container mt-5">
    <h1>Realizar Venta</h1>
    <form @submit.prevent="guardarVenta">
      <div class="mb-3">
        <label class="form-label">Número Venta:</label>
        <input class="form-control" v-model="venta.numeroVenta" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Cédula Cliente:</label>
        <input class="form-control" v-model="venta.cedulaCliente" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Productos:</label>
        <div v-for="(producto, index) in venta.detallesVenta" :key="index" class="mb-3">
          <input class="form-control mb-2" v-model="producto.codigoBarras" placeholder="Código Barras" required />
          <input type="number" class="form-control mb-2" v-model="producto.cantidad" placeholder="Cantidad" required />
          <button class="btn btn-danger" @click.prevent="eliminarProducto(index)">Eliminar</button>
        </div>
        <button class="btn btn-secondary" @click.prevent="agregarProducto">Agregar Producto</button>
      </div>
      <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
  </div>
</template>

<script>
import { buscarProductoPorCodigoBarrasFachada } from '../client/ProductoClient';
import { crearVentaFachada } from '../client/VentaClient';

export default {
  data() {
    return {
      venta: {
        numeroVenta: '',
        cedulaCliente: '',
        detallesVenta: []
      }
    };
  },
  methods: {
    agregarProducto() {
      this.venta.detallesVenta.push({ codigoBarras: '', cantidad: 0 });
    },
    eliminarProducto(index) {
      this.venta.detallesVenta.splice(index, 1);
    },
    async guardarVenta() {
      for (const detalle of this.venta.detallesVenta) {
        const producto = await buscarProductoPorCodigoBarrasFachada(detalle.codigoBarras);
        if (!producto || producto.stock < detalle.cantidad) {
          alert(`Stock no disponible para el producto con código de barras ${detalle.codigoBarras}`);
          return;
        }
      }
      const response = await crearVentaFachada(this.venta);
      if (response) {
        alert('Venta guardada exitosamente');
      } else {
        alert('Error al guardar la venta');
      }
    }
  }
};
</script>

<style>
</style>