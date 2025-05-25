import { Link } from 'react-router'
import NoticeTable from '../../components/NoticeTable'
import styles from "./Notices.module.scss"

const Notices = () => {
  return (
    <div className={styles.noticesContainer}>
      <Link to='/' aria-label='back'>
        ← Back
      </Link>
      <div className={styles._list}>
        <h3>List of Notices</h3>
        <NoticeTable />
      </div>
    </div>
  )
}

export default Notices