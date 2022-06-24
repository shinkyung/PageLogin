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
    <div class="noi-dung">
        <div class="form">
            <h2>Sign in</h2>
            <form action="">
                <div class="input-form">
                    <span>Username</span>
                    <input type="text" name=""/>
                </div>
                <div class="input-form">
                    <span>Password</span>
                    <input type="password" name=""/>
                </div>
            </form>
        </div>
    </div>
  </section>
  );
}

export default App;
