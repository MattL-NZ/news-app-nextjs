import { gql } from "graphql-request";
import sortNewsByImages from "../helpers/sortNewsByImages";

export default async function fetchNews(
  category?: Category | string,
  keywords?: string | null,
  isDynamic?: boolean
) {
  // Graph Query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          total
          offset
        }
      }
    }
  `;
  // Fetch function with Next.JS 13 caching...
  const res = await fetch(
    "https://nianzishan.stepzen.net/api/jittery-robin/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: "1c4a389ba0086d2b8a11ece8efb17202",
          categories: category!.toString(),
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();
  return sortNewsByImages(newsResponse.data.myQuery);
}
