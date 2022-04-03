import icon from '../../icons/png/512x512.png'
import styles from './styles.module.css'

export const Sidebar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logoWrapper}>
        <img src={icon} alt='logo' className={styles.logoImg}/>
        <span className={styles.logoTitle}>KotMan</span>
      </div>
      <div className={styles.content}></div>
    </div>
  )
}