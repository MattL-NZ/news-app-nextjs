import { categories } from "../core/constants/constants";
import { NewsResponse } from "../core/types/types";
import fetchNews from "../core/services/newsService";

export default async function HomePage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      {/*  News List Component  */}
      <h1>HomePage</h1>
    </div>
  );
}
