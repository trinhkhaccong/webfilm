import * as React from 'react';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Card } from 'antd';
import { useRouter } from 'next/router';
import styles from "../../../styles/Home.module.scss"

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
interface ObjectFilm
{
    link: string;
    link_background: string;
    name: string
}
export interface UiListFilmProps {
    title: string;
    data:ObjectFilm[]
}

const UiListFilm = (props: UiListFilmProps) => {
    const [position, setPosition] = useState(0);
    const router = useRouter()

    useEffect(() => {
        setPosition(window.innerWidth)
    }, [position]);

    const onClickInfo = (value:string) => {
        window.open("/info/"+value,"_parent")
      }
    return (
        <div >
            <div className='d-flex justify-content-between mt-3'>
            <div className='title-film' > {props.title}</div>
            </div>
            <Card>
            {
                    props.data?.map(value => (
                        <Card.Grid style={position > 1100 ? gridStyle1 : (position > 765 ? gridStyle2 : gridStyle3)} onClick={()=>onClickInfo(value.link)}>
                            <div className={styles.home}>
                                <img alt={value.link+ " - " + value.name} className={styles.imageHome} src={value.link_background}/>
                                <div className={styles.bottomHome}>{value.name}</div>
                                <div className={styles.topLeftHome}>Full HD</div>
                                <div className={styles.play}></div>
                            </div>
                        </Card.Grid>
                    ))
                }
            </Card>
        </div>
    );
}

export default UiListFilm