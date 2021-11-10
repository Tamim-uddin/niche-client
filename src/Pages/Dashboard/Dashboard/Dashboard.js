import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Myorders from '../Myorders/Myorders';
import Payment from '../Payment/Payment';
import Addreview from '../Addreview/Addreview';
import Addproducts from '../Addproducts/Addproducts';
import Makeadmin from '../Makeadmin/Makeadmin';
import Manageallorders from '../Manageallorders/Manageallorders';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
          <Link style={{textDecoration: 'none'}} to={`${url}/payment`}>Payment Method</Link> <br />              
          <Link style={{textDecoration: 'none'}} to={`${url}/myorders`}>My Orders</Link> <br />       
          <Link style={{textDecoration: 'none'}} to={`${url}/addreview`}>Add Review</Link> <br />
          <Link style={{textDecoration: 'none'}} to={`${url}/addproducts`}>Add Products</Link> <br />
          <Link style={{textDecoration: 'none'}} to={`${url}/makeadmin`}>Make Admin</Link> <br />
          <Link style={{textDecoration: 'none'}} to={`${url}/manageallorders`}>Manage AllOrders</Link> <br />
          <Button variant="contained">Logout</Button>
    
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
         
        <Toolbar />
        <Typography paragraph>
        <Switch>
        <Route exact path={path}>
          <Myorders></Myorders>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/addreview`}>
          <Addreview></Addreview>
        </Route>
        <Route path={`${path}/addproducts`}>
          <Addproducts></Addproducts>
        </Route>
        <Route path={`${path}/makeadmin`}>
          <Makeadmin></Makeadmin>
        </Route>
        <Route path={`${path}/manageallorders`}>
          <Manageallorders></Manageallorders>
        </Route>
        <Route path={`${path}/myorders`}>
          <Myorders></Myorders>
        </Route>
      </Switch>
        </Typography>
        <Typography paragraph>
          
        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;