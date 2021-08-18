import React from 'react';
import { getColor, getFontWeight, getFontSize } from 'utils/material-ui';
import { Theme } from '@material-ui/core/styles';
import { Typography as TypographyBase } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

type Props = {
  colorBrightness?: string;
  color?: string;
  weight?: string;
  size?: string;
  [x: string]: any;
};

const Typography: React.FC<Props> = ({ children, weight = 'medium', size = 'sm', colorBrightness, color = 'primary', ...props }) => {
  const theme: Theme = useTheme();

  return (
    <TypographyBase
      style={{
        color: getColor(color, theme, colorBrightness),
        fontWeight: getFontWeight(weight),
        fontSize: getFontSize(size, props.variant, theme),
      }}
      {...props}
    >
      {children}
    </TypographyBase>
  );
};

export default Typography;
