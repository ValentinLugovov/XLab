import { useState } from 'react';
import styles from './style/findPages.module.css';
import DropDownAdress from './DropDownAdress';
import { Data } from './types/dropDownType';

const FindAdress = () => {
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<Data>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getAdresses = async () => {
    if (query.length >= 3) {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: 'Token ' + '951a0eadc8d857cc01f0c7ad1d6d39434c83c332', // так-то надо положить в process.env.DADATA_TOKEN
            },
            body: JSON.stringify({ query: query }),
          },
        );

        const result = await response.json();
        setData(result.suggestions);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <article>
      <h1>Поиск адресов</h1>
      <span>Введите интересующий вас адрес</span>
      <div className={styles.inputBox}>
        <input
          type="text"
          name="getAdress"
          placeholder="Введите интересующий вас адрес"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={getAdresses}>
          <div className={styles.buttonBox}>
            <img src="whiteGlass.svg" alt="main" />
            <span className={styles.buttonText}>Поиск</span>
          </div>
        </button>
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data.length > 0 && <DropDownAdress data={data} />}
    </article>
  );
};

export default FindAdress;
