import React from 'react';
import Article from './Article'

// Si la variable contient 2 ou plus alors affiche les deux articles
// Si la variable contient moins de 2 alors n'affiche pas les articles mais un h1 contenant "Il n'y a pas d'articles"

const Body = () => {
    let nombreArticle=2;
    return (
        <div>
        {nombreArticle < 2 ? <h1>Pas d'article</h1> : <Article /> }
        </div>
    );
};

export default Body;