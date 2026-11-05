# Comprobaciones v11 — Material requests

- 100 proyectos mixtos LF/ft²/Dimensions: cálculos completos idénticos a v10.
- Selección parcial de unidades, números de apartamento, validación de duplicados y cantidades máximas, herencia de altura, áreas comunes parciales, filtros de superficies y materiales.
- Fuente sin modificar y solicitudes guardadas fijas aunque cambie el proyecto.
- Excel generado y reabierto: filas y cantidades de la solicitud verificadas.
- Navegador conectado a Cloudflare: solicitud de tres apartamentos guardada con 12 hojas de Walls + 9 de Ceiling = 21, frente al proyecto completo de 140.
- Impresión usa un informe separado del formulario y de los totales completos.

Pendiente: impresión física y prueba de descarga/impresión en un iPad físico.

## v12
- Las nuevas solicitudes requieren números de unidad; el informe usa Units 101, 102, 103 en lugar del nombre del tipo.
- Áreas comunes seleccionadas desde lista desplegable, sin duplicados ni multiplicadores: una cantidad de 4 en el proyecto no se convierte en 4 pedidos del mismo espacio.
- Comprobados los totales, duplicados de unidad, selección vacía y conservación de las medidas originales. Las solicitudes anteriores conservan sus cantidades guardadas.

## v13: registro de unidades
- Asignación de números a tipos, edificios y pisos; detección de duplicados por edificio.
- Herencia de medidas, ajustes independientes, actualización de plantilla y áreas exclusivas.
- Sin duplicar totales: tipos completos = apartamentos registrados + plazas restantes.
- Solicitudes de una unidad, áreas específicas y selección por tipo.
- Proyección de cálculo idempotente para el Excel completo; se conserva el comportamiento de los proyectos sin registro.
- Navegador y guardado real: 20 unidades, 3 registradas, total conservado de 140 hojas; ajuste solo del apartamento 103 eleva el total a 144.

V14: comprobados tamaños por área, retorno al predeterminado, mezcla de tamaños en solicitudes, conservación de snapshots y exportación Excel con denominadores propios.
