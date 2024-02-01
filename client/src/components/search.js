"use client";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import SearchResults from "./searchResults";
export default function Search() {
  const [showResult, setShowResult] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (e) => setSearchInput(e.target.value);
  const handleSubmit = async () => {
    document.querySelector("#inputField").value = "";
    console.log(`typed value:`, searchInput, `typed value:`);
    const response = await axios.get("http://localhost:8080/address", {
      params: {i:searchInput} ,
    });
    console.log(response.data);
    setShowResult(true);
  };
  return (
    <section className={styles.searchContainer}>
      <section className={styles.searchHeader}>
        <section className={styles.searchSection}>
          <h3>The Ethereum Blockchain Explorer</h3>
          <section className={styles.input_section}>
            <input
              className={styles.inputField}
              type="text"
              id="inputField"
              name="inputField"
              maxLength={120}
              placeholder="Search by Address/ Txn Hash / Block/ Token / Domain Name "
              required
              onChange={changeHandler}
            />
            <button className={styles.btn} onClick={handleSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="search"
                className="maginifiying"
              >
                <g data-name="Layer 2">
                  <path
                    d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                    data-name="search"
                  ></path>
                </g>
              </svg>
            </button>
          </section>
        </section>
      </section>
      {<SearchResults result={{ result, searchInput }} />}
    </section>
  );
}
