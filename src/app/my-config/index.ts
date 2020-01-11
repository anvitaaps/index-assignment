import { MyConfig } from '@my/types';

/**
 * Default my Configuration
 *
 * You can edit these options to change the default options. All these options also can be changed per component
 * basis. See `app/main/pages/authentication/login/login.component.ts` constructor method to learn more
 * about changing these options per component basis.
 */

export const myConfig: MyConfig = {
    layout          : {
        style    : 'vertical-layout-1',
        width    : 'fullwidth',
        navbar   : {
            folded    : false,
            hidden    : false,
            position  : 'left',
            variant   : 'vertical-style'
        },
        toolbar  : {
            background: 'mat-white-500-bg',
            hidden    : false,
            position  : 'below-static'
        },
        sidepanel: {
            hidden  : false,
            position: 'right'
        }
    },
    customScrollbars: true
};
