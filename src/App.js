import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable';
import TestFetch from "./TestFetch";
import DataFetch from './DataFetch';
import Table from './Components/MTable.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MTable from './Components/MTable.jsx';
import Create from './Components/Create.jsx';

function App() {
  return (
    <div className="App">
      {/* <DataTable/> */}
      {/* <TestFetch/> */}
      {/* <DataFetch/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Table/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
