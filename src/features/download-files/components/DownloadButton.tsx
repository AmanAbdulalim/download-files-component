import { Fragment, ReactElement } from "react";
import styles from './DownloadButton.module.css'
import { File } from "../types/file";

type DownloadButtonProps = {
    selectedFiles: File[]
}

export default function DownloadButton(props: DownloadButtonProps): ReactElement {
    const formatAlertText = props.selectedFiles.map((file) => {
        return `Path: ${file.path}\nDevice: ${file.device}\n`
    }).join('\n')

    const handleClick = () => {
        window.alert(`Starting download.\n\n${formatAlertText}`)
    }

    const isDisabled = props.selectedFiles.length === 0

    return (
        <Fragment>
            <button disabled={isDisabled} className={styles.button} onClick={handleClick}>
                Download Selected
            </button>
        </Fragment>
    )
}