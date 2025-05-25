import styles from './Home.module.scss';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultTransition } from '../../shared/animations';
import AnimatedButton from '../../shared/components/AnimatedButton';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ ...defaultTransition, delay: 0.2 }}
                >
                    Welcome to My App
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ ...defaultTransition, delay: 0.3 }}
                >
                    Discover notices, manage updates, and stay informed.
                </motion.p>

                <motion.div
                    className={styles.actions}
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <AnimatedButton to="/notices" className={styles.primaryButton}>
                        View Notices
                    </AnimatedButton>
                    <AnimatedButton to="/about" className={styles.secondaryButton}>
                        Learn More
                    </AnimatedButton>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
