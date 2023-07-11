import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Main from "../components/Main";
import ItemListNav from "../components/ItemListNav";
// import { getNews } from "../api/post";
export async function loader({ params }) {
  // 根据page id 取数据
  const id = params.pageId;
  // const data = getNews();
  // console.log("news data:", data);
  return { id };
}
export default function News() {
  const { id } = useLoaderData();
  console.log("page id:", id);
  return (
    <>
      <Header />
      <ItemListNav />
      <Main />
    </>
  );
}
