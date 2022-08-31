import React from 'react';
import { FiHome, FiUser, FiMessageSquare, FiSettings } from 'react-icons/fi';
import { AiOutlineCalendar, AiOutlineFolder, AiOutlineFile } from 'react-icons/ai';


export const SidebarData = [
  {
    path: '/',
    icon: <FiHome />,
    cName: 'nav-text'
  },
  {
    path: '/login',
    icon: <FiUser />,
    cName: 'nav-text'
  },
  {
    path: '/calender',
    icon: <AiOutlineCalendar />,
    cName: 'nav-text'
  },
  {
    path: '/documents',
    icon: <AiOutlineFile />,
    cName: 'nav-text'
  },
  {
    path: '/files',
    icon: <AiOutlineFolder />,
    cName: 'nav-text'
  },
  {
    path: '/message',
    icon: <FiMessageSquare />,
    cName: 'nav-text'
  },
  {
    path: '/setting',
    icon: <FiSettings />,
    cName: 'nav-text'
  }
];
