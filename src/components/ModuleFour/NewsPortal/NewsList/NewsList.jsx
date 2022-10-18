import { NewsCard } from '../NewsCard/NewsCard';
export const NewsList = ({ articles, isLoading, error }) => {
  console.log(articles)
  if (isLoading) {
    return <p>loader</p>;
  }
  if (error) {
    return <>There was an error</>;
  }
  return (
    <ul>
      {articles.map(({ title, description, url }) => (
        <NewsCard key={url} title={title} description={description} url={url} />
      ))}
    </ul>
  );
};
