import React, { Component } from "react";
import "./sign-up.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth,createUserAccount} from "../../firebase/firebase.util";

class SignUp extends Component {
    constructor() {
        super();
        this.state={
            displayName:'',
            email:'',
            pass:'',
            Cpass:''
        };
    }

    handleSubmit =async (event)=> {
        event.preventDefault();
        const {displayName,email,pass,Cpass} = this.state;
        if(pass!==Cpass) {
            alert("Passwords Dont Match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,pass);
            createUserAccount(user,{displayName});
        } catch (error) {
            console.error(error);
        }
        this.setState({
            displayName:'',
            email:'',
            pass:'',
            Cpass:''
        });
    }

    handleChange = (event)=> {
        const { name ,value } = event.target;
        this.setState({[name]:value});
    }

    render() {
        const {displayName,email,pass,Cpass} = this.state;
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput label="Display Name" type="text" name="displayName" value={displayName} onChange={this.handleChange} required/>
                    <FormInput label="Email" type="email" name="email" value={email} onChange={this.handleChange} required/>
                    <FormInput label="Password" type="password" name="pass" value={pass} onChange={this.handleChange} required/>
                    <FormInput label="Confirm Password" type="password" name="Cpass" value={Cpass} onChange={this.handleChange} required/>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;