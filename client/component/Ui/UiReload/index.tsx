import * as React from 'react';
import styles from '../../../styles/Home.module.scss'
import { Space, Spin } from 'antd';
import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'50%'
    },
  };
export interface UiReloadProps {
}

const UiReload = (props: UiReloadProps) => {
    const [modalIsOpen, setIsOpen] = React.useState(true);
    return (
        <div className={styles.centered}>
             <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                <Space size="middle">
                    <Spin size="large" />
                </Space>
            </Modal>
        </div>

    );
}
export default UiReload