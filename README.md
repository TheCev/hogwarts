**Descripción**

Portafolio elaborado para la escuela de magia y hechicería Hogwarts.

**Tecnologías usadas**

Para la elaboración de este portafolio se ha hecho uso de las siguientes tegnologías, lenguajes, librerías y frameworks.

- Angular: framework para el frontend
- Angular Material: para la mayoría de los diseños y componentes
- Express: para el servidor
- Moment.js: para el cálculo de la edad de los personajes
- Typescript: como lenguaje para frontend
- Javacript: como lenguaje para el servidor
- Node: para la ejecución de la aplicación en el backend
- CSS: para los estilos
- HTML: para la estructura de las páginas
- Git: gestor de versines
- Github: como repositorio
- Heroku: como servicio para desplegar el portafolio

**Estructura del Proyecto**

A continuación se mostrara la estructura del proyecto excluyendo archivos no relevantes o que su presencia es absoluta y no han sido modificados o no es necesario tener conocimientos de ellos como: los archivos dentro del node_modules o el package.json.

- node_modules
•	e2e
•	src
o	app
	modules
•	students
o	components
o	services
•	characters
o	components
o	services
•	staff
o	components
o	services
	shared
•	components
•	services
o	assets
o	environment

**Especificación de Carpetas**

Se excluirán todas las carpetas la cuales no han sido modificadas o su contenido es más que sabido o irrelevante.

- *app*: la carpeta app almacena todos los módulos, componentes y o servicios de Angular, los archivos que se encuentran en esta carpeta son los archivos del root module y del root component, además del modulo para importar los módulos de material (material.modules.ts).

- *modules*: Esta carpeta almacena todos los módulos los cuales crean rutas en nuestro portafolio como el students, staff y el characters.

- *Components*: Las carpetas components almacenan todos los componentes del módulo en el cual se encuentren excepto el root component del módulo.

- *Services*: almacena los servicios que serán usados en dicho módulo.

**Módulos**

En este apartado se excluirá el app.module.ts

- *MaterialModule*: el material module es el módulo para importar y exportar todos los módulos externos e individuales de angular material, esta creado para exportar todos los módulos importado para luego ser usados en otros módulos.

- *SharedModule*: El shared module es un módulo creado con el fin de almacenar todos los componentes servicios que serán usado entre varios modulos, componentes o vistas; como el componente Table.

- *StaffModule*: el staff module tiene como función hacer dominio de las vistas para la ruta /staff de el portafolio, en esta ruta se muestra una tabla con todo el personal de la escuela.

- *StudentsModule*: el students module tiene como función hacer dominio de las vistas para la ruta /students y también a sus ruta hija /students/add y /students/* del portafolio, en estas rutas se manejara la tabla de estudiantes además de las solicitudes para los nuevos estudiantes.

CharacterModule: el carácter module tiene como función hacer dominio de las vistas para la ruta /characters del portafolio, en esta ruta se mostrara una lista desplegable conteniendo las casas de hechicería de Hogwarts y una tabla para mostrar los personajes de la casa seleccionada.
Componentes
	En esta sección se excluirá el app.component.ts
- *TableComponent*: el table component es el componente el cual maneja la lógica y vista de las tablas, este componente es reutilizado a lo largo de todo el portafolio para mostrar todos los datos obtenidos de las API proporcionadas.

- *CharacterComponent*: el character component es el root component para el  CharacterModule, manejando toda la lógica y la vista de la ruta /character, este componente contiene un titulo, una lista desplegable y una tabla con los personajes.

- *StaffComponent*: el staff component es el root component del StaffModule, este componente maneja toda la lógica y vista para la ruta /staff del portafolio, contiene un titulo y una tabla con el personal de la escuela.

- *StudentsComponent*: el students component es el root component del StudentsModule, este componente maneja toda la lógica y vista para la ruta /students del portafolio, contiene un titulo y una tabla con los estudiantes.

- *AddNewStudentComponent*: es el componente que se encarga de la lógica y de la vista para la ruta de /students/add, este contiene un formulario para las solicitudes de los nuevos estudiantes, las cuales se almacenaran localmente.

- *RequestsComponent*: es el componente que se encarga de la lógica y de la vista para la ruta de /students/requests, este contiene muestra una tabla de las solicitudes para los nuevos estudiantes, la tabla contiene 4 columnas: name, house, age y gender.

- *ProgressBarComponent*: este componente maneja la lógica y la vista para una barra de carga que se muestra cuando se está cargando contenido a la tabla.

- *HeaderComponent*: este componente se encarga de la  vista y la lógica del header o tambien de los
Servicios.

- *SharedService*: Este servicio contiene toda la lógica que comporten distintos componentes de distintos modulos.
- *StaffService*: Este servicio se encarga de obtener los datos a través de la API pública http://hp-api.herokuapp.com/api/characters/staff/.
- *StudentsService*: Este servicio se encarga de obtener los datos a través de la API pública http://hp-api.herokuapp.com/api/characters/students.
- *CharactersService*: Este servicio se encarga de obtener los datos a través de la API pública http://hp-api.herokuapp.com/api/characters/house/{{nombreCasa}}.

**Notas de versión**
Versión 1.0.0 – 25/09/2021

*Resumen*

Primera versión del portafolio para la escuela de magia y hechicería Hogwarts.
Esta versión cumple con todos los requisitos planteados además de ser creada pensando en la escalabilidad de este proyecto para facilitar las actualizaciones y nuevas funciones que se le pidan que sean agregadas. El diseño de la interfaz como los colores y fondo fueron escogidos basados en opiniones personales dado a que no se ha especificado el diseño del portafolio.

*Observaciones*
- Se debería de optimizar en próximas versiones los diseño, esto creando un diseño custom para angular material.

- No se han separado algunos componentes debido al tamaño de la aplicación, pero se han hecho comentarios en los lugares necesarios para saber donde comenzar a dividir.
- Se podría elaborar una página de inicio.
- Se debería de agregar un footer.
- Se podría agregar un botón para aceptar y eliminar solicitudes.

