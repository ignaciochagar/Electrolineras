
const caminoPrimitivoCoordinates = [
    [43.3619, -5.8500], [43.3528, -5.9500], [43.3437, -6.0500], [43.3346, -6.1500], [43.3255, -6.2500],
    [43.3164, -6.3500], [43.3073, -6.4500], [43.2982, -6.5500], [43.2891, -6.6500], [43.2800, -6.7500],
    [43.2709, -6.8500], [43.2618, -6.9500], [43.2527, -7.0500], [43.2436, -7.1500], [43.2345, -7.2500],
    [43.2254, -7.3500], [43.2163, -7.4500], [43.2072, -7.5500], [43.1981, -7.6500], [43.1890, -7.7500],
    [43.1799, -7.8500], [43.1708, -7.9500], [43.1617, -8.0500], [43.1526, -8.1500], [43.1435, -8.2500],
    [43.1344, -8.3500], [43.1253, -8.4500], [43.1162, -8.5500], [43.1071, -8.6500], [43.0980, -8.7500],
    [43.0889, -8.8500], [43.0798, -8.9500], [43.0707, -9.0500]
];


const caminoNorteCoordinates = [
    [43.3178, -1.9812], [43.3070, -2.0112], [43.2962, -2.0412], [43.2854, -2.0712], [43.2746, -2.1012],
    [43.2638, -2.1312], [43.2530, -2.1612], [43.2422, -2.1912], [43.2314, -2.2212], [43.2206, -2.2512],
    [43.2098, -2.2812], [43.1990, -2.3112], [43.1882, -2.3412], [43.1774, -2.3712], [43.1666, -2.4012],
    [43.1558, -2.4312], [43.1450, -2.4612], [43.1342, -2.4912], [43.1234, -2.5212], [43.1126, -2.5512],
    [43.1018, -2.5812], [43.0910, -2.6112], [43.0802, -2.6412], [43.0694, -2.6712], [43.0586, -2.7012],
    [43.0478, -2.7312], [43.0370, -2.7612], [43.0262, -2.7912], [43.0154, -2.8212], [43.0046, -2.8512],
    [42.9938, -2.8812], [42.9830, -2.9112], [42.9722, -2.9412]
];



const viaDeLaPlataCoordinates = [
    [37.3826, -5.9963], [37.4896, -6.0033], [37.5966, -6.0103], [37.7036, -6.0173], [37.8106, -6.0243],
    [37.9176, -6.0313], [38.0246, -6.0383], [38.1316, -6.0453], [38.2386, -6.0523], [38.3456, -6.0593],
    [38.4526, -6.0663], [38.5596, -6.0733], [38.6666, -6.0803], [38.7736, -6.0873], [38.8806, -6.0943],
    [38.9876, -6.1013], [39.0946, -6.1083], [39.2016, -6.1153], [39.3086, -6.1223], [39.4156, -6.1293],
    [39.5226, -6.1363], [39.6296, -6.1433], [39.7366, -6.1503], [39.8436, -6.1573], [39.9506, -6.1643],
    [40.0576, -6.1713], [40.1646, -6.1783], [40.2716, -6.1853], [40.3786, -6.1923], [40.4856, -6.1993],
    [40.5926, -6.2063], [40.6996, -6.2133], [40.8066, -6.2203]
];


const caminoSanabresCoordinates = [
    [41.5061, -5.7430], [41.5261, -5.7630], [41.5461, -5.7830], [41.5661, -5.8030], [41.5861, -5.8230],
    [41.6061, -5.8430], [41.6261, -5.8630], [41.6461, -5.8830], [41.6661, -5.9030], [41.6861, -5.9230],
    [41.7061, -5.9430], [41.7261, -5.9630], [41.7461, -5.9830], [41.7661, -6.0030], [41.7861, -6.0230],
    [41.8061, -6.0430], [41.8261, -6.0630], [41.8461, -6.0830], [41.8661, -6.1030], [41.8861, -6.1230],
    [41.9061, -6.1430], [41.9261, -6.1630], [41.9461, -6.1830], [41.9661, -6.2030], [41.9861, -6.2230],
    [42.0061, -6.2430], [42.0261, -6.2630], [42.0461, -6.2830], [42.0661, -6.3030], [42.0861, -6.3230],
    [42.1061, -6.3430], [42.1261, -6.3630], [42.1461, -6.3830]
];

const caminoVascoCoordinates = [
    [43.2630, -2.9350], [43.2580, -2.9550], [43.2530, -2.9750], [43.2480, -2.9950], [43.2430, -3.0150],
    [43.2380, -3.0350], [43.2330, -3.0550], [43.2280, -3.0750], [43.2230, -3.0950], [43.2180, -3.1150],
    [43.2130, -3.1350], [43.2080, -3.1550], [43.2030, -3.1750], [43.1980, -3.1950], [43.1930, -3.2150],
    [43.1880, -3.2350], [43.1830, -3.2550], [43.1780, -3.2750], [43.1730, -3.2950], [43.1680, -3.3150],
    [43.1630, -3.3350], [43.1580, -3.3550], [43.1530, -3.3750], [43.1480, -3.3950], [43.1430, -3.4150],
    [43.1380, -3.4350], [43.1330, -3.4550], [43.1280, -3.4750], [43.1230, -3.4950], [43.1180, -3.5150],
    [43.1130, -3.5350], [43.1080, -3.5550], [43.1030, -3.5750]
];


const caminoPortuguesCoordinates = [
    [41.1496, -8.6110], [41.1696, -8.6310], [41.1896, -8.6510], [41.2096, -8.6710], [41.2296, -8.6910],
    [41.2496, -8.7110], [41.2696, -8.7310], [41.2896, -8.7510], [41.3096, -8.7710], [41.3296, -8.7910],
    [41.3496, -8.8110], [41.3696, -8.8310], [41.3896, -8.8510], [41.4096, -8.8710], [41.4296, -8.8910],
    [41.4496, -8.9110], [41.4696, -8.9310], [41.4896, -8.9510], [41.5096, -8.9710], [41.5296, -8.9910],
    [41.5496, -9.0110], [41.5696, -9.0310], [41.5896, -9.0510], [41.6096, -9.0710], [41.6296, -9.0910],
    [41.6496, -9.1110], [41.6696, -9.1310], [41.6896, -9.1510], [41.7096, -9.1710], [41.7296, -9.1910],
    [41.7496, -9.2110], [41.7696, -9.2310], [41.7896, -9.2510]
];

const caminoCatalanCoordinates = [
    [41.3840, 2.1699], [41.3940, 2.1899], [41.4040, 2.2099], [41.4140, 2.2299], [41.4240, 2.2499],
    [41.4340, 2.2699], [41.4440, 2.2899], [41.4540, 2.3099], [41.4640, 2.3299], [41.4740, 2.3499],
    [41.4840, 2.3699], [41.4940, 2.3899], [41.5040, 2.4099], [41.5140, 2.4299], [41.5240, 2.4499],
    [41.5340, 2.4699], [41.5440, 2.4899], [41.5540, 2.5099], [41.5640, 2.5299], [41.5740, 2.5499],
    [41.5840, 2.5699], [41.5940, 2.5899], [41.6040, 2.6099], [41.6140, 2.6299], [41.6240, 2.6499],
    [41.6340, 2.6699], [41.6440, 2.6899], [41.6540, 2.7099], [41.6640, 2.7299], [41.6740, 2.7499],
    [41.6840, 2.7699], [41.6940, 2.7899], [41.7040, 2.8099]
];

const caminoBaztanesCoordinates = [
    [43.3090, -1.9830], [43.2990, -2.0030], [43.2890, -2.0230], [43.2790, -2.0430], [43.2690, -2.0630],
    [43.2590, -2.0830], [43.2490, -2.1030], [43.2390, -2.1230], [43.2290, -2.1430], [43.2190, -2.1630],
    [43.2090, -2.1830], [43.1990, -2.2030], [43.1890, -2.2230], [43.1790, -2.2430], [43.1690, -2.2630],
    [43.1590, -2.2830], [43.1490, -2.3030], [43.1390, -2.3230], [43.1290, -2.3430], [43.1190, -2.3630],
    [43.1090, -2.3830], [43.0990, -2.4030], [43.0890, -2.4230], [43.0790, -2.4430], [43.0690, -2.4630],
    [43.0590, -2.4830], [43.0490, -2.5030], [43.0390, -2.5230], [43.0290, -2.5430], [43.0190, -2.5630],
    [43.0090, -2.5830], [42.9990, -2.6030], [42.9890, -2.6230]
];

