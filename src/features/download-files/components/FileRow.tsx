import { Fragment } from "react";
import { File, FileStatus } from "../types/file";
import styles from './FileRow.module.css'

type FileRowProps = {
  file: File
}

export default function FileRow({file}: FileRowProps) {
  return (
    <Fragment>
      <tr className={styles.row}>
        <td><input type="checkbox" /></td>
        <td>{file.name}</td>
        <td>{file.device}</td>
        <td>{file.path}</td>
        <td>{file.status === FileStatus.AVAILABLE && <span data-testid="availableDot" className={styles.availableDot}/>}</td>
        <td>{file.status}</td>
      </tr>
    </Fragment>
  )
}