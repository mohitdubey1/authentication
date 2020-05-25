import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <h2>Index Page</h2>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
    </Layout>
  );
};

export default Index;
