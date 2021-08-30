import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {render, screen} from "@testing-library/react"
import React from "react"
import { DetailArticle } from "../src/pages/detail/detailArticle";
import { Provider } from 'react-redux';
import { Filter } from '../src/components/filter/filter';
import { store } from '../src/store';
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
    })
    expect(screen.findByTestId("test-detail")).toBeInTheDocument();
})