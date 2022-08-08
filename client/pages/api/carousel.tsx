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

    const result = await excuteQuery({
        query: 'SELECT link, link_background,name FROM tb_filmintro ORDER BY timestamp DESC LIMIT 16',
        values: [],
    });
    return res.status(200).json({ data: result })
}
