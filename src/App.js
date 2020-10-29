// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostList  from './components/post/PostList'
import { UserList } from './components/UserList'
import PostEdit from './components/post/PostEdit'
import PostCreate from './components/post/PostCreate'
import Dashboard from './components/dashboard/Dashboard'
import authProvider from './components/auth/authProvider'
import './App.css'
import {theme} from './components/theme'


import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
<Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} theme={theme}> 
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  <Resource name="users" list={UserList} icon={UserIcon} />
</Admin>
) 
export default App;