import Link from "next/link";

import Admin from "../../components/auth/Admin";
import Layout from "../../components/Layout";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <h2>Admin Dashboard</h2>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
