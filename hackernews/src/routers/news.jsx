import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Main from "../components/Main";
import ItemListNav from "../components/ItemListNav";
// import useSWR from "swr";
import { fetchNews, getNews } from "../api/post";
// const fetcher = (url) => fetch(url).then((res) => res.json());

export async function loader({ params }) {
  // 根据page id 取数据
  const id = params.pageId;
  let data = await getNews(id);
  console.log("news", data);
  if (data.length == 0) {
    const temp = await fetchNews();
    console.log("temp:", temp);
    data = temp[id];
  }
  console.log("again:", data);
  return { data };
}
export default function News() {
  const [topstories, setTopstories] = useState([]);
  const { data } = useLoaderData();

  // 监测fetch是否结束，改变状态
  useEffect(() => {
    if (data != undefined) {
      setTopstories(data);
    }
  }, [data]);
  return (
    <>
      <Header />
      <ItemListNav />
      <Main data={topstories} />
    </>
  );
}
