import './Titlebar.css'

export const Titlebar = () => {
  return(
		<div className='titlebar'>
      <img className='titlebar-logo' src='/icons/png/512x512.png' alt='logo'/>
      <div className='titlebar-buttons-wrapper'>
        <input type='button' className='titlebar-window-button' id='minimize-btn'/>
        <input type='button' className='titlebar-window-button' id='fullscreen-btn'/>
        <input type='button' className='titlebar-window-button' id='close-btn'/>
      </div>
		</div>
	)
}