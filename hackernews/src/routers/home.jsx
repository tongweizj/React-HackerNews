import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getNews } from "../api/news.js";

import Header from "../components/Header";
import Main from "../components/Main";
import ItemListNav from "../components/ItemListNav";

export async function loader() {
  const newsIdList = await getNews(0);
  return { newsIdList };
}

export default function Home() {
  const [newsIds, setNewsIds] = useState([]);
  const { newsIdList } = useLoaderData();

  // 监测fetch是否结束，改变状态
  useEffect(() => {
    if (newsIdList != undefined) {
      setNewsIds(newsIdList);
    }
  }, [newsIdList]);

  return (
    <>
      <Header />
      <ItemListNav />
      <Main data={newsIds} />
    </>
  );
}
