import React from "react";
import "../styles/Lists.scss";

export default function Lists() {
  return (
    <div className="container">
      <div className="text-wrapper">
        <div className="lists text-left">
          <h3>
            Apart from generating code, it can explain the code in English. It
            can also generate SQL, data analytics code, and shell commands.
          </h3>
          <p>1. Code in English: Generate Code from English Description.</p>
          <p>2. Natural Language Interface for Data Analytics</p>
          <p>3. English Description to SQL</p>
          <p>4. Explain Code in plain English.</p>
          <p>5. Generate Shell Command from English Description</p>
        </div>
      </div>
    </div>
  );
}
