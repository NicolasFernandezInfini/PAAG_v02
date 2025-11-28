# Plataforma PAAG - HealthInCode

Plataforma Automatizada de Análisis Genético (PAAG) - Aplicación web completa para la gestión y análisis de datos genómicos, incluyendo análisis HPO, clasificación ACMG, análisis de relevancia de variantes, y sistema de gestión de usuarios con control de acceso basado en roles.

## 🚀 Stack Tecnológico

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **UI Components:** shadcn/ui (Radix UI + Tailwind CSS)
- **Estilos:** Tailwind CSS 3.4
- **Routing:** React Router Dom v7
- **Forms:** react-hook-form + zod
- **Iconos:** lucide-react
- **Notificaciones:** Sonner
- **Gestión de Estado:** React Context API

## ✨ Características Principales

### 🔐 Sistema de Autenticación
- Login seguro con validación de credenciales
- Sesión persistente en localStorage
- Protección de rutas mediante ProtectedRoute
- Logout con limpieza de sesión
- Roles de usuario: Administrador, Científico, Analista

### 👥 Gestión de Usuarios
- CRUD completo de usuarios (Crear, Leer, Actualizar, Eliminar)
- Filtros por rol, estado y búsqueda por nombre/email
- Dashboard con métricas (total usuarios, activos, administradores)
- Avatar con iniciales generadas automáticamente
- Validación de formularios con react-hook-form + zod
- Solo accesible para usuarios con permiso `users.manage`

### 🛡️ Roles y Permisos
- Sistema granular con 16 permisos distribuidos en 4 módulos:
  - **HPO:** view, edit, delete, validate (4 permisos)
  - **ACMG:** view, edit, delete, validate (4 permisos)
  - **Relevancia:** view, edit, delete, validate (4 permisos)
  - **Admin:** users.manage, roles.manage, system.config, logs.view (4 permisos)
- 3 roles predefinidos:
  - **Administrador:** 16 permisos (acceso total)
  - **Científico:** 8 permisos (view, edit, validate para HPO/ACMG)
  - **Analista:** 5 permisos (view y edit básico)
- Matriz visual de permisos por rol
- Hook personalizado `usePermissions` para verificación de permisos

### 📊 Módulo de Análisis de Relevancia
- **Vista de Lista:**
  - 12 casos de ejemplo con datos completos
  - Filtros múltiples: búsqueda por ID, filtro por estado, filtro por relevancia
  - Dashboard con métricas (total casos, analizados, alta relevancia, promedio variantes)
  - Navegación a vista de detalle
- **Vista de Detalle (3 tabs):**
  - **Tab Información:** Datos del caso, HPOs asociados, métricas agregadas
  - **Tab Variantes:** Tabla completa de variantes con:
    - Información genética (gen, variante nucleotídica/proteica, ACMG)
    - Sistema de puntuación triple (Herencia, HPO, Edad/Sexo)
    - Score total y nivel de relevancia
    - Validación interactiva (Validar/Rechazar)
  - **Tab Compatibilidad HPO:** Matriz de compatibilidad variante-HPO con:
    - Scores color-coded (verde: 80-100, amarillo: 60-79, naranja: 40-59, rojo: 0-39)
    - Tooltips con explicaciones detalladas
    - Leyenda de interpretación de scores

### 📝 Módulo HPO (Existente)
- Tabla única de análisis de términos HPO
- Validación/rechazo de términos
- Edición de códigos HPO por analista
- Campo de comentarios globales
- Tooltips con definiciones HPO

### 🧬 Módulo ACMG (Existente)
- Información detallada de variantes genéticas
- Tabla con los 28 criterios ACMG siempre visibles
- Validación de criterios (Validar/Rechazar/Revisar)
- Puntuación editable por analista
- Interpretación del modelo IA

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/NicolasFernandezInfini/PAAG.git
cd PAAG

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar linter
npm run lint

# Vista previa de producción
npm run preview
```

## 🔑 Usuarios de Prueba

La aplicación incluye 10 usuarios mock para testing:

### Administradores
- **admin@healthincode.com** / password123 (16 permisos)
- **maria.lopez@healthincode.com** / password123 (16 permisos)

### Científicos
- **carlos.garcia@healthincode.com** / password123 (8 permisos)
- **ana.martinez@healthincode.com** / password123 (8 permisos)

### Analistas
- **laura.rodriguez@healthincode.com** / password123 (5 permisos)
- **jorge.fernandez@healthincode.com** / password123 (5 permisos)

*Usuarios adicionales disponibles en `src/data/mockUsers.ts`*

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                     # Componentes shadcn/ui
│   ├── auth/                   # Componentes de autenticación
│   │   └── ProtectedRoute.tsx
│   ├── users/                  # Componentes de gestión de usuarios
│   │   └── UserModal.tsx
│   ├── hpo/                    # Componentes módulo HPO
│   ├── acmg/                   # Componentes módulo ACMG
│   ├── relevancia/             # Componentes módulo Relevancia
│   │   ├── RelevanceBadge.tsx
│   │   ├── InfoTab.tsx
│   │   ├── VariantesTab.tsx
│   │   └── HPOCompatTab.tsx
│   └── theme-provider.tsx
├── contexts/
│   └── AuthContext.tsx         # Context de autenticación global
├── data/
│   ├── mockUsers.ts            # 10 usuarios de prueba
│   ├── mockRelevancia.ts       # 12 casos de relevancia
│   └── mockRelevanciaDetail.ts # Datos detallados con variantes
├── hooks/
│   └── usePermissions.ts       # Hook para verificación de permisos
├── pages/
│   ├── Login.tsx               # Página de login
│   ├── UserManagement.tsx      # Gestión de usuarios
│   ├── RoleManagement.tsx      # Gestión de roles y permisos
│   ├── RelevanciaList.tsx      # Lista de análisis de relevancia
│   ├── RelevanciaDetail.tsx    # Detalle de análisis
│   ├── HPOList.tsx
│   ├── HPODetail.tsx
│   ├── ACMGList.tsx
│   └── ACMGDetail.tsx
├── types/
│   └── permissions.ts          # Sistema de tipos para permisos
├── lib/
│   └── utils.ts                # Utilidades (cn, etc.)
├── App.tsx                     # Router y layout principal
└── main.tsx                    # Entry point
```

