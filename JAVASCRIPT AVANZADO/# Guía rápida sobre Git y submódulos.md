# Guía rápida sobre Git y submódulos

## ¿Qué es Git?

Git es un sistema de control de versiones distribuido que permite gestionar el historial de cambios en proyectos de software. Facilita la colaboración entre desarrolladores y el seguimiento de modificaciones en archivos.

## ¿Qué son los submódulos en Git?

Los submódulos permiten incluir repositorios externos dentro de otro repositorio. Son útiles para gestionar dependencias o proyectos que se desarrollan por separado pero se usan juntos.

---

### Agregar un submódulo

```bash
git submodule add <url-del-repositorio> <ruta/del/submodulo>
```

Esto agrega el repositorio externo como submódulo en la ruta especificada.

### Inicializar y actualizar submódulos

Después de clonar un repositorio con submódulos, inicialízalos y actualízalos con:

```bash
git submodule init
git submodule update
```

O en una sola línea:

```bash
git submodule update --init
```

### Clonar un repositorio con submódulos

Para clonar un repositorio y sus submódulos:

```bash
git clone --recurse-submodules <url-del-repositorio>
```

### Actualizar submódulos

Para obtener los últimos cambios del submódulo:

```bash
cd <ruta/del/submodulo>
git fetch
git checkout main
git pull
```

## Consideraciones

- Los submódulos apuntan a un commit específico, no necesariamente al último.
- Es importante actualizar los submódulos después de clonar el repositorio.
- Los cambios en los submódulos deben ser confirmados y empujados por separado.
- Si cambias la rama del submódulo, asegúrate de actualizar el commit referenciado en el repositorio principal.

## Recursos adicionales

- [Documentación oficial de Git sobre submódulos](https://git-scm.com/book/es/v2/Git-Tools-Submódulos)
- [Guía de submódulos en GitHub Docs](https://docs.github.com/es/get-started/using-git/about-git-submodules)
- [Preguntas frecuentes sobre submódulos](https://git-scm.com/docs/git-submodule)
