import './Titlebar.css'
import electron from 'electron'


export const Titlebar = () => {
  return(
		<div className='titlebar'>
      <img className='titlebar-logo' src='/icons/png/512x512.png' alt='logo'/>
      <div className='titlebar-buttons-wrapper'>
        <div className='titlebar-window-button' id='minimize-btn'></div>
        <div className='titlebar-window-button' id='fullscreen-btn'></div>
        <div className='titlebar-window-button' id='close-btn'></div>
      </div>
		</div>
	)
}