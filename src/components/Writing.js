import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../styles/Writing.scss";
export default function Writing() {
  return (
    <div className="container">
      <div className="text-wrapper">
        <div className="writing">
          <div>
            <h1>AI Writing Assistant</h1>
          </div>
          <div>
            <p>
              Are you looking for an easy way to generate professional blogs,
              quick blogs, advertisements and emails? If so, then Writing
              Assistant is the perfect writing tool for you! Writing Assistant
              can help you quickly and easily create high-quality content that
              will help your business succeed. With Writing Assistant, you can
              easily create professional blogs, quick blogs, advertisements and
              emails. Writing Assistant is easy to use and can help you create
              content that is both effective and engaging. So why wait? Register
              today and start generating professional content in a fraction of
              the time.
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
                src="https://www.fastdevai.com/images/AI_Writer_Main.jpg"
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
