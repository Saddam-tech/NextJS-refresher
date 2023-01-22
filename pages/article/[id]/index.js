// import { useRouter } from "next/router"; // another way of accessing the URL
import Link from "next/link";
import Meta from "@/components/Meta";
import { server } from "@/config";

const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <div>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </div>
  );
};

// export const getStaticProps = async (context) => {
//   const { id } = context.params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };
export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`${server}/api/articles/${id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export default Article;
