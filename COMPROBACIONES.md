# Comprobaciones v9: Ceiling con largo y ancho

- Ceiling tiene su propio selector Length × Width / Area (ft²), independiente del modo de Walls y MR. En Dimensions se puede conservar el uso de las dimensiones del cuarto.
- Largo y ancho del Ceiling se guardan por separado del área directa. La altura no interviene en el área de Ceiling.
- Hojas de Ceiling = redondear hacia arriba [área / tamaño de hoja × (1 + desperdicio)]. Se respetan cantidades de cuartos, unidades y materiales.
- Los proyectos anteriores conservan su fuente de Ceiling: área directa en modos sf/lf y largo/ancho del cuarto en Dimensions. No se reinterpretan datos existentes.
- Conserva takeoff_drywall_v1; caché takeoff-drywall-v9. No tiene backend ni sincronización remota.

Pruebas realizadas:

- 100 proyectos anteriores comparados contra v8: áreas, hojas y materiales iguales, incluidos LF, ft² y Dimensions.
- Ceiling de 20 × 10 ft: 200 ft² y 5 hojas con tamaño de 48 ft² y 5 % de desperdicio.
- 12'6" × 10 ft: 125 ft² y 3 hojas. Cambiar la altura del cuarto no modifica Ceiling.
- Cambiar a área directa utiliza su valor guardado; volver a largo × ancho conserva ambas medidas.
- Excel generado y reabierto: fórmula 20*10 en el área, resultado de 5 hojas y total del proyecto comprobados.
- Navegador integrado, proyecto local: campos de largo/ancho, cálculo visible de 200 ft² y 5 hojas comprobados.

Pendiente: prueba en iPad físico, instalación desde Safari, modo avión y descarga real de Excel desde Safari.
