import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'

const Create = () => {
    const [inputData,setInputData]=useState({
        judul:"",
        tanggal:"",
        website:"",
        instagram:"",
        twitter:"",
        kompasiana:"",
        facebook:"",
        terasmaluku:"",
        malukuterkini:"",
        rri:""
    })

    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/berita',inputData)
        .then(res=>{
            alert("data posted")
        })
    }


  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <div style={{margin:"100px 100px",maxWidth:1100,tableLayout:"fixed",overflowX:"auto",display:"block"}}>
           <Card sx={{ minWidth: 275 }}>
            <CardContent>
<Box component="form" onSubmit={handleSubmit}>
    CREATE
                <div style={{ display: 'flex', flexDirection: 'column',padding:10}}>
                <div style={{paddingTop:10}}>
<TextField id="outlined-basic" label="Judul" variant="outlined" onChange={e=> setInputData({...inputData, judul: e.target.event})}/>
                </div>
                <div style={{paddingTop:10}}>
<TextField id="outlined-basic" label="Tanggal" variant="outlined" onChange={e=> setInputData({...inputData, tanggal: e.target.event})}/>
                </div>
                  <div style={{paddingTop:10}}>
<TextField id="outlined-basic" label="Website" variant="outlined" onChange={e=> setInputData({...inputData, website: e.target.event})}/>
                </div>
                <div style={{paddingTop:10}}>
<TextField id="outlined-basic" label="Instagram" variant="outlined" onChange={e=> setInputData({...inputData, instagram: e.target.event})}/>
                </div>
                <div style={{paddingTop:10}}>
<TextField id="outlined-basic" label="X / Twitter" variant="outlined" onChange={e=> setInputData({...inputData, twitter : e.target.event})}/>
                </div>
                <div style={{paddingTop:10}}>
<TextField id="outlined-basic" label="Kompasiana" variant="outlined" onChange={e=> setInputData({...inputData, kompasiana: e.target.event})}/>
                </div>
                <div style={{paddingTop:10}}>
<TextField id="outlined-basic" label="Facebook" variant="outlined" onChange={e=> setInputData({...inputData, facebook: e.target.event})}/>
                </div>

                <div style={{paddingTop:10}}>
<TextField id="outlined-basic" label="Teras Maluku" variant="outlined" onChange={e=> setInputData({...inputData, terasmaluku: e.target.event})}/>
                </div>
                  <div style={{paddingTop:10}}>
<TextField id="outlined-basic" label="Maluku Terkini" variant="outlined" onChange={e=> setInputData({...inputData, malukuterkini: e.target.event})}/>
                </div>
           <div style={{paddingTop:10}}>
<TextField id="outlined-basic" label="RRI" variant="outlined" onChange={e=> setInputData({...inputData, rri: e.target.event})}/>
                </div>
                  
                </div>
                <Button variant="contained"  type="submit">INSERT</Button>
            </Box>
            </CardContent>
            
           </Card>
            
        </div>
        
    </div>
  )
}

export default Create