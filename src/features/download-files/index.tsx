import {ReactElement} from "react";
import { File } from "./types/file";
import DownloadFilesTable from "./components/DownloadFilesTable";
import styles from './index.module.css'

type DownloadFilesProps = {
  fileList: File[];
}

export default function DownloadFiles (
  props: DownloadFilesProps
): ReactElement {

  return (
    <div className={styles.downloadFilesContainer}>
      <DownloadFilesTable fileList={props.fileList} />
    </div>
  )
}