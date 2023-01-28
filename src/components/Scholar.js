import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../styles/Scholar.scss";

export default function Scholar() {
  return (
    <div className="container">
      <div className="text-wrapper">
        <div className="scholar px-4">
          <div>
            <h1>AI Scholar</h1>
          </div>
          <div>
            <p className="px-4">
              AI Scholar helps school and college students, working
              professionals and candidates appearing for competitive
              examinations. It provides answers to any question. It can generate
              stories, poems, questions and answers, and prepare notes to study
              on any topic. For students, it is a wonderful tool to improve
              knowledge and grades. If you are appearing in a competitive
              examination, improve your chances of selection by using Scholar.
              If you are a working professional, use Scholar to improve your
              efficiency and shine in your career.{" "}
            </p>
            <p>
              <b>Register to get free access for 7 days.</b>
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
                src="https://www.fastdevai.com/images/AI_Scholar_Main.jpg"
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
