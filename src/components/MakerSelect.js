 
import React, { Component } from 'react'

export class MakerSelect extends Component {

    render() {
        const {makers} = this.props;
        
        return (
            <select onChange={ this.props.onChange }>
                {   makers.map((maker, id) =>
                        <option key={id} value={id}> { maker.nome } </option>
                    ) 
                }
            </select>
        )
    }
}

export default MakerSelect;
