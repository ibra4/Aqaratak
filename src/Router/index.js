import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
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
// import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

export default function index() {
  // const loggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <Router>
      <Stack key="root">
        {auth().currentUser && (
          <Scene key="HouseForm" component={HouseFormIndex} hideNavBar />
        )}
        {!auth().currentUser && <Scene key="Login" component={LoginIndex} hideNavBar />}
        <Scene key="BookForm" component={BookFormIndex} hideNavBar />
        <Scene key="Home" component={HomeIndex} hideNavBar />
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
