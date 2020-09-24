import React, { Component } from 'react'
import Search from './Search'
import { get } from '../../providers/provider'
import Loading from '../../components/Loading'
import { Text } from 'react-native'

import Layout from '../../components/layout/parallax/Layout';
import I18n from '../../I18n'

import {housesRoute} from '../../providers/routes'

export default class SearchIndex extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data: [],
             status: 'loading'
        }
    }
    
    
    componentDidMount() {
        this.getData();
    }

    handleResponse(response, json) {
        switch(json.status) {
            case 'success':
                this.setState({data: json.data, status: 'success'})
                break;
            case 'error':
                this.setState({status: 'error'})
        }
    }
    
    async handleSearch(options) {
        console.log("HandleSearch")
        this.setState({status: 'loading'})
        const response = await get(options)
        await response.json().then(data => {
            this.handleResponse(response, data);
        })
    }

    async getData() {
        const options = {
            route: housesRoute
        }
        const response = await get(options)
        await response.json().then(data => {
            this.handleResponse(response, data);
        })
    }
    
    renderTemplate() {
        const status = this.state.status;
        switch (status) {
            case 'success':
                const props = {
                    data: this.state.data,
                    handleSearch: options => this.handleSearch(options)
                }
                return <Search props={props} />
            case 'loading':
                return <Loading />
            default: 
                return <Text>"Opps... Something went wrong, please call the administrator"</Text>
        }
    }

    render() {
        return <Layout title={I18n.t('search')}>{this.renderTemplate()}</Layout>
    }
}
