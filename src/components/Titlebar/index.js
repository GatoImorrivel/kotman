import styles from './styles.module.css'
const { ipcRenderer } = window.require('electron')

export const Titlebar = () => {
  return(
		<div className={ styles.titlebar }>
      <img className={ styles.titlebarLogo } src='/icons/png/512x512.png' alt='logo'/>
      <div className={ styles.buttonsWrapper }>
        <div className={ `${styles.windowButton} ${styles.minimizeBtn}` } id='minimize-btn' onClick={() => {
          ipcRenderer.send('minimizeWindow')
        }}></div>
        <div className={ `${styles.windowButton} ${styles.fullscreenBtn}` } id='fullscreen-btn' onClick={() => {
          ipcRenderer.send('fullscreenWindow')
        }}></div>
        <div className={ `${styles.windowButton} ${styles.closeBtn}` } id='close-btn' onClick={() => {
          ipcRenderer.send('closeWindow')
        }}></div>
      </div>
		</div>
	)
}