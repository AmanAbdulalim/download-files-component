import React from 'react'
import { File } from '../types/file'
import FileRow from './FileRow'

type DownloadFilesTableProps = {
  fileList: File[]
}

export default function DownloadFilesTable(props: DownloadFilesTableProps) {

  return (
    <table>
      <thead>
        <tr>
          <th>Selected</th>
          <th>Name</th>
          <th>Device</th>
          <th>Path</th>
          <th></th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.fileList.map((file, i) => {
          return (<FileRow key={i} file={file} />)
        })}
      </tbody>
    </table>
  )
}