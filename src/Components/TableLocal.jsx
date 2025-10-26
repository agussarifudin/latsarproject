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
import {dataBerita} from "./DataLocal"
import LogoPengayoman from "../Flag_of_the_Ministry_of_Law_and_Human_Rights_of_the_Republic_of_Indonesia.svg.png"



const MTable = () => {

  let date = Date()
const [tanggal,setTanggal]=useState(dayjs(date))
const [data,setData]=useState([]);
const [valueSearch, setValueSearch]=useState([]);
const [jumlah,setJumlah]=useState([])
const [bulan,setBulan]=useState()
const [bulanAtauTanggal,setBulanAtauTanggal]=useState()
const [active,setActive]=useState(false)
const [publikasi,setPublikasi]=useState()


  useEffect(()=>{
    loadUsersData();
  },[]);

//   const loadUsersData = async ()=>{
// return await axios.get("http://localhost:3004/berita")
// .then((response)=>setData(response.data.berita))
// .catch((err)=>console.log(data))
//   }

   async function loadUsersData() {
    const today = new Date();
    const monthIndex = today.getMonth();
    setData(dataBerita.sort((a,b)=>a.hari-b.hari).filter((item)=>{
        return item.bulan === tanggal.$M+1
    })) // BUAT NGURUTKAN <<<<<<<<<<<<
    setJumlah(dataBerita.length)
  


    //   const url = 'http://localhost:3004/berita'; // Replace with your JSON server URL
    //   try {
    //     const response = await fetch(url);
    //     const data = await response.json();
       
    //     const jumlahRecord = data.length
    //     setBulan(["-"])
    //     setJumlah(jumlahRecord)
    //     setData(data)
       
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
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
    setActive(true)
    setPage(0)
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

      
      const filterTanggal = data.filter((item)=>{
        return item.hari === tanggal.$D && item.bulan===tanggal.$M+1
    })
 const filterBulan = data.filter((item)=>{
        return item.bulan === tanggal.$M+1
    })
    console.log("filter bulan",filterBulan)
    bulanAtauTanggal === "tanggal" ? setData(filterTanggal.sort((a,b)=>a.hari-b.hari)):setData(filterBulan.sort((a,b)=>a.hari-b.hari)); setJumlah(filterBulan.length)
    // const jumlahRecord = filterBulan.length
    // setJumlah(jumlahRecord)
    
      let count = 0
    if(bulanAtauTanggal === "tanggal"){
  for(let i=0;i<filterTanggal.length;i++){
    filterTanggal[i].website === ""?count=count:count+=1
    filterTanggal[i].instagram === ""?count=count:count+=1
    filterTanggal[i].twitter === ""?count=count:count+=1
    filterTanggal[i].kompasiana === ""?count=count:count+=1
    filterTanggal[i].facebook === ""?count=count:count+=1
    filterTanggal[i].terasmaluku === ""?count=count:count+=1
    filterTanggal[i].malukuterkini === ""?count=count:count+=1
    filterTanggal[i].rri === ""?count=count:count+=1
  }
    }else{
      for(let i=0;i<filterBulan.length;i++){
    filterBulan[i].website === ""?count=count:count+=1
    filterBulan[i].instagram === ""?count=count:count+=1
    filterBulan[i].twitter === ""?count=count:count+=1
    filterBulan[i].kompasiana === ""?count=count:count+=1
    filterBulan[i].facebook === ""?count=count:count+=1
    filterBulan[i].terasmaluku === ""?count=count:count+=1
    filterBulan[i].malukuterkini === ""?count=count:count+=1
    filterBulan[i].rri === ""?count=count:count+=1
  }
    }

  setPublikasi(count)






    //   const url = `http://localhost:3004/berita?hari=${tanggal.$D}&bulan=${tanggal.$M+1}`;
    //   const urlBulan = `http://localhost:3004/berita?bulan=${tanggal.$M+1}`
    //   // Replace with your JSON server URL
    // setValueSearch("")
    //   try {
    //     const response = await fetch(url);
    //     const responseBulan = await fetch(urlBulan);
    //     const data = await response.json();
    //     const dataBulan = await responseBulan.json();
    //     const jumlahRecord = dataBulan.length
    //     console.log(tanggal.$M,"databulan")
    //     tanggal.$M === 0 ? setBulan("Januari"):
    //     tanggal.$M === 1 ? setBulan("Februari"):
    //     tanggal.$M === 2 ? setBulan("Maret"):
    //     tanggal.$M === 3 ? setBulan("April"):
    //     tanggal.$M === 4 ? setBulan("Mei"):
    //     tanggal.$M === 5 ? setBulan("Juni"):
    //     tanggal.$M === 6 ? setBulan("Juli"):
    //     tanggal.$M === 7 ? setBulan("Agustus"):
    //     tanggal.$M === 8 ? setBulan("September"):
    //     tanggal.$M === 9 ? setBulan("Oktober"):
    //     tanggal.$M === 10 ? setBulan("November"):
    //     tanggal.$M === 11 ? setBulan("Desember"):setBulan("-")
    //     setJumlah(jumlahRecord)
    //     setData(data)
        
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }

  }

  const handleReset = async()=>{
    setActive(false)
    setValueSearch("")
    setData(dataBerita)
    setPublikasi("-")
    setBulanAtauTanggal("")
// const url = `http://localhost:3004/berita`; // Replace with your JSON server URL
//     setValueSearch("")
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const jumlahRecord = data.length
     

//         setJumlah(jumlahRecord)
//         setData(data)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
  }

  const handleSearch = async (e)=> {
    setActive(true)
    setPage(0)
   
    const searchList = data.filter((item)=>{
        return item.judul.toLowerCase().indexOf(valueSearch.toLowerCase()) !== -1;
    })
    setData(searchList.sort((a,b)=>a.hari-b.hari))

  let count = 0

  for(let i=0;i<searchList.length;i++){
    searchList[i].website === ""?count=count:count+=1
    searchList[i].instagram === ""?count=count:count+=1
    searchList[i].twitter === ""?count=count:count+=1
    searchList[i].kompasiana === ""?count=count:count+=1
    searchList[i].facebook === ""?count=count:count+=1
    searchList[i].terasmaluku === ""?count=count:count+=1
    searchList[i].malukuterkini === ""?count=count:count+=1
    searchList[i].rri === ""?count=count:count+=1
  }
  
  console.log(count)
  setPublikasi(count)  


    
      
    //   const url = `http://localhost:3004/berita?q=${valueSearch}`; // Replace with your JSON server URL
    //   try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     const jumlahRecord = data.length
     

    //     setJumlah(jumlahRecord)
    //     setData(data)
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
  }

  return (

   
    
    <div style={{display:"flex",justifyContent:"center"}}>
        
   
    <TableContainer component={Paper} style={{margin:"100px 100px",maxWidth:1100,tableLayout:"fixed",overflowX:"auto",display:"block"}}>
        
      <div style={{paddingTop:10,paddingLeft:10,paddingBottom:10,justifyContent:"left",display:"flex"}}>
<div style={{paddingLeft:10,paddingBottom:10}}>
<TextField disabled={active} sx={{ "& .MuiInputBase-input": { display:"flex",minWidth:200 } }} id="outlined-basic" label="Search" variant = {active ? "filled":"outlined"} value={valueSearch} onChange={(e)=> setValueSearch(e.target.value)}/>
</div>


    <div style={{paddingLeft:10}}>
 <Button disabled={active} variant={valueSearch==""?"outlined":"contained"} onClick={()=>valueSearch.length===0?console.log(true):handleSearch()}>Search</Button>
    </div>
 <div style={{paddingLeft:10}}>
 <Button variant={active ?"contained":"outlined"} color="error" onClick={()=>handleReset()}>Reset</Button>
    </div>


  




  <div style={{paddingLeft:10}}>
  <LocalizationProvider dateAdapter={AdapterDayjs} >
<DatePicker disabled={active} label="Tanggal" value={tanggal} onChange={(newValue)=>setTanggal(newValue,setBulanAtauTanggal("tanggal"))} views={[ "day","month"]} format="DD-MM-YYYY" />
  <div style={{paddingTop:10}}>
 
      <DatePicker disabled={active} label="Bulan" value={tanggal} onChange={(newValue)=>setTanggal(newValue,setBulanAtauTanggal("bulan"))} views={[ "month"]}  />


  </div>
  
  </LocalizationProvider>
  </div>
  <div style={{paddingLeft:10}}>
    <Fab disabled={active} variant="extended" onClick={()=>{handleClickTanggal()}}>
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
        <TextField
        
          
          disabled="true"
          value={publikasi}
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">Total publikasi</InputAdornment>,
            },
          }}
          variant="standard"
          color="warning"
          focused
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
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Facebook</Typography></TableCell>
          <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Kompasiana</Typography></TableCell>
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
              <TableCell><Button variant="contained" color={row.website===""?'error':"primary"}href={row.website}>Link</Button></TableCell>
              <TableCell><Button variant="contained" color={row.instagram===""?'error':"primary"}href={row.instagram}>Link</Button></TableCell>
              <TableCell><Button variant="contained" color={row.twitter===""?'error':"primary"}href={row.twitter}>Link</Button></TableCell>
              <TableCell><Button variant="contained" color={row.facebook===""?'error':"primary"}href={row.facebook}>Link</Button></TableCell>
              <TableCell><Button variant="contained" color={row.kompasiana===""?'error':"primary"}href={row.kompasiana}>Link</Button></TableCell>
              <TableCell><Button variant="contained" color={row.terasmaluku===""?'error':"primary"} href={row.terasmaluku}>Link</Button></TableCell>
              <TableCell><Button variant="contained" color={row.malukuterkini===""?'error':"primary"}href={row.malukuterkini}>Link</Button></TableCell>
              <TableCell><Button variant="contained" color={row.rri===""?'error':"primary"}href={row.rri}>Link</Button></TableCell>
              
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
        count={data.length}
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