# Grid
[https://tailwindcss.com/docs/grid-template-columns](https://tailwindcss.com/docs/grid-template-columns)

<img :src="$withBase('/img/grid-1.png')">


## Grid Template Columns
[https://tailwindcss.com/docs/grid-template-columns](https://tailwindcss.com/docs/grid-template-columns)
```html
<div class="grid grid-cols-3">
    <div class="bg-green-400">A</div>
    <div class="bg-green-500">B</div>
    <div class="bg-green-600">C</div>
    <div class="bg-green-700">D</div>
    <div class="bg-green-800">E</div>
    <div class="bg-green-900">F</div>
</div>
```

## Gap
[https://tailwindcss.com/docs/gap](https://tailwindcss.com/docs/gap)

```html
<div class="grid grid-cols-3 gap-4 my-4">
    <div class="bg-green-400">A</div>
    <div class="bg-green-500">B</div>
    <div class="bg-green-600">C</div>
    <div class="bg-green-700">D</div>
    <div class="bg-green-800">E</div>
    <div class="bg-green-900">F</div>
</div>
```
## Grid Responsive
```html
<body class="container mx-auto mt-5 text-center">

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
    </div>

</body>
```

## Grid Column Start / End
[https://tailwindcss.com/docs/grid-column](https://tailwindcss.com/docs/grid-column)
```html
<body class="container mx-auto mt-5 text-center">

    <!-- 12 columnas -->
    <div class="grid grid-cols-12 gap-2 my-2">
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
        <div class="bg-pink-400">A</div>
    </div>

    <!-- parecido a bootstrap 4 -->
    <div class="grid grid-cols-12 gap-2 my-2">
        <div class="bg-pink-800 col-span-3">A</div>
        <div class="bg-pink-800 col-span-3">A</div>
        <div class="bg-pink-800 col-span-3">A</div>
        <div class="bg-pink-800 col-span-3">A</div>
    </div>

    <!-- ejemplo col-span -->
    <div class="grid grid-cols-3 gap-2 my-2">
        <div class="bg-blue-500 col-span-3">A</div>
        <div class="bg-blue-500 col-span-2">A</div>
        <div class="bg-blue-500 col-span-1">A</div>
        <div class="bg-blue-500 col-span-3">A</div>
    </div>

    <!-- ejemplo col-start -->
    <div class="grid grid-cols-3 gap-2 my-2">
        <div class="bg-green-500 col-start-1 col-span-1">A</div>
        <div class="bg-green-500 col-start-1 col-span-3">B</div>
        <div class="bg-green-500 col-span-1">A</div>
        <div class="bg-green-500 col-span-3">A</div>
    </div>

    <!-- ejemplo col-end -->
    <div class="grid grid-cols-3 gap-2 my-2">
        <div class="bg-orange-500 col-end-4 col-span-1">A</div>
        <div class="bg-orange-500 col-start-1 col-span-3">B</div>
        <div class="bg-orange-500 col-span-1">A</div>
        <div class="bg-orange-500 col-span-3">A</div>
    </div>

</body>
```

## Grid Template Rows
[https://tailwindcss.com/docs/grid-template-rows](https://tailwindcss.com/docs/grid-template-rows)

```html
<div class="grid grid-rows-3 gap-2">
    <div class="bg-orange-400">A</div>
    <div class="bg-orange-400">A</div>
    <div class="bg-orange-400">A</div>
</div>
```

## Grid Row Start / End
[https://tailwindcss.com/docs/grid-row](https://tailwindcss.com/docs/grid-row)

```html
<div class="grid grid-rows-3 grid-cols-3 gap-2">
    <div class="bg-orange-400 row-span-3">A</div>
    <div class="bg-orange-400 col-span-2">A</div>
    <div class="bg-orange-400 col-span-2">A</div>
    <div class="bg-orange-400 col-span-2">A</div>
</div>
```

## Práctica
[https://coderthemes.com/hyper/saas/index.html](https://coderthemes.com/hyper/saas/index.html)

```html
<div class="grid grid-rows-2 grid-cols-4 gap-2 my-2">
    <div class="bg-pink-500 col-span-1">A</div>
    <div class="bg-pink-500 col-span-1">A</div>
    <div class="bg-pink-500 col-span-2 row-span-2">B</div>
    <div class="bg-pink-500 col-span-1">C</div>
    <div class="bg-pink-500 col-span-1">C</div>
</div>

<!-- Responsive -->
<div class="grid grid-rows-1 sm:grid-rows-2 grid-cols-1 sm:grid-cols-4 gap-2">
    <div class="bg-pink-500 col-span-1">A</div>
    <div class="bg-pink-500 col-span-1">A</div>
    <div class="bg-pink-500 col-span-1 sm:col-span-2 row-span-1 sm:row-span-2">B</div>
    <div class="bg-pink-500 col-span-1">C</div>
    <div class="bg-pink-500 col-span-1">C</div>
</div>
```


