import { motion } from 'framer-motion';
import { Smile, Heart, HeartPulse, Star, Users, Award, Clock, Facebook, Instagram, Phone} from 'lucide-react';
import { Button, Card, SectionTitle, SectionTitle2} from '../components';
import { Link } from 'react-router-dom';
import fondo from '../assets/images/fondo.jpg';
import whyus from '../assets/images/whyus.jpg';
import img1 from '../assets/images/especializacion-comprobada.jpg';
import img2 from '../assets/images/atencion-personalizada.jpg';
import img3 from '../assets/images/resultados-excepcionales.jpg';
import img4 from '../assets/images/disponibilidad-accesibilidad.jpg';
import img5 from '../assets/images/diagnosticos-seguros.jpg';
import img6 from '../assets/images/inspiramos-confianza.jpg';

export default function Home() {
  const reasons = [
    {
      icon: Award,
      title: 'Especialización Comprobada',
      description: 'Dra. Oftalmóloga Oculoplástica con Máster en Medicina Estética y Anti-aging. Certificaciones internacionales en procedimientos estéticos avanzados.',
      image: img1
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Cada paciente recibe una evaluación completa y un plan de tratamiento diseñado específicamente para sus necesidades y objetivos.',
      image: img3
    },
    {
      icon: Star,
      title: 'Resultados Excepcionales',
      description: 'Miles de pacientes satisfechos con resultados naturales, seguros y duraderos. Nuestras técnicas garantizan máxima satisfacción.',
      image: img2
    },
    {
      icon: Clock,
      title: 'Disponibilidad y Accesibilidad',
      description: 'Con 4 ubicaciones estratégicas y horarios flexibles, nos adaptamos a tu agenda para garantizar tu comodidad.',
      image: img4
    },
    {
      icon: Heart,
      title: 'Damos Diagnósticos Seguros',
      description: 'Utilizamos tecnología de punta para garantizar diagnósticos precisos y tratamientos efectivos.',
      image: img5
    },
    {
      icon: Smile,
      title: 'Inspiramos Confianza',
      description: 'Con más de una década de experiencia, nos hemos convertido en el referente de oftalmología y estética en la región.',
      image: img6
    },
  ];

  const features = [
    'Tecnología de última generación',
    'Ambiente acogedor y seguro',
    'Protocolos de higiene rigurosos',
    'Seguimiento post-tratamiento',
    'Garantía de satisfacción',
    'Planes de pago flexibles',
    'Personal capacitado y amable',
    'Confidencialidad garantizada',
  ];

  const testimonials = [
    {
      name: 'María López',
      role: 'Paciente',
      text: 'Excelente atención y resultados maravillosos. La dra. es muy profesional y empática.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Paciente',
      text: 'Mi visión mejoró significativamente. Recomiendo a JADE sin dudarlo.',
      rating: 5
    },
    {
      name: 'Ana García',
      role: 'Paciente',
      text: 'Tratamientos seguros y resultados naturales. Estoy muy satisfecha.',
      rating: 5
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
        <section
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
            backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(53, 158, 222, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(53, 158, 222, 0.08) 0%, transparent 50%),
            url(${fondo})
            `
        }}
        >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply blur-3xl animate-pulse-soft"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-[#359ede] mb-12">
              <span className="text-primary">JADE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Clínica especializada en Oftalmología y Medicina Estética
            </p>
            <div className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 mb-8">
                <span>ESPECIALISTA CERTIFICADA<br />
                    Dra. Wendy Ventura Klug<br />
                    Oftalmóloga Oculoplástica
                </span>

            <span className="w-15 h-15 flex items-center justify-center rounded-full bg-[#359ede]">
                <HeartPulse className="text-primary animate-pulse" size={40} />
            </span>
            </div>

            <div className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 mb-12">
              <a 
                href="https://www.facebook.com/Dra.WendyVenturaOftalmologaOculoplastica" 
                className="text-gray-300 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={30} />
              </a>
              <a 
                href="https://www.instagram.com/jadeclinicadeojos/" 
                className="text-gray-300 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={30} />
              </a>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/servicios">
              <Button size="lg">
                Descubre Nuestros Servicios
              </Button>
            </Link>
            <Link to="/ubicaciones">
              <Button size="lg">
                Encuentra Nuestras Ubicaciones
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hero Why Us */}
      <section className="bg-[white] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Texto */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <h1 className="text-5xl md:text-6xl font-bold text-[#359ede] mb-6">
                ¿POR QUÉ ELEGIRNOS?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
                En JADE, nos dedicamos a brindar atención oftalmológica de excelencia combinada con tratamientos estéticos innovadores. Nuestra misión es mejorar la salud visual y la confianza de nuestros pacientes.
                Somos tu mejor opción en oftalmología y medicina estética. Descubre qué nos hace diferentes.
            </p>
            </motion.div>

            {/* Imagen */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
            >
            <img 
                src={whyus}  // Aquí va tu imagen real
                alt="Elegirnos"
                className="rounded-3xl shadow-lg object-cover w-sm max-w-sm"
            />
            </motion.div>

        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20 bg-linear-to-r from-[#359ede] to-[#359ede]/20 p-6 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle2 
            title="LO QUE NOS CARACTERIZA"
            subtitle="Razones por las que miles de pacientes confían en nosotros"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
                >
                {/* Imagen arriba */}
                <div className="h-64 w-full overflow-hidden">
                    <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-full object-cover"
                    />
                </div>

                {/* Card inferior */}
                <div className="p-8">
                    <div className="w-14 h-14 rounded-full bg-[#359ede] flex items-center justify-center mb-4">
                    <IconComponent size={28} className="text-white animate-pulse" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {reason.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                    </p>
                </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Lo Que Dicen Nuestros Pacientes"
            subtitle="Testimonios de quienes confiaron en nosotros"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card delay={index} className="h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-[#359ede] to-[#359ede]/40 p-6 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold uppercase mb-4">
            Sé Parte de Nuestra Familia
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Agenda tu cita hoy mismo y comienza tu transformación
          </p>

          <a
            href="https://wa.me/50232143023?text=Quiero%20agendar%20una%20cita%20en%20JADE"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button
            variant="outline"
            size="lg"
            className="inline-flex items-center gap-2"
          >
            <Phone className="mr-2" size={20} /> Agenda tu Cita Hoy
          </Button>
          </a>
        </div>
      </section>

    </div>
  );
}
