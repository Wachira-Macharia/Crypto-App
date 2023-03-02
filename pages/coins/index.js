// pages/coins/index.js -> https://localhost:3000/coins

import Axios from 'axios';
import Head from 'next/head';

import styles from '../../styles/CoinsList.module.css';

const CoinsList = ({ coinData }) => {
  return (
    <div className={styles.coinsContainer}>
      <Head>
        <title>Crypto Coins | NextJS Demo</title>   
      </Head>
          
      {coinData.coins.map((coin) => (
        <div className={styles.card} key={coin.id}>
          <div className={styles.cardTitle}>
            <h3>
              {coin.rank}. {coin.name}
            </h3>
            <img src={coin.icon} alt={coin.name} />
          </div>

          <div className={styles.cardContent}>
            <p>Price: {coin.price}</p>
            <p>Market Cap: {coin.marketCap}</p>
            <p>Daily Change: {coin.priceChange1d}%</p>
          </div>
          <p>
            <a
              href={`${coin.exp[0]}`}
              className={styles.actionLink}
              target="blank"
            >
              Learn More...
            </a>
          </p>
        </div>
      ))}
          
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    'https://api.coinstats.app/public/v1/coins?skip=0'
  );

  return {
    props: {
      coinData: data.data,
    },
  };
};

export default CoinsList;