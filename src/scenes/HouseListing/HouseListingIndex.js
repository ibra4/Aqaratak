import React, { Component } from 'react'
import { View } from 'react-native'
import { get } from '../../providers/provider'
import { searchRoute, housesRoute, favoriteRoute } from '../../providers/routes'
import Loading from '../../components/Loading'
import HouseCities from './HouseListing'
import I18n from '../../I18n'
import Title from '../../components/Title'
import Layout from '../../components/layout/parallax/Layout'

export class HouseListingIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: 'loading',
            data: [],
            title: I18n.t('all_houses')
        }
    }

    componentDidMount() {
        if (this.props.location) {
            this.setState({ title: this.props.location })
        }
        if (this.props.favorite) {
            this.setState({ title: I18n.t('favorites') })
        }
        this.getData()
    }

    handleResponse(json) {
        console.log(json)
        if (json.status == 'success') {
            json.data.push(json.data[0])
            this.setState({ data: json.data, status: 'success' })
        } else {
            this.setState({ status: 'error' })
        }
    }

    async getData() {
        let options = {
            route: housesRoute
        }
        if (this.props.location) {
            options.route = searchRoute
            options.params = {
                location: this.props.location
            }
        }
        if (this.props.favorite) {
            options.route = favoriteRoute
            options.params = {
                id_user: 52
            }
        }
        const response = await get(options)
        await response.json().then(json => {
            this.handleResponse(json)
        })
    }

    renderTemplate() {
        const status = this.state.status
        switch (status) {
            case 'loading':
                return <Loading />
            case 'success':
                const props = {
                    data: this.state.data
                }
                return <HouseCities props={props} />
        }
    }

    render() {
        return (
            <Layout>
                <Title>{this.state.title}</Title>
                {this.renderTemplate()}
            </Layout>
        )
    }
}

export default HouseListingIndex
