import styles from './style/dropAdress.module.css';
import { Data } from './types/dropDownType';

const DropDownAdress = ({ data }: { data: Data }) => {
  return (
    <section className={styles.dropAdress}>
      <h1>Адреса</h1>
      <div className={styles.addresses}>
        {data.map((address, index) => (
          <div key={index} className={styles.adressItem}>
            {address.value}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DropDownAdress;
