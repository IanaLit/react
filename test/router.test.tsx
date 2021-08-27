import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {render, screen, waitFor} from "@testing-library/react"
import React from "react"
import { Provider } from 'react-redux';
import { store } from '../src/store';
import {App} from '../src/components/app/app'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { About } from '../src/pages/about';
import { DetailArticle } from '../src/pages/detail/detailArticle';
describe("router", () => {
    it("home page", () => {
        const history = createMemoryHistory();
        const { getByTestId } = render(<Provider store = {store}><Router history={history}><App /></Router></Provider>);
        const home = getByTestId("test-home");
        userEvent.click(home);
        expect(home).toHaveClass("navbar_link__active");
    })
    it("about page", () => {
        const history = createMemoryHistory();
        const { getByTestId } = render(<Provider store = {store}><Router history={history}><App /></Router></Provider>);
        const about = getByTestId("test-about");
        userEvent.click(about);
        expect(about).toHaveClass("navbar_link__active");
        const aboutPage = getByTestId("test-about-page");
        expect(aboutPage).toBeInTheDocument();
    })
    it("error page", async() => {
        const history = createMemoryHistory();
        history.push('/not-found');
        const { container} = render(<Provider store={store}><Router history={history}><App /></Router></Provider>);
        expect(container.innerHTML).toMatch("//");
    })
    
    


})