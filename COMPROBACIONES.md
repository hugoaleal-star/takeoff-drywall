# Comprobaciones de la actualización v3

Cambios: varios tipos de unidad (Unit A, B…) con su cantidad, áreas comunes agrupadas por nivel o edificio, botones rápidos de amenidades (Clubhouse, Fitness / Gym, Leasing Office…), y lectura de medidas de medidor láser (metros, cm, mm, pies y pulgadas con fracciones, comillas tipográficas del iPad).

- Proyecto guardado con el formato anterior (unidad típica + áreas comunes) cargado desde `localStorage`: se convierte a Unit A + grupo "Common Areas" con los mismos totales (590 hojas en el ejemplo).
- Agregar tipo de unidad, cambiar su cantidad, agregar nivel y cuartos desde los botones rápidos: probado en Chromium sin errores de JavaScript.
- Excel exportado y reabierto: una fila por tipo de unidad y por nivel/edificio en Project Summary, un bloque de cuartos con subtotal para cada uno, Materials apuntando al GRAND TOTAL; fórmulas activas.
- Formatos de longitud probados: `12'6"`, `12' 6 1/2"`, `12’ 6 1/2”`, `12'-6-1/2`, `12 6`, `12-6`, `12.5`, `12.5ft`, `150"`, `6 1/2"`, `3.812m`, `381 cm`, `3812mm`, `3,812 m`.
- Altura de techo en tres niveles: la del proyecto (por defecto), la de cada tipo de unidad o nivel/edificio, y la de un cuarto específico. Probado: 10×10 a 9 ft = 360 ft² de pared; con el tipo a 12 ft = 480 ft²; un cuarto con 8 ft propio se queda en 320 ft². El Excel muestra la altura en el título de cada bloque y en Measurements.
- Botones rápidos de altura (8', 9', 10', 12') en cada cuarto medido con Dimensions. Probado: sala a 9 ft (468 ft² de pared) y baño a 8 ft (208 ft² MR) en la misma unidad.
- Caché del service worker: `takeoff-drywall-v5`. Se mantiene la clave local `takeoff_drywall_v1`; no hay sincronización remota.

Pendiente: comprobación visual en un iPad físico (instalada desde el icono, modo avión y descarga del Excel).
