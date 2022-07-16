import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import coffeStoredata from "../../data/coffee-stores.json";
import styles from "../../styles/coffee-store.module.css";
import cls from "classnames";
export const getStaticProps = ({ params }) => {
  console.log("params", params);
  return {
    props: {
      coffeeStore: coffeStoredata.find((coffestore) => {
        return coffestore.id.toString() === params.id;
      }),
    },
  };
};

export function getStaticPaths() {
  const paths = coffeStoredata.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
const CoffeeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>heloo</div>;
  }
  const { address, name, neighbourhood, imgUrl } = props.coffeeStore;

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>goback </a>
            </Link>
          </div>
          <div className={styles.name}>
            <p>{name}</p>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            alt={name}
            className={styles.storeImg}
          />
        </div>
        <div className={cls("glass", styles.col2)}>
          <p>{address}</p>
          <p>{neighbourhood}</p>
        </div>
      </div>
    </div>
  );
};
export default CoffeeStore;
