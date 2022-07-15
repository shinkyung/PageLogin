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
                        <input type="submit" value="Login"/>
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
