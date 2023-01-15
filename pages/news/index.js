import React from 'react';

const News = ({ news }) => {
    console.log(news)
    return (
        <div>
            this is news page
            {
                news.map((item) =>
                    <>
                        <h1>{item.title} {item.description} | {item.category}</h1>
                    </>
                )
            }
        </div>
    );
};

export default News;

export async function getServerSideProps() {
    const response = await fetch('http://localhost:5000/news');
    const data = await response.json();
    return {
        props: {
            news: data
        }
    }
}