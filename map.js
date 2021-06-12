var map = new AMap.Map('container',{
    zoom:8,
    // pitch:30, // 地图俯仰角度，有效范围 0 度- 83 度
    // viewMode:'3D', // 地图模式
    center: [101.986843,23.535058],
    // lang: "en" ,
    mapStyle: 'amap://styles/macaron',
    
});
var icon = new AMap.Icon({
    size: new AMap.Size(26, 28),
    image: 'icon/elephant_marker2.png',  // Icon的图像
    imageOffset: new AMap.Pixel(-8, -1),  // 图像相对展示区域的偏移量，适于雪碧图等
});

// 20/3 16象群 西双版纳勐养子保护区
var marker1 = new AMap.Marker({
    position: new AMap.LngLat(100.857154,22.121083),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '20/3',
    size: new AMap.Size(40, 50),
    icon: icon,
    marker.on('click', alert("I am an alert box!!"))
});

// 20/7 16象群 普洱市大开河村
var marker2 = new AMap.Marker({
    position: new AMap.LngLat(101.020792,22.596087),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '20/7',
    icon: icon,
});
// 20/10/25 16象群 普洱市宁洱县进入景谷县正兴镇铁厂村
var marker3 = new AMap.Marker({
    position: new AMap.LngLat(101.025187,23.28284),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '20/10/25',
    icon: icon,
});
// 20/12 17象群 普洱市 *1小象出生
var marker4 = new AMap.Marker({
    position: new AMap.LngLat(1101.256243,23.267318),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '20/12-4',
    icon: icon,
});

// 4/20 17象群 玉溪市元江县咪哩乡
var marker5 = new AMap.Marker({
    position: new AMap.LngLat(101.859876,23.434927),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '4/20',
    icon: icon,
});

// 4/24 2象 普洱市墨江县
var marker7 = new AMap.Marker({
    position: new AMap.LngLat(101.698893,23.431125),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '4/24',
    icon: icon,
});
 // 5/16 15象 红河州石屏县宝秀镇
 var marker8 = new AMap.Marker({
    position: new AMap.LngLat(102.332428,23.555609),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '5/16',
    icon: icon,
});
// 5/24 14象 玉溪市峨山县大维堵村 1头喝醉
var marker9 = new AMap.Marker({
    position: new AMap.LngLat(102.385192,24.100286),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '5/24',
    icon: icon,
});
// 5/25 15象 玉溪市峨山县阳进房老村归队'
var marker10 = new AMap.Marker({
    position: new AMap.LngLat(102.421453,24.136251),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '5/25',
    icon: icon,
});
// 5/29 15象 玉溪市峨山县玉林泉酒厂
var marker11 = new AMap.Marker({
    position: new AMap.LngLat(102.406498,24.177309),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '5/29',
    icon: icon,
});
// 5/30 15象 玉溪市红塔区洛河乡大湾村尖山哨坡
var marker12 = new AMap.Marker({
    position: new AMap.LngLat(102.425541,24.282938),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '5/30',
    icon: icon,
});
// 5/31 15象 玉溪市大营街街道
var marker13 = new AMap.Marker({
    position: new AMap.LngLat(102.490744,24.355079),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '5/31',
    icon: icon,
});
// 6/1 15象 玉溪市洛河乡草皮山
var marker14 = new AMap.Marker({
    position: new AMap.LngLat(102.420652,24.368119),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '6/1',
    icon: icon,
});
// 6/2 15象 玉溪市红塔区春和街道老光箐村
var marker15 = new AMap.Marker({
    position: new AMap.LngLat(102.405037,24.491795),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '6/2',
    icon: icon,
});
// 6/6 14象 昆明市晋宁区夕阳乡西北
var marker16 = new AMap.Marker({
    position: new AMap.LngLat(102.286774,24.470983),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '6/6',
    icon: icon,
});
6/6
// 6/8 独象 昆明安宁八街街道西南方密林
var marker17 = new AMap.Marker({
    position: new AMap.LngLat(102.35138,24.66096),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '6/8',
    icon: icon,
});
// 6/8 14象 昆明市晋宁区夕阳乡
var marker18 = new AMap.Marker({
    position: new AMap.LngLat(102.328088,24.498508),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '6/8',
    icon: icon,
});
var lnglats = [
    [116.368904, 39.923423],
    [116.382122, 39.921176],
    [116.387271, 39.922501],
    [116.398258, 39.914600]
];
// markers add in map：
var markerList = [marker1, marker2, marker3, marker4, marker5, marker7, marker8, marker9, marker10, marker11, marker12, marker13, marker14, marker15, marker16, marker17, marker18];
map.add(markerList);

//Polyline
var path = [
    new AMap.LngLat(100.857154,22.121083),
    new AMap.LngLat(101.020792,22.596087),
    new AMap.LngLat(101.025187,23.28284),
    new AMap.LngLat(101.256243,23.267318),
    new AMap.LngLat(101.698893,23.431125),
    new AMap.LngLat(101.859876,23.434927),
    new AMap.LngLat(102.332428,23.555609),
    new AMap.LngLat(102.385192,24.100286),
    new AMap.LngLat(102.421453,24.136251),
    new AMap.LngLat(102.406498,24.177309),
    new AMap.LngLat(102.425541,24.282938),
    new AMap.LngLat(102.490744,24.355079),
    new AMap.LngLat(102.420652,24.368119),
    new AMap.LngLat(102.405037,24.491795),
    new AMap.LngLat(102.286774,24.470983),
    new AMap.LngLat(102.328088,24.498508),
];
var polyline = new AMap.Polyline({
    path: path,
    strokeWeight: 6,
    strokeColor: 'orange', // 颜色
    lineJoin: 'bevel', // 折线拐点连接处样式
    showDir: true,
    geodesic: true
});
// add polyline
map.add(polyline);