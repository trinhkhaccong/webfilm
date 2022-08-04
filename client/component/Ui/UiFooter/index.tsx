import * as React from 'react';
import UiSearch from '../UiSearch';
import UiMenu from '../UiMenu';
export interface UiFooterProps {
}

const UiFooter =(props:UiFooterProps)=> {
  return (
    <div >
        <div className='row' style={{backgroundColor:"#000",padding:15,textAlign:"center"}}>
            <div className='col' >1</div>
            <div className='col'>2</div>
            <div className='col'>3</div>
        </div>
    </div>
    
  );
}
export default UiFooter