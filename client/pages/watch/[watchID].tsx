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
import {APIGetWatchFilm,APIGetIntro,APIGetEpisode,GetEpisodeProp} from "../../component/Func/APIGet"
import {GetWatchFilmProp} from "../../component/Func/APIGet"
import UiWatch from '../../component/Ui/UiWatch';

export interface WatchIDProps {
  data:any;
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

  const router = useRouter()
  const [data,setData] = React.useState([])
  const [check,setCheck] = React.useState(false)
  const [episode,setEpisode] = React.useState<EpisodeProp[]>([])

  const GetIntro=async()=>{
    await setCheck(false)
    var list:string[] = router.query.watchID.split("-tap-")
    let param:GetEpisodeProp={root_link:list[0]}
    let ret_ep = await APIGetEpisode(param)    
    await setEpisode(ret_ep.data)
    let ret = await APIGetIntro()
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
        <title>{props.data.name_vn+ " - "+props.data.content.slice(0,100)}</title>
        <meta name="title" content={props.data.name_vn}/>
        <meta name="description" content={props.data.content} />
        <meta name="image" content={props.data.link_background}/>
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
              <UiWatch datalink={props.data} episode={episode}/>
              <UiHomeFilm title={"Có thể bạn muốn xem "} url="phim-thinh-hanh" data={data}/>
            </div>
            <div className='col-lg row'>
              <div className='col-md'>
                <UiCome title={"PHIM SẮP CHIẾU"} />
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

  let param_ep:EpisodeProp={root_link:list[0],episode:list[1]?list[1]:undefined}
  let res = await APIGetWatchFilm(param_ep)
  const data = await res.data
  return { props: { data } }
}
