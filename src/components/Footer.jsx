import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">JADE</h3>
            <p className="text-gray-300 text-sm">
              Clínica especializada en oftalmología con más de una década de experiencia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/servicios" className="hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/ubicaciones" className="hover:text-primary transition-colors">
                  Ubicaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary" />
                <span>+(502) 3214-3023</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary" />
                <span>info@jadeclinica.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-primary mt-1" />
                <span>Múltiples ubicaciones</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
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
          </div>
        </div>
        

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 Clínica JADE. Todos los derechos reservados.</p>
            <div className="inline-flex items-center space-x-6 mt-4 md:mt-0">
                <a 
                  href="https://www.linkedin.com/in/diana-karina-paola-coc-rax-7b2935318/" 
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} className="text-primary" />
                  <span>Producido por Karina Coc</span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
