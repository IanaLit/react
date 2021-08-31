import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './detail.scss';

export const DetailArticle = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const params:{ title:string } = useParams();
  const urlToImage = query.get('urlToImage');
  const publishedAt = query.get('publishedAt');
  const author = query.get('author');
  const description = query.get('description');
  console.log(query);
  return (
    <div className="detail-container" data-testid="test-detail">
      <div className="detail-card">
        <img src={urlToImage || ''} alt="article" />
        <div className="detail-content">
          <h1>{params.title}</h1>
          <p>{description}</p>
        </div>
        <div className="detail-author">
          <div className="avatar">
            <div className="i-d">
              <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.proheadshots.ca%2Fwp-content%2Fuploads%2F2016%2F03%2Fbusiness-headshot-white-background.jpg&f=1&nofb=1" alt="" />
              <div className="detail-description">
                <h3>{author}</h3>
                <p>{publishedAt?.slice(0, 10)}</p>
              </div>
            </div>
          </div>
          <div className="action" />
        </div>
      </div>
    </div>

  );
};
