import './style/dropAdress.css';

const DropDownAdress = ({ data }) => {
  return (
    <section className="dropAdress">
      <h1>Адреса</h1>
      <div className='addresses'>
      {data.map((address, index) => (
        <>
          <div key={index} className="adressItem">
            {/* {`${address.data.city_type_full} ${address.data.city}, ${address.data.street_type_full} ${address.data.street}, ${address.data.house_type_full} ${address.data.house}`} */}
          {address.value}
          </div>
        </>
      ))}
      </div>
    </section>
  );
};

export default DropDownAdress;
