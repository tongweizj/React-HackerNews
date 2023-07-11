import localforage from "localforage";
export async function fetchNews() {
  // const { data, error, isLoading } = useSWR(
  //   "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
  //   fetcher
  // );
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     // setUsers(data)
  //   });
  const data = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  console.log(data);
  // return contacts.sort(sortBy("last", "createdAt"));
  // return localforage.setItem("news", data);
}

// export async function getNews() {
//   return localforage.getItem("news");
// }
