# Despliegue de Comarka

## Configuración

- Repositorio: https://github.com/felipeotarolaiturriaga/Comarka
- Proyecto existente de Vercel: `comarka`, equipo `kala-kira`.
- Rama de producción: `main`.
- Dominio asociado: https://comarka.vercel.app (verificado en Vercel).
- Directorio raíz: raíz del repositorio.
- Framework: Other (`null`).
- Build Command: vacío; HTML, CSS y JavaScript estáticos, sin compilación.
- Install Command: vacío; no hay dependencias que instalar.
- Output Directory: `.`.
- Despliegues Git habilitados para producción y previsualizaciones.

`vercel.json` guarda los ajustes de compilación y habilita los despliegues Git.
La conexión al repositorio, la rama de producción y los dominios se verifican
en Vercel; este archivo no crea ni acredita esa conexión.

## Flujo de trabajo

1. Crear una rama de prueba desde `main` actualizado.
2. Realizar los cambios y ejecutar `node comarka-esparta/check-local.cjs`.
3. Subir la rama y abrir un pull request hacia `main`.
4. Validar el despliegue Preview de Vercel y sus recursos.
5. Integrar en `main` únicamente después de validar.
6. Verificar que Vercel despliegue automáticamente el mismo commit en
   producción y que el dominio asociado responda correctamente.

No se necesitan tokens de Vercel ni un segundo proceso de despliegue en
GitHub Actions si está activa la integración nativa de Vercel con GitHub.

## Validación de la configuración

La integración Git enlaza este repositorio con el proyecto `comarka` del equipo
`kala-kira`. El despliegue inicial de `main` está identificado como producción.
El dominio `comarka.vercel.app` figura verificado y asociado a producción.

El Preview del commit `675672e35fcd4e768dc62fd694e3c3954b6a3ec6` se creó
automáticamente desde la rama de prueba y terminó en estado READY.
La página, los estilos, el JavaScript, el emblema SVG y la imagen principal
respondieron HTTP 200. Los registros de compilación confirmaron la raíz del
repositorio, la aplicación de `.vercelignore` y la publicación correcta.

Antes de integrar cualquier cambio posterior se debe validar el Preview de su
commit exacto; después, comprobar el despliegue automático de `main` y su dominio.
