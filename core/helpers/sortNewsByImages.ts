export default function sortNewsByImages(news: NewsResponse) {
  // console.log("NEWS =====> " + news);
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);
  return {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  };
}
