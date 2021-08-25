import React from "react";
import s from './style.module.css'

const Map = (props) => {
  const {mapList} = props;
  console.log('从父组件获取得到的 mapList', mapList);
  return(
    <>
    <div>CSDN：一百个Chocolate</div>
    </>
  )
}

export default Map