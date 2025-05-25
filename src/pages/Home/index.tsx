import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultTransition } from '../../shared/animations';

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
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/notices" className={styles.primaryButton}>
                            View Notices
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/about" className={styles.secondaryButton}>
                            Learn More
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
