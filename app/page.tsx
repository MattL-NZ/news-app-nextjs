import { categories } from "../core/constants/constants";
import fetchNews from "../core/services/newsService";

export default async function HomePage() {
  const categoriesJoined = categories.join(",")
  const news: NewsResponse = await fetchNews(categoriesJoined);
  return (
    <div>
      {/*  News List Component  */}
      <h1>HomePage</h1>
    </div>
  );
}
