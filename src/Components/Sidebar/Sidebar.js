import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';

function Sidebar({home, works, contact, team}) {

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 1000
  
    React.useEffect(() => {
          
        window.addEventListener("resize", () => setWidth(window.innerWidth));
      
      }, []);

    if(width<breakpoint){
        return(<></>)
    }

        return (
            <div className="sidebar">
                        <div className="sideTab">
                            {/* <div className="social">
                                <div className="socialIcons" style={{background:"blue"}}/>
                                <div className="socialIcons"/>
                                <div className="socialIcons"/>
                                <div className="socialIcons"/>
                            </div> */}
                            <div className="spacing__big"/>
                            <div className="navbar">
                                <SidebarRow title="HOME" selected={home}/>
                                <SidebarRow title="WORKS" selected={works}/>
                                <SidebarRow title="TEAM" selected={team}/>
                                <SidebarRow title="CONTACT" selected={contact}/>
                            </div>
                            <div className="spacing__small"/>
                        </div>
            </div>
        )
}

export default Sidebar
