import React from 'react'
import Rasavada from "../Assets/Rasavada.png"
import Estudo from "../Assets/Estudo.png"
import Xoto from "../Assets/Xoto.png"
import './Body.css'

function CreateBadgePage() {

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 1000

    React.useEffect(() => {
        
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
      }, []);

      let worksContainerStyle = {flex:"0.8"}

      if(width<breakpoint){
          worksContainerStyle.flex="1"
      }
      
        return (
                <div style={worksContainerStyle} className="body" >
                        <div style={{flex:"1"}} className="cards">
                            <div class="card">
                                <center>
                                <img src={Estudo} alt="" className="image"></img>
                                </center>
                            </div>
                            <div class="card">
                                <center>
                                <img src={Xoto} alt="" className="image"></img>
                                </center>
                            </div>
                            
                            <div class="card">
                                <center>
                                <img src={Rasavada} alt="" className="image"></img>
                                </center>
                            </div>
                            <div class="card">
                                <center>
                                <img src={Rasavada} alt="" className="image"></img>
                                </center>
                            </div>
                        </div>
                </div>
        )
}

export default CreateBadgePage
