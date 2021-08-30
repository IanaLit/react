import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react"
import React from "react"
import { Provider } from 'react-redux';
import { store } from '../src/store';
import { Dashboard } from "../src/pages/dashboard"

describe("dashboard", () => {
    it("show loader after click on search button", async () => {
        render(<Provider store={store} ><Dashboard /></Provider>);
        userEvent.type(await screen.findByTestId("test-button"), "red");
        userEvent.click(await screen.findByTestId("test-button"))
        expect(screen.getByTestId("test-loader")).toBeInTheDocument();
    })
})