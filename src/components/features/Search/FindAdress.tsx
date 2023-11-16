import { useState } from 'react';
import './style/findPages.css';
import DropDownAdress from './DropDownAdress';

const FindAdress = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const getAdresses = async () => {
    if (query.length >= 3) {
      const response = await fetch(
        'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Token ' + '951a0eadc8d857cc01f0c7ad1d6d39434c83c332',
          },
          body: JSON.stringify({ query: query }),
        },
      );

      const result = await response.json();
      setData(result.suggestions);
      console.log(result.suggestions);
    }
  };

  return (
    <article>
      <h1>Поиск адресов</h1>
      <span>Введите интересующий вас адрес</span>
      <div className="inputBox">
        <input
          type="text"
          name="getAdress"
          placeholder="Введите интересующий вас адрес"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={getAdresses}>
          <div className="buttonBox">
            <img src="whiteGlass.svg" alt="main" />
            <span className="buttonText">Поиск</span>
          </div>
        </button>
      </div>
      {data.length > 0 && <DropDownAdress data={data} />}
    </article>
  );
};

export default FindAdress;
