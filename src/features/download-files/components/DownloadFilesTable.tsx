import {useState} from 'react'
import { File, FileStatus } from '../types/file'
import FileRow from './FileRow'
import styles from './DownloadFilesTable.module.css'

type DownloadFilesTableProps = {
  fileList: File[]
}

export default function DownloadFilesTable(props: DownloadFilesTableProps) {
  const [selectedItems, setSelectedItems] = useState<boolean[]>(new Array(props.fileList.length).fill(false))

  const handleOnChange = (index: number) => {
    const status = props.fileList[index].status

    if(status === FileStatus.AVAILABLE) {
      setSelectedItems(selectedItems.splice(index, 1, !selectedItems[index]))
    }
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Device</th>
          <th>Path</th>
          <th></th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.fileList.map((file, i) => {
          return (<FileRow key={i} index={i} file={file} handleOnChange={handleOnChange} isSelected={selectedItems[i]} />)
        })}
      </tbody>
    </table>
  )
}