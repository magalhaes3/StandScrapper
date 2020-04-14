import React, { Component } from 'react'

export default class Maker extends Component {
    render() {
        const maker = this.props.maker
        return (
            <option onChange={this.props.onChange} key={maker.id} value={ maker.nome }> { maker.nome } </option>
        )
    }
}
