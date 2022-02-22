import NextHead from "next/head";

interface HeadProps {
  description: string;
  title: string;
}

export const Head = ({ description, title }: HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
