import styles from './styles.module.css'

export const Sidebar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logoWrapper}>
        <img src='/icon.png' alt='logo' className={styles.logoImg}/>
        <span className={styles.logoTitle}>KotMan</span>
      </div>
      <div className={styles.content}></div>
    </div>
  )
}