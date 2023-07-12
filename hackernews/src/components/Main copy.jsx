import { useEffect, useState } from "react";
import useSWR from "swr";

import { ListItem } from "./ListItem";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Main() {
  const [topstories, setTopstories] = useState([]);
  const [fetchFinished, setFetchFinished] = useState(false);
  const [topstoriesItems, setTopstoriesItems] = useState();

  const { data, error, isLoading } = useSWR(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
    fetcher
  );
  // 监测fetch是否结束，改变状态
  useEffect(() => {
    if (!isLoading) {
      setTopstories(data);
      setFetchFinished(!isLoading);
    }
  }, [isLoading]);

  // 监测fetch是否结束，生产item组件
  useEffect(() => {
    if (fetchFinished && topstories != [] && topstories != undefined) {
      const liItems = topstories.map((item, index) => {
        return <ListItem key={index} id={item} />;
      });
      setTopstoriesItems(liItems);
    }
  }, [fetchFinished]);
  return (
    <main className="max-w-4xl mx-auto">
      <ul className="max-w-4xl divide-y divide-slate-200">{topstoriesItems}</ul>
    </main>
  );
}
