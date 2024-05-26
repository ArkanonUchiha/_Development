# BUENAS PRACTICAS

* Usar constantes para crear funciones. Esto evitará la sobreesctirura de la misma.

  ```javascript
    const miFuncion = () => {};
  ```

* Usar el modo estricto. Esto evitará malas prácticas en el código.
  * Este modo suele ser obligatorio cuando se utiliza el patrón módulo.
  * El modo estricto se encuentra activado de forma predeterminada en las clases de Javascript.

  ```javascript
    'use strict'
  ```

* Usar el patrón módulo. Esto encapsulará el código y evitará que fuentes externas tengan acceso al mismo para leerlo/modificarlo.
  * El patrón de diseño por módulo es el más común en JS.
  * El patrón módulo, al final del mismo, siempre retorna un objeto que contiene las propiedades o elementos que serán públicas (las que pueden utilizarse o darse a conocer en el exterior del archivo). Todo lo demás permanece privado.

  ```javascript
    const myModule = (() => {
      const miFuncion = () => {};
      const miFuncion2 = () => {};

      return {
        miFuncion,
        segundaFuncion: miFuncion2
      };
    })();
  ```

* Refactorizar código (funciones, métodos, ciclos, validaciones, etc.). Hay que tener criterio para determinar qué cosas deben de refactorizarse.
  A veces, es mejor dejar un código claro y comprensible para su fácil lectura que ahorrarse unos espacios en blanco o algunas líneas de código.

* Crear métodos/funciones que estén destinadas a hacer una única cosa y evitar que en un solo lugar se hagan muchas acciones.

* Minificar el código creado.

* Muchos desarrolladores experimentados aconsejan trabajar con clases en lugar de los prototipos.

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.
> [!TIP]
> Optional information to help a user be more successful.
> [!IMPORTANT]  
> Crucial information necessary for users to succeed.
> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.
> [!CAUTION]
> Negative potential consequences of an action.

## SOBRE EL SCAFFOLDING

* En la carpeta assets se suelen poner aquellos recursos estáticos, o sea, que no cambiarán durante el proceso de building. Los empaquetadores usualmente no modifican esta carpeta agregandole símbolos a los nombres. Normalmente suelen ser archivos de imagenes, videos, hojas de estilo, etc.
