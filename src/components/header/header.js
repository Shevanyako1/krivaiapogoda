import React, { Component } from 'react';
import Select from './select';


class Head extends Component{
    render() {
        return (
            <div>
                <h1 className ="head">Поиск б\у автомобилей</h1>
                <Select announceMethod={this.gettingAnnounce}/>
            </div>
            
        );
    }
}

export default Head;