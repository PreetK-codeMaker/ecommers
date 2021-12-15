import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./Navbar";
import Home from "./Home";
import Checkout from "./checkouts/checkout/Checkout";
import Login from "./login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./StateProvider";

//BEM naming convention will be used.
//Will using materail UI
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("User name -->", authUser);
      if (authUser) {
        //Logged in or the user login. // refresh the page it will logn you back in
        dispatch({
          // shoot in the dispatch layer replace the user
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        //logged out.
      }
    });
  }, []); //listener [] => mean it will run only when the it loads.
  //Putting data inside user and basket it will refire and load it again.
  // const history = createBrowserHistory();
  return (
    // <Router location={history.location} navigator={history}>
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
                <h1></h1>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
                <p>It works</p>
              </>
            }
          />
          {/*<NavBar />*/}
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          {/*<NavBar />*/}
          {/*<Home />*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
