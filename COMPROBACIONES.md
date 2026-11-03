# Comprobaciones: pies lineales y pies cuadrados (v8)

- Se añadió Linear ft (LF): Walls LF × altura = Walls ft²; MR LF × altura = MR ft². Ceiling permanece en ft².
- Square ft (ft²) conserva las áreas ya calculadas: no multiplica por altura.
- Dimensions conserva el cálculo rectangular de largo, ancho y altura.
- Las entradas lineales wallsLF/mrLF se guardan separadas de walls/mr para que cambiar de modo no reinterprete ni borre las medidas anteriores. Los proyectos antiguos conservan su modo y sus valores.
- Se mantiene takeoff_drywall_v1, el mismo dominio y la misma ruta. No hay sincronización remota.

Pruebas realizadas:

- 100 casos de regresión de proyectos anteriores sin diferencias de cálculo.
- 50 LF × 9 ft = 450 ft² en Walls; 10 LF × 9 ft = 90 ft² en MR; Ceiling 200 ft² no cambia con la altura. Con supuestos predeterminados: 16 hojas por cuarto; al cambiar a 10 ft, 18 hojas.
- Con ft² directos de 450 y 90, variar la altura no modifica las áreas ni las 16 hojas.
- Probadas cantidades de cuartos, cantidad de unidades, altura predeterminada y específica, expresiones, pies/pulgadas y una medida métrica.
- Excel generado y reabierto: fórmulas de conversión LF × altura, áreas, totales y anotación del modo comprobados.
- Navegador integrado con proyecto local de prueba: selector de los tres modos, etiquetas LF/ft², cálculo visible de 450 ft², 16 hojas y conservación de las entradas al cambiar de modo. En ft², variar altura mantuvo las 16 hojas.

Pendiente: prueba en iPad físico, instalación desde Safari, modo avión y descarga real desde Safari.
