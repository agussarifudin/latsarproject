import React,{useState,useEffect} from 'react';
import axios from "axios";

const TestFetch = () => {
    const [ data,setData]=useState([]);

  useEffect(()=>{
    loadUsersData();
  },[]);

  const loadUsersData = async ()=>{
return await axios.get(" http://localhost:8000/berita")
.then((response)=>setData(response.data))
.catch((err)=>console.log(err))
  }
console.log(data)
  return (
    <div>T</div>
  )
}

export default TestFetch