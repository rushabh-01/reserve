import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='contain grid grid-rows-1 p-16'>
    <div className='grid grid-cols-4 gap-10'>
            <div className='column'>
                <div className='flex items-center' style={{gap: 25}}>
                <FontAwesomeIcon
                icon={faBus}
                style={{ color: "orange", fontSize: 50 }}
              />
              <h1 style={{color:'orange',fontSize:33}}>RESERVE</h1>
                </div>
                <br/>
                <div className='block'>
                When you have a choice .Choose Reserve. <br />
                Reserve offers bus tickets booking <br />
                Through its website ,IOS ,and Android mobile apps for all major
                cities.
                <br />
                <br />
                reserve.bus@erserve.com
                </div>
            </div>
            <div className='column'>
            <ul className='block'>
                  <li>
                    <h4 className='text-2xl mb-5'>About</h4>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>Contact Us</Link>
                  </li>
                </ul>
            </div>
            <div className='column'>
            <ul className='block'>
                  <li>
                    <h4 className='text-2xl mb-5'>Useful Links</h4>
                    <Link>Careers</Link>
                  </li>
                  <li>
                    <Link>FAQ</Link>
                  </li>
                  <li>
                    <Link>T&C</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                </ul>
            </div>
            <div className='column'>
            <h4 className='text-2xl mb-5'>Follow us</h4>
                <div className="flex" style={{gap:30}}>
                  <Link >
                  <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link >
                  <FontAwesomeIcon icon={faInstagram} />
                  </Link>
            </div>
        </div>
        
    </div>
    <div className='text-center mt-10'>All rights reserved - 2022</div>
    </div>
    </>
  )
}

export default Footer