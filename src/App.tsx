import DownloadFiles from './features/download-files';
import { getFiles } from './features/download-files/api/getFiles';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <DownloadFiles fileList={getFiles()} />
    </div>
  );
}

export default App;
