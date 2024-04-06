import styles from "./BrowsePage.module.scss";
import React from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import Content from "../../components/Content/Content";
import MySpinner from "../../components/MySpinner/MySpinner";
import { IDeafaultState } from "../../types";

const BrowsePage = () => {
  const loading = useSelector((state:IDeafaultState) => state.loading);

  return (
    <div className={styles.browse}>
      <Header />
      {loading ? <MySpinner /> : <Content />}
    </div>
  );
};

export default BrowsePage;
