import {Fragment, useState} from 'react'
import { File, FileStatus } from '../types/file'
import FileRow from './FileRow'
import styles from './DownloadFilesTable.module.css'
import SelectedCount from './SelectedCount'

type DownloadFilesTableProps = {
  fileList: File[]
}

export default function DownloadFilesTable(props: DownloadFilesTableProps) {
  const [selectedItems, setSelectedItems] = useState<boolean[]>(new Array(props.fileList.length).fill(false))
  const availableCount = props.fileList.filter(file => file.status === FileStatus.AVAILABLE).length
  const selectedCount = selectedItems.filter(item => item).length  

  const handleOnChange = (index: number) => {
    const status = props.fileList[index].status

    if(status === FileStatus.AVAILABLE) {
      setSelectedItems(selectedItems.splice(index, 1, !selectedItems[index]))
    }
  }

  const handleSelectAllChange = () => {
    const tempSelectedItems = new Array(props.fileList.length).fill(false)
    
    if(selectedCount === availableCount) {
      setSelectedItems(tempSelectedItems)
    } else {
      props.fileList.forEach((file, i) => {
        if(file.status === FileStatus.AVAILABLE) { tempSelectedItems.splice(i, 1, true) }
      })
      setSelectedItems(tempSelectedItems)
    }
  }

  return (
    <Fragment>
      <SelectedCount count={selectedCount} handleOnChange={handleSelectAllChange}/>
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
    </Fragment>
  )
}