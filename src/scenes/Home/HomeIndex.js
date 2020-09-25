import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Layout from '../../components/layout/parallax/Layout';
import Loading from '../../components/Loading';
import Home from './Home';

import { homeData } from '../../assets/testData';
import { homeData_ar } from '../../assets/testData_ar';

import I18n from '../../I18n';
import { get } from '../../providers/provider';
import { housesRoute } from '../../providers/routes';

class HomeIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      status: 'loading',
    };
  }

  componentDidMount() {
    console.log("test")
    this.getData();
  }

  handleResponse(response, json) {
    switch (json.status) {
      case 'success':
        this.setState({
          data: json.data,
          status: 'success',
        });
        break;
      default:
        this.setState({
          status: 'error',
        });
    }
  }

  async getData() {
    const data = I18n.locale == 'ar' ? homeData_ar : homeData;
    this.setState({ data: data });
    const options = {
      route: housesRoute
    }
    const response = await get(options)
    await response.json().then(data => {
      this.handleResponse(response, data)
    })
  }

  handleHouseLike() {
    Actions.push('Login');
  }

  renderTemplate() {
    const status = this.state.status;
    switch (status) {
      case 'success':
        const props = {
          data: this.state.data,
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
