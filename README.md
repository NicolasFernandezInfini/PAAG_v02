# Plataforma PAAG - HealthInCode

Aplicación de validación para análisis HPO y ACMG desarrollada con React, TypeScript y shadcn/ui.

## Stack Tecnológico

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **UI Components:** shadcn/ui (Radix UI + Tailwind CSS)
- **Estilos:** Tailwind CSS
- **Iconos:** lucide-react
- **Notificaciones:** Sonner

## Características

### Módulo HPO
- Tabla única de análisis de términos HPO
- Validación/rechazo de términos
- Edición de códigos HPO por analista
- Campo de comentarios globales
- Tooltips con definiciones HPO

### Módulo ACMG
- Información detallada de variantes genéticas
- Tabla con los 28 criterios ACMG siempre visibles
- Validación de criterios (Validar/Rechazar/Revisar)
- Puntuación editable por analista
- Interpretación del modelo IA

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes shadcn/ui
│   ├── hpo/             # Componentes módulo HPO
│   ├── acmg/            # Componentes módulo ACMG
│   └── shared/          # Componentes compartidos
├── types/               # Tipos TypeScript
├── lib/                 # Utilidades
└── App.tsx             # Componente principal
```

## Colores de Marca HealthInCode

- **Magenta:** #E6007E (Principal)
- **Púrpura:** #5D1F5E
- **Rosa:** #F5E6F0
- **Lavanda:** #D4B5D6
- **Validar:** #00C389
- **Rechazar:** #FF5757
- **Advertencia:** #FFB800

## Desarrollo

La aplicación utiliza shadcn/ui, lo que permite personalizar completamente los componentes ya que viven directamente en el código fuente del proyecto.

### Agregar nuevos componentes shadcn/ui

```bash
npx shadcn-ui@latest add [component-name]
```

## Licencia

Propietario - HealthInCode
