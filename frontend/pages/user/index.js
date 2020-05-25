import Link from "next/link";

import Private from "../../components/auth/Private";
import Layout from "../../components/Layout";

const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <h2>User Dashboard</h2>
      </Private>
    </Layout>
  );
};

export default UserIndex;
