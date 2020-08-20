import React from 'react'
import './Works.css'
import './WorkDetails.css'
import './Body.css'
import Estudo1 from "../Assets/Estudo1.png"
import Estudo2 from "../Assets/Estudo2.png"
import Estudo3 from "../Assets/Estudo3.png"
import Xoto2 from "../Assets/Xoto2.png"
import Xoto1 from "../Assets/Xoto1.png"
import Xoto3 from "../Assets/Xoto3.png"
import LearnE1 from "../Assets/LearnE1.png"
import LearnE2 from "../Assets/LearnE2.png"
import LearnE3 from "../Assets/LearnE3.png"

import Data from './data'

function WorkDetails(props) {
    React.useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    let description=''
    let tag=''
    let image1=''
    let image2=''
    let image3=''
    switch(props.title){
        case "Estudo":{
            description=(Data.Estudo.description)
            tag=(Data.Estudo.tag)
            image1=(Estudo1)
            image2=(Estudo2)
            image3=(Estudo3)
        break;
        }
        case "Xoto":{
            description=(Data.Xoto.description)
            tag=(Data.Xoto.tag)
            image1=(Xoto1)
            image2=(Xoto2)
            image3=(Xoto3)
        break;
        }
        case "LearnE":{
            description=(Data.LearnE.description)
            tag=(Data.LearnE.tag)
            image1=(LearnE1)
            image2=(LearnE2)
            image3=(LearnE3)
        break;
        }
        default:
    }
    let workContainerStyle = {flex:"0.7"}

    if(props.width-200<props.breakpoint){
        workContainerStyle.flex="1"
    }
    return (
        <div className="workDetails">
            { props.width-200>props.breakpoint &&
            <div className="spacing">
            </div>
            }
            <div style={workContainerStyle} className="workContainer">
                                <h1>{props.title}</h1>
                                <hr/>
                                <h3>{tag}</h3>
                                <p>{description}</p>
                                <div style={{display: "flex"}}>
                            <div style={{flex:"1"}} className="imageContainer">
                                
                                <div className="displayImage">
                                    <center>
                                    <img src={image1} alt="" className="appImage" style={{width:"100%"}}></img>
                                    </center>
                                </div>
                                
                                <div className="displayImage">
                                    <center>
                                    <img src={image2} alt="" className="appImage" style={{width:"100%"}}></img>
                                    </center>
                                </div>

                                <div className="displayImage">
                                    <center>
                                    <img src={image3} alt="" className="appImage" style={{width:"100%"}}></img>
                                    </center>
                                </div>
                            </div>
                         </div>
            </div>
            { props.width-200>props.breakpoint &&
            <div className="spacing">
            </div>
            }
            
        </div>
    )
}

export default WorkDetails
