
import './App.css';
import * as React from 'react';

import smoothscroll from 'smoothscroll-polyfill';

import MenuMobile from './MenuMobile'
import MenuBrowser from './MenuBrowser'
import {

  isBrowser,
  isMobile
} from "react-device-detect";
import GeneralContext, { GeneralProvider } from './Provider.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SnackbarProvider, { withSnackbar } from 'react-simple-snackbar'
import PhoneForgot from './srcPhone/PhoneForgot'
import PhoneLanding from './srcPhone/PhoneLanding'
import PhoneLogin from './srcPhone/PhoneLogin'
import PhoneManage from './srcPhone/PhoneManage'
import PhoneMenu from './srcPhone/PhoneMenu'
import PhoneSuccess from './srcPhone/PhoneSuccess'
import PhoneRegister from './srcPhone/PhoneRegister'
import BrowserForgot from './srcBrowser/BrowserForgot'
import BrowserLanding from './srcBrowser/BrowserLanding'
import BrowserLogin from './srcBrowser/BrowserLogin'
import BrowserManage from './srcBrowser/BrowseManage/BrowserManageManager'
import BrowserMenu from './srcBrowser/BrowserMenu'
import BrowserSuccess from './srcBrowser/BrowserSuccess'
import BrowserRegister from './srcBrowser/BrowserRegister'
import { ParallaxProvider } from 'react-scroll-parallax';


const DEVELOPMENT = true
// kick off the polyfill!
smoothscroll.polyfill();

export default class App extends React.Component {




  render() {

    return (

      <SnackbarProvider>
        <ParallaxProvider>
        <GeneralProvider>
          <Router>
        <Switch>
          {false &&
          <Route exact path="/register">
            {isMobile && 
              <PhoneRegister />
            }
            {isBrowser &&
              <BrowserRegister />
            }

          </Route>
          }
          {false &&
          <Route exact path="/login">
            {isMobile &&
              <PhoneLogin />
            }
            {isBrowser &&
              <BrowserLogin />
            }
          </Route>
          }
        {false &&
          <Route exact path="/forgot">
            {isMobile &&
              <PhoneForgot />
            }
            {isBrowser &&
              <BrowserForgot />
            }
          </Route>
        }
          <Route exact path="/">
            {isMobile && 
              <PhoneLanding />
            }
            {isBrowser &&
              <BrowserLanding />
            }
          </Route>
          {false &&
          <Route exact path="/manage">
            {isMobile &&
              <PhoneManage />
            }
            {isBrowser &&
              <BrowserManage />
            }
          </Route>
          }
          {false &&
          <Route exact path="/success">
            {isMobile && 
              <PhoneSuccess />
            }
            {isBrowser && 
              <BrowserSuccess />
            }
          </Route>
          }
          {false &&
          <Route exact path="/:name">
            {isMobile && 
              <MenuMobile />
            }
            {isBrowser &&
              <BrowserMenu />
            }
          </Route>
          }
          {false &&
          <Route exact path="/landing">
            {isMobile &&
              <MenuMobile />
            }
            {isBrowser  &&
              <MenuBrowser />
            }
          </Route>
          }
        </Switch>

        </Router>
        </GeneralProvider>
        </ParallaxProvider>
      </SnackbarProvider>
    );
  }
}
