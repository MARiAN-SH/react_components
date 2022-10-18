export const NewsCard = ({ title, description, url }) => {
  return (
    <li>
      <p>{title}</p>
      <p>{description}</p>
      <a href={url}>{url}</a>
    </li>
  );
};
