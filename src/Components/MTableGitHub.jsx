import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import InputAdornment from '@mui/material/InputAdornment';
import Box  from '@mui/material/Tab';



let USERS = [], STATUSES = ['Active','Pending','Blocked'];
for(let i=0;i<14;i++){
  USERS[i]={
    name: "SAIFUL SAHRI HADIRI PELANTIKAN PEJABAT PEMASYARAKATAN: BUKTI NYATA SINERGITAS",
    email:"dsa",
    phone:"dsa",
    jobTitle:"dsa",
    company:"dsa",
    joinDate:"dsa",
    status:"dsa",
    status: STATUSES[Math.floor(Math.random()*STATUSES.length)]
  }
}


const MTableGitHub = () => {

  let date = Date()
const [tanggal,setTanggal]=useState(dayjs(date))
const [data,setData]=useState([]);
const [valueSearch, setValueSearch]=useState([]);
const [jumlah,setJumlah]=useState([])
const [bulan,setBulan]=useState()

  useEffect(()=>{
    loadUsersData();
  },[]);

//   const loadUsersData = async ()=>{
// return await axios.get("http://localhost:3004/berita")
// .then((response)=>setData(response.data.berita))
// .catch((err)=>console.log(data))
//   }

   async function loadUsersData() {
      
      const url = 'https://my-json-server.typicode.com/agussarifudin/latsarproject/berita'; // Replace with your JSON server URL
      try {
        const response = await fetch(url);
        const data = await response.json();
       
        const jumlahRecord = data.length
        setBulan(["-"])
        setJumlah(jumlahRecord)
        setData(data)
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickTanggal = async (event)=> {
      const url = `https://my-json-server.typicode.com/agussarifudin/latsarproject/berita?hari=${tanggal.$D}`;
      const urlBulan = `https://my-json-server.typicode.com/agussarifudin/latsarproject/berita?bulan=${tanggal.$M+1}`
      // Replace with your JSON server URL
    setValueSearch("")
      try {
        const response = await fetch(url);
        const responseBulan = await fetch(urlBulan);
        const data = await response.json();
        const dataBulan = await responseBulan.json();
        const jumlahRecord = dataBulan.length
        console.log(tanggal.$M,"databulan")
        tanggal.$M === 0 ? setBulan("Januari"):
        tanggal.$M === 1 ? setBulan("Februari"):
        tanggal.$M === 2 ? setBulan("Maret"):
        tanggal.$M === 3 ? setBulan("April"):
        tanggal.$M === 4 ? setBulan("Mei"):
        tanggal.$M === 5 ? setBulan("Juni"):
        tanggal.$M === 6 ? setBulan("Juli"):
        tanggal.$M === 7 ? setBulan("Agustus"):
        tanggal.$M === 8 ? setBulan("September"):
        tanggal.$M === 9 ? setBulan("Oktober"):
        tanggal.$M === 10 ? setBulan("November"):
        tanggal.$M === 11 ? setBulan("Desember"):setBulan("-")
        setJumlah(jumlahRecord)
        setData(data)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }

  }

  const handleReset = async()=>{
const url = `https://my-json-server.typicode.com/agussarifudin/latsarproject/berita`; // Replace with your JSON server URL
    setValueSearch("")
      try {
        const response = await fetch(url);
        const data = await response.json();
        const jumlahRecord = data.length
     

        setJumlah(jumlahRecord)
        setData(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }

  const handleSearch = async (e)=> {
    console.log(valueSearch)
      
      const url = `https://my-json-server.typicode.com/agussarifudin/latsarproject/berita?q=${valueSearch}`; // Replace with your JSON server URL
      try {
        const response = await fetch(url);
        const data = await response.json();
        const jumlahRecord = data.length
     

        setJumlah(jumlahRecord)
        setData(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }



  return (

   
    
    <div style={{display:"flex",justifyContent:"center"}}>
      
        {console.log(data)}
    <TableContainer component={Paper} style={{margin:"100px 100px",maxWidth:1100,tableLayout:"fixed",overflowX:"auto",display:"block"}}>
      <div style={{paddingTop:10,paddingLeft:10,paddingBottom:10,justifyContent:"left",display:"flex"}}>
<div style={{paddingLeft:10,paddingBottom:10}}>
<TextField sx={{ "& .MuiInputBase-input": { display:"flex",minWidth:200 } }} id="outlined-basic" label="Search" variant="outlined" value={valueSearch} onChange={(e)=> setValueSearch(e.target.value)}/>
</div>


    <div style={{paddingLeft:10}}>
 <Button variant="outlined" onClick={()=>handleSearch()}>Search</Button>
    </div>
 <div style={{paddingLeft:10}}>
 <Button variant="outlined" color="error" onClick={()=>handleReset()}>Reset</Button>
    </div>


  




  <div style={{paddingLeft:10}}>
  <LocalizationProvider dateAdapter={AdapterDayjs} >
<DatePicker label="Tanggal" value={tanggal} onChange={(newValue)=>setTanggal(newValue)} views={["year", "month", "day"]} format="DD-MM-YYYY"/>
  </LocalizationProvider>
  </div>
  <div style={{paddingLeft:10}}>
    <Fab variant="extended" onClick={handleClickTanggal}>
  <NavigationIcon sx={{ mr: 1 }} />
  Rekap
</Fab>
  </div>
<div style={{paddingLeft:10,paddingBottom:10}}>
   <TextField
   
          label="Bulan"
          disabled="true"
          value={jumlah}
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">{bulan} Total</InputAdornment>,
            },
          }}
          variant="filled"
        />
</div>
      </div>
    
      <Table  aria-label="simple table" >
        <TableHead style={{fontWeight:"bold", color:"black"}}>
          <TableRow >
     
            
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Judul</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Tanggal</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Website</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Instagram</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>X / Twitter</Typography></TableCell>
          <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Kompasiana</Typography></TableCell>
           <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Facebook</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Teras Maluku</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Maluku Terkini</Typography></TableCell>
          <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>RRI</Typography></TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow
              key={row.id}
            >
             
              <TableCell >
                <Typography fontWeight={"bold"}>{row.judul}</Typography>
              </TableCell>
              <TableCell >
                {row.tanggal}
              </TableCell>
              
              <TableCell><Button variant="contained" href={row.website}>Link</Button></TableCell>
              <TableCell><Button variant="contained" href={row.instagram}>Link</Button></TableCell>
              <TableCell><Button variant="contained" href={row.twitter}>Link</Button></TableCell>
              <TableCell><Button variant="contained" href={row.kompasiana}>Link</Button></TableCell>
              <TableCell><Button variant="contained" href={row.facebook}>Link</Button></TableCell>
              <TableCell><Button variant="contained" href={row.terasmaluku}>Link</Button></TableCell>
              <TableCell><Button variant="contained" href={row.malukuterkini}>Link</Button></TableCell>
              <TableCell><Button variant="contained" href={row.rri}>Link</Button></TableCell>
              
                {/* <Typography fontWeight={"bold"} fontSize={"0.75rem"} color={'white'} 
                style={{
                    backgroundColor:
                    ((row.status === "Active" && "green")||
                    (row.status === "Pending" && "blue") ||
                    (row.status === "Blocked" && "orange")
                )
                }} 
              borderRadius={8} padding={"3px 10px"} display={"inline-block"}>{row.status}</Typography> */}
              
         
              
            </TableRow>
          ))}
        </TableBody>
      
        <TableFooter >
            
       
        <TablePagination
        rowsPerPageOptions={[5,10,15]}
        component="div"
        count={USERS.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{display: 'inline'}}
      />
   
        </TableFooter>
      
      </Table>
    </TableContainer>
    </div>
  );
}

export default MTableGitHub