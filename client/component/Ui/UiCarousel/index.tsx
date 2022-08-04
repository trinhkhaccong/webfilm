import { useRouter } from 'next/router';
import * as React from 'react';
import {useEffect,useState} from "react"
import Slider from "react-slick";
import styles from "../../../styles/Home.module.scss"
interface ObjectFilm
{
    link: string;
    link_background: string;
    name: string
}
export interface UiCarouselProps {
  data:ObjectFilm[]
}

const UiCarousel =(props:UiCarouselProps)=> {
  const [position, setPosition] = useState(0);
  const router = useRouter()
  const onClick = (value:string) => {
    router.push({
      pathname: "info/"+value
    })
  }

    const renderSlides = () =>
    props.data?.map(value => (
      <label className={styles.slider} onClick={()=>onClick(value.link)}>
        <img alt="Tinh Hà Xán Lạn" className={styles.image} width='100%' src={value.link_background}/>
        <div className={styles.bottomCarou}>{value.name}</div>
        <div className={styles.topLeft}>Full HD</div>
        <div className={styles.play}></div>
      </label>
    ));

    useEffect(() => {
        setPosition(window.innerWidth)
    }, [position]);
  return (
    <div >
    <div style={{textAlign:'left',padding:10,color:"#ff8a00",fontWeight:'bold',fontSize:16}}>PHIM ĐỀ CỬ</div>
    <Slider
        dots={false}
        slidesToShow={(position>1100)?5:(position>765?3:2)}
        slidesToScroll={2}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
export default UiCarousel