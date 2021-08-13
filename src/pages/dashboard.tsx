import { AxiosResponse } from 'axios';
import React, {
  ChangeEvent, FC, useState, MouseEvent, useEffect,
} from 'react';
import { ArticleCard } from '../components/card/articleCard';
import { Loader } from '../components/loader/loader';
import { Pagination } from '../components/pagination/pagination';
import SearchPanel from '../components/search-panel/search-panel';
import { Article, GET200Articles, SortType } from '../interfaces/articleInterface';
import axios from '../services/api';

const API_KEY = '13f832d3d3244deb8442164a5f9263af';

export const Dashboard: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement> | '') => {
    if (e)e.preventDefault();
    setIsLoading(true);
    try {
      if(searchValue){
      const response: AxiosResponse<GET200Articles> = await axios.get(
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}&page=${page}&pageSize=${pageSize}`,
      );
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
}

    } catch (err: any) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleSubmit('');
  }, [page, pageSize]);
  const handleFilter = (sort:SortType) => {
    setSortBy(sort);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  const gotoPage = (newPage:number) => {
    setPage(newPage);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPageSize(+value);
  };
  return (
    <div className="dashboard">
      <SearchPanel
        searchValue={searchValue}
        sortBy={sortBy}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleFilter={handleFilter}

      />
      {isLoading ? <Loader />
        : (
          <div className="cards">
            {articles.map((article, index: number) => (
              <ArticleCard
                key={article.publishedAt}
                author={article.author}
                content={article.content}
                description={article.description}
                publishedAt={article.publishedAt}
                source={article.source}
                title={article.title}
                urlToImage={article.urlToImage}
              />
            ))}
          </div>
        )}
      <Pagination
        page={page}
        pageSize={pageSize}
        totalResults={totalResults}
        gotoPage={gotoPage}
        setPageSize={handleInputChange}
      />
    </div>
  );
};
