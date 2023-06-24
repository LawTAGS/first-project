import "./styles.css";

const Login = () => {
  return (
    <div>
      <div>
        <p>Login</p>

        <div className="response">
          <div className="response-bar">
            <p>E-mail: </p>
            <input className="input"/>
          </div>

          <div className="response-bar">
            <p>Password: </p>
            <input className="input"/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login