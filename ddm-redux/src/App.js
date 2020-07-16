import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import NewGame from "./components/game/new-game.component";
import PolyominoTester from "./components/game/board/polyomino-tester.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/newgame" component={NewGame} />
      <Route path="/user" component={CreateUser} />
      <Route path="/polytest" component={PolyominoTester} />
    </Router>
  );
}

export default App;
