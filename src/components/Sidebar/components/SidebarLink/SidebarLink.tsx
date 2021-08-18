import React, { useState } from 'react';
import { Collapse, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Inbox as InboxIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import Dot from '../Dot';

type Props = {
  link?: string;
  icon: JSX.Element;
  label: string;
  isSidebarOpen: boolean;
  nested?: boolean;
  type?: 'title' | 'divider';
};

const SidebarLink: React.FC<Props> = ({ link, icon, label, isSidebarOpen, nested, type, children }) => {
  const classes = useStyles();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isLinkActive = link && (location.pathname === link || location.pathname.indexOf(link) !== -1);

  function toggleCollapse(e: Event) {
    if (isSidebarOpen) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  }

  if (type === 'title')
    return (
      <Typography
        className={classnames(classes.linkText, classes.sectionTitle, {
          [classes.linkTextHidden]: !isSidebarOpen,
        })}
      >
        {label}
      </Typography>
    );

  if (type === 'divider') return <Divider className={classes.divider} />;

  if (!children)
    return (
      <ListItem
        button
        component={link && Link}
        to={link}
        className={classes.link}
        classes={{
          root: classnames({
            [classes.linkActive]: isLinkActive && !nested,
            [classes.linkNested]: nested,
          }),
        }}
        disableRipple
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {nested ? <Dot color={isLinkActive && 'primary'} /> : icon}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpen,
            }),
          }}
          primary={label}
        />
      </ListItem>
    );

  return (
    <>
      <ListItem button component={link && Link} onClick={toggleCollapse} className={classes.link} to={link} disableRipple>
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {icon || <InboxIcon />}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpen,
            }),
          }}
          primary={label}
        />
      </ListItem>
      {children && (
        <Collapse in={isOpen && isSidebarOpen} timeout='auto' unmountOnExit className={classes.nestedList}>
          <List component='div' disablePadding>
            {children.map(childrenLink => (
              <SidebarLink
                key={childrenLink && childrenLink.link}
                location={location}
                isSidebarOpen={isSidebarOpen}
                classes={classes}
                nested
                {...childrenLink}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarLink;
