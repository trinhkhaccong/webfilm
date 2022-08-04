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

export interface UiComeProps {
    title: String;
}

const UiCome = (props: UiComeProps) => {
    return (
        <div >
            <div className='title-film' > {props.title}</div>
            <Card>
                {
                    [1, 2, 3, 4, 5].map(value => (
                        <Card.Grid style={gridStyle}>
                            <div className='d-flex'>
                                <div >
                                    <img className='image-home' alt="Tinh Hà Xán Lạn" width="100%" src="https://cdn1.kenhvn2.com/temp/thumb/360_480_913137_dau-la-dai-luc.jpg" />

                                </div>
                                <div className='col-8 div-come' style={{ paddingLeft: 5 }}>
                                    <div >Anh hùng tia chớp phần 8</div>
                                    <div >2019</div>
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