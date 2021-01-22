import React, {Component} from 'react'

class UserLogin extends Component {
    constructor(){
        super()


        this.state={
            username: '',
            password: '',
        }
        this.loginHandler = this.loginHandler.bind(this)
    }

    usernameChanger(name) {
        this.setState({username: name})
    }

    passwordChanger(password) {
        this.setState({password: password})
    }

    loginHandler() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }



    render(){
        return(
            <div>
                <input onChange={(e) => this.usernameChanger(e.target.value)}/>
                <input onChange={(e) => this.passwordChanger(e.target.value)}/>
                <button className="loginBtn" onClick={this.loginHandler}>Login</button>
            </div>
        )
    }
}

export default UserLogin
