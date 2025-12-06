# 📋 Guía de Customización - Clínica JADE

## Contenido a Personalizar

### 1. **Información de la Clínica**

**Ubicación**: `src/pages/Locations.jsx`

Actualiza los datos de las 4 ubicaciones:
```javascript
const locations = [
  {
    name: 'Tu Nombre de Sede',
    address: 'Tu dirección aquí',
    phone: 'Tu teléfono',
    hours: 'Tus horarios',
    coordinates: { lat: xx.xxx, lng: -xx.xxx },
    description: 'Tu descripción'
  },
  // ... más ubicaciones
];
```

**Ubicación**: `src/components/Footer.jsx` y `src/components/Navbar.jsx`

### 2. **Información de la Doctora**

**Ubicación**: `src/pages/Doctor.jsx`

Reemplaza:
- `Dra. [Nombre Completo]` → Nombre real de la doctora
- Actualiza la biografía en el párrafo descriptivo
- Personaliza logros y certificaciones

**Para agregar foto**:
1. Coloca la imagen en `src/assets/images/`
2. En `Doctor.jsx`, reemplaza el placeholder con una etiqueta `<img>`

### 3. **Servicios Estéticos**

**Ubicación**: `src/pages/Services.jsx`

Los servicios están organizados en arrays. Puedes:
- Agregar nuevos servicios
- Modificar descripciones
- Cambiar nombres según tus procedimientos específicos

```javascript
const aestheticServices = [
  {
    category: 'Botox',
    items: [
      { name: 'Tu servicio', description: 'Tu descripción' },
      // Agrega más aquí
    ]
  },
  // Más categorías
];
```

### 4. **Colores Corporativos**

**Ubicación**: `tailwind.config.js`

Para cambiar los colores:
```javascript
colors: {
  primary: '#TU_COLOR_PRINCIPAL',
  secondary: '#ffffff',
  // Más colores...
}
```

**Ubicación**: `src/index.css`

Para cambios adicionales en CSS personalizado.

### 5. **Redes Sociales**

**Ubicación**: `src/components/Footer.jsx`

Reemplaza los enlaces:
```javascript
<a href="https://instagram.com/tu_usuario">
  <Instagram size={24} />
</a>
```

### 6. **Formulario de Contacto**

**Ubicación**: `src/pages/Contact.jsx`

Actualiza el manejador de formulario:
```javascript
const handleSubmit = (e) => {
  // Aquí puedes enviar el formulario a tu servidor
  // o a un servicio como Formspree, EmailJS, etc.
};
```

### 7. **Videos de Instagram**

**Ubicación**: `src/pages/Contact.jsx` (sección Instagram)

Reemplaza los placeholders con embeds reales:
```javascript
// Reemplaza esto con tu embed de Instagram
<iframe
  src="https://www.instagram.com/embed/..."
  width="100%"
  height="100%"
/>
```

### 8. **Google Maps**

**Ubicación**: `src/pages/Locations.jsx`

Obtén tu API key de Google Maps y actualiza:
```javascript
src={`https://www.google.com/maps/embed/v1/place?key=TU_API_KEY&q=${location.address}`}
```

## 🎨 Guía de Diseño

### Tipografía
- Títulos: Sans-serif, bold
- Body: Sans-serif, regular
- Font family: system-ui, sans-serif

### Espaciado
- Pequeño: 4px (p-1)
- Mediano: 16px (p-4)
- Grande: 24px (p-6)
- XL: 32px (p-8)

### Bordes
- Todos los botones: `rounded-full`
- Cards: `rounded-lg` o `rounded-xl`

### Sombras
- Ligera: `shadow-md`
- Media: `shadow-lg`
- Fuerte: `shadow-xl`

## 📝 Contenido a Reemplazar

### Home Page (`src/pages/Home.jsx`)
- [ ] Cambiar "Tu visión, nuestra pasión" por tu eslogan
- [ ] Actualizar descripción de servicios
- [ ] Personalizar valores (atención, diagnósticos, confianza)

### About Page (`src/pages/About.jsx`)
- [ ] Misión personalizada
- [ ] Visión personalizada
- [ ] Historia de la clínica
- [ ] Valores específicos

### Services Page (`src/pages/Services.jsx`)
- [ ] Todos los servicios oftalmológicos
- [ ] Todos los servicios estéticos
- [ ] Descripciones detalladas

### Why Us Page (`src/pages/WhyUs.jsx`)
- [ ] Razones específicas para elegir tu clínica
- [ ] Testimonios de pacientes reales
- [ ] Diferenciadores únicos

## 🔧 Tareas Técnicas

### Antes de publicar:

1. **Verificar links**
   - Todos los enlaces en Navbar funcionan
   - Enlaces a redes sociales correctos
   - Formulario de contacto funcional

2. **Probar responsividad**
   - Desktop (1920x1080)
   - Tablet (768x1024)
   - Mobile (375x667)

3. **Performance**
   ```bash
   npm run build
   npm run preview
   ```

4. **SEO**
   - Actualizar `index.html` con meta tags
   - Títulos descriptivos
   - Descripciones en cada página

5. **Analytics**
   - Agregar Google Analytics si deseas

## 📦 Deploy en Vercel

```bash
# 1. Crear cuenta en vercel.com
# 2. Conectar tu repositorio GitHub
# 3. Vercel desplegará automáticamente

# O usar CLI:
npm i -g vercel
vercel
```

## 💡 Tips Adicionales

- **Imágenes**: Optimiza antes de subirlas (compress.com)
- **Videos**: Usa archivos .webp para mejor performance
- **Formularios**: Considera usar Formspree o EmailJS
- **Analytics**: Google Analytics es gratuito
- **SSL**: Vercel proporciona HTTPS automáticamente

## 🆘 Soporte

Para cambios más complejos:
1. Busca en la documentación oficial de las librerías
2. React: react.dev
3. Tailwind: tailwindcss.com
4. Framer Motion: framer.com/motion

## ✅ Checklist Pre-Lanzamiento

- [ ] Todos los textos personalizados
- [ ] Todas las imágenes optimizadas
- [ ] Redes sociales vinculadas
- [ ] Formulario funcional
- [ ] Links verificados
- [ ] Mobile responsive verificado
- [ ] SEO configurado
- [ ] Domain apuntando a Vercel

---

¡Tu sitio está listo para personalizar! 🚀