## 🎨 Colores de Marca HealthInCode

```css
/* Colores principales */
--brand-pink: #d81b60      /* Rosa principal */
--brand-purple: #5D1F5E    /* Púrpura */

/* Colores de estado */
--validate: #00C389        /* Verde - Validado */
--reject: #FF5757          /* Rojo - Rechazado */
--warning: #FFB800         /* Amarillo - Advertencia */

/* Variantes claras */
--validate-light: rgba(0, 195, 137, 0.1)
--reject-light: rgba(255, 87, 87, 0.1)
--warning-light: rgba(255, 184, 0, 0.1)
```

## 🔒 Sistema de Permisos

### Módulo HPO
- `hpo.view` - Ver análisis HPO
- `hpo.edit` - Editar análisis HPO
- `hpo.delete` - Eliminar análisis HPO
- `hpo.validate` - Validar términos HPO

### Módulo ACMG
- `acmg.view` - Ver clasificaciones ACMG
- `acmg.edit` - Editar clasificaciones ACMG
- `acmg.delete` - Eliminar clasificaciones ACMG
- `acmg.validate` - Validar criterios ACMG

### Módulo Relevancia
- `relevancia.view` - Ver análisis de relevancia
- `relevancia.edit` - Editar análisis de relevancia
- `relevancia.delete` - Eliminar análisis de relevancia
- `relevancia.validate` - Validar variantes

### Módulo Administración
- `users.manage` - Gestionar usuarios
- `roles.manage` - Gestionar roles y permisos
- `system.config` - Configurar sistema
- `logs.view` - Ver logs del sistema

### Uso del Hook de Permisos

```tsx
import { usePermissions } from '@/hooks/usePermissions'

function MiComponente() {
  const { hasPermission, hasAnyPermission, isAdmin } = usePermissions()

  if (hasPermission('users.manage')) {
    // Mostrar opciones de gestión
  }

  if (hasAnyPermission(['hpo.edit', 'acmg.edit'])) {
    // Usuario puede editar HPO o ACMG
  }

  if (isAdmin()) {
    // Funcionalidad exclusiva para administradores
  }
}
```

## 🧪 Datos Mock

### Usuarios (`src/data/mockUsers.ts`)
- 10 usuarios con diferentes roles y permisos
- Funciones helper: `findUserByEmail`, `validateCredentials`, `getInitials`

### Casos de Relevancia (`src/data/mockRelevancia.ts`)
- 12 casos de análisis con información completa
- Filtros por estado (pendiente, analizado, validado)
- Niveles de relevancia (alta, media, baja)

### Detalles de Casos (`src/data/mockRelevanciaDetail.ts`)
- Caso completo REL-2024-001 con 8 variantes
- Matriz de compatibilidad HPO por variante
- Scores de herencia, HPO y edad/sexo

## 🛠️ Desarrollo

### Agregar nuevos componentes shadcn/ui

```bash
npx shadcn-ui@latest add [component-name]
```

### Estructura de Commits

Este proyecto utiliza **Conventional Commits**:

- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bugs
- `refactor:` - Refactorización de código
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato (no afectan lógica)
- `test:` - Agregar o modificar tests
- `chore:` - Tareas de mantenimiento

Ejemplo:
```bash
git commit -m "feat(auth): implement login with session persistence"
```

### ESLint y TypeScript

El proyecto está configurado con reglas estrictas:
- TypeScript en modo estricto
- ESLint con @typescript-eslint
- Máximo 0 warnings permitidos
- Todas las importaciones deben estar tipadas

```bash
# Ejecutar linter
npm run lint

# Compilar TypeScript
npm run build
```

## 🚧 Próximas Funcionalidades

- [ ] Backend FastAPI para persistencia de datos
- [ ] Integración con API real
- [ ] Autenticación JWT
- [ ] Gestión de sesiones del lado del servidor
- [ ] Upload de archivos VCF
- [ ] Exportación de reportes PDF
- [ ] Sistema de notificaciones en tiempo real
- [ ] Auditoría de cambios (logs)

## 📄 Licencia

Propietario - HealthInCode © 2024

---

**Desarrollado con ❤️ por el equipo de HealthInCode**
