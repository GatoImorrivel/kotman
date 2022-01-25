import { Link } from 'react-router-dom'
import logo from './icon.png'
import './App.css'


export const App = () => {
  return (
    <div className={styles.background}>
      <img src={logo} alt="Logo"/>
      <Link to='/login'>Login</Link>
      <Link to='/managing'>Managing</Link>
    </div>
  )
}
