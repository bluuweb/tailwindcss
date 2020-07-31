# React + Tailwind
[https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/)


## App
```
npx create-react-app appTailwind
```

## Instalaciones
[https://tailwindcss.com/docs/installation/#3-create-your-tailwind-config-file-optional](https://tailwindcss.com/docs/installation/#3-create-your-tailwind-config-file-optional)
```
npm install tailwindcss postcss-cli autoprefixer -D
npx tailwindcss init
```

## postCSS
[https://tailwindcss.com/docs/installation/#using-tailwind-with-postcss](https://tailwindcss.com/docs/installation/#using-tailwind-with-postcss)
```
postcss.config.js
```

```js
module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
}
```

## Tailwind.css
Crear un directorio ``src/assets/tailwind.css`` y en su interior:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.btn {
    @apply py-2 px-4 rounded;
}

.btn-blue {
    @apply bg-blue-500 text-white;
}

.btn-blue:hover {
    @apply bg-blue-700;
}

.card {
    @apply rounded overflow-hidden shadow-lg;
}
```

## Package.json
```json
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

## index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## App.jsx
```jsx
import React from 'react'
import Card from './components/Card'


const App = () => {

    return (
        <div className='container mx-auto'>
            <h1>Tailwind CSS</h1>
            <h2>Incorporado con PostCss</h2>
            <button className="btn btn-blue btn-blue:hover">Botón</button>
            <div className="my-5 flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
            </div>
        </div>
    )
}

export default App
```

## Card
[https://tailwindcss.com/components/cards](https://tailwindcss.com/components/cards)
```jsx
import React from 'react'

const Card = ({photo}) => {
    return (
        <div className='card'>
            <img src={photo} alt="" className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
        </div>
    )
}

export default Card
```