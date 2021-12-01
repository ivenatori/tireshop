import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import MoreIcon from '@mui/icons-material/MoreVert';


import { useAuth } from '../../contexts/AuthContext'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { productsContext } from '../../contexts/ProductsContext'
import './Header.css'
import history from '../../helpers/history'
import AddBoxIcon from '@mui/icons-material/AddBox';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [searchValue, setSearchValue] = React.useState('')
  const { getProducts, cartLength ,getProductsFromBasket} = React.useContext(productsContext)

  const {user} = useAuth()

  function handleValue(e) {
    const search = new URLSearchParams(history.location.search)
    search.set('q', e.target.value)
    history.push(`${history.location.pathname}?${search.toString()}`)
    setSearchValue(e.target.value)
    getProducts(search.toString())
  }
    const {
        handleLogOut,
        user: { email },
      } = useAuth()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  function openMenu(e){
   document.getElementById('home').classList.toggle('menu_active')
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        
      </MenuItem>
      <MenuItem>
      <Link to='./cart'>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={cartLength} color="error">
          <AddShoppingCartIcon/>
          </Badge>
        </IconButton>
        </Link>
        <p>Корзина</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

// let style={
//   position: 'sticky',
//   top: 0,
// }

  return (
    <Box id='header' sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '	#FFFF33', color: 'blue'}}>
        <Toolbar>
          <IconButton style={{display: 'none'}}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={openMenu} 
          >
            <div id = 'home' className='home_menu' >
              <Link to="/"><h2>Home</h2></Link>
              <Link to="./recalls">
                   Отзывы
                  </Link>
            </div>
                
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{textDecoration: "none", color: "white"}}>
          <Typography style={{color: 'blue', fontWeight: 'bold'}}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            DONGOLOK.kg
          </Typography>
          </Link>
          <Search onChange={handleValue} value={searchValue} style={{justifyContent:'space-between'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Искать шины"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {(user.email=='chingiz@gmail.com' )&&<Link  to="/add" style={{color: "white"}}>

            <IconButton 
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <AddBoxIcon style={{color:'#1565c0'}}/>
            </IconButton>
            </Link>}
            <Link to="/cart" style={{color: "white"}}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={cartLength} color="error">
              <AddShoppingCartIcon style={{color:"#1565c0"}}/>
              </Badge>
            </IconButton>
            </Link>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </Box>
          <Link to="./recalls">
        <ChatIcon style={{color:'#1565c0', marginRight:'10px'}}/>
      </Link>

          
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          {email ? (
            <Link to="/auth">
              <Button
                variant="contained"
                disableElevation
                onClick={handleLogOut}
              >
                {/* Выйти */}
                <LogoutIcon/>
              </Button>
            </Link>
          ) : null}
          {email ? null : (
            <Link to="/auth">
              <Button variant="contained" disableElevation>
                {/* Войти */}
                <LoginIcon/>
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
