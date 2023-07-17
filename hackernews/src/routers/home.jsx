import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getNews } from "../api/news.js";

import Header from "../components/Header";
import Main from "../components/Main";
import ListPagination from "../components/ListPagination.jsx";

export async function loader() {
  const { newsIdList, maxPage } = await getNews(1);
  return { newsIdList, maxPage };
}

export default function Home() {
  const [newsIds, setNewsIds] = useState([]);
  const { newsIdList, maxPage } = useLoaderData();

  // 监测fetch是否结束，改变状态
  useEffect(() => {
    if (newsIdList != undefined) {
      setNewsIds(newsIdList);
    }
  }, [newsIdList]);

  return (
    <>
      <Header />

      <Main data={newsIds} />
      <ListPagination maxPage={maxPage} page={1} />
    </>
  );
}
