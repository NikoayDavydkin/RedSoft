import styles from "./Content.module.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortAndSearch } from "../../functions";
import { IDeafaultState } from "../../types";

const Content = () => {
  const loading = useSelector((state: IDeafaultState) => state.loading);
  const data = useSelector((state: IDeafaultState) => state.data);
  const activeParrent = useSelector(
    (state: IDeafaultState) => state.activeParrent
  );
  const dispatch = useDispatch();

  const dataChildren = sortAndSearch(data, activeParrent);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(dataChildren);

  useEffect(() => {
    setSearchResults(dataChildren);
  }, [dataChildren]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const results = dataChildren.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className={styles.content}>
      <ul className={styles.parent}>
        {data.map((item) => {
          return (
            <li
              key={item.key}
              className={activeParrent === item.key ? styles.active : ""}
              onClick={() => {
                dispatch({
                  type: "CHOOSE_ANOTHER_PARENT",
                  payload: item.key,
                });
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>

      <div className={styles.wrapper}>
        {/**/}
        <input
          type="text"
          placeholder="search.."
          className={styles.search}
          value={searchTerm}
          onChange={handleChange}
        />
        <ul className={styles.children}>
          {searchResults.length ? (
            searchResults.map((item) => {
              return <li key={item.key}>{item.name}</li>;
            })
          ) : (
            <li> нет дочерних элементов</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Content;
