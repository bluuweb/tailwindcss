# Animaciones
Instalación a través de npm

```
npm init -y
npm i tailwindcss
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
npx tailwindcss init
```

```
npx tailwindcss build src/estilos.css -o public/output.css
```

## Fuentes
[https://fonts.google.com/](https://fonts.google.com/)

```html
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap" rel="stylesheet">
```

```js
module.exports = {
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Raleway', 'Arial', 'sans-serif'],
    }
  },
  variants: {
  },
  plugins: [],
}
```

## Animación
[https://tailwindcss.com/docs/transition-timing-function/](https://tailwindcss.com/docs/transition-timing-function/)

```html
<a 
    href="#"
    class="
    inline-block text-sm px-4 py-2 leading-none 
    border rounded text-white border-white
    hover:border-transparent hover:text-teal-500 
    hover:bg-white mt-4 lg:mt-0 
    transition ease-in-outduration-500
    ">
        Download
</a>
```

## Border hover
[https://tailwindcss.com/docs/border-width#responsive-and-pseudo-class-variants](https://tailwindcss.com/docs/border-width#responsive-and-pseudo-class-variants)

```js
module.exports = {
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Raleway', 'Arial', 'sans-serif'],
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
```

```html
<div class="text-sm lg:flex-grow">
    <a href="#responsive-header"
        class="
        block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 
        border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 
        transition ease-in-out duration-500
        ">
        Docs
    </a>
    <a href="#responsive-header"
        class="
        block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 
        border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 
        transition ease-in-out duration-500
        ">
        Examples
    </a>
    <a href="#responsive-header"
        class="
        block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 
        border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 
        transition ease-in-out duration-500
        ">
        Blog
    </a>
</div>
```



