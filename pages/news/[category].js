import React from 'react';

const Category = ({articles, category}) => {
    console.log(articles, category)
    return (
        <div>
            <h1>Getting result of {category}</h1>
            {
                articles.map((article) => {
                    return(
                        <div key={article.id}>
                            <h1>{article.id} {article.title} </h1>
                            <p>{article.description}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Category;

export async function getServerSideProps(contex){
    const {params} = contex;
    const {category} = params;
    const response = await fetch(`http://localhost:5000/news?category=${category}`);
    const data =await response.json()
    return{
        props: {
            articles : data,
            category
        }
    }
}