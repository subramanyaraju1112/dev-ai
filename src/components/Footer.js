import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import "../styles/Footer.scss";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="footer" position="static">
        <Container maxWidth="xl">
          <StyledToolbar>
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <h4>About Us</h4>
                      <p className="mb-30 footer-desc">
                        Patodia Infotech Private Limited is registered as
                        Private Limited Company under Companies Act, 2013. We
                        are also registered as startup by the Department for
                        Promotion of Industry and Internal Trade, Ministry of
                        Commerce & Industry, Government of India.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
                    <div className="quick-link">
                      <h4>Quick Link</h4>
                      <ul className="list-unstyled">
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Cookies Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Refund Policy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div>
                      <h4>Service</h4>
                      <ul className="list-unstyled">
                        <li>AI CodeGen</li>
                        <li>AI Scholar</li>
                        <li>AI Scholar II</li>
                        <li>AI Writing Assistant</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div>
                      <h4>Newsletter</h4>
                      <div>
                        <label htmlFor="Newsletter" className="form-label">
                          Subscribe To Our Newsletter
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          Placeholder="Enter Your Email"
                        />
                        <Box sx={{ "& button": { m: 1 } }}>
                          <div>
                            <Button
                              variant="contained"
                              size="medium"
                              color="error"
                            >
                              Subscribe
                            </Button>
                          </div>
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="copyright">
                    <p>
                      Copyright © 2021-2023{" "}
                      <i>Patodia Infotech Private Limited</i>, All Rights
                      Reserved.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </StyledToolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
