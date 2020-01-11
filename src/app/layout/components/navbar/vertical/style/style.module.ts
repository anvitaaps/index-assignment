import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { myNavigationModule } from '@my/components';
import { mySharedModule } from '@my/shared.module';

import { NavbarVerticalStyleComponent } from 'app/layout/components/navbar/vertical/style/style.component';

@NgModule({
    declarations: [
        NavbarVerticalStyleComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        mySharedModule,
        myNavigationModule
    ],
    exports     : [
        NavbarVerticalStyleComponent
    ]
})
export class layoutNavbarVerticalStyleModule
{
}
