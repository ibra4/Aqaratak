import React, {Component} from 'react';
import BookForm from './BookForm';
import Layout from '../../components/layout/parallax/Layout';

export default class BookFormIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Layout title="Book a View">
        <BookForm />
      </Layout>
    );
  }
}
