import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import { Divider } from "@material-ui/core";

const appMenuItems = [
  {
    link: "/",
    Icon: IconDashboard
  },
  {
    link: "/orders",
    Icon: IconShoppingCart
  },
  {
    link: "/customers",
    Icon: IconPeople
  },
  {
    link: "/reports",
    Icon: IconBarChart
  }
];

const AppMenu= () => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {appMenuItems.map((item, index) => (
        <div key={index}>
          <ListItem button className={classes.menuItem}>
            {!!item.Icon && (
              <ListItemIcon className={classes.menuItemIcon}>
                <item.Icon />
              </ListItemIcon>
            )}
          </ListItem>
          <Divider/>
        </div>
      ))}
    </List>
  );
};

const drawerWidth = 30;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%"
    },
    navList: {
      width: drawerWidth
    },
    menuItem: {
      width: drawerWidth
    },
    menuItemIcon: {
      color: "#fff"
    }
  })
);

export default AppMenu;
