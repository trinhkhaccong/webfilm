import * as React from 'react';
import UiSearch from '../UiSearch';
import UiMenu from '../UiMenu';
import {MenuUnfoldOutlined} from "@ant-design/icons"
import UiMenuMobile from '../UiMenu/MenuMobile';
export interface UiHeadProps {
}

const UiHead = (props: UiHeadProps) => {
  const [position, setPosition] = React.useState(true);
  const [openMenu, setOpenMenu] = React.useState(false);
  const GetWidth=async()=>{
    await setPosition(window.innerWidth > 1200 ? false : true)
  }
  React.useEffect(() => {    
    GetWidth()
  }, [position,props,openMenu]);

  return (
    <div>
        <UiMenuMobile openMenu={openMenu} setCloseMenu={()=>setOpenMenu(false)}/>
      {
        !position && <div className='d-flex justify-content-around border-menu' style={{ backgroundColor: "#000", padding: 15 }}>
          <div className='col-md-2' style={{ color: "#FFFFFF" }}>Logo</div>
          <div className='col'><UiMenu /></div>
          <div className='col-md-3'><UiSearch /></div>
        </div>
      }
      {
        position && <div className='d-flex justify-content-around border-menu' style={{ backgroundColor: "#000", padding: 15 }}>
          <div className='col-md-1'><MenuUnfoldOutlined style={{color:"#FFFFFF",fontSize:30,cursor:"pointer",fontWeight:'bold'}} onClick={async()=>await setOpenMenu(true)}/></div>
          <div className='col-md-3' style={{ color: "#FFFFFF",fontWeight:'bold' }}>Logo để đây  </div>
          <div className='col-md'><UiSearch /></div>
        </div>
      }
    </div>

  );
}
export default UiHead