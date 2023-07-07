import "./App.css";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Button from "./components/Buttons";
import Form from "../src/components/Form";
import MailBadge from "./components/MailBadge/MailBadge";
import Input from "./components/Input";
import Badges from "./components/Badges/Badges";
import Select from "./components/Select/Select";
import DropdownSelect from "./components/DropdownSelect/DropdownSelect";

import { useState } from "react";
import InputCheckbox from "./components/InputCheckbox/InputCheckbox";

function App() {
  const [isButtonXl, setIsButtonXl] = useState(false);
  const toggleButtonXl = () => {
    setIsButtonXl(!isButtonXl);
  };

  const [inputTextValue, setInputTextValue] = useState();
  const [inputPasswordValue, setInputPasswordValue] = useState();
  const [inputSelectValue, setInputSelectValue] = useState();
  const [inputDropdownValue, setInpuDropdownValue] = useState();

  const options = {
    name: "products",
    id: "products",
    options: [
      {
        id: 1,
        label: "London",
        value: "london",
      },
      {
        id: 2,
        label: "Paris",
        value: "paris",
      },
      {
        id: 3,
        label: "Rome",
        value: "rome",
      },
    ],
  };
  return (
    <>
     <Navbar /> 
         <Hero /> 
    {/*   <Grid /> */}
  {/*     <div onClick={() => toggleButtonXl()}>
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

      <MailBadge /> */}
{/* 
      <Input
        id={"name"}
        type={"text"}
        name="name"
        placeholder={"inserisci il tuo nome"}
        label={"Your name"}
        error
        handleChange={setInputTextValue}
      />
      <Input
        id={"password"}
        type={"password"}
        icon={"icon"}
        name="Password"
        placeholder={"inserisci la password"}
        label={"Your password"}
        error
        handleChange={setInputPasswordValue}
      />
      <Input
        id={"email"}
        type={"email"}
        icon={"icon"}
        name="email"
        placeholder={"Inserisci la tua mail"}
        label={"@email"}
      />

      <Select
        options={options}
        defaultValue={options?.options[0]?.value}
        handleChange={setInputSelectValue}
      />

      <DropdownSelect options={options} handleChange={setInpuDropdownValue} /> */}

      <InputCheckbox checked />
    </>
  );
}

export default App;
