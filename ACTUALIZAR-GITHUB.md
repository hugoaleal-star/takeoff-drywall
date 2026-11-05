# Actualizar

El servidor Cloudflare está publicado y su base D1 conectada. Subir index.html, sw.js y documentación de esta versión a la raíz del repositorio, manteniendo icons y vendor. Esperar el despliegue de Pages y abrir la aplicación con conexión. Cerrar todas sus ventanas y volver a abrir para activar el nuevo service worker.

Conservar la misma dirección y la clave local takeoff_drywall_v1. No borrar datos del navegador: contienen cambios pendientes. Caché: takeoff-drywall-v14.

Para cambios de servidor, editar worker.js en Cloudflare y mantener el binding DB a la base existente. No recrear ni borrar la base. La estructura está en servidor/schema.sql del paquete entregado.
