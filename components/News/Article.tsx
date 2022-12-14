import ReadMoreButton from "../Buttons/ReadMoreButton";
import LiveTimestamp from "../LiveTimeStamp/LiveTimestamp";
import Image from "next/image";

type ArticlePageProps = {
  article: Article;
};

export default function Article({ article }: ArticlePageProps) {
  return (
    <article
      className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg
    hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out"
    >
      {article.image && (
        <Image
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
          src={article.image}
          alt={article.title}
          width="56"
          height="56"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex1 flex flex-col p-5">
          <h2 className="font-serif font-bold">{article.title}</h2>
          <section className="flex-1 mt-2">
            <p className="text-xs line-clamp-2">{article.description}</p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article.source} -</p>
            <p>
              <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>
        {/*  Read More Button  */}
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}
