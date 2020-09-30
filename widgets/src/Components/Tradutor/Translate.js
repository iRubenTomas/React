import React, { useState } from "react";
import DropDown from "../DropDown/DropDown";
import Convert from './Convert';
const options = [
  {
    label: "Afrikans",
    value: "af",
  },
  {
    label: "Arabic ",
    value: "ar",
  },
  {
    label: " Hindi ",
    value: "hi",
  },
  {
    label: 'Dutch',
    value: 'nl'
  },
  {
    label: 'Portuguese',
    value: 'pt'
  }
];



const Translate = () => {


  const [language, setlanguage] = useState(options[0]);
  const [text, setText] = useState("");
 

  

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Inser Text:</label>
          <input
            onChange={(event) => setText(event.target.value)}
            value={text}
          ></input>
        </div>
      </div>
      <DropDown
        options={options}
        selected={language}
        onSelectedChange={setlanguage}
        label="Selecta languauge"
      />
      <div>
        <hr/>
        <h3 className="ui header"> Output:</h3>
        <Convert language={language} text={text}></Convert>
      </div>
    </div>
  );
};

export default Translate;
