import {RouterModule,Routes} from '@angular/router';
import {
	SliderHomeComponent,
	TestcomponentComponent,
	TopheaderComponent,
	FooterComponent,
	BlogComponent,
	QuestionComponent,
	ContactComponent,
	CourseComponent,
	SinglecourseComponent,
	ThankComponent
	}
	from "./components/index.paginas";

const app_routes: Routes = [
	{path:'',component:TestcomponentComponent},
	{path:'',component:TopheaderComponent},
	{path:'',component:FooterComponent},
	{path:'blog',component:BlogComponent},
	{path:'question',component:QuestionComponent},
	{path:'contact',component:ContactComponent},
	{path:'course',component:CourseComponent},
	{path:'singlecourse',component:SinglecourseComponent},
	{path:'thank',component:ThankComponent},
	//{path:'test',component:TestcomponentComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

