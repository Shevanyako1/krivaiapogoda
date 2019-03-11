import React, { Component } from 'react';
import data from '../App';

class Announcement extends Component{
	render() {
    return (
      <form>
				<button onClick={this.props.announceMethod}>Vibor</button> 
      </form>
    );
  }
}


export default Announcement;