import React, {Component} from 'react';
import BookForm from './BookForm';
import Layout from '../../components/layout/parallax/Layout';
import Title from '../../components/Title';
import I18n from '../../I18n'

export default class BookFormIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Title>{I18n.t('book_for_review')}</Title>
        <BookForm />
      </Layout>
    );
  }
}
