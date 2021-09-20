import React, { useEffect } from "react";
import s from "./style.module.css";
import { getChinaJSON } from "./../../api/getCovid19Data";
import ReactEcharts from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/map";
import "echarts/lib/component/visualMap";
import "echarts/lib/component/tooltip";

const Map = (props) => {
  const { mapList } = props;

  useEffect(() => {
    const getData = async () => {
      const chinaMapJSON = await getChinaJSON();
      echarts.registerMap("china", chinaMapJSON.data);
    };
    getData();
  }, []);

  const getOption = () => {
    const option = {
      tooltip: {
        show: true,
        formatter: function (params) {
          let tip = "";
          if (params.data) {
            tip =
              params.name +
              "：<br>确诊：" +
              params.data["value"] +
              "例<br>死亡：" +
              params.data["died"] +
              "例<br>治愈：" +
              params.data["heal"] +
              "例";
          }
          return tip;
        },
      },
      visualMap: {
        show: true,
        type: "piecewise",
        min: 0,
        max: 2000,
        align: "right",
        top: "2%",
        right: 0,
        left: "center",
        inRange: {
          color: ["#ffc0b1", "#ff8c71", "#ef1717", "#9c0505"],
        },
        pieces: [
          { min: 1000 },
          { min: 500, max: 999 },
          { min: 100, max: 499 },
          { min: 10, max: 99 },
          { min: 1, max: 9 },
        ],
        orient: "horizontal",
        showLabel: true,
        padding: 5,
        text: ["高", "低"],
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10,
        },
      },
      series: [
        {
          left: "center",
          type: "map",
          name: "确诊人数",
          label: {
            show: true,
            position: "inside",
            fontSize: 6,
          },
          mapType: "china",
          data: mapList,
          zoom: 1.2,
          roam: false,
          showLegendSymbol: false,
          rippleEffect: {
            show: true,
            brushType: "stroke",
            scale: 2.5,
            period: 4,
          },
        },
      ],
    };
    return option;
  };
  return (
    <>
      <ReactEcharts
        style={{ height: "600px" }}
        echarts={echarts}
        option={getOption()}
      />
    </>
  );
};

export default Map;
