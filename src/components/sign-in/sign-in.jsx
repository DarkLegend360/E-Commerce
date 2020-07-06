import React,{ Component }  from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth ,signInWithGoogle} from "../../firebase/firebase.util";
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
        try {
            await auth.signInWithEmailAndPassword(email,pass);
            this.setState({email:"",pass:""});
        } catch(error) {
            console.log(error);
        }

    }
    handleChange = (event) => {
        const {value,name}=event.target;
        this.setState({[name]:value});
    }
    render() {
        return (<div className="sign-in"> 
            <h2>I already have an account</h2>
            <span>login with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput label="Email" name="email" type="email" value={this.state.email} onChange={this.handleChange} required/>
                <FormInput label="Password" name="pass" type="password" value={this.state.pass} onChange={this.handleChange} required/>
                <div className="buttons">
                    <CustomButton type="submit" onSubmit={this.handleSubmit}>Submit</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >SignIn with Google</CustomButton>
                </div>
            </form>
        </div>);
    }
}

export default SignIn;