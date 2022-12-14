import fetchNews from "../../core/services/newsService";
import NewsList from "../(components)/News/NewsList";

type SearchProps = {
  searchParams?: { term: string };
};

export default async function SearchPage({ searchParams }: SearchProps) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}
