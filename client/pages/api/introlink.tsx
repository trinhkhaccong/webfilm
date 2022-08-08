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
        query: 'SELECT year,director,cast,content,tb_filmintro.link as link,link_background,tb_filmintro.name as name,time,tb_quocgia.name as country FROM tb_filmintro ,tb_quocgia where tb_filmintro.? AND tb_filmintro.id_quocgia=tb_quocgia.id',
        values: [{ link: req.query.link }],
    });

    const result_theloai = await excuteQueryOb({
        query: 'SELECT group_concat(name) as theloai FROM `tb_theloai` WHERE id IN (SELECT id_theloai FROM tb_theloai_intro WHERE ?)',
        values: [{ root_link: req.query.link }],
    });
    let data = result
    data.theloai=result_theloai.theloai
    
    return res.status(200).json({ data: data })
}
