import React from 'react';
import { IconButton, Button } from '@material-ui/core';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStay';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunny';

type Props = {
  isMobile: boolean;
};

//TODO add global context
export default function DarkModeSwitch({ isMobile }: Props) {
  const handleClick = () => {
    console.log('click');
  };
  const isDarkMode = false;

  if (isMobile) {
    return (
      <IconButton color='primary' style={{ padding: '0.35em' }} onClick={handleClick}>
        {isDarkMode ? <NightsStayOutlinedIcon color='primary' /> : <WbSunnyOutlinedIcon color='primary' />}
      </IconButton>
    );
  }

  return (
    <Button
      color='secondary'
      size='small'
      variant='outlined'
      onClick={handleClick}
      style={{
        minWidth: 0,
        padding: '0.3em',
        borderRadius: '2em',
        marginLeft: '1em',
      }}
    >
      {isDarkMode ? <NightsStayOutlinedIcon /> : <WbSunnyOutlinedIcon />}
    </Button>
  );
}
