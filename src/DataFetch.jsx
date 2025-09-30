
import React,{useState,useEffect} from 'react';
import axios from "axios";

const DataFetch = () => {
      const [ data,setData]=useState([]);

  useEffect(()=>{
    loadUsersData();
  },[]);

  const loadUsersData = async ()=>{
return await axios.get("https://agussarifudin.github.io/latsarproject/db.json")
.then((response)=>setData(response.data.berita))
.catch((err)=>console.log(err))
  }
console.log(data)
  return (
    <div>
 
           {data.map((item)=>(
                          <h2>{item.judul}</h2>
                        ))}
    </div>
  )
}

export default DataFetch
