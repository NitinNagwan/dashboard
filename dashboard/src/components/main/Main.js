import React from "react";
import Charts from "../charts/Charts";
import "../main/main.scss";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
const inputs = [
  {
    label: "Select Type",
    content: "0",
    menu: [
      {
        value: "0",
        name: "All",
      },

      {
        value: "1",
        name: "Approved",
      },
      {
        value: "2",
        name: "Rejected",
      },
      {
        value: "3",
        name: "Pending",
      },
    ],
  },
];

const input2 = [
  {
    label: "Durations",
    content: "3",
    menu: [
      {
        value: "1",
        name: "Last 3 months",
      },
      {
        value: "2",
        name: "Last 6 months",
      },
      {
        value: "3",
        name: "Last 12 months",
      },
    ],
  },
];
const input3 = [
  {
    label: "Claim Type",
    content: "1",
    menu: [
      {
        value: "1",
        name: "Claim",
      },
      {
        value: "2",
        name: "Mileage",
      },
    ],
  },
];
const input4 = [
  {
    label: "Currency",
    content: "0",
    menu: [
      {
        value: "0",
        name: "All",
      },
      {
        value: "1",
        name: "USD",
      },
      {
        value: "2",
        name: "INR",
      },
      {
        value: "3",
        name: "GBP",
      },
      {
        value: "4",
        name: "EUR",
      },
      {
        value: "5",
        name: "HKD",
      },
      {
        value: "6",
        name: "AUD",
      },
      {
        value: "7",
        name: "TWD",
      },
      {
        value: "8",
        name: "CHF",
      },
      {
        value: "9",
        name: "CAD",
      },
    ],
  },
];

function Main() {
  const [action, setAction] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [type, setType] = React.useState("");
  const [currency, setCurrency] = React.useState("");

  const handleAction = (event) => {
    setAction(event.target.value);
  };
  const handleDuration = (event) => {
    setDuration(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };
  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <div className="charts">
        <h2>Dashboard</h2>
        <form className="form_inputs">
          {inputs.map((input) => {
            return (
              <FormControl
                key={input.label}
                variant="standard"
                sx={{
                  marginLeft: "15px",
                  minWidth: 170,
                }}
              >
                <Typography className="label">{input.label}</Typography>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  className="select"
                  value={action ? action : input.content}
                  onChange={handleAction}
                  label="action"
                >
                 
                  {input.menu.map((item) => {
                    return <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            );
          })}
          {input2.map((input, index) => {
            return (
              <FormControl
                key={input.label}
                variant="standard"
                sx={{
                  marginLeft: "15px",
                  minWidth: 170,
                }}
              >
                <Typography className="label">{input.label}</Typography>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  className="select"
                  value={duration ? duration : input.content}
                  onChange={handleDuration}
                  label="Age"
                >
                  {input.menu.map((item) => {
                    return <MenuItem key={item.name}  value={item.value}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            );
          })}
          {input3.map((input, index) => {
            return (
              <FormControl
                key={input.label}
                variant="standard"
                sx={{
                  marginLeft: "15px",
                  minWidth: 170,
                }}
              >
                <Typography className="label">{input.label}</Typography>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  className="select"
                  value={type ? type : input.content}
                  onChange={handleType}
                  label="Age"
                >
                 
                  {input.menu.map((item) => {
                    return <MenuItem key={item.name}  value={item.value}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            );
          })}
          {input4.map((input, index) => {
            return (
              <FormControl
                key={input.label}
                variant="standard"
                sx={{
                  marginLeft: "15px",
                  minWidth: 170,
                }}
              >
                <Typography className="label">{input.label}</Typography>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  className="select"
                  value={currency ? currency : input.content}
                  onChange={handleCurrency}
                  label="Age"
                >
                  
                  {input.menu.map((item) => {
                    return <MenuItem key={item.value}  value={item.value}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            );
          })}
          <Button
            variant="contained"
            sx={{
              pr: "20px",
              pl: "20px",
              ml: "10px",
              textTransform: "uppercase ! important",
              opacity: "0.8",
            }}
          >
            Apply
          </Button>
        </form>
      </div>
      <Charts />

      <div className="seperator">
        <h2>Users</h2>
        <div className="horizontal_line"></div>
      </div>

      <Charts />
    </>
  );
}

export default Main;
