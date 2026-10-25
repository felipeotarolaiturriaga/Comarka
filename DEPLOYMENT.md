# Despliegue de Comarka

## Configuración prevista

- Repositorio: https://github.com/felipeotarolaiturriaga/Comarka
- Proyecto existente de Vercel: `comarka`, equipo `kala-kira`.
- Rama de producción prevista: `main`.
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

## Verificación pendiente

GitHub registra un estado Vercel exitoso para el commit inicial de la web
`16653444fdf1c53cd16ddaca6effc75f16f2416f`.
Falta autorizar el acceso de esta conexión al equipo `kala-kira` para inspeccionar
la configuración efectiva, el dominio y los despliegues posteriores.
Los cambios de configuración deben permanecer en la rama de prueba hasta
verificar el Preview. No se ha confirmado todavía el circuito completo.
