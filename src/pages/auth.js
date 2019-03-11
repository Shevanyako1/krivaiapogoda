import React, { Component } from 'react';
 
export default class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = { email:[],
                        password:[],
                    };

      this.handleChange = this.handleChange.bind(this);
      this.add= this.add.bind(this);

    }
    
    handleChange(event) {
        event.preventDefault();
        this.setState({email: [event.target.value],
                       password: [event.target.value]});
    }

    add(event) {
        event.preventDefault();
        console.log(this.state.email,this.state.password);

        //const email =  this.state.email;
        //const password = this.state.password;
    
        //axios.post('https://my-json-server.typicode.com/typicode/demo/posts', { email , password })
        //        .then(res => {
        //           console.log(res);
        //           console.log(res.data);
        //       }); 
    };

    render() {   
    
		return (
			<div className="auth">
                <form className="authForm">
                    <input type="text"
                            placeholder="email"
                            onChange={this.handleChange}
                    />
                    <input type="text"
                            placeholder="password"
                            onChange={this.handleChange}
                    />
                    <button onClick={this.add} className="authForm-button">Войти</button>   
                </form>
            </div>
		);
	}
}
