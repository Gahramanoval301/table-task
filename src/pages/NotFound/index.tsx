import styles from './NotFound.module.scss';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className={styles.notFoundcontainer}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.link}>Go back home</Link>
    </div>
  );
};

export default NotFound;
