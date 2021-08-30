import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {render, screen} from "@testing-library/react"
import React from "react"
import { ArticleCard } from '../src/components/card/articleCard';
import { hits } from './hits';
import { Provider } from 'react-redux';
import { Dashboard } from '../src/pages/dashboard';
import { store } from '../src/store';
import { Photo } from '../src/components/photo/photo';
import { Description } from '../src/components/description/description';


describe('article card', () => {
    it("show article card", async () => {
        const clickHandler = jest.fn();
        const { urlToImage, publishedAt, author, title, description } = hits[0];
        render(
            <div
                role="button"
                tabIndex={0}
                className="card"
                onClick={clickHandler}
                onKeyDown={clickHandler}
                >
                <Photo imgUrl={urlToImage} time={publishedAt} />
                <Description author={author} title={title} description={description} />
            </div>
        );
        userEvent.click(await screen.findByText(author));
        expect(clickHandler).toHaveBeenCalledTimes(1);
    })
    it("display article card", async() => {
        const { urlToImage, publishedAt, author, title, description } = hits[0];
        const { findByText } = render(
            <ArticleCard
                urlToImage={urlToImage}
                publishedAt={publishedAt}
                author={author}
                title={title}
                description={description}
                content="blablabla"
                source={
                    {
                        id: "1",
                        name: "Article",
                    }
                } />,
        );
        expect(await findByText("John Doe")).toBeInTheDocument();
    })
})