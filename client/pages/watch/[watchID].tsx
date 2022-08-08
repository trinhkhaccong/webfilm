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
import {APIGetWatchFilm,GetIntroTheLoaiProp,APIGetEpisode,GetEpisodeProp,APIGetCarousel,APIGetIntroTheLoai,APIGetUpdateView} from "../../component/Func/APIGet"
import {GetWatchFilmProp} from "../../component/Func/APIGet"
import UiWatch from '../../component/Ui/UiWatch';

export interface WatchIDProps {
  data:any;
  data_wait:any;
  episode:any;
  carousel:any;
}

interface WatchInfoProp{
  name_vn:string;
  name_en:string;
  link_video_tm:string;
  link_video_sub:string;
  episode:number;
  content:string;
  link_background:string
}

interface EpisodeProp
{
  episode:any;
  root_link:any;
}
export default function WatchID(props: WatchIDProps) {
  const {data,data_wait,episode,carousel} = props
  const router = useRouter()
  const [check,setCheck] = React.useState(false)

  const GetIntro=async()=>{
    await setCheck(false)
    if(data)
    {
      await setCheck(true)

    }
  }
  React.useEffect(()=>{
    if(!router.isReady) return;    
    GetIntro()
  },[router.isReady])
  return (
    <div className={styles.main}>
      <Head>
        <title>{data.name_vn+ " - "+data.content.slice(0,100)}</title>
        <meta name="title" content={data.name_vn}/>
        <meta name="description" content={data.content} />
        <meta name="image" content={data.link_background}/>
        <link rel="icon" href="/favicon.ico" />
            <link
            rel="stylesheet"
            href="https://video-react.github.io/assets/video-react.css"
            />
      </Head>
      <main >
        <UiHead />
        <div className='container'>
          <div className='row'>
            <div className='col-xl-9'>
              <UiWatch datalink={data} episode={episode}/>
              <UiHomeFilm title={"Có thể bạn muốn xem "} url="phim-thinh-hanh" data={carousel}/>
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
    </div>
  );
}

export const getServerSideProps= async (context:any)=> { 
  let list = context.params.watchID.split("-tap-")
  let param_wait:GetIntroTheLoaiProp={id_theloai:21,limit:8,offset:0}
  let param:GetEpisodeProp={root_link:list[0]}
  let param_ep:EpisodeProp={root_link:list[0],episode:list[1]?list[1]:undefined}
  
    let ret_wait = await APIGetIntroTheLoai(param_wait)
    let res = await APIGetWatchFilm(param_ep)
    let ret_ep = await APIGetEpisode(param)    
    let ret = await APIGetCarousel()
    await APIGetUpdateView({link:list[0]})

    const data_wait= await ret_wait.data
    const episode = await ret_ep.data
    const carousel = await ret.data
    const data = await res.data
  return { props: { data,data_wait,episode,carousel } }
}
