import React from 'react';
import { getColor, createStyled } from 'utils/material-ui';
import { Theme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import { Button as ButtonBase } from '@material-ui/core';
import classnames from 'classnames';

type Props = {
  className: string;
  color: string;
  [x: string]: any;
};

const Typography: React.FC<Props> = ({ children, color, className, ...props }) => {
  const theme: Theme = useTheme();

  const Styled = createStyled({
    root: {
      color: getColor(color, theme),
    },
    contained: {
      backgroundColor: getColor(color, theme),
      color: `${color ? 'white' : theme.palette.text.primary} !important`,
      '&:hover': {
        backgroundColor: getColor(color, theme, 'light'),
      },
    },
    outlined: {
      color: getColor(color, theme),
      borderColor: getColor(color, theme),
    },
    select: {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <ButtonBase
          classes={{
            contained: classes.contained,
            root: classes.root,
            outlined: classes.outlined,
          }}
          {...props}
          className={classnames(
            {
              [classes.select]: props.select,
            },
            className,
          )}
        >
          {children}
        </ButtonBase>
      )}
    </Styled>
  );
};

export default Typography;
