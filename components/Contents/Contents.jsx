import React from 'react';
import { data } from '@/dummy_data';
import Content from '../Content/Content';
import styles from './Contents.module.css';

function Contents() {
    return (
        <div className={styles.Contents}>
            {data.map((item) => {
                return <Content key={item.id} title={item.title} desc={item.desc} img={item.img} />
            })}
        </div>
    )
}

export default Contents;