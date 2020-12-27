import React from "react";
import {
  Grid,
  AppBar,
  Typography,
  Toolbar,
} from "@material-ui/core";

class Menu extends React.Component {

  render() {
    return (
      <div>
        <AppBar position="static" alignitems="center" color="primary">
          <Toolbar>
            <Grid container justify="center" wrap="wrap">
              <Grid item>
                <Typography variant="h6">RAPID</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Menu;