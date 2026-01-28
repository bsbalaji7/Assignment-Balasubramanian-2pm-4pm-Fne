import React, { Component } from 'react'

export default class UserProfile extends Component {
    state = {user : null , loading :true}

    componentDidMount{
        fetch('')
        .then (res => res.json())
        .then(data => this.setState({user:data, loading: false}))
    }


  render() {
    if(this.state.loading)return <p>Loading</p>
    return <div>{this.state.user.}</div>
    
  }
}
