# Fundamentos
Espero ayudar y orientarlos con esta guía de Tailwind css 🍭

## ¿Qué es?
Tailwind CSS es un Framework de CSS que principalmente brinda clases útiles para nuestros desarrollos web. En simples palabras cuenta con un conjuto de clases que nosotros podemos aprovechar en nuestros desarrollos web. 

[https://tailwindcss.com/](https://tailwindcss.com/)

* La idea es poder hacer sitios web personalizados y que no queden como Bootstrap. Ya que dicen que cuando diseñamos por ejemplo con Bootstrap al contar con todos sus componentes, la gran mayoría de los sitios web quedan idénticos.
* Con Tailwind CSS podemos utilizar sus clases y crear diseños únicos.
* Nos permite hacer sitio web responsives.
* En mi opinión nos obliga a utilizar más nuestro cerebro 🏋, ya que si bien tiene todas las clases configuradas nosotros tenemos que contar con mayor conocimiento de CSS para diseñar nuestro sitio web.
* Tailwind está escrito en PostCSS y configurado en JavaScript, lo que significa que tienes todo el poder de un lenguaje de programación real a tu alcance.

## Instalación
Existen varias alternativas pero por ahora no lo vamos a personalizar, necesito que entendamos como funciona Tailwind y posteriormente en clases más avanzadas comenzaremos con su personalización.

[https://tailwindcss.com/docs/installation#using-tailwind-via-cdn](https://tailwindcss.com/docs/installation#using-tailwind-via-cdn)

```html
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
```

Desventajas de este método
* No puedes personalizar el tema predeterminado de Tailwind.
* No se puede utilizar cualquier directivas como @apply, @variants, etc.
* No puede habilitar funciones como group-hover
* No puedes instalar complementos de terceros

Para aprovechar al máximo Tailwind, realmente debería instalarlo a través de npm.

## Vista rápida
[https://tailwindcss.com/docs/utility-first](https://tailwindcss.com/docs/utility-first)

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
</head>

<body>

    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl mt-3 border">
        <div class="flex-shrink-0">
            <img class="h-12 w-12"
                src="https://images.vexels.com/media/users/3/139911/isolated/preview/1afb4038427b2bd8edd275940aea269d-icono-de-servicio-de-chat-by-vexels.png"
                alt="ChitChat Logo">
        </div>
        <div class="ml-6 pt-1">
            <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
        </div>
    </div>

</body>

</html>
```

Para hacer la cosas más simples vamos a diseñar un botón:
```html
<div class="container mx-auto mt-5">
    <button class='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>
        Botón con Tail
    </button>
</div>
```

## Puntos de quiebre
[https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design)

```css
/* Small (sm) */
@media (min-width: 640px) { /* ... */ }

/* Medium (md) */
@media (min-width: 768px) { /* ... */ }

/* Large (lg) */
@media (min-width: 1024px) { /* ... */ }

/* Extra Large (xl) */
@media (min-width: 1280px) { /* ... */ }
```

Ejemplo: [https://tailwindcss.com/docs/responsive-design#mobile-first](https://tailwindcss.com/docs/responsive-design#mobile-first)
```html
<div class="mx-10 mt-5">
    <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500 h-12 w-12"></div>
</div>
```

### Herencia
En el siguiente ejemplo: Si no configuramos un color se hereda el del menor tamaño, por ejemplo si no configuramos `sm` se hereda el color del tamaño más pequeño configurado (text-blue-500), así si no configuramos `xl` se configurará con el color del `md` (md:text-red-500)
```html
<div class="mx-10 mt-5">
    <h1 class="text-blue-500 md:text-red-500">Título</h1>
</div>
```

## Preflight
[https://tailwindcss.com/docs/preflight](https://tailwindcss.com/docs/preflight)

Construido sobre ``normalize.css``, Preflight es un conjunto de estilos base para proyectos de Tailwind que están diseñados para suavizar las inconsistencias entre navegadores y facilitarle el trabajo dentro de las limitaciones de su sistema de diseño.

* Preflight elimina todos los márgenes predeterminados de elementos como encabezados, comillas, párrafos, etc.
* Todos los elementos de encabezado están completamente sin estilo por defecto y tienen el mismo tamaño de fuente y peso de fuente que el texto normal.
* Las listas ordenadas y no ordenadas están sin estilo por defecto, sin viñetas / números y sin margen o relleno.
* Imágenes y otros elementos sustituidos (como svg, video, canvas, y otros) son ``display: block`` de forma predeterminada.
* Si alguna vez necesita hacer uno de estos elementos en inlinelugar de block, simplemente use la ``inline``.

Probemos los encabezados:
```html
<h1>Esto es un H1</h1>
<h2>Esto es un H2</h2>
<h3>Esto es un H3</h3>
<h4>Esto es un H4</h4>
<h5>Esto es un H5</h5>
<h6>Esto es un H6</h6>
```

## Container
[https://tailwindcss.com/docs/container](https://tailwindcss.com/docs/container)

Ancho de nuestro documento.
<img :src="$withBase('/img/container-1.png')">

Para centrar un contenedor utilizamos `mx-auto`
```html
<div class="container mx-auto">
  <!-- ... -->
</div>
```





