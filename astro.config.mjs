// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración para sitio estático
  output: 'static',
  
  // Base URL si tu sitio no está en la raíz del dominio
  // base: '/subdirectorio',
  
  // Configuración para build
  build: {
    // Generar archivos con nombres más limpios
    format: 'directory'
  },
  
  // Configuración para desarrollo
  server: {
    port: 4321,
    host: true
  }
});