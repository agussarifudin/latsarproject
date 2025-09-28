import { useState } from "react"

const DataTable = () => {

const [formData,setFormData]= useState({name:"",tanggal:"",website:""});
const [data,setData]= useState([]);
const [editId, setEditId]= useState(false)

const handleInputChange = (e)=>{

    setFormData({...formData, [e.target.name]:e.target.value});
};

const handleAddClick = ()=>{
    if(formData.name && formData.tanggal && formData.website){
        const newItem = {
            id: Date.now(),
            name: formData.name,
            tanggal: formData.tanggal,
            website: formData.website,
        };
        setData([...data,newItem]);
        setFormData({name:"",tanggal:"",website:""})
    }
}

const handleDelete = (id)=>{
    const updateList = data.filter((item)=>item.id !== id)
    setData(updateList);
}

console.log(data)

  return (
    <div className="container">
        <div className="add-container">
            <div className="info-container">
                <input 
                type="text" 
                placeholder="Judul" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}
                />
                <input 
                type="text" 
                placeholder="Tanggal" 
                name="tanggal" 
                value={formData.tanggal} 
                onChange={handleInputChange}
                />
                <input 
                type="text" 
                placeholder="Website" 
                name="website" 
                value={formData.website} 
                onChange={handleInputChange}
                />
            </div>
            <button className="add" onClick={handleAddClick}>ADD</button>
        </div>
        <div className="search-table-container"> 
            <input 
                type="text" 
                placeholder="Search by judul" 
                name="name" 
                value={""} 
                onChange={()=>{}}
                className="search-input"
                />

                <table>
                    <thead>
                        <tr>
                            <th>
                                Judul
                            </th>
                            <th>
                                Tanggal
                            </th>
                            <th>
                                Website
                            </th>
                            <th>
                                Aksi
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item)=>(
                            <tr key={item.id}>
                    <td id={item.id}>{item.name}</td>
                        <td id={item.id}>{item.tanggal}</td>
                        <td id={item.id}>{item.website}</td>
                        <td className="actions">
                            <button className="edit">Edit</button>
                            <button className="delete" onClick={()=> handleDelete(item.id)}>Delete</button>
                        </td> </tr>
                        ))}
                        
                    </tbody>
                </table>


                <div className="pagination">

                </div>
        </div>
    </div>
  )
}

export default DataTable