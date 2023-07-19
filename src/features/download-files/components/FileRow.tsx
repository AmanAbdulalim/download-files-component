import {useState} from "react";
import {File, FileStatus} from "../types/file";
import styles from './FileRow.module.css'

type FileRowProps = {
  file: File
}

export default function FileRow({file}: FileRowProps) {
  const [selected, setSelected] = useState<boolean>(false)
  const isAvailable = file.status === FileStatus.AVAILABLE.toLowerCase()

  return (
    <tr className={[selected && styles.rowSelected].join(' ')}>
      <td><input type="checkbox" disabled={!isAvailable} checked={selected} onChange={() => setSelected(!selected)} /></td>
      <td>{file.name}</td>
      <td>{file.device}</td>
      <td>{file.path}</td>
      <td>{isAvailable && <span data-testid="availableDot" className={styles.availableDot}/>}</td>
      <td>{file.status.charAt(0).toUpperCase() + file.status.slice(1)}</td>
    </tr>
  )
}