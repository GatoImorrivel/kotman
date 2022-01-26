import { Titlebar } from '../../components/Titlebar'
import { Sidebar } from '../../components/Sidebar'
import { Checkbox } from '../../components/Checkbox'
import styles from './styles.module.css'

export const LoginRoute = () => {
  return (
    <div className={styles.background}>
      <Titlebar />
      <div className={ styles.contentWrapper }>
        <Sidebar />
        <div className={ styles.formWrapper }>
          <h1 className={styles.loginTitle}>Login</h1>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor='userInput' className={styles.formLabel}>Username:</label>
              <input type='text' id='userInput' className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='passInput' className={styles.formLabel}>Password:</label>
              <input type='text' id='passInput' className={styles.formInput} />
            </div>
            <div className={ `${styles.formGroup} ${styles.rememberMe}`}>
              <label htmlFor='rememberInput' className={styles.formLabel}>Remember Me:</label>
              <div className={ styles.checkboxWrapper }>
                <Checkbox isChecked={false}/>
              </div>
            </div>
            <div className={styles.submitBtn}>Login</div>
          </form>
        </div>
      </div>
    </div>
  )
}