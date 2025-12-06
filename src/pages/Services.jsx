import { motion } from 'framer-motion';
import { Card, SectionTitle, Button, SectionTitle2 } from '../components';
import { Check, Heart, Sparkles, HeartPulse, Facebook, Instagram, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import fondo from '../assets/images/fondo-services.jpg';
import img1 from '../assets/images/examen.jpg';
import img2 from '../assets/images/glaucoma.jpg';
import img3 from '../assets/images/catarata.jpeg';
import img4 from '../assets/images/pterigion.jpg';
import img5 from '../assets/images/ojo-rojo.jpg';
import img6 from '../assets/images/defectos-refractivos.jpg';

import { useEffect } from "react";

export function InstagramEmbed({ url }) {
  useEffect(() => {
    // Si el script de Instagram ya está cargado
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      // Cargar el script solo una vez
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ width: "100%", minHeight: "400px", border: "none", overflow: "hidden" }}
    />
  );
}

export default function Services() {
  const [expandedService, setExpandedService] = useState(0);

  const ophthalmologyServices = [
    {
      title: 'Examen Oftalmológico Completo',
      description: 'Evaluación integral de la salud visual con tecnología de última generación',
      details: 'Incluye pruebas de agudeza visual, presión intraocular y evaluación de retina con equipos modernos.',
      image: img1
    },
    {
      title: 'Glaucoma',
      description: 'Diagnóstico y tratamiento especializado del glaucoma',
      details: 'Detección temprana mediante tecnología avanzada y planes terapéuticos personalizados.',
      image: img2
    },
    {
      title: 'Cataratas',
      description: 'Cirugía y tratamiento de cataratas',
      details: 'Procedimientos quirúrgicos mínimamente invasivos con excelentes resultados visuales.',
      image: img3
    },
    {
      title: 'Pterigión',
      description: 'Tratamiento de pterigión ocular',
      details: 'Técnicas avanzadas para remover esta malformación con mínimo riesgo de recurrencia.',
      image: img4
    },
    {
      title: 'Ojo Rojo',
      description: 'Diagnóstico y tratamiento de afecciones del ojo rojo',
      details: 'Identificación de causas y tratamiento efectivo de irritación ocular.',
      image: img5
    },
    {
      title: 'Defectos Refractivos',
      description: 'Corrección de miopía, hipermetropía y astigmatismo',
      details: 'Opciones de tratamiento incluyendo lentes y procedimientos quirúrgicos.',
      image: img6
    },
  ];

  const aestheticServices = [
    {
      category: 'Botox',
      items: [
        {
          name: 'Atenuación de Líneas de Expresión',
          description: 'Suaviza arrugas dinámicas del rostro para una apariencia más joven'
        },
        {
          name: 'Blefaroespasmo',
          description: 'Tratamiento del espasmo involuntario de los párpados'
        },
        {
          name: 'Bruxismo',
          description: 'Reduce el apretar o rechinar de dientes'
        },
        {
          name: 'Hiperhidrosis',
          description: 'Controla la sudoración excesiva de forma segura y eficaz'
        }
      ]
    },
    {
      category: 'Ácido Hialurónico',
      items: [
        {
          name: 'Perfilamiento de Labios',
          description: 'Realza y define los labios para una sonrisa más atractiva'
        },
        {
          name: 'Relleno de Surco Nasolabial',
          description: 'Suaviza los pliegues entre nariz y labios'
        },
        {
          name: 'Tratamiento de Ojeras',
          description: 'Reduce la apariencia de ojeras con hidratación profunda'
        }
      ]
    },
    {
      category: 'Bioestimulación de Colágeno',
      items: [
        {
          name: 'Rejuvenecimiento Facial',
          description: 'Estimula la producción natural de colágeno para una piel más firme y radiante'
        },
        {
          name: 'Lifting No Quirúrgico',
          description: 'Mejora la elasticidad y tonalidad de la piel sin cirugía'
        }
      ]
    }
  ];

  const instagramPosts = [
    "https://www.instagram.com/p/DPMINPJjQNC/",
    "https://www.instagram.com/p/DNWFdrxthRq/",
    "https://www.instagram.com/p/DNntpW7tzOs/"
  ];

  return (
    <div className="pt-16">
      {/* Hero Services*/}
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
            
            {/* Texto */}
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            >
            <h1 className="text-6xl md:text-8xl font-bold text-[#359ede] mb-12">
              <span className="text-primary">SERVICIOS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Ofrecemos soluciones integrales para tu salud visual y belleza.
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
        </div>
      </section>

      {/* Ophthalmology Services */}
      <section className="py-20 bg-[white]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Oftalmología Especializada"
            subtitle="Servicios completos para cuidar tu visión"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ophthalmologyServices.map((serviceGroup, index) => {
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
                    src={serviceGroup.image} 
                    alt={serviceGroup.title}
                    className="w-full h-full object-cover"
                    />
                </div>

                {/* Card inferior */}
                <div className="p-8">

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {serviceGroup.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-3">
                    {serviceGroup.description}
                    </p>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-4 border-t border-gray-200"
                      >
                        <p className="text-gray-600 italic">{serviceGroup.details}</p>
                      </motion.div>
                </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>  

      {/* Aesthetic Services */}
      <section className="py-20 bg-linear-to-r from-[#359ede] to-[#359ede]/20 p-6 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle2 
            title="Medicina Estética Avanzada"
            subtitle="Tratamientos seguros con resultados excepcionales"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aestheticServices.map((serviceGroup, index) => {
              return (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
                >

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {serviceGroup.category}
                    </h3>
                  </div>
                  {/* Services Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      {serviceGroup.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.1, duration: 0.5 }}
                          className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:bg-primary/5 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#359ede] flex items-center justify-center mt-1">
                            <Check size={14} className="text-white"  />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-2">
                              {item.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>   

      {/* Instagram Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <SectionTitle 
            title="Síguenos en Instagram"
            subtitle="Visualiza nuestros últimos trabajos e innovaciones"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {instagramPosts.map((url, index) => (
              <motion.div
                key={url}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="rounded-xl overflow-hidden shadow-xl bg-white"
              >
                <InstagramEmbed url={url} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>     

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-[#359ede] to-[#359ede]/40 p-6 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold uppercase mb-4">
            ¿Listo para Transformarte?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Agenda una consulta y conoce cuál es el mejor tratamiento para ti
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
            <Phone className="mr-2" size={20} /> Agendar Consulta
          </Button>
          </a>

        </div>
      </section>
    </div>
  );
}
