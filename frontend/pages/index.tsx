import { Layout } from "@/components/Layout/Layout";
import { List } from "@/components/List/List";
import { StoreProvider } from "@/components/StoreProvider";
import { useAppStore } from "@/hooks/useRedux";
import { makeStore } from "@/redux/store";
import { NextPage } from "next";
import { Provider } from "react-redux";

const HomePage: NextPage = () => (
  <StoreProvider>
    <Layout>
      <List />
    </Layout>
  </StoreProvider>
);

export default HomePage;
