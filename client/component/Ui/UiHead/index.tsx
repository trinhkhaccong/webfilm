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
    await setPosition(window.innerWidth > 999 ? false : true)
  }
  React.useEffect(() => {    
    GetWidth()
  }, [position,props,openMenu]);

  return (
    <div className='border-menu' style={{ backgroundColor: "rgba(0,0,0,0.3)"}}>
      <div className='container'>

        <UiMenuMobile openMenu={openMenu} setCloseMenu={()=>setOpenMenu(false)}/>
      {
        !position && 
          
          <div>
              <div className='d-flex p-5' style={{backgroundColor: "#1a1a1a"}}>
                <div className='col-md-3' style={{ color: "#FFFFFF",fontWeight:'bold' }}>Logo để đây  </div>
                <div className='col-md-8'><UiSearch /></div>
              </div>
            <UiMenu />
          </div>
        
      }
      {
        position && <div className='d-flex justify-content-around' style={{ backgroundColor: "#000", padding: 15 }}>
          <div className='col-md-1'><MenuUnfoldOutlined style={{color:"#FFFFFF",fontSize:30,cursor:"pointer",fontWeight:'bold'}} onClick={async()=>await setOpenMenu(true)}/></div>
          <div className='col-md-3' style={{ color: "#FFFFFF",fontWeight:'bold' }}>Logo để đây  </div>
          <div className='col-md'><UiSearch /></div>
        </div>
      }
            </div>

    </div>

  );
}
export default UiHead