import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header(props) {

    return (
        <div className="header">
            
            <div className="nav">
                <div style={{flex:"1"}}>
                    <NavLink to={`${process.env.PUBLIC_URL}/`} activeStyle={{color:"white"}} style={{textDecoration:'none'}}>
                        Epoch{props.width<=props.breakpoint && <br/>} Zero
                    </NavLink>
                </div>
                <div>
                    <NavLink to={`${process.env.PUBLIC_URL}/Works`} className="link" activeStyle={{color:"#6823ff"}} style={{textDecoration:'none'}}>works</NavLink>
                </div>
                
            </div>
            
        </div>
        
    )
}

export default Header
