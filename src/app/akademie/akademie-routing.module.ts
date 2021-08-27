import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UberUnsComponent } from "./uber-uns/uber-uns.component";


const routes: Routes=[
    {
        path:'akademie',
        children:[
        {
            path: 'uberUns',
            component: UberUnsComponent
        }
    ]
}

]

@NgModule(
    {
        imports:[RouterModule.forChild(routes)],
        exports:[RouterModule]
    }
)

export class AkademieRoutingModule{}