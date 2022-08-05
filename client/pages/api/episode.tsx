// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { excuteQuery } from "../../lib/db"

export default async function getServerSideProps(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    let ob = {
        root_link: req.query.root_link,
    }
    const result = await excuteQuery({
        query: 'SELECT episode,root_link FROM tb_film where ?',
        values: [ob],
    });
    return res.status(200).json({ data: result })
}
