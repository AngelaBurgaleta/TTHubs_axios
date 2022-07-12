import { useRef, useState, useEffect, useContext } from "react";
import { Fragment } from "react";
import AuthContext from "context/AuthProvider";
import axios from "./components/api/axios";

//este path tiene que coincidir con el backend
const LOGIN_URL = "https://tthubs.green-projects.com.gr/auth/api/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  //useRef variable  que no renderiza la app. Distinto a los estados. 
  const userRef = useRef(); //crear el objeto. El nombre no se modifica independientemente de los cambios de estado.
  const errRef = useRef();

  const [username, setUser] = useState("");

  const [client_id, setClient_id] = useState("");

  const [client_secret, setClient_secret] = useState("");

  const [grant_type, setGrant_type] = useState("");

  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //poner el foco en la referencia de usuario cuando alguien intenta logearse
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //para cuando cambia el user o el pwd. Cuando se cambia el pass o el usuario desaparece el mensaje de error
  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  //se ejecuta al guardar el formulario. 
  //event para prevenir el comportamiento por defecto del formulario el cual recarga la página
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevenir el reaload

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          witCredentials: true,

        }, config


      );

      console.log(JSON.stringify(response?.data));
      console.log("username:", username)
      console.log("pass: ", password)

      //console.log(JSON.stringify(response))
      //aqui obtenemos el accessToken del servido que viene con el response del axios.post
      const accessToken = response?.data?.accessToken;
      //los roles dependen de como esté el token y se lo pasariamos a setAuth
      //const roles = response?.data?.roles;
      setAuth({ username, password, accessToken });

      setUser(" ");
      setPwd(" ");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.respons?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      //para esto tenemos el aria-live, lo uso para desarollo
      errRef.current.focus();
    }
  };

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

  return (
    <Fragment>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}{" "}
          </p>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>{" "}
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={username}
              required
            />
            <label htmlFor="password">Password: </label>{" "}
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={password}
              required
            />
            <button>Sign In</button>
          </form>

        </section>
      )}
    </Fragment>
  );
};

export default Login;
