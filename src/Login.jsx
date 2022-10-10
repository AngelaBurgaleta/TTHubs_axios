import { useRef, useState, useEffect, useContext } from "react";
import { Fragment } from "react";
import AuthContext from "context/AuthProvider";
import axios from './api/axios'
import { FoodTable } from "components/FoodTable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Collapse,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Navbar,
} from "reactstrap";
//import './login.css'
//import axios from "./components/api/axios";

//este path tiene que coincidir con el backend
const LOGIN_URL = "https://tthubs.green-projects.com.gr/auth/api/auth";
const GATEWAY_URL = "https://e-module-gateway-ssxt0x6.ew.gateway.dev/checkJWT";


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

      try {
        const envio = await axios.post(
          GATEWAY_URL,
          accessToken
        )

        console.log("enviado respuesta!!! : " + JSON.stringify(envio?.data))
        console.log("enviado!!  : " + accessToken)
      } catch (error) {

        console.log('token no enviado: ' + error)

      }

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
      <Card style={{ marginLeft: '50px', marginRight: '50px', marginTop: '200px', height: '800px' }} >

        <div>
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

              <CardHeader className="flex-container"
                style={{
                  height: "100px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  justifyContent: "center",

                  rowGap: "20px",
                }}>
                <h1 className="flex-item"
                  style={{
                    height: "100px",
                    display: "flex",

                  }}>TTHubs Nutritional Module</h1>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit} >
                  <div className="flex-container" >
                    <div className="flex-item" style={{

                      display: "flex",
                      flexDirection: "row",
                      flexWrap: 'wrap',
                      justifyContent: "center",
                      columnGap: '50px'

                    }}>

                      <div className="form-group">
                        <label htmlFor="username" style={{fontSize: "25px"}}>Username: </label>{" "}
                        <input
                          type="text"
                          id="username"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                          required
                        />
                      </div></div>
                    <div className="flex-item" style={{

                      display: "flex",
                      flexDirection: "row",
                      flexWrap: 'wrap',
                      justifyContent: "center",
                      columnGap: '40px'

                    }} >

                      <div className="form-group">
                        <label htmlFor="password" style={{fontSize: "25px"}}>Password: </label>{" "}
                        <input
                          type="password"
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          required
                        /></div>
                    </div>
                    <div className="flex-item" style={{

                      display: "flex",
                      flexDirection: "row",
                      flexWrap: 'wrap',
                      justifyContent: "center",
                      columnGap: '40px'

                    }} >
                      <Button  color = "success">Sign In</Button>
                    </div>
                  </div>
                </Form>
              </CardBody>

            </section>
          )}
        </div>
      </Card>
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
