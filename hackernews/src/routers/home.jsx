import { useEffect, useState } from "react";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import { fetchNews } from "../api/post.js";
import "../App.css";
import Header from "../components/Header";
import Main from "../components/Main";
import ItemListNav from "../components/ItemListNav";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export async function loader() {
  const data = await fetchNews();
  console.log("loader data:", data);
  const id = 0;
  return { data, id };
}

export default function Home() {
  const [topstories, setTopstories] = useState([]);
  const { id, data } = useLoaderData();
  // TODO:如果本地没有数据,再下载
  // const { data, error, isLoading } = useSWR(
  //   "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
  //   fetcher
  // );
  // 监测fetch是否结束，改变状态
  useEffect(() => {
    console.log("watch data:", data);
    if (data != undefined) {
      // let newsIdList = [];
      // let small = [];
      // data.map((item, index) => {
      //   small.push(item);
      //   if (index % 20 == 19) {
      //     newsIdList.push(small);
      //     small = [];
      //   }
      // });
      console.log(data[0], data.length);
      setTopstories(data[0]);
    }
  }, [data]);

  console.log("page id:", id, topstories);
  return (
    <>
      <Header />
      <ItemListNav />
      <Main data={topstories} />
    </>
  );
}
