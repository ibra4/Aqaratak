import React, {Component} from 'react';
import {Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Layout from '../../components/layout/parallax/Layout';
import Loading from '../../components/Loading';
import Home from './Home';

import {homeData} from '../../assets/testData';
import {homeData_ar} from '../../assets/testData_ar';

import I18n from '../../I18n';

class HomeIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      status: 'success',
    };
  }

  componentDidMount() {
    console.log("test")
    this.getData();
  }

  handleResponse(response, json) {
    switch (response.status) {
      case 200:
        this.setState({
          data: json,
          status: 'success',
        });
        break;
      default:
        this.setState({
          status: 'error',
        });
    }
  }

  getData() {
    const data = I18n.locale == 'ar' ? homeData_ar : homeData;
    this.setState({data: data});
  }

  handleHouseLike() {
    Actions.push('Login');
  }

  renderTemplate() {
    const status = this.state.status;
    switch (status) {
      case 'success':
        const props = {
          data: I18n.locale == 'ar' ? homeData_ar : homeData,
          likeHouse: this.handleHouseLike,
        };
        return <Home props={props} />;
      case 'loading':
        return <Loading />;
      case 'error':
        return <Text>Opps... Something went wrong</Text>;
    }
  }

  render() {
    return <Layout header={true}>{this.renderTemplate()}</Layout>;
  }
}

export default HomeIndex;
