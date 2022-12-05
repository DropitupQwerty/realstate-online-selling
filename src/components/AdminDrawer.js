import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Link, Outlet } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

function AdminDrawer({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [title, setTitle] = React.useState();

  const menus = [
    // {
    //   label: 'Properties',
    //   link: '/admin/properties',
    //   icon: <HomeIcon sx={{ fontSize: '20px' }} />,
    // },
    {
      label: 'Inquiries',
      link: '/admin/inquiries',
      icon: <ViewListIcon sx={{ fontSize: '20px' }} />,
    },
    {
      label: 'Reservations',
      link: '/admin/reservations',
      icon: <GroupsIcon sx={{ fontSize: '20px' }} />,
    },
    {
      label: 'Account',
      link: '/admin/account',
      icon: <AccountCircleIcon sx={{ fontSize: '20px' }} />,
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menus.map((m) => (
          <ListItem key={m.label} disablePadding>
            <ListItemButton
              component={Link}
              to={m.link}
              onClick={() => setTitle(`${m.label}`)}
            >
              <ListItemIcon>{m.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: '20px' }}>{m.label}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/admin'}>
            <ListItemIcon>
              <LogoutIcon sx={{ fontSize: '20px' }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: '20px' }}>Logout</Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', fontSize: '20px' }}>
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
          {title ? (
            <Typography variant="h6" noWrap component="div">
              {title}
            </Typography>
          ) : (
            <Typography variant="h6" noWrap component="div">
              Administrator
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet>{children}</Outlet>
      </Box>
    </Box>
  );
}

export default AdminDrawer;
