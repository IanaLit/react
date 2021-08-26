import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react"
import React from "react"
import { Provider } from 'react-redux';
import SearchPanel from "../src/components/search-panel/search-panel"
import { store } from '../src/store';



describe('Search', () => {
    it("hello react test!", () => {
        render(<Provider store ={store} ><SearchPanel/></Provider>);
        expect(screen.getByPlaceholderText(/type to search/i)).toBeInTheDocument()
    })
});