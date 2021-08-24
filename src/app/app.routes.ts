import {RouterModule,Routes} from '@angular/router';
import {
	SliderHomeComponent,
	TestcomponentComponent
	}
	from "./components/index.paginas";

const app_routes: Routes = [
	{path:'',component:TestcomponentComponent},
	//{path:'test',component:TestcomponentComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

