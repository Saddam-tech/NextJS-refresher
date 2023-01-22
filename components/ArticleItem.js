import Link from "next/link";
// import { useRouter } from "next/router";

const ArticleItem = ({ article }) => {
  //   const router = useRouter();
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      {/* // <button onClick={() => router.replace(`/article/${article.id}`)}> */}
      <h3>{article.title} &rarr;</h3>
      <p>{article.body}</p>
      {/* </button> */}
    </Link>
  );
};

export default ArticleItem;
