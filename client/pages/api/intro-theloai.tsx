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
        id_theloai: req.query.id_theloai
    }
    let limit = {
        limit: req.query.limit
    }
    let ofset={
        limit: req.query.limit
    }
    const result = await excuteQuery({
        query: 'SELECT year, link, link_background,name FROM `tb_filmintro` WHERE link IN (SELECT root_link FROM `tb_theloai_intro` WHERE ?) ORDER BY timestamp LIMIT 8',
        values: [ob],
    });
    return res.status(200).json({ data: result })
}
