import * as React from 'react';
import {CloseOutlined } from "@ant-design/icons"
import Link from 'next/link';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import { useRouter } from 'next/router';
import { APIGetTheLoai,APIGetCountry } from '../../Func/APIGet';
type MenuItem = Required<MenuProps>['items'][number];

const getItem=(
    label: React.ReactNode,
    key?: React.Key | null,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem =>{
    return {
      key,
      children,
      label,
      type,
    } as MenuItem;
  }
  
  
  
export interface UiMenuMobileProps {
    openMenu:Boolean;
    setCloseMenu:Function;
}

export interface UiMenuMap {
  name:string;
  link:string;
}
const UiMenuMobile = (props: UiMenuMobileProps) => {
    const router = useRouter()
    const [current, setCurrent] = React.useState('1');
    const [theloai,setTheLoai] = React.useState([{link:"",name:""}])
    const [country,setCountry] = React.useState([{link:"",name:""}])
    const [items,setItem] = React.useState<MenuItem[]>([])

    const GetMenu=async()=>{
      let ret = await APIGetTheLoai()
      let ret_country = await APIGetCountry()
      let theloai:MenuItem[]=[]
      let contry:MenuItem[]=[]
     ret.data.map((value: UiMenuMap)=>{
      theloai.push(getItem(<Link href={"/genre/"+value.link}>{value.name}</Link>,value.link))
     })

     ret_country.data.map((value: UiMenuMap)=>{
      contry.push(getItem(<Link href={"/country/"+value.link}>{value.name}</Link>,value.link))
     })

      const items: MenuItem[] = [
        getItem(<Link href="/">Trang Chủ</Link>, '/'),
        getItem(<Link href="/list/phim-le">Phim Lẻ</Link>, 'phim-le'),
        getItem(<Link href="/list/phim-bo">Phim Bộ</Link>, 'phim-bo'),
        getItem('Thể Loại', 'the-loai', theloai),
        getItem('Quốc gia', 'country', contry),
        getItem(<Link href="/list/phim-hoat-hinh">Phim Hoạt Hình</Link>,'phim-hoat-hinh'),
        getItem(<Link href="/list/phim-chieu-rap">Phim Chiếu Rạp</Link>, 'phim-chieu-rap'),
      ];
      await setItem(items)
    }
    React.useEffect(()=>{
    },[])

    const onClick: MenuProps['onClick'] = e => {
        console.log(e.key);
        setCurrent(e.key);
        props.setCloseMenu(false)
      };
    React.useEffect(()=>{
      GetMenu()
    },[props])
  return (
    <div className={props.openMenu?'menu_desktop':'menu_desktop_mobile'}>
      <div className="justify-content-between">
        <div className='d-flex justify-content-between border-menu' style={{alignItems:"center",padding:15}}><div style={{color:"#FFFFFF",fontWeight:'bold'}}>Logo để đây</div><CloseOutlined style={{fontSize:30,color:"orange"}} onClick={()=>props.setCloseMenu(false)}/></div>
        <Menu
        theme={'dark'}
        onClick={onClick}
        style={{ width: 300 }}
        defaultOpenKeys={['1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
      </div>

    </div>
  );
}
export default UiMenuMobile