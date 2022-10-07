import { useRef, useState, useEffect, useContext } from "react";
import { Fragment } from "react";
import AuthContext from "context/AuthProvider";
import axios from './api/axios'
import { FoodTable } from "components/FoodTable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
//import axios from "./components/api/axios";

//este path tiene que coincidir con el backend
const LOGIN_URL = "https://tthubs.green-projects.com.gr/auth/api/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  //Refs for set the focused on the input
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('');


  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [username, password])


  const handleSubmitSuccess = async (e) => {
    e.preventDefault()
    setUsername(' ')
    setPassword(' ')
    setSuccess(true)

  }


  const handleSubmit = async (e) => {
    e.preventDefault(); //prevenir el reaload

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          witCredentials: true,

        }


      );
      console.log("access Token: " + JSON.stringify(response?.data?.access_token))
      console.log("refresh Token: " + JSON.stringify(response?.data?.refresh_token))
      console.log("response: " + JSON.stringify(response?.data))
      //console.log(JSON.stringify(response))
      const accessToken = response?.data?.access_token;
      console.log(accessToken)
      //para guardarlo en el contexto global
      setAuth({ username, password, accessToken })
      setUsername(' ')
      setPassword(' ')
      setSuccess(' ')
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response')
      } else if (err.respose?.status === 400) {
        setErrMsg('Missing username or Password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login failed')
      }
      errRef.current.focus();
    }
  }

  return (
    <Fragment>
      {success ? (

        <Fragment>
          <Router>
            <div>
              <Sidebar />
              <div className="content w-100">
                <Switch>

                  <Route path="/foodtable" component={() => <FoodTable />} />
                  <Route path="*" component={() => <FoodTable />} />
                </Switch>
              </div>
            </div>
          </Router>
        </Fragment>

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
            <label htmlFor="username">Username: </label>{" "}
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <label htmlFor="password">Password: </label>{" "}
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button>Sign In</button>
          </form>

        </section>
      )}
    </Fragment>

  )
}


/* 
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
*/

export default Login
