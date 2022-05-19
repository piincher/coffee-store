import { useRouter } from "next/router";
import Link from "next/link";

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
