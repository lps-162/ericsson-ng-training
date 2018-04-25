import { EmpListComponent } from "./erp/employees/emp-list/emp-list.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";

import { RouterModule } from '@angular/router';
import { EmpDetailsComponent } from "./erp/employees/emp-details/emp-details.component";
import { EmpCreateComponent } from "./erp/employees/emp-create/emp-create.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmpListComponent
  },
  {
    path: 'employees/create',
    component: EmpCreateComponent
  },
  {
    path: 'employees/:id',
    component: EmpDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouting = RouterModule.forRoot(appRoutes);