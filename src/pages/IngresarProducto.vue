<template>
    <div class="container mt-5">
      <h1>Ingresar Producto</h1>
      <form @submit.prevent="guardarProducto">
        <div class="mb-3">
          <label class="form-label">Código Barras:</label>
          <input class="form-control" v-model="producto.codigoBarras" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Nombre:</label>
          <input class="form-control" v-model="producto.nombre" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Categoría:</label>
          <input class="form-control" v-model="producto.categoria" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Stock:</label>
          <input type="number" class="form-control" v-model="producto.stock" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Precio Unitario:</label>
          <input type="number" class="form-control" v-model="producto.precio" required />
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { crearProductoFachada } from '../client/ProductoClient';
  
  export default {
    data() {
      return {
        producto: {
          codigoBarras: '',
          nombre: '',
          categoria: '',
          stock: 0,
          precio: 0
        }
      };
    },
    methods: {
      async guardarProducto() {
        const response = await crearProductoFachada(this.producto);
        if (response) {
          alert('Producto guardado exitosamente');
        } else {
          alert('Error al guardar el producto');
        }
      }
    }
  };
  </script>
  
  <style>
  </style>