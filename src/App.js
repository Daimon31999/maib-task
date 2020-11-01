// in src/App.js
import * as React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import Dashboard from './components/dashboard/Dashboard'
import authProvider from './components/auth/authProvider'
import './App.css'
import { theme } from './components/theme'
import Support from './components/Support'

import HelpIcon from '@material-ui/icons/Help'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
    theme={theme}>
    <Resource name='Support' list={Support} icon={HelpIcon} />
  </Admin>
)
export default App
