import Head from 'next/head'

const Seo = ({title, description}) => {
    return (
        <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description}></meta>
      </Head>
      );
}
 
export default Seo;