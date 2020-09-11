import React, { useEffect } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Settings from '../scenes/Settings/Settings';
import Menu from '../scenes/Menu/Menu';
import Gallery from '../scenes/Gallery/GalleryIndex';
import HomeIndex from '../scenes/Home/HomeIndex';
import SearchIndex from '../scenes/Search/SearchIndex';
import LoginIndex from '../scenes/Login/LoginIndex';
import HouseIndex from '../scenes/House/HouseIndex';
import NewsIndex from '../scenes/News/NewsIndex';
import BookFormIndex from '../scenes/BookForm/BookFormIndex';
import NewsInnerIndex from '../scenes/News/inner/index';
import HouseFormIndex from '../scenes/HosueForm/HouseFormIndex';
import About from '../scenes/About'
import Privacy from '../scenes/Privacy'
import Contact from '../scenes/Contact'
import Register from '../scenes/Register'
import auth from '@react-native-firebase/auth';
import { useSelector } from 'react-redux';

export default function index() {

  const loggedIn = useSelector(state => state.user.loggedIn)

  return (
    <Router>
      <Stack key="root">
        <Scene key="Home" component={HomeIndex} hideNavBar />
        {!loggedIn && (
          <Scene key="Login" component={LoginIndex} hideNavBar />
        )}
        <Scene key="Register" component={Register} hideNavBar />
        {loggedIn && (
          <Scene key="HouseForm" component={HouseFormIndex} hideNavBar />
        )}
        <Scene key="About" component={About} hideNavBar />
        <Scene key="Privacy" component={Privacy} hideNavBar />
        <Scene key="Contact" component={Contact} hideNavBar />
        <Scene key="BookForm" component={BookFormIndex} hideNavBar />
        <Scene key="House" component={HouseIndex} hideNavBar />
        <Scene key="News" component={NewsIndex} hideNavBar />
        <Scene key="NewsInner" component={NewsInnerIndex} hideNavBar />
        <Scene key="Search" component={SearchIndex} hideNavBar />
        <Scene key="Gallery" component={Gallery} hideNavBar />
        <Scene key="Settings" component={Settings} hideNavBar />
        <Scene key="Menu" component={Menu} hideNavBar />
      </Stack>
    </Router>
  );
}
