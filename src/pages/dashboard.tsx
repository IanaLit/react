import { AxiosResponse } from 'axios';
import React, { ChangeEvent, FC, useState , MouseEvent } from 'react';
import { ArticleCard } from '../components/card/articleCard';
import SearchPanel from '../components/search-panel/search-panel';
import { Article, GET200_Articles, SortType } from '../interfaces/articleInterface';
import axios from '../services/api';

const API_KEY = '13f832d3d3244deb8442164a5f9263af';

export const Dashboard: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [articles, setArticles] = useState<Article[]>([]);
    const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        //setIsLoading(true);
        try {
            const response: AxiosResponse<GET200_Articles> = await axios.get(
                `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}`,
            );
            setArticles(response.data.articles);
            //console.log(response.data)
        } catch (err: any) {
            console.error(e);
        } finally {
            //setIsLoading(false);
        }
    };
        
    const handleFilter = (sort:SortType) => {
        setSortBy(sort);
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchValue(value);
    };
    return (
        <div>
            <SearchPanel
                searchValue={searchValue}
                sortBy={sortBy}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleFilter={handleFilter}

            />
            <div className="cards">
                {articles.map((article, index: number) => {
                    return (
                        <ArticleCard key={index}
                        author={article.author}
                        content={article.content}
                        description={article.description}
                        publishedAt={article.publishedAt}
                        source={article.source}
                        title={article.title}
                        urlToImage={article.urlToImage}
                />)
            })}
            </div> 
        </div>
    )
        
  };