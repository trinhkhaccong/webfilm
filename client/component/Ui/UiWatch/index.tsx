import * as React from 'react';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Card } from 'antd';
import { useRouter } from 'next/router';
import styles from "../../../styles/Info.module.scss"
import { Player } from 'video-react';
import Head from 'next/head';

const gridStyle1: React.CSSProperties = {
    width: "25%",
    textAlign: 'center',
    color: "#FFFFFF",
    backgroundColor:"#1a1a1a"
};

const gridStyle2: React.CSSProperties = {
    width: "33%",
    textAlign: 'center',
    color: "#FFFFFF",
    backgroundColor:"#1a1a1a"

};

const gridStyle3: React.CSSProperties = {
    width: "50%",
    textAlign: 'center',
    color: "#FFFFFF",
    backgroundColor:"#1a1a1a"

};
interface WatchInfoProp{
    name_vn:string;
    name_en:string;
    link_video_tm:string;
    link_video_sub:string;
    episode:number;
    content:string;
    link_background:string
  }

export interface UiWatchProps {
    episode:EpisodeProp[];
    datalink:WatchInfoProp;
}

interface EpisodeProp
{
  episode:number;
  root_link:string;
}
const UiWatch = (props: UiWatchProps) => {
    const [position, setPosition] = useState(0);
    const router = useRouter()
    
    useEffect(() => {
        setPosition(window.innerWidth)
    }, [position]);

    const onClick =(value:string,episode:number)=>{
        window.open("/watch/"+value+"-tap-"+episode,"_parent")
    }
    React.useEffect(()=>{
        if(!router.isReady) return;
      },[router.isReady,props])
    return (
        <div >
            <div className='d-flex justify-content-between mt-3'>
            </div>
                <div>
                    <div className='title-film' >Phim {props.datalink?.name_vn} - tập {props.datalink?.episode}</div>
                    <Player playsInline poster={props.datalink?.link_background}
                    src={props.datalink?.link_video_tm}/>
                    <div className='d-flex flex-wrap'>
                        <div  className='title-film'>Danh sách tập :</div>
                        {props.episode?.map(value=>(
                                <button type="button" className={value.episode===props.datalink?.episode?"btn btn-primary btn-sm m-2":"btn btn-secondary btn-sm m-2"} onClick={()=>onClick(value.root_link,value.episode)}> Tập {value.episode}</button>
                        ))}
                    </div>
                    <div className='title-film' > Nội dung phim {props.datalink?.name_vn}</div>
                    <div style={{color:"#FFFFFF",textAlign:'left'}}>
                    {props.datalink?.content}
                    </div>
            </div>

        </div>
    );
}
export default UiWatch