import "./App.css";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Button from "./components/Buttons";
import Form from "../src/components/Form";

import { useState } from "react";
import Badges from "./components/Badges/Badges";
/* import { FaCartArrowDown } from "react-icons/fa6"; */
import MailBadge from "./components/MailBadge/MailBadge";

function App() {
  const [isButtonXl, setIsButtonXl] = useState(false);
  const toggleButtonXl = () => {
    setIsButtonXl(!isButtonXl);
  };
  return (
    <>
      <Navbar />
      {/*   <Hero /> */}
      <Grid />
      <div onClick={() => toggleButtonXl()}>
        <Button label="go to" icon iconLeft size="sm" square />
      </div>
      <div>
        <Button label="go to" icon outline size="md" />
      </div>
      {isButtonXl && (
        <div>
          <Button label="go to" outline size="xl" />
        </div>
      )}
      <Form />

      <Badges />

      <MailBadge />
    </>
  );
}

export default App;
