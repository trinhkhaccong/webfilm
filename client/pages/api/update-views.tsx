//
import type { NextApiRequest, NextApiResponse, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { excuteQuery } from "../../lib/db"
import moment from 'moment';
export default async function getServerSideProps(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    let ob = {
        root_link: req.query.link
    }
    let date_now={
        date:moment(new Date()).format('YYYY-MM-DD')
    }
    //lấy date today
    //check xem hôm nay đã update chưa, nếu có thì update, còn chưa có thì insearch
    
    let result_check:any=[]
    result_check = await excuteQuery({
        query: 'SELECT * FROM tb_view WHERE ? AND ?',
        values: [date_now,ob],
    });
    if(result_check.length>0)
    {
        const result = await excuteQuery({
            query: 'UPDATE tb_view SET views=views+1 WHERE ? AND ?',
            values: [date_now,ob],
        });
        return res.status(200).json({data:result})
    }
    else
    {
        const result = await excuteQuery({
            query: 'INSERT INTO tb_view (root_link,date,views) VALUE (?,curdate(),1)',
            values: [req.query.link],
        });
        return res.status(200).json({data:result})
    }
    
    
}
