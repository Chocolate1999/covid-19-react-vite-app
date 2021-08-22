// 将数据格式化为地图所需格式的工具
export function getMapDataUtil(list = []) {
  let mapList = [];
  list.forEach((item) => {
    let mapItem = {
      name: item.xArea,
      value: item.confirm,
      ...item,
    };
    mapList.push(mapItem);
  });
  return mapList;
}
