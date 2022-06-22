# Prueba Eccocar

## Stack

Esta prueba está implementada con `React Native` y `Typescript`. Los datos de las películas son estáticos, pero se mockean como si se realizara una llamada a una posible API externa.

## Dependencias

Para instalar las dependencias, ejecutar el siguiente comando:

```
npm install
```

Y arrancar la app con

```
npm start
```

## Estructura

La estructura del proyecto es la siguiente:

-   **assets/**: recursos gráficos.
-   **components/**: componentes reutilizables en la app. Cada fichero contiene un sólo componente y sus estilos.
-   **constants/**: constantes como los colores de la app.
-   **hooks/**: hooks utilizados para reutilizar la gestión del estado.
-   **navigation/**: definición de las pantallas.
-   **screens/**: componentes de React con la estructura de cada pantalla.
-   **services/**: funcionalidades como llamadas a servicios externos o APIs.
-   **tests/**: tests de la app.
-   **utils/**: utilidades comunes a toda la app.
-   **App.tsx**: entrada de la aplicación.
-   **types.tsx**: definición de tipos comunes a toda la app.

## Tests

Se definen un par de pruebas unitarias del servicio que mockea la llamada a una API externa. Se prueban sus dos métodos.

Para ejecutar las pruebas, utilizar el siguiente comando:

```
npm run test
```
