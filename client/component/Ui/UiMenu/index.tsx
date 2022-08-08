import * as React from 'react';
import Link from 'next/link';
import { APIGetTheLoai,APIGetCountry } from '../../Func/APIGet';
export interface UiMenuProps {
}

const UiMenu = (props: UiMenuProps) => {
  const [theloai,setTheLoai] = React.useState([{link:"",name:""}])
  const [country,setCountry] = React.useState([{link:"",name:""}])
  const GetMenu=async()=>{
    let ret = await APIGetTheLoai()
    let ret_country = await APIGetCountry()
    await setTheLoai(ret.data)
    await setCountry(ret_country.data)
  }
  React.useEffect(()=>{
    GetMenu()
  },[])
  return (
    <div style={{ color: "#FFFFFF"}} className="p-3">
      <div className="d-flex justify-content-between">
        <Link href="/"><div className=' menu'>Trang Chủ</div></Link>
        <Link href="/list/phim-le"><div className=' menu'>Phim Lẻ</div></Link>
        <Link href="/list/phim-bo"><div className=' menu'>Phim Bộ</div></Link>
        <div className='dropdown'>
          <span className=' menu'>Thể Loại</span>
          <div className="dropdown-content">
            {
             theloai.map((value,index) => (index%3===0) &&(
                <div className='row' style={{textAlign:"left"}}>
                  <a href ={"/genre/"+value.link} className='col dropdown-text'>
                    {value.name}
                  </a>
                  <a href ={"/genre/"+theloai[index+1]?.link} className='col dropdown-text'>
                    {theloai[index+1]?.name}
                  </a>
                  <a href ={"/genre/"+theloai[index+2]?.link} className='col dropdown-text'>
                    {theloai[index+2]?.name}
                  </a>
                </div>
              ))
            }
          </div>
        </div>
        <div className='dropdown'>
          <span className=' menu'>Quốc gia</span>
          <div className="dropdown-content">
          {
             country.map((value,index) => (index%2===0) &&(
                <div className='row' style={{textAlign:"left"}}>
                  <a href ={"/country/"+value.link} className='col dropdown-text'>
                    {value.name}
                  </a>
                  <a href ={"/country/"+country[index+1]?.link} className='col dropdown-text'>
                    {country[index+1]?.name}
                  </a>
                </div>
              ))
            }
          </div>
        </div>
        <Link href="/genre/phim-hoat-hinh"><div className=' menu'>Phim Hoạt Hình</div></Link>
        <Link href="/genre/phim-chieu-rap"><div className=' menu'>Phim Chiếu Rạp</div></Link>
      </div>

    </div>
  );
}

export default UiMenu