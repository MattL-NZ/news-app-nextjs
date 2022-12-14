import NewsList from "../../(components)/News/NewsList";
import fetchNews from "../../../core/services/newsService";
import { categories } from "../../../core/constants/constants";

type NewsCategoryPageProps = {
  params: { category: Category };
};

export default async function NewsCategoryPage({
  params,
}: NewsCategoryPageProps) {
  const news: NewsResponse = await fetchNews(params.category);

  return (
    <div>
      <h1 className="headerTitle">{params.category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category }));
}
