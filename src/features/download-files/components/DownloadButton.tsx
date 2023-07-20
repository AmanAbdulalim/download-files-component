import { Fragment, ReactElement } from "react";
import styles from './DownloadButton.module.css'
import { File } from "../types/file";

type DownloadButtonProps = {
  selectedFiles: File[]
}

export const formatAlertText = (files: File[]) => {
  return files.map((file) => {
    return `Path: ${file.path}\nDevice: ${file.device}\n`
  }).join('\n')
} 

export default function DownloadButton(props: DownloadButtonProps): ReactElement {
  const handleClick = () => {
    window.alert(`Starting download.\n\n${formatAlertText(props.selectedFiles)}`)
  }

  const isDisabled = props.selectedFiles.length === 0

  return (
    <Fragment>
      <button
        aria-label="download"
        data-testid="downloadButton"
        className={styles.button}
        disabled={isDisabled}
        onClick={handleClick}
      >
        Download Selected
      </button>
    </Fragment>
  )
}