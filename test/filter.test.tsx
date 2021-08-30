import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {render} from "@testing-library/react"
import React from "react"
import { Provider } from 'react-redux';
import { Filter } from '../src/components/filter/filter';
import { store } from '../src/store';

describe('Filter', () => {
    it("checkbox default", () => {
        const { getByLabelText } = render(<Provider store={store} ><Filter /></Provider>);
        const publishedAt = getByLabelText("publishedAt");
        const relevancy = getByLabelText("relevancy");
        expect(publishedAt).not.toBeChecked();
        expect(relevancy).not.toBeChecked();  
    })
    it("checkbox click", () => {
        const { getByLabelText } = render(<Provider store={store} ><Filter /></Provider>);
        const publishedAt = getByLabelText("publishedAt");
        const relevancy = getByLabelText("relevancy");
        const popularity = getByLabelText("popularity");
        userEvent.click(relevancy);
        expect(popularity).not.toBeChecked();
        expect(publishedAt).not.toBeChecked();
        expect(relevancy).toBeChecked();
        userEvent.click(publishedAt);
        expect(popularity).not.toBeChecked();
        expect(relevancy).not.toBeChecked();
        expect(publishedAt).toBeChecked();
    })

})