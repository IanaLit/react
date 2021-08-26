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

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Search field', () => {
    it("hello react test!", () => {
        render(<Provider store ={store} ><SearchPanel/></Provider>);
        expect(screen.getByPlaceholderText(/type to search/i)).toBeInTheDocument()
    })
});
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
describe("dashboard", () => {
    it("show loader after click on search button", async () => {
        render(<Provider store={store} ><Dashboard /></Provider>);
        render(<Loader />);
        userEvent.type(await screen.findByTestId("test-button"), "red");
        userEvent.click(await screen.findByTestId("test-button"))
        expect(screen.getByTestId("test-loader")).toBeInTheDocument;
    })

    // it("fetch articles from api", async () => {
    //     await mockedAxios.get.mockResolvedValue({ data: {hits} });
    //     const { getByRole} = render(<Provider store={store} ><Dashboard /></Provider>);
    //     userEvent.type(getByRole("textbox"), "red");
    //     userEvent.click(getByRole("button"));
    //     const cards = await screen.findAllByTestId("test-card");
    //     // screen.debug();
    //     // expect(cards).toHaveLength(5);
    //     await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    

    // })
})