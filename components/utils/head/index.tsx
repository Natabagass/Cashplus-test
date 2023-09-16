import Head from "next/head"

interface Props {
    siteTitle: string,
    title: string,
    description: string,
    imags: string,
    canonical: string
}

const HeadSeo = ({ siteTitle, title, description, canonical }: Props) => {
    return (
        <>
            <Head>
                <title>{`${siteTitle.replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')} | ${title}`}</title>
                <meta name="title" content={title} />
                <meta name="googlebot" content="all" />
                {canonical && <link rel="canonical" href={`https://infruit.vercel.app/${canonical}`} />}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://infruit.vercel.app/" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content={siteTitle} />
                {/* {imags !== null && <meta property="og:image" content={imags} />} */}
                <meta property="og:locale" content="id_ID" />
            </Head>
        </>
    )
}

export default HeadSeo;
