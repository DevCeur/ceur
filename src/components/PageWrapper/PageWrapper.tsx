import Head from "next/head";

interface IPageWrapper {
  title: string;
}

const PageWrapper: React.FC<IPageWrapper> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Carlos U. - {title}</title>
      </Head>
      {children}
    </>
  );
};

export default PageWrapper;
