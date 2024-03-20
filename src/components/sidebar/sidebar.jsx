import {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import '../dashboard/HeaderDav.css';
import logo from '../../assets/Logo/Cyberus_hor.png';
import logob from '../../assets/Logo/cyberus-ver.png';
import Home from '../dashboard/Home';
import Campaign from '../dashboard/campaign';
import Usergroup from '../dashboard/usergroup';
import Email_m from '../dashboard/email';
import Landing from '../dashboard/landing';
import Sending from '../dashboard/sending';
import Manage from '../dashboard/manage';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#00109A',

    },
    secondary: {
      main: '#0E21BD',
    },
  },
});


export default function Sidenav_v() {
  const [open, setOpen] = useState(false);
  const [menudata, setmenudata] = useState("Home");
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}  elevation={4} sx={{backgroundColor: "#FFF", color: "#FFF"}}>
        <Toolbar>
        <IconButton
            className="Icon_button"
            color="default"
            aria-label="toggle drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            {open ? <MenuIcon /> : <MenuIcon />}
        
          </IconButton>
          <img src={logo} alt="Logo" className="logo-image" />
          <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" startIcon={<PersonIcon />} style={{maxWidth: '70px', maxHeight: '90px', minWidth: '30px', minHeight: '30px', left: 1296} } />
          <Button variant="contained" color="secondary" endIcon={<LogoutOutlinedIcon />} style={{maxWidth: '57px', maxHeight: '90px', minWidth: '60px', minHeight: '35px', left: 1300}}   />
          </ThemeProvider>
        </Toolbar>
      
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <img src={logob} alt="App Logo" className="app-logo" />
        </DrawerHeader>
        
        <List>
            <ListItem sx={{ display: 'block', p: 1,my: 0.01, bottom:'25px'}} onClick={()=>setmenudata("Home")}>
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
                sx={{
                  px: 1,
                  borderRadius: 1,
                  
                  
                }}
              >
                <ListItemText primary="Dashboard" primaryTypographyProps={{fontSize: '13px'}}/>
              </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem sx={{ display: 'block' ,p: 1,my: 0.01, bottom: '50px'}} onClick={()=>setmenudata("Campaign")}>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                sx={{
                  px: 1,
                  borderRadius: 1
                }}
              >
                
                <ListItemText primary="Campaigns" primaryTypographyProps={{fontSize: '13px'}}/>
              </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem  sx={{ display: 'block' ,p: 1,my: 0.01, bottom: '75px' }} onClick={()=>setmenudata("Usergroup")}>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
                sx={{
                  px: 1,
                  borderRadius: 1
                }}
              >
                
                <ListItemText primary="User & Group" primaryTypographyProps={{fontSize: '13px'}}/>
              </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem  sx={{ display: 'block' ,p: 1,my: 0.01, bottom: '100px' }} onClick={()=>setmenudata("Email_m")}>
              <ListItemButton
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
                sx={{
                  px: 1,
                  borderRadius: 1
                }}
              >
                
                <ListItemText primary="Email Templates" primaryTypographyProps={{fontSize: '13px'}}/>
              </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem  sx={{ display: 'block' ,p: 1,my: 0.01, bottom: '125px' }} onClick={()=>setmenudata("Landing")}>
              <ListItemButton
                selected={selectedIndex === 5}
                onClick={(event) => handleListItemClick(event, 5)}
                sx={{
                  px: 1,
                  borderRadius: 1
                }}
              >
                
                <ListItemText primary="Landing Pages" primaryTypographyProps={{fontSize: '13px'}}/>
              </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem  sx={{ display: 'block' ,p: 1,my: 0.01, bottom: '150px' }} onClick={()=>setmenudata("Sending")}>
              <ListItemButton
                selected={selectedIndex === 6}
                onClick={(event) => handleListItemClick(event, 6)}
                sx={{
                  px: 1,
                  borderRadius: 1
                }}
              >
                
                <ListItemText primary="Sending Profiles" primaryTypographyProps={{fontSize: '13px'}} />
              </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem sx={{ display: 'block' ,p: 1,my: 0.01, bottom: '175px'}} onClick={()=>setmenudata("Manage")}>
              <ListItemButton
                selected={selectedIndex === 7}
                onClick={(event) => handleListItemClick(event, 7)}
                sx={{
                  
                  px: 1,
                  borderRadius: 1
                  

                }}
              >
                
                <ListItemText primary="User Management" primaryTypographyProps={{fontSize: '13px'}} />
              </ListItemButton>
            </ListItem>
        </List>

        
      </Drawer>
      <Main open={open}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {menudata == "Home" && <Home />}
        {menudata == "Campaign" && <Campaign />}
        {menudata == "Usergroup" && <Usergroup />}
        {menudata == "Email_m" && <Email_m />}
        {menudata == "Landing" && <Landing />}
        {menudata == "Sending" && <Sending />}
        {menudata == "Manage" && <Manage />}

        



        </Box>
      </Main>
    </Box>
  );
}