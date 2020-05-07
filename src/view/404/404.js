/*  import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allAction from '@redux/action'
import { Button } from 'antd-mobile'

@connect(
  (state) => ({
    color: state.color,
  }),
  (dispatch) => bindActionCreators(allAction, dispatch)
)
class NotFound extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      styles: {
        box: { padding: '20px' },
        box_p: {
          width: '300px',
          height: '300px',
          borderRadius: '300px',
        },
      },
    }
  }
  render() {
    return (
      <div style={this.state.styles.box}>
        <p
          style={this.state.styles.box_p}
          style={{
            width: '300px',
            height: '300px',
            background: this.props.color,
          }}
        ></p>
        404
        {this.props.color}
        <Button type="primary" onClick={() => this.props.stateColor('red')}>
          点击
        </Button>
      </div>
    )
  }
}

export default NotFound
 */
