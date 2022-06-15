
import { Route,Routes, Navigate } from 'react-router-dom';
import './App.css';
import Main from "./pages/Main";
import Upload from "./pages/Upload";

function App() {
  return (
    <div>
    <Routes >
          
    <Route path='/main' element={<Main />} />
    <Route path='/upload' element={<Upload />} />
    <Route
        path="*"
        element={<Navigate to="/main" replace />}
    />
    </Routes >
    </div>
  );
}

export default App;
