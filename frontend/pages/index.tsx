import { Filters } from "@/components/Filters/Filters";
import { Layout } from "@/components/Layout/Layout";
import { List } from "@/components/List/List";
import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => (
  <Layout>
    <List />
  </Layout>
  // <div className="container">
  //   <h4 className="mb-6 2xl:mb-12">ПЛАНИРОВКИ</h4>
  //   <Filters />
  // </div>
);

export default HomePage;
