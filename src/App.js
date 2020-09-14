import React from "react";
import { hot } from "react-hot-loader/root";
import { Viewer, Polyline, PolylineCollection, CameraFlyTo } from "resium";
import { Cartesian3, Transforms } from "cesium";
import AppMenu from "./AppMenu";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);
const positions = [
  new Cartesian3(-75, 35, 0),
  new Cartesian3(-125, 35, 0),
  new Cartesian3(-125, 135, 0),
];

const App = () => {
  const classes = useStyles();

  return (
    <div className={clsx("App", classes.root)}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <AppMenu />
      </Drawer>
      <main className={classes.content}>
        <Viewer full style={{position: "relative", height: "100vh"}}>
          <PolylineCollection
            modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}
          >
            <Polyline positions={positions} width={10} />
          </PolylineCollection>
          <CameraFlyTo
            duration={0}
            destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)}
          />
        </Viewer>
      </main>
    </div>
  );
};

const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    background: "#535454",
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default hot(App);
