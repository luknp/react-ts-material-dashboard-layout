import React, { useState, useEffect } from 'react';
import { Drawer, IconButton, List } from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';
import classNames from 'classnames';
import useStyles from './styles';
import SidebarLink from './components/SidebarLink/SidebarLink';
import { structure } from './menuStructure';
import { Theme } from '@material-ui/core/styles';

type Props = {
  isSidebarOpen: boolean;
  handleSidebarOpen: (state: boolean) => void;
};

export default function Sidebar({ isSidebarOpen, handleSidebarOpen }: Props) {
  const classes = useStyles();
  const theme: Theme = useTheme();

  const [isPermanent, setPermanent] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? 'permanent' : 'temporary'}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpen,
        [classes.drawerClose]: !isSidebarOpen,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpen,
          [classes.drawerClose]: !isSidebarOpen,
        }),
      }}
      open={isSidebarOpen}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => handleSidebarOpen(!isSidebarOpen)}>
          <ArrowBackIcon
            classes={
              {
                // root: classNames(classes.headerIcon, classes.headerIconCollapse),
              }
            }
          />
        </IconButton>
      </div>
      <List>
        {structure.map(link => (
          <SidebarLink key={link.id} isSidebarOpen={isSidebarOpen} {...link} />
        ))}
      </List>
    </Drawer>
  );

  function handleWindowWidthChange() {
    const windowWidth = window.innerWidth;
    const breakpointWidth = theme.breakpoints.values.md;
    const isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}
