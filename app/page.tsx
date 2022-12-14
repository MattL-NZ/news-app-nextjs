import { categories } from "../core/constants/constants";
import fetchNews from "../core/services/newsService";
import NewsList from "../components/News/NewsList";
import response from "../response.json";
import sortNewsByImages from "../core/helpers/sortNewsByImages";

export default async function HomePage() {
  const categoriesJoined = categories.join(",");
  const news: NewsResponse = response || (await fetchNews(categoriesJoined));
  const newsFormatted = sortNewsByImages(news);
  return (
    <div>
      {/*  News List Component  */}
      <NewsList news={newsFormatted} />
    </div>
  );
}
