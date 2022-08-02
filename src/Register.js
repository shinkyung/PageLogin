import './Register.css';
import axios from 'axios';
import { useEffect, useState } from "react";

function Login() {
    const [account, setAccount] = useState("");
  
    useEffect(() => {
        const fetchAccount = async () => {
            const res = await axios.get("http://localhost:5050/user");
            setAccount(res.data);
        };
        fetchAccount();
    }, []);

    function onClickBtn(){
        var arr = document.getElementsByTagName('input');
        var Username = arr[3].value;
        var flag = 1;
        account.map( check => {
            if(Username === check.username && flag === 1){
                alert("Username already exists!")
                flag = 0
            }
        })
        if(flag === 1){
            alert("Register successful!")
        }
    }

    return (
    <section>
        <div className = "img-bg">
            <img src = "./image.jpg" alt = "Picture"/>
        </div>
        <div className = "icon">
            <img src = "./BookStore.png" alt = "Logo"/>
        </div>
        <div className = "content">
            <div className = "form">
                <h2> Sign up </h2>
                <form action = "">
                    <div className = "input">
                        <span> First Name </span>
                        <input type = "text" name = ""/>
                    </div>
                    <div className = "input">
                        <span> Last Name </span>
                        <input type = "text" name = ""/>
                    </div>
                    <div className = "input">
                        <span> E-mail </span>
                        <input type = "text" name = ""/>
                    </div>
                    <div className = "input">
                        <span> Username </span>
                        <input type = "text" name = ""/>
                    </div>
                    <div className = "input">
                        <span> Password </span>
                        <input type = "currentpassword" name = ""/>
                    </div>
                    <div className = "input">
                        <span> Confirm Password </span>
                        <input type = "currentpassword" name = ""/>
                    </div>
                    <div className = "input">
                        <button type = "submit" onClick = {onClickBtn}> Register </button>
                    </div>
                </form>
                <div className = "footer">
                    &copy;
                    2022
                    Bookaholic Inc
                </div>
            </div>
        </div>
    </section>
    );
}

export default Login;
