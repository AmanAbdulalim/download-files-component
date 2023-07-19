import {ReactElement} from "react";
import { File } from "./types/file";
import DownloadFilesTable from "./components/DownloadFilesTable";

type DownloadFilesProps = {
  fileList: File[];
}

export default function DownloadFiles (
  props: DownloadFilesProps
): ReactElement {

  return (
      <DownloadFilesTable fileList={props.fileList} />
  )
}