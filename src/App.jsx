import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { FoodTable } from "components/FoodTable";
import Login from "./Login";


//para leer el localStorage
//array de dependencias vacio para que solo se ejecute cuando se renderice la pagina



export function App(){
 /*
  
 useEffect(() => {
 const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
 if(loggedUserJSON) {
   const user = JSON.parse(loggedUserJSON)
   setUser(user)
   noteService.setToken(user.token)
 }
}, [])

useEffect(() => {
 
}, [])

const handleLogout = () => {
 setUser(null)
 noteService.setToken(user.token)
 window.localStorage.remove('loggedUserJSON')
}

//Pon solo Login cuando acabes la paginacion etc
*/
 return (
   <div>
     <Login />
   </div>
 )
}

 
/* 
export function App() {
  function NotFound() {
    return (
      <div className="main-panel ps">
        <h1>Página no encontrada </h1>
      </div>
    );
  }

  return (
    <Fragment>
      <Router>
        <div>
          <Sidebar />
          <div className="content w-100">
            <Switch>

              <Route path="/foodtable" component={() => <FoodTable />} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Fragment>
  );

}

*/

