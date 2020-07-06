import React from "react";
import "./user-account.scss";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

function Account() {  
    return (<div className="container">
        <SignIn />
        <SignUp />
    </div>);
}


export default Account;