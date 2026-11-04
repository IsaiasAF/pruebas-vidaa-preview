# XuperTV VIDAA — estado de adaptación

## Punto de partida
Esta compilación parte del prototipo VIDAA 1.0.1 que ya cargó en el Hisense 50A65NV. No sustituye el repositorio webOS más reciente ni pretende ser todavía una conversión completa del servicio Node/Luna.

## Cambios de esta fase
- Se añadió `vidaa-bridge.js`, compatible con JavaScript clásico, para identificar el entorno, registrar tamaño de pantalla y detectar soporte declarado por el navegador para MP4, HLS y DASH.
- La pantalla Ajustes muestra las capacidades detectadas en el propio televisor.
- Se añadieron callbacks de ciclo de vida opcionales `Hisense_onAppShow` y `Hisense_onAppHide` sin reemplazar implementaciones del sistema.
- Se mantiene la navegación por flechas, OK y regreso ya presente en el prototipo.

## Limitaciones conocidas
- El catálogo local sirve para validar interfaz; no equivale a catálogo online en vivo.
- La mayoría de fichas no contiene URL de reproducción. No se inventan enlaces ni se extraen tokens de sesiones compartidas.
- La detección `canPlayType()` es orientativa: no garantiza que un stream concreto se reproduzca, ni valida CORS, cabeceras, DRM, códecs o licencias.
- El servicio webOS/Luna, proxy y FFmpeg no se ejecutan dentro de una página VIDAA. Requieren una arquitectura compatible distinta y pruebas separadas.
- Esta carpeta es una web alojada para pruebas; no es una app VIDAA firmada ni instala un icono en el launcher por sí sola.

## Pruebas en el Hisense
1. Publicar esta carpeta completa en HTTPS o servirla desde un PC en la misma red.
2. Abrir la URL en el navegador de la TV.
3. Entrar en Ajustes y fotografiar el bloque “Compatibilidad detectada”.
4. Probar flechas, OK, regreso, búsqueda, abrir/cerrar ficha y favoritos.
5. No considerar una prueba de `canPlayType()` como prueba de reproducción real. Para eso se necesita una URL de prueba autorizada y compatible con el televisor.

## Despliegue oficial
VIDAA documenta aplicaciones web alojadas y aplicaciones nativas. La publicación en el launcher/tienda depende del flujo de partner y certificación de VIDAA. La guía oficial describe las hosted apps como páginas cargadas desde un servidor remoto.

## Seguridad y licencias
No incluir credenciales, tokens, llaves privadas ni sesiones compartidas en el repositorio. No implementar evasión de bloqueos del proveedor, DRM, autenticación o georrestricciones. Respetar `LICENSE` y `THIRD_PARTY.md` del proyecto de origen; los recursos de terceros pueden tener condiciones distintas a las del código propio.
