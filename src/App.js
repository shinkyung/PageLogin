import './App.css';

function App() {
  return (
  <section>
    <div class="img-bg">
        <img src="./image1.jpg" alt = "Hình Ảnh Minh Họa"/>
    </div>
    <div class="icon">
        <img src="./BookStore.png" alt = "Logo"/>
    </div>
    <div class="content">
        <div class="form">
            <h2>Sign in</h2>
            <form action="">
                <div class="input">
                    <span>Username</span>
                    <input type="text" name=""/>
                </div>
                <div class="input">
                    <span>Password</span>
                    <input type="password" name=""/>
                </div>
                <div class="remember">
                    <label><input type="checkbox" name=""/> Remember username</label>
                </div>
                <div class="input">
                    <input type="submit" value="Login"/>
                </div>
                <div class="input">
                    <p><a href="/#">Sign up</a></p>
                </div>
                <div class="input">
                    <p><a href="/#">Forget password </a></p>
                </div>
            </form>
        </div>
    </div>
  </section>
  );
}

export default App;
