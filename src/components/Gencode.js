import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../styles/Gencode.scss";

export default function Gencode() {
  return (
    <div className="container">
      <div className="text-wrapper">
        <div className="gencode">
          <div>
            <h1>AI GenCode: Generate Code at the speed of the thought</h1>
          </div>
          <div>
            <p>
              Generate code from plain English in multiple programming
              languages. Currently, we support{" "}
              <b>
                <i>
                  Python, JavaScript, Java, C, C++, C#, PHP, HTML, Go, Perl,
                  Ruby, Typescript, Haskell, Kotlin, Scala, Swift, and Dart
                </i>
              </b>{" "}
              languages.
            </p>
            <p>
              <b>Register to get free access for 7 days</b>.
            </p>
          </div>
          <Box sx={{ "& button": { m: 1 } }}>
            <div>
              <Button className="button" variant="contained" size="medium">
                Register
              </Button>
            </div>
            <div>
              <p>
                No credit card required <sup>*</sup>
              </p>
            </div>
            <div>
              <img
                src="https://www.fastdevai.com/images/AI_CodeGen_Main.jpg"
                width="75%"
                height="75%"
              />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
