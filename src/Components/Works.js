import React from 'react'
import LearnE from "../Assets/LearnEWork.png"
import Estudo from "../Assets/EstudoWork.png"
import Xoto from "../Assets/XotoWork.png"
import './Works.css'
import './Body.css'
import { Link } from 'react-router-dom'

function Works(props) {
    React.useEffect(()=>{
        window.scrollTo(0,0)
      },[])

      let worksContainerStyle = {flex:"0.7"}

      if(props.width-200<props.breakpoint){
          worksContainerStyle.flex="1"
      }
      
    return (
        <div className="works">
            { props.width-200>props.breakpoint &&
            <div className="spacing">
            </div>
            }
            <div style={worksContainerStyle} className="worksContainer">
                                <Link to={`${process.env.PUBLIC_URL}/Works/Estudo`}>
                                <div className="card">
                                    <center>
                                    <img src={Estudo} alt="" className="imageWork"></img>
                                    </center>
                                </div>
                                </Link>
                                <Link to={`${process.env.PUBLIC_URL}/Works/Xoto`}>
                                <div className="card">
                                    <center>
                                    <img src={Xoto} alt="" className="imageWork"></img>
                                    </center>
                                </div>
                                </Link>
                                <Link to={`${process.env.PUBLIC_URL}/Works/LearnE`}>
                                <div className="card">
                                    <center>
                                    <img src={LearnE} alt="" className="imageWork"></img>
                                    </center>
                                </div>
                                </Link>
                            </div>
            { props.width-200>props.breakpoint &&
            <div className="spacing">
            </div>
            }
            </div>
    )
}

export default Works
