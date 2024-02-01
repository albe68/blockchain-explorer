"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Logo from "../../public/eth-logo.png";
import Image from "next/image";
export default function Header() {
  const [ethPrice, setEthPrice] = useState("");

  useEffect(() => {
    const getEthPrice = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/getethprice",
          {}
        );
        setEthPrice(response.data.usdPrice);
      } catch (error) {
        console.log(error);
      }
    };
    getEthPrice();
  });

  return (
    <section className={styles.header}>
      <section className={styles.topHeader}>
        ETH price:{}
        <span>${Number(ethPrice).toFixed(2)}</span>
      </section>
      <section>
        <Image src={Logo} alt="Etherscan Logo" className={styles.logo} />
        <section className={styles.menu}>
          <p>Home</p>
          <p>Blockchain</p>
          <p>Tokens</p>
          <p>NFT</p>
          <p>Resources</p>
          <p>Developers</p>
          <p>More</p>
          <p>|</p>
          <p>SignIn</p>
        </section>
      </section>
    </section>
  );
}
