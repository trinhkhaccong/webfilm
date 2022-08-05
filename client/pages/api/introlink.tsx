// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { excuteQueryOb } from "../../lib/db"

export default async function getServerSideProps(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const result = await excuteQueryOb({
        query: 'SELECT year,director,cast,content,tb_filmintro.link as link,link_background,tb_filmintro.name as name,time,tb_quocgia.name as country,tb_theloai.name as theloai FROM tb_filmintro ,tb_quocgia , tb_theloai where tb_filmintro.? AND tb_filmintro.id_quocgia=tb_quocgia.id AND tb_filmintro.id_theloai = tb_theloai.id',
        values: [{ link: req.query.link }],
    });
    return res.status(200).json({ data: result })
}
