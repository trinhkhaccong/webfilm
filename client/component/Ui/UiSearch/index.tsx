import * as React from 'react';
import styles from '../../../styles/Home.module.scss'
import { SearchOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import { useRouter } from 'next/router';
export interface UiSearchProps {
}
const UiSearch = (props: UiSearchProps) => {
  const onEnter=()=>{
    window.open('/search/key',"_parent")
  }
  const OnChanger=async(search:any)=>{
    await localStorage.setItem('key',search)
  }
  React.useEffect(() => {
  }, [])
  return (
    <div className={styles.centered}>
      <Input placeholder="Tên tác giả, Tên phim" prefix={<SearchOutlined />} onChange={(e)=>OnChanger(e.target.value)} onPressEnter={onEnter} />
    </div>

  );
}
export default UiSearch