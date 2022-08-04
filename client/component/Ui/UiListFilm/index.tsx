import * as React from 'react';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Card } from 'antd';
import { useRouter } from 'next/router';
import styles from "../../../styles/Home.module.scss"
import { Pagination } from 'antd';

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
export interface UiListFilmProps {
    title: string;
    url:string;
}

const UiListFilm = (props: UiListFilmProps) => {
    const [position, setPosition] = useState(0);
    const router = useRouter()

    useEffect(() => {
        setPosition(window.innerWidth)
    }, [position]);

    const onClickInfo = (value:string) => {
        router.push({
          pathname: "info/"+value
        })
      }
    return (
        <div >
            <div className='d-flex justify-content-between mt-3'>
            <div className='title-film' > {props.title}</div>
            </div>
            <Card>
                {
                    ["1", "2", "3", "4", "5", "6", "7", "8","1", "2", "3", "4", "5", "6", "7", "8","4", "5", "6", "7","4", "5", "6", "7"].map(value => (
                        <Card.Grid style={position > 1100 ? gridStyle1 : (position > 765 ? gridStyle2 : gridStyle3)} onClick={()=>onClickInfo(value)}>
                            <div className={styles.home}>
                                <img alt="Tinh Hà Xán Lạn" className={styles.imageHome} width='100%' src="https://cdn1.kenhvn2.com/temp/thumb/360_480_858565_poster-tram-vun-huong-phai.jpeg"/>
                                <div className={styles.bottomHome}>Anh hùng tia chớp phần 8</div>
                                <div className={styles.topLeftHome}>Tập {value} - HD</div>
                                <div className={styles.play}></div>
                            </div>
                        </Card.Grid>
                    ))
                }
            </Card>
            <div style={{padding:10}}>
            <Pagination  defaultCurrent={1} total={200} pageSize={24}/>
            </div>
        </div>
    );
}

export default UiListFilm