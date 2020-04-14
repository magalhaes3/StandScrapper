import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        const imgStyle = {
            width: '10%',
        }

        return (
            <div>
                <img alt='logo' src='https://image.flaticon.com/icons/svg/741/741407.svg' style={imgStyle}/>
            </div>
        )
    }


}
