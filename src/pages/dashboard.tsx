import React, {
  FC, useState, useEffect,
} from 'react';
import { ArticleCard } from '../components/card/articleCard';
import { Loader } from '../components/loader/loader';
import { Pagination } from '../components/pagination/pagination';
import SearchPanel from '../components/search-panel/search-panel';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const Dashboard: FC = () => {
  const {
    articles, page, limit, isLoading,
  } = useTypedSelector((state) => state.article);
  const { fetchArticles } = useActions();
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchArticles(page, limit);
  }, [page, limit]);
  return (
    <div className="dashboard">
      <SearchPanel />
      {isLoading ? <Loader />
        : (
          <div className="cards">
            {articles.map((article, index: number) => (
              <ArticleCard
                data-testid="test-card"
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
      <Pagination />
    </div>
  );
};
