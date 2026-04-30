import { motion } from 'framer-motion';
import { Card, SectionTitle, Button } from '../components';
import { MapPin, Phone, Clock, MapIcon, HeartPulse, Facebook, Instagram, Eye} from 'lucide-react';
import { useState } from 'react';
import fondo from '../assets/images/fondo-locations.jpg';
import { Link } from 'react-router-dom';

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = [
    {
      name: "Clínica Cobán",
      address: "14 Avenida 1-09, Cobán 16001",
      phone: "+(502) 3214-3023",
      hours: "Lun - Vie: 9:00 AM - 6:00 PM",
      hours2: "Sábados: 9:00 AM - 12:00 PM",
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7690.515985184627!2d-90.38988427507311!3d15.470548854791483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858a47d5fb9de5b9%3A0x4c08c931b0b5f697!2sOPTICAS%20Y%20CLINICA%20DE%20OJOS%20JADE!5e0!3m2!1ses!2sgt!4v1764997243220!5m2!1ses!2sgt",
      description: "Nuestra sede principal con equipamiento de última generación"
    },
    {
      name: "Clínica Carchá",
      address: "7 Avenida 4-20, San Pedro Carchá",
      phone: "+(502) 234-5678",
      hours: "Lun - Vie: 9:00 AM - 6:00 PM",
      hours2: "Sábados: 9:00 AM - 12:00 PM",
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7690.238006416303!2d-90.32000597566365!3d15.478029785972053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858a411cdb3bc699%3A0xdd65b64d3faca4a0!2sOPTICAS%20Y%20CL%C3%8DNICA%20DE%20OJOS%20JADE!5e0!3m2!1ses!2sgt!4v1764997131673!5m2!1ses!2sgt",
      description: "Ubicación estratégica en Carchá con atención especializada"
    },
    {
      name: "Clínica Tactic",
      address: "2da. Calle, Tactic",
      phone: "+(502) 345-6789",
      hours: "Lun - Vie: 8:00 AM - 5:00 PM",
      hours2: "Sábados: 9:00 AM - 12:00 PM",
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30784.455244061428!2d-90.37460956007502!3d15.319142333622738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858a3fdb2e9cb9ad%3A0x6baf39c7c6f13cd5!2sOPTICAS%20Y%20CLINICA%20JADE!5e0!3m2!1ses!2sgt!4v1764997324057!5m2!1ses!2sgt",
      description: "Moderna instalación con amplios espacios de espera"
    },
    {
      name: "Clínica Xela",
      address: "Avenida Oriental 321, Suite 150",
      phone: "+(502) 456-7890",
      hours: "Lun - Vie: 9:00 AM - 7:00 PM",
      hours2: "Sábados: 9:00 AM - 12:00 PM",
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7690.515985184627!2d-90.38988427507311!3d15.470548854791483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858a47d5fb9de5b9%3A0x4c08c931b0b5f697!2sOPTICAS%20Y%20CLINICA%20DE%20OJOS%20JADE!5e0!3m2!1ses!2sgt!4v1764997243220!5m2!1ses!2sgt",
      description: "Centro oftalmológico completo con servicios integrales"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Locations*/}
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
              <span className="text-primary">NUESTRAS UBICACIONES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Contamos con 4 sedes estratégicamente ubicadas para tu comodidad. Encuentra la más cercana a ti.
            </p>
            <div className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 mb-8">
                <span>ESPECIALISTA CERTIFICADA<br />
                    Dra. Wendy Ventura Klug<br />
                    Oftalmóloga Oculoplástica
                </span>

                <span className="w-15 h-15 flex items-center justify-center rounded-full bg-[#359ede]">
                    <Eye className="text-primary animate-pulse" size={40} />
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

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Locations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Location Cards */}
            <div className="space-y-4">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedLocation(index)}
                  className={`p-6 rounded-lg cursor-pointer transition-all transform ${
                    selectedLocation === index
                      ? 'bg-[#359ede] text-white shadow-lg scale-105'
                      : 'bg-gray-50 text-gray-900 hover:shadow-md'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin size={16} className="shrink-0 mt-0.5" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={16} />
                      <span>{location.phone}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              key={selectedLocation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-linear-to-br from-primary/20 to-blue-50 rounded-lg h-96 flex items-center justify-center relative overflow-hidden mb-10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    loading="lazy"
                    allowFullScreen
                    src={locations[selectedLocation].embed}
                  />
                </div>
              </div>

            {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg cursor-pointer transition-all transform bg-[#359ede] text-white shadow-lg scale-105'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">HORARIO DE ATENCIÓN</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <Clock size={16} className="shrink-0 mt-0.5" />
                      <span>{locations[selectedLocation].hours}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock size={16} className="shrink-0 mt-0.5" />
                      <span>{locations[selectedLocation].hours2}</span>
                    </div>
                  </div>
                </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-[#359ede] to-[#359ede]/40 p-6 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold uppercase mb-4">
            Visítanos Hoy Mismo
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nuestro equipo está listo para brindarte la mejor atención
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
            <Phone className="mr-2" size={20} /> Agendar Cita
          </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
