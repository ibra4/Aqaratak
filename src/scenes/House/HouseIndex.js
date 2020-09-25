import React, {Component} from 'react';
import {Text, Alert} from 'react-native'
import Layout from '../../components/layout/parallax/Layout';
import House from './House';
import {Actions} from 'react-native-router-flux';
import {get} from '../../providers/provider'
import {houseDetailsRoute} from '../../providers/routes'
import Loading from '../../components/Loading'

class HouseIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      status: 'loading',
    };
  }

  componentDidMount() {
    this.getData()
  }

  handleResponse(json) {
    switch (json.status) {
      case 'success': 
        this.setState({status: 'success', data: json.data[0]})
        break;
      case 'error':
        this.setState({status: 'error'})
    }
  }

  handleLike(H_id,U_id) {
    console.log(U_id);
    console.log(H_id);
    
    const URL = 'http://aqaratkqatar.com/Routing/web.php?action=AddeFavorite';
    let response = fetch(URL, {
    method: 'POST',
    headers: new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    
    }),
    body: "id_houses=" + H_id + "&id_user=" + U_id,
    })
    .then((response) => response.json())
    .then((responseJson) => {
    console.log(responseJson);
    if (responseJson.status == 'success') {
    Alert.alert( "Added to favorites")
    } else {
    Alert.alert('error', 'invalid_Add')
    }
    })
    .catch((error) => {
    console.error(error);
    });
    
    Actions.push('Login');
    }
  
  async getData() {
    const options = {
      route: houseDetailsRoute,
      params: {
        id: this.props.id
      }
    }
    const response = await get(options)
    await response.json().then(json => {
      console.log("Json", json)
      this.handleResponse(json);
    })
  }

  renderTemplate() {
    const status = this.state.status
    switch (status) {
      case 'success':
        const tempData = this.state.data
        console.log(tempData)
        tempData.gallery = [];
        tempData.gallery.push(tempData.img)
        tempData.gallery.push(tempData.img)
        const props = {
          data: tempData,
          likeHouse: this.handleLike,
        };
        return <House props={props} />
      case 'loading':
        return <Loading />
      default:
        return <Text>Something wents wrong</Text>
    }
  }

  render() {
    return (
      <Layout title={'this.state.data.name'} slider={true}>
        {this.renderTemplate()}
      </Layout>
    );
  }
}

export default HouseIndex;
