import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import './Home.scss';

type PostProps = {
  id: string;
  title: string;
  summary: string;
  picture: string;
}

export const Home: React.FC = () => {

  const [posts, setPosts] = useState<PostProps[]>([
    { id: '1', title: 'Pão', summary: 'Receita rápida de pão, feita com trigo', picture: 'https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_640.jpg' },
    { id: '1', title: 'Pão', summary: 'Receita rápida de pão, feita com trigo', picture: 'https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_640.jpg' },
    { id: '1', title: 'Pão', summary: 'Receita rápida de pão, feita com trigo', picture: 'https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_640.jpg' },
    { id: '1', title: 'Pão', summary: 'Receita rápida de pão, feita com trigo', picture: 'https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_640.jpg' },
    { id: '1', title: 'Pão', summary: 'Receita rápida de pão, feita com trigo', picture: 'https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_640.jpg' },
    { id: '1', title: 'Pão', summary: 'Receita rápida de pão, feita com trigo', picture: 'https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_640.jpg' },
    { id: '1', title: 'Pão', summary: 'Receita rápida de pão, feita com trigo', picture: 'https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_640.jpg' },
    { id: '1', title: 'PãoPãoPãoPãoPãoPãoPãoPãoPãoPãoPãoPãoPãoPãoPãoPãoPão', summary: 'Receita rápida de pão, feita com trigoReceita rápida de pão, feita com trigoReceita rápida de pão, feita com trigoReceita rápida de pão, feita com trigoReceita rápida de pão, feita com trigoReceita rápida de pão, feita com trigoReceita rápida de pão, feita com trigoReceita rápida de pão, feita com trigo', picture: 'https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_640.jpg' },
  ]);

  return (
    <>
      <div className="container-home">
        <div className="header-home">
          <img src={Logo} alt="logo" />
          <a href="profile" className="profile-home">
            <i className="bi bi-person-circle"></i>
          </a>
        </div>
        <div className="body-home">
          <div className="search-container-home">
            <input placeholder="Pesquisar" className="search-home" />
            <div className="search-icon-home">
              <i className="bi bi-search"></i>
            </div>
          </div>
          <div className="cards-home">
            {
              posts &&
              posts.map((post: any) => {
                return (
                  <a href="" className="card-home">
                    <div className="card-img-home">
                      <img src={post.picture} alt={`Logo ${post.title}`} />
                    </div>
                    <div className="card-texts-home">
                      <div className="card-title-home">
                        {post.title}
                      </div>
                      <div className="card-summary-home">
                        {post.summary}
                      </div>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};
