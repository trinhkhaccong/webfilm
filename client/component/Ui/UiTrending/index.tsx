import * as React from 'react';
import { Rate } from 'antd';
import { Card } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useState } from 'react';

const { TabPane } = Tabs;



const gridStyle: React.CSSProperties = {
    width: "100%",
    textAlign: 'center',
    color: "#FFFFFF",
    backgroundColor: "#1a1a1a",
    cursor: "pointer"
};

export interface UiTrendingProps {

    title: String;
}

const UiTrending = (props: UiTrendingProps) => {
    const [size, setSize] = useState<SizeType>('small');
    const onChange = (e: RadioChangeEvent) => {
        setSize(e.target.value);
    };
    return (
        <div >
            <div className='title-film' > {props.title}</div>
            <div>


                <Tabs defaultActiveKey="1" type="card" size={size}>
                    <TabPane tab="Ngày" key="1">
                        <Card>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => (
                                    <Card.Grid style={gridStyle}>
                                        <div className='row div-trend'>
                                            <div className='col'>
                                                <div className='trend-icon'>{index + 1}</div>
                                            </div>
                                            <div className='col-10'>
                                                <div > Dấu ấn rồng thiêng</div>
                                                <div className='centered-left-view'>{(index + 1) * 10} lượt xem</div>
                                            </div>
                                        </div>

                                    </Card.Grid>
                                ))
                            }
                        </Card>
                    </TabPane>
                    <TabPane tab="Tuần" key="2">
                        <Card>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => (
                                    <Card.Grid style={gridStyle}>
                                        <div className='row div-trend'>
                                            <div className='col'>
                                                <div className='trend-icon'>{index + 1}</div>
                                            </div>
                                            <div className='col-10'>
                                                <div > Thế giới khủng long</div>
                                                <div className='centered-left-view'>{(index + 1) * 10} lượt xem</div>
                                            </div>
                                        </div>

                                    </Card.Grid>
                                ))
                            }
                        </Card>
                    </TabPane>
                    <TabPane tab="Tháng" key="3">
                        <Card>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => (
                                    <Card.Grid style={gridStyle}>
                                        <div className='row div-trend'>
                                            <div className='col'>
                                                <div className='trend-icon'>{index + 1}</div>
                                            </div>
                                            <div className='col-10'>
                                                <div >Tăng tốc về phía em</div>
                                                <div className='centered-left-view'>{(index + 1) * 10} lượt xem</div>
                                            </div>
                                        </div>

                                    </Card.Grid>
                                ))
                            }
                        </Card>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}
export default UiTrending