import React from 'react'
import { Link } from 'react-router-dom'
import './Body.css'

function Body(props) {
    React.useEffect(()=>{
        window.scrollTo(0,0)
      },[])
      let worksContainerStyle = {flex:"0.8"}

      if(props.width<props.breakpoint){
          worksContainerStyle.flex="1"
      }
      
        return (
                <div className="body" >
                    
                    {/* <div className="circle"/> */}
                    {/* <div>
                        <div className="heading">
                            Hi,
                        </div>
                        <div className="tagline">
                            We are doing tech!
                        </div>
                
                     </div> */}
                         <div style={{display: "flex"}}>
                            <div className="show" style={{flex:"1"}}>
                                    
                                    {/* style={{background:"rgb(35,65,182)"}} style={{background:"#4d529e"}}*/}
                                    <div className="showItem">
                                        <div className="showDetails">
                                            <h5 className="showDescription">OUR PRIDE</h5>
                                            <h1 className="showName">Get started with Open Badges</h1>
                                            <h5 className="showDescription">Open Badges put learners in control of how and where they share verifiable evidence of their skills and achievements with people, organizations, and social platforms.</h5>
                                            <button className="getStarted">Coming soon</button>
                                        </div>
                                    </div>
                                    {/* style={{background:"rgb(193,8,16)"}} */}
                                    <div className="showItem projects">
                                        <div className="showDetails">
                                            <h5 className="showDescription">SHOWCASE</h5>
                                            <h1 className="showName">Our most recent digital and strategy projects</h1>
                                            <Link to={`${process.env.PUBLIC_URL}/Works`} style={{textDecoration:'none'}}>
                                                <button className="view">View Projects -&gt;</button>
                                            </Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                         
                        <div style={{display: "flex"}}>
                            <div style={{flex:"1"}} className="cards">
                                <div className="features">
                                    <div className="icon"></div>
                                    <h2 className="featureName">
                                        USER EXPERIENCE
                                    </h2>
                                    <h5 className="fetaureDescription">We bring expertise in all stages of design, from research to polished prototypes</h5>
                                </div>
                                <div className="features">
                                    <div className="icon"></div>
                                    <h2 className="featureName">
                                        CLOUD SERVICES
                                    </h2>
                                    <h5 className="fetaureDescription">We have experience in cloud infrastructure services, design patterns and strategies</h5>
                                </div>
                                <div className="features">
                                    <div className="icon"></div>
                                    <h2 className="featureName">
                                        WEB DEVELOPMENT
                                    </h2>
                                    <h5 className="fetaureDescription">We leverage new approaches to web development to deliver innovation soluttions</h5>
                                </div>
                                <div className="features">
                                    <div className="icon"></div>
                                    <h2 className="featureName">
                                        MOBILE DEVELOPMENT
                                    </h2>
                                    <h5 className="fetaureDescription">From pure native to cross-platform, we'll help you select the best choice for your app</h5>
                                </div>
                            </div>
                         </div>
                        
                </div>
        )
}

export default Body
