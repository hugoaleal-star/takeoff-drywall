# Actualizar la aplicación publicada

1. Descomprime Takeoff-iPad-PWA-v2.zip.
2. En tu repositorio de GitHub, abre Code → Add file → Upload files.
3. Arrastra todo el contenido de takeoff-ipad-v2, no la carpeta exterior ni el ZIP. index.html, sw.js y manifest.webmanifest deben reemplazar los archivos de la raíz; incluye icons y vendor.
4. Pulsa Commit changes y espera a que la publicación de Pages termine en Actions. No necesitas cambiar Settings → Pages.
5. Abre https://hugoaleal-star.github.io/takeoff-drywall/ con conexión. Cierra todas las ventanas y la app instalada de Takeoff; vuelve a abrir. Si aún aparece la versión anterior, recarga con conexión, cierra todas sus ventanas y vuelve a abrir para que termine de activarse la nueva caché.
6. Reconocerás la actualización por los botones Save room y Save & add another. Comprueba que tus proyectos existentes aparecen y que puedes exportar Excel.

No borres los datos del sitio: contienen tus proyectos. Se conserva la misma clave local takeoff_drywall_v1 y la misma dirección de publicación. El nuevo service worker usa la caché takeoff-drywall-v2; la caché de archivos es independiente del guardado de proyectos. No hay sincronización remota.

La interfaz conserva el inglés del archivo Takeoff Drywall3.html. Se mantienen los iconos, la instalación PWA y ExcelJS local para exportar sin conexión después de que se descargue la caché. Las tipografías usan alternativas locales del sistema.
