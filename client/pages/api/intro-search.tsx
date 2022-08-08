// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { excuteQuery,excuteQueryOb } from "../../lib/db"

export default async function getServerSideProps(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const s_search= '%'+req.query.s_search+'%'
    const LIMIT= req.query.limit?req.query.limit:24
    const OFFSET= req.query.offset?req.query.offset:0
    const result_total = await excuteQueryOb({
        query: 'SELECT COUNT(*) as total_count FROM tb_filmintro WHERE LOWER(name) LIKE ? OR LOWER(content) LIKE ?',
        values: [s_search,s_search],
    });
    const result = await excuteQuery({
        query: 'SELECT link, link_background,name FROM `tb_filmintro` WHERE LOWER(name) LIKE ? OR LOWER(content) LIKE ? ORDER BY timestamp DESC LIMIT '+LIMIT +' OFFSET '+OFFSET,
        values: [s_search,s_search],
    });
    return res.status(200).json({ data: result,count_total:result_total.total_count,key:req.query.s_search })
}
