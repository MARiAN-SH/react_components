import { useState } from 'react';
import * as API from '../../../services/api';
import { useFetch } from './hooks/useFetch';
import { NewsList } from './NewsList/NewsList';
import styles from './NewsPortal.module.css';

const NewsPortal = () => {
  // const [news, setNews] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [filters, setFilter] = useState({
    q: '',
    sortBy: '',
    searchIn: '',
  });
  // кастомний хук
  const {
    isLoading,
    data: news,
    error,
  } = useFetch(filters, () => API.feachNews(filters));

  const handleChange = ({ target }) => {
    const { name, value } = target;
    // setQuery(value);
    setFilter(prevState => ({ ...prevState, [name]: value }));
  };

  // useEffect(() => {
  //   if (!query) {
  //     setNews([]);
  //   }
  //   handleNewsRequest();
  //   // API.feachNews({ q: ' company dhl' })
  //   //   .then(({ data }) => {
  //   //     console.log(data);
  //   //     setNews(data.articles);
  //   //     setError(null);
  //   //   })
  //   //   .catch(({ error }) => {
  //   //     setError(error);
  //   //   })
  //   //   .finally(() => {
  //   //     setIsLoading(false);
  //   //   });
  //   // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
  // }, [query]);

  // const handleNewsRequest = async () => {
  //   setIsLoading(true);
  //   try {
  //     const { data } = await API.feachNews({ q: query });
  //     console.log(data);
  //     setNews(data.articles);
  //     setError(null);
  //   } catch (err) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Filters</h2>
      <form action="">
        <input
          type="Search"
          name="q"
          value={filters.q}
          onChange={handleChange}
        />
        <div className={styles.filters}>
          <select
            value={filters.sortBy}
            name="sortBy"
            option
            label="Sort by"
            onChange={handleChange}
          ></select>
          <select
            value={filters.sortIn}
            name="sortIn"
            option
            label="Sort in"
            onChange={handleChange}
          ></select>
        </div>
      </form>
      {news && (
        <NewsList
          articles={news.data.articles}
          isLoading={isLoading}
          error={error}
        />
      )}
    </div>
  );
};

export default NewsPortal;
