# Flexbox
[https://tailwindcss.com/docs/flex-direction](https://tailwindcss.com/docs/flex-direction)

[https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Flex Direction (Parent)

```
.flex-row
.flex-row-reverse
.flex-col
.flex-col-reverse
```

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="container mx-auto mt-5 text-center">

    <div class="flex">
        <div class="text-center bg-orange-500 p-4 m-2">1</div>
        <div class="text-center bg-orange-500 p-4 m-2">2</div>
        <div class="text-center bg-orange-500 p-4 m-2">3</div>
    </div>

</body>

</html>
```

## Flex Wrap
[https://tailwindcss.com/docs/flex-wrap](https://tailwindcss.com/docs/flex-wrap)

```
.flex-no-wrap
.flex-wrap
.flex-wrap-reverse
```

```html
<div class="flex flex-wrap">
    <div class="text-center bg-orange-500 p-4 m-2">1</div>
    <div class="text-center bg-orange-500 p-4 m-2">2</div>
    <div class="text-center bg-orange-500 p-4 m-2">3</div>
</div>
```

## Justify Content
[https://tailwindcss.com/docs/justify-content](https://tailwindcss.com/docs/justify-content)

```
.justify-start
.justify-center
.justify-end
.justify-between
.justify-around
```

```html
<div class="flex justify-between">
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">1</div>
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">2</div>
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">3</div>
</div>
```

## Align Items
[https://tailwindcss.com/docs/align-items](https://tailwindcss.com/docs/align-items)

```
.items-stretch
.items-start
.items-center
.items-end
.items-baseline
```

```html
<div class="flex justify-between h-64 items-center bg-gray-400">
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">1</div>
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">2</div>
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">3</div>
</div>
```

## Align Content
[https://tailwindcss.com/docs/align-content](https://tailwindcss.com/docs/align-content)

```
.content-start
.content-center
.content-end
.content-between
.content-around
```

```html
<div class="h-64 bg-gray-400 flex flex-wrap justify-between content-between">
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">1</div>
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">2</div>
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">3</div>
</div>
```

## Align Self (Children)
[https://tailwindcss.com/docs/align-self](https://tailwindcss.com/docs/align-self)

```
.self-auto
.self-start
.self-center
.self-end
.self-stretch
```

```html
<div class="h-64 bg-gray-400 flex items-start flex-wrap">
    <div class="self-end text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">1</div>
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">2</div>
    <div class="text-center bg-orange-500 p-4 m-2 border-solid border-4 border-gray-900">3</div>
</div>
```

## Flex
[https://tailwindcss.com/docs/flex](https://tailwindcss.com/docs/flex)

```
.flex-initial
.flex-1
.flex-auto
.flex-none
```

```html
<div class="bg-gray-400 flex">
    <div class="text-center bg-orange-500 p-4 m-2">1</div>
    <div class="flex-1 text-center bg-orange-500 p-4 m-2 ">2</div>
    <div class="text-center bg-orange-500 p-4 m-2">3</div>
</div>
```




