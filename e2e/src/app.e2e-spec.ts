import { my2Page } from './app.po';

describe('my2 App', () => {
    let page: my2Page;

    beforeEach(() => {
        page = new my2Page();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to my2!');
    });
});
