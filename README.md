# Portafolio 3D - Mario Marquesto

![Vista previa del portafolio](<img width="1340" height="592" alt="Captura de pantalla 2026-05-28 210115" src="https://github.com/user-attachments/assets/88dc5cc6-30cc-4fb2-ace4-e70cb839d341" />
)

Este repositorio contiene el código fuente de un portafolio personal 3D construido con React, TypeScript, Three.js, React Three Fiber y GSAP. Incluye secciones animadas, una escena con personaje 3D, interacciones personalizadas del cursor y transiciones suaves diseñadas para una experiencia de portafolio moderna.

**Sitio en vivo:** [https://porfolio-2026-theta.vercel.app](https://porfolio-2026-theta.vercel.app)

## Captura de Pantalla



## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Cómo Empezar](#cómo-empezar)
- [Scripts Disponibles](#scripts-disponibles)
- [Nota sobre la Licencia de GSAP](#nota-sobre-la-licencia-de-gsap)
- [Guía de Personalización](#guía-de-personalización)
- [Solución de Problemas](#solución-de-problemas)
- [Despliegue](#despliegue)
- [Licencia](#licencia)

## Características

- Diseño de portafolio de una página responsive con componentes de sección reutilizables.
- Escena 3D de personaje renderizada con React Three Fiber y Three.js.
- Animaciones y transiciones potenciadas por GSAP para una narrativa interactiva.
- Cursor personalizado, interacciones hover y efectos visuales controlados por scroll.
- Arquitectura de componentes organizada con utilidades dedicadas y módulos de estilo.

## Tecnologías Utilizadas

### Principales

- React 18
- TypeScript
- Vite

### Animación y 3D

- GSAP + `@gsap/react`
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/cannon`
- `@react-three/rapier`

### Librerías de Soporte

- `react-icons`
- `react-fast-marquee`
- `@vercel/analytics`

## Estructura del Proyecto

```text
.
├── public/                    # Archivos estáticos
├── src/
│   ├── assets/                # Recursos locales
│   ├── components/
│   │   ├── Character/         # Escena 3D + lógica del personaje
│   │   ├── styles/            # Archivos CSS de componentes
│   │   ├── About.tsx          # Sobre mí
│   │   ├── Career.tsx         # Mi trayectoria
│   │   ├── Contact.tsx        # Contacto
│   │   ├── Landing.tsx        # Página de inicio
│   │   ├── MainContainer.tsx  # Composición principal
│   │   ├── Navbar.tsx         # Barra de navegación
│   │   ├── TechStack.tsx      # Tecnologías
│   │   ├── WhatIDo.tsx        # Qué hago
│   │   └── Work.tsx           # Mis proyectos
│   ├── context/               # Proveedores globales
│   ├── data/                  # Datos estáticos
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
