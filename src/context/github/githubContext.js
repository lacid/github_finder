// each resource has these 3 files; github folder as a resource and files:
// githubContext, GithubState, githubReducer
// githubContext just to initialize a new context

import { createContext } from 'react';

const githubContext = createContext();

export default githubContext;
