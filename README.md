# simple-cart `(Goncy Challenges for Github)`
* The main object from this project for me is how use data (products) and ...
* ... add product buton that use a counter

  * source [Goncy Challenges](https://github.com/goncy/interview-challenges/tree/main/simple-cart)
  * `(Twitch streaming), (YOUTUBE IS PENDING)`


# Ejercicio de entrevista, carrito simple

Este proyecto tiene 3 milestones o entregas, no es necesario que cumplas todas para dar el proyecto por terminado, ajustalo a tus necesidades y conocimientos. Cada entrega se vuelve un poco más difícil.

Podés clonarlo o usarlo directamentes desde [codesandbox](https://codesandbox.io/s/github/goncy/interview-challenges/tree/main/simple-cart) 

## Entrega 1 [x]
Nuestro equipo de diseño nos dio este proyecto con la UI ya terminada, pero como todavía no habíamos definido que usar para los estilos, hicieron todo con estilos globales. Elegí tu solución de estilos preferida y portá esos estilos. Puede ser la que quieras, algunas como: CSS Modules, SASS + CSS Modules, TailwindCSS, Styled Components, Emotion, ChakraUI, Material UI, etc.

## Entrega 2 [x]
Nuestro equipo de diseño nos dio este proyecto con la UI ya terminada, pero todavía tenemos que implementar la lógica.

* Cada producto debe agregarse al carrito al clickear "Agregar"
* Si tenemos algún elemento del producto en el carrito debemos cambiar el botón de "Agregar" por uno que tenga un botón de "-", la cantidad de productos que tenemos en el carrito y un botón de "+", clickear los botones correspondientes va a sumar o restar elementos del carrito. Si tenía un producto en el carrito y clickeo en "-" debe eliminar el producto del carrito.
* El botón inferior nos marca cuantos productos tenemos en el carrito y su total, mostrar los valores reales del carrito en todo momento.

## Entrega 3
La Product Manager nos dijo que quieren usar esta misma lógica de carrito en otro proyecto. Debemos pasar toda la lógica de carrito de nuestro componente a context y luego usarlo. Debe ser lo suficientemente fácil de usar y medianamente genérico como para usarlo en otros proyectos.



# My notes

### commits guide

* commit 7 - get the total cost from products in cart
  * useMemo, reducer
* commit 6 - correct one line of code from the previous commit
* commit 5 - use The Map object: `(Run <App2 />)`
  * Code refactor
  * No esta muy bueno mutar un objeto (por ejemplo queremos saber si un producto esta en el objeto, problema: si tenemos 100 productos tenemos que iterar mucho, problema 2: si queremos eliminar un objeto)
  * Map
  * Lazy Initializacion
  * Ahora si el contador de un producto llega a cero, el boton agregar volvera a aparecer
* commit 4 - use cart logic:
  * the "Agregar" Button is working, like is required in the challenge:
  <!-- Si tenemos algún elemento del producto en el carrito debemos cambiar el botón de "Agregar" por uno que tenga un botón de "-", la cantidad de productos que tenemos en el carrito y un botón de "+", clickear los botones correspondientes va a sumar o restar elementos del carrito. Si tenía un producto en el carrito y clickeo en "-" debe eliminar el producto del carrito. -->
* Im using ChakraUI for styles
* Pending `(How ignore a file correctly)`


[x] Vite Project