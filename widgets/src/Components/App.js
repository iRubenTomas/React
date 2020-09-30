import React, { useState } from "react";
import Accordion from "./Accordion/Accordion";
import Header from "./Header";
import Route from "./Routes/Route";
import Translate from "./Tradutor/Translate";
import SearchBar from "./Search/SearchbBar";
import DropDown from "./DropDown/DropDown";

const items = [
  {
    title: "Question 1",
    content: "Your name here!",
  },
  {
    title: "Question 2",
    content: "Your age here!",
  },
  {
    title: "Question 3",
    content: "Your email here!",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green ",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  //const [showDropDown,setShowDropdown] = useState(true);
  /*
    <button onClick={() =>{setShowDropdown(!showDropDown)}}>Toggle Dropdwon</button>
    { showDropDown ? 
         <Drop options={colorOptions} selected={selected} onSelectedChange={setSelected} />
         :
         null
    }
    */
  return (
      <div className="ui container">
          <br/>
          <h1 className="ui  header centered">React Widgets</h1>
        <div className="ui grid">
      <div className="two wide column">
      {  <Header />}
        </div>
        <div className="twelve wide stretched column">
        <div className="ui segment">
          <Route path="/">
            <Accordion items={items} />
          </Route>
          <Route path="/list">
            <SearchBar />
          </Route>
          <Route path="/dropdown">
            <DropDown
              label={"select a Color"}
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
        </div>
        </div>
      </div>
      </div>
    
  );
};

export default App;
