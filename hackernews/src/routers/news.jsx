import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getNews } from "../api/news";

import Header from "../components/Header";
import Main from "../components/Main";
import ItemListNav from "../components/ItemListNav";

export async function loader({ params }) {
  const id = params.pageId;
  let newsIdList = await getNews(id);
  return { newsIdList };
}
export default function News() {
  const [newsIds, setNewsIds] = useState([]);
  const { newsIdList } = useLoaderData();

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
