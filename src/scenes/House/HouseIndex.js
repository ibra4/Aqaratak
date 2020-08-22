import React, {Component} from 'react';
import Layout from '../../components/layout/default/Layout';
import House from './House';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

class HouseIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        id: 1,
        name: 'Big House',
        location: 'London',
        area: 420,
        price: '750,000.00',
        images: [
          'https://q-cf.bstatic.com/images/hotel/max1024x768/207/207602915.jpg',
          'https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg',
          'https://q-cf.bstatic.com/images/hotel/max1024x768/207/207602915.jpg',
        ],
        propertyDetails: [
          'Bosphorus views',
          'Telephones',
          'Family Villa',
          'Internet',
        ],
        propertyDetails_ar: [
          'نص تجريبي 1',
          'نص تجريبي 2',
          'نص تجريبي 3',
          'نص تجريبي 4',
        ],
        contact: {
          phone: '07865654654',
          email: 'test@gmail.com',
        },
        owner: {
          name: 'John Publ',
          location: 'London / UK',
          phone: '078787878787',
          mail: 'test@gmail.com',
        },
        location: 'Istanbul',
        type: 'for_sale',
        beds: 2,
        baths: 3,
        parkings: 1,
        kitchens: 1,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        description_ar:
          'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.',
      },
    };
    // this.likeHouse = this.likeHouse.bind(this);
  }

  handleLike() {
    // alert(this.props.loggedIn);
    Actions.push('Login');
  }

  componentDidMount() {}

  getData() {}

  async handleResponse() {}

  renderTemplate() {
    const props = {
      data: this.state.data,
      likeHouse: this.handleLike,
    };
    return <House props={props} />;
  }

  render() {
    return (
      <Layout title={this.state.data.name} slider={true}>
        {this.renderTemplate()}
      </Layout>
    );
  }
}

export default HouseIndex;
