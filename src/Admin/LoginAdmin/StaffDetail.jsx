
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { database } from '../../Config/firebase';
import AdimNavbar from '../../AdminComponents/Navbar/Navbar';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
const StaffDetail = () => {
    const [staffDetail,setStaffDetail] = useState([])
    const [refresh, setRefresh] = useState(false);

    const getData = async ()=>{
        try{
         let array = [];
         const getdata = await getDocs(collection(database,'Staff'));
         getdata.forEach((e,i)=>{
           array.push({...e.data(),id:e.id})
           setRefresh(!refresh)
         })
         setStaffDetail(array)
        }catch(error){
         console.log(error)
        }
     }
     useEffect(()=>{
       getData()

     },[refresh])

     console.log(staffDetail)

  return (
<>
<AdimNavbar/>

<div style={{  background: 'linear-gradient(to bottom right, red, yellow)',color:'white'
}}>
<div style={{margin:'auto',padding:20,marginTop:30,color:'white'}}>
    <h4 style={{textAlign:'center',padding:10}}>Staff Detail</h4>
    <div>
    <TableContainer sx={{ margin:'auto', padding:10,color:'white' }}>
        <table style={{color:'white'}}>
            <TableHead>
              <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">CNIC</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">JoiningDate</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Salary</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
            {
        staffDetail.map((e,i)=>{
            return(
                <>
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{e.id}</TableCell>
                <TableCell align="right">{e.name}</TableCell>
                <TableCell align="right">{e.email}</TableCell>     
                <TableCell align="right">{e.cnic}</TableCell>              
                <TableCell align="right">{e.phone}</TableCell>              
                <TableCell align="right">{e.joiningDate}</TableCell>              
                <TableCell align="right">{e.position}</TableCell>       
                <TableCell align="right">{e.salary}</TableCell>              
       
         
              </TableRow>
                </>
            )
        })
    }
            </TableBody>
        </table>
     </TableContainer>
    </div>
</div>
</div>
</>    
  )
}

export default StaffDetail

