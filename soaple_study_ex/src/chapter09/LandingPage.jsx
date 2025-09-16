import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingfPage(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
        console.log("isLoggedIn first value", isLoggedIn);
    const onClickLogin = () => {
        setIsLoggedIn(true);
        console.log("onClickLogin execute", setIsLoggedIn);
    };

    const onClickLogout =  () => {
        setIsLoggedIn(false);
        console.log("onClickLogout execute", setIsLoggedIn);
    };

    return (
        <div>
            <Toolbar 
             isLoggedIn = {isLoggedIn}
             onClickLogin = {onClickLogin}
             onClickLogout = {onClickLogout}
            />
            <div style={{padding: 16}}> 소플과 함께하는 리액트 공부</div>
        </div>
    )
};

export default LandingfPage;