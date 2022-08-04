import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { json } from 'stream/consumers';
import UiCome from '../../component/Ui/UiCome';
import UiHead from '../../component/Ui/UiHead';
import styles from "../../styles/Home.module.scss"
import UiTrending from '../../component/Ui/UiTrending';
import UiFooter from '../../component/Ui/UiFooter';
import UiListFilm from '../../component/Ui/UiListFilm';
import UiInfoFilm from '../../component/Ui/UiInfoFilm';
export interface ListPostProps {
}

export default function ListPost(props: ListPostProps) {
  const router = useRouter()
  console.log("InfoPost id :", JSON.stringify(router.query));

  return (
    <div className={styles.main}>
      <Head>
        <title>InfoPost ID test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <UiHead />
        <div className='container'>
          <div className='row'>
            <div className='col-xl-9'>
              <UiListFilm title={"PHIM LẺ"} url="phim-thinh-hanh" />
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
