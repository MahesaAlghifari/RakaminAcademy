// pages/books/[id].js
import { getBookById, getAllBookIds } from '../../modules/fetch';
import Books from '../../components/Books';

export async function getStaticPaths() {
  const paths = await getAllBookIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const bookData = await getBookById(id);

  return {
    props: {
      bookData,
    },
  };
}

export default function BookPage({ bookData }) {
  return <Books {...bookData} />;
}
