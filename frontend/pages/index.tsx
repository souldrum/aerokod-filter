import { Layout } from "@/components/Layout/Layout";
import { List } from "@/components/List/List";
import { StoreProvider } from "@/components/StoreProvider";
import { NextPage } from "next";

const HomePage: NextPage = () => (
  <Layout>
    <List />
  </Layout>
);

export default HomePage;
