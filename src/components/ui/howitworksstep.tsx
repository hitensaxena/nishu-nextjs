import { motion } from 'framer-motion';
import Chip from '@/components/ui/Chip';

interface HowItWorksStepProps {
  number: string;
  title: string;
  description: string;
  quote?: string;
  isActive?: boolean;
}

export default function HowItWorksStep({ 
  number, 
  title, 
  description, 
  quote,
  isActive = false 
}: HowItWorksStepProps) {
  return (
    <motion.div 
      className="flex flex-col gap-4"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 30,
        scale: isActive ? 1 : 0.95
      }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <div>
        <Chip className="!text-xl !uppercase !tracking-widest bg-primary/10 text-primary">
          STEP {number}
        </Chip>
      </div>
      <div>
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          animate={{
            opacity: isActive ? 1 : 0.3
          }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-text-secondary text-base sm:text-lg mb-4"
          animate={{
            opacity: isActive ? 1 : 0.3
          }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
        {quote && (
          <motion.p 
            className="text-gray-600 text-sm sm:text-base italic"
            animate={{
              opacity: isActive ? 1 : 0.3
            }}
            transition={{ delay: 0.3 }}
          >
            {quote}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}