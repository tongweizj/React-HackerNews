import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";

export default function Main(prop) {
  const [topstoriesItems, setTopstoriesItems] = useState();

  // 监测fetch是否结束，生产item组件
  useEffect(() => {
    console.log("main:", prop.data);
    if (prop.data != undefined) {
      const liItems = prop.data.map((item, index) => {
        return <ListItem key={index} id={item} />;
      });
      setTopstoriesItems(liItems);
    }
  }, [prop]);
  return (
    <main className="max-w-4xl mx-auto">
      <ul className="max-w-4xl divide-y divide-slate-200">{topstoriesItems}</ul>
    </main>
  );
}
