/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 28754.0, "series": [{"data": [[0.0, 32.0], [0.1, 37.0], [0.2, 37.0], [0.3, 40.0], [0.4, 45.0], [0.5, 46.0], [0.6, 47.0], [0.7, 48.0], [0.8, 49.0], [0.9, 50.0], [1.0, 52.0], [1.1, 53.0], [1.2, 56.0], [1.3, 57.0], [1.4, 58.0], [1.5, 60.0], [1.6, 60.0], [1.7, 61.0], [1.8, 61.0], [1.9, 63.0], [2.0, 64.0], [2.1, 65.0], [2.2, 66.0], [2.3, 66.0], [2.4, 67.0], [2.5, 68.0], [2.6, 69.0], [2.7, 71.0], [2.8, 71.0], [2.9, 71.0], [3.0, 72.0], [3.1, 73.0], [3.2, 74.0], [3.3, 74.0], [3.4, 75.0], [3.5, 76.0], [3.6, 77.0], [3.7, 78.0], [3.8, 80.0], [3.9, 82.0], [4.0, 83.0], [4.1, 84.0], [4.2, 85.0], [4.3, 86.0], [4.4, 88.0], [4.5, 89.0], [4.6, 89.0], [4.7, 90.0], [4.8, 91.0], [4.9, 92.0], [5.0, 93.0], [5.1, 93.0], [5.2, 95.0], [5.3, 95.0], [5.4, 95.0], [5.5, 95.0], [5.6, 96.0], [5.7, 97.0], [5.8, 97.0], [5.9, 98.0], [6.0, 98.0], [6.1, 99.0], [6.2, 99.0], [6.3, 100.0], [6.4, 100.0], [6.5, 100.0], [6.6, 102.0], [6.7, 102.0], [6.8, 103.0], [6.9, 104.0], [7.0, 105.0], [7.1, 106.0], [7.2, 107.0], [7.3, 108.0], [7.4, 108.0], [7.5, 108.0], [7.6, 109.0], [7.7, 109.0], [7.8, 110.0], [7.9, 111.0], [8.0, 111.0], [8.1, 112.0], [8.2, 112.0], [8.3, 113.0], [8.4, 114.0], [8.5, 114.0], [8.6, 116.0], [8.7, 116.0], [8.8, 117.0], [8.9, 117.0], [9.0, 118.0], [9.1, 118.0], [9.2, 119.0], [9.3, 120.0], [9.4, 120.0], [9.5, 120.0], [9.6, 120.0], [9.7, 122.0], [9.8, 122.0], [9.9, 123.0], [10.0, 123.0], [10.1, 124.0], [10.2, 126.0], [10.3, 126.0], [10.4, 126.0], [10.5, 128.0], [10.6, 128.0], [10.7, 130.0], [10.8, 131.0], [10.9, 131.0], [11.0, 132.0], [11.1, 132.0], [11.2, 133.0], [11.3, 134.0], [11.4, 135.0], [11.5, 135.0], [11.6, 136.0], [11.7, 136.0], [11.8, 138.0], [11.9, 138.0], [12.0, 138.0], [12.1, 139.0], [12.2, 140.0], [12.3, 140.0], [12.4, 141.0], [12.5, 142.0], [12.6, 142.0], [12.7, 143.0], [12.8, 144.0], [12.9, 144.0], [13.0, 144.0], [13.1, 145.0], [13.2, 145.0], [13.3, 146.0], [13.4, 147.0], [13.5, 148.0], [13.6, 149.0], [13.7, 150.0], [13.8, 150.0], [13.9, 151.0], [14.0, 151.0], [14.1, 152.0], [14.2, 152.0], [14.3, 154.0], [14.4, 155.0], [14.5, 156.0], [14.6, 157.0], [14.7, 158.0], [14.8, 159.0], [14.9, 160.0], [15.0, 160.0], [15.1, 160.0], [15.2, 161.0], [15.3, 162.0], [15.4, 163.0], [15.5, 164.0], [15.6, 164.0], [15.7, 164.0], [15.8, 166.0], [15.9, 167.0], [16.0, 168.0], [16.1, 168.0], [16.2, 168.0], [16.3, 169.0], [16.4, 170.0], [16.5, 170.0], [16.6, 170.0], [16.7, 171.0], [16.8, 172.0], [16.9, 172.0], [17.0, 173.0], [17.1, 174.0], [17.2, 176.0], [17.3, 176.0], [17.4, 176.0], [17.5, 177.0], [17.6, 177.0], [17.7, 178.0], [17.8, 180.0], [17.9, 180.0], [18.0, 181.0], [18.1, 182.0], [18.2, 183.0], [18.3, 184.0], [18.4, 185.0], [18.5, 186.0], [18.6, 187.0], [18.7, 188.0], [18.8, 189.0], [18.9, 190.0], [19.0, 191.0], [19.1, 192.0], [19.2, 193.0], [19.3, 194.0], [19.4, 195.0], [19.5, 196.0], [19.6, 197.0], [19.7, 198.0], [19.8, 199.0], [19.9, 199.0], [20.0, 200.0], [20.1, 202.0], [20.2, 202.0], [20.3, 203.0], [20.4, 204.0], [20.5, 204.0], [20.6, 205.0], [20.7, 206.0], [20.8, 207.0], [20.9, 208.0], [21.0, 209.0], [21.1, 209.0], [21.2, 209.0], [21.3, 210.0], [21.4, 211.0], [21.5, 212.0], [21.6, 214.0], [21.7, 214.0], [21.8, 215.0], [21.9, 215.0], [22.0, 216.0], [22.1, 217.0], [22.2, 218.0], [22.3, 219.0], [22.4, 219.0], [22.5, 220.0], [22.6, 220.0], [22.7, 221.0], [22.8, 222.0], [22.9, 223.0], [23.0, 224.0], [23.1, 225.0], [23.2, 226.0], [23.3, 227.0], [23.4, 227.0], [23.5, 228.0], [23.6, 231.0], [23.7, 232.0], [23.8, 233.0], [23.9, 234.0], [24.0, 235.0], [24.1, 235.0], [24.2, 236.0], [24.3, 236.0], [24.4, 236.0], [24.5, 237.0], [24.6, 238.0], [24.7, 238.0], [24.8, 239.0], [24.9, 240.0], [25.0, 241.0], [25.1, 241.0], [25.2, 242.0], [25.3, 243.0], [25.4, 243.0], [25.5, 244.0], [25.6, 246.0], [25.7, 247.0], [25.8, 248.0], [25.9, 248.0], [26.0, 248.0], [26.1, 249.0], [26.2, 250.0], [26.3, 251.0], [26.4, 252.0], [26.5, 252.0], [26.6, 253.0], [26.7, 254.0], [26.8, 255.0], [26.9, 256.0], [27.0, 257.0], [27.1, 257.0], [27.2, 258.0], [27.3, 259.0], [27.4, 260.0], [27.5, 260.0], [27.6, 261.0], [27.7, 262.0], [27.8, 263.0], [27.9, 265.0], [28.0, 266.0], [28.1, 267.0], [28.2, 269.0], [28.3, 270.0], [28.4, 271.0], [28.5, 273.0], [28.6, 275.0], [28.7, 276.0], [28.8, 277.0], [28.9, 279.0], [29.0, 282.0], [29.1, 284.0], [29.2, 285.0], [29.3, 288.0], [29.4, 289.0], [29.5, 290.0], [29.6, 292.0], [29.7, 293.0], [29.8, 296.0], [29.9, 296.0], [30.0, 297.0], [30.1, 297.0], [30.2, 298.0], [30.3, 300.0], [30.4, 301.0], [30.5, 302.0], [30.6, 303.0], [30.7, 304.0], [30.8, 310.0], [30.9, 311.0], [31.0, 312.0], [31.1, 313.0], [31.2, 314.0], [31.3, 315.0], [31.4, 317.0], [31.5, 318.0], [31.6, 319.0], [31.7, 321.0], [31.8, 323.0], [31.9, 324.0], [32.0, 327.0], [32.1, 327.0], [32.2, 329.0], [32.3, 332.0], [32.4, 333.0], [32.5, 334.0], [32.6, 334.0], [32.7, 336.0], [32.8, 337.0], [32.9, 337.0], [33.0, 340.0], [33.1, 343.0], [33.2, 345.0], [33.3, 346.0], [33.4, 348.0], [33.5, 349.0], [33.6, 353.0], [33.7, 354.0], [33.8, 355.0], [33.9, 357.0], [34.0, 359.0], [34.1, 361.0], [34.2, 364.0], [34.3, 367.0], [34.4, 370.0], [34.5, 371.0], [34.6, 374.0], [34.7, 376.0], [34.8, 379.0], [34.9, 384.0], [35.0, 388.0], [35.1, 388.0], [35.2, 391.0], [35.3, 392.0], [35.4, 396.0], [35.5, 398.0], [35.6, 400.0], [35.7, 402.0], [35.8, 403.0], [35.9, 406.0], [36.0, 407.0], [36.1, 408.0], [36.2, 409.0], [36.3, 412.0], [36.4, 415.0], [36.5, 416.0], [36.6, 417.0], [36.7, 418.0], [36.8, 419.0], [36.9, 424.0], [37.0, 425.0], [37.1, 428.0], [37.2, 430.0], [37.3, 431.0], [37.4, 432.0], [37.5, 433.0], [37.6, 435.0], [37.7, 436.0], [37.8, 439.0], [37.9, 441.0], [38.0, 442.0], [38.1, 443.0], [38.2, 444.0], [38.3, 446.0], [38.4, 447.0], [38.5, 449.0], [38.6, 450.0], [38.7, 455.0], [38.8, 456.0], [38.9, 459.0], [39.0, 461.0], [39.1, 463.0], [39.2, 466.0], [39.3, 467.0], [39.4, 469.0], [39.5, 471.0], [39.6, 472.0], [39.7, 474.0], [39.8, 475.0], [39.9, 476.0], [40.0, 477.0], [40.1, 480.0], [40.2, 483.0], [40.3, 485.0], [40.4, 488.0], [40.5, 490.0], [40.6, 491.0], [40.7, 495.0], [40.8, 498.0], [40.9, 499.0], [41.0, 504.0], [41.1, 505.0], [41.2, 508.0], [41.3, 510.0], [41.4, 512.0], [41.5, 513.0], [41.6, 517.0], [41.7, 519.0], [41.8, 524.0], [41.9, 527.0], [42.0, 529.0], [42.1, 531.0], [42.2, 536.0], [42.3, 538.0], [42.4, 540.0], [42.5, 545.0], [42.6, 546.0], [42.7, 548.0], [42.8, 551.0], [42.9, 553.0], [43.0, 557.0], [43.1, 563.0], [43.2, 564.0], [43.3, 566.0], [43.4, 567.0], [43.5, 570.0], [43.6, 575.0], [43.7, 576.0], [43.8, 577.0], [43.9, 583.0], [44.0, 584.0], [44.1, 587.0], [44.2, 590.0], [44.3, 594.0], [44.4, 599.0], [44.5, 601.0], [44.6, 603.0], [44.7, 606.0], [44.8, 610.0], [44.9, 612.0], [45.0, 613.0], [45.1, 617.0], [45.2, 618.0], [45.3, 623.0], [45.4, 626.0], [45.5, 628.0], [45.6, 629.0], [45.7, 632.0], [45.8, 635.0], [45.9, 637.0], [46.0, 638.0], [46.1, 641.0], [46.2, 644.0], [46.3, 646.0], [46.4, 648.0], [46.5, 652.0], [46.6, 654.0], [46.7, 656.0], [46.8, 658.0], [46.9, 662.0], [47.0, 664.0], [47.1, 665.0], [47.2, 668.0], [47.3, 670.0], [47.4, 671.0], [47.5, 672.0], [47.6, 675.0], [47.7, 676.0], [47.8, 678.0], [47.9, 681.0], [48.0, 683.0], [48.1, 684.0], [48.2, 685.0], [48.3, 687.0], [48.4, 690.0], [48.5, 692.0], [48.6, 695.0], [48.7, 698.0], [48.8, 702.0], [48.9, 704.0], [49.0, 707.0], [49.1, 708.0], [49.2, 713.0], [49.3, 722.0], [49.4, 729.0], [49.5, 731.0], [49.6, 732.0], [49.7, 736.0], [49.8, 737.0], [49.9, 741.0], [50.0, 742.0], [50.1, 745.0], [50.2, 747.0], [50.3, 749.0], [50.4, 752.0], [50.5, 755.0], [50.6, 758.0], [50.7, 760.0], [50.8, 760.0], [50.9, 762.0], [51.0, 766.0], [51.1, 770.0], [51.2, 771.0], [51.3, 774.0], [51.4, 777.0], [51.5, 781.0], [51.6, 782.0], [51.7, 783.0], [51.8, 784.0], [51.9, 786.0], [52.0, 788.0], [52.1, 795.0], [52.2, 796.0], [52.3, 800.0], [52.4, 803.0], [52.5, 804.0], [52.6, 808.0], [52.7, 811.0], [52.8, 812.0], [52.9, 814.0], [53.0, 817.0], [53.1, 818.0], [53.2, 819.0], [53.3, 821.0], [53.4, 825.0], [53.5, 827.0], [53.6, 831.0], [53.7, 831.0], [53.8, 836.0], [53.9, 837.0], [54.0, 839.0], [54.1, 840.0], [54.2, 841.0], [54.3, 849.0], [54.4, 851.0], [54.5, 854.0], [54.6, 857.0], [54.7, 860.0], [54.8, 864.0], [54.9, 866.0], [55.0, 870.0], [55.1, 872.0], [55.2, 877.0], [55.3, 882.0], [55.4, 886.0], [55.5, 894.0], [55.6, 896.0], [55.7, 898.0], [55.8, 900.0], [55.9, 904.0], [56.0, 906.0], [56.1, 908.0], [56.2, 913.0], [56.3, 916.0], [56.4, 917.0], [56.5, 923.0], [56.6, 927.0], [56.7, 929.0], [56.8, 931.0], [56.9, 932.0], [57.0, 933.0], [57.1, 936.0], [57.2, 939.0], [57.3, 939.0], [57.4, 946.0], [57.5, 949.0], [57.6, 949.0], [57.7, 953.0], [57.8, 957.0], [57.9, 965.0], [58.0, 976.0], [58.1, 978.0], [58.2, 980.0], [58.3, 982.0], [58.4, 992.0], [58.5, 994.0], [58.6, 997.0], [58.7, 998.0], [58.8, 1005.0], [58.9, 1009.0], [59.0, 1012.0], [59.1, 1015.0], [59.2, 1017.0], [59.3, 1019.0], [59.4, 1024.0], [59.5, 1026.0], [59.6, 1028.0], [59.7, 1030.0], [59.8, 1031.0], [59.9, 1035.0], [60.0, 1037.0], [60.1, 1039.0], [60.2, 1042.0], [60.3, 1048.0], [60.4, 1053.0], [60.5, 1055.0], [60.6, 1057.0], [60.7, 1059.0], [60.8, 1066.0], [60.9, 1067.0], [61.0, 1070.0], [61.1, 1071.0], [61.2, 1074.0], [61.3, 1076.0], [61.4, 1079.0], [61.5, 1084.0], [61.6, 1087.0], [61.7, 1088.0], [61.8, 1092.0], [61.9, 1093.0], [62.0, 1097.0], [62.1, 1100.0], [62.2, 1103.0], [62.3, 1106.0], [62.4, 1109.0], [62.5, 1113.0], [62.6, 1115.0], [62.7, 1117.0], [62.8, 1121.0], [62.9, 1129.0], [63.0, 1135.0], [63.1, 1138.0], [63.2, 1143.0], [63.3, 1146.0], [63.4, 1152.0], [63.5, 1155.0], [63.6, 1158.0], [63.7, 1162.0], [63.8, 1164.0], [63.9, 1168.0], [64.0, 1173.0], [64.1, 1174.0], [64.2, 1175.0], [64.3, 1178.0], [64.4, 1180.0], [64.5, 1187.0], [64.6, 1191.0], [64.7, 1194.0], [64.8, 1200.0], [64.9, 1203.0], [65.0, 1208.0], [65.1, 1211.0], [65.2, 1218.0], [65.3, 1219.0], [65.4, 1223.0], [65.5, 1225.0], [65.6, 1229.0], [65.7, 1234.0], [65.8, 1236.0], [65.9, 1241.0], [66.0, 1242.0], [66.1, 1246.0], [66.2, 1249.0], [66.3, 1257.0], [66.4, 1259.0], [66.5, 1261.0], [66.6, 1267.0], [66.7, 1267.0], [66.8, 1271.0], [66.9, 1274.0], [67.0, 1276.0], [67.1, 1278.0], [67.2, 1279.0], [67.3, 1282.0], [67.4, 1285.0], [67.5, 1290.0], [67.6, 1292.0], [67.7, 1295.0], [67.8, 1297.0], [67.9, 1298.0], [68.0, 1299.0], [68.1, 1306.0], [68.2, 1308.0], [68.3, 1313.0], [68.4, 1314.0], [68.5, 1318.0], [68.6, 1320.0], [68.7, 1325.0], [68.8, 1328.0], [68.9, 1331.0], [69.0, 1334.0], [69.1, 1336.0], [69.2, 1339.0], [69.3, 1342.0], [69.4, 1344.0], [69.5, 1349.0], [69.6, 1350.0], [69.7, 1353.0], [69.8, 1356.0], [69.9, 1357.0], [70.0, 1361.0], [70.1, 1363.0], [70.2, 1364.0], [70.3, 1372.0], [70.4, 1373.0], [70.5, 1376.0], [70.6, 1381.0], [70.7, 1383.0], [70.8, 1384.0], [70.9, 1386.0], [71.0, 1387.0], [71.1, 1391.0], [71.2, 1393.0], [71.3, 1397.0], [71.4, 1399.0], [71.5, 1405.0], [71.6, 1406.0], [71.7, 1409.0], [71.8, 1411.0], [71.9, 1413.0], [72.0, 1416.0], [72.1, 1424.0], [72.2, 1427.0], [72.3, 1428.0], [72.4, 1433.0], [72.5, 1434.0], [72.6, 1437.0], [72.7, 1441.0], [72.8, 1444.0], [72.9, 1448.0], [73.0, 1449.0], [73.1, 1452.0], [73.2, 1458.0], [73.3, 1461.0], [73.4, 1464.0], [73.5, 1467.0], [73.6, 1468.0], [73.7, 1469.0], [73.8, 1472.0], [73.9, 1474.0], [74.0, 1475.0], [74.1, 1477.0], [74.2, 1480.0], [74.3, 1484.0], [74.4, 1492.0], [74.5, 1497.0], [74.6, 1499.0], [74.7, 1503.0], [74.8, 1505.0], [74.9, 1510.0], [75.0, 1511.0], [75.1, 1515.0], [75.2, 1516.0], [75.3, 1517.0], [75.4, 1519.0], [75.5, 1525.0], [75.6, 1529.0], [75.7, 1532.0], [75.8, 1535.0], [75.9, 1539.0], [76.0, 1542.0], [76.1, 1543.0], [76.2, 1544.0], [76.3, 1547.0], [76.4, 1548.0], [76.5, 1552.0], [76.6, 1554.0], [76.7, 1557.0], [76.8, 1559.0], [76.9, 1560.0], [77.0, 1567.0], [77.1, 1567.0], [77.2, 1571.0], [77.3, 1575.0], [77.4, 1579.0], [77.5, 1581.0], [77.6, 1582.0], [77.7, 1585.0], [77.8, 1589.0], [77.9, 1596.0], [78.0, 1598.0], [78.1, 1602.0], [78.2, 1605.0], [78.3, 1609.0], [78.4, 1614.0], [78.5, 1615.0], [78.6, 1616.0], [78.7, 1618.0], [78.8, 1618.0], [78.9, 1622.0], [79.0, 1625.0], [79.1, 1628.0], [79.2, 1635.0], [79.3, 1636.0], [79.4, 1640.0], [79.5, 1643.0], [79.6, 1644.0], [79.7, 1645.0], [79.8, 1647.0], [79.9, 1648.0], [80.0, 1652.0], [80.1, 1652.0], [80.2, 1656.0], [80.3, 1659.0], [80.4, 1665.0], [80.5, 1667.0], [80.6, 1670.0], [80.7, 1672.0], [80.8, 1675.0], [80.9, 1677.0], [81.0, 1679.0], [81.1, 1680.0], [81.2, 1684.0], [81.3, 1688.0], [81.4, 1692.0], [81.5, 1695.0], [81.6, 1703.0], [81.7, 1705.0], [81.8, 1708.0], [81.9, 1712.0], [82.0, 1714.0], [82.1, 1716.0], [82.2, 1719.0], [82.3, 1719.0], [82.4, 1723.0], [82.5, 1727.0], [82.6, 1728.0], [82.7, 1729.0], [82.8, 1731.0], [82.9, 1732.0], [83.0, 1733.0], [83.1, 1736.0], [83.2, 1739.0], [83.3, 1740.0], [83.4, 1742.0], [83.5, 1747.0], [83.6, 1751.0], [83.7, 1756.0], [83.8, 1761.0], [83.9, 1764.0], [84.0, 1767.0], [84.1, 1774.0], [84.2, 1775.0], [84.3, 1783.0], [84.4, 1786.0], [84.5, 1789.0], [84.6, 1796.0], [84.7, 1798.0], [84.8, 1800.0], [84.9, 1802.0], [85.0, 1806.0], [85.1, 1810.0], [85.2, 1812.0], [85.3, 1816.0], [85.4, 1818.0], [85.5, 1820.0], [85.6, 1822.0], [85.7, 1824.0], [85.8, 1830.0], [85.9, 1832.0], [86.0, 1836.0], [86.1, 1838.0], [86.2, 1842.0], [86.3, 1843.0], [86.4, 1846.0], [86.5, 1854.0], [86.6, 1855.0], [86.7, 1860.0], [86.8, 1865.0], [86.9, 1866.0], [87.0, 1869.0], [87.1, 1872.0], [87.2, 1877.0], [87.3, 1884.0], [87.4, 1887.0], [87.5, 1890.0], [87.6, 1897.0], [87.7, 1905.0], [87.8, 1912.0], [87.9, 1915.0], [88.0, 1918.0], [88.1, 1919.0], [88.2, 1931.0], [88.3, 1937.0], [88.4, 1943.0], [88.5, 1944.0], [88.6, 1954.0], [88.7, 1956.0], [88.8, 1960.0], [88.9, 1965.0], [89.0, 1966.0], [89.1, 1968.0], [89.2, 1974.0], [89.3, 1977.0], [89.4, 1981.0], [89.5, 1983.0], [89.6, 1985.0], [89.7, 1985.0], [89.8, 1991.0], [89.9, 1998.0], [90.0, 2005.0], [90.1, 2011.0], [90.2, 2013.0], [90.3, 2017.0], [90.4, 2021.0], [90.5, 2024.0], [90.6, 2025.0], [90.7, 2027.0], [90.8, 2031.0], [90.9, 2034.0], [91.0, 2034.0], [91.1, 2041.0], [91.2, 2044.0], [91.3, 2045.0], [91.4, 2048.0], [91.5, 2052.0], [91.6, 2060.0], [91.7, 2062.0], [91.8, 2064.0], [91.9, 2072.0], [92.0, 2073.0], [92.1, 2075.0], [92.2, 2076.0], [92.3, 2080.0], [92.4, 2087.0], [92.5, 2097.0], [92.6, 2101.0], [92.7, 2104.0], [92.8, 2116.0], [92.9, 2121.0], [93.0, 2127.0], [93.1, 2131.0], [93.2, 2133.0], [93.3, 2139.0], [93.4, 2147.0], [93.5, 2153.0], [93.6, 2155.0], [93.7, 2159.0], [93.8, 2167.0], [93.9, 2169.0], [94.0, 2173.0], [94.1, 2177.0], [94.2, 2181.0], [94.3, 2188.0], [94.4, 2191.0], [94.5, 2207.0], [94.6, 2216.0], [94.7, 2228.0], [94.8, 2237.0], [94.9, 2245.0], [95.0, 2249.0], [95.1, 2259.0], [95.2, 2266.0], [95.3, 2267.0], [95.4, 2275.0], [95.5, 2281.0], [95.6, 2290.0], [95.7, 2295.0], [95.8, 2296.0], [95.9, 2299.0], [96.0, 2311.0], [96.1, 2314.0], [96.2, 2318.0], [96.3, 2322.0], [96.4, 2346.0], [96.5, 2347.0], [96.6, 2364.0], [96.7, 2375.0], [96.8, 2389.0], [96.9, 2394.0], [97.0, 2398.0], [97.1, 2419.0], [97.2, 2437.0], [97.3, 2451.0], [97.4, 2475.0], [97.5, 2486.0], [97.6, 2513.0], [97.7, 2525.0], [97.8, 2542.0], [97.9, 2558.0], [98.0, 2568.0], [98.1, 2598.0], [98.2, 2600.0], [98.3, 2617.0], [98.4, 2673.0], [98.5, 2685.0], [98.6, 2729.0], [98.7, 2767.0], [98.8, 2905.0], [98.9, 2967.0], [99.0, 2981.0], [99.1, 3012.0], [99.2, 3049.0], [99.3, 3072.0], [99.4, 3162.0], [99.5, 7521.0], [99.6, 10731.0], [99.7, 15566.0], [99.8, 21477.0], [99.9, 24389.0]], "isOverall": false, "label": "Healthy Thinking", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 466.0, "series": [{"data": [[0.0, 214.0], [600.0, 148.0], [700.0, 120.0], [800.0, 118.0], [900.0, 102.0], [1000.0, 115.0], [1100.0, 92.0], [1200.0, 110.0], [1300.0, 116.0], [1400.0, 110.0], [1500.0, 116.0], [1600.0, 122.0], [1700.0, 107.0], [1800.0, 100.0], [1900.0, 77.0], [2000.0, 90.0], [2100.0, 64.0], [2300.0, 37.0], [2200.0, 51.0], [2400.0, 19.0], [2500.0, 21.0], [2600.0, 14.0], [2700.0, 4.0], [2800.0, 3.0], [2900.0, 10.0], [3000.0, 8.0], [3100.0, 3.0], [6800.0, 1.0], [7100.0, 1.0], [7500.0, 1.0], [7600.0, 1.0], [8200.0, 1.0], [10100.0, 1.0], [10700.0, 1.0], [12600.0, 1.0], [15000.0, 1.0], [15500.0, 1.0], [18200.0, 1.0], [18000.0, 1.0], [19400.0, 1.0], [21400.0, 1.0], [21800.0, 1.0], [24100.0, 1.0], [24300.0, 1.0], [25600.0, 1.0], [100.0, 466.0], [27500.0, 1.0], [28700.0, 1.0], [200.0, 353.0], [300.0, 180.0], [400.0, 183.0], [500.0, 120.0]], "isOverall": false, "label": "Healthy Thinking", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 28700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 865.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1397.0, "series": [{"data": [[0.0, 1397.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1151.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 865.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 8.946428571428577, "minX": 1.62785871E12, "maxY": 264.22982216142253, "series": [{"data": [[1.62785871E12, 17.0], [1.62785872E12, 10.0], [1.62785873E12, 8.946428571428577], [1.62785874E12, 38.47938144329899], [1.62785875E12, 162.0239726027395], [1.62785876E12, 264.22982216142253]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62785876E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 150.0, "minX": 2.0, "maxY": 25614.0, "series": [{"data": [[2.0, 13788.0], [3.0, 25614.0], [4.0, 480.49122807017534], [5.0, 24163.0], [6.0, 21866.0], [7.0, 673.8095238095242], [8.0, 3952.4], [9.0, 3067.0], [10.0, 285.75257731958754], [11.0, 15566.0], [12.0, 5092.0], [13.0, 223.35897435897436], [14.0, 10731.0], [15.0, 3464.333333333333], [16.0, 218.7272727272726], [17.0, 3872.0], [18.0, 6813.0], [19.0, 1154.857142857143], [20.0, 232.86324786324778], [22.0, 150.0], [23.0, 192.60526315789474], [24.0, 213.5], [25.0, 262.6666666666667], [26.0, 208.22222222222223], [27.0, 215.0], [28.0, 229.13793103448276], [29.0, 233.25], [30.0, 257.0], [32.0, 257.102189781022], [33.0, 340.0], [34.0, 289.2], [36.0, 324.0], [38.0, 276.09999999999997], [39.0, 275.2857142857143], [40.0, 292.0], [42.0, 294.5], [43.0, 300.3333333333333], [44.0, 311.0], [45.0, 329.6], [46.0, 290.0], [47.0, 378.2300884955754], [48.0, 317.6], [49.0, 286.2857142857143], [50.0, 311.375], [51.0, 372.75], [52.0, 281.3333333333333], [53.0, 413.8], [54.0, 368.6], [55.0, 395.5], [56.0, 408.6666666666667], [57.0, 394.90000000000003], [58.0, 453.60176991150456], [59.0, 488.6666666666667], [60.0, 480.2857142857143], [61.0, 445.84615384615387], [62.0, 452.11111111111114], [63.0, 499.3636363636364], [64.0, 519.0], [65.0, 374.4], [72.0, 400.0], [73.0, 415.6], [74.0, 454.5], [75.0, 448.0], [76.0, 499.5], [77.0, 545.0], [78.0, 567.0], [79.0, 620.3855421686746], [81.0, 622.4833333333333], [82.0, 548.1428571428571], [85.0, 271.0], [87.0, 300.0], [89.0, 310.0], [90.0, 353.0], [92.0, 338.0], [93.0, 553.0], [94.0, 686.0], [95.0, 773.75], [96.0, 759.9499999999998], [97.0, 708.0], [98.0, 700.4999999999999], [99.0, 667.8157894736843], [125.0, 804.0], [126.0, 775.6666666666666], [127.0, 836.2857142857143], [128.0, 974.8], [129.0, 939.6666666666666], [130.0, 1097.75], [131.0, 1018.5833333333333], [132.0, 846.25], [136.0, 811.75], [137.0, 858.8571428571429], [138.0, 1041.83695652174], [139.0, 971.1578947368421], [140.0, 796.0], [141.0, 599.6666666666666], [142.0, 854.0], [144.0, 1279.0], [145.0, 1008.8500000000003], [146.0, 1108.6666666666665], [147.0, 1149.5], [152.0, 810.5], [153.0, 832.0], [154.0, 1070.6823529411763], [155.0, 1163.9999999999998], [156.0, 802.4166666666666], [157.0, 1586.5], [158.0, 1580.0], [160.0, 695.0], [161.0, 973.1515151515152], [179.0, 1335.0400000000002], [180.0, 1539.9545454545455], [181.0, 1702.5000000000002], [182.0, 1593.263157894737], [183.0, 1421.125], [184.0, 1244.7647058823527], [191.0, 877.25], [189.0, 1426.0], [188.0, 2407.0], [187.0, 1339.0], [186.0, 1346.0], [185.0, 1392.0], [193.0, 817.3333333333333], [194.0, 1372.0], [196.0, 1609.4444444444443], [197.0, 1339.4634146341464], [198.0, 1467.8333333333333], [199.0, 1421.0917431192663], [195.0, 937.0], [192.0, 1243.0], [200.0, 1055.111111111111], [203.0, 853.3333333333334], [207.0, 2169.0], [201.0, 1441.0], [209.0, 1051.0], [211.0, 813.0], [213.0, 1447.7142857142858], [214.0, 1221.0], [215.0, 1356.6666666666667], [216.0, 1510.2105263157896], [217.0, 1724.3333333333333], [219.0, 1751.0], [220.0, 1277.0], [221.0, 1620.500000000001], [223.0, 2130.0], [222.0, 1515.0], [218.0, 1278.0], [231.0, 1701.5], [230.0, 2064.0], [229.0, 1501.0], [228.0, 1897.0], [227.0, 1622.0], [226.0, 1222.0], [225.0, 1933.0], [239.0, 1516.0], [238.0, 1869.0], [237.0, 1943.0], [236.0, 1811.0], [235.0, 1416.0], [233.0, 1989.0], [232.0, 2172.0], [247.0, 2476.0], [246.0, 2052.0], [245.0, 1420.0], [244.0, 1870.0], [242.0, 1519.0], [240.0, 1567.0], [248.0, 1020.8], [249.0, 1396.7777777777778], [250.0, 1781.0], [251.0, 2033.4], [252.0, 1963.12], [253.0, 1436.2], [254.0, 1607.5999999999995], [255.0, 1923.1971830985917], [271.0, 1387.0], [256.0, 1739.0], [263.0, 2006.1818181818182], [262.0, 1846.0], [261.0, 1815.0], [260.0, 1827.0], [264.0, 1939.1103448275858], [265.0, 1852.861111111111], [266.0, 1681.0], [267.0, 1866.5], [270.0, 1697.0], [269.0, 1146.0], [268.0, 1297.0], [259.0, 1836.0], [258.0, 1915.5], [275.0, 1524.25], [273.0, 1817.6666666666667], [272.0, 2322.4047619047624], [279.0, 1499.0], [274.0, 2018.8095238095243], [276.0, 1763.2857142857144], [277.0, 1723.0], [278.0, 1989.0], [280.0, 1728.25], [286.0, 2058.0], [285.0, 1426.0], [284.0, 1621.0], [287.0, 1587.3333333333333], [281.0, 1912.5], [283.0, 1744.0], [282.0, 1434.0], [288.0, 1307.111111111111], [289.0, 1714.0]], "isOverall": false, "label": "Healthy Thinking", "isController": false}, {"data": [[123.51157339583942, 1002.1368297685332]], "isOverall": false, "label": "Healthy Thinking-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 289.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 157.5, "minX": 1.62785871E12, "maxY": 4606358.4, "series": [{"data": [[1.62785871E12, 27620.5], [1.62785872E12, 27617.6], [1.62785873E12, 1325098.8], [1.62785874E12, 4590527.9], [1.62785875E12, 4606358.4], [1.62785876E12, 2882917.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62785871E12, 157.5], [1.62785872E12, 157.5], [1.62785873E12, 7560.0], [1.62785874E12, 26190.0], [1.62785875E12, 26280.0], [1.62785876E12, 16447.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62785876E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 298.8874570446736, "minX": 1.62785871E12, "maxY": 17208.285714285714, "series": [{"data": [[1.62785871E12, 8323.57142857143], [1.62785872E12, 17208.285714285714], [1.62785873E12, 541.2559523809517], [1.62785874E12, 298.8874570446736], [1.62785875E12, 1137.88955479452], [1.62785876E12, 1891.584131326949]], "isOverall": false, "label": "Healthy Thinking", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62785876E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 295.31099656357395, "minX": 1.62785871E12, "maxY": 17130.285714285714, "series": [{"data": [[1.62785871E12, 8250.142857142857], [1.62785872E12, 17130.285714285714], [1.62785873E12, 538.764880952381], [1.62785874E12, 295.31099656357395], [1.62785875E12, 1102.643835616439], [1.62785876E12, 1857.5567715458294]], "isOverall": false, "label": "Healthy Thinking", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62785876E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 82.08928571428568, "minX": 1.62785871E12, "maxY": 1801.2763337893302, "series": [{"data": [[1.62785871E12, 161.85714285714286], [1.62785872E12, 85.57142857142858], [1.62785873E12, 82.08928571428568], [1.62785874E12, 284.4707903780072], [1.62785875E12, 1061.2422945205478], [1.62785876E12, 1801.2763337893302]], "isOverall": false, "label": "Healthy Thinking", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62785876E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 32.0, "minX": 1.62785871E12, "maxY": 28754.0, "series": [{"data": [[1.62785871E12, 10731.0], [1.62785872E12, 21477.0], [1.62785873E12, 28754.0], [1.62785874E12, 770.0], [1.62785875E12, 2513.0], [1.62785876E12, 3162.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62785871E12, 6813.0], [1.62785872E12, 12614.0], [1.62785873E12, 32.0], [1.62785874E12, 92.0], [1.62785875E12, 253.0], [1.62785876E12, 490.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62785871E12, 10731.0], [1.62785872E12, 21477.0], [1.62785873E12, 126.30000000000001], [1.62785874E12, 513.0], [1.62785875E12, 1677.2000000000003], [1.62785876E12, 2444.2000000000007]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62785871E12, 10731.0], [1.62785872E12, 21477.0], [1.62785873E12, 25160.749999999993], [1.62785874E12, 686.4499999999994], [1.62785875E12, 2188.0], [1.62785876E12, 3050.3599999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62785871E12, 10731.0], [1.62785872E12, 21477.0], [1.62785873E12, 144.14999999999998], [1.62785874E12, 583.75], [1.62785875E12, 1822.1999999999998], [1.62785876E12, 2658.9999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62785876E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 16212.5, "series": [{"data": [[2.0, 16212.5], [47.0, 53.0], [65.0, 840.0], [74.0, 1107.5], [81.0, 71.0], [91.0, 1742.0], [93.0, 605.0], [98.0, 93.5], [96.0, 1844.0], [106.0, 110.5], [105.0, 134.0], [111.0, 238.5], [109.0, 237.0], [108.0, 1389.5], [113.0, 756.0], [114.0, 1553.0], [120.0, 210.5], [121.0, 256.0], [123.0, 467.0], [122.0, 565.0], [129.0, 379.0], [133.0, 744.0], [135.0, 1361.0], [131.0, 1569.0], [140.0, 1013.5], [138.0, 1021.5], [139.0, 1739.0], [151.0, 1433.0], [178.0, 2223.5], [1.0, 15304.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 178.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 52.0, "minX": 1.0, "maxY": 16106.5, "series": [{"data": [[2.0, 16106.5], [47.0, 52.0], [65.0, 680.0], [74.0, 949.0], [81.0, 71.0], [91.0, 1735.0], [93.0, 592.0], [98.0, 92.5], [96.0, 1653.5], [106.0, 109.0], [105.0, 131.0], [111.0, 231.0], [109.0, 235.0], [108.0, 1344.5], [113.0, 748.5], [114.0, 1542.0], [120.0, 208.5], [121.0, 254.0], [123.0, 465.0], [122.0, 558.0], [129.0, 376.0], [133.0, 740.0], [135.0, 1357.0], [131.0, 1559.0], [140.0, 948.5], [138.0, 1014.5], [139.0, 1723.0], [151.0, 1383.0], [178.0, 2177.0], [1.0, 15261.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 178.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.6278587E12, "maxY": 131.7, "series": [{"data": [[1.6278587E12, 2.0], [1.62785873E12, 34.3], [1.62785874E12, 122.1], [1.62785875E12, 131.7], [1.62785876E12, 51.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62785876E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.7, "minX": 1.62785871E12, "maxY": 116.8, "series": [{"data": [[1.62785871E12, 0.7], [1.62785872E12, 0.7], [1.62785873E12, 33.6], [1.62785874E12, 116.4], [1.62785875E12, 116.8], [1.62785876E12, 73.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62785876E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.7, "minX": 1.62785871E12, "maxY": 116.8, "series": [{"data": [[1.62785871E12, 0.7], [1.62785872E12, 0.7], [1.62785873E12, 33.6], [1.62785874E12, 116.4], [1.62785875E12, 116.8], [1.62785876E12, 73.1]], "isOverall": false, "label": "Healthy Thinking-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62785876E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.7, "minX": 1.62785871E12, "maxY": 116.8, "series": [{"data": [[1.62785871E12, 0.7], [1.62785872E12, 0.7], [1.62785873E12, 33.6], [1.62785874E12, 116.4], [1.62785875E12, 116.8], [1.62785876E12, 73.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62785876E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

