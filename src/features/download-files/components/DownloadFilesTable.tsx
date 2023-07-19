import {Fragment, useState} from 'react'
import { File, FileStatus } from '../types/file'
import FileRow from './FileRow'
import styles from './DownloadFilesTable.module.css'
import SelectedCount from './SelectedCount'
import DownloadButton from './DownloadButton'

type DownloadFilesTableProps = {
  fileList: File[]
}

export default function DownloadFilesTable(props: DownloadFilesTableProps) {
  const [selectedIndexes, setSelectedIndexes] = useState<boolean[]>(new Array(props.fileList.length).fill(false))
  const availableCount = props.fileList.filter(file => file.status === FileStatus.AVAILABLE).length
  const selectedCount = selectedIndexes.filter(item => item).length  

  const handleOnChange = (index: number) => {
    const status = props.fileList[index].status

    if(status === FileStatus.AVAILABLE) {
      selectedIndexes.splice(index, 1, !selectedIndexes[index])
      setSelectedIndexes([...selectedIndexes])
    }
  }

  const handleSelectAllChange = () => {
    const tempSelectedIndexes = new Array(props.fileList.length).fill(false)
    
    if(selectedCount === availableCount) {
      setSelectedIndexes(tempSelectedIndexes)
    } else {
      props.fileList.forEach((file, i) => {
        if(file.status === FileStatus.AVAILABLE) { tempSelectedIndexes.splice(i, 1, true) }
      })
      setSelectedIndexes([...tempSelectedIndexes])
    }
  }

  const getSelectedFiles = (): File[] => {
    const selectedFiles: File[] = []
    selectedIndexes.forEach((item, i) => {
      if(item) {
        selectedFiles.push(props.fileList[i])
      }
    })

    return selectedFiles
  }

  return (
    <Fragment>
      <SelectedCount
        selectedCount={selectedCount}
        availableCount={availableCount}
        handleOnChange={handleSelectAllChange}
      />
      <DownloadButton selectedFiles={getSelectedFiles()} />
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
            return (<FileRow 
              key={i} 
              index={i} 
              file={file} 
              handleOnChange={handleOnChange} 
              isSelected={selectedIndexes[i]} 
            />)
          })}
        </tbody>
      </table>
    </Fragment>
  )
}