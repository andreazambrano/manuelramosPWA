import {RouterModule,Routes} from '@angular/router';
import {
	SliderHomeComponent,
	TestcomponentComponent,
	TopheaderComponent,
	FooterComponent,
	BlogComponent,
	QuestionComponent
	}
	from "./components/index.paginas";

const app_routes: Routes = [
	{path:'',component:TestcomponentComponent},
	{path:'',component:TopheaderComponent},
	{path:'',component:FooterComponent},
	{path:'blog',component:BlogComponent},
	{path:'question',component:QuestionComponent},
	//{path:'test',component:TestcomponentComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

