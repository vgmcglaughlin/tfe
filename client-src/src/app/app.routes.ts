import {
  ConsensusBuilderComponent,
  DatasetSelectorComponent,
} from './consensus-builder';
import { LoginComponent } from './login';
import { ProfileComponent } from './profile';

export const ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/consensus-builder/datasets',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'consensus-builder/datasets',
    component: DatasetSelectorComponent,
  },
  {
    path: 'consensus-builder/datasets/:id',
    component: ConsensusBuilderComponent,
  },
];
