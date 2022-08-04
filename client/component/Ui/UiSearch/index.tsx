import * as React from 'react';
import styles from '../../../styles/Home.module.scss'
import { SearchOutlined} from '@ant-design/icons';
import { Input } from 'antd';
export interface UiSearchProps {
}

const UiSearch = (props: UiSearchProps) => {
  return (
    <div className={styles.centered}>
      <Input placeholder="Tên tác giả, Tên phim" prefix={<SearchOutlined />} />
    </div>

  );
}
export default UiSearch