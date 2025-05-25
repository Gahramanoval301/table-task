import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AnimatedButtonProps {
    to: string;
    className: string;
    children: React.ReactNode;
}

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ to, className, children }) => (
    <motion.div
        variants={fadeInUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <Link to={to} className={className}>
            {children}
        </Link>
    </motion.div>
);

export default AnimatedButton;
