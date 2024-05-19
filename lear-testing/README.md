# [TESTING](https://web.dev/learn/testing/welcome?hl=es-419)

El testing (y el software en general) son un medio para lograr un fin, no un objetivo en sí.

El testing es un proceso en el que se ejecuta código de software de maneras especifícas para garantizar que se comporte según lo previsto. En otras palabras, es código que confirmamos que se ejecute de forma correcta, sin arrojar errores.

* Pruebas manuales: Pueden ser las pruebas de exploración.
* Pruebas automatizadas:

## [ASSERTIONS Y TESTS INDEPENDIENTES](https://web.dev/learn/testing/get-started/what-testing-is?hl=es-419)

La mayoría de las bibliotecas o frameworks de testing proporcionan 2 primitivas principales que facilitan la escritura de las pruebas: **assertions** y **una forma para definir tests independientes (test y suite)**.

* Assertions (afirmaciones): Son una forma de combinar la verificación de un resultado y causar un error si algo sale mal.

  ```javascript
  import { fibonacci } from "../src/math.js";
  import { assert } from "a-made-up-testing-library";

  assert.equal(fibonacci(0), 0, "Invalid 0th fibonacci result");
  assert.equal(fibonacci(13), 233, "Invalid 13th fibonacci result");
  ```

* Tests independientes (test y suite): Se agrupan de forma opcional en suites (paquetes). En este contexto de pruebas de software, test como sustantivo se refiere a un caso de prueba. Un caso de prueba es una situación única, independiente y abordable.

  ```javascript
  import { fibonacci, catalan } from "../src/math.js";
  import { assert, test, suite } from "a-made-up-testing-library";

  suite("math tests", () => {
    test("fibonacci function", () => {
      assert.equal(fibonacci(0), 0, "Invalid 0th fibonacci result");
      assert.equal(fibonacci(13), 233, "Invalid 13th fibonacci result");
    });
    test("relationship between sequences", () => {
      const numberToCheck = 4;
      const fib = fibonacci(numberToCheck);
      const cat = catalan(numberToCheck);
      assert.isAbove(fib, cat);
    });
  });
  ```

