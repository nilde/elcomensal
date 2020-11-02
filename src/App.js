
import './App.css';
import * as React from 'react';

import smoothscroll from 'smoothscroll-polyfill';

import MenuMobile from './MenuMobile'
import MenuBrowser from './MenuBrowser'
import {

  isBrowser,
  isMobile
} from "react-device-detect";

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
import BrowserManage from './srcBrowser/BrowserManage'
import BrowserMenu from './srcBrowser/BrowserMenu'
import BrowserSuccess from './srcBrowser/BrowserSuccess'
import BrowserRegister from './srcBrowser/BrowserRegister'



const DEVELOPMENT = true
// kick off the polyfill!
smoothscroll.polyfill();

export default class App extends React.Component {




  render() {

    return (

      <SnackbarProvider>
        <Router>
          <Route path="/">
            {isMobile &&
              <MenuMobile />
            }
            {isBrowser &&
              <MenuBrowser />
            }
          </Route>
          <Route path="/register">
            {isMobile &&
              <PhoneRegister />
            }
            {isBrowser &&
              <BrowserRegister />
            }

          </Route>
          <Route path="/login">
            {isMobile &&
              <PhoneLogin />
            }
            {isBrowser &&
              <BrowserLogin />
            }
          </Route>
          <Route path="/forgot">
            {isMobile &&
              <PhoneForgot />
            }
            {isBrowser &&
              <BrowserForgot />
            }
          </Route>
          <Route path="/landing">
            {isMobile &&
              <PhoneLanding />
            }
            {isBrowser &&
              <BrowserLanding />
            }
          </Route>
          <Route path="/manage">
            {isMobile &&
              <PhoneManage />
            }
            {isBrowser &&
              <BrowserManage />
            }
          </Route>
          <Route path="/success">
            {isMobile &&
              <PhoneSuccess />
            }
            {isBrowser &&
              <BrowserSuccess />
            }
          </Route>
          <Route path="/:name">
            {isMobile &&
              <PhoneMenu />
            }
            {isBrowser &&
              <BrowserMenu />
            }
          </Route>


        </Router>
      </SnackbarProvider>
    );
  }
}
