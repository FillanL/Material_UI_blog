import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoM from '../Images/final-01.png'
import '../CSS/mainNav.scss'

const mainNav = () => {
    const navToggle = () => {
        let nav = document.querySelector('.nav-links');
        
        nav.style.display === "" || nav.style.display === "block" ? nav.style.display = "none" : nav.style.display === "none" ? nav.style.display = "block" : nav.style.display = "";
    }

        return (
            <nav>
                <div className="grid-90-10">
                    <div>
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            {/* <span style={{ "color": "rgba(226,180,121)" }}>Minimal</span>.<span style={{ "color": "rgba(206,102,215,.8)" }}>Syntax</span><span style={{ "color": "rgba(206,151,249)" }}>()</span> */}
                            {/* <LogoM /> */}
                            <img style={{"height":"48px","alignContent": "left","objectFit": "cover" ,"width":"210px"}} src={LogoM} alt="asd" />
                        </Link>
                    </div>
                    <div style={{ "margin": "0 auto" }}>
                        <FontAwesomeIcon
                            className="mobile-burger"
                            style={{
                                // "width":"50px",
                                "backgroundColor": "rgba(300,302,300,.0)"
                            }}
                            onClick={() => navToggle()}
                            icon={['fa', 'bars']} size="2x"
                        />
                        {/* <button onClick={()=>this.navToggle()} className="mobile-burger"> "--"</button>
                        */}
                    </div>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/category'>
                            How To
                        </Link>
                    </li>
                    <li>
                        <Link to='/dash'>
                            Data structures
                        </Link>
                    </li>
                    <li>
                        <Link to='/Explore'>
                            Algorithms
                        </Link>
                    </li>
                </ul>
            </nav>
        )   
}

export default mainNav

