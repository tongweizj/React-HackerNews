import localforage from "localforage";
export async function fetchNews() {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  const data = await response.json();
  let newsIdList = [];
  let small = [];
  data.map((item, index) => {
    small.push(item);
    if (index % 20 == 19) {
      newsIdList.push(small);
      small = [];
    }
  });
  console.log("fetchnews:", newsIdList);
  localforage.setItem("news", newsIdList);
  return newsIdList;
}
// export async function fetchNews() {
//   fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       let newsIdList = [];
//       let small = [];
//       data.map((item, index) => {
//         small.push(item);
//         if (index % 20 == 19) {
//           newsIdList.push(small);
//           small = [];
//         }
//       });
//       console.log(newsIdList[0], newsIdList.length);
//       localforage.setItem("news", newsIdList);
//       return newsIdList;
//     });
// }

export async function getNews(id) {
  const data = await localforage.getItem("news");
  console.log("getNews:", data);
  return data !== null ? data[id] : [];
}
