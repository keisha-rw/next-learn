import Head from 'next/head';
import { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { PdsPrimaryNavigation } from '@keisha/design-system-react';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PdsPrimaryNavigation variant="inverted" />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
