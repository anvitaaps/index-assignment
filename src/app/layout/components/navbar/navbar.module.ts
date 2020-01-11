import { NgModule } from '@angular/core';

import { mySharedModule } from '@my/shared.module';

import { NavbarComponent } from 'app/layout/components/navbar/navbar.component';
import { layoutNavbarVerticalStyleModule } from 'app/layout/components/navbar/vertical/style/style.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        mySharedModule,

        layoutNavbarVerticalStyleModule,
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule
{
}
