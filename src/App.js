import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import VideoIcon from "@material-ui/icons/OndemandVideoRounded";
import ErrorIcon from "@material-ui/icons/ErrorOutlineRounded";
import BulbIcon from "@material-ui/icons/WbIncandescentRounded";
import Power from "@material-ui/icons/FlashOnRounded";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Slider from "@material-ui/core/Slider";
import Clock from "./components/Clock";
import Fab from "@material-ui/core/Fab";
import axios from "axios";

import "./App.css";

const marks = [
  {
    value: 16,
    label: "16°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 26,
    label: "26°C",
  },
  {
    value: 30,
    label: "30°C",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  left: {
    textAlign: "-moz-left",
    color: "rgba(0, 0, 0, 0.3)",
  },
  center: {
    textAlign: "-moz-center",
    color: "rgba(0, 0, 0, 0.3)",
  },
  right: {
    textAlign: "-moz-right",
    padding: theme.spacing(2),
    color: "rgba(0, 0, 0, 0.3)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  first: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  },
  parentPaper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "90%",
  },
  standalone: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  icons: {
    fontSize: "10rem",
    color: "rgba(0, 0, 0, 0.3)",
  },
  fonts: {
    fontSize: "5rem",
    color: "rgba(0, 0, 0, 0.3)",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
  },
  BulbIcon: {
    fontSize: "7rem",
    color: "rgba(0, 0, 0, 0.3)",
  },
  BulbIconLit: {
    fontSize: "7rem",
    color: "#ffde3b",
  },
}));

export default function AutoGrid() {
  const [fan, setFan] = React.useState([24]);
  const [mode, setMode] = React.useState("");
  const [swing, setSwing] = React.useState("");
  const updateTemp = (e, data) => {
    setFan(data);
  };
  const updateMode = (event) => {
    setMode(event.target.value);
  };
  const updateSwing = (event) => {
    setSwing(event.target.value);
  };

  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });
  const [ac, setAC] = React.useState(false);
  const handleAC = (event) => {
    setAC((prev) => !prev);
  };
  const videoConnected = true;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <div className="App-header">
        <div className={classes.root}>
          <Grid container spacing={2} className={classes.parentPaper}>
            {/* top most line of the app where time is located */}
            <Grid item xs={12}>
              <Grid item xs container>
                <Grid item xs={4}>
                  <h1 className={classes.left}>
                    <Clock />
                  </h1>
                </Grid>
                <Grid item xs={4}>
                  <h1 className={classes.center}>706</h1>
                </Grid>
                <Grid item xs={4}>
                  <h1 className={classes.right}>HM</h1>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} container direction="row">
              <Grid spacing={2} item xs container>
                {/* video container */}
                <Grid item xs={4}>
                  <Paper className={classes.first}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {videoConnected ? (
                      <VideoIcon className={classes.icons} />
                    ) : (
                      <ErrorIcon className={classes.icons} />
                    )}
                  </Paper>
                </Grid>
                {/* light container */}
                <Grid item xs={4} zeroMinWidth>
                  <Paper className={classes.first}>
                    <br />
                    <br />
                    <br />
                    <Grid item xs={12}>
                      <Grid item xs container direction="row">
                        <Grid item xs={6}>
                          {state.checkedA ? (
                            <BulbIcon className={classes.BulbIconLit} />
                          ) : (
                            <BulbIcon className={classes.BulbIcon} />
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          {state.checkedB ? (
                            <BulbIcon className={classes.BulbIconLit} />
                          ) : (
                            <BulbIcon className={classes.BulbIcon} />
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            color="primary"
                            name="checkedA"
                            inputProps={{
                              "aria-label": "primary checkbox",
                            }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Switch
                            checked={state.checkedB}
                            onChange={handleChange}
                            color="primary"
                            name="checkedB"
                            inputProps={{
                              "aria-label": "primary checkbox",
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs container direction="row">
                        <Grid item xs={6}>
                          {state.checkedC ? (
                            <BulbIcon className={classes.BulbIconLit} />
                          ) : (
                            <BulbIcon className={classes.BulbIcon} />
                          )}
                        </Grid>

                        <Grid item xs={6}>
                          {state.checkedD ? (
                            <BulbIcon className={classes.BulbIconLit} />
                          ) : (
                            <BulbIcon className={classes.BulbIcon} />
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <Switch
                            checked={state.checkedC}
                            onChange={handleChange}
                            color="primary"
                            name="checkedC"
                            inputProps={{
                              "aria-label": "primary checkbox",
                            }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Switch
                            checked={state.checkedD}
                            onChange={handleChange}
                            color="primary"
                            name="checkedD"
                            inputProps={{
                              "aria-label": "primary checkbox",
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                {/* ac container */}
                <Grid item xs={4} zeroMinWidth>
                  <Paper className={classes.first}>
                    <Grid item xs={12}>
                      <h1 className={classes.fonts}>{fan}°C</h1>
                    </Grid>
                    <Grid item xs={12} className={classes.center}>
                      <Switch
                        checked={state.checkedAC}
                        onChange={handleAC}
                        color="primary"
                        name="checkedAC"
                        inputProps={{
                          "aria-label": "primary checkbox",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {ac ? (
                        <Slider
                          defaultValue={24}
                          aria-labelledby="discrete-slider-always"
                          step={1}
                          marks={marks}
                          valueLabelDisplay="auto"
                          min={16}
                          max={30}
                          value={fan}
                          onChange={updateTemp}
                        />
                      ) : (
                        <Slider
                          defaultValue={24}
                          aria-labelledby="discrete-slider-always"
                          step={1}
                          marks={marks}
                          valueLabelDisplay="auto"
                          min={16}
                          max={30}
                          value={fan}
                          onChange={updateTemp}
                          disabled
                        />
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <br />
                      {ac ? (
                        <ButtonGroup
                          size="medium"
                          color="primary"
                          aria-label="large outlined primary button group"
                        >
                          <Button>Auto</Button>
                          <Button>Low</Button>
                          <Button>Mid</Button>
                          <Button>High</Button>
                        </ButtonGroup>
                      ) : (
                        <ButtonGroup
                          size="medium"
                          color="primary"
                          aria-label="large outlined primary button group"
                          disabled
                        >
                          <Button>Auto</Button>
                          <Button>Low</Button>
                          <Button>Mid</Button>
                          <Button>High</Button>
                        </ButtonGroup>
                      )}
                    </Grid>
                    <br />
                    <Grid item xs={12} container direction="row">
                      <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">
                            Mode
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={mode}
                            onChange={updateMode}
                          >
                            <MenuItem value={"Auto"}>Auto</MenuItem>
                            <MenuItem value={"Heat"}>Heat</MenuItem>
                            <MenuItem value={"Dry"}>Dry</MenuItem>
                            <MenuItem value={"Cool"}>Cool</MenuItem>
                            <MenuItem value={"Fan"}>Fan</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">
                            Swingmode
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={swing}
                            onChange={updateSwing}
                          >
                            <MenuItem value={"Auto"}>Auto</MenuItem>
                            <MenuItem value={"Up"}>Up</MenuItem>
                            <MenuItem value={"Middle"}>Middle</MenuItem>
                            <MenuItem value={"Down"}>Down</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} className={classes.fab}></Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
