import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {render, screen} from "@testing-library/react"
import React from "react"
import { DetailArticle } from "../src/pages/detail/detailArticle";
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('detail article', () => {
    it("show detail page", async () => {
       const history = createMemoryHistory()
        const route = "/details/title"
        history.push(route);
        render(
            <Router history={history}>
                <DetailArticle /> 
            </Router>,
        );
        expect(await screen.findByTestId("test-detail")).toBeInTheDocument();
    })
    
})