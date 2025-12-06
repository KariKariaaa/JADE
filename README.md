# Clínica JADE - Oftalmología y Medicina Estética

## 🏥 Descripción

Sitio web moderno y responsivo para la Clínica JADE, especializada en oftalmología y medicina estética. Desarrollado con React, Vite, Tailwind CSS y animaciones con Framer Motion.

## ✨ Características

- ✅ **Responsivo**: Funciona perfectamente en dispositivos móviles, tablets y desktops
- ✅ **Animaciones Interactivas**: Animaciones suaves con Framer Motion
- ✅ **Diseño Moderno**: Interfaz limpia y profesional con colores corporativos
- ✅ **SEO Optimizado**: Estructura semántica y meta tags
- ✅ **Rápido**: Optimizado con Vite para máxima velocidad
- ✅ **Accesible**: Cumple con estándares de accesibilidad web
- ✅ **Compatible con Vercel**: Listo para deployar

## 🛠 Tecnologías Utilizadas

- **React 19**: Framework JavaScript
- **Vite 7**: Build tool ultrarrápido
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Librería de animaciones
- **React Router DOM**: Enrutamiento de páginas
- **Lucide React**: Iconografía moderna

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Navbar.jsx       # Barra de navegación
│   ├── Footer.jsx       # Pie de página
│   ├── Button.jsx       # Botón personalizado
│   ├── Card.jsx         # Tarjeta reutilizable
│   └── SectionTitle.jsx # Título de sección
├── pages/               # Páginas principales
│   ├── Home.jsx         # Página de inicio
│   ├── About.jsx        # Página nosotros
│   ├── Services.jsx     # Página de servicios
│   ├── WhyUs.jsx        # Por qué elegirnos
│   ├── Locations.jsx    # Ubicaciones
│   ├── Doctor.jsx       # Biografía doctora
│   └── Contact.jsx      # Contacto
├── assets/              # Imágenes y recursos
├── App.jsx              # Componente principal
├── main.jsx             # Punto de entrada
└── index.css            # Estilos globales
```

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/web-clinica-jade.git
cd web-clinica-jade
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

### Build para Producción

```bash
npm run build
```

El build optimizado se generará en la carpeta `dist/`.

### Preview del Build

```bash
npm run preview
```

## 📄 Páginas Disponibles

- **Inicio** (`/`): Hero section con llamadas a la acción
- **Nosotros** (`/nosotros`): Misión, visión, historia y valores
- **Servicios** (`/servicios`): Oftalmología y medicina estética
- **Por Qué Elegirnos** (`/por-que-elegirnos`): Diferenciadores y testimonios
- **Ubicaciones** (`/ubicaciones`): 4 sedes con Google Maps
- **Doctora** (`/doctora`): Biografía y especialidades
- **Contacto** (`/contacto`): Formulario de contacto e Instagram

## 🎨 Personalización

### Colores
Los colores se definen en `tailwind.config.js`:
- **Primary**: #359ede (azul)
- **Secondary**: #ffffff (blanco)

### Contenido
Actualiza el contenido directamente en los componentes de cada página en `src/pages/`

### Información de Contacto
Actualiza datos en los componentes de Navbar, Footer y páginas de contacto.

## 📱 Características Responsivas

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menú hamburguesa en dispositivos móviles
- Grillas adaptativas

## 🔗 Integración con Vercel

1. Sube el proyecto a GitHub
2. Conecta tu repositorio con Vercel
3. Vercel detectará automáticamente que es un proyecto Vite
4. El deploy se realizará automáticamente

Alternativamente, usa el CLI:
```bash
npm i -g vercel
vercel
```

## 📧 Variables de Entorno

Crea un archivo `.env.local` basado en `.env.example`:

```
VITE_CLINIC_NAME=JADE
VITE_PRIMARY_COLOR=#359ede
VITE_PHONE=+1 (555) 123-4567
VITE_EMAIL=info@jadeclinica.com
```

## 🔐 Seguridad

- Validación de formularios en cliente
- CORS configurado
- No hay datos sensibles en el código

## ⚡ Optimizaciones

- Code splitting automático con Vite
- Lazy loading de imágenes
- CSS crítico inlinizado
- Minificación de assets

## 🐛 Solución de Problemas

### El sitio no carga
1. Verifica que estés usando Node.js 18+
2. Ejecuta `npm install` nuevamente
3. Limpia la caché: `npm cache clean --force`

### Problemas con Tailwind CSS
1. Verifica que `tailwind.config.js` existe
2. Reconstruye: `npm run build`

## 📞 Contacto y Soporte

Para preguntas o soporte, contacta a: info@jadeclinica.com

## 📄 Licencia

Este proyecto está bajo licencia MIT.

---

**Desarrollado con ❤️ para la Clínica JADE**
