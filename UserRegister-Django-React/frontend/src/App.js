import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Dodaj import React Helmet

import Home from './containers/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import { UserProvider } from "./UserContext";
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <UserProvider>
      <Router>
        <Helmet>
          
          <title>Authentication</title>
          <meta name="description" content="Opis mojej strony" />
        </Helmet>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/dashboard/:username' element={<Dashboard />} />
          <Route exact path='/dashboard' element={<Login />} />
        </Routes>
      </Router>
    </UserProvider>
  </Provider>
);

export default App;
