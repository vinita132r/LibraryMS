

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StudentReg from './Components/StudentReg';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Components/Homepgsty.css'
import Mainhome from './Components/Mainhome.jsx';


function App() {
  return (
    <div>

      <StudentReg/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainhome/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
