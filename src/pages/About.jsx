import { motion } from 'framer-motion';
import { Card, SectionTitle, Button, SectionTitle2 } from '../components';
import { CheckCircle, Lightbulb, Heart, Users, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import fondo from '../assets/images/fondo-about.jpg';
import imagen from '../assets/images/whyus.jpg';

export default function About() {
  const missionVision = [
    {
      icon: Lightbulb,
      title: 'Nuestra Misión',
      content: 'Proporcionar atención oftalmológica de excelencia, combinando medicina avanzada con un toque humano, para mejorar la calidad de vida de nuestros pacientes.'
    },
    {
      icon: Heart,
      title: 'Nuestra Visión',
      content: 'Ser la clínica de referencia en oftalmología, reconocida por nuestra innovación, dedicación al paciente y resultados excepcionales.'
    }
  ];

  const history = [
    { year: '2014', event: 'Fundación de Clínica JADE con una sola sede' },
    { year: '2016', event: 'Expansión a segunda ubicación' },
    { year: '2018', event: 'Obtención de certificación en medicina estética' },
    { year: '2020', event: 'Tercera sede inaugurada' },
    { year: '2022', event: 'Cuarta ubicación estratégica' },
    { year: '2024', event: 'Líderes en oftalmología de la región' },
  ];

  const values = [
    { icon: CheckCircle, text: 'Brindamos atención personalizada a cada paciente' },
    { icon: CheckCircle, text: 'Damos diagnósticos seguros con tecnología de punta' },
    { icon: CheckCircle, text: 'Inspiramos confianza a través de nuestro profesionalismo' },
    { icon: CheckCircle, text: 'Nos comprometemos con la excelencia en cada procedimiento' },
    { icon: CheckCircle, text: 'Priorizamos la comodidad y satisfacción del paciente' },
    { icon: CheckCircle, text: 'Actualizamos constantemente nuestros conocimientos' },
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

        <div className="z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#359ede] mb-6">
                CONOCE A JADE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Más de una década dedicada a la excelencia en oftalmología. Tu confianza es nuestro mayor logro.
            </p>

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

            {missionVision.map((item, index) => {
              const IconComponent = item.icon;
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
                    <div className="w-14 h-14 rounded-full bg-[#359ede] flex items-center justify-center mb-4">
                      <IconComponent size={28}  className="text-white animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </section>

      {/* Values Section <section className="py-20 bg-linear-to-r from-[white] to-[#359ede]/20 p-6 text-white"> */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Nuestros Valores"
            subtitle="Lo que nos distingue en cada atención"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-[#359ede] flex items-center justify-center">
                    <IconComponent size={28} className='text-white' />
                  </div>
                  <p className="text-gray-700 text-lg mt-1">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctora Section */}
      <section className="py-20 bg-linear-to-r from-[#359ede] to-[#359ede]/20 p-6 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle2 
            title="Conoce a nuestra doctora"
            subtitle="Dedicada a brindarte una excelente atención oftalmológica con profesionalismo y calidez humana."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
            <img 
                src={imagen}  // Aquí va tu imagen real
                alt="Elegirnos"
                className="rounded-3xl shadow-lg object-cover w-lg max-w-sm"
            />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Dra. Wendy Ventura Klug
              </h2>
              <p className="text-primary font-bold text-lg mb-6">
                Oftalmóloga Oculoplástica | Especialista en Medicina Estética
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Con más de una década de experiencia en oftalmología, la Dra. Wendy se ha convertido en referente en el cuidado de la salud visual.
                </p>
                <p>
                  Su pasión por la medicina y dedicación a cada paciente la caracterizan como una profesional empática y de alto nivel técnico. Combina los conocimientos médicos más avanzados con una atención personalizada que genera confianza y satisfacción.
                </p>
                <p>
                  Constantemente se actualiza en las técnicas más modernas y ha participado en congresos internacionales de oftalmología y medicina, lo que le permite ofrecer siempre las mejores opciones.
                </p>
              </div>

            <p className="space-y-4 text-gray-600 leading-relaxed mb-8">
              "Mi objetivo es que cada paciente se sienta escuchado, comprendido y tratado como merece. 
              La medicina es ante todo un acto de humanidad. Busco no solo mejorar la salud visual de mis pacientes, 
              sino también su confianza y calidad de vida."
            </p>

            </motion.div>
          </div>
        </div>
      </section>

        {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <SectionTitle
            title="Nuestra Historia"
            subtitle="Un camino de crecimiento y dedicación"
            />

            <p className='text-center space-y-4 text-gray-600 leading-relaxed mb-8'>Proximamente...</p>

            <div className="relative mt-12">

            {/* Línea vertical centrada 
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-[#359ede]/40 rounded-full"></div>
            */}
            {/* 
            <div className="space-y-12">
                {history.map((item, index) => {
                const isLeft = index % 2 === 0; // Alterna

                return (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                    >
                    {/* Card IZQUIERDA 
                    {isLeft && (
                        <div className="pr-[55%] text-right">
                        <div className="bg-[#359ede] p-6 rounded-xl shadow-lg max-w-md ml-auto">
                            <p className="text-white font-bold text-lg mb-2">{item.year}</p>
                            <p className="text-white">{item.event}</p>
                        </div>
                        </div>
                    )}*/}

                    {/* Punto en la línea 
                    <div className="absolute left-1/2 -translate-x-1/2 top-2 w-7 h-7 mt-7 rounded-full bg-[#359ede] border-4 border-white shadow-md"></div>
                    */}
                    {/* Card DERECHA 
                    {!isLeft && (
                        <div className="pl-[55%]">
                        <div className="bg-[#359ede] p-6 rounded-xl shadow-lg max-w-md">
                            <p className="text-white font-bold text-lg mb-2">{item.year}</p>
                            <p className="text-white">{item.event}</p>
                        </div>
                        </div>
                    )}
                    </motion.div>
                );
                })}
            </div>          
            */}
            </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-[#359ede] to-[#359ede]/40 p-6 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold uppercase mb-4">
            Únete a Miles de Pacientes Satisfechos
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Descubre por qué nos eligen
          </p>
          <Link to="/servicios">
            <Button variant="outline" size="lg">
              Conoce Nuestros Servicios
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
