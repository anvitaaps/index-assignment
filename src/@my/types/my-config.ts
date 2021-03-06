export interface MyConfig
{
    layout: {
        style: string,
        width: 'fullwidth' | 'boxed',
        navbar: {
            hidden: boolean,
            folded: boolean,
            position: 'left' | 'right' | 'top',
            variant: string
        },
        toolbar: {
            background: string,
            hidden: boolean,
            position: 'above' | 'above-static' | 'above-fixed' | 'below' | 'below-static' | 'below-fixed'
        }
        sidepanel: {
            hidden: boolean,
            position: 'left' | 'right'
        }
    };
    customScrollbars: boolean;
}
