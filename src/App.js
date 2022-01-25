import { Link } from 'react-router-dom'
import { Titlebar } from './components/Titlebar'
import './App.css'


export const App = () => {
  return (
    <div className='main'>
      <Titlebar></Titlebar>
      <div className='background'></div>
      <img src='/icon.png' alt='Logo' className='logo'/>
      <div className='routes-wrapper'>
        <Link to='/login' className='link'>Login</Link>
        <Link to='/managing' className='link'>Create new profile</Link>
      </div>
    </div>
  )
}
