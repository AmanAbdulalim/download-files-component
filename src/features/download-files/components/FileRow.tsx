import { Fragment } from "react";
import { File, FileStatus } from "../types/file";

type FileRowProps = {
  file: File
}

export default function FileRow({file}: FileRowProps) {
  return (
    <Fragment>
      <tr>
        <td><input type="checkbox" /></td>
        <td>{file.name}</td>
        <td>{file.device}</td>
        <td>{file.path}</td>
        <td>{file.status === FileStatus.AVAILABLE && <>Available icon here</>}</td>
        <td>{file.status}</td>
      </tr>
    </Fragment>
  )
}