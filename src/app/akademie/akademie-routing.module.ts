import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KurseComponent } from "./kurse/kurse.component";
import { UberUnsComponent } from "./uber-uns/uber-uns.component";


const routes: Routes=[
    {
        path:'akademie',
        children:[
        {
            path: 'uberUns',
            component: UberUnsComponent
        },
        {
            path: 'kurse',
            component: KurseComponent
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