import './Login.css';
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
        var Username = arr[0].value;
        var Password = arr[1].value;
        var flag = 0;
        account.map( check => {
            if(Username === check.username && Password === check.password && flag === 0){
                alert("Login successful!")
                flag = 1
            }
        })
        if(flag === 0){
            alert("Login fail!")
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
                <h2> Sign in </h2>
                <form action = "">
                    <div className = "input">
                        <span> Username </span>
                        <input type = "text" name = ""/>
                    </div>
                    <div className = "input">
                        <span> Password </span>
                        <input type = "password" name = ""/>
                    </div>
                    <div className = "remember">
                        <label><input type="checkbox" name = ""/> Remember username </label>
                    </div>
                    <div className = "input">
                        <button type = "submit" onClick = {onClickBtn}> Login </button>
                    </div>
                    <div className = "input">
                        <p><a href="/#"> Sign up </a></p>
                    </div>
                    <div className = "input">
                        <p><a href = "/#"> Forget password </a></p>
                    </div>
                </form>
                <h3> Login With </h3>
                <ul className = "icon">
                    <li><i className = "fa fa-facebook" aria-hidden = "true"></i></li>
                    <li><i className = "fa fa-google" aria-hidden = "true"></i></li>
                    <li><i className = "fa fa-twitter" aria-hidden = "true"></i></li>
                </ul>
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
