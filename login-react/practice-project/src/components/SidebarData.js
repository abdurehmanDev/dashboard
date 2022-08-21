import React from 'react';
import {FiHome, FiUser, FiMessageSquare} from 'react-icons/fi';
import {AiOutlineCalendar, AiOutlineFolder} from 'react-icons/ai';
import {GrDocumentText} from 'react-icons/gr';


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
    icon: <GrDocumentText/>,
    cName: 'nav-text'
  },
  {
    path: '/files',
    icon: <AiOutlineFolder />,
    cName: 'nav-text'
  },
  {
    path: '/message',
    icon: <FiMessageSquare/>,
    cName: 'nav-text'
  }
];
