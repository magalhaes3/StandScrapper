import React, { Component } from 'react'

export default class Models extends Component {
    render() {
        const {models} = this.props;

        if (models.length === 0) {
            return (
                <select disabled></select>
            )
        } else {
            return (
                <select>
                    {
                        models.map((model, id) => 
                            <option key={id} value={model}>{model.nome}</option>
                        )
                    }
                </select>
            )
        }
        
    }
}
