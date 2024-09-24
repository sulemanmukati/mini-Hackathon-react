import React from 'react';
import { NavLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <>
      <div style={{ width: '100%', paddingTop: 30,textDecoration:'bold' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            background: 'url(https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFycmlvdHQlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: 'auto',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(220, 210, 210, 0.3)',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingTop: 50,
                gap: '20px',
              }}
            >
              <div style={{ color: 'black', padding: 10, maxWidth: 300 }}>
                <h3>Hotel Management System</h3>
                <p>
                  Indulge in a world of luxury and comfort with our exclusive
                  selection of rooms. Whether you’re seeking elegance, relaxation,
                  or modern amenities, our unique rooms are designed to provide the
                  ultimate stay experience.
                </p>
              </div>

              
              <div style={{ color: 'black'}}>
                <h3>Quick Links</h3>
                <ul style={{ padding: 0, listStyle: 'none' }}>
                  <li>
                    <NavLink
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        padding: '5px 0',
                      }}
                     
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        padding: '5px 0',
                      }}
                      
                    >
                      Report
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        padding: '5px 0',
                      }}
                      
                    >
                      Rooms
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        padding: '5px 0',
                      }}
                      
                    >
                      User
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div style={{ color: 'black'}}>
                <h3>Contact Us</h3>
                <p>abcdef@gmail.com</p>
                <p>031234567</p>

                <div>
                <ul style={{ padding: 0, listStyle: 'none', display: 'flex', gap: '10px' }}>
                  <li>
                    <NavLink
                      style={{ color: 'black', textDecoration: 'none' }}
                      to="#"
                    >
                      <InstagramIcon />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={{ color: 'black', textDecoration: 'none' }}
                      to="#"
                    >
                      <FacebookIcon />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={{ color: 'black', textDecoration: 'none' }}
                      to="#"
                    >
                      <EmailIcon />
                    </NavLink>
                  </li>
                </ul>
              </div>
              </div>


              
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styling */}
      <style>
        {`
          @media (max-width: 768px) {
            div {
              text-align: center;
            }
            div ul {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;
