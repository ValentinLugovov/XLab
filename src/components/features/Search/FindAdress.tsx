import './style/findPages.css';

const FindAdress = () => {
  return (
    <article>
      <h1>Поиск адресов</h1>
      <span>Введите интересующий вас адрес</span>
      <div className="inputBox">
        <input type="text" name="getAdress" placeholder="Введите интересующий вас адрес" />
        <button>
          <div className='buttonBox'>
            <img src="whiteGlass.svg" alt="main" />
            <span className='buttonText'>Поиск</span>
          </div>
        </button>
      </div>
    </article>
  );
};

export default FindAdress;
