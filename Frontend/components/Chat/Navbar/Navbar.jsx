import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NavButton from './NavButton';
import Avatar from '@mui/material/Avatar';
import "../../../public/images/userImages/1.jpg"
import SettingsBar from '../SettingsBar';
import { Link } from "react-router-dom"

const openProfileSettings = ()=>{
  document.getElementById("settingsBar-container").style.display = "flex";
}

const closeProfileSettings = ()=>{
  document.getElementById("settingsBar-container").style.display = "none";
}


const drawerWidth = 240;
// const navItems = [
// <NavButton img={<MessageIcon/>} link="/chat"/>, 
// <NavButton img={<AutoStoriesIcon/>} link="/stories"/>, 
// <NavButton img={<PersonIcon/>} link="/profile"/>,
// <NavButton img={<NotificationsIcon/>}/>,
// <Avatar alt="profilePhoto" src="../../../public/images/userImages/1.jpg" onMouseOver={openProfileSettings}/>
// ];

const navItems = [
  <NavButton img={<MessageIcon/>} link="/chat"/>, 
  <NavButton img={<AutoStoriesIcon/>} link="/stories"/>, 
  <NavButton img={<PersonIcon/>} link="/profile"/>,
  <NavButton img={<NotificationsIcon/>}/>,
  <div className='avatarnsettingsDiv'>
    <Avatar alt="profilePhoto" src="../../../public/images/userImages/1.jpg" onMouseOver={openProfileSettings} onMouseOut={closeProfileSettings}/>
    <SettingsBar/>
  </div>
  ];



const sidebarItems = [
    <Link to="/explore" className='sidebarDirectors'>Explore</Link>,
    <Link to="/chat" className='sidebarDirectors'>Chat</Link>, 
    <Link to="/profile" className='sidebarDirectors'>Profile</Link>, 
    <Link to="/stories" className='sidebarDirectors'>Stories</Link>, 
    <Link to="/notifications" className='sidebarDirectors'>Notifications</Link>, 
    <Link to="/settings" className='sidebarDirectors'>Settings</Link>
]

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        K Chat
      </Typography>
      <Divider />
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  React.useEffect(()=>{
    document.body.style.backgroundColor = "rgb(211, 234, 255)"
  },[]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navbar">
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/explore" id="nav-title"> <img id="navbarIcon" src="../public/icons/chatCover.png" alt="chat" /> Kerem Chat</Link>
          </Typography>
          <Box id="navIcon-container" sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => {
              return(
                <Button key={index} sx={{ color: '#fff' }}>
              {item}
            </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
      </nav>
    </Box>
  );
}


export default DrawerAppBar;
