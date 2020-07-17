# Personalización
[https://tailwindcss.com/docs/installation/](https://tailwindcss.com/docs/installation/)

## Intalación
* Tener instalado node.js [https://nodejs.org/es/](https://nodejs.org/es/)

Crear ``package.json``
```
npm init -y
```

## npm tailwind
```
npm i tailwindcss
```

## Archivos
Crear un directorio ``src/estilos.css`` y en su interior:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Compilar
```
npx tailwindcss build src/estilos.css -o public/output.css
```

Crear arhivo ``public/index.html`` y llamar a los estilos:
```html{8}
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="output.css">
</head>

<body>
    <h1 class="mt-20">Hola Tailwind</h1>
</body>

</html>
```

## Personalizar
[https://tailwindcss.com/docs/configuration](https://tailwindcss.com/docs/configuration)

[--full](https://tailwindcss.com/docs/configuration#scaffolding-the-entire-default-configuration)
```
npx tailwindcss init --full
```

```
npx tailwindcss init
```

```js
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

## Extensión VSC
[https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

* Funciona si existe el archivo ` tailwind.config.js`

## Ejemplos:
```js
module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        danger: '#ff5f40',
        info: {
          900: '#234e52',
          800: '#285e61',
        }
      },
    },
    fontFamily: {
      rale: ['Raleway'],
    },
  },
  variants: {},
  plugins: [],
}
```

```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```html
<body>
    <h1 class="bg-danger text-xl font-rale font-hairline">Hola Tailwind</h1>
    <h2 class="bg-info-900 text-white">Hola dos mundo</h2>
</body>
```

No olvide compilar su código:
```html
npx tailwindcss build src/estilos.css -o public/output.css
```

## Extracting classes using @apply

```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Estamos ocupando una fuente personalizada "Rale" */
.btn {
    @apply font-rale py-2 px-4 rounded;
}

.btn-blue {
    @apply bg-blue-500 text-white;
}

.btn-blue:hover {
    @apply bg-blue-700;
}
```

```html
<!-- Extracting classes using @apply -->
<button class="btn btn-blue">
    Button
</button>
```

No olvide compilar su código:
```html
npx tailwindcss build src/estilos.css -o public/output.css
```

