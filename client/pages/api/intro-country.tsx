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

    let ob = {
        link: req.query.link
    }
    const LIMIT= req.query.limit?req.query.limit:8
    const OFFSET= req.query.offset?req.query.offset:0

    const result_title = await excuteQueryOb({
        query: 'SELECT name FROM tb_quocgia WHERE ?',
        values: [ob],
    });

    const result_total = await excuteQueryOb({
        query: 'SELECT COUNT(*) as total_count FROM tb_filmintro WHERE id_quocgia IN (SELECT id FROM tb_quocgia WHERE ?)',
        values: [ob],
    });
    const result = await excuteQuery({
        query: 'SELECT link, link_background,name FROM `tb_filmintro` WHERE id_quocgia IN (SELECT id FROM tb_quocgia WHERE ?) ORDER BY timestamp DESC LIMIT '+LIMIT +' OFFSET '+OFFSET,
        values: [ob],
    });
    return res.status(200).json({ data: result ,total_count:result_total.total_count,title:result_title.name})
}
