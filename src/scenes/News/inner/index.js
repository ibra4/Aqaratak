import React, {Component} from 'react';
import Layout from '../../../components/layout/parallax/Layout';
import NewsInner from './inner';

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        id: 1,
        title: 'Title 1',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgKfZqIFCQL2ZSd5aQBDirKxRBLp7jWXbb5w&usqp=CAU',
        date: '4 Apr 2020',
      },
      status: 'success',
    };
  }

  componentDidMount() {}

  handleResponse(response, json) {
    switch (response.status) {
      case 200:
        this.setState({
          data: json,
          status: 'success',
        });
      default:
        this.setState({
          status: 'error',
        });
    }
  }

  getData() {}

  renderTemplate() {
    switch (this.state.status) {
      case 'success':
        const props = {
          data: this.state.data,
        };
        return <NewsInner props={props} />;
    }
  }

  render() {
    return (
      <Layout title={this.state.data.title} slider={true}>
        {this.renderTemplate()}
      </Layout>
    );
  }
}
