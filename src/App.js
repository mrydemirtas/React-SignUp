
//Route Componentini projemize dahil ediyoruz ve bu sayede Link kullanarak Componentleri arayüzde oluşturmuş oluyoruz. 
//Navlink kullanarak sayfaların linkini ve classlarını verebiliriz.
//activeClassName element aktif oldugunda eklenecek olan sınıfı belirler.
//pages adında bir klasör açıp kayıt olma ve giriş sayfalarını oluşturmaya baslıyoruz.
//Route exact propertyisini anasayfamızı belirlemek için kullanırız
//Link ve Navlink bir router nesnesidir. Html de a href mantıgıyla calısır Link, Navlink ise render edilmiş sayfadaki linklere css eklemek istediğimizde kullanılır.

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';

class App extends Component {
  render() { 
  return (
    <Router>
    <div className="App">
    <div className="App__Aside"></div>
    <div className="App__Form">
      <div className="PageSwitcher">
        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
        <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
      </div>

      <div className="FormTitle">
        <NavLink to ="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/sign-up" activeClassName="FormTitle__Link FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
      </div>

      <Route exact path="/sign-up" component={SignUpForm}>
 
      </Route>
      <Route path="/sign-in" component={SignInForm}>
   
      </Route>
    </div>
    </div>
    </Router>
  );
}
}

export default App;
