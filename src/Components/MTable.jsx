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


const MTable = () => {

  let date = Date()
const [tanggal,setTanggal]=useState(dayjs(date))
const [ data,setData]=useState([]);

  useEffect(()=>{
    loadUsersData();
  },[]);

  const loadUsersData = async ()=>{
return await axios.get("https://agussarifudin.github.io/latsarproject/db.json")
.then((response)=>setData(response.data.berita))
.catch((err)=>console.log(err))
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


  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        
    <TableContainer component={Paper} style={{margin:"100px 100px",maxWidth:950,tableLayout:"fixed",overflowX:"auto",display:"block"}}>
      <div style={{paddingTop:10,paddingLeft:10,paddingBottom:10,justifyContent:"left",display:"flex"}}>
  <TextField id="outlined-basic" label="Search" variant="outlined" />
  
  <div style={{paddingLeft:10}}>
  <LocalizationProvider dateAdapter={AdapterDayjs} >
<DatePicker label="Tanggal" value={tanggal}/>
  </LocalizationProvider>
  </div>
  <div style={{paddingLeft:10}}>
    <Fab variant="extended">
  <NavigationIcon sx={{ mr: 1 }} />
  Rekap
</Fab>
  </div>
<div style={{paddingLeft:10,paddingBottom:10}}>
   <TextField
   
          label="Bulan"
          disabled="true"
          value={"3"}
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">Desember Total</InputAdornment>,
            },
          }}
          variant="filled"
        />
</div>
      </div>
    
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead style={{fontWeight:"bold", color:"black"}}>
          <TableRow >
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Judul</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Tanggal</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Website</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Instagram</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>X / Twitter</Typography></TableCell>
          <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Kompasiana</Typography></TableCell>
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

              <TableCell> <Button variant="contained" href={row.website}>Link</Button></TableCell>
              <TableCell><Button variant="contained" href={row.instagram}>Link</Button></TableCell>
              <TableCell><Button variant="contained" href={row.twitter}>Link</Button></TableCell>
              <TableCell><Button variant="contained" href={row.kompasiana}>Link</Button></TableCell>

              
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

export default MTable