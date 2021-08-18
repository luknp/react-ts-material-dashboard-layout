import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import classnames from 'classnames';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  dotBase: {
    width: 8,
    height: 8,
    backgroundColor: theme.palette.text.hint,
    borderRadius: '50%',
    transition: theme.transitions.create('background-color'),
  },
  dotSmall: {
    width: 5,
    height: 5,
  },
  dotLarge: {
    width: 11,
    height: 11,
  },
}));

type Props = {
  color?: string;
  size?: 'large' | 'small';
};

export default function Dot({ size, color }: Props) {
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
    <div
      className={classnames(classes.dotBase, {
        [classes.dotLarge]: size === 'large',
        [classes.dotSmall]: size === 'small',
      })}
      style={{
        backgroundColor: color && theme.palette[color] && theme.palette[color].main,
      }}
    />
  );
}
