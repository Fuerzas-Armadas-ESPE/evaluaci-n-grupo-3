# Sistema de Gestión de Cursos para Docentes

Este proyecto tiene como objetivo crear un sistema de gestión de cursos para docentes mediante Nest.js. El sistema permitirá la gestión de cursos, la creación de temas a dichos cursos, la marcación de temas como revisados o pendientes de revisión, y la implementación de un CRUD para los temas.

## Configuración del Proyecto

1. Utiliza Nest.js para la configuración del backend.
2. Configura una base de datos MongoDB para almacenar la información de los cursos y los temas.

## Desarrollo del Backend

1. Crea un módulo para la gestión de los cursos, incluyendo operaciones de CRUD (Crear, Leer, Actualizar, Eliminar).
2. Implementa un controlador y un servicio para la lógica de negocio relacionada con los cursos.
3. Desarrolla un módulo para la gestión de los temas de los cursos, con las operaciones de CRUD correspondientes.
4. Establece la relación entre los cursos y los temas, permitiendo que un curso pueda tener múltiples temas asociados.

## Desarrollo del Frontend (opcional)

1. Utiliza herramientas como Angular, React o Vue.js para desarrollar el frontend.
2. Diseña e implementa la interfaz de usuario para la gestión de cursos, la adición de temas y la marcación de temas como revisados o pendientes de revisión.
3. Integra la interfaz de usuario con el backend mediante peticiones HTTP para consumir los endpoints RESTful.

## Implementación de Seguridad

1. Implementa medidas de seguridad en el backend para proteger las rutas y acciones del sistema.
2. Utiliza técnicas como la autenticación basada en tokens JWT para controlar el acceso a las operaciones del sistema.

## Pruebas Unitarias con Jest

1. Escribe pruebas unitarias para verificar el correcto funcionamiento de los controladores y servicios del backend.
2. Utiliza Jest como framework de pruebas y asegúrate de cubrir los casos de uso más relevantes.

## Entregable

1. Repositorio de GitHub con el código fuente del proyecto.
2. Documentación detallada sobre la configuración y ejecución del proyecto, tanto en el frontend (opcional) como en el backend.
3. Capturas de pantalla o vídeos demostrativos que muestren el sistema en funcionamiento.

Para visualizar y probar la generación del sistema backend y su consumo desde un Frontend, puedes utilizar herramientas como Thunder Client, Postman, Insomnia o RapidApiClient. Estas herramientas permiten realizar solicitudes HTTP a los endpoints del backend, lo que facilita la visualización de los datos y el funcionamiento del sistema en tiempo real.

## Comandos para correr el proyecto

### Backend:

1. **Instalar las dependencias:**
   ```bash
   cd backend
   npm install

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run start:dev


### Frontend:

1. **Instalar las dependencias:**
   ```bash
   cd frontend
   npm install

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start