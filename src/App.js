import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable';
import TestFetch from "./TestFetch";
import DataFetch from './DataFetch';
import Table from './Components/MTable.jsx'
import MTableGitHub from './Components/MTableGitHub.jsx'
import TableLocal from './Components/TableLocal.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Components/Create.jsx';
import Logo from "./Flag_of_the_Ministry_of_Law_and_Human_Rights_of_the_Republic_of_Indonesia.svg.png"
import MAppBar from './Components/MAppBar.jsx';


function App() {
  return (
   
    <div className="App">
      <MAppBar/>
      {/* <img src={Logo} style={{width:500, paddingTop:100}}/> */}
      {/* <DataTable/> */}
      {/* <TestFetch/> */}
      {/* <DataFetch/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TableLocal/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
