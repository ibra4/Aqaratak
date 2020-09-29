import React, { Component } from 'react';
import HouseForm from './HouseForm';
import Layout from '../../components/layout/parallax/Layout';
import firestore from '@react-native-firebase/firestore';

import I18n from '../../I18n'
import { post } from '../../providers/provider';
import { addHouseRoute } from '../../providers/routes';
import { Actions } from 'react-native-router-flux';

export default class HouseFormIndex extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }


  async handleSubmit(data) {
    console.log(data)
    const options = {
      route: addHouseRoute,
      body: data
    }
    const response = await post(options)
    await response.json().then(json => {
      console.log(json)
      if (json.status == 'success') {
        alert("Addedd successfully")
        Actions.push("Home")
      } else {
        alert("Check Missing Fields")
      }
    })
  }

  renderTemplate() {
    const props = {
      handleSubmit: this.handleSubmit,
    };
    return <HouseForm props={props} />;
  }

  render() {
    return <Layout title={I18n.t('add_new_house')}>{this.renderTemplate()}</Layout>;
  }
}
