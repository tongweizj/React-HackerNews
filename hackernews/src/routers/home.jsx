import { useState } from "react";
import { fetchNews } from "../api/post.js";
import "../App.css";
import Header from "../components/Header";
import Main from "../components/Main";
import ItemListNav from "../components/ItemListNav";

export async function loader() {
  const contacts = await fetchNews();
  return { contacts };
}

export default function Home() {
  return (
    <>
      <Header />
      <ItemListNav />
      <Main />
    </>
  );
}