const caminoInglesCoordinates = [
    [43.3623, -8.4115], [43.3523, -8.4315], [43.3423, -8.4515], [43.3323, -8.4715], [43.3223, -8.4915],
    [43.3123, -8.5115], [43.3023, -8.5315], [43.2923, -8.5515], [43.2823, -8.5715], [43.2723, -8.5915],
    [43.2623, -8.6115], [43.2523, -8.6315], [43.2423, -8.6515], [43.2323, -8.6715], [43.2223, -8.6915],
    [43.2123, -8.7115], [43.2023, -8.7315], [43.1923, -8.7515], [43.1823, -8.7715], [43.1723, -8.7915],
    [43.1623, -8.8115], [43.1523, -8.8315], [43.1423, -8.8515], [43.1323, -8.8715], [43.1223, -8.8915],
    [43.1123, -8.9115], [43.1023, -8.9315], [43.0923, -8.9515], [43.0823, -8.9715], [43.0723, -8.9915],
    [43.0623, -9.0115], [43.0523, -9.0315], [43.0423, -9.0515]
];


const caminoSanSalvadorCoordinates = [
    [43.2516, -5.5784], [43.2416, -5.5984], [43.2316, -5.6184], [43.2216, -5.6384], [43.2116, -5.6584],
    [43.2016, -5.6784], [43.1916, -5.6984], [43.1816, -5.7184], [43.1716, -5.7384], [43.1616, -5.7584],
    [43.1516, -5.7784], [43.1416, -5.7984], [43.1316, -5.8184], [43.1216, -5.8384], [43.1116, -5.8584],
    [43.1016, -5.8784], [43.0916, -5.8984], [43.0816, -5.9184], [43.0716, -5.9384], [43.0616, -5.9584],
    [43.0516, -5.9784], [43.0416, -5.9984], [43.0316, -6.0184], [43.0216, -6.0384], [43.0116, -6.0584],
    [43.0016, -6.0784], [42.9916, -6.0984], [42.9816, -6.1184], [42.9716, -6.1384], [42.9616, -6.1584],
    [42.9516, -6.1784], [42.9416, -6.1984], [42.9316, -6.2184]
];

const epilogoFisterraMuxiaCoordinates = [
    [42.8800, -8.5448], [42.8700, -8.5648], [42.8600, -8.5848], [42.8500, -8.6048], [42.8400, -8.6248],
    [42.8300, -8.6448], [42.8200, -8.6648], [42.8100, -8.6848], [42.8000, -8.7048], [42.7900, -8.7248],
    [42.7800, -8.7448], [42.7700, -8.7648], [42.7600, -8.7848], [42.7500, -8.8048], [42.7400, -8.8248],
    [42.7300, -8.8448], [42.7200, -8.8648], [42.7100, -8.8848], [42.7000, -8.9048], [42.6900, -8.9248],
    [42.6800, -8.9448], [42.6700, -8.9648], [42.6600, -8.9848], [42.6500, -9.0048], [42.6400, -9.0248],
    [42.6300, -9.0448], [42.6200, -9.0648], [42.6100, -9.0848], [42.6000, -9.1048], [42.5900, -9.1248],
    [42.5800, -9.1448], [42.5700, -9.1648], [42.5600, -9.1848]
];


export default {
    caminoPrimitivoCoordinates,
    caminoNorteCoordinates,
    viaDeLaPlataCoordinates,
    caminoSanabresCoordinates,
    caminoVascoCoordinates,
    caminoPortuguesCoordinates,
    caminoCatalanCoordinates,
    caminoBaztanesCoordinates,
    caminoInglesCoordinates,
    caminoSanSalvadorCoordinates,
    epilogoFisterraMuxiaCoordinates
};