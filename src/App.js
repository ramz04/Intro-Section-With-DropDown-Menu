import Main from "./components/Main";
import Navbar from "./components/Navbar";
import icon_menu from './assets/images/icon-menu.svg'
import icon_close from './assets/images/icon-close-menu.svg'
import React from "react";


function App() {

  const [menu, setMenu] = React.useState(true)

  let menuicon = menu === true ? icon_menu : icon_close

  return (
    <div className="App font-Epilogue ">
      <Navbar icon={menuicon}/>
      <Main />
    </div>
  );
}

export default App;
