import React from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarRow.css'

function SidebarRow(props) {
    let titleClassName = "sidebarRow__title"
    let iconClassName = "sidebarRow__icon"
    if(props.selected){
        titleClassName = "sidebarRow__titleSelected"
        iconClassName= "sidebarRow__iconSelected"
    }
    return (
        <NavLink to={`${process.env.PUBLIC_URL}/${props.title}`} style={{textDecoration:'none'}}>
            <div className="sidebarRow">
                <h2 className={iconClassName}>&#8226;</h2>
                <h2 className={titleClassName}>{props.title}</h2>
            </div>
        </NavLink>
    )
}

export default SidebarRow