> ## Casos de prueba
>
> Una forma de analizar cada caso de prueba es usar las "tres A" de la prueba de unidades (unit testing):
>
> * Arrange (Organizar): Organiza algunos valores o estados (podrían ser datos de entrada hard-coded).
>
> * Act (Actuar): Realizar una acción, como llamar a un método.
>
> * Assert (Confirmar): Confirma los valores de salida o el estado actualizado (con assert).
>
> Una Unit Test se encarga de probar partes menores del software (a menudo, se enfocan en un solo archivo y, en este caso, solo el resultado de una sola función).
>
> NOTA: Los tipos de prueba a menudo se nombran según su alcance o escala, por ejemplo: Unit Testing, Component Testing, Visual Testing, Integration Testing, y/o E2E Testing.
>
> Las pruebas más simples, como las Unit Tests, suelen ser más rápidas de ejecutarse, más fáciles de escribir (para tener más) y probar con un alcance limitado, mientras que las pruebas complejas, como las E2E, son difíciles de escribir, pero pueden probar un alcance más amplio.
>
> ![Piramide del testing](https://web.dev/static/learn/testing/images/testing-pyramid.jpg?hl=es-419)
> Esta es la piramide del testing

## [DÓNDE SE EJECUTAN LAS PRUEBAS](https://web.dev/learn/testing/get-started/where-tests-run?hl=es-419)

Las pruebas automatizadas se pueden ejecutar mediante:

* Secuencia de comandos de forma manual (scripts): Los proyectos web suelen tener un ARCHIVO DE CONFIGURACION (normalmente el package.json), que contiene las dependencias del proyecto y otra información, además de secuencias de comandos auxiliares (scripts) que pueden incluir la manera de compilar (build), ejecutar (run) o probar (test) tu proyecto.

  ```javascript
  {
    "name": "example-project",
    "scripts": {
      "start": "node server.js",
      "test": "vitest --run"
    }
  }
  ```

* Asistente de un framework de testing, que se suele llamar EJECUTOR DE TESTS (TEST RUNNER), para encontrar y ejecutar pruebas: Por ejemplo, Vitest. Suelen tener un comando corto que se puede invocar para ejecutar algunos o todos los tests y, posiblemente, un MODO WATCHER que vuelve a ejecutar los tests a medida que los guardas. Algunos test runners permiten marcar tests como ONLY en el código, lo que significa que solo estas se activarán cuando se ejecuten los tests.

NOTA: Github posee un environment como el de Bitbucket, llamado [GitHub Actions](https://github.com/features/actions).

## [ENTORNO DE PRUEBAS](https://web.dev/learn/testing/get-started/testing-environment?hl=es-419)

El entorno de pruebas puede considerarse como dos componentes:

* Entorno de ejecución que usas para ejecutar la prueba (como Node, Deno, Bun o el navegador): Estos entornos no incluyen las API's que podrías esperar en un navegador, como crear y trabajar con elementos DOM y HTML. Por otro lado, si ejecutas las pruebas en un navegador, es posible que las API's integradas que esperas en estos entornos de ejecución no estén disponibles sin polyfills o trabajo adicional.

* Las API's disponibles: Las web (Del navegador) o de Node. Por ejemplo, hablando de las API's del navegador

> ## API's del navegador (Emular un navegador)
>
> Muchos frameworks de testing, como Vitest, tienen la opción de EMULAR EL ENTORNO DE API DEL NAVEGADOR (EMULATE THE BROWSER'S API ENVIRONMENT) sin ejecutar un navegador. Este framework usa internamente una biblioteca llamada JSDOM. Es una buena opción para pruebas de componentes simples.
>
> Una característica común de las bibliotecas de emulación es que, aunque pueden emular un navegador (por ejemplo, el DOM, los elementos y las cookies), no tienen un componente visual. Significa que proporcionarán una manera imperativa de trabajar con elementos HTML y otras primitivas, pero no se podrá renderizar el resultado en una imagen o pantalla, ni verificar la posición de un elemento en píxeles en la página.
>
> La emulación de un navegador es una práctica consolidada, pero siempre diferirá del uso de un navegador real, por ejemplo: JSDOM no incluye un motor de diseño, por lo que no hay forma de verificar el tamaño de un elemento ni probar un gesto complejo, como deslizar el dedo. Las diferencias también pueden ser sutiles y desconocidas, por lo que es mejor que las pruebas basadas en JSDOM sean concisas.

> ## Controlar un navegador real
> La mejor opción es usar un navegador real.
>
> En la práctica, los entornos de ejecución de prueba que admiten el navegador iniciarán y controlarán las instancias de un navegador real, incluso si ejecutan "start" dentro de Node.js.
>
> Si controlas un navegador como parte de una prueba, este se abrirá tal como lo haría un usuario, lo que permitirá que la pruebe lo controle cargando URL's, HTML y JS personalizados, o lo que sea necesario para la prueba. Luego, se puede escribir código para que actúe como un usuario, por ejemplo, que de clicks o introduzca valores en un input.
>
> Por ejemplo, en las pruebas E2E esto se suele hacer. También, a medida que avanzas y automatizas estas pruebas, puedes ejecutar un navegador en modo HEADLESS, que oculta la UI.
>
> Las herramientas modernas como WEBDRIVERIO o WEB TEST RUNNER pueden controlar todos los navegadores  principales y hasta ejecutar varias instancias al mismo tiempo. Estos navegadores pueden ejecutarse junto al test runner (Por ejemplo, en la propia computadora o como parte de una acción de IC) o se pueden subcontratar a servicios comerciales externos que los ejecutarán por uno.

> ## Conclusión
> A medida que aumenta la complejidad de las pruebas, se vuelve cada vez más importante usar un navegador real.
>
> * Para pruebas que usan funciones mínimas o nulas del DOM, el entorno no importa.
>
> * Para pruebas de componentes pequeños, JSDOM puede ser adecuado.
>
> * Las pruebas más grandes, por ejemplo, las pruebas E2E, tienen sentido para ejecutarse por completo en un navegador real.

## [TIPOS DE PRUEBAS AUTOMATIZADAS](https://web.dev/learn/testing/get-started/test-types?hl=es-419)

Los nombres que se asignan a los diferentes tipos de pruebas suelen tener temas en común en todas las bases de código, pero no tienen definiciones particularmente rigurosas. Otros recursos podrían proporcionar definiciones diferentes.

Unit test y tests de componentes, se pueden colocar ambos en una parte baja de la pirámide de pruebas (o en otra forma), ya que tienen una complejidad baja y se pueden ejecutar rápidamente, pero es posible que no tengan tanta utilidad como una prueba de integración más compleja.

> ## [Tipos comunes de pruebas](https://web.dev/articles/ta-types?hl=es-419)
> 
> * **UNIT TESTS - PRUEBAS DE UNIDADES:**
> Tienen el menor alcance y suelen usarse para probar pequeñas partes del código, o código sin estado, de manera casi matemática: si proporciono tu código con las entradas X, Y y Z, el resultado debería ser A, B y C.
>
>   El código con pruebas de unidades normalmente no tendrá dependencias externas, como la recuperación desde una red o el uso implícita de otras funciones o bibliotecas. Es un nodo de árbol de tu código que puedes "cortar" y probar por su cuenta.
>
>   Suelen ser rápidas de escribir y ejecutarse, siempre es posible que las unit test de código pequeñas no proporcionen información útil. A menudo, la falta de interacción de una unidad de código con otro código significa que es mejor realizar pruebas en un nivel superior para reducir el riesgo.
>
> * **TESTS DE COMPONENTES:** Para los desarrolladores web, el nombre "componente" está sobrecargado, lo que a menudo significa un componente visible para el usuario (componente web o de React). Su definición más general es un fragmento de trabajo que se puede probar, por ejemplo, una clase con dependencias externas. Para que se pruebe de manera efectiva, este componente debe omitirse o simular sus dependencias.
>
>   Las prácticas modernas de desarrollo web se basan en el concepto de un componente, las pruebas de componentes son una forma práctica de pensar en las pruebas: por ejemplo, puedes decidir que cada componente necesita una prueba. Las pruebas de componentes también son fáciles de realizar en contextos en los que un solo desarrollador o un equipo pequeño afirman que son propietarios claros sobre un componente. Sin embargo, puede ser difícil simular dependencias complejas.
>
> * **TESTS DE INTEGRACION:** Por lo general, se prueba una pequeña agrupación de componentes, módulos, subsistemas u otras partes significativas de tu código para garantizar que funcionen correctamente. Es una definición muy imprecisa. Si eres desarrollador web, imagina que el código que estás probando no es la compilación de producción real de tu sitio (ni siquiera cerca), pero de todos modos conecta varios componentes relacionados de tu sistema. En otras palabras, en qué tan bien funcionan juntos. Los ejemplos típicos de pruebas de integración son las pruebas de API o de componentes.
>
>   Esto incluso puede incluir dependencias "reales", como una base de datos externa en modo de prueba, en lugar de una pura simulación. Por ejemplo, en lugar de decir que query() siempre mostrará las mismas dos entradas, la prueba de integración puede confirmar que una base de datos de prueba tiene algo en ella. Los datos en sí son menos importantes, pero ahora probarás que se pueda conectar una base de datos y que se pueda consultar correctamente.
>
>   Es posible escribir pruebas de integración relativamente simples con implicaciones de amplio rango que se pueden verificar mediante aserciones, ya que una sola acción conectada a varios componentes puede causar una serie de efectos medibles. Debido a esto, las pruebas de integración pueden demostrar de manera eficaz que tu sistema complejo se ejecutará según lo previsto. Sin embargo, pueden ser difíciles de escribir y mantener y pueden introducir una complejidad innecesaria. Por ejemplo, escribir un FakeUserService para una prueba de integración agrega el requisito de que tanto esta como RealUserService tengan que implementar un UserService.
>
> * **TESTS DE HUMO:** Son pruebas que deben completarse muy rápido y determinar si la base de código se encuentra en un estado razonable. En la práctica, esto significa, en gran medida, realizar pruebas simples en el código que tiene efectos muy variados en tu experiencia.
>
>   Por ejemplo, en una app web con acceso de gran tamaño, esto podría garantizar que el sistema de acceso y autenticación funcione, ya que sin él la app no se puede usar y las pruebas adicionales son irrelevantes.
>
>   Estas pruebas pueden ser una buena opción para ejecutarlas bajo la secuencia de comandos test de tu package.json en una base de código grande. Las pruebas manuales también pueden actuar como una especie de prueba de humo.
>
> * **TESTS DE REGRESIÓN:** Son un tipo de prueba de humo que garantiza que las funciones existentes sigan funcionando o que no se vuelvan a introducir errores anteriores después de una versión nueva o el desarrollo de otra función.
>
>   Esto se relaciona con el concepto de desarrollo basado en pruebas (TDD). Los casos de prueba escritos para activar explícitamente un error y que luego se usan para garantizar que se corrija el error cuentan como casos de prueba de regresión, ya que su existencia debería impedir que se muestre el mismo error.
>
>   Sin embargo, las pruebas de regresión pueden ser un problema sin una gran solución. Es un término que suelen mencionarse las necesidades empresariales: a medida que se desarrollan los atributos, es importante que los anteriores no se rompan. Una base de código bien probada debería poder mantener esto, pero las bases de código reales no siempre están a la altura de lo ideal.
>
> * **TESTS VISUALES - TESTS PERCEPTUALES:** Implican tomar capturas de pantalla o videos del estado de un sitio web para comparar un estado óptimo conocido (como una captura de pantalla anterior) con la ejecución de prueba actual. Por naturaleza, requiere que se ejecute un navegador real para que pueda renderizar código HTML, CSS y otras partes del sitio web.
>
>   En lugar de probar visualmente los tests E2E que ejecutan toda la base de código, puede ser útil crear "arneses" de HTML que rendericen solo ciertos componentes, en especial en diferentes tamaños de pantalla, para activar IU responsivas.
>
>   Si fallan las pruebas visuales, puede ser una buena señal de otros tipos de fallas. Sin embargo, las IU complejas pueden fallar las pruebas visuales por motivos no relacionados con las funciones que intentas probar, como otras funciones nuevas que cambian la apariencia de la IU o incluso un emoji nuevo de renderización de la versión del SO diferente de las versiones anteriores.
>
>   Las pruebas que necesitan actualizarse cada vez que el código prueban cambios tienden a ser demasiado prescriptivas porque no proporcionan comentarios útiles; su falla es casi esperada. Además, las pruebas visuales tienden a caer en esta trampa.
>
> * **TESTS E2E - PRUEBAS DE EXTREMO A EXTREMO:** Suelen estar en la parte superior de la pirámide de pruebas. Describen una interacción de experiencia completa con tu app web o sitio web, quizás centrada en una función específica y, por lo general, se ejecutan dentro de un navegador controlado por un agente como WebdriverIO, Selenium o Puppeteer, que puede ejecutar tu base de código de la misma forma en que se implementaría en producción (aunque a menudo se entregan en localhost).
>
>   Según tu sitio, esto puede implicar que accedas como usuario de prueba, realizar acciones importantes y confirmar que tu sitio o sistema esté en el estado correcto. Pueden ser muy potentes, pero a veces difíciles de mantener.
>
>   Algunas tácticas para simplificarlas pueden incluir reducir su alcance o simular componentes específicos cuando sea relevante. Por ejemplo, si los usuarios necesitan acceder a tu sitio, pero acceder no es la función que estás probando, te recomendamos establecer una marca para los entornos de pruebas que permita que el controlador de pruebas actúe como un usuario sin acceder ni crear las cookies asociadas.
>
>   Pueden ser maneras muy potentes de realizar pruebas en grandes secciones de la base de código al mismo tiempo, estas pruebas a gran escala corren el riesgo de ser inestables o poco confiables debido a su dependencia de sistemas externos. A menudo, también pueden dejar muchos datos de prueba en tu base de datos si, por ejemplo, cada prueba crea o modifica una entrada. Acumular datos restantes como este puede dificultar la determinación de cómo falló una prueba.
>
> * **TESTS DE LA API:** Pueden hacer referencia a confirmar el comportamiento de las APIs que proporciona tu software o acceder a las APIs del mundo real (posiblemente activas) para confirmar su comportamiento. De cualquier manera, esto tiende a probar las abstracciones entre sistemas (cómo se comunicarán finalmente entre sí) sin integrarlas en realidad como en una prueba de integración.
>
>   Pueden proporcionar un precursor básico de las pruebas de integración sin la sobrecarga de ejecutar los sistemas entre los que pruebas las conexiones. Sin embargo, las pruebas de los sistemas del mundo real pueden ser inestables.
>
> * **OTROS TIPOS DE TESTS:** Algunos ejemplos interesantes son los siguientes:
>
>   * Tests manuales.
>   * Tests de aceptación, un tipo de prueba manual popularizada por Agile, confirma que el producto "satisface las necesidades del usuario".
>   * Tests de caos son ingresar datos aleatorios para ver qué sucede a fin de garantizar que un sitio no falle si se ingresan datos incorrectos.
>   * Tests de fallas simulan fallas de forma intencional en sistemas complejos, como fallas de red, para garantizar que el código que se está probando responda de forma controlada.
>   * Tests de compilación confirman que se pueden generar los artefactos de compilación de una base de código mediante la verificación de su existencia o de cuál es su contenido. Este tipo de prueba puede ser útil para verificar el resultado de un CMS complejo.
>
> * **TESTS DE ESFUERZO O CARGA:** Son un tipo de prueba de los sistemas de producción para garantizar que puedan aceptar una gran cantidad de tráfico. Está más asociado con el diseño de sistemas grandes que con la prueba de bases de código más comunes.
>

> ## Cobertura de código
>
> Es posible medir qué porcentaje del código se prueba con las pruebas automatizadas y, luego, informarlo como una estadística a lo largo del tiempo. No recomendamos que tengas como objetivo una cobertura del 100% del código, ya que puede generar una sobrecarga innecesaria, así como pruebas sencillas o mal diseñadas que no abarcan los casos de uso en profundidad.
>
> La cobertura en sí misma también puede ser una herramienta útil a la hora de escribir o trabajar en tus pruebas. Cuando se muestra un porcentaje o un desglose línea por línea del código que se prueba en una sola prueba, puedes obtener información valiosa sobre lo que falta o lo que se puede probar a continuación.
>

## GLOSARIO

* **Race condition (condición de carrera)**: En el contexto de las PR's, significa que se aceptaron varios cambios "a la vez", y se afectan entre sí de maneras sutiles y no probadas.

* **Flaky tests (Pruebas inestables)**: Las pruebas no son reproducibles o prueban un código "frágil", es decir, pueden pasar y fallar sin cambios en el código.

* **CI (Continue Integration) - IC (Integración Continua)**: Es una práctica en el desarrollo de software donde los cambios en el código se integran automáticamente en un repositorio compartido varias veces al día. Esto implica que cada vez que un desarrollador hace un cambio en el código, este cambio se integra en el código principal del proyecto y se ejecutan pruebas automatizadas para verificar su funcionamiento correcto. El objetivo principal de la IC es detectar y solucionar problemas de manera temprana en el ciclo de desarrollo, lo que permite a los equipos de desarrollo entregar software de alta calidad de manera más rápida y eficiente.

* **Ejecutor de pruebas - Test Runners**: Proporcionan la estructura y también para organizar, buscar y ejecutar tests. Como Jasmine, Jest, web test runner.

* **Framework de automatización de pruebas**: Proporcionan las herramientas y API necesarias para interactuar con la aplicación y realizar las pruebas en sí mismas. Como Vitest, webDriverIO.

* **Herramientas de automatización de pruebas - Herramientas para interactuar con el navegador**: Permiten interactuar con navegadores web, por medio de una API que proporcionan a los desarrolladores para controlar acciones en el navegador.

* **Entorno de ejecución de pruebas**: Un entorno de ejecución de pruebas es un conjunto de herramientas, bibliotecas y configuraciones que permiten ejecutar pruebas de software de manera efectiva. Proporciona el contexto necesario para ejecutar pruebas y obtener resultados significativos. Estos entornos pueden variar dependiendo del tipo de prueba (unitarias, de integración, funcionales, etc.) y del entorno de desarrollo específico.

  Algunas características comunes de un entorno de ejecución de pruebas incluyen:

    - Dependencias y configuraciones: Esto incluye todas las bibliotecas, frameworks y herramientas necesarias para ejecutar las pruebas, así como la configuración de los entornos de prueba, como bases de datos o servidores.

    - Interfaz de ejecución: Proporciona una interfaz que permite ejecutar pruebas de manera fácil y eficiente. Esto puede ser a través de la línea de comandos, una interfaz gráfica de usuario o incluso integraciones con entornos de desarrollo como IDEs.

    - Informes de resultados: Un entorno de ejecución de pruebas normalmente generará informes detallados sobre el resultado de las pruebas, incluyendo información sobre pruebas pasadas, fallidas o ignoradas, así como cobertura de código si está disponible.

    - Depuración y diagnóstico: Proporciona herramientas y funcionalidades para depurar pruebas en caso de fallos, ayudando a identificar y corregir problemas de manera eficiente.

     - Integraciones: Puede integrarse con otras herramientas y sistemas en el flujo de trabajo de desarrollo, como control de versiones, herramientas de construcción, sistemas de integración continua, entre otros.

  En resumen, un entorno de ejecución de pruebas es un componente fundamental en el proceso de desarrollo de software, ya que proporciona las herramientas y el contexto necesarios para ejecutar pruebas de manera efectiva y obtener resultados significativos para garantizar la calidad del software.
