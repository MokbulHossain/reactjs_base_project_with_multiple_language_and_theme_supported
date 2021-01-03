import React, { Component, Suspense,useState } from 'react'
import {BrowserRouter as Router, Route,browserHistory,Switch,Redirect} from 'react-router-dom';
import './i18n'
import {RoleBaseMiddleWare} from './Middleware'
import NotFound from "./NotFoundPage";
import ForbiddenPage from './403Forbidden'
import Login from './components/auth/Login'

import Hello from './testcomponent/Hello'
import ThankYou from './testcomponent/ThankYou'
import LanguageSelector from './testcomponent/LanguageSelector'

//for theme...
import {ThemeProvider} from 'styled-components';
import {getTheme} from "./getTheme";
import THEMES from './constants/themes'
import { Header, AppLink } from './styles';


const Test =()=><Suspense fallback="loading">
                     <LanguageSelector />
                     <Hello />
                    <ThankYou />
             </Suspense>

function App() {

  window.BASE_URL="/";
  const [themeName, setThemeName] = useState(sessionStorage.getItem( 'theme')||THEMES.BASIC);

  const changeTheme =(themeName)=>{
    setThemeName(themeName)
    sessionStorage.setItem( 'theme',themeName)

  }

  return (

    <ThemeProvider theme={getTheme(themeName)}>
      <div className="App">
        <Header>

        <Router>
          <Switch>
              <Route path="/test" exact component={Test}></Route>
              <Route path="/login" exact component={Login}></Route>
          

              <Route path="/403Forbidden" exact component={ForbiddenPage} />
              <Route path="/*" exact component={NotFound} />

          </Switch>
      </Router>

          <button onClick={() => changeTheme(THEMES.APPLE)}>Apple</button>
          <button onClick={() => changeTheme(THEMES.DARCULA)}>Darcula</button>
        </Header>
      </div>
    </ThemeProvider> 

   /* <Router>
          <Switch>
              <Route path="/test" exact component={Test}></Route>
              <Route path="/login" exact component={Login}></Route>
          

              <Route path="/403Forbidden" exact component={ForbiddenPage} />
              <Route path="/*" exact component={NotFound} />

          </Switch>
      </Router>  */
  )
}

export default App;
