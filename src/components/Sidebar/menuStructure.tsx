import React from 'react';
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@material-ui/icons';
import Dot from './components/Dot';

export const structure = [
  { id: 0, label: 'Dashboard', link: '/app/dashboard', icon: <HomeIcon /> },
  {
    id: 1,
    label: 'Devices',
    link: '/app/devices',
    icon: <TypographyIcon />,
  },
  { id: 2, label: 'Data', link: '/app/data', icon: <TableIcon /> },
  { id: 15, label: 'Data', link: '/app/testtable', icon: <TableIcon /> },
  { id: 16, label: 'Shop', link: '/app/shop', icon: <ShoppingCartIcon /> },
  {
    id: 3,
    label: 'Notifications',
    link: '/app/notifications',
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: 'UI Elements',
    link: '/app/ui',
    icon: <UIElementsIcon />,
    children: [
      { label: 'Icons', link: '/app/ui/icons' },
      { label: 'Charts', link: '/app/ui/charts' },
      { label: 'Maps', link: '/app/ui/maps' },
    ],
  },
  { id: 5, type: 'divider' },
  { id: 6, type: 'title', label: 'HELP' },
  { id: 7, label: 'Library', link: '', icon: <LibraryIcon /> },
  { id: 8, label: 'Support', link: '', icon: <SupportIcon /> },
  { id: 9, label: 'FAQ', link: '', icon: <FAQIcon /> },
  { id: 10, type: 'divider' },
  { id: 11, type: 'title', label: 'PROJECTS' },
  {
    id: 12,
    label: 'My recent',
    link: '',
    icon: <Dot size='small' color='warning' />,
  },
  {
    id: 13,
    label: 'Starred',
    link: '',
    icon: <Dot size='small' color='primary' />,
  },
  {
    id: 14,
    label: 'Background',
    link: '',
    icon: <Dot size='small' color='secondary' />,
  },
];
