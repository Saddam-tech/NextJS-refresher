import ArticleItem from "./ArticleItem";
const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => (
        <ArticleItem key={i} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
