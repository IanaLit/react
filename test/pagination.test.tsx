import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {render, screen, waitFor} from "@testing-library/react"
import React from "react"
import { Provider } from 'react-redux';
import { store } from '../src/store';
import { Dashboard } from '../src/pages/dashboard';
describe("Pagination", () => {
    it("change page by click", async () => {
        await render(<Provider store={store}><Dashboard /></Provider>);
        const link = screen.getByTestId("test-link2")
        userEvent.click(screen.getByTestId("2"));
        await waitFor(() => {
            expect(link).toHaveClass("active");
        });
    });
})
