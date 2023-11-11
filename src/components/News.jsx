import NewsItem from "./NewsItem";
import {useState,useEffect} from 'react';
export default function News(props) {
   const [news, setNews] = useState([]);
   useEffect(() => {
      fetchapi()
   },[])
   async function fetchapi(){
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8a427c6dc808472c97801612ce1ca08f`);
      const data = await response.json();
      console.log(data);
      setNews(data.articles);
   }
    return (
      <>  
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {news.map((item,index)=>{
               return <NewsItem title={item.title ? item.title : ""} description={item.description ? item.description : ""} imageUrl={item.urlToImage} newsUrl={item.url} date={item.publishedAt} key={index} author={item.author} />
            })}
          

          </div>
      </>
      
    )
 }
 News.defaultProps={
    country:'in',
 }