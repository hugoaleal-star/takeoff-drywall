# Takeoff Drywall v10 — proyectos compartidos

Aplicación: https://hugoaleal-star.github.io/takeoff-drywall/
Servidor: https://takeoff-drywall-shared.hugoaleal.workers.dev

Los proyectos se guardan en Cloudflare D1. Cualquiera con el enlace puede verlos y editarlos. La app conserva una copia local y una cola de cambios sin conexión; los envía cuando recupera conexión. Revisa que indique «Shared projects — synced» antes de cambiar de dispositivo.

Los proyectos locales anteriores se incorporan al espacio compartido. Los conflictos de edición conservan una copia. No borres los datos del navegador si quedan cambios pendientes. No hay cuentas individuales ni espacios privados.

Se conservan cálculos, modos LF/ft², altura por cuarto, Ceiling largo × ancho, exportación Excel y PWA. En iPad: abrir con Safari → Compartir → Agregar a pantalla de inicio. La primera carga requiere conexión; la sincronización requiere internet.

## Solicitud de materiales — v12

Abrir un proyecto → Material requests. Escribir nombre y fecha. Escribir números de apartamentos separados por comas; los números determinan la cantidad y aparecen en el informe. El tipo se utiliza solo como plantilla de medidas. No se expanden rangos. Se pueden seleccionar cuartos, áreas comunes de una lista desplegable, una vez cada una, superficies y materiales. Save request guarda una copia fija y la sincroniza con el proyecto. Abrirla desde Saved requests para imprimir / guardar PDF o exportar el Excel de esa selección.

Los borradores no guardados permanecen solo mientras la página está abierta. Las solicitudes guardadas no se recalculan al cambiar medidas y no descuentan automáticamente solicitudes anteriores. Los números de apartamento son etiquetas introducidas por el usuario; no existe un inventario de apartamentos ni un estado de entrega.

## Registro de unidades — v13

Unit types conserva las plantillas de medidas. En Unit register, elegir tipo, escribir números separados por comas, edificio y piso opcionales, y pulsar Save units. Un mismo número se permite en edificios diferentes.

Los apartamentos registrados ocupan plazas del total del tipo; no se suman de nuevo. Las plazas sin número siguen calculándose con las medidas del tipo. Si se registran más apartamentos que el total existente, se eleva ese total. Quitar un número del registro devuelve su plaza a las medidas del tipo y elimina sus ajustes; no reduce el total del tipo.

View / edit areas permite introducir ajustes en ft² y cantidad propios del apartamento; los campos vacíos heredan las medidas actuales del tipo. Se pueden agregar áreas exclusivas de un apartamento. Al cambiar una plantilla, las áreas sin ajustes se actualizan; las solicitudes ya guardadas no cambian.

Material requests permite marcar apartamentos, seleccionar todos los registrados de un tipo o elegir cuartos específicos dentro de cada apartamento. Las plazas sin número no se solicitan automáticamente. Si todavía no hay registro, continúa disponible la selección manual anterior.

Summary y el Excel completo incluyen los apartamentos numerados, sus ajustes y las plazas restantes sin asignar. El total no duplica las plantillas. El registro y los ajustes se guardan y sincronizan con el proyecto.
