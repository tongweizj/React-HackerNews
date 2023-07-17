import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getNews } from "../api/news";

import Header from "../components/Header";
import Main from "../components/Main";
import ListPagination from "../components/ListPagination.jsx";

export async function loader({ params }) {
  const id = params.pageId;
  let { newsIdList, maxPage } = await getNews(id);
  return { newsIdList, maxPage, id };
}
export default function News() {
  const [newsIds, setNewsIds] = useState([]);
  const { newsIdList, maxPage, id } = useLoaderData();

  useEffect(() => {
    if (newsIdList != undefined) {
      setNewsIds(newsIdList);
    }
  }, [newsIdList]);
  return (
    <>
      <Header />

      <Main data={newsIds} />
      <ListPagination maxPage={maxPage} page={id} />
    </>
  );
}
