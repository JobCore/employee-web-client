import React from "react";
//include images into your bundle
import {signup, login} from "../actions";
//import {Notifier} from '@breathecode/react-notifier';
import loginBanner from '../../img/login-banner.png';

export class Invite extends React.Component{
    constructor(){
        super();
        this.state = { 
            email: 'aalejo@gmail.com', 
            password: 'zl3hfu8y', 
            first_name: '',
            last_name: '' 
        };
    }
    render(){
        return (
            <div className="row mt-5">
                <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-6 mx-auto">
                    <img className="banner w-100" src={loginBanner} />
                    <h2 className="my-4 text-center">The company Fetes Events LLC wants to hire you for an event and its inviting you to apply, please fill the following form to complete your application:</h2>
                    <form className="col-12 col-lg-10 mx-auto"
                        onSubmit={(e)=> {
                            e.preventDefault();
                            signup(this.state.email, this.state.password, this.state.first_name, this.state.last_name);
                        }}
                    >
                        <div className="form-group">
                            <input type="text" className="form-control rounded" aria-describedby="emailHelp" placeholder="First Name"
                                onChange={(e) => this.setState({first_name: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control rounded" aria-describedby="emailHelp" placeholder="Last Name"
                                onChange={(e) => this.setState({last_name: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control rounded" aria-describedby="emailHelp" placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control rounded" id="exampleInputPassword1" placeholder="Password"
                                 onChange={(e) => this.setState({password: e.target.value})} value={this.state.password}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary form-control">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export class Login extends React.Component{
    constructor(){
        super();
        this.state = { 
            email: 'aalejo@gmail.com', 
            password: 'zl3hfu8y'
        };
    }
    render(){
        return (
            <div className="row mt-5">
                <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-6 mx-auto">
                    <img className="banner w-100" src={loginBanner} />
                    <h2 className="my-4 text-center">Please specify your email and password to log in</h2>
                    <form className="col-12 col-lg-10 mx-auto"
                        onSubmit={(e)=> {
                            e.preventDefault();
                            login(this.state.email, this.state.password);
                        }}
                    >
                        <div className="form-group">
                            <input type="email" className="form-control rounded" aria-describedby="emailHelp" placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control rounded" id="exampleInputPassword1" placeholder="Password"
                                 onChange={(e) => this.setState({password: e.target.value})} value={this.state.password}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary form-control">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}