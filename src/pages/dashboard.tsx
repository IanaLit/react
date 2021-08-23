import React, {
 FC, useState,useEffect,
} from 'react';
import { ArticleCard } from '../components/card/articleCard';
import { Loader } from '../components/loader/loader';
import { Pagination } from '../components/pagination/pagination';
import SearchPanel from '../components/search-panel/search-panel';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const API_KEY = '13f832d3d3244deb8442164a5f9263af';

export const Dashboard: FC = () => {

  const { articles, page, limit} = useTypedSelector(state => state.article)
  const { fetchArticles } = useActions();
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = async (e: ChangeEvent<HTMLFormElement> | '') => {
  //   if (e)e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     if (searchValue) {
  //       const response: AxiosResponse<GET200Articles> = await axios.get(
  //         `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}&page=${page}&pageSize=${pageSize}`,
  //       );
  //       // setArticles(response.data.articles);
  //       setTotalResults(response.data.totalResults);
  //     }
  //   } catch (err: any) {
  //     console.error(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   handleSubmit('');
  // }, [page, pageSize]);
  // const handleFilter = (sort:SortType) => {
  //   setSortBy(sort);
  // };
  useEffect(() => {
    fetchArticles(page, limit)
  }, [page, limit])
  return (
    <div className="dashboard">
      <SearchPanel/>
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
      <Pagination/>
    </div>
  );
};
