import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { searchRoute } from '../../providers/routes'
import { get } from '../../providers/provider'
import Layout from '../../components/layout/parallax/Layout'
import Loading from '../../components/Loading'
import Offers from './Offers'
import Title from '../../components/Title'
import I18n from '../../I18n'

export class OffersIndex extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            status: 'loading',
            data: []
        }
    }


    componentDidMount() {
        console.log(this.props.user_id)
        this.getData()
    }

    handleResponse(response, json) {
        if (json.status == 'success') {
            console.log(json.data)
            this.setState({ data: json.data, status: 'success' })
        } else {
            this.setState({ status: 'error' })
        }
    }

    async getData() {
        const options = {
            route: searchRoute,
            params: {
                id_user: this.props.user_id
            }
        }
        const response = await get(options)
        await response.json().then(data => {
            this.handleResponse(response, data)
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
                return <Offers props={props} />
        }
    }

    render() {
        return <Layout>
            <Title>{I18n.t('My_Offers')}</Title>
            {this.renderTemplate()}
        </Layout>
    }
}

const mapStateToProps = state => {
    return {
        user_id: state.user.user.id
    }
}

export default connect(mapStateToProps, null)(OffersIndex)
