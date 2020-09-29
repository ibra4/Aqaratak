import React, { Component } from 'react'
import { Text, I18nManager, ScrollView } from 'react-native'
import Layout from '../../components/layout/parallax/Layout'
import Loading from '../../components/Loading'
import I18n from '../../I18n'
import { CitiesRoute } from '../../providers/routes'
import { get } from '../../providers/provider'
import CitiesListing from './CitiesListing'
import Title from '../../components/Title'

const cities = [{
    value: 'amman',
    img: 'https://pix10.agoda.net/hotelImages/4894127/0/be25b9261a132e449c07a3a54d91e76e.jpg?s=1024x768'
}, {
    value: 'istanbul',
    img: 'https://pix10.agoda.net/hotelImages/4894127/0/be25b9261a132e449c07a3a54d91e76e.jpg?s=1024x768'
},
{
    value: 'london',
    img: 'https://pix10.agoda.net/hotelImages/4894127/0/be25b9261a132e449c07a3a54d91e76e.jpg?s=1024x768'
},
{
    value: 'paris',
    img: 'https://pix10.agoda.net/hotelImages/4894127/0/be25b9261a132e449c07a3a54d91e76e.jpg?s=1024x768'
}];

export class CitiesListingIndex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            status: 'loading',
            data: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    handleResponse(json) {
        if (json.status == 'success') {
            this.setState({ data: json.data, status: 'success' })
        } else {
            this.setState({ status: 'error' })
        }
    }

    async getData() {
        const options = {
            route: CitiesRoute
        }
        const response = await get(options);
        await response.json().then(json => this.handleResponse(json))
    }

    renderLayout() {
        return <CitiesListing props={{ data: cities }} />
        const status = this.state.status
        switch (status) {
            case 'success':
                const props = {
                    data: this.state.data
                }
                return <CitiesListing props={props} />
            case 'loading':
                return <Loading />
            default:
                return <Text>{I18n.t('ops_error')}</Text>
        }
    }

    render() {
        return (
            <Layout>
                <Title>{I18n.t('cities')}</Title>
                <ScrollView>
                    {this.renderLayout()}
                </ScrollView>
            </Layout>
        )
    }
}

export default CitiesListingIndex
