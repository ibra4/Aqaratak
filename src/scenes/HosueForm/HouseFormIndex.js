import React, {Component} from 'react';
import HouseForm from './HouseForm';
import Layout from '../../components/layout/parallax/Layout';
import firestore from '@react-native-firebase/firestore';

export default class HouseFormIndex extends Component {
  handleSubmit(data) {
    firestore()
      .collection('houses')
      .add(data)
      .then((data) => console.log("Success", data))
      .catch((error) => console.log("Error", error));
  }

  renderTemplate() {
    const props = {
      handleSubmit: this.handleSubmit,
    };
    return <HouseForm props={props} />;
  }

  render() {
    return <Layout title="test">{this.renderTemplate()}</Layout>;
  }
}
