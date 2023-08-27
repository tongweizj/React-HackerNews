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
      <div className="grid grid-rows-2 grid-flow-row-dense grid-cols-12 gap-1">
        <div className="col-span-1 row-span-2 flex justify-center items-center">
          <div className="text-gray-800"> {topstorie.score}</div>
        </div>
        <div className="col-span-11 row-span-1 mt-1">
          <span className="text-sm text-gray-800">
            <a href={topstorie.url} target="_blank" rel="noopener noreferrer">
              {topstorie.title}
            </a>
            <span className="text-zinc-400 text-xs">
              {" "}
              ({topstorie.shortUrl})
            </span>
          </span>
        </div>
        <div className="row-span-1 col-span-11 text-xs text-zinc-400">
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
        </div>
      </div>
      // <div className="flex flex-row">
      //   <div className="basis-1/5">01</div>
      //   <div className="basis-4/5">
      //     02
      //     <div className="">03</div>
      //   </div>
      // </div>
    )
  );
}
