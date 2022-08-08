import * as React from 'react';
import { Rate } from 'antd';
import { Card } from 'antd';

const gridStyle: React.CSSProperties = {
    width: "100%",
    textAlign: 'center',
    color: "#FFFFFF",
    backgroundColor: "#1a1a1a",
    cursor: "pointer"
};
interface ObjectFilm
{
    link: string;
    link_background: string;
    name: string;
    year:any;
}
export interface UiComeProps {
    title: String;
    data:ObjectFilm[];
}

const UiCome = (props: UiComeProps) => {
    const {data,title} = props
    const onClickInfo = (value:string) => {
        window.open("/info/"+value,"_parent")
      }
    return (
        <div >
            <div className='title-film' > {title}</div>
            <Card>
                {
                    data.map(value => (
                        <Card.Grid style={gridStyle} onClick={()=>onClickInfo(value.link)}>
                            <div className='d-flex'>
                                <div >
                                    <img className='image-home' alt={value.name+" - "+ value.link} width="100%" src={value.link_background} />
                                </div>
                                <div className='col-8 div-come' style={{ paddingLeft: 5 }}>
                                    <div >{value.name}</div>
                                    <div >{value.year}</div>
                                    <Rate allowHalf defaultValue={5} />
                                </div>
                            </div>

                        </Card.Grid>
                    ))
                }
            </Card>

        </div>
    );
}
export default UiCome