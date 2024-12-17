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
import SettingsBar from '../SettingsBar';
import { Link } from 'react-router-dom';
import { Context } from '../../../src/App';

function DrawerAppBar(props) {
  const openProfileSettings = () => {
    document.getElementById('settingsBar-container').style.display = 'flex';
  };

  const closeProfileSettings = () => {
    document.getElementById('settingsBar-container').style.display = 'none';
  };

  const [isAuthenticated, setIsAuthenticated] = React.useContext(Context);

  const drawerWidth = 240;

  // Benzersiz key'ler ekledik
  const navItems = [
    { id: 1, content: <NavButton img={<MessageIcon />} link="/chat" /> },
    { id: 2, content: <NavButton img={<AutoStoriesIcon />} link="/stories" /> },
    { id: 3, content: <NavButton img={<PersonIcon />} link="/profile" /> },
    { id: 4, content: <NavButton img={<NotificationsIcon />} link="/notifications" /> },
    {
      id: 5,
      content: (
        <div className="avatarnsettingsDiv">
          <Avatar
            alt="profilePhoto"
            src="../../../public/images/userImages/1.jpg"
            onMouseOver={openProfileSettings}
            onMouseOut={closeProfileSettings}
          />
          <SettingsBar />
        </div>
      ),
    },
  ];

  const sidebarItems = [
    { id: 1, content: <Link to="/explore" className="sidebarDirectors">Explore</Link> },
    { id: 2, content: <Link to="/chat" className="sidebarDirectors">Chat</Link> },
    { id: 3, content: <Link to="/profile" className="sidebarDirectors">Profile</Link> },
    { id: 4, content: <Link to="/stories" className="sidebarDirectors">Stories</Link> },
    { id: 5, content: <Link to="/notifications" className="sidebarDirectors">Notifications</Link> },
    { id: 6, content: <Link to="/settings" className="sidebarDirectors">Settings</Link> },
    { id: 7, content: <Link onClick={() => setIsAuthenticated(false)} className="sidebarDirectors">Log Out</Link> },
  ];

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
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.content} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  React.useEffect(() => {
    document.body.style.backgroundColor = 'rgb(211, 234, 255)';
  }, []);

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
            <Link to="/explore" id="nav-title">
              <img id="navbarIcon" src="../public/icons/chatCover.png" alt="chat" />
              K Chat
            </Link>
          </Typography>
          <Box id="navIcon-container" sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ color: '#fff' }}>
                {item.content}
              </Button>
            ))}
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
