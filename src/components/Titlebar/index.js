import styles from './styles.module.css'
const { ipcRenderer } = require('electron')

export const Titlebar = () => {
  return(
		<div className={ styles.titlebar }>
      <img className={ styles.titlebarLogo } src='/icons/png/512x512.png' alt='logo'/>
      <div className={ styles.buttonsWrapper }>
        <div className={ `${styles.windowButton} ${styles.minimizeBtn}` } id='minimize-btn'></div>
        <div className={ `${styles.windowButton} ${styles.fullscreenBtn}` } id='fullscreen-btn'></div>
        <div className={ `${styles.windowButton} ${styles.closeBtn}` } id='close-btn'></div>
      </div>
		</div>
	)
}