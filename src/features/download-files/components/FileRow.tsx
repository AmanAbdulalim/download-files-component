import {File, FileStatus} from "../types/file";
import styles from './FileRow.module.css'

type FileRowProps = {
  index: number;
  file: File;
  isSelected: boolean;
  handleOnChange: (index: number) => void;
}

export default function FileRow(props: FileRowProps) {
  const {file, handleOnChange, index, isSelected} = props
  const isAvailable = file.status === FileStatus.AVAILABLE.toLowerCase()

  return (
    <tr className={[isSelected && styles.rowSelected].join(' ')}>
      <td><input data-testid="rowCheckbox" type="checkbox" disabled={!isAvailable} checked={isSelected} onChange={() => handleOnChange(index)} /></td>
      <td>{file.name}</td>
      <td>{file.device}</td>
      <td>{file.path}</td>
      <td>{isAvailable && <span data-testid="availableDot" className={styles.availableDot}/>}</td>
      <td>{file.status.charAt(0).toUpperCase() + file.status.slice(1)}</td>
    </tr>
  )
}