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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 8251.0, "series": [{"data": [[0.0, 10.0], [0.1, 12.0], [0.2, 12.0], [0.3, 12.0], [0.4, 12.0], [0.5, 12.0], [0.6, 12.0], [0.7, 12.0], [0.8, 13.0], [0.9, 13.0], [1.0, 13.0], [1.1, 13.0], [1.2, 13.0], [1.3, 13.0], [1.4, 13.0], [1.5, 13.0], [1.6, 13.0], [1.7, 13.0], [1.8, 13.0], [1.9, 13.0], [2.0, 13.0], [2.1, 13.0], [2.2, 13.0], [2.3, 13.0], [2.4, 13.0], [2.5, 13.0], [2.6, 14.0], [2.7, 14.0], [2.8, 14.0], [2.9, 14.0], [3.0, 14.0], [3.1, 14.0], [3.2, 14.0], [3.3, 14.0], [3.4, 14.0], [3.5, 14.0], [3.6, 14.0], [3.7, 14.0], [3.8, 14.0], [3.9, 14.0], [4.0, 14.0], [4.1, 14.0], [4.2, 14.0], [4.3, 14.0], [4.4, 14.0], [4.5, 15.0], [4.6, 15.0], [4.7, 15.0], [4.8, 15.0], [4.9, 15.0], [5.0, 15.0], [5.1, 15.0], [5.2, 15.0], [5.3, 15.0], [5.4, 15.0], [5.5, 15.0], [5.6, 15.0], [5.7, 15.0], [5.8, 16.0], [5.9, 16.0], [6.0, 16.0], [6.1, 16.0], [6.2, 16.0], [6.3, 16.0], [6.4, 16.0], [6.5, 16.0], [6.6, 16.0], [6.7, 16.0], [6.8, 16.0], [6.9, 16.0], [7.0, 16.0], [7.1, 16.0], [7.2, 17.0], [7.3, 17.0], [7.4, 17.0], [7.5, 17.0], [7.6, 17.0], [7.7, 17.0], [7.8, 17.0], [7.9, 17.0], [8.0, 17.0], [8.1, 17.0], [8.2, 17.0], [8.3, 17.0], [8.4, 18.0], [8.5, 18.0], [8.6, 18.0], [8.7, 18.0], [8.8, 18.0], [8.9, 18.0], [9.0, 18.0], [9.1, 18.0], [9.2, 18.0], [9.3, 18.0], [9.4, 18.0], [9.5, 19.0], [9.6, 19.0], [9.7, 19.0], [9.8, 19.0], [9.9, 19.0], [10.0, 19.0], [10.1, 19.0], [10.2, 19.0], [10.3, 19.0], [10.4, 19.0], [10.5, 19.0], [10.6, 19.0], [10.7, 20.0], [10.8, 20.0], [10.9, 20.0], [11.0, 20.0], [11.1, 20.0], [11.2, 20.0], [11.3, 20.0], [11.4, 21.0], [11.5, 21.0], [11.6, 21.0], [11.7, 21.0], [11.8, 21.0], [11.9, 21.0], [12.0, 21.0], [12.1, 21.0], [12.2, 22.0], [12.3, 22.0], [12.4, 22.0], [12.5, 22.0], [12.6, 22.0], [12.7, 23.0], [12.8, 23.0], [12.9, 23.0], [13.0, 23.0], [13.1, 23.0], [13.2, 23.0], [13.3, 23.0], [13.4, 24.0], [13.5, 24.0], [13.6, 24.0], [13.7, 24.0], [13.8, 24.0], [13.9, 24.0], [14.0, 24.0], [14.1, 24.0], [14.2, 25.0], [14.3, 25.0], [14.4, 25.0], [14.5, 25.0], [14.6, 25.0], [14.7, 26.0], [14.8, 26.0], [14.9, 26.0], [15.0, 26.0], [15.1, 26.0], [15.2, 27.0], [15.3, 27.0], [15.4, 27.0], [15.5, 27.0], [15.6, 27.0], [15.7, 28.0], [15.8, 28.0], [15.9, 28.0], [16.0, 28.0], [16.1, 28.0], [16.2, 28.0], [16.3, 29.0], [16.4, 29.0], [16.5, 29.0], [16.6, 29.0], [16.7, 29.0], [16.8, 29.0], [16.9, 30.0], [17.0, 30.0], [17.1, 30.0], [17.2, 30.0], [17.3, 30.0], [17.4, 31.0], [17.5, 31.0], [17.6, 31.0], [17.7, 31.0], [17.8, 31.0], [17.9, 32.0], [18.0, 32.0], [18.1, 32.0], [18.2, 32.0], [18.3, 32.0], [18.4, 32.0], [18.5, 33.0], [18.6, 33.0], [18.7, 33.0], [18.8, 33.0], [18.9, 33.0], [19.0, 34.0], [19.1, 34.0], [19.2, 34.0], [19.3, 34.0], [19.4, 35.0], [19.5, 35.0], [19.6, 35.0], [19.7, 35.0], [19.8, 35.0], [19.9, 35.0], [20.0, 36.0], [20.1, 36.0], [20.2, 36.0], [20.3, 37.0], [20.4, 37.0], [20.5, 37.0], [20.6, 37.0], [20.7, 37.0], [20.8, 38.0], [20.9, 38.0], [21.0, 38.0], [21.1, 39.0], [21.2, 39.0], [21.3, 39.0], [21.4, 39.0], [21.5, 39.0], [21.6, 40.0], [21.7, 40.0], [21.8, 40.0], [21.9, 40.0], [22.0, 40.0], [22.1, 41.0], [22.2, 41.0], [22.3, 41.0], [22.4, 41.0], [22.5, 41.0], [22.6, 42.0], [22.7, 42.0], [22.8, 42.0], [22.9, 42.0], [23.0, 42.0], [23.1, 42.0], [23.2, 42.0], [23.3, 43.0], [23.4, 43.0], [23.5, 43.0], [23.6, 43.0], [23.7, 43.0], [23.8, 43.0], [23.9, 43.0], [24.0, 43.0], [24.1, 44.0], [24.2, 44.0], [24.3, 44.0], [24.4, 44.0], [24.5, 44.0], [24.6, 45.0], [24.7, 45.0], [24.8, 45.0], [24.9, 45.0], [25.0, 45.0], [25.1, 46.0], [25.2, 46.0], [25.3, 46.0], [25.4, 46.0], [25.5, 46.0], [25.6, 47.0], [25.7, 47.0], [25.8, 47.0], [25.9, 47.0], [26.0, 47.0], [26.1, 47.0], [26.2, 48.0], [26.3, 48.0], [26.4, 48.0], [26.5, 48.0], [26.6, 48.0], [26.7, 48.0], [26.8, 48.0], [26.9, 49.0], [27.0, 49.0], [27.1, 49.0], [27.2, 49.0], [27.3, 49.0], [27.4, 49.0], [27.5, 50.0], [27.6, 50.0], [27.7, 50.0], [27.8, 50.0], [27.9, 50.0], [28.0, 50.0], [28.1, 51.0], [28.2, 51.0], [28.3, 51.0], [28.4, 51.0], [28.5, 51.0], [28.6, 51.0], [28.7, 52.0], [28.8, 52.0], [28.9, 52.0], [29.0, 52.0], [29.1, 52.0], [29.2, 52.0], [29.3, 52.0], [29.4, 53.0], [29.5, 53.0], [29.6, 53.0], [29.7, 53.0], [29.8, 54.0], [29.9, 54.0], [30.0, 54.0], [30.1, 54.0], [30.2, 54.0], [30.3, 55.0], [30.4, 55.0], [30.5, 55.0], [30.6, 55.0], [30.7, 55.0], [30.8, 55.0], [30.9, 56.0], [31.0, 56.0], [31.1, 56.0], [31.2, 56.0], [31.3, 56.0], [31.4, 57.0], [31.5, 57.0], [31.6, 57.0], [31.7, 57.0], [31.8, 57.0], [31.9, 58.0], [32.0, 58.0], [32.1, 58.0], [32.2, 59.0], [32.3, 59.0], [32.4, 59.0], [32.5, 59.0], [32.6, 60.0], [32.7, 60.0], [32.8, 60.0], [32.9, 60.0], [33.0, 61.0], [33.1, 61.0], [33.2, 61.0], [33.3, 61.0], [33.4, 62.0], [33.5, 62.0], [33.6, 62.0], [33.7, 63.0], [33.8, 63.0], [33.9, 63.0], [34.0, 63.0], [34.1, 64.0], [34.2, 64.0], [34.3, 64.0], [34.4, 64.0], [34.5, 65.0], [34.6, 65.0], [34.7, 65.0], [34.8, 66.0], [34.9, 66.0], [35.0, 66.0], [35.1, 66.0], [35.2, 67.0], [35.3, 67.0], [35.4, 67.0], [35.5, 67.0], [35.6, 67.0], [35.7, 68.0], [35.8, 68.0], [35.9, 68.0], [36.0, 68.0], [36.1, 69.0], [36.2, 69.0], [36.3, 69.0], [36.4, 69.0], [36.5, 70.0], [36.6, 70.0], [36.7, 70.0], [36.8, 70.0], [36.9, 70.0], [37.0, 71.0], [37.1, 71.0], [37.2, 71.0], [37.3, 72.0], [37.4, 72.0], [37.5, 72.0], [37.6, 72.0], [37.7, 72.0], [37.8, 73.0], [37.9, 73.0], [38.0, 73.0], [38.1, 73.0], [38.2, 74.0], [38.3, 74.0], [38.4, 75.0], [38.5, 75.0], [38.6, 75.0], [38.7, 75.0], [38.8, 76.0], [38.9, 76.0], [39.0, 76.0], [39.1, 76.0], [39.2, 77.0], [39.3, 77.0], [39.4, 77.0], [39.5, 78.0], [39.6, 78.0], [39.7, 79.0], [39.8, 79.0], [39.9, 79.0], [40.0, 79.0], [40.1, 79.0], [40.2, 80.0], [40.3, 80.0], [40.4, 80.0], [40.5, 80.0], [40.6, 81.0], [40.7, 81.0], [40.8, 82.0], [40.9, 82.0], [41.0, 82.0], [41.1, 83.0], [41.2, 83.0], [41.3, 83.0], [41.4, 84.0], [41.5, 84.0], [41.6, 85.0], [41.7, 85.0], [41.8, 85.0], [41.9, 86.0], [42.0, 86.0], [42.1, 87.0], [42.2, 87.0], [42.3, 87.0], [42.4, 87.0], [42.5, 88.0], [42.6, 88.0], [42.7, 88.0], [42.8, 89.0], [42.9, 89.0], [43.0, 90.0], [43.1, 90.0], [43.2, 91.0], [43.3, 91.0], [43.4, 91.0], [43.5, 92.0], [43.6, 92.0], [43.7, 92.0], [43.8, 93.0], [43.9, 93.0], [44.0, 93.0], [44.1, 94.0], [44.2, 95.0], [44.3, 95.0], [44.4, 95.0], [44.5, 95.0], [44.6, 96.0], [44.7, 96.0], [44.8, 96.0], [44.9, 97.0], [45.0, 97.0], [45.1, 98.0], [45.2, 98.0], [45.3, 98.0], [45.4, 99.0], [45.5, 99.0], [45.6, 99.0], [45.7, 100.0], [45.8, 100.0], [45.9, 100.0], [46.0, 101.0], [46.1, 101.0], [46.2, 102.0], [46.3, 103.0], [46.4, 103.0], [46.5, 103.0], [46.6, 103.0], [46.7, 104.0], [46.8, 104.0], [46.9, 104.0], [47.0, 104.0], [47.1, 105.0], [47.2, 105.0], [47.3, 106.0], [47.4, 106.0], [47.5, 107.0], [47.6, 107.0], [47.7, 107.0], [47.8, 107.0], [47.9, 108.0], [48.0, 108.0], [48.1, 108.0], [48.2, 109.0], [48.3, 109.0], [48.4, 109.0], [48.5, 110.0], [48.6, 110.0], [48.7, 111.0], [48.8, 111.0], [48.9, 111.0], [49.0, 112.0], [49.1, 112.0], [49.2, 113.0], [49.3, 113.0], [49.4, 114.0], [49.5, 114.0], [49.6, 115.0], [49.7, 115.0], [49.8, 115.0], [49.9, 115.0], [50.0, 116.0], [50.1, 116.0], [50.2, 117.0], [50.3, 117.0], [50.4, 118.0], [50.5, 119.0], [50.6, 119.0], [50.7, 120.0], [50.8, 121.0], [50.9, 121.0], [51.0, 122.0], [51.1, 122.0], [51.2, 123.0], [51.3, 124.0], [51.4, 124.0], [51.5, 125.0], [51.6, 125.0], [51.7, 126.0], [51.8, 127.0], [51.9, 127.0], [52.0, 128.0], [52.1, 128.0], [52.2, 129.0], [52.3, 129.0], [52.4, 130.0], [52.5, 130.0], [52.6, 131.0], [52.7, 133.0], [52.8, 133.0], [52.9, 134.0], [53.0, 135.0], [53.1, 135.0], [53.2, 135.0], [53.3, 136.0], [53.4, 138.0], [53.5, 139.0], [53.6, 139.0], [53.7, 140.0], [53.8, 140.0], [53.9, 141.0], [54.0, 141.0], [54.1, 142.0], [54.2, 143.0], [54.3, 144.0], [54.4, 144.0], [54.5, 145.0], [54.6, 146.0], [54.7, 147.0], [54.8, 147.0], [54.9, 147.0], [55.0, 148.0], [55.1, 149.0], [55.2, 151.0], [55.3, 152.0], [55.4, 152.0], [55.5, 152.0], [55.6, 153.0], [55.7, 154.0], [55.8, 155.0], [55.9, 155.0], [56.0, 156.0], [56.1, 156.0], [56.2, 158.0], [56.3, 158.0], [56.4, 159.0], [56.5, 159.0], [56.6, 160.0], [56.7, 161.0], [56.8, 162.0], [56.9, 163.0], [57.0, 163.0], [57.1, 164.0], [57.2, 164.0], [57.3, 165.0], [57.4, 166.0], [57.5, 167.0], [57.6, 167.0], [57.7, 167.0], [57.8, 168.0], [57.9, 168.0], [58.0, 169.0], [58.1, 170.0], [58.2, 171.0], [58.3, 171.0], [58.4, 172.0], [58.5, 172.0], [58.6, 173.0], [58.7, 175.0], [58.8, 175.0], [58.9, 176.0], [59.0, 176.0], [59.1, 178.0], [59.2, 178.0], [59.3, 179.0], [59.4, 179.0], [59.5, 181.0], [59.6, 182.0], [59.7, 183.0], [59.8, 183.0], [59.9, 184.0], [60.0, 185.0], [60.1, 186.0], [60.2, 187.0], [60.3, 187.0], [60.4, 188.0], [60.5, 189.0], [60.6, 190.0], [60.7, 191.0], [60.8, 191.0], [60.9, 192.0], [61.0, 193.0], [61.1, 194.0], [61.2, 195.0], [61.3, 196.0], [61.4, 197.0], [61.5, 198.0], [61.6, 198.0], [61.7, 199.0], [61.8, 201.0], [61.9, 203.0], [62.0, 204.0], [62.1, 205.0], [62.2, 206.0], [62.3, 207.0], [62.4, 208.0], [62.5, 208.0], [62.6, 209.0], [62.7, 210.0], [62.8, 211.0], [62.9, 212.0], [63.0, 212.0], [63.1, 214.0], [63.2, 215.0], [63.3, 215.0], [63.4, 216.0], [63.5, 217.0], [63.6, 219.0], [63.7, 220.0], [63.8, 220.0], [63.9, 221.0], [64.0, 222.0], [64.1, 224.0], [64.2, 224.0], [64.3, 225.0], [64.4, 227.0], [64.5, 228.0], [64.6, 229.0], [64.7, 231.0], [64.8, 232.0], [64.9, 235.0], [65.0, 236.0], [65.1, 239.0], [65.2, 240.0], [65.3, 243.0], [65.4, 246.0], [65.5, 248.0], [65.6, 250.0], [65.7, 251.0], [65.8, 254.0], [65.9, 255.0], [66.0, 256.0], [66.1, 259.0], [66.2, 260.0], [66.3, 264.0], [66.4, 266.0], [66.5, 268.0], [66.6, 271.0], [66.7, 272.0], [66.8, 276.0], [66.9, 278.0], [67.0, 279.0], [67.1, 281.0], [67.2, 283.0], [67.3, 284.0], [67.4, 285.0], [67.5, 288.0], [67.6, 290.0], [67.7, 294.0], [67.8, 297.0], [67.9, 300.0], [68.0, 301.0], [68.1, 304.0], [68.2, 306.0], [68.3, 307.0], [68.4, 308.0], [68.5, 310.0], [68.6, 312.0], [68.7, 314.0], [68.8, 315.0], [68.9, 317.0], [69.0, 319.0], [69.1, 319.0], [69.2, 321.0], [69.3, 322.0], [69.4, 323.0], [69.5, 325.0], [69.6, 327.0], [69.7, 328.0], [69.8, 329.0], [69.9, 332.0], [70.0, 334.0], [70.1, 335.0], [70.2, 336.0], [70.3, 338.0], [70.4, 339.0], [70.5, 341.0], [70.6, 342.0], [70.7, 342.0], [70.8, 343.0], [70.9, 345.0], [71.0, 346.0], [71.1, 347.0], [71.2, 349.0], [71.3, 352.0], [71.4, 353.0], [71.5, 354.0], [71.6, 359.0], [71.7, 360.0], [71.8, 362.0], [71.9, 364.0], [72.0, 367.0], [72.1, 369.0], [72.2, 371.0], [72.3, 373.0], [72.4, 374.0], [72.5, 376.0], [72.6, 377.0], [72.7, 379.0], [72.8, 382.0], [72.9, 383.0], [73.0, 386.0], [73.1, 387.0], [73.2, 389.0], [73.3, 390.0], [73.4, 392.0], [73.5, 394.0], [73.6, 397.0], [73.7, 399.0], [73.8, 400.0], [73.9, 402.0], [74.0, 403.0], [74.1, 404.0], [74.2, 406.0], [74.3, 407.0], [74.4, 408.0], [74.5, 409.0], [74.6, 411.0], [74.7, 412.0], [74.8, 416.0], [74.9, 418.0], [75.0, 420.0], [75.1, 422.0], [75.2, 423.0], [75.3, 425.0], [75.4, 428.0], [75.5, 430.0], [75.6, 432.0], [75.7, 434.0], [75.8, 437.0], [75.9, 438.0], [76.0, 440.0], [76.1, 441.0], [76.2, 443.0], [76.3, 443.0], [76.4, 446.0], [76.5, 448.0], [76.6, 450.0], [76.7, 452.0], [76.8, 454.0], [76.9, 457.0], [77.0, 458.0], [77.1, 460.0], [77.2, 463.0], [77.3, 464.0], [77.4, 465.0], [77.5, 468.0], [77.6, 470.0], [77.7, 471.0], [77.8, 473.0], [77.9, 474.0], [78.0, 476.0], [78.1, 480.0], [78.2, 481.0], [78.3, 482.0], [78.4, 483.0], [78.5, 484.0], [78.6, 487.0], [78.7, 489.0], [78.8, 490.0], [78.9, 491.0], [79.0, 493.0], [79.1, 495.0], [79.2, 496.0], [79.3, 498.0], [79.4, 499.0], [79.5, 501.0], [79.6, 502.0], [79.7, 504.0], [79.8, 505.0], [79.9, 506.0], [80.0, 507.0], [80.1, 511.0], [80.2, 512.0], [80.3, 513.0], [80.4, 515.0], [80.5, 518.0], [80.6, 520.0], [80.7, 522.0], [80.8, 524.0], [80.9, 526.0], [81.0, 528.0], [81.1, 530.0], [81.2, 533.0], [81.3, 534.0], [81.4, 534.0], [81.5, 536.0], [81.6, 540.0], [81.7, 542.0], [81.8, 544.0], [81.9, 546.0], [82.0, 548.0], [82.1, 550.0], [82.2, 551.0], [82.3, 554.0], [82.4, 555.0], [82.5, 557.0], [82.6, 559.0], [82.7, 561.0], [82.8, 562.0], [82.9, 563.0], [83.0, 564.0], [83.1, 565.0], [83.2, 567.0], [83.3, 568.0], [83.4, 568.0], [83.5, 570.0], [83.6, 571.0], [83.7, 572.0], [83.8, 574.0], [83.9, 576.0], [84.0, 578.0], [84.1, 580.0], [84.2, 583.0], [84.3, 586.0], [84.4, 590.0], [84.5, 591.0], [84.6, 593.0], [84.7, 594.0], [84.8, 596.0], [84.9, 597.0], [85.0, 599.0], [85.1, 600.0], [85.2, 603.0], [85.3, 605.0], [85.4, 606.0], [85.5, 610.0], [85.6, 611.0], [85.7, 615.0], [85.8, 619.0], [85.9, 622.0], [86.0, 624.0], [86.1, 627.0], [86.2, 628.0], [86.3, 630.0], [86.4, 634.0], [86.5, 637.0], [86.6, 639.0], [86.7, 640.0], [86.8, 643.0], [86.9, 645.0], [87.0, 649.0], [87.1, 652.0], [87.2, 655.0], [87.3, 660.0], [87.4, 661.0], [87.5, 664.0], [87.6, 668.0], [87.7, 673.0], [87.8, 675.0], [87.9, 680.0], [88.0, 682.0], [88.1, 685.0], [88.2, 689.0], [88.3, 693.0], [88.4, 697.0], [88.5, 700.0], [88.6, 706.0], [88.7, 712.0], [88.8, 716.0], [88.9, 725.0], [89.0, 728.0], [89.1, 733.0], [89.2, 736.0], [89.3, 747.0], [89.4, 750.0], [89.5, 754.0], [89.6, 759.0], [89.7, 763.0], [89.8, 769.0], [89.9, 779.0], [90.0, 784.0], [90.1, 789.0], [90.2, 798.0], [90.3, 803.0], [90.4, 808.0], [90.5, 814.0], [90.6, 821.0], [90.7, 829.0], [90.8, 837.0], [90.9, 841.0], [91.0, 850.0], [91.1, 857.0], [91.2, 865.0], [91.3, 874.0], [91.4, 878.0], [91.5, 880.0], [91.6, 886.0], [91.7, 890.0], [91.8, 896.0], [91.9, 909.0], [92.0, 918.0], [92.1, 923.0], [92.2, 928.0], [92.3, 934.0], [92.4, 937.0], [92.5, 943.0], [92.6, 944.0], [92.7, 952.0], [92.8, 955.0], [92.9, 966.0], [93.0, 971.0], [93.1, 974.0], [93.2, 976.0], [93.3, 982.0], [93.4, 988.0], [93.5, 995.0], [93.6, 1002.0], [93.7, 1008.0], [93.8, 1015.0], [93.9, 1020.0], [94.0, 1023.0], [94.1, 1029.0], [94.2, 1033.0], [94.3, 1037.0], [94.4, 1040.0], [94.5, 1046.0], [94.6, 1050.0], [94.7, 1058.0], [94.8, 1060.0], [94.9, 1067.0], [95.0, 1075.0], [95.1, 1079.0], [95.2, 1083.0], [95.3, 1091.0], [95.4, 1097.0], [95.5, 1100.0], [95.6, 1103.0], [95.7, 1116.0], [95.8, 1122.0], [95.9, 1132.0], [96.0, 1135.0], [96.1, 1144.0], [96.2, 1161.0], [96.3, 1172.0], [96.4, 1180.0], [96.5, 1193.0], [96.6, 1200.0], [96.7, 1231.0], [96.8, 1246.0], [96.9, 1253.0], [97.0, 1263.0], [97.1, 1281.0], [97.2, 1317.0], [97.3, 1356.0], [97.4, 1379.0], [97.5, 1422.0], [97.6, 1458.0], [97.7, 1501.0], [97.8, 1554.0], [97.9, 1579.0], [98.0, 1593.0], [98.1, 1625.0], [98.2, 1679.0], [98.3, 1726.0], [98.4, 1755.0], [98.5, 1792.0], [98.6, 1822.0], [98.7, 1848.0], [98.8, 1893.0], [98.9, 1929.0], [99.0, 1950.0], [99.1, 2004.0], [99.2, 2074.0], [99.3, 2184.0], [99.4, 2265.0], [99.5, 4134.0], [99.6, 4265.0], [99.7, 4317.0], [99.8, 4385.0], [99.9, 4540.0], [100.0, 8251.0]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 3098.0, "series": [{"data": [[0.0, 3098.0], [8200.0, 1.0], [600.0, 230.0], [700.0, 119.0], [800.0, 108.0], [900.0, 118.0], [1000.0, 128.0], [1100.0, 77.0], [1200.0, 40.0], [1300.0, 18.0], [1400.0, 15.0], [1500.0, 23.0], [100.0, 1085.0], [1600.0, 17.0], [1700.0, 18.0], [1800.0, 23.0], [1900.0, 14.0], [2000.0, 10.0], [2100.0, 7.0], [2200.0, 7.0], [2300.0, 2.0], [2600.0, 1.0], [200.0, 417.0], [4000.0, 2.0], [4200.0, 8.0], [4100.0, 4.0], [4300.0, 10.0], [4400.0, 4.0], [4500.0, 3.0], [4600.0, 1.0], [300.0, 400.0], [4700.0, 1.0], [400.0, 384.0], [7900.0, 1.0], [500.0, 384.0], [8000.0, 1.0]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 157.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5389.0, "series": [{"data": [[0.0, 5389.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1233.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 157.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.6094986807387888, "minX": 1.62768467E12, "maxY": 143.70215053763414, "series": [{"data": [[1.62768474E12, 143.70215053763414], [1.62768475E12, 2.6666666666666665], [1.62768472E12, 29.00786885245905], [1.62768473E12, 107.02330226364843], [1.6276847E12, 6.286764705882352], [1.62768471E12, 8.631184407796095], [1.62768468E12, 2.6094986807387888], [1.62768469E12, 2.9949238578680193], [1.62768467E12, 9.062500000000004]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62768475E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20.518134715025894, "minX": 2.0, "maxY": 2965.0, "series": [{"data": [[2.0, 20.518134715025894], [3.0, 45.263945578231294], [4.0, 25.549295774647902], [5.0, 38.27692307692308], [6.0, 45.71900826446279], [7.0, 39.70588235294119], [8.0, 60.42748091603052], [9.0, 54.41379310344827], [10.0, 67.3793103448276], [11.0, 78.04895104895105], [12.0, 109.78512396694218], [13.0, 137.5], [14.0, 89.65803108808296], [15.0, 99.33333333333334], [16.0, 105.19607843137254], [17.0, 128.5], [18.0, 118.88815789473682], [19.0, 101.6], [20.0, 132.08280254777077], [21.0, 114.4], [22.0, 111.33333333333333], [23.0, 146.8231707317073], [24.0, 67.0], [25.0, 125.33333333333334], [26.0, 161.58787878787874], [27.0, 145.42857142857142], [28.0, 121.0], [29.0, 83.68181818181819], [30.0, 187.75], [31.0, 164.0], [32.0, 173.16666666666666], [33.0, 189.57142857142858], [34.0, 211.61212121212134], [35.0, 181.0], [36.0, 193.0], [37.0, 206.33333333333334], [38.0, 206.5], [39.0, 208.83333333333334], [40.0, 263.9281045751633], [41.0, 138.0], [42.0, 230.27272727272728], [43.0, 196.0], [44.0, 252.85714285714283], [45.0, 200.66666666666666], [46.0, 238.6], [47.0, 266.0], [48.0, 290.87500000000006], [49.0, 222.5], [50.0, 281.8], [51.0, 294.54545454545456], [52.0, 320.0], [53.0, 208.0], [54.0, 286.85714285714283], [55.0, 315.8627450980392], [56.0, 348.24800000000016], [57.0, 316.3333333333333], [58.0, 159.47727272727272], [59.0, 303.6], [60.0, 332.29999999999995], [61.0, 338.7], [62.0, 372.0], [63.0, 341.36585365853665], [64.0, 405.54545454545456], [65.0, 342.17499999999995], [66.0, 441.00000000000006], [67.0, 401.75], [68.0, 389.0], [69.0, 416.33333333333337], [70.0, 371.65000000000003], [71.0, 405.83333333333337], [72.0, 417.4285714285714], [73.0, 413.44444444444446], [74.0, 427.00000000000006], [75.0, 385.5], [76.0, 420.2727272727272], [77.0, 426.6818181818182], [78.0, 411.5], [79.0, 431.33333333333326], [81.0, 467.4761904761905], [82.0, 452.44444444444446], [83.0, 434.42857142857144], [80.0, 56.0], [84.0, 463.8333333333333], [85.0, 481.6896551724138], [86.0, 424.75], [87.0, 409.6666666666667], [88.0, 413.33333333333337], [89.0, 510.0000000000001], [90.0, 509.41666666666674], [91.0, 503.90909090909093], [92.0, 522.9499999999999], [93.0, 534.2142857142856], [94.0, 543.3636363636364], [95.0, 385.0], [96.0, 540.9545454545455], [97.0, 483.66666666666663], [98.0, 681.6999999999999], [99.0, 526.5333333333334], [100.0, 578.7368421052631], [101.0, 588.2916666666665], [102.0, 515.7142857142858], [103.0, 633.3793103448277], [104.0, 602.9090909090909], [105.0, 422.8888888888889], [106.0, 507.3913043478262], [107.0, 368.66666666666663], [109.0, 467.25], [110.0, 330.0], [111.0, 436.43137254901967], [108.0, 85.0], [113.0, 411.53846153846155], [114.0, 471.62499999999994], [115.0, 83.0], [112.0, 66.0], [118.0, 507.25], [119.0, 523.75], [117.0, 154.5862068965517], [116.0, 93.0], [120.0, 502.4444444444445], [121.0, 499.3333333333333], [122.0, 527.8], [123.0, 471.28571428571433], [124.0, 549.25], [125.0, 481.6666666666667], [126.0, 572.2], [127.0, 507.00000000000006], [128.0, 524.2], [129.0, 546.6666666666666], [130.0, 614.8571428571428], [131.0, 541.0], [132.0, 585.6666666666666], [133.0, 562.2222222222222], [134.0, 625.4285714285714], [135.0, 613.2500000000001], [136.0, 600.0], [137.0, 605.9230769230769], [138.0, 538.6666666666666], [139.0, 548.3], [140.0, 577.125], [142.0, 578.0000000000001], [143.0, 694.945945945946], [141.0, 494.0], [144.0, 675.8666666666667], [145.0, 678.8571428571429], [146.0, 687.4166666666666], [147.0, 713.5], [149.0, 1338.8], [150.0, 2965.0], [151.0, 1451.1538461538462], [148.0, 307.0], [152.0, 1365.7702702702697], [153.0, 839.5], [154.0, 1067.0], [155.0, 838.9411764705883], [156.0, 1060.4074074074074], [157.0, 909.3703703703706], [158.0, 980.8], [159.0, 968.4545454545455], [160.0, 1044.090909090909], [161.0, 1037.9642857142856], [162.0, 1094.9166666666665], [164.0, 965.4666666666667], [165.0, 1078.340425531915], [166.0, 1038.952380952381], [167.0, 1026.7142857142856], [168.0, 981.5000000000001], [169.0, 1028.6388888888891], [175.0, 562.0], [171.0, 700.0], [183.0, 605.5], [182.0, 786.0], [180.0, 535.0], [178.0, 821.0], [177.0, 673.0], [176.0, 610.0], [191.0, 484.0], [190.0, 401.0], [188.0, 660.0], [187.0, 611.25], [185.0, 755.0], [184.0, 506.0], [199.0, 491.0], [198.0, 627.0], [197.0, 726.2777777777778], [196.0, 394.0], [195.0, 888.0], [194.0, 655.0], [193.0, 714.0], [192.0, 619.0], [202.0, 369.0], [201.0, 372.0], [200.0, 559.0], [220.0, 693.0], [231.0, 759.0], [230.0, 750.0], [229.0, 847.0], [228.0, 912.0], [234.0, 671.12], [235.0, 1418.7441860465121], [233.0, 1045.0], [232.0, 884.0]], "isOverall": false, "label": "Sunstar Search", "isController": false}, {"data": [[52.02197964301525, 304.9092786546692]], "isOverall": false, "label": "Sunstar Search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 235.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 58.5, "minX": 1.62768467E12, "maxY": 1083970.0, "series": [{"data": [[1.62768474E12, 661044.0], [1.62768475E12, 2132.4], [1.62768472E12, 1083970.0], [1.62768473E12, 1067624.4], [1.6276847E12, 483251.3], [1.62768471E12, 948159.1], [1.62768468E12, 269437.4], [1.62768469E12, 280094.6], [1.62768467E12, 22750.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62768474E12, 18135.0], [1.62768475E12, 58.5], [1.62768472E12, 29737.5], [1.62768473E12, 29289.0], [1.6276847E12, 13260.0], [1.62768471E12, 26013.0], [1.62768468E12, 7390.5], [1.62768469E12, 7683.0], [1.62768467E12, 624.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62768475E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 18.98223350253808, "minX": 1.62768467E12, "maxY": 715.3096774193554, "series": [{"data": [[1.62768474E12, 715.3096774193554], [1.62768475E12, 41.666666666666664], [1.62768472E12, 182.52196721311478], [1.62768473E12, 649.9440745672432], [1.6276847E12, 69.9661764705883], [1.62768471E12, 59.651424287856045], [1.62768468E12, 24.361477572559373], [1.62768469E12, 18.98223350253808], [1.62768467E12, 99.71875000000003]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62768475E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 18.697969543147202, "minX": 1.62768467E12, "maxY": 712.417204301075, "series": [{"data": [[1.62768474E12, 712.417204301075], [1.62768475E12, 41.333333333333336], [1.62768472E12, 182.30295081967216], [1.62768473E12, 648.2816245006662], [1.6276847E12, 69.60000000000004], [1.62768471E12, 59.39805097451274], [1.62768468E12, 24.002638522427414], [1.62768469E12, 18.697969543147202], [1.62768467E12, 98.90625000000001]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62768475E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 17.134517766497463, "minX": 1.62768467E12, "maxY": 688.5322580645172, "series": [{"data": [[1.62768474E12, 688.5322580645172], [1.62768475E12, 33.666666666666664], [1.62768472E12, 176.8721311475408], [1.62768473E12, 629.5592543275634], [1.6276847E12, 31.494117647058758], [1.62768471E12, 56.08770614692657], [1.62768468E12, 21.881266490765167], [1.62768469E12, 17.134517766497463], [1.62768467E12, 90.74999999999996]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62768475E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.62768467E12, "maxY": 8251.0, "series": [{"data": [[1.62768474E12, 2657.0], [1.62768475E12, 43.0], [1.62768472E12, 518.0], [1.62768473E12, 4719.0], [1.6276847E12, 8251.0], [1.62768471E12, 145.0], [1.62768468E12, 106.0], [1.62768469E12, 51.0], [1.62768467E12, 580.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62768474E12, 39.0], [1.62768475E12, 40.0], [1.62768472E12, 69.0], [1.62768473E12, 216.0], [1.6276847E12, 10.0], [1.62768471E12, 11.0], [1.62768468E12, 13.0], [1.62768469E12, 12.0], [1.62768467E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62768474E12, 1624.9], [1.62768475E12, 43.0], [1.62768472E12, 292.8000000000002], [1.62768473E12, 933.7], [1.6276847E12, 63.0], [1.62768471E12, 91.0], [1.62768468E12, 39.0], [1.62768469E12, 33.0], [1.62768467E12, 170.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62768474E12, 2226.69], [1.62768475E12, 43.0], [1.62768472E12, 431.74], [1.62768473E12, 4359.52], [1.6276847E12, 112.75999999999976], [1.62768471E12, 119.65000000000009], [1.62768468E12, 87.0], [1.62768469E12, 47.150000000000034], [1.62768467E12, 580.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62768474E12, 1891.8999999999999], [1.62768475E12, 43.0], [1.62768472E12, 325.0], [1.62768473E12, 1058.85], [1.6276847E12, 79.0], [1.62768471E12, 102.0], [1.62768468E12, 59.0], [1.62768469E12, 39.25], [1.62768467E12, 317.3999999999991]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62768475E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.5, "minX": 1.0, "maxY": 1441.5, "series": [{"data": [[4.0, 79.5], [5.0, 19.0], [10.0, 163.0], [16.0, 44.0], [18.0, 42.5], [23.0, 24.0], [25.0, 21.0], [30.0, 32.0], [32.0, 17.0], [37.0, 19.0], [36.0, 1050.5], [38.0, 18.0], [43.0, 21.0], [45.0, 25.0], [44.0, 77.0], [52.0, 32.0], [54.0, 17.0], [57.0, 15.0], [58.0, 58.0], [61.0, 15.0], [64.0, 16.0], [68.0, 16.0], [70.0, 13.5], [71.0, 82.0], [74.0, 21.5], [88.0, 70.0], [104.0, 51.0], [113.0, 24.0], [117.0, 22.0], [119.0, 596.0], [124.0, 37.0], [125.0, 39.5], [129.0, 51.0], [143.0, 54.0], [141.0, 83.0], [147.0, 169.5], [150.0, 110.5], [151.0, 141.0], [149.0, 502.0], [153.0, 197.0], [152.0, 234.0], [158.0, 175.0], [157.0, 316.0], [156.0, 644.0], [154.0, 639.0], [160.0, 403.0], [161.0, 858.0], [175.0, 394.0], [256.0, 1441.5], [1.0, 42.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 256.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 1441.5, "series": [{"data": [[4.0, 78.5], [5.0, 18.0], [10.0, 162.5], [16.0, 44.0], [18.0, 42.5], [23.0, 24.0], [25.0, 21.0], [30.0, 32.0], [32.0, 17.0], [37.0, 19.0], [36.0, 1039.5], [38.0, 17.5], [43.0, 21.0], [45.0, 24.0], [44.0, 76.0], [52.0, 32.0], [54.0, 17.0], [57.0, 14.0], [58.0, 58.0], [61.0, 15.0], [64.0, 15.0], [68.0, 15.0], [70.0, 13.0], [71.0, 81.0], [74.0, 20.0], [88.0, 70.0], [104.0, 50.0], [113.0, 24.0], [117.0, 22.0], [119.0, 589.0], [124.0, 36.0], [125.0, 39.0], [129.0, 51.0], [143.0, 53.0], [141.0, 83.0], [147.0, 169.5], [150.0, 110.0], [151.0, 141.0], [149.0, 502.0], [153.0, 197.0], [152.0, 234.0], [158.0, 175.0], [157.0, 316.0], [156.0, 644.0], [154.0, 638.0], [160.0, 403.0], [161.0, 858.0], [175.0, 394.0], [256.0, 1441.5], [1.0, 42.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 256.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62768467E12, "maxY": 160.7, "series": [{"data": [[1.62768474E12, 76.9], [1.62768475E12, 0.3], [1.62768472E12, 156.7], [1.62768473E12, 160.7], [1.6276847E12, 67.8], [1.62768471E12, 134.7], [1.62768468E12, 37.9], [1.62768469E12, 39.6], [1.62768467E12, 3.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62768475E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62768467E12, "maxY": 152.5, "series": [{"data": [[1.62768474E12, 93.0], [1.62768475E12, 0.3], [1.62768472E12, 152.5], [1.62768473E12, 150.2], [1.6276847E12, 68.0], [1.62768471E12, 133.4], [1.62768468E12, 37.9], [1.62768469E12, 39.4], [1.62768467E12, 3.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62768475E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62768467E12, "maxY": 152.5, "series": [{"data": [[1.62768474E12, 93.0], [1.62768475E12, 0.3], [1.62768472E12, 152.5], [1.62768473E12, 150.2], [1.6276847E12, 68.0], [1.62768471E12, 133.4], [1.62768468E12, 37.9], [1.62768469E12, 39.4], [1.62768467E12, 3.2]], "isOverall": false, "label": "Sunstar Search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62768475E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62768467E12, "maxY": 152.5, "series": [{"data": [[1.62768474E12, 93.0], [1.62768475E12, 0.3], [1.62768472E12, 152.5], [1.62768473E12, 150.2], [1.6276847E12, 68.0], [1.62768471E12, 133.4], [1.62768468E12, 37.9], [1.62768469E12, 39.4], [1.62768467E12, 3.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62768475E12, "title": "Total Transactions Per Second"}},
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

