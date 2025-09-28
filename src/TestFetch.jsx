import React,{useState,useEffect} from 'react';
import axios from "axios";

const TestFetch = () => {
    const [ data,setData]=useState([]);

  useEffect(()=>{
    loadUsersData();
  },[]);

  const loadUsersData = async ()=>{
return await axios.get("http://localhost:5000/berita")
.then((response)=>setData(response.data))
.catch((err)=>console.log(err))
  }

  return (
    <div>T</div>
  )
}

export default TestFetch