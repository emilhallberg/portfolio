import React from 'react';
import Home from '../pages/home/home';
import Project from '../pages/project/project';
import Contact from '../pages/contact/contact';
import { contact, home, project } from './paths';

const routes = [
  { ...home, container: <Home /> },
  { ...project, container: <Project /> },
  { ...contact, container: <Contact /> },
];

export default routes;
