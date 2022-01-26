import styles from './styles.module.css'

export const Checkbox = ({ isChecked }) => {
  return (
    <label className={ styles.wrapper }>
      <input type='checkbox' defaultChecked={ isChecked }/>
      <span className={ styles.checkmark }></span>
    </label>
  )
}