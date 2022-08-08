import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { json } from 'stream/consumers';
import UiCome from '../../component/Ui/UiCome';
import UiHead from '../../component/Ui/UiHead';
import styles from "../../styles/Home.module.scss"
import UiTrending from '../../component/Ui/UiTrending';
import UiFooter from '../../component/Ui/UiFooter';
import UiHomeFilm from '../../component/Ui/UiHomeFilm';
import UiInfoFilm from '../../component/Ui/UiInfoFilm';
import {APIGetCarousel,APIGetIntroLink,GetIntroTheLoaiProp,APIGetIntroTheLoai,APIGetUpdateView} from "../../component/Func/APIGet"
import UiReload from '../../component/Ui/UiReload';
export interface InfoIDPostProps {
  data:any;
  data_wait:any;
}

export interface IntroLinkProp
{
    link:any;
}
export interface DataLinkProp {
year:number;
director:string;
cast:string;
content:string;
link:string;
link_background:string;
name:string;
time:string;
country:string;
theloai:string;
}
export default function InfoIDPost(props: InfoIDPostProps) {
  const {data_wait} = props
  const [data,setData] = React.useState([])
  const [datalink,setDataLink] = React.useState<DataLinkProp| any>();
  const [check,setCheck] = React.useState(false)
  const router = useRouter()  

  const GetIntro=async()=>{
    await setCheck(false)
    await setDataLink(props.data)
    let ret = await APIGetCarousel()
    await setData(ret.data)
    await setCheck(true)

  }
  React.useEffect(()=>{
    if(!router.isReady) return;
    GetIntro()
  },[router.isReady])
  return (
    <div className={styles.main}>
      <Head>
        <title>Thông tin phim - {props.data.name}</title>
        <meta name="title" content={props.data.name}/>
        <meta name="description" content={props.data.content} />
        <meta name="image" content={props.data.link_background}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        check && <main >
        <UiHead />
        <div className='container'>
          <div className='row'>
            <div className='col-xl-9'>
              <UiInfoFilm ret_link={props.data}/>
              <UiHomeFilm title={"PHIM THỊNH HÀNH"} url="phim-thinh-hanh" data={data}/>
            </div>
            <div className='col-lg row'>
              <div className='col-md'>
                <UiCome title={"PHIM SẮP CHIẾU"} data={data_wait}/>
              </div>
              <div className='col-md'>
                <UiTrending title={"TRENDING"} />
              </div>
            </div>
          </div>
          <UiFooter />
        </div>
      </main>
      }
      {
        !check && <UiReload/>
      }
      
    </div>
  );
}
export const getServerSideProps= async (context:any)=> { 
  let param_wait:GetIntroTheLoaiProp={id_theloai:21,limit:8,offset:0}
  let ret_wait = await APIGetIntroTheLoai(param_wait)
  const data_wait= await ret_wait.data
  let param_ep:IntroLinkProp={link: context.params.InfoID }
  await APIGetUpdateView(param_ep)
  let res = await APIGetIntroLink(param_ep)
  const data = await res.data
  return { props: { data ,data_wait} }
}
