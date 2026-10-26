# Takeoff Drywall para iPad / PWA

## Publicar e instalar

1. Descomprime el paquete. Publica **todo el contenido de esta carpeta** en un alojamiento estático con HTTPS (por ejemplo, Netlify, Cloudflare Pages o GitHub Pages). `index.html` debe quedar en la raíz de la carpeta publicada. También funciona dentro de una subcarpeta: no cambies las rutas relativas.
2. Comprueba que `index.html`, `sw.js`, `manifest.webmanifest`, `icons/` y `vendor/` se sirven sin contraseña ni redirecciones a páginas de acceso. Sirve `.js` como JavaScript y `.webmanifest` como `application/manifest+json` o JSON. Evita caché HTTP prolongada para `sw.js`.
3. En el iPad, abre la dirección HTTPS en **Safari**. Espera a que cargue por completo con conexión. Crea un proyecto de prueba y exporta Excel.
4. Pulsa **Compartir → Añadir a pantalla de inicio → Añadir**. Si aparece, activa «Abrir como app web». Abre Takeoff desde su icono. Si no aparece la opción, revisa el menú de acciones de Compartir.
5. Abre una vez desde el icono con conexión. Luego activa modo avión y comprueba que puedes abrir el proyecto, editar y exportar. La primera descarga de archivos requiere conexión.

Abrir el HTML como archivo adjunto o desde Archivos no instala el service worker. HTTP solo funciona para pruebas en localhost del mismo ordenador; para el iPad usa HTTPS. No basta con enviar únicamente el HTML.

## Uso y datos

- Se conservan las pantallas, fórmulas, redondeos por cuarto, cantidades, unidades típicas, áreas comunes y tasas de materiales del original. Las tipografías usan alternativas locales del sistema para evitar dependencias de conexión.
- Los proyectos se guardan inmediatamente en `localStorage`, con la clave original `takeoff_drywall_v1`, en ese navegador y dirección web. Se muestra un error si el navegador impide guardar.
- **No existe sincronización remota ni backend.** Los datos no se comparten entre dispositivos, dominios o perfiles. No se garantiza que Safari y la app instalada compartan almacenamiento: compruébalo antes de trabajar. Cambiar la dirección de publicación no migra proyectos.
- Borrar datos del sitio, usar navegación privada, desinstalar o la limpieza de almacenamiento del sistema puede eliminar proyectos. Exporta copias con frecuencia. El Excel es un informe editable con fórmulas; esta versión no lo vuelve a importar como proyecto.
- «Exportar Excel» descarga un `.xlsx` con el nombre del proyecto mediante una descarga web y MIME de Excel. En Safari, revisa el botón Descargas y Archivos → Descargas (la ubicación depende de los ajustes de Safari). Si se abre una vista previa, usa Compartir → Guardar en Archivos.
- ExcelJS 4.4.0 se incluye en `vendor/`, con su licencia MIT. No se necesita CDN para exportar, tampoco sin conexión una vez instalada la caché.

## Actualizar una publicación

Cambia `CACHE` en `sw.js` a una versión nueva cada vez que cambies los archivos de la app y vuelve a publicar la carpeta completa en la misma dirección. Abre con conexión para descargar la actualización; cierra todas las ventanas de Takeoff y vuelve a abrir. La actualización espera al cierre de la versión anterior para evitar mezclar archivos. No borres los datos del sitio para actualizar. El guardado local es independiente de la caché de la PWA.

## Comprobación en iPad real antes de uso en obra

Comprueba orientación vertical y horizontal, teclado táctil, añadir/duplicar/borrar cuartos, persistencia al cerrar y abrir, descarga en Safari y desde el icono, apertura del Excel y modo avión. Las pruebas automatizadas de motores de navegador se detallan en COMPROBACIONES.md; no sustituyen una prueba en un dispositivo físico.
