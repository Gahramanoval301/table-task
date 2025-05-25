import styles from './Home.module.scss';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Welcome to My App</h1>
                <p className={styles.subtitle}>
                    Discover notices, manage updates, and stay informed. Everything you need in one place.
                </p>
                <div className={styles.actions}>
                    <Link to="/notices" className={styles.primaryButton}>View Notices</Link>
                    <Link to="/about" className={styles.secondaryButton}>Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
