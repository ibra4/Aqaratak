import React, { Component } from 'react'
import { Text } from 'react-native'
import Layout from '../../components/layout/parallax/Layout'
import Loading from '../../components/Loading'
import Favorite from './Favorites'
import { favoriteRoute } from '../../providers/routes'
import { get } from '../../providers/provider'
import I18n from '../../I18n'
import { Presets } from '../../assets/style'

export class FavoritesIndex extends Component {

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
        console.log(json)
        if (json.status == 'success') {
            this.setState({ data: json.data, status: 'success' })
        } else {
            this.setState({ status: 'error' })
        }
    }

    async getData() {
        const options = {
            route: favoriteRoute,
            params: {
                id_user: 52
            }
        }
        const response = await get(options)
        await response.json().then(json => this.handleResponse(json))
    }

    renderTemplate() {
        const status = this.state.status
        switch (status) {
            case 'success':
                let data = []
                data.push(this.state.data[3])
                data.push(this.state.data[4])
                const props = {
                    data: data
                }
                return <Favorite props={props} />
            case 'loading':
                return <Loading />
            default:
                return <Text style={Presets.container}>{I18n.t('ops_error')}</Text>
        }
    }

    render() {
        return <Layout>{this.renderTemplate()}</Layout>
    }
}

export default FavoritesIndex
