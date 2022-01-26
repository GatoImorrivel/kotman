import { Link } from 'react-router-dom'
import { Titlebar } from './components/Titlebar'
import styles from './app.module.css'

export const App = () => {
  return (
    <div className={ styles.main }>
      <Titlebar/>
      <div className={ styles.background }></div>
      <img src='/icon.png' alt='Logo' className={ `${styles.logo} ${styles.fadeIn}` }/>
      <div className={ styles.routesWrapper }>
        <Link to='/login' className={ `${styles.link} ${styles.fadeIn}` }>Login</Link>
        <Link to='/managing' className={ `${styles.link} ${styles.fadeIn}` }>New profile</Link>
      </div>
    </div>
  )
}
