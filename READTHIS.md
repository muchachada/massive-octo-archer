Lecturas/videos recomendadas/os para los devs
===================================

No hay libros o videos específicos para aprender una tecnología pero, pero sí algunas resources que
están copadas, como guías de estilo de código, explicaciones de algo en particular, o cosas así.

## AngularJS

[Video tutorial basic AngularJS] Encontré este video tutorial basic de AngularJS, para después de adentrarse de lleno al libro. 
https://www.youtube.com/watch?v=e1xizBsBLZ0&list=PL6LPvqvHdclbrYqIdNLm5zOodZrebZaln

[Guía de estilo de AngularJS](https://github.com/johnpapa/angularjs-styleguide) Necesaria para dos cosas:
Escribir un código un poco más lindo y que todos escribamos de manera consistente y nos podamos entender.

## Material Design

[Material Design Guidelines](http://www.google.com/design/spec/material-design/introduction.html) Esta es
la guía de diseño de Google sobre su nuevo concepto de diseño: Material Design. Es la guía que vamos a
seguir para el diseño de UX.

[Polymer Paper Elements](http://www.polymer-project.org/docs/elements/) Esta es la documentación sobre la
implementación de los elementos de Material Design en Web Componentes por Polymer. En este momento, la
compatibilidad con AngularJS es baja. Se pueden usar como cualquier elemento web, pero hay cosas que no
vamos a tener, como el two-way-binding. Hay dos soluciones: Esperar AngularJS 2.0 que incluye soporte
para Web Components o, lo que vamos a hacer, usar el 
[port de Paper Elements a Angular Directives](https://material.angularjs.org/). No tiene los elementos
core o layout, pero podemos usar esos de Polymer. However, si vemos que la cosa no da, hacemos una UI
inicial más o menos (Bootstrap, semantic-ui, Foundation) y nos vamos a centrar en la lógica y dejamos
el diseño para lo último.
