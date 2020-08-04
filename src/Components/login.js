import React from "react";

class login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="forms">
          <h1 id="imgtext">Welcome Back!</h1>
          <img
            src="https://image.freepik.com/free-photo/colorful-empty-shopping-bags-purple-background_23-2148101561.jpg"
            id="loginImg"
          />
          <form>
            <h2 className="formtext">Login</h2>
            <label for="email">E mail</label>
            <br />
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="abc@mail.com"
            />
            <br />
            <label for="email">Password</label>
            <br />
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="password"
              minLength="8"
              maxLength="14"
            />

            <br />
            <p className="recovery">Forget password?</p>
            <br />
            <button classname="button" type="submit">
              Login
            </button>
            <button classname="button" type="reset">
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
