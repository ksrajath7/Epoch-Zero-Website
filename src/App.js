import React from 'react';
import Body from './Components/Body'
import Works from './Components/Works';
import Header from './Components/Header'
import WorkDetails from './Components/WorkDetails';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

function App() {

  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = 800


  React.useEffect(() => {
      
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  
    }, []);

  
  return (
    <BrowserRouter>
      <div className="app">
        <Header width={width} breakpoint={breakpoint}/>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <Body width={width} breakpoint={breakpoint}/>
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/Works`}>
            <Works width={width} breakpoint={breakpoint}/>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/Works/:workId`} render={
            (props)=>
              <Switch>
                <Route path={`${process.env.PUBLIC_URL}/Works/Estudo`} render={()=>
                  <WorkDetails title="Estudo" width={width} breakpoint={breakpoint}/>
                }/>
                <Route path={`${process.env.PUBLIC_URL}/Works/Xoto`} render={()=>
                  <WorkDetails title="Xoto" width={width} breakpoint={breakpoint}/>
                }/>
                <Route path={`${process.env.PUBLIC_URL}/Works/LearnE`} render={()=>
                  <WorkDetails title="LearnE" width={width} breakpoint={breakpoint}/>
                }/>
                <Route>
                  <Redirect to={`${process.env.PUBLIC_URL}/Works`}></Redirect>
                </Route>
              </Switch>
          }/>
          <Route>
            <Redirect to={`${process.env.PUBLIC_URL}/`}></Redirect>
          </Route>
        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
