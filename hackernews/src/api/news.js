import localforage from "localforage";

async function fetchUrl(url) {
  const response = await fetch(url);
  const fetchData = await response.json();
  return fetchData;
}
async function fetchAllNews() {
  const fetchData = await fetchUrl(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  let newsIdList = [];
  let unit = [];
  fetchData.map((item, index) => {
    unit.push(item);
    if (index % 20 == 19) {
      newsIdList.push(unit);
      unit = [];
    }
  });
  localforage.setItem("newsIDList", newsIdList);
  return newsIdList;
}

export async function getNews(id) {
  let newsIdList = [];
  newsIdList = await localforage.getItem("newsIDList");
  if (newsIdList == null) {
    const temp = await fetchAllNews();
    newsIdList = temp;
  }
  return { newsIdList: newsIdList[id - 1], maxPage: newsIdList.length };
}

export async function getNew(newId) {
  const fetchData = await fetchUrl(
    `https://hacker-news.firebaseio.com/v0/item/${newId}.json?print=pretty`
  );
  // console.log(fetchData);
  return fetchData;
}
