import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export function ListItem(prop) {
  const [topstorie, setTopstorie] = useState({});

  const { data, error, isLoading } = useSWR(
    `https://hacker-news.firebaseio.com/v0/item/${prop.id}.json?print=pretty`,
    fetcher
  );
  useEffect(() => {
    if (!isLoading) {
      let shortUrl = data.url;
      if (data.url != undefined) {
        shortUrl = host(data.url);
      }
      setTopstorie({ ...data, shortUrl: shortUrl });
    }
  }, [isLoading]);
  function host(url) {
    const host = url
      .replace(/^https?:\/\//, "")
      .replace(/\/.*$/, "")
      .replace("?id=", "/");
    const parts = host.split(".").slice(-3);
    if (parts[0] === "www") {
      parts.shift();
    }
    return parts.join(".");
  }
  return (
    isLoading === false && (
      <li className="grid grid-rows-2 grid-flow-col gap-1">
        <span className="row-span-2"> {topstorie.score}</span>
        <span className="col-span-11">
          <span>
            <a href={topstorie.url} target="_blank" rel="noopener noreferrer">
              {topstorie.title}
            </a>
            <span className="text-zinc-400 text-sm">
              {" "}
              ({topstorie.shortUrl})
            </span>
          </span>
        </span>
        <span className="row-span-1 col-span-11 text-sm text-zinc-400">
          {" "}
          <span className="by">
            {" "}
            by{" "}
            <a href="/user/rthomas6" className="">
              {topstorie.by}
            </a>
          </span>
          <span className="time"> {topstorie.time} </span> |{" "}
          <span className="comments-link">
            <a href="/item/36654471" className="">
              {topstorie.descendants} comments
            </a>
          </span>
        </span>
      </li>
    )
  );
}
