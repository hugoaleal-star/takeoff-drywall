# Comprobaciones v10

- Servidor real publicado en Cloudflare Workers con D1 persistente.
- Prueba en HTTPS: salud 200 y CORS del origen GitHub correcto.
- Dos sesiones independientes: crear, leer, editar, detectar conflicto 409, propagar borrado lógico; escrituras sin sesión rechazadas 401.
- Prueba automatizada del cliente: dos dispositivos simulados, cambios sin conexión recuperados al reabrir, copias de conflictos e importación local sin sobreescritura del remoto.
- Cálculos anteriores conservados. Caché takeoff-drywall-v10, misma clave takeoff_drywall_v1.

Pendiente: comprobación física en iPad de instalación, modo avión y descarga Excel. Las pruebas de servidor no sustituyen la prueba física en Safari.
