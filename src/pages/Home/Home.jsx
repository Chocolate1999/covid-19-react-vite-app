import React, { useState, useEffect } from "react";
import Map from "./../../components/Map/Map";
import { getMapDataUtil } from "./../../utils/utils";
import { getCovidDataList } from "./../../api/getCovid19Data";
import s from "./style.module.css";

const Home = () => {
  const [mapList, setMapList] = useState([]);

  useEffect(async () => {
    const res = await getCovidDataList();
    const { retdata } = res.data;
    const list = getMapDataUtil(retdata);
    setMapList(list);
  }, []);

  return <>{mapList.length > 0 ? <Map mapList={mapList} /> : null}</>;
};

export default Home;
