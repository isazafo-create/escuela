
# Blueprint: Calculadora Web App

## Visión General

El objetivo de este proyecto es crear una calculadora web simple, moderna y modular. La funcionalidad principal será encapsulada dentro de un Web Component para promover la reutilización y un código más limpio, siguiendo las mejores prácticas del desarrollo web moderno.

## Diseño y Estilo

La calculadora tendrá un diseño limpio y moderno con:

*   **Componentes:** Tarjeta elevada para la calculadora.
*   **Colores:** Paleta de colores vibrantes con buen contraste.
*   **Tipografía:** Fuentes claras y legibles.
*   **Efectos:** Sombras suaves para dar profundidad y un efecto de "elevación".
*   **Interactividad:** Botones con retroalimentación visual al pasar el cursor y al hacer clic.

## Plan de Implementación Actual

1.  **Refactorizar a Web Component:**
    *   Crear una clase `CalculatorApp` que extienda de `HTMLElement`.
    *   Mover la lógica de la calculadora a los métodos de esta clase.
    *   Usar Shadow DOM para encapsular la estructura y los estilos del componente.
    *   Crear un `<template>` para la estructura HTML de la calculadora.
    *   Registrar el nuevo elemento personalizado como `<calculator-app>`.

2.  **Actualizar HTML:**
    *   Reemplazar el código HTML existente de la calculadora en `index.html` con la etiqueta `<calculator-app>`.

3.  **Actualizar CSS:**
    *   Añadir estilos modernos y atractivos para el componente de la calculadora en `style.css`.
