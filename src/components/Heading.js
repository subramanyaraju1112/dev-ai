import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../styles/Heading.scss";

export default function Heading() {
  return (
    <div className="container">
      <div className="text-wrapper">
        <div className="heading">
          <h1 className="crim">
            {" "}
            <b>Most Advanced AI</b>
          </h1>
          <h3 className="crim">
            Generate Answer, Code, Story, Poem, Blogs at the speed of Thought.
          </h3>
          <h3 className="crim">
            Improve Productivity, Generate Professional Contents and Code.
          </h3>
        </div>
        <div className="image">
          <img src="https://www.fastdevai.com/images/All.png" width="25%" />
        </div>
        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button className="button" variant="contained" size="medium">
              Register to get Free Access
            </Button>
            <Button className="button" variant="contained" size="medium">
              Introductory Video
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
