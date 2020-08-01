import React,{ Component }  from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user-actions";

class SignIn extends Component {
    constructor() {
        super();
        this.state={
            email:"",
            pass:""
        };
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {email,pass} =this.state;
        emailSignInStart({email,pass});
    }
    handleChange = (event) => {
        const {value,name}=event.target;
        this.setState({[name]:value});
    }
    render() {
        const {googleSignInStart,emailSignInStart} = this.props;
        return (<div className="sign-in"> 
            <h2>I already have an account</h2>
            <span>login with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput label="Email" name="email" type="email" value={this.state.email} onChange={this.handleChange} required/>
                <FormInput label="Password" name="pass" type="password" value={this.state.pass} onChange={this.handleChange} required/>
                <div className="buttons">
                    <CustomButton type="submit" onSubmit={emailSignInStart}>Submit</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >SignIn with Google</CustomButton>
                </div>
            </form>
        </div>);
    }
}
const mapDispatchToStart = dispatch => ({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(userCredentials)=>dispatch(emailSignInStart(userCredentials))
});

export default connect(null,mapDispatchToStart)(SignIn);