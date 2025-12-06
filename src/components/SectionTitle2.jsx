import { motion } from 'framer-motion';

export default function SectionTitle2({ 
  title, 
  subtitle = '',
  centered = true,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : ''} mb-12 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold uppercase text-[white] mb-4">
        <span className="text-primary">{title.split(' ')[0]}</span>
        {title.includes(' ') && ` ${title.substring(title.indexOf(' ') + 1)}`}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-800 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
