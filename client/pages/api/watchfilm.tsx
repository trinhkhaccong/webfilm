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
    let ob = {
        root_link: req.query.root_link,
    }
    let obep = {
        episode: req.query.episode === undefined ? 1 : req.query.episode
    }
    const result = await excuteQueryOb({
        query: 'SELECT  name_vn,name_en,link_video_tm,link_video_sub,episode,content,link_background FROM tb_film, tb_filmintro where tb_film.id_filmintro = tb_filmintro.id AND ? AND ?',
        values: [ob, obep],
    });
    return res.status(200).json({ data: result })
}
