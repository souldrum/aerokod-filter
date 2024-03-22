import { Filters } from "@/components/Filters/Filters";
import { List } from "@/components/List/List";
import { NextPage } from "next";

const HomePage: NextPage = () => (
  <div className="container">
    <h4 className="mb-6 2xl:mb-12">ПЛАНИРОВКИ</h4>
    <Filters />
    <List />
  </div>
);

export default HomePage;
