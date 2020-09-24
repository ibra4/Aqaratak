/**/

import React from 'react';

import Layout from '../../components/layout/parallax/Layout';
import Loading from '../../components/Loading';
// import Error from '../../components/Error';

import {get} from '../../providers/provider';
import {newsRoute} from '../../providers/routes.js';

import I18n from '../../I18n';
import News from './News';

const size = 5;

class NewsIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          title: 'Title 1',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgKfZqIFCQL2ZSd5aQBDirKxRBLp7jWXbb5w&usqp=CAU',
          date: '4 Apr 2020',
        },
        {
          id: 2,
          title: 'Title 1',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgKfZqIFCQL2ZSd5aQBDirKxRBLp7jWXbb5w&usqp=CAU',
          date: '4 Apr 2020',
        },
        {
          id: 3,
          title: 'Title 1',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgKfZqIFCQL2ZSd5aQBDirKxRBLp7jWXbb5w&usqp=CAU',
          date: '4 Apr 2020',
        },
        {
          id: 4,
          title: 'Title 1',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgKfZqIFCQL2ZSd5aQBDirKxRBLp7jWXbb5w&usqp=CAU',
          date: '4 Apr 2020',
        },
        {
          id: 5,
          title: 'Title 1',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgKfZqIFCQL2ZSd5aQBDirKxRBLp7jWXbb5w&usqp=CAU',
          date: '4 Apr 2020',
        },
      ],
      status: 'success',
      page: 0,
      size: size,
    };
  }

  componentDidMount() {
    this.getData();
  }

  handleResponse(response, json) {
    switch (response.status) {
      case 200:
        this.setState({
          data: [...this.state.data, ...json.data],
          status: 'success',
        });
        break;
      default:
        this.setState({
          status: 'error',
        });
    }
  }

  getData = async () => {
    let options = {
      route: newsRoute,
      page: this.state.page,
      size: 4,
      locale: I18n.locale,
    };

    let response = await get(options);

    await response.json().then((json) => {
      this.handleResponse(response, json);
    });
  };

  onRefresh = () => {
    this.setState(
      {
        page: 0,
        refreshing: true,
        size: size,
        seed: this.state.seed + 1,
      },
      () => {
        this.getData();
      },
    );
  };

  loadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
        size: size,
      },
      () => {
        this.getData();
      },
    );
  };

  renderTemplate() {
    let props = {
      data: this.state.data,
      loadMore: () => this.loadMore(),
      onRefresh: () => this.onRefresh(),
    };
    let status = this.state.status;

    switch (status) {
      case 'success':
        return <News props={props} />;
      case 'loading':
        return <Loading />;
      case 'error':
        return <Error />;
    }
  }

  render() {
    return <Layout>{this.renderTemplate()}</Layout>;
  }
}

export default NewsIndex;
