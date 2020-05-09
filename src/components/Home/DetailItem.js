import React from 'react';

export default class DetailItem extends React.Component {

  render() {
    return (
      <div style={{background: "#fd595f",borderRadius: 5}}>
        <p style= {{ fontSize:20, color: "white", padding: 5}}>{this.props.number}           : <span style={{float:"right"}}>{this.props.amount} pictures</span></p>
      </div>
    )
  }
}