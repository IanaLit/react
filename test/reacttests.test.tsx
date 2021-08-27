import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { findAllByTestId, getByRole, render, screen, waitFor } from "@testing-library/react"
import React from "react"
import { Provider } from 'react-redux';
import { Filter } from '../src/components/filter/filter';
import SearchPanel from "../src/components/search-panel/search-panel"
import { store } from '../src/store';
import { Dashboard } from "../src/pages/dashboard"
import { Loader } from '../src/components/loader/loader';
import axios from 'axios';
import { hits } from './hits'
import { fetchArticles } from '../src/store/action-creators/article';
import { ArticleActionTypes } from '../src/store/types/article';


describe('Search field', () => {
    it("hello react test!", () => {
        render(<Provider store ={store} ><SearchPanel/></Provider>);
        expect(screen.getByPlaceholderText(/type to search/i)).toBeInTheDocument()
    })
});
