import * as React from 'react';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Card } from 'antd';
import { useRouter } from 'next/router';
import styles from "../../../styles/Info.module.scss"

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
    
export interface UiInfoFilmProps {
    ret_link:DataLinkProp;
}

const UiInfoFilm = (props: UiInfoFilmProps) => {
    const [position, setPosition] = useState(0);
    const router = useRouter()
    const {
        director,
        cast,
        content,
        country,
        theloai,
        link,
        link_background,
        name,
        time,
        year
    } = props.ret_link

    useEffect(() => {
        setPosition(window.innerWidth)
    }, [position]);
    const onClick =(value:string)=>{
        router.push({
            pathname: "../watch/[watchID]",
            query: {
                watchID: value
            }
          })
    }
    
    return (
        <div >
            <div className='d-flex justify-content-between mt-3'>
            </div>
            <div className='row'>
                <div className='col-md-6 col-xl-4 col-lg-4'>
                        <div className={styles.home}>
                                <img alt={link + " - " +name} className={styles.imageHome} width='100%' src={link_background}/>
                                <div className={styles.bottomHome} onClick={()=>onClick(link)}>Xem phim</div>
                                <div className={styles.topLeftHome}>Full HD</div>
                                <div className={styles.play} onClick={()=>onClick(link)}></div>
                        </div>
                    </div>
                        <div className='col-md-6 col-xl-8 col-lg-8' style={{overflow:'auto',textAlign:"left"}}>
                            <div className='title-info-film' > {name}</div>
                            <div className='d-flex'>
                                <h6 style={{color:"#ff8a00"}}  className='col-md-3'>Đạo diễn:</h6>
                                <p style={{color:"#FFFFFF"}}>{director}</p>
                            </div>
                            <div className='d-flex'>
                                <h6 style={{color:"#ff8a00"}} className='col-md-3'>Diễn viên:</h6>
                                <p style={{color:"#FFFFFF"}}>{cast}</p>
                            </div>
                            <div className='d-flex'>
                                <h6 style={{color:"#ff8a00"}} className='col-md-3'>Thể Loại:</h6>
                                <p style={{color:"#FFFFFF"}}>{theloai}</p>
                            </div>
                            <div className='d-flex'>
                                <h6 style={{color:"#ff8a00"}} className='col-md-3'>Quốc Gia:</h6>
                                <p style={{color:"#FFFFFF"}}>{country}</p>
                            </div>
                            <div className='d-flex'>
                                <h6 style={{color:"#ff8a00"}} className='col-md-3'>Năm sản xuất:</h6>
                                <p style={{color:"#FFFFFF"}}>{year}</p>
                            </div>
                            <div>
                                <h6 style={{color:"#ff8a00"}}>Nội dung phim {name}</h6>
                                <p style={{color:"#FFFFFF"}}>{content}</p>
                            </div>
                           
                    </div>
            </div>

        </div>
    );
}
export default UiInfoFilm