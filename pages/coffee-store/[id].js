import { useRouter } from "next/router";
import Link from "next/link";
import coffeStoredata from "../../data/coffee-stores.json";
export const getStaticProps = ({ params }) => {
  console.log("params", params);
  return {
    props: {
      coffeeStore: coffeStoredata.find((coffestore) => {
        return coffestore.id === 0;
      }),
    },
  };
};

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: false,
  };
}
const CoffeeStore = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      coffee
      <Link href="/">
        <a>goback </a>
      </Link>
    </div>
  );
};
export default CoffeeStore;
