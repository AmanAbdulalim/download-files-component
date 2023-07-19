import { ReactElement, useEffect, useRef } from "react"
import styles from './SelectedCount.module.css'

type SelectedCountProps = {
  selectedCount: number;
  availableCount: number;
  handleOnChange: () => void;
}

export default function SelectedCount(props: SelectedCountProps): ReactElement {
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(props.selectedCount === 0) {
      if(checkboxRef.current) {
        checkboxRef.current.checked = false
        checkboxRef.current.indeterminate = false
      }
      return 
    }

    if(props.selectedCount < props.availableCount) {
      if(checkboxRef.current) {checkboxRef.current.indeterminate = true}
    } else {
      if(checkboxRef.current) {checkboxRef.current.indeterminate = false}
    }

    if(checkboxRef.current) {checkboxRef.current.checked = true}
  }, [props.selectedCount, props.availableCount])

  return (
    <span className={styles.container}>
      <input
        ref={checkboxRef}
        data-testid="selectAllCheckbox" 
        className={styles.checkbox}
        type="checkbox"
        onChange={props.handleOnChange}
      />
      <span>Selected {props.selectedCount}</span>
    </span>
  )
}