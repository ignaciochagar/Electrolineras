# Santiagín

## Descripción del Proyecto

Santiagín es una aplicación web diseñada para peregrinos del Camino de Santiago. Esta herramienta permite a los usuarios registrarse e iniciar sesión, explorar un mapa interactivo con las rutas del Camino de Santiago y localizar albergues disponibles en cada ruta. Los usuarios también pueden publicar información sobre sus propios albergues y explorar una lista de albergues registrados, con la posibilidad de ser redirigidos al mapa al hacer clic en ellos.

## Características Principales

- **Registro e Inicio de Sesión**: Los usuarios pueden registrarse y luego iniciar sesión para acceder a todas las funcionalidades de la aplicación.
- **Mapa Interactivo**: Visualización de las rutas del Camino de Santiago con chinchetas que indican la ubicación de los albergues.
- **Publicación de Albergues**: Formulario para que los usuarios publiquen sus albergues, con validaciones para asegurar la correcta inserción de datos.
- **Lista de Albergues Registrados**: Pestaña que muestra todos los albergues registrados y permite redirigir al mapa al hacer clic en un albergue específico.

## Instalación

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/santiagin.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd santiagin
    ```

3. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

4. Inicia la aplicación:

    ```bash
    npm start
    ```

## Uso

### Registro e Inicio de Sesión

- **Registro**: Rellena el formulario de registro con tus datos. Al registrarte, podrás acceder a todas las funcionalidades de la aplicación.
- **Inicio de Sesión**: Inicia sesión con tu nombre de usuario y contraseña para explorar el mapa y gestionar los albergues.

### Mapa Interactivo

- **Visualización**: El mapa muestra las diferentes rutas del Camino de Santiago con chinchetas que indican la ubicación de los albergues.
- **Interacción**: Haz clic en las chinchetas para ver detalles sobre los albergues.

### Publicación de Albergues

- **Formulario**: Accede al formulario de publicación de albergues para añadir un nuevo albergue a la base de datos. Asegúrate de completar todos los campos con información válida.
- **Validaciones**: El formulario incluye validaciones para el nombre del albergue, latitud, longitud, precio por noche, camino, provincia y número de camas.

### Lista de Albergues Registrados

- **Visualización**: Explora la pestaña de albergues registrados para ver todos los albergues disponibles.
- **Redirección**: Haz clic en cualquier albergue para ser redirigido al mapa, donde podrás ver la ubicación exacta del albergue en la ruta del Camino de Santiago.

## Archivos Clave

- `src/components/Login.js`: Componente de inicio de sesión.
- `src/components/Register.js`: Componente de registro.
- `src/components/Map.js`: Componente del mapa interactivo con las rutas y albergues.
- `src/components/Form.js`: Formulario para la publicación de albergues.
- `src/components/AlberguesList.js`: Lista de albergues registrados.
- `src/data/Alojamientos.json`: Base de datos de albergues.
- `src/data/albergues.js`: Datos adicionales de albergues que se fusionan con `Alojamientos.json`.

## Contribución

1. Haz un fork del proyecto.
2. Crea una nueva rama con tu funcionalidad:

    ```bash
    git checkout -b nueva-funcionalidad
    ```

3. Realiza tus cambios y haz commit:

    ```bash
    git commit -m "Añadir nueva funcionalidad"
    ```

4. Sube tus cambios a tu repositorio:

    ```bash
    git push origin nueva-funcionalidad
    ```

5. Crea un Pull Request en el repositorio original.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
