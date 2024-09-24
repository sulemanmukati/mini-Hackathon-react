import React from 'react'
import CustomerNavbar from '../../CustomerComponents/Navbar/Navbar'
import RoomsCard from '../../CustomerComponents/Navbar/Cards/RoomCards'
import Footer from '../../CustomerComponents/Navbar/Footer/Footer'
import { useLocation } from 'react-router-dom'

const CustomerDashboard = () => {
 
  return (
    <>
    
     <div>
      <div style={{background:'url(https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFycmlvdHQlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D)',height:580,
        backgroundSize:'cover'    ,    
          backgroundPosition:"center",
        backgroundRepeat:'no-repeat'
      }}>

        <CustomerNavbar/>
          <div style={{width:400,
          margin:'auto',
          boxShadow:'0 0 20px rgba(0, 0.5, 0.9)',
          marginTop:100,
          padding:30,
          borderRadius:10,
          color:'white',
          background: 'rgba(0,0,0,0.7)',
}}>
          <h3 style={{ fontSize: '1.5rem' }}>Customer Dashboard</h3>
            <p style={{ fontSize: '1rem' }}>
              Welcome to your personalized customer dashboard! Here, you can manage your room
              bookings, view your past stays, and explore exclusive offers. Keep track of your
              upcoming reservations and enjoy seamless hotel experiences. Our staff is always ready
              to assist you for a perfect stay, from check-in to check-out.
            </p>
          </div>
      </div>
     </div>

     <div >
   <RoomsCard/>
     </div>
     <div>
      <Footer/>
     </div>
    </>
  )
}

export default CustomerDashboard