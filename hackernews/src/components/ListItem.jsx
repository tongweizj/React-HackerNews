import { useEffect, useState } from "react";
import { convertUrltoHost } from "../utils/tools";
import { getNew } from "../api/news";

export function ListItem(prop) {
  const [topstorie, setTopstorie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNew(prop.id);
      setTopstorie(data);
    };

    fetchData().catch(console.error);
  }, []);
  useEffect(() => {
    if (topstorie.shortUrl == undefined && topstorie.url) {
      let shortUrl = topstorie.url;
      if (topstorie.url != undefined) {
        shortUrl = convertUrltoHost(topstorie.url);
      }
      setTopstorie({ ...topstorie, shortUrl: shortUrl });
      setIsLoading(false);
    }
  }, [topstorie]);

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
