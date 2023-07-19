import { Fragment, ReactElement } from "react"
import styles from './SelectedCount.module.css'

type SelectedCountProps = {
  count: number;  
  handleOnChange: () => void;
}

export default function SelectedCount(props: SelectedCountProps): ReactElement {
  return (
    <Fragment>
      <input data-testid="selectAllCheckbox" className={styles.checkbox} type="checkbox" onChange={props.handleOnChange}/>
      <span>Selected {props.count}</span>
    </Fragment>
  )
}