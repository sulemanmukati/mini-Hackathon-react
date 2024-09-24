import React from 'react';
import MyNavbar from '../../../AdminComponents/Navbar/Navbar';

const AdminDashboard = () => {
  return (
    <>
      <MyNavbar />

      <div>
        <div
          style={{
            background:
              'url(https://hospitalitystudy.eu/wp-content/uploads/2017/02/hotel-manager-talking-to-woman-at-the-front-desk-000085820415_small.jpg)',
            height: '70vh',
            backgroundPosition:"center",
          backgroundSize:"cover",
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Admin specific message */}
          <div
            style={{
              width: '90%',
              maxWidth: 400,
              marginLeft: 40,
              // marginRight: 'auto',
              fontFamily: 'sans-serif',
              padding: 20,
              borderRadius: 10,
              color: 'white',
              background: 'rgba(0,0,0,0.7)',
              position: 'relative',
              top: '50%',
              textAlign: 'center',
            }}
          >
            <h4 style={{ fontSize: '1.5rem' }}>Admin Dashboard</h4>
            <p style={{ fontSize: '1rem' }}>
              As the administrator, you have complete control over room bookings, customer
              management, staff coordination, and inventory. Monitor and manage real-time updates
              for seamless hotel operations. Ensure that every guest's stay is perfect, from room
              assignments to their final checkout.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
