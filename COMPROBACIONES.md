# Comprobaciones realizadas

- 100 proyectos comparados contra las funciones de cálculo del HTML original: resultados idénticos para áreas, hojas, desperdicio, cantidades, multiplicación de unidades y empaques de materiales. Incluyen captura por expresiones, dimensiones, paredes MR y áreas comunes.
- Sintaxis de JavaScript de la aplicación y del service worker validada.
- Exportación ejecutada con ExcelJS incluido: Blob con MIME XLSX, activación del enlace de descarga, archivo generado y reabierto. Verificados 247 ft² de walls, 108 ft² de ceiling, 20 hojas por conjunto de cuartos y 60 hojas para tres unidades, además de las fórmulas SUM de totales.
- Almacenamiento probado con persistencia, relectura y error de cuota: el error no muestra falsamente «Guardado».
- Manifest e iconos presentes; sin llamadas a window.claude ni recursos de ejecución externos.
- Service worker probado con caché simulada: archivos de precarga existentes, instalación, activación, respuesta offline para HTML, ExcelJS e iconos, fallback de navegación y conservación de cachés ajenas.
- Navegador integrado: creación y edición de proyecto, cálculo de 60 hojas, persistencia tras recargar, reapertura y resumen verificados visualmente. La exportación mostró «Excel generado».

## Límites de la verificación

El entorno impidió arrancar Chromium y WebKit de Playwright por restricciones del sistema. La comprobación visual se hizo en el navegador integrado. No se ha verificado en un iPad físico, ni la instalación desde Safari, ni la descarga real en Safari, ni una sesión real en modo avión. Las pruebas del service worker son de lógica con caché simulada. La guía incluye los pasos para esas comprobaciones finales después de publicar en HTTPS.

La aplicación se entrega lista para publicar; no se ha desplegado en un servidor público. No tiene backend ni sincronización remota.
