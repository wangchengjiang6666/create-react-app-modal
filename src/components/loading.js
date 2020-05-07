import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import imgLoading from '@assets/images/loading.gif'

class Loadings extends Component {
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: 'auto',
          background: '#fff',
          zIndex: 10,
        }}
      >
        {/* <Icon 
        type="loading" 
        style={{
          'position': 'absolute',
          'top': '50%',
          'left': '50%',
          'transfrom': 'translateX(-50%)',
          'transfrom': 'translateY(-50%)'
        }} /> */}
        <img
          src={imgLoading}
          alt="/"
          style={{
            width: '64px',
            height: '64px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-32px',
            marginLeft: '-32px',
          }}
        />
      </div>
    )
  }
}

export default Loadings
