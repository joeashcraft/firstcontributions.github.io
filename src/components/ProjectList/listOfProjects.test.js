import React from 'react';
import projectList from './listOfProjects';

const validate_github_projects = Function.prototype;

it('lists no archived Github.com projects', () => {
  expect(validate_github_projects(projectList));
});
