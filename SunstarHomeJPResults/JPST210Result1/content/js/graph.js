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
        data: {"result": {"minY": 14.0, "minX": 0.0, "maxY": 1602.0, "series": [{"data": [[0.0, 14.0], [0.1, 15.0], [0.2, 15.0], [0.3, 15.0], [0.4, 15.0], [0.5, 16.0], [0.6, 16.0], [0.7, 16.0], [0.8, 16.0], [0.9, 16.0], [1.0, 16.0], [1.1, 16.0], [1.2, 17.0], [1.3, 17.0], [1.4, 17.0], [1.5, 17.0], [1.6, 17.0], [1.7, 17.0], [1.8, 17.0], [1.9, 17.0], [2.0, 17.0], [2.1, 18.0], [2.2, 18.0], [2.3, 18.0], [2.4, 18.0], [2.5, 18.0], [2.6, 18.0], [2.7, 19.0], [2.8, 19.0], [2.9, 19.0], [3.0, 19.0], [3.1, 19.0], [3.2, 19.0], [3.3, 20.0], [3.4, 20.0], [3.5, 20.0], [3.6, 20.0], [3.7, 20.0], [3.8, 20.0], [3.9, 20.0], [4.0, 20.0], [4.1, 20.0], [4.2, 20.0], [4.3, 20.0], [4.4, 21.0], [4.5, 21.0], [4.6, 21.0], [4.7, 21.0], [4.8, 21.0], [4.9, 21.0], [5.0, 21.0], [5.1, 21.0], [5.2, 21.0], [5.3, 21.0], [5.4, 21.0], [5.5, 21.0], [5.6, 21.0], [5.7, 21.0], [5.8, 21.0], [5.9, 21.0], [6.0, 21.0], [6.1, 22.0], [6.2, 22.0], [6.3, 22.0], [6.4, 22.0], [6.5, 22.0], [6.6, 22.0], [6.7, 22.0], [6.8, 22.0], [6.9, 22.0], [7.0, 22.0], [7.1, 22.0], [7.2, 22.0], [7.3, 22.0], [7.4, 22.0], [7.5, 22.0], [7.6, 22.0], [7.7, 22.0], [7.8, 22.0], [7.9, 22.0], [8.0, 22.0], [8.1, 22.0], [8.2, 23.0], [8.3, 23.0], [8.4, 23.0], [8.5, 23.0], [8.6, 23.0], [8.7, 23.0], [8.8, 23.0], [8.9, 23.0], [9.0, 23.0], [9.1, 23.0], [9.2, 23.0], [9.3, 23.0], [9.4, 23.0], [9.5, 23.0], [9.6, 23.0], [9.7, 23.0], [9.8, 23.0], [9.9, 23.0], [10.0, 23.0], [10.1, 23.0], [10.2, 24.0], [10.3, 24.0], [10.4, 24.0], [10.5, 24.0], [10.6, 24.0], [10.7, 24.0], [10.8, 24.0], [10.9, 24.0], [11.0, 24.0], [11.1, 24.0], [11.2, 24.0], [11.3, 24.0], [11.4, 24.0], [11.5, 24.0], [11.6, 24.0], [11.7, 24.0], [11.8, 24.0], [11.9, 24.0], [12.0, 25.0], [12.1, 25.0], [12.2, 25.0], [12.3, 25.0], [12.4, 25.0], [12.5, 25.0], [12.6, 25.0], [12.7, 25.0], [12.8, 25.0], [12.9, 25.0], [13.0, 25.0], [13.1, 25.0], [13.2, 25.0], [13.3, 25.0], [13.4, 25.0], [13.5, 25.0], [13.6, 25.0], [13.7, 26.0], [13.8, 26.0], [13.9, 26.0], [14.0, 26.0], [14.1, 26.0], [14.2, 26.0], [14.3, 26.0], [14.4, 26.0], [14.5, 26.0], [14.6, 26.0], [14.7, 26.0], [14.8, 26.0], [14.9, 26.0], [15.0, 26.0], [15.1, 26.0], [15.2, 26.0], [15.3, 26.0], [15.4, 26.0], [15.5, 26.0], [15.6, 26.0], [15.7, 26.0], [15.8, 27.0], [15.9, 27.0], [16.0, 27.0], [16.1, 27.0], [16.2, 27.0], [16.3, 27.0], [16.4, 27.0], [16.5, 27.0], [16.6, 27.0], [16.7, 27.0], [16.8, 27.0], [16.9, 27.0], [17.0, 27.0], [17.1, 27.0], [17.2, 27.0], [17.3, 27.0], [17.4, 27.0], [17.5, 28.0], [17.6, 28.0], [17.7, 28.0], [17.8, 28.0], [17.9, 28.0], [18.0, 28.0], [18.1, 28.0], [18.2, 28.0], [18.3, 28.0], [18.4, 28.0], [18.5, 28.0], [18.6, 28.0], [18.7, 28.0], [18.8, 28.0], [18.9, 28.0], [19.0, 28.0], [19.1, 28.0], [19.2, 28.0], [19.3, 28.0], [19.4, 28.0], [19.5, 29.0], [19.6, 29.0], [19.7, 29.0], [19.8, 29.0], [19.9, 29.0], [20.0, 29.0], [20.1, 29.0], [20.2, 29.0], [20.3, 29.0], [20.4, 29.0], [20.5, 29.0], [20.6, 29.0], [20.7, 29.0], [20.8, 29.0], [20.9, 29.0], [21.0, 29.0], [21.1, 29.0], [21.2, 30.0], [21.3, 30.0], [21.4, 30.0], [21.5, 30.0], [21.6, 30.0], [21.7, 30.0], [21.8, 30.0], [21.9, 30.0], [22.0, 30.0], [22.1, 30.0], [22.2, 30.0], [22.3, 30.0], [22.4, 30.0], [22.5, 30.0], [22.6, 30.0], [22.7, 31.0], [22.8, 31.0], [22.9, 31.0], [23.0, 31.0], [23.1, 31.0], [23.2, 31.0], [23.3, 31.0], [23.4, 31.0], [23.5, 31.0], [23.6, 31.0], [23.7, 31.0], [23.8, 31.0], [23.9, 32.0], [24.0, 32.0], [24.1, 32.0], [24.2, 32.0], [24.3, 32.0], [24.4, 32.0], [24.5, 32.0], [24.6, 32.0], [24.7, 32.0], [24.8, 32.0], [24.9, 32.0], [25.0, 32.0], [25.1, 32.0], [25.2, 32.0], [25.3, 33.0], [25.4, 33.0], [25.5, 33.0], [25.6, 33.0], [25.7, 33.0], [25.8, 33.0], [25.9, 33.0], [26.0, 33.0], [26.1, 33.0], [26.2, 33.0], [26.3, 33.0], [26.4, 33.0], [26.5, 33.0], [26.6, 33.0], [26.7, 34.0], [26.8, 34.0], [26.9, 34.0], [27.0, 34.0], [27.1, 34.0], [27.2, 34.0], [27.3, 34.0], [27.4, 34.0], [27.5, 34.0], [27.6, 34.0], [27.7, 35.0], [27.8, 35.0], [27.9, 35.0], [28.0, 35.0], [28.1, 35.0], [28.2, 35.0], [28.3, 35.0], [28.4, 35.0], [28.5, 35.0], [28.6, 35.0], [28.7, 35.0], [28.8, 35.0], [28.9, 35.0], [29.0, 36.0], [29.1, 36.0], [29.2, 36.0], [29.3, 36.0], [29.4, 36.0], [29.5, 36.0], [29.6, 36.0], [29.7, 36.0], [29.8, 36.0], [29.9, 36.0], [30.0, 36.0], [30.1, 36.0], [30.2, 37.0], [30.3, 37.0], [30.4, 37.0], [30.5, 37.0], [30.6, 37.0], [30.7, 37.0], [30.8, 37.0], [30.9, 37.0], [31.0, 38.0], [31.1, 38.0], [31.2, 38.0], [31.3, 38.0], [31.4, 38.0], [31.5, 38.0], [31.6, 38.0], [31.7, 38.0], [31.8, 39.0], [31.9, 39.0], [32.0, 39.0], [32.1, 39.0], [32.2, 39.0], [32.3, 39.0], [32.4, 39.0], [32.5, 39.0], [32.6, 39.0], [32.7, 39.0], [32.8, 39.0], [32.9, 39.0], [33.0, 40.0], [33.1, 40.0], [33.2, 40.0], [33.3, 40.0], [33.4, 40.0], [33.5, 40.0], [33.6, 40.0], [33.7, 40.0], [33.8, 41.0], [33.9, 41.0], [34.0, 41.0], [34.1, 41.0], [34.2, 41.0], [34.3, 41.0], [34.4, 41.0], [34.5, 41.0], [34.6, 41.0], [34.7, 41.0], [34.8, 42.0], [34.9, 42.0], [35.0, 42.0], [35.1, 42.0], [35.2, 42.0], [35.3, 42.0], [35.4, 42.0], [35.5, 42.0], [35.6, 42.0], [35.7, 43.0], [35.8, 43.0], [35.9, 43.0], [36.0, 43.0], [36.1, 43.0], [36.2, 43.0], [36.3, 43.0], [36.4, 43.0], [36.5, 43.0], [36.6, 44.0], [36.7, 44.0], [36.8, 44.0], [36.9, 44.0], [37.0, 44.0], [37.1, 44.0], [37.2, 44.0], [37.3, 44.0], [37.4, 44.0], [37.5, 44.0], [37.6, 45.0], [37.7, 45.0], [37.8, 45.0], [37.9, 45.0], [38.0, 45.0], [38.1, 45.0], [38.2, 45.0], [38.3, 45.0], [38.4, 45.0], [38.5, 45.0], [38.6, 46.0], [38.7, 46.0], [38.8, 46.0], [38.9, 46.0], [39.0, 46.0], [39.1, 46.0], [39.2, 46.0], [39.3, 46.0], [39.4, 47.0], [39.5, 47.0], [39.6, 47.0], [39.7, 47.0], [39.8, 47.0], [39.9, 47.0], [40.0, 47.0], [40.1, 47.0], [40.2, 47.0], [40.3, 48.0], [40.4, 48.0], [40.5, 48.0], [40.6, 48.0], [40.7, 48.0], [40.8, 48.0], [40.9, 48.0], [41.0, 48.0], [41.1, 48.0], [41.2, 49.0], [41.3, 49.0], [41.4, 49.0], [41.5, 49.0], [41.6, 49.0], [41.7, 49.0], [41.8, 49.0], [41.9, 49.0], [42.0, 49.0], [42.1, 50.0], [42.2, 50.0], [42.3, 50.0], [42.4, 50.0], [42.5, 50.0], [42.6, 50.0], [42.7, 50.0], [42.8, 51.0], [42.9, 51.0], [43.0, 51.0], [43.1, 51.0], [43.2, 51.0], [43.3, 51.0], [43.4, 51.0], [43.5, 51.0], [43.6, 52.0], [43.7, 52.0], [43.8, 52.0], [43.9, 52.0], [44.0, 52.0], [44.1, 52.0], [44.2, 52.0], [44.3, 53.0], [44.4, 53.0], [44.5, 53.0], [44.6, 53.0], [44.7, 53.0], [44.8, 53.0], [44.9, 53.0], [45.0, 54.0], [45.1, 54.0], [45.2, 54.0], [45.3, 54.0], [45.4, 54.0], [45.5, 54.0], [45.6, 54.0], [45.7, 55.0], [45.8, 55.0], [45.9, 55.0], [46.0, 55.0], [46.1, 55.0], [46.2, 55.0], [46.3, 55.0], [46.4, 56.0], [46.5, 56.0], [46.6, 56.0], [46.7, 56.0], [46.8, 56.0], [46.9, 56.0], [47.0, 56.0], [47.1, 57.0], [47.2, 57.0], [47.3, 57.0], [47.4, 57.0], [47.5, 58.0], [47.6, 58.0], [47.7, 58.0], [47.8, 58.0], [47.9, 58.0], [48.0, 58.0], [48.1, 58.0], [48.2, 59.0], [48.3, 59.0], [48.4, 59.0], [48.5, 59.0], [48.6, 60.0], [48.7, 60.0], [48.8, 60.0], [48.9, 60.0], [49.0, 60.0], [49.1, 61.0], [49.2, 61.0], [49.3, 61.0], [49.4, 61.0], [49.5, 62.0], [49.6, 62.0], [49.7, 63.0], [49.8, 63.0], [49.9, 63.0], [50.0, 63.0], [50.1, 64.0], [50.2, 64.0], [50.3, 64.0], [50.4, 65.0], [50.5, 65.0], [50.6, 65.0], [50.7, 65.0], [50.8, 65.0], [50.9, 66.0], [51.0, 66.0], [51.1, 66.0], [51.2, 67.0], [51.3, 67.0], [51.4, 67.0], [51.5, 67.0], [51.6, 68.0], [51.7, 68.0], [51.8, 68.0], [51.9, 69.0], [52.0, 69.0], [52.1, 69.0], [52.2, 70.0], [52.3, 70.0], [52.4, 70.0], [52.5, 71.0], [52.6, 71.0], [52.7, 71.0], [52.8, 71.0], [52.9, 72.0], [53.0, 72.0], [53.1, 73.0], [53.2, 73.0], [53.3, 73.0], [53.4, 74.0], [53.5, 74.0], [53.6, 75.0], [53.7, 75.0], [53.8, 75.0], [53.9, 76.0], [54.0, 76.0], [54.1, 76.0], [54.2, 77.0], [54.3, 77.0], [54.4, 77.0], [54.5, 78.0], [54.6, 78.0], [54.7, 79.0], [54.8, 79.0], [54.9, 79.0], [55.0, 80.0], [55.1, 80.0], [55.2, 81.0], [55.3, 81.0], [55.4, 81.0], [55.5, 82.0], [55.6, 82.0], [55.7, 82.0], [55.8, 83.0], [55.9, 83.0], [56.0, 83.0], [56.1, 84.0], [56.2, 85.0], [56.3, 85.0], [56.4, 86.0], [56.5, 87.0], [56.6, 87.0], [56.7, 87.0], [56.8, 87.0], [56.9, 88.0], [57.0, 88.0], [57.1, 88.0], [57.2, 89.0], [57.3, 90.0], [57.4, 90.0], [57.5, 91.0], [57.6, 91.0], [57.7, 92.0], [57.8, 92.0], [57.9, 92.0], [58.0, 93.0], [58.1, 93.0], [58.2, 94.0], [58.3, 95.0], [58.4, 95.0], [58.5, 96.0], [58.6, 96.0], [58.7, 97.0], [58.8, 97.0], [58.9, 98.0], [59.0, 98.0], [59.1, 99.0], [59.2, 100.0], [59.3, 100.0], [59.4, 101.0], [59.5, 102.0], [59.6, 102.0], [59.7, 103.0], [59.8, 104.0], [59.9, 104.0], [60.0, 105.0], [60.1, 105.0], [60.2, 106.0], [60.3, 106.0], [60.4, 107.0], [60.5, 108.0], [60.6, 108.0], [60.7, 108.0], [60.8, 109.0], [60.9, 110.0], [61.0, 110.0], [61.1, 110.0], [61.2, 111.0], [61.3, 111.0], [61.4, 112.0], [61.5, 112.0], [61.6, 113.0], [61.7, 113.0], [61.8, 114.0], [61.9, 114.0], [62.0, 115.0], [62.1, 116.0], [62.2, 117.0], [62.3, 118.0], [62.4, 119.0], [62.5, 119.0], [62.6, 119.0], [62.7, 120.0], [62.8, 120.0], [62.9, 121.0], [63.0, 122.0], [63.1, 122.0], [63.2, 123.0], [63.3, 123.0], [63.4, 124.0], [63.5, 124.0], [63.6, 124.0], [63.7, 125.0], [63.8, 126.0], [63.9, 127.0], [64.0, 127.0], [64.1, 128.0], [64.2, 128.0], [64.3, 129.0], [64.4, 129.0], [64.5, 130.0], [64.6, 131.0], [64.7, 132.0], [64.8, 133.0], [64.9, 134.0], [65.0, 135.0], [65.1, 135.0], [65.2, 136.0], [65.3, 137.0], [65.4, 138.0], [65.5, 139.0], [65.6, 140.0], [65.7, 141.0], [65.8, 142.0], [65.9, 143.0], [66.0, 143.0], [66.1, 144.0], [66.2, 145.0], [66.3, 146.0], [66.4, 146.0], [66.5, 147.0], [66.6, 147.0], [66.7, 148.0], [66.8, 149.0], [66.9, 149.0], [67.0, 151.0], [67.1, 151.0], [67.2, 152.0], [67.3, 152.0], [67.4, 153.0], [67.5, 154.0], [67.6, 154.0], [67.7, 155.0], [67.8, 155.0], [67.9, 156.0], [68.0, 157.0], [68.1, 158.0], [68.2, 159.0], [68.3, 159.0], [68.4, 160.0], [68.5, 161.0], [68.6, 161.0], [68.7, 162.0], [68.8, 163.0], [68.9, 164.0], [69.0, 165.0], [69.1, 166.0], [69.2, 167.0], [69.3, 167.0], [69.4, 169.0], [69.5, 170.0], [69.6, 172.0], [69.7, 172.0], [69.8, 173.0], [69.9, 174.0], [70.0, 176.0], [70.1, 177.0], [70.2, 179.0], [70.3, 179.0], [70.4, 180.0], [70.5, 181.0], [70.6, 182.0], [70.7, 183.0], [70.8, 184.0], [70.9, 186.0], [71.0, 186.0], [71.1, 188.0], [71.2, 189.0], [71.3, 190.0], [71.4, 192.0], [71.5, 193.0], [71.6, 194.0], [71.7, 196.0], [71.8, 196.0], [71.9, 197.0], [72.0, 198.0], [72.1, 199.0], [72.2, 201.0], [72.3, 202.0], [72.4, 203.0], [72.5, 204.0], [72.6, 206.0], [72.7, 208.0], [72.8, 209.0], [72.9, 210.0], [73.0, 211.0], [73.1, 212.0], [73.2, 213.0], [73.3, 214.0], [73.4, 215.0], [73.5, 216.0], [73.6, 217.0], [73.7, 219.0], [73.8, 221.0], [73.9, 221.0], [74.0, 223.0], [74.1, 224.0], [74.2, 224.0], [74.3, 226.0], [74.4, 227.0], [74.5, 228.0], [74.6, 229.0], [74.7, 230.0], [74.8, 231.0], [74.9, 233.0], [75.0, 235.0], [75.1, 236.0], [75.2, 238.0], [75.3, 238.0], [75.4, 239.0], [75.5, 240.0], [75.6, 241.0], [75.7, 242.0], [75.8, 244.0], [75.9, 247.0], [76.0, 249.0], [76.1, 251.0], [76.2, 252.0], [76.3, 255.0], [76.4, 256.0], [76.5, 258.0], [76.6, 261.0], [76.7, 263.0], [76.8, 265.0], [76.9, 267.0], [77.0, 271.0], [77.1, 273.0], [77.2, 275.0], [77.3, 278.0], [77.4, 282.0], [77.5, 285.0], [77.6, 288.0], [77.7, 294.0], [77.8, 296.0], [77.9, 300.0], [78.0, 304.0], [78.1, 307.0], [78.2, 310.0], [78.3, 313.0], [78.4, 315.0], [78.5, 317.0], [78.6, 319.0], [78.7, 322.0], [78.8, 324.0], [78.9, 327.0], [79.0, 330.0], [79.1, 335.0], [79.2, 338.0], [79.3, 341.0], [79.4, 344.0], [79.5, 345.0], [79.6, 346.0], [79.7, 350.0], [79.8, 352.0], [79.9, 355.0], [80.0, 359.0], [80.1, 360.0], [80.2, 361.0], [80.3, 364.0], [80.4, 366.0], [80.5, 368.0], [80.6, 369.0], [80.7, 372.0], [80.8, 372.0], [80.9, 375.0], [81.0, 377.0], [81.1, 380.0], [81.2, 381.0], [81.3, 383.0], [81.4, 384.0], [81.5, 389.0], [81.6, 392.0], [81.7, 394.0], [81.8, 396.0], [81.9, 399.0], [82.0, 401.0], [82.1, 404.0], [82.2, 407.0], [82.3, 408.0], [82.4, 409.0], [82.5, 411.0], [82.6, 412.0], [82.7, 414.0], [82.8, 416.0], [82.9, 419.0], [83.0, 422.0], [83.1, 423.0], [83.2, 424.0], [83.3, 428.0], [83.4, 430.0], [83.5, 431.0], [83.6, 436.0], [83.7, 439.0], [83.8, 442.0], [83.9, 443.0], [84.0, 447.0], [84.1, 448.0], [84.2, 450.0], [84.3, 453.0], [84.4, 456.0], [84.5, 459.0], [84.6, 461.0], [84.7, 467.0], [84.8, 471.0], [84.9, 473.0], [85.0, 476.0], [85.1, 481.0], [85.2, 486.0], [85.3, 488.0], [85.4, 493.0], [85.5, 496.0], [85.6, 502.0], [85.7, 506.0], [85.8, 510.0], [85.9, 513.0], [86.0, 517.0], [86.1, 520.0], [86.2, 522.0], [86.3, 523.0], [86.4, 530.0], [86.5, 532.0], [86.6, 534.0], [86.7, 536.0], [86.8, 538.0], [86.9, 542.0], [87.0, 543.0], [87.1, 545.0], [87.2, 551.0], [87.3, 555.0], [87.4, 560.0], [87.5, 563.0], [87.6, 567.0], [87.7, 569.0], [87.8, 572.0], [87.9, 574.0], [88.0, 578.0], [88.1, 582.0], [88.2, 584.0], [88.3, 587.0], [88.4, 589.0], [88.5, 595.0], [88.6, 599.0], [88.7, 601.0], [88.8, 604.0], [88.9, 607.0], [89.0, 609.0], [89.1, 612.0], [89.2, 614.0], [89.3, 616.0], [89.4, 619.0], [89.5, 622.0], [89.6, 624.0], [89.7, 627.0], [89.8, 632.0], [89.9, 634.0], [90.0, 639.0], [90.1, 643.0], [90.2, 647.0], [90.3, 649.0], [90.4, 653.0], [90.5, 657.0], [90.6, 660.0], [90.7, 665.0], [90.8, 669.0], [90.9, 673.0], [91.0, 675.0], [91.1, 679.0], [91.2, 682.0], [91.3, 683.0], [91.4, 688.0], [91.5, 691.0], [91.6, 694.0], [91.7, 697.0], [91.8, 700.0], [91.9, 706.0], [92.0, 707.0], [92.1, 712.0], [92.2, 715.0], [92.3, 721.0], [92.4, 724.0], [92.5, 731.0], [92.6, 735.0], [92.7, 736.0], [92.8, 740.0], [92.9, 743.0], [93.0, 745.0], [93.1, 749.0], [93.2, 752.0], [93.3, 758.0], [93.4, 763.0], [93.5, 768.0], [93.6, 772.0], [93.7, 775.0], [93.8, 780.0], [93.9, 787.0], [94.0, 790.0], [94.1, 798.0], [94.2, 803.0], [94.3, 808.0], [94.4, 815.0], [94.5, 822.0], [94.6, 827.0], [94.7, 834.0], [94.8, 844.0], [94.9, 850.0], [95.0, 857.0], [95.1, 860.0], [95.2, 869.0], [95.3, 871.0], [95.4, 879.0], [95.5, 884.0], [95.6, 893.0], [95.7, 907.0], [95.8, 910.0], [95.9, 917.0], [96.0, 921.0], [96.1, 925.0], [96.2, 930.0], [96.3, 937.0], [96.4, 941.0], [96.5, 950.0], [96.6, 954.0], [96.7, 960.0], [96.8, 967.0], [96.9, 974.0], [97.0, 991.0], [97.1, 1000.0], [97.2, 1004.0], [97.3, 1007.0], [97.4, 1012.0], [97.5, 1028.0], [97.6, 1037.0], [97.7, 1047.0], [97.8, 1054.0], [97.9, 1059.0], [98.0, 1065.0], [98.1, 1080.0], [98.2, 1091.0], [98.3, 1104.0], [98.4, 1110.0], [98.5, 1119.0], [98.6, 1135.0], [98.7, 1146.0], [98.8, 1152.0], [98.9, 1163.0], [99.0, 1174.0], [99.1, 1190.0], [99.2, 1205.0], [99.3, 1216.0], [99.4, 1232.0], [99.5, 1248.0], [99.6, 1258.0], [99.7, 1272.0], [99.8, 1293.0], [99.9, 1306.0], [100.0, 1602.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4469.0, "series": [{"data": [[0.0, 4469.0], [600.0, 238.0], [700.0, 177.0], [200.0, 436.0], [800.0, 114.0], [900.0, 110.0], [1000.0, 90.0], [1100.0, 67.0], [300.0, 305.0], [1200.0, 51.0], [1300.0, 9.0], [1400.0, 1.0], [1500.0, 1.0], [100.0, 978.0], [400.0, 274.0], [1600.0, 1.0], [500.0, 233.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6462.0, "series": [{"data": [[0.0, 6462.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1090.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.5980582524271862, "minX": 1.62773731E12, "maxY": 125.89817232376002, "series": [{"data": [[1.62773736E12, 38.90442591404746], [1.62773737E12, 125.89817232376002], [1.62773738E12, 11.38187702265372], [1.62773732E12, 3.5980582524271862], [1.62773733E12, 4.132097334878334], [1.62773734E12, 5.011864406779664], [1.62773735E12, 9.488690884167253], [1.62773731E12, 3.605839416058392]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62773738E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 30.72405660377359, "minX": 1.0, "maxY": 1103.7692307692307, "series": [{"data": [[2.0, 39.109090909090895], [3.0, 31.090410958904123], [4.0, 30.72405660377359], [5.0, 35.63436123348017], [6.0, 33.97307692307689], [7.0, 41.52727272727268], [8.0, 51.04487179487181], [9.0, 58.38928571428572], [10.0, 67.87671232876716], [11.0, 54.0], [12.0, 83.68493150684925], [13.0, 91.0], [14.0, 92.16993464052285], [15.0, 101.83333333333334], [16.0, 106.45394736842108], [17.0, 89.66666666666667], [18.0, 90.57142857142857], [19.0, 101.04545454545452], [20.0, 182.66666666666669], [21.0, 120.42857142857143], [22.0, 139.55279503105595], [23.0, 87.33333333333333], [24.0, 100.0], [25.0, 151.45398773006124], [26.0, 143.16666666666666], [27.0, 87.0], [28.0, 158.73333333333335], [29.0, 180.08092485549136], [30.0, 190.33333333333334], [31.0, 157.66666666666666], [32.0, 164.8], [33.0, 152.0], [34.0, 211.81927710843388], [35.0, 162.33333333333334], [36.0, 187.14285714285714], [37.0, 181.5], [38.0, 152.5], [39.0, 67.65671641791046], [40.0, 208.14285714285714], [41.0, 258.5319148936171], [42.0, 249.50000000000003], [43.0, 57.5], [44.0, 89.0], [46.0, 266.03125], [47.0, 218.75000000000003], [48.0, 276.2083333333333], [49.0, 285.28571428571433], [50.0, 321.5555555555555], [51.0, 338.0], [52.0, 304.2380952380953], [53.0, 211.0], [54.0, 346.59999999999997], [55.0, 307.6], [56.0, 350.0], [57.0, 306.27777777777777], [58.0, 310.25], [59.0, 347.75], [60.0, 357.20000000000005], [61.0, 373.0], [62.0, 253.2], [63.0, 329.93749999999994], [64.0, 337.2], [65.0, 351.75], [66.0, 335.14285714285717], [67.0, 333.16666666666663], [68.0, 343.375], [69.0, 400.85714285714283], [70.0, 413.6374269005849], [71.0, 405.8125], [74.0, 241.4], [75.0, 414.12500000000006], [72.0, 96.0], [76.0, 138.33333333333334], [77.0, 469.2666666666666], [78.0, 449.6666666666667], [79.0, 146.03225806451613], [80.0, 401.7142857142857], [81.0, 297.5], [82.0, 214.0], [83.0, 366.5], [84.0, 499.1904761904763], [87.0, 72.0], [86.0, 72.0], [85.0, 88.0], [90.0, 245.5], [91.0, 249.5], [89.0, 61.0], [88.0, 70.0], [92.0, 232.0], [93.0, 389.14285714285717], [94.0, 315.0], [95.0, 550.3333333333334], [96.0, 612.0588235294119], [97.0, 620.7475728155342], [98.0, 475.00000000000006], [99.0, 565.7222222222222], [100.0, 548.2105263157895], [101.0, 516.5], [102.0, 536.4285714285714], [103.0, 486.2], [104.0, 647.360655737705], [105.0, 646.7142857142857], [106.0, 577.5384615384617], [107.0, 538.1666666666666], [108.0, 617.5555555555557], [109.0, 595.8484848484849], [110.0, 671.2564102564103], [111.0, 83.0], [113.0, 441.25], [114.0, 449.0], [115.0, 161.0], [112.0, 164.0], [117.0, 593.25], [119.0, 216.0], [118.0, 110.0], [116.0, 152.0], [123.0, 825.0], [122.0, 47.0], [121.0, 188.0], [120.0, 150.0], [127.0, 266.0], [126.0, 108.0], [135.0, 107.0], [134.0, 212.0], [132.0, 153.0], [131.0, 208.0], [130.0, 92.0], [129.0, 174.0], [128.0, 136.0], [138.0, 608.6666666666666], [139.0, 518.4814814814814], [140.0, 934.7777777777778], [141.0, 341.33333333333337], [142.0, 380.75], [143.0, 326.0], [137.0, 160.0], [136.0, 150.0], [145.0, 327.0], [148.0, 498.125], [149.0, 588.0], [150.0, 512.5], [151.0, 948.4687500000001], [147.0, 184.0], [146.0, 343.0], [144.0, 295.0], [152.0, 1103.7692307692307], [153.0, 962.0689655172416], [154.0, 807.5208333333335], [155.0, 859.470588235294], [156.0, 652.3333333333334], [157.0, 850.1666666666666], [158.0, 805.9499036608859], [1.0, 35.31818181818183]], "isOverall": false, "label": "Press Release", "isController": false}, {"data": [[36.962006883770265, 201.6261583267143]], "isOverall": false, "label": "Press Release-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 158.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2260.5, "minX": 1.62773731E12, "maxY": 6505707.0, "series": [{"data": [[1.62773736E12, 6505707.0], [1.62773737E12, 6393096.9], [1.62773738E12, 1289457.0], [1.62773732E12, 2149095.0], [1.62773733E12, 3601299.0], [1.62773734E12, 4924140.0], [1.62773735E12, 6088407.0], [1.62773731E12, 571710.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62773736E12, 25723.5], [1.62773737E12, 25278.0], [1.62773738E12, 5098.5], [1.62773732E12, 8497.5], [1.62773733E12, 14239.5], [1.62773734E12, 19470.0], [1.62773735E12, 24073.5], [1.62773731E12, 2260.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62773738E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 29.158748551564322, "minX": 1.62773731E12, "maxY": 629.5032637075724, "series": [{"data": [[1.62773736E12, 233.91725465041696], [1.62773737E12, 629.5032637075724], [1.62773738E12, 59.24919093851131], [1.62773732E12, 29.902912621359214], [1.62773733E12, 29.158748551564322], [1.62773734E12, 32.567796610169545], [1.62773735E12, 61.72241261137767], [1.62773731E12, 48.56204379562046]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62773738E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 28.505214368482026, "minX": 1.62773731E12, "maxY": 619.2310704960832, "series": [{"data": [[1.62773736E12, 230.7350865939703], [1.62773737E12, 619.2310704960832], [1.62773738E12, 57.3462783171521], [1.62773732E12, 29.215533980582535], [1.62773733E12, 28.505214368482026], [1.62773734E12, 31.821186440677977], [1.62773735E12, 60.733379026730574], [1.62773731E12, 46.94160583941605]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62773738E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 24.523754345307058, "minX": 1.62773731E12, "maxY": 590.7010443864223, "series": [{"data": [[1.62773736E12, 222.79666452854403], [1.62773737E12, 590.7010443864223], [1.62773738E12, 46.864077669902954], [1.62773732E12, 25.287378640776716], [1.62773733E12, 24.523754345307058], [1.62773734E12, 27.62966101694915], [1.62773735E12, 55.62165867032212], [1.62773731E12, 40.48905109489048]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62773738E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.62773731E12, "maxY": 1602.0, "series": [{"data": [[1.62773736E12, 804.0], [1.62773737E12, 1602.0], [1.62773738E12, 162.0], [1.62773732E12, 126.0], [1.62773733E12, 96.0], [1.62773734E12, 97.0], [1.62773735E12, 274.0], [1.62773731E12, 614.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62773736E12, 78.0], [1.62773737E12, 41.0], [1.62773738E12, 40.0], [1.62773732E12, 14.0], [1.62773733E12, 14.0], [1.62773734E12, 15.0], [1.62773735E12, 16.0], [1.62773731E12, 16.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62773736E12, 402.0], [1.62773737E12, 1063.7], [1.62773738E12, 81.0], [1.62773732E12, 41.0], [1.62773733E12, 43.0], [1.62773734E12, 48.0], [1.62773735E12, 99.0], [1.62773731E12, 90.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62773736E12, 549.8000000000002], [1.62773737E12, 1293.0], [1.62773738E12, 109.59999999999991], [1.62773732E12, 107.67999999999995], [1.62773733E12, 73.08000000000004], [1.62773734E12, 70.19000000000005], [1.62773735E12, 135.80000000000018], [1.62773731E12, 435.78000000000213]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62773736E12, 440.0], [1.62773737E12, 1174.0], [1.62773738E12, 87.5], [1.62773732E12, 56.39999999999998], [1.62773733E12, 49.0], [1.62773734E12, 55.0], [1.62773735E12, 110.0], [1.62773731E12, 113.29999999999987]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62773738E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 23.0, "minX": 1.0, "maxY": 1010.0, "series": [{"data": [[2.0, 348.0], [3.0, 93.0], [5.0, 136.0], [17.0, 47.5], [22.0, 35.0], [25.0, 43.0], [29.0, 49.0], [31.0, 31.0], [32.0, 25.5], [36.0, 24.0], [40.0, 27.0], [42.0, 26.5], [43.0, 58.0], [51.0, 38.0], [54.0, 26.0], [58.0, 43.5], [59.0, 25.0], [63.0, 25.0], [69.0, 24.0], [70.0, 23.0], [74.0, 26.5], [72.0, 54.0], [77.0, 26.0], [82.0, 30.0], [84.0, 26.0], [88.0, 44.5], [92.0, 27.5], [93.0, 25.0], [98.0, 29.0], [102.0, 57.0], [105.0, 27.0], [107.0, 41.0], [114.0, 24.0], [118.0, 29.0], [119.0, 26.0], [124.0, 30.0], [127.0, 30.0], [128.0, 30.0], [131.0, 112.0], [133.0, 43.0], [142.0, 72.0], [143.0, 294.0], [146.0, 41.0], [144.0, 39.0], [149.0, 88.0], [147.0, 103.0], [150.0, 187.5], [145.0, 613.0], [151.0, 903.0], [154.0, 155.0], [156.0, 259.0], [155.0, 128.0], [158.0, 152.0], [159.0, 1010.0], [163.0, 241.0], [170.0, 416.5], [177.0, 607.0], [230.0, 633.5], [1.0, 46.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 23.0, "minX": 1.0, "maxY": 1007.0, "series": [{"data": [[2.0, 340.0], [3.0, 89.0], [5.0, 134.0], [17.0, 45.5], [22.0, 33.5], [25.0, 41.0], [29.0, 47.0], [31.0, 30.0], [32.0, 25.0], [36.0, 23.0], [40.0, 26.0], [42.0, 26.0], [43.0, 56.0], [51.0, 36.0], [54.0, 25.5], [58.0, 42.0], [59.0, 24.0], [63.0, 24.0], [69.0, 24.0], [70.0, 23.0], [74.0, 26.0], [72.0, 52.0], [77.0, 26.0], [82.0, 30.0], [84.0, 25.0], [88.0, 43.0], [92.0, 26.0], [93.0, 24.0], [98.0, 28.0], [102.0, 55.0], [105.0, 26.0], [107.0, 40.0], [114.0, 23.5], [118.0, 28.5], [119.0, 25.0], [124.0, 29.0], [127.0, 28.0], [128.0, 29.0], [131.0, 109.0], [133.0, 41.0], [142.0, 70.0], [143.0, 291.0], [146.0, 41.0], [144.0, 38.0], [149.0, 87.0], [147.0, 102.0], [150.0, 169.0], [145.0, 599.0], [151.0, 898.0], [154.0, 153.0], [156.0, 257.0], [155.0, 127.0], [158.0, 150.0], [159.0, 1007.0], [163.0, 239.0], [170.0, 412.0], [177.0, 600.0], [230.0, 630.0], [1.0, 44.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 13.8, "minX": 1.62773731E12, "maxY": 161.9, "series": [{"data": [[1.62773736E12, 161.9], [1.62773737E12, 146.4], [1.62773738E12, 30.1], [1.62773732E12, 51.5], [1.62773733E12, 86.3], [1.62773734E12, 118.4], [1.62773735E12, 147.0], [1.62773731E12, 13.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62773738E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 13.7, "minX": 1.62773731E12, "maxY": 155.9, "series": [{"data": [[1.62773736E12, 155.9], [1.62773737E12, 153.2], [1.62773738E12, 30.9], [1.62773732E12, 51.5], [1.62773733E12, 86.3], [1.62773734E12, 118.0], [1.62773735E12, 145.9], [1.62773731E12, 13.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62773738E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 13.7, "minX": 1.62773731E12, "maxY": 155.9, "series": [{"data": [[1.62773736E12, 155.9], [1.62773737E12, 153.2], [1.62773738E12, 30.9], [1.62773732E12, 51.5], [1.62773733E12, 86.3], [1.62773734E12, 118.0], [1.62773735E12, 145.9], [1.62773731E12, 13.7]], "isOverall": false, "label": "Press Release-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62773738E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 13.7, "minX": 1.62773731E12, "maxY": 155.9, "series": [{"data": [[1.62773736E12, 155.9], [1.62773737E12, 153.2], [1.62773738E12, 30.9], [1.62773732E12, 51.5], [1.62773733E12, 86.3], [1.62773734E12, 118.0], [1.62773735E12, 145.9], [1.62773731E12, 13.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62773738E12, "title": "Total Transactions Per Second"}},
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

