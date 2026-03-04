# 📚 Proyecto de Documentación GIMA — Plan Completo

**Sistema:** GIMA - Gestión Integral de Mantenimiento y Activos  
**Alcance:** `gima-ai-chatbot` · `gima-backend` · `gima-frontend`  
**Fecha:** 2026-03-04  
**Versión:** 1.0

---

## 📋 Tabla de Contenidos

- [Objetivo del Proyecto](#-objetivo-del-proyecto)
- [Referencias de Diseño](#-referencias-de-diseño)
- [Arquitectura de la Documentación](#-arquitectura-de-la-documentación)
- [Estructura de Archivos](#-estructura-de-archivos)
- [Contenido por Sección](#-contenido-por-sección)
- [Stack Técnico del Sitio de Docs](#-stack-técnico-del-sitio-de-docs)
- [Convenciones y Estándares](#-convenciones-y-estándares)
- [Roadmap de Implementación](#-roadmap-de-implementación)

---

## 🎯 Objetivo del Proyecto

Crear un **sitio de documentación unificado** de nivel profesional que:

1. Cubra los **tres repositorios** del ecosistema GIMA de forma integrada
2. Sirva como **manual de sistemas** académico/profesional (referencia del temario existente)
3. Sea **navegable, buscable y visualmente atractivo** — inspirado en las mejores docs del ecosistema
4. Funcione tanto como **guía de onboarding** para nuevos desarrolladores como **referencia técnica** para el equipo

---

## 🌐 Referencias de Diseño

Sitios de documentación de referencia, con los patrones que tomamos de cada uno:

### Principales

| Referencia                 | URL                                                        | Patrón a Adoptar                                                                                                                                               |
| -------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Protocol** (Tailwind UI) | [protocol.tailwindui.com](https://protocol.tailwindui.com) | Layout API-reference: sidebar con secciones Guides + Resources, paneles de código/request a la derecha, dark mode elegante                                     |
| **Syntax** (Tailwind UI)   | [syntax.tailwindui.com](https://syntax.tailwindui.com)     | Layout docs-narrativo: sidebar con categorías jerárquicas (Introduction → Core Concepts → Advanced → API Reference → Contributing), "On this page" ToC lateral |

### Secundarias

| Referencia       | URL                                                | Patrón a Adoptar                                                                                                                                                          |
| ---------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js Docs** | [nextjs.org/docs](https://nextjs.org/docs)         | Mega-estructura modular: App Router / Pages Router tabs, secciones colapsables, breadcrumbs, badges "new/experimental", code blocks con filename tabs, integration guides |
| **Vue.js Docs**  | [vuejs.org/guide](https://vuejs.org/guide)         | Interactividad: "Try it in the Playground" embeds, preference toggles (Options/Composition API), progressive disclosure                                                   |
| **Laravel Docs** | [laravel.com/docs](https://laravel.com/docs)       | Backend patterns: versioned sidebar, código resaltado con números de línea, secciones de warning/tip/note, estructura lógica Getting Started → Core → Database → Security |
| **Stripe Docs**  | [docs.stripe.com](https://docs.stripe.com)         | API documentation: request/response panels, language switcher, interactive try-it-out, step-by-step guides con checklists de progreso                                     |
| **Docusaurus**   | [docusaurus.io](https://docusaurus.io)             | Framework docs: versionado, i18n, search, MDX support, plugins architecture                                                                                               |
| **Mintlify**     | [mintlify.com](https://mintlify.com)               | DX moderno: OpenAPI auto-generation, API playground, analytics de docs                                                                                                    |
| **Fumadocs**     | [fumadocs.vercel.app](https://fumadocs.vercel.app) | Next.js native: App Router + MDX + Typesafe, full-text search, source providers para monorepo                                                                             |

---

## 🏗 Arquitectura de la Documentación

Inspirados en **Syntax** (narrativo) + **Protocol** (API reference) + **Next.js Docs** (modular profundo):

```
┌─────────────────────────────────────────────────────────────────────┐
│                        GIMA Documentation                          │
├────────────┬────────────┬────────────┬────────────┬────────────────┤
│  Getting   │   Core     │  Backend   │ AI/Chatbot │   Referencia   │
│  Started   │ Concepts   │   Guide    │   Guide    │      API       │
│            │            │ (Laravel)  │ (Next.js)  │                │
├────────────┼────────────┼────────────┼────────────┼────────────────┤
│ Quickstart │ Arquitect. │ Models     │ Chat       │ REST Endpoints │
│ Install    │ DDD        │ Controllers│ AI Tools   │ Server Actions │
│ Config     │ Data Model │ Routes     │ Voice      │ Schemas        │
│ Ambientes  │ Security   │ Migrations │ Hooks      │ Error Codes    │
│ Deploy     │ Testing    │ Auth       │ Components │ Env Variables  │
└────────────┴────────────┴────────────┴────────────┴────────────────┘
```

### Navegación Principal (Sidebar)

Estructura tipo **Syntax + Next.js Docs** con categorías colapsables:

```
📘 GIMA Docs
├── 🚀 Getting Started
│   ├── Introducción
│   ├── Quickstart
│   ├── Instalación
│   ├── Configuración de Entorno
│   └── Estructura del Proyecto
│
├── 🧠 Conceptos Fundamentales
│   ├── Visión General del Sistema
│   ├── Arquitectura de Alto Nivel
│   ├── Domain-Driven Design
│   ├── Stack Tecnológico
│   ├── Modelo de Datos
│   └── Decisiones Arquitectónicas (ADRs)
│
├── 🔧 Backend Guide (Laravel)
│   ├── Primeros Pasos
│   ├── Modelos y Relaciones
│   ├── API REST (Endpoints)
│   ├── Autenticación y Roles
│   ├── Migraciones y Seeds
│   ├── Validación con Form Requests
│   └── Testing Backend
│
├── 💬 AI Chatbot Guide (Next.js)
│   ├── Arquitectura del Chatbot
│   ├── API del Chat (route.ts)
│   ├── Server Actions
│   ├── Servicios de IA
│   ├── Custom Hooks
│   ├── Componentes UI
│   ├── Feature: Chat
│   ├── Feature: Voice Fill
│   ├── Feature: Photo-to-Part
│   ├── Feature: Smart Checklists
│   └── Feature: Data Transformations
│
├── 🎨 Frontend Guide
│   ├── Design System
│   ├── Componentes Base (shadcn/ui)
│   ├── Layout y Navegación
│   ├── Temas y Dark Mode
│   ├── Animaciones (Framer Motion)
│   └── Responsive Design
│
├── 🛡️ Seguridad
│   ├── Autenticación y Autorización
│   ├── Seguridad de Datos
│   ├── Seguridad de IA
│   ├── Threat Modeling
│   └── Compliance y Gobierno de Datos
│
├── 🚀 Funcionalidades Core
│   ├── Órdenes de Trabajo
│   ├── Gestión de Inventario
│   ├── Gestión de Activos
│   ├── Checklists Inteligentes
│   └── Reportes y Analytics
│
├── ⚡ Performance y Escalabilidad
│   ├── Optimización Frontend
│   ├── Optimización Backend
│   ├── Caching Strategies
│   ├── Monitoreo y Observabilidad
│   └── Escalabilidad
│
├── 🚢 Deployment y DevOps
│   ├── Estrategia de Deployment
│   ├── CI/CD con GitHub Actions
│   ├── Database Management
│   └── Gestión de Configuración
│
├── 📖 API Reference  ← (estilo Protocol)
│   ├── REST API
│   │   ├── Work Orders
│   │   ├── Assets
│   │   ├── Inventory
│   │   ├── Users
│   │   └── Reports
│   ├── Server Actions
│   │   ├── transcribeAudio()
│   │   ├── analyzePartImage()
│   │   ├── executeVoiceCommand()
│   │   ├── generateChecklist()
│   │   └── generateSummary()
│   └── Schemas (Zod)
│       ├── Request Schemas
│       └── Response Schemas
│
├── 📊 Casos de Estudio
│   ├── Voice Fill Implementation
│   ├── Photo-to-Part Integration
│   └── Smart Checklist Builder
│
├── 🔮 Roadmap y Futuro
│   ├── Features en Desarrollo
│   ├── Visión a Largo Plazo
│   └── Tecnologías Emergentes
│
└── 📎 Apéndices
    ├── Glosario de Términos
    ├── Referencias Bibliográficas
    ├── Diagramas (ERD, C4, DFD)
    ├── Environment Variables Guide
    └── Error Code Reference
```

---

## 📁 Estructura de Archivos

Estructura propuesta para el proyecto de documentación (`gima-docs/`):

```
gima-docs/
├── README.md                          # Landing y getting started rápido
├── manual-sistemas-temario.md         # (existente) Temario de referencia
├── proyecto-documentacion.md          # (este archivo) Plan del proyecto
│
├── getting-started/
│   ├── 01-introduccion.md             # Visión general, objetivos, stakeholders
│   ├── 02-quickstart.md               # Setup en 5 minutos (mono-repo)
│   ├── 03-instalacion.md              # Instalación detallada step-by-step
│   ├── 04-configuracion-entorno.md    # Variables de entorno, .env, secrets
│   └── 05-estructura-proyecto.md      # Mapa de los 3 repos y cómo se conectan
│
├── conceptos/
│   ├── 01-vision-general.md           # Contexto UNEG, casos de uso, stakeholders
│   ├── 02-arquitectura.md             # Patrón arquitectónico, capas, C4 diagrams
│   ├── 03-domain-driven-design.md     # Bounded contexts, context map, ubiquitous lang
│   ├── 04-stack-tecnologico.md        # Tabla completa del stack con justificaciones
│   ├── 05-modelo-datos.md             # ERD, entidades, relaciones, normalización
│   └── 06-adrs.md                     # Architecture Decision Records
│
├── backend/
│   ├── 01-primeros-pasos.md           # Setup de Laravel, artisan, composer
│   ├── 02-modelos/
│   │   ├── _index.md                  # Overview de todos los modelos
│   │   ├── user.md                    # User model (roles, permisos, relaciones)
│   │   ├── activo.md                  # Activo model (assets)
│   │   ├── mantenimiento.md           # Mantenimiento model (work orders)
│   │   ├── repuesto.md                # Repuesto model (inventory parts)
│   │   ├── articulo.md                # Articulo model
│   │   ├── reporte.md                 # Reporte model
│   │   ├── ubicacion.md               # Ubicacion model
│   │   ├── direccion.md               # Direccion model
│   │   ├── proveedor.md               # Proveedor model
│   │   ├── notificacion.md            # Notificacion model
│   │   ├── calendario.md              # CalendarioMantenimiento model
│   │   ├── historial-logs.md          # HistorialLogs model
│   │   └── sesiones.md                # SesionesMantenimiento model
│   ├── 03-api-rest.md                 # Todos los endpoints con request/response
│   ├── 04-autenticacion.md            # Auth, JWT, roles (Admin/Manager/Technician/Viewer)
│   ├── 05-migraciones-seeds.md        # Database migrations, seeders, factories
│   ├── 06-validacion.md               # Form Requests, validation rules
│   └── 07-testing-backend.md          # PHPUnit, feature tests, unit tests
│
├── ai-chatbot/
│   ├── 01-arquitectura.md             # Next.js App Router, estructura del chatbot
│   ├── 02-api-chat.md                 # route.ts paso a paso (streaming, tools)
│   ├── 03-server-actions.md           # voice.ts, vision.ts, files.ts, checklist.ts
│   ├── 04-servicios-ia/
│   │   ├── _index.md                  # Diagrama de servicios IA
│   │   ├── chat-service.md            # ChatService (GROQ + streaming)
│   │   ├── voice-service.md           # Transcripción con Gemini Flash Lite
│   │   ├── vision-service.md          # Análisis de imágenes con Gemini Vision
│   │   ├── checklist-service.md       # Generación de checklists con IA
│   │   └── summary-service.md         # AI Activity Summaries
│   ├── 05-hooks.md                    # usePersistentChat, useVoiceInput, etc.
│   ├── 06-componentes/
│   │   ├── _index.md                  # Component hierarchy (Atomic Design)
│   │   ├── ui-base.md                 # shadcn/ui components
│   │   ├── shared.md                  # ErrorBoundary, ConfirmDialog, FeatureGuard
│   │   └── ai-elements.md            # Chat message renderers, canvas, code blocks
│   ├── 07-features/
│   │   ├── chat.md                    # Feature: Chat conversacional
│   │   ├── voice-fill.md              # Feature: Relleno por voz
│   │   ├── voice-commands.md          # Feature: Comandos de voz
│   │   ├── photo-to-part.md           # Feature: Photo-to-Part Creation
│   │   ├── smart-checklists.md        # Feature: Checklist Builder
│   │   ├── activity-summaries.md      # Feature: AI Activity Summaries
│   │   └── data-transformations.md    # Feature: Data Transformations
│   └── 08-configuracion.md            # Feature flags, prompts, env validation
│
├── frontend/
│   ├── 01-design-system.md            # Tokens, colores, tipografía, espaciado
│   ├── 02-componentes-base.md         # shadcn/ui: Button, Input, Dialog, Table...
│   ├── 03-layout-navegacion.md        # App shell, routing, navigation patterns
│   ├── 04-temas-dark-mode.md          # CSS custom properties, theme switching
│   ├── 05-animaciones.md              # Framer Motion, micro-interactions
│   └── 06-responsive.md              # Mobile-first, breakpoints, PWA considerations
│
├── seguridad/
│   ├── 01-autenticacion.md            # NextAuth/Auth.js, OAuth, JWT, sessions
│   ├── 02-autorizacion.md             # RBAC, Row-Level Security, middleware
│   ├── 03-seguridad-datos.md          # Encryption, API keys, input validation
│   ├── 04-seguridad-ia.md             # Prompt injection, PII detection, sandboxing
│   ├── 05-threat-modeling.md          # STRIDE, análisis de flujos críticos
│   └── 06-compliance.md              # GDPR, data lifecycle, audit logging
│
├── funcionalidades/
│   ├── 01-ordenes-trabajo.md          # CRUD, ciclo de vida, asignación, priorización
│   ├── 02-inventario.md               # Catálogo, stock, reorder points, movimientos
│   ├── 03-activos.md                  # Registro, clasificación, KPIs (MTBF/MTTR)
│   ├── 04-checklists.md              # Templates, ejecución, validación
│   └── 05-reportes-analytics.md       # Dashboards, KPIs, data visualization
│
├── performance/
│   ├── 01-frontend-performance.md     # Code splitting, lazy loading, Web Vitals
│   ├── 02-backend-performance.md      # Indexing, query optimization, connection pooling
│   ├── 03-caching.md                  # Browser, Redis, CDN, AI response caching
│   ├── 04-monitoreo.md               # APM, logging, métricas, alerting
│   └── 05-escalabilidad.md           # Horizontal vs vertical, edge, microservices path
│
├── deployment/
│   ├── 01-estrategia.md               # Platforms, ambientes (dev/staging/prod)
│   ├── 02-ci-cd.md                    # GitHub Actions workflows, build pipeline
│   ├── 03-database-management.md      # Migrations, backups, zero-downtime
│   └── 04-configuracion.md           # Feature flags, A/B testing, env configs
│
├── api-reference/                     # ← Estilo Protocol (Tailwind UI)
│   ├── _index.md                      # Intro: Auth, pagination, errors, rate limiting
│   ├── rest/
│   │   ├── work-orders.md             # GET/POST/PUT/DELETE /api/work-orders
│   │   ├── assets.md                  # GET/POST/PUT/DELETE /api/assets
│   │   ├── inventory.md               # GET/POST/PUT/DELETE /api/inventory
│   │   ├── users.md                   # GET/POST/PUT/DELETE /api/users
│   │   ├── reports.md                 # GET/POST /api/reports
│   │   └── chat.md                    # POST /api/chat (streaming)
│   ├── server-actions/
│   │   ├── transcribe-audio.md        # transcribeAudio() — params, returns, errors
│   │   ├── analyze-part-image.md      # analyzePartImage() — params, returns, errors
│   │   ├── execute-voice-command.md   # executeVoiceCommand()
│   │   ├── generate-checklist.md      # generateChecklist()
│   │   └── generate-summary.md        # generateSummary()
│   └── schemas/
│       ├── request-schemas.md         # Zod schemas de entrada
│       └── response-schemas.md        # Zod schemas de salida + error types
│
├── casos-estudio/
│   ├── 01-voice-fill.md               # Implementación completa de Voice Fill
│   ├── 02-photo-to-part.md            # Integración de Photo-to-Part
│   └── 03-smart-checklists.md         # Checklist Builder con IA
│
├── roadmap/
│   ├── 01-features-desarrollo.md      # Features actuales en desarrollo
│   ├── 02-vision-largo-plazo.md       # Visión 6 meses / 2 años
│   └── 03-tecnologias-emergentes.md   # IoT, Edge AI, AR/VR
│
├── apendices/
│   ├── glosario.md                    # Términos técnicos + terminología UNEG
│   ├── referencias.md                 # Bibliografía, standards, docs oficiales
│   ├── diagramas/                     # ERD, C4, DFD exportados
│   │   ├── erd-completo.md
│   │   ├── c4-contexto.md
│   │   ├── c4-contenedores.md
│   │   └── dfd-niveles.md
│   ├── env-variables.md               # Guía completa de variables de entorno
│   └── error-codes.md                 # Catálogo de códigos de error
│
└── assets/
    ├── images/                        # Capturas, mockups, diagramas PNG/SVG
    └── diagrams/                      # Archivos .drawio, .mermaid source
```

---

## 📝 Contenido por Sección

### 1. Getting Started

> **Inspiración:** Next.js Docs "Getting Started" + Laravel Docs "Installation"

Cada página sigue el patrón:

- **Prerequisitos** (badges de versión)
- **Pasos numerados** con bloques de código copiables
- **Verificación** ("deberías ver esto en tu terminal")
- **Troubleshooting** al final

```md
<!-- Ejemplo de formato para 02-quickstart.md -->

## Quickstart — GIMA en 5 minutos

### Prerequisitos

> **Node.js** ≥ 20 · **PHP** ≥ 8.2 · **Composer** ≥ 2.x · **PostgreSQL** ≥ 15

### 1. Clonar los repositorios

​`bash
git clone https://github.com/tu-org/gima-ai-chatbot.git
git clone https://github.com/tu-org/gima-backend.git
​`

### 2. Configurar el backend (Laravel)

​`bash
cd gima-backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
​`

> [!TIP]
> El seeder incluye datos de prueba para todos los modelos.

### 3. Configurar el chatbot (Next.js)

​`bash
cd gima-ai-chatbot
npm install
cp .env.example .env.local
npm run dev
​`

### ✅ Verificación

Abre `http://localhost:3000` — deberías ver el chat de GIMA listo.
```

---

### 2. API Reference (Estilo Protocol)

> **Inspiración:** [protocol.tailwindui.com](https://protocol.tailwindui.com) + Stripe Docs

Cada endpoint sigue este formato de **dos columnas** (explicación izquierda, código derecha):

```md
<!-- Ejemplo de formato para api-reference/rest/work-orders.md -->

# Work Orders

## Modelo WorkOrder

| Atributo        | Tipo       | Descripción                                        |
| --------------- | ---------- | -------------------------------------------------- |
| `id`            | `integer`  | Identificador único                                |
| `title`         | `string`   | Título de la orden                                 |
| `status`        | `enum`     | `pending` · `in_progress` · `completed` · `closed` |
| `priority`      | `enum`     | `urgent` · `high` · `normal` · `low`               |
| `asset_id`      | `integer`  | ID del activo asociado                             |
| `technician_id` | `integer`  | ID del técnico asignado                            |
| `created_at`    | `datetime` | Fecha de creación                                  |

---

## Listar órdenes de trabajo

<div class="not-prose">
  <span class="badge-get">GET</span> <code>/api/work-orders</code>
</div>

### Parámetros opcionales

| Parámetro  | Tipo      | Descripción                    |
| ---------- | --------- | ------------------------------ |
| `status`   | `string`  | Filtrar por estado             |
| `priority` | `string`  | Filtrar por prioridad          |
| `page`     | `integer` | Número de página (default: 1)  |
| `per_page` | `integer` | Items por página (default: 15) |

### Response

​`json
{
  "data": [
    {
      "id": 1,
      "title": "Revisión UMA-01 Piso 3",
      "status": "in_progress",
      "priority": "high",
      "asset": { "id": 5, "name": "UMA-01", "code": "HVAC-UMA-01" },
      "technician": { "id": 3, "name": "Carlos Mendoza" },
      "created_at": "2026-01-15T10:30:00Z"
    }
  ],
  "meta": { "current_page": 1, "total": 42 }
}
​`

> [!NOTE]
> Las respuestas paginadas siguen el estándar de Laravel con `meta` y `links`.
```

---

### 3. AI Chatbot Guide (Estilo Syntax)

> **Inspiración:** [syntax.tailwindui.com](https://syntax.tailwindui.com) + Vue Docs

Formato narrativo-educativo con:

- **Concepto** explicado antes del código
- **Diagramas Mermaid** para flujos
- **Código con anotaciones** línea por línea
- **"¿Por qué?"** boxes para decisiones de diseño

````md
<!-- Ejemplo de formato para ai-chatbot/04-servicios-ia/chat-service.md -->

# Chat Service

El `ChatService` es el **orquestador principal** de las conversaciones con IA.
Gestiona el flujo completo desde que el usuario envía un mensaje hasta que
recibe la respuesta en streaming.

## Flujo de Datos

​```mermaid
sequenceDiagram
participant U as Usuario
participant R as route.ts
participant C as ChatService
participant V as Validación
participant RL as RateLimiter
participant AI as GROQ API

    U->>R: POST /api/chat
    R->>C: streamChat(messages, tools)
    C->>V: validateInput(messages)
    C->>RL: checkLimit(userId)
    RL-->>C: ✅ Allowed
    C->>AI: streamText(prompt, tools)
    AI-->>C: SSE chunks
    C-->>R: ReadableStream
    R-->>U: Streaming response

​```

## Arquitectura

> [!IMPORTANT]
> `ChatService` hereda de `BaseAIService`, que proporciona rate limiting,
> logging estructurado y manejo de errores estandarizado.

​```typescript
// lib/ai/services/chat-service.ts
export class ChatService extends BaseAIService {
async streamChat(messages: Message[], tools: Tool[]) {
// 1. Validar input con Zod
const validated = chatSchema.parse({ messages });

    // 2. Verificar rate limit
    await this.checkRateLimit(userId);

    // 3. Construir prompt con contexto del sistema
    const systemPrompt = buildSystemPrompt(tools);

    // 4. Llamar a GROQ con streaming
    return streamText({
      model: groq('llama-3.3-70b-versatile'),
      system: systemPrompt,
      messages: validated.messages,
      tools: this.buildToolDefinitions(tools),
    });

}
}
​```

### 💡 ¿Por qué herencia y no composición?

Se eligió herencia en este caso porque **todos los servicios de IA comparten
exactamente la misma infraestructura** (rate limiting, logging, error handling).
La herencia evita duplicar ~50 líneas de boilerplate en cada servicio.

> Ver [ADR-003: Selección de GROQ para IA Generativa](../conceptos/06-adrs.md#adr-003)
````

---

### 4. Backend Guide (Estilo Laravel Docs)

> **Inspiración:** [laravel.com/docs](https://laravel.com/docs)

Formato pragmático:

- **Artisan commands** resaltados
- **Eloquent relationships** con diagramas
- **Request/Response** examples
- **Tip/Warning** boxes

````md
<!-- Ejemplo de formato para backend/02-modelos/mantenimiento.md -->

# Modelo: Mantenimiento

El modelo `Mantenimiento` representa las **órdenes de trabajo** del sistema.
Es la entidad central del dominio de mantenimiento.

## Relaciones

​`mermaid
erDiagram
    MANTENIMIENTO ||--o{ REPUESTO_USADO : "usa"
    MANTENIMIENTO }o--|| USER : "asignado a"
    MANTENIMIENTO }o--|| ACTIVO : "sobre"
    MANTENIMIENTO ||--o{ SESIONES : "tiene"
    MANTENIMIENTO ||--o{ HISTORIAL_LOGS : "registra"
​`

## Definición del Modelo

​```php
// app/Models/Mantenimiento.php

class Mantenimiento extends Model
{
protected $fillable = [
'titulo', 'descripcion', 'estado', 'prioridad',
'activo_id', 'tecnico_id', 'fecha_inicio', 'fecha_fin',
];

    // Relaciones
    public function activo(): BelongsTo
    {
        return $this->belongsTo(Activo::class);
    }

    public function tecnico(): BelongsTo
    {
        return $this->belongsTo(User::class, 'tecnico_id');
    }

    public function repuestosUsados(): HasMany
    {
        return $this->hasMany(RepuestoUsado::class);
    }

}
​```

> [!WARNING]
> El campo `estado` usa un enum con valores estrictos.
> **No** se puede asignar un estado arbitrario sin pasar por las transiciones válidas.
````

---

## 🛠 Stack Técnico del Sitio de Docs

Opciones recomendadas para construir el sitio de documentación:

### Opción A: Fumadocs (Recomendada ⭐)

| Aspecto       | Detalle                                                                               |
| ------------- | ------------------------------------------------------------------------------------- |
| **Framework** | Next.js 15 + App Router                                                               |
| **Content**   | MDX con frontmatter                                                                   |
| **Search**    | Fumadocs built-in (full-text)                                                         |
| **Styling**   | Tailwind CSS 4                                                                        |
| **Deploy**    | Vercel                                                                                |
| **Ventaja**   | Mismo stack que el proyecto principal (Next.js), monorepo-friendly, TypeScript nativo |

### Opción B: Docusaurus

| Aspecto       | Detalle                                             |
| ------------- | --------------------------------------------------- |
| **Framework** | React + Docusaurus 3                                |
| **Content**   | MDX                                                 |
| **Search**    | Algolia DocSearch (gratis para OSS)                 |
| **Styling**   | CSS Modules + Infima                                |
| **Deploy**    | Vercel / GitHub Pages                               |
| **Ventaja**   | Maduro, versionado built-in, i18n, amplia comunidad |

### Opción C: VitePress

| Aspecto       | Detalle                            |
| ------------- | ---------------------------------- |
| **Framework** | Vue 3 + Vite                       |
| **Content**   | Markdown + Vue components          |
| **Search**    | MiniSearch local                   |
| **Styling**   | CSS Variables                      |
| **Deploy**    | Vercel / Netlify                   |
| **Ventaja**   | Ultra rápido, ligero, excelente DX |

### Opción D: Mintlify

| Aspecto       | Detalle                                                          |
| ------------- | ---------------------------------------------------------------- |
| **Framework** | Managed (SaaS)                                                   |
| **Content**   | MDX                                                              |
| **Search**    | Built-in                                                         |
| **Styling**   | Theme customizable                                               |
| **Deploy**    | Managed                                                          |
| **Ventaja**   | Zero config, API playground auto, analytics, ideal para startups |

---

## 📐 Convenciones y Estándares

### Formato de Páginas

Cada archivo `.md` / `.mdx` sigue esta estructura:

```md
---
title: "Título de la Página"
description: "Descripción para SEO y previews"
icon: "🔧" # Emoji para sidebar
section: "backend" # Sección padre
order: 3 # Orden en sidebar
tags: ["laravel", "api", "rest"] # Tags para búsqueda
---

# Título de la Página

Párrafo introductorio que explica QUÉ es y POR QUÉ importa.

## Sección Principal

Contenido...

## Siguiente Paso

> **Siguiente:** [Nombre del siguiente doc](./siguiente.md)
```

### Componentes Reutilizables (MDX)

Si se usa MDX, estos componentes custom deben existir:

| Componente          | Uso                                                   | Inspiración  |
| ------------------- | ----------------------------------------------------- | ------------ |
| `<CodeBlock>`       | Código con filename tab, copy button, line highlights | Next.js Docs |
| `<ApiEndpoint>`     | Bloque GET/POST/PUT/DELETE con params y response      | Protocol     |
| `<Callout>`         | Tip, Warning, Note, Important boxes                   | Vue Docs     |
| `<Steps>`           | Pasos numerados con checkmarks                        | Stripe Docs  |
| `<Properties>`      | Tabla de propiedades/params de API                    | Protocol     |
| `<SchemaViewer>`    | Visualizador de Zod/JSON schemas                      | Stripe       |
| `<MermaidDiagram>`  | Diagrama embebido                                     | Next.js Docs |
| `<ResponseExample>` | Panel de request/response lado a lado                 | Protocol     |

### Convenciones de Escritura

1. **Idioma:** Español para texto narrativo, inglés para código y términos técnicos
2. **Voz:** Segunda persona ("configura tu entorno", "verás el resultado")
3. **Longitud:** Máx ~800 palabras por página (split si es más largo)
4. **Código:** Siempre con lenguaje especificado y filename comment
5. **Links:** Relativos entre docs, absolutos para externos
6. **Imágenes:** En `/assets/images/` con alt text descriptivo
7. **Diagramas:** Preferir Mermaid inline sobre imágenes estáticas

---

## 📅 Roadmap de Implementación

### Fase 1: Fundación (Semana 1-2)

- [ ] Elegir framework de docs (Fumadocs / Docusaurus / VitePress)
- [ ] Configurar proyecto base con sidebar navigation
- [ ] Crear design system del sitio (colores, tipografía, componentes MDX)
- [ ] Setup de deployment en Vercel
- [ ] Migrar contenido existente de `docs/learn/` (18 archivos)

### Fase 2: Core Content (Semana 3-5)

- [ ] Escribir **Getting Started** (5 páginas)
- [ ] Escribir **Conceptos Fundamentales** (6 páginas)
- [ ] Escribir **Backend Guide** completo (modelos + API) (20+ páginas)
- [ ] Escribir **AI Chatbot Guide** (features + servicios) (15+ páginas)

### Fase 3: Advanced Content (Semana 6-8)

- [ ] Escribir **API Reference** estilo Protocol (12+ páginas)
- [ ] Escribir **Seguridad** (6 páginas)
- [ ] Escribir **Performance** (5 páginas)
- [ ] Escribir **Deployment** (4 páginas)

### Fase 4: Polish (Semana 9-10)

- [ ] Escribir **Casos de Estudio** (3 páginas)
- [ ] Escribir **Apéndices** (glosario, refs, diagramas)
- [ ] Agregar diagramas Mermaid a todas las secciones
- [ ] Implementar búsqueda full-text
- [ ] Review completo de contenido
- [ ] SEO y meta tags

### Fase 5: Launch & Iterate

- [ ] Deploy a producción
- [ ] Feedback del equipo
- [ ] Analytics de uso de docs
- [ ] Iteración continua

---

## 📊 Métricas de Éxito

| Métrica                  | Target                                   |
| ------------------------ | ---------------------------------------- |
| **Cobertura**            | 100% de módulos del temario documentados |
| **Páginas totales**      | ~80-100 páginas                          |
| **Tiempo de onboarding** | < 2 horas para setup completo            |
| **Búsqueda**             | Full-text search funcional               |
| **Accesibilidad**        | WCAG 2.1 AA                              |
| **Performance**          | Lighthouse 95+                           |
| **Feedback**             | Rating promedio ≥ 4/5 del equipo         |

---

## 🔗 Recursos Existentes a Integrar

Contenido que ya existe y debe migrarse/referenciarse:

| Recurso                    | Ubicación                              | Estado         |
| -------------------------- | -------------------------------------- | -------------- |
| Temario de referencia      | `gima-docs/manual-sistemas-temario.md` | ✅ Completo    |
| 18 docs de learn (chatbot) | `gima-ai-chatbot/docs/learn/`          | ✅ Completo    |
| Docs de modelos backend    | `gima-ai-chatbot/docs/backend/`        | ✅ 15 archivos |
| Diagramas DFD              | `gima-ai-chatbot/docs/*.drawio`        | ✅ 3 niveles   |
| Workshop V1                | `gima-ai-chatbot/docs/workshop-V1.md`  | ✅ 33KB        |
| Estudios                   | `gima-ai-chatbot/docs/studies/`        | ✅ 8 archivos  |
| README chatbot             | `gima-ai-chatbot/README.md`            | ✅             |
| README backend             | `gima-backend/README.md`               | ✅             |
| Routes API                 | `gima-backend/routes/api.php`          | ✅             |

---

**Última actualización:** 2026-03-04  
**Autor:** Equipo GIMA  
**Siguiente paso:** Elegir framework de docs y comenzar Fase 1
