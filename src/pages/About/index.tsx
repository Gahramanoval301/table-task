import { Link } from 'react-router';
import styles from './styles.module.scss';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <Link to='/' className={styles.backButton} aria-label='back'>
                ← Back
            </Link>

            <h1>Frontend Test Task (React)</h1>
            <p className={styles.description}>
                Build a responsive table in React using the provided JSON files following the Hydra API structure.
            </p>

            <section>
                <h2>📁 Data Source</h2>
                <ul>
                    <li><code>notices.json</code> → <code>/notices?page=1</code></li>
                    <li><code>notices_page2.json</code> → <code>/notices?page=2</code></li>
                    <li><code>notices_page3.json</code> → <code>/notices?page=3</code></li>
                </ul>
            </section>

            <section>
                <h2>📊 Table Columns</h2>
                <ul>
                    <li>ID</li>
                    <li>Title</li>
                    <li>Status</li>
                    <li>Created At</li>
                </ul>
            </section>

            <section>
                <h2>✅ Requirements</h2>
                <ul>
                    <li>Fetch data from the JSON files</li>
                    <li>Display the table with the data</li>
                    <li>Implement:</li>
                    <ul className={styles.subList}>
                        <li>Pagination using <code>hydra:view</code></li>
                        <li>Sorting by clicking on column headers</li>
                        <li>Filtering by status (select/input)</li>
                    </ul>
                </ul>
            </section>

            <section>
                <h2>💡 Bonus Points</h2>
                <ul>
                    <li>Clean code</li>
                    <li>Good structure</li>
                    <li>Nice styling</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
