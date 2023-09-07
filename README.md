# Descripción de la Elaboración del Proyecto

Esta aplicación, creada sólo a nivel Front-End, fue elaborada siguiendo y cumpliendo las instrucciones presentadas más adelante.

A nivel de código, el proyecto presenta la estructuración de Rutas que permiten renderizar adecuadamente cada componente y presentar de forma dinámica la información solicitada al usuario. 

Gracias a Redux, cada componente puede tener acceso a las actions (acciones) que necesita, así como el estado global presente en el archivo reducer.js, y obtener la información que le corresponde utilizar.

La aplicación presenta un componente de Error el cual se presentará cada vez que el usuario intente acceder a una Ruta de la aplicación que no exista. Cuenta además con diseño Responsive en cada una de las vistas.

# Tecnologías Empleadas

* Lenguajes: JavaScript, HTML, CSS, CSS Module.

* Front-End: 
    * React + Vite.
    * React-Redux.

## Descripción (Desafío)

El desafío consiste en maquetar dos pantallas de una app de quiz y agregar la funcionalidad. 

## Seguí estos pasos:

* Maquetar estas dos pantallas del quiz preferentemente en React: https://www.figma.com/file/ePrULdgqR9VCBHEOzIP4bB/UIFresh-quiz-app-ui?type=design&node-id=0%3A1&mode=dev

* El maquetado tiene que ser responsive. Tiene que adaptarse a todas las pantallas.

* Programar el quiz de acuerdo con las preguntas que vienen en el endpoint

* Que las opciones carguen en el front de manera aleatoria.

* La opción 1 es siempre la respuesta correcta

* Cuando el usuario tocar en una opción, que se muestre la opción correcta con color azul y la equivocada (si existe) con el color rojo y muestra el botón de "Next".

* Al tocar en Next que cargue la próxima pregunta.

* Cuando llegar al final de las preguntas que se muestre un mensaje (puede ser un alert()) con los puntos que el usuario hizo.

## Endpoints para los datos:
* Profile: https://quiz-7.com/profile.json

* Categorías: https://quiz-7.com/categories.json

* Preguntas y respuestas de las categorías:
1. https://quiz-7.com/questions/1.json
2. https://quiz-7.com/questions/2.json
3. https://quiz-7.com/questions/3.json
4. https://quiz-7.com/questions/4.json
5. https://quiz-7.com/questions/5.json
6. https://quiz-7.com/questions/6.json

* Imágenes de las categorías:
1. https://quiz-7.com/media/basketball.png
2. https://quiz-7.com/media/calculator.png
3. https://quiz-7.com/media/calendar.png
4. https://quiz-7.com/media/chemistry.png
5. https://quiz-7.com/media/dna.png
7. https://quiz-7.com/media/map.png

## Autor: David Olivo Alfonso Rodríguez
