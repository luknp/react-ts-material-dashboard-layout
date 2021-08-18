import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem, Fab, useMediaQuery } from '@material-ui/core';
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
  Brightness4 as Brightness4Icon,
} from '@material-ui/icons';
import DarkModeSwitch from 'components/DarkModeSwitch';
import classNames from 'classnames';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';
import { Badge, Typography } from 'components/Wrappers';
import Notification from 'components/Notification';
import storage from 'utils/storage';
import { messages, notifications } from './mock';

type Props = {
  isSidebarOpen: boolean;
  handleSidebarOpen: (state: boolean) => void;
};

const Header: React.FC<Props> = ({ isSidebarOpen, handleSidebarOpen }) => {
  const classes = useStyles();

  const [mailMenu, setMailMenu] = useState<Element | null>(null);
  const [isMailsUnread, setIsMailsUnread] = useState(true);
  const [notificationsMenu, setNotificationsMenu] = useState<Element | null>(null);
  const [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  const [profileMenu, setProfileMenu] = useState<Element | null>(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  storage.saveThemeMode(true);

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color='inherit'
          className={classNames(classes.headerMenuButtonSandwich, {
            [classes.headerMenuButtonSandwichColapse]: isSidebarOpen,
          })}
          onClick={() => handleSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <ArrowBackIcon
              classes={{
                root: classNames(classes.headerIcon, classes.headerIconCollapse),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(classes.headerIcon, classes.headerIconCollapse),
              }}
            />
          )}
        </IconButton>
        <div
          className={classNames(classes.search, {
            [classes.searchFocused]: isSearchOpen,
          })}
        >
          <div
            className={classNames(classes.searchIcon, {
              [classes.searchIconOpened]: isSearchOpen,
            })}
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            <SearchIcon classes={{ root: classes.headerIcon }} />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>

        <IconButton
          color='inherit'
          aria-haspopup='true'
          aria-controls='mail-menu'
          onClick={e => {
            setNotificationsMenu(e.currentTarget);
            setIsNotificationsUnread(false);
          }}
          className={classNames(classes.headerMenuButton, {
            [classes.marginLeftAuto]: true,
          })}
        >
          <Badge badgeContent={isNotificationsUnread ? notifications.length : null} color='warning'>
            <NotificationsIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>

        <IconButton
          color='inherit'
          aria-haspopup='true'
          aria-controls='mail-menu'
          onClick={e => {
            setMailMenu(e.currentTarget);
            setIsMailsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
          <Badge badgeContent={isMailsUnread ? messages.length : null} color='warning'>
            <MailIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>

        <DarkModeSwitch isMobile={false} />
        <IconButton
          aria-haspopup='true'
          color='inherit'
          className={classes.headerMenuButton}
          aria-controls='profile-menu'
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <AccountIcon classes={{ root: classes.headerIcon }} />
        </IconButton>

        <Menu
          id='mail-menu'
          open={Boolean(mailMenu)}
          anchorEl={mailMenu}
          onClose={() => setMailMenu(null)}
          MenuListProps={{ className: classes.headerMenuList }}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant='h4' weight='medium'>
              New Messages
            </Typography>
            <Typography className={classes.profileMenuLink} component='a' color='secondary'>
              {messages.length} New Messages
            </Typography>
          </div>
          {messages.map(message => (
            <MenuItem key={message.id} className={classes.messageNotification}>
              <div className={classes.messageNotificationSide}>
                <Typography size='sm' color='text' colorBrightness='secondary'>
                  {message.time}
                </Typography>
              </div>
              <div className={classNames(classes.messageNotificationSide, classes.messageNotificationBodySide)}>
                <Typography weight='medium' gutterBottom>
                  {message.name}
                </Typography>
                <Typography color='text' colorBrightness='secondary'>
                  {message.message}
                </Typography>
              </div>
            </MenuItem>
          ))}
          <Fab variant='extended' color='primary' aria-label='Add' className={classes.sendMessageButton}>
            Send New Message
            <SendIcon className={classes.sendButtonIcon} />
          </Fab>
        </Menu>
        <Menu
          id='notifications-menu'
          open={Boolean(notificationsMenu)}
          anchorEl={notificationsMenu}
          onClose={() => setNotificationsMenu(null)}
          className={classes.headerMenu}
          disableAutoFocusItem
        >
          {notifications.map(notification => (
            <MenuItem key={notification.id} onClick={() => setNotificationsMenu(null)} className={classes.headerMenuItem}>
              <Notification {...notification} typographyVariant='inherit' variant='outlined' />
            </MenuItem>
          ))}
        </Menu>
        <Menu
          id='profile-menu'
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant='h4' weight='medium'>
              {` qwewer werr`}
            </Typography>
            <Typography className={classes.profileMenuLink} component='a' color='primary' href='https://flatlogic.com'>
              Flalogic.com
            </Typography>
          </div>
          <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)}>
            <AccountIcon className={classes.profileMenuIcon} /> Profile
          </MenuItem>
          <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)}>
            <AccountIcon className={classes.profileMenuIcon} /> Tasks
          </MenuItem>
          <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)}>
            <AccountIcon className={classes.profileMenuIcon} /> Messages
          </MenuItem>
          <div className={classes.profileMenuUser}>
            <Typography className={classes.profileMenuLink} color='primary'>
              Sign Out
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
