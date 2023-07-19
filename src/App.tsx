import DownloadFiles from './features/download-files';
import { getFiles } from './features/download-files/api/getFiles';

function App() {
  return (
    <DownloadFiles fileList={getFiles()} />
  );
}

export default App;
