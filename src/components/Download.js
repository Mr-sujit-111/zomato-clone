import React, { useState } from "react";
import "../css/download.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function Download() {
  const [isEmail, setIsEmail] = useState(true);
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#ef4f5f",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ef4f5f",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ef4f5f",
      },
      "&:hover fieldset": {
        borderColor: "#ef4f5f",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ef4f5f",
      },
    },
  });

  const handleChange = (e) => {
    return e.target.value === "email" ? setIsEmail(true) : setIsEmail(false);
  };
  return (
    <div className="download-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 text-right">
            <img
              className="download-img"
              src="https://b.zmtcdn.com/web_assets/91fd934b79f23aeba3c3908837208ec71626083686.png"
              alt="downloand"
            />
          </div>
          <div className="col-sm-6 text-left download-right-section">
            <h3 className="heading">Get the Zomato App</h3>
            <p>
              We will send you a link, open it on your phone to download the app
            </p>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <FormControlLabel
                      value="email"
                      id="email"
                      control={
                        <Radio
                          onChange={handleChange}
                          style={{ color: "#ef4f5f" }}
                        />
                      }

                      label="E-mail"
                      color="success"
                    />
                  </div>
                  <div className="col-sm-6">
                    <FormControlLabel
                      value="phone"
                      control={
                        <Radio
                          onChange={handleChange}
                          style={{ color: "#ef4f5f" }}
                        />
                      }
                      label="Phone"
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
            <div className="row input-section mt-3">
              <div className="col-sm-6">
                <CssTextField
                  label="E-mail"
                  id="custom-css-outlined-input"
                  style={{ display: isEmail ? "block" : "none" }}
                />
                <div
                  className="phone-input-section"
                  style={{ display: isEmail ? "none" : "inline-flex" }}
                >
                  <div className="select-code">
                    <select>
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+66</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      maxLength={12}
                      id=""
                      className="phone-input"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <Button variant="contained" className="share-btn" size="large">
                  Share App Link
                </Button>
              </div>
            </div>
            <p className="download-text mt-3">Download app from</p>
            <div className="row download-links">
              <div className="col-sm-4">
                <a href="/">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                    alt="google-play-link"
                  />
                </a>
              </div>
              <div className="col-sm-4">
                <a href="/">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                    alt="google-play-link"
                  />
                </a>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
