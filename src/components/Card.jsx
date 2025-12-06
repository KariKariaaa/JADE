import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '',
  delay = 0,
  hover = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)' } : {}}
      className={`bg-white rounded-xl shadow-md p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
