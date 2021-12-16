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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 1913.0, "series": [{"data": [[0.0, 10.0], [0.1, 11.0], [0.2, 11.0], [0.3, 11.0], [0.4, 11.0], [0.5, 11.0], [0.6, 11.0], [0.7, 11.0], [0.8, 11.0], [0.9, 11.0], [1.0, 11.0], [1.1, 11.0], [1.2, 11.0], [1.3, 12.0], [1.4, 12.0], [1.5, 12.0], [1.6, 12.0], [1.7, 12.0], [1.8, 12.0], [1.9, 12.0], [2.0, 12.0], [2.1, 12.0], [2.2, 12.0], [2.3, 12.0], [2.4, 12.0], [2.5, 12.0], [2.6, 12.0], [2.7, 12.0], [2.8, 12.0], [2.9, 12.0], [3.0, 12.0], [3.1, 12.0], [3.2, 12.0], [3.3, 12.0], [3.4, 12.0], [3.5, 12.0], [3.6, 12.0], [3.7, 12.0], [3.8, 12.0], [3.9, 12.0], [4.0, 13.0], [4.1, 13.0], [4.2, 13.0], [4.3, 13.0], [4.4, 13.0], [4.5, 13.0], [4.6, 13.0], [4.7, 13.0], [4.8, 13.0], [4.9, 13.0], [5.0, 13.0], [5.1, 13.0], [5.2, 13.0], [5.3, 13.0], [5.4, 13.0], [5.5, 13.0], [5.6, 13.0], [5.7, 13.0], [5.8, 13.0], [5.9, 13.0], [6.0, 13.0], [6.1, 13.0], [6.2, 13.0], [6.3, 13.0], [6.4, 13.0], [6.5, 13.0], [6.6, 13.0], [6.7, 13.0], [6.8, 13.0], [6.9, 13.0], [7.0, 13.0], [7.1, 13.0], [7.2, 13.0], [7.3, 14.0], [7.4, 14.0], [7.5, 14.0], [7.6, 14.0], [7.7, 14.0], [7.8, 14.0], [7.9, 14.0], [8.0, 14.0], [8.1, 14.0], [8.2, 14.0], [8.3, 14.0], [8.4, 14.0], [8.5, 14.0], [8.6, 14.0], [8.7, 14.0], [8.8, 14.0], [8.9, 14.0], [9.0, 14.0], [9.1, 14.0], [9.2, 14.0], [9.3, 14.0], [9.4, 14.0], [9.5, 14.0], [9.6, 14.0], [9.7, 14.0], [9.8, 14.0], [9.9, 14.0], [10.0, 14.0], [10.1, 14.0], [10.2, 14.0], [10.3, 14.0], [10.4, 14.0], [10.5, 14.0], [10.6, 14.0], [10.7, 14.0], [10.8, 14.0], [10.9, 14.0], [11.0, 14.0], [11.1, 15.0], [11.2, 15.0], [11.3, 15.0], [11.4, 15.0], [11.5, 15.0], [11.6, 15.0], [11.7, 15.0], [11.8, 15.0], [11.9, 15.0], [12.0, 15.0], [12.1, 15.0], [12.2, 15.0], [12.3, 15.0], [12.4, 15.0], [12.5, 15.0], [12.6, 15.0], [12.7, 15.0], [12.8, 15.0], [12.9, 15.0], [13.0, 15.0], [13.1, 15.0], [13.2, 15.0], [13.3, 15.0], [13.4, 15.0], [13.5, 15.0], [13.6, 15.0], [13.7, 15.0], [13.8, 15.0], [13.9, 15.0], [14.0, 15.0], [14.1, 15.0], [14.2, 15.0], [14.3, 15.0], [14.4, 15.0], [14.5, 15.0], [14.6, 15.0], [14.7, 15.0], [14.8, 15.0], [14.9, 16.0], [15.0, 16.0], [15.1, 16.0], [15.2, 16.0], [15.3, 16.0], [15.4, 16.0], [15.5, 16.0], [15.6, 16.0], [15.7, 16.0], [15.8, 16.0], [15.9, 16.0], [16.0, 16.0], [16.1, 16.0], [16.2, 16.0], [16.3, 16.0], [16.4, 16.0], [16.5, 16.0], [16.6, 16.0], [16.7, 16.0], [16.8, 16.0], [16.9, 16.0], [17.0, 16.0], [17.1, 16.0], [17.2, 16.0], [17.3, 16.0], [17.4, 16.0], [17.5, 16.0], [17.6, 16.0], [17.7, 17.0], [17.8, 17.0], [17.9, 17.0], [18.0, 17.0], [18.1, 17.0], [18.2, 17.0], [18.3, 17.0], [18.4, 17.0], [18.5, 17.0], [18.6, 17.0], [18.7, 17.0], [18.8, 17.0], [18.9, 17.0], [19.0, 17.0], [19.1, 17.0], [19.2, 17.0], [19.3, 17.0], [19.4, 17.0], [19.5, 17.0], [19.6, 17.0], [19.7, 17.0], [19.8, 17.0], [19.9, 17.0], [20.0, 17.0], [20.1, 18.0], [20.2, 18.0], [20.3, 18.0], [20.4, 18.0], [20.5, 18.0], [20.6, 18.0], [20.7, 18.0], [20.8, 18.0], [20.9, 18.0], [21.0, 18.0], [21.1, 18.0], [21.2, 18.0], [21.3, 18.0], [21.4, 18.0], [21.5, 18.0], [21.6, 18.0], [21.7, 18.0], [21.8, 18.0], [21.9, 19.0], [22.0, 19.0], [22.1, 19.0], [22.2, 19.0], [22.3, 19.0], [22.4, 19.0], [22.5, 19.0], [22.6, 19.0], [22.7, 19.0], [22.8, 19.0], [22.9, 19.0], [23.0, 19.0], [23.1, 19.0], [23.2, 19.0], [23.3, 19.0], [23.4, 19.0], [23.5, 19.0], [23.6, 19.0], [23.7, 19.0], [23.8, 20.0], [23.9, 20.0], [24.0, 20.0], [24.1, 20.0], [24.2, 20.0], [24.3, 20.0], [24.4, 20.0], [24.5, 20.0], [24.6, 20.0], [24.7, 20.0], [24.8, 20.0], [24.9, 20.0], [25.0, 20.0], [25.1, 20.0], [25.2, 20.0], [25.3, 20.0], [25.4, 21.0], [25.5, 21.0], [25.6, 21.0], [25.7, 21.0], [25.8, 21.0], [25.9, 21.0], [26.0, 21.0], [26.1, 21.0], [26.2, 21.0], [26.3, 21.0], [26.4, 21.0], [26.5, 21.0], [26.6, 21.0], [26.7, 21.0], [26.8, 21.0], [26.9, 21.0], [27.0, 21.0], [27.1, 21.0], [27.2, 21.0], [27.3, 22.0], [27.4, 22.0], [27.5, 22.0], [27.6, 22.0], [27.7, 22.0], [27.8, 22.0], [27.9, 22.0], [28.0, 22.0], [28.1, 22.0], [28.2, 22.0], [28.3, 22.0], [28.4, 22.0], [28.5, 22.0], [28.6, 22.0], [28.7, 22.0], [28.8, 22.0], [28.9, 22.0], [29.0, 23.0], [29.1, 23.0], [29.2, 23.0], [29.3, 23.0], [29.4, 23.0], [29.5, 23.0], [29.6, 23.0], [29.7, 23.0], [29.8, 23.0], [29.9, 23.0], [30.0, 23.0], [30.1, 23.0], [30.2, 23.0], [30.3, 23.0], [30.4, 23.0], [30.5, 24.0], [30.6, 24.0], [30.7, 24.0], [30.8, 24.0], [30.9, 24.0], [31.0, 24.0], [31.1, 24.0], [31.2, 24.0], [31.3, 24.0], [31.4, 24.0], [31.5, 24.0], [31.6, 24.0], [31.7, 24.0], [31.8, 24.0], [31.9, 25.0], [32.0, 25.0], [32.1, 25.0], [32.2, 25.0], [32.3, 25.0], [32.4, 25.0], [32.5, 25.0], [32.6, 25.0], [32.7, 25.0], [32.8, 25.0], [32.9, 25.0], [33.0, 25.0], [33.1, 25.0], [33.2, 26.0], [33.3, 26.0], [33.4, 26.0], [33.5, 26.0], [33.6, 26.0], [33.7, 26.0], [33.8, 26.0], [33.9, 26.0], [34.0, 26.0], [34.1, 26.0], [34.2, 26.0], [34.3, 27.0], [34.4, 27.0], [34.5, 27.0], [34.6, 27.0], [34.7, 27.0], [34.8, 27.0], [34.9, 27.0], [35.0, 27.0], [35.1, 27.0], [35.2, 27.0], [35.3, 28.0], [35.4, 28.0], [35.5, 28.0], [35.6, 28.0], [35.7, 28.0], [35.8, 28.0], [35.9, 28.0], [36.0, 28.0], [36.1, 28.0], [36.2, 28.0], [36.3, 28.0], [36.4, 28.0], [36.5, 29.0], [36.6, 29.0], [36.7, 29.0], [36.8, 29.0], [36.9, 29.0], [37.0, 29.0], [37.1, 29.0], [37.2, 29.0], [37.3, 29.0], [37.4, 29.0], [37.5, 29.0], [37.6, 30.0], [37.7, 30.0], [37.8, 30.0], [37.9, 30.0], [38.0, 30.0], [38.1, 30.0], [38.2, 30.0], [38.3, 30.0], [38.4, 30.0], [38.5, 30.0], [38.6, 30.0], [38.7, 30.0], [38.8, 31.0], [38.9, 31.0], [39.0, 31.0], [39.1, 31.0], [39.2, 31.0], [39.3, 31.0], [39.4, 31.0], [39.5, 31.0], [39.6, 31.0], [39.7, 31.0], [39.8, 32.0], [39.9, 32.0], [40.0, 32.0], [40.1, 32.0], [40.2, 32.0], [40.3, 32.0], [40.4, 32.0], [40.5, 32.0], [40.6, 33.0], [40.7, 33.0], [40.8, 33.0], [40.9, 33.0], [41.0, 33.0], [41.1, 33.0], [41.2, 33.0], [41.3, 33.0], [41.4, 34.0], [41.5, 34.0], [41.6, 34.0], [41.7, 34.0], [41.8, 34.0], [41.9, 34.0], [42.0, 34.0], [42.1, 34.0], [42.2, 34.0], [42.3, 34.0], [42.4, 35.0], [42.5, 35.0], [42.6, 35.0], [42.7, 35.0], [42.8, 35.0], [42.9, 36.0], [43.0, 36.0], [43.1, 36.0], [43.2, 36.0], [43.3, 36.0], [43.4, 36.0], [43.5, 36.0], [43.6, 36.0], [43.7, 36.0], [43.8, 37.0], [43.9, 37.0], [44.0, 37.0], [44.1, 37.0], [44.2, 37.0], [44.3, 37.0], [44.4, 38.0], [44.5, 38.0], [44.6, 38.0], [44.7, 38.0], [44.8, 38.0], [44.9, 38.0], [45.0, 38.0], [45.1, 38.0], [45.2, 39.0], [45.3, 39.0], [45.4, 39.0], [45.5, 39.0], [45.6, 39.0], [45.7, 39.0], [45.8, 40.0], [45.9, 40.0], [46.0, 40.0], [46.1, 40.0], [46.2, 40.0], [46.3, 41.0], [46.4, 41.0], [46.5, 41.0], [46.6, 41.0], [46.7, 41.0], [46.8, 41.0], [46.9, 42.0], [47.0, 42.0], [47.1, 42.0], [47.2, 42.0], [47.3, 42.0], [47.4, 42.0], [47.5, 43.0], [47.6, 43.0], [47.7, 43.0], [47.8, 43.0], [47.9, 43.0], [48.0, 43.0], [48.1, 44.0], [48.2, 44.0], [48.3, 44.0], [48.4, 44.0], [48.5, 44.0], [48.6, 45.0], [48.7, 45.0], [48.8, 45.0], [48.9, 45.0], [49.0, 45.0], [49.1, 46.0], [49.2, 46.0], [49.3, 46.0], [49.4, 47.0], [49.5, 47.0], [49.6, 47.0], [49.7, 48.0], [49.8, 48.0], [49.9, 48.0], [50.0, 49.0], [50.1, 49.0], [50.2, 49.0], [50.3, 50.0], [50.4, 50.0], [50.5, 50.0], [50.6, 50.0], [50.7, 50.0], [50.8, 51.0], [50.9, 51.0], [51.0, 51.0], [51.1, 52.0], [51.2, 52.0], [51.3, 52.0], [51.4, 53.0], [51.5, 53.0], [51.6, 53.0], [51.7, 54.0], [51.8, 54.0], [51.9, 55.0], [52.0, 55.0], [52.1, 55.0], [52.2, 55.0], [52.3, 56.0], [52.4, 56.0], [52.5, 56.0], [52.6, 57.0], [52.7, 57.0], [52.8, 58.0], [52.9, 58.0], [53.0, 58.0], [53.1, 59.0], [53.2, 59.0], [53.3, 59.0], [53.4, 59.0], [53.5, 59.0], [53.6, 60.0], [53.7, 60.0], [53.8, 60.0], [53.9, 61.0], [54.0, 61.0], [54.1, 61.0], [54.2, 62.0], [54.3, 62.0], [54.4, 63.0], [54.5, 63.0], [54.6, 63.0], [54.7, 64.0], [54.8, 64.0], [54.9, 65.0], [55.0, 65.0], [55.1, 65.0], [55.2, 66.0], [55.3, 66.0], [55.4, 67.0], [55.5, 67.0], [55.6, 67.0], [55.7, 67.0], [55.8, 68.0], [55.9, 68.0], [56.0, 69.0], [56.1, 69.0], [56.2, 70.0], [56.3, 71.0], [56.4, 71.0], [56.5, 72.0], [56.6, 72.0], [56.7, 73.0], [56.8, 73.0], [56.9, 74.0], [57.0, 74.0], [57.1, 74.0], [57.2, 75.0], [57.3, 75.0], [57.4, 75.0], [57.5, 76.0], [57.6, 76.0], [57.7, 77.0], [57.8, 78.0], [57.9, 78.0], [58.0, 78.0], [58.1, 79.0], [58.2, 79.0], [58.3, 79.0], [58.4, 80.0], [58.5, 81.0], [58.6, 82.0], [58.7, 82.0], [58.8, 83.0], [58.9, 83.0], [59.0, 84.0], [59.1, 85.0], [59.2, 85.0], [59.3, 86.0], [59.4, 87.0], [59.5, 87.0], [59.6, 88.0], [59.7, 88.0], [59.8, 89.0], [59.9, 90.0], [60.0, 90.0], [60.1, 91.0], [60.2, 91.0], [60.3, 92.0], [60.4, 92.0], [60.5, 93.0], [60.6, 93.0], [60.7, 94.0], [60.8, 95.0], [60.9, 95.0], [61.0, 96.0], [61.1, 97.0], [61.2, 98.0], [61.3, 99.0], [61.4, 99.0], [61.5, 100.0], [61.6, 100.0], [61.7, 101.0], [61.8, 102.0], [61.9, 102.0], [62.0, 103.0], [62.1, 103.0], [62.2, 105.0], [62.3, 106.0], [62.4, 107.0], [62.5, 108.0], [62.6, 108.0], [62.7, 109.0], [62.8, 110.0], [62.9, 112.0], [63.0, 112.0], [63.1, 113.0], [63.2, 114.0], [63.3, 115.0], [63.4, 116.0], [63.5, 117.0], [63.6, 118.0], [63.7, 119.0], [63.8, 120.0], [63.9, 121.0], [64.0, 121.0], [64.1, 122.0], [64.2, 124.0], [64.3, 125.0], [64.4, 126.0], [64.5, 127.0], [64.6, 128.0], [64.7, 129.0], [64.8, 131.0], [64.9, 131.0], [65.0, 132.0], [65.1, 133.0], [65.2, 134.0], [65.3, 135.0], [65.4, 136.0], [65.5, 137.0], [65.6, 138.0], [65.7, 139.0], [65.8, 139.0], [65.9, 140.0], [66.0, 141.0], [66.1, 142.0], [66.2, 143.0], [66.3, 143.0], [66.4, 144.0], [66.5, 144.0], [66.6, 145.0], [66.7, 145.0], [66.8, 146.0], [66.9, 148.0], [67.0, 149.0], [67.1, 150.0], [67.2, 151.0], [67.3, 153.0], [67.4, 154.0], [67.5, 155.0], [67.6, 157.0], [67.7, 158.0], [67.8, 159.0], [67.9, 160.0], [68.0, 161.0], [68.1, 162.0], [68.2, 163.0], [68.3, 164.0], [68.4, 164.0], [68.5, 165.0], [68.6, 166.0], [68.7, 167.0], [68.8, 169.0], [68.9, 171.0], [69.0, 172.0], [69.1, 173.0], [69.2, 174.0], [69.3, 176.0], [69.4, 177.0], [69.5, 178.0], [69.6, 180.0], [69.7, 181.0], [69.8, 182.0], [69.9, 184.0], [70.0, 185.0], [70.1, 186.0], [70.2, 189.0], [70.3, 190.0], [70.4, 191.0], [70.5, 192.0], [70.6, 193.0], [70.7, 194.0], [70.8, 195.0], [70.9, 197.0], [71.0, 198.0], [71.1, 199.0], [71.2, 200.0], [71.3, 203.0], [71.4, 205.0], [71.5, 206.0], [71.6, 208.0], [71.7, 209.0], [71.8, 211.0], [71.9, 213.0], [72.0, 213.0], [72.1, 214.0], [72.2, 216.0], [72.3, 217.0], [72.4, 219.0], [72.5, 222.0], [72.6, 224.0], [72.7, 225.0], [72.8, 226.0], [72.9, 227.0], [73.0, 229.0], [73.1, 230.0], [73.2, 231.0], [73.3, 232.0], [73.4, 233.0], [73.5, 236.0], [73.6, 237.0], [73.7, 239.0], [73.8, 240.0], [73.9, 241.0], [74.0, 243.0], [74.1, 245.0], [74.2, 246.0], [74.3, 247.0], [74.4, 250.0], [74.5, 251.0], [74.6, 254.0], [74.7, 255.0], [74.8, 256.0], [74.9, 258.0], [75.0, 260.0], [75.1, 262.0], [75.2, 265.0], [75.3, 267.0], [75.4, 269.0], [75.5, 271.0], [75.6, 272.0], [75.7, 273.0], [75.8, 275.0], [75.9, 279.0], [76.0, 281.0], [76.1, 283.0], [76.2, 283.0], [76.3, 285.0], [76.4, 288.0], [76.5, 291.0], [76.6, 295.0], [76.7, 298.0], [76.8, 300.0], [76.9, 302.0], [77.0, 304.0], [77.1, 307.0], [77.2, 308.0], [77.3, 310.0], [77.4, 314.0], [77.5, 315.0], [77.6, 317.0], [77.7, 319.0], [77.8, 321.0], [77.9, 323.0], [78.0, 325.0], [78.1, 326.0], [78.2, 328.0], [78.3, 331.0], [78.4, 334.0], [78.5, 336.0], [78.6, 338.0], [78.7, 340.0], [78.8, 342.0], [78.9, 347.0], [79.0, 352.0], [79.1, 356.0], [79.2, 362.0], [79.3, 365.0], [79.4, 366.0], [79.5, 376.0], [79.6, 380.0], [79.7, 384.0], [79.8, 387.0], [79.9, 389.0], [80.0, 391.0], [80.1, 395.0], [80.2, 399.0], [80.3, 403.0], [80.4, 406.0], [80.5, 409.0], [80.6, 414.0], [80.7, 418.0], [80.8, 422.0], [80.9, 424.0], [81.0, 427.0], [81.1, 429.0], [81.2, 431.0], [81.3, 435.0], [81.4, 439.0], [81.5, 442.0], [81.6, 445.0], [81.7, 450.0], [81.8, 452.0], [81.9, 456.0], [82.0, 459.0], [82.1, 465.0], [82.2, 467.0], [82.3, 469.0], [82.4, 471.0], [82.5, 474.0], [82.6, 477.0], [82.7, 480.0], [82.8, 482.0], [82.9, 485.0], [83.0, 488.0], [83.1, 492.0], [83.2, 496.0], [83.3, 499.0], [83.4, 504.0], [83.5, 507.0], [83.6, 510.0], [83.7, 515.0], [83.8, 517.0], [83.9, 520.0], [84.0, 523.0], [84.1, 525.0], [84.2, 529.0], [84.3, 530.0], [84.4, 534.0], [84.5, 537.0], [84.6, 541.0], [84.7, 544.0], [84.8, 546.0], [84.9, 547.0], [85.0, 549.0], [85.1, 552.0], [85.2, 555.0], [85.3, 557.0], [85.4, 560.0], [85.5, 562.0], [85.6, 565.0], [85.7, 570.0], [85.8, 574.0], [85.9, 578.0], [86.0, 579.0], [86.1, 582.0], [86.2, 586.0], [86.3, 589.0], [86.4, 591.0], [86.5, 594.0], [86.6, 598.0], [86.7, 601.0], [86.8, 603.0], [86.9, 605.0], [87.0, 609.0], [87.1, 614.0], [87.2, 618.0], [87.3, 625.0], [87.4, 630.0], [87.5, 632.0], [87.6, 635.0], [87.7, 638.0], [87.8, 642.0], [87.9, 645.0], [88.0, 647.0], [88.1, 651.0], [88.2, 653.0], [88.3, 655.0], [88.4, 657.0], [88.5, 662.0], [88.6, 667.0], [88.7, 669.0], [88.8, 676.0], [88.9, 680.0], [89.0, 682.0], [89.1, 686.0], [89.2, 689.0], [89.3, 693.0], [89.4, 699.0], [89.5, 704.0], [89.6, 707.0], [89.7, 713.0], [89.8, 715.0], [89.9, 717.0], [90.0, 724.0], [90.1, 729.0], [90.2, 734.0], [90.3, 740.0], [90.4, 743.0], [90.5, 745.0], [90.6, 747.0], [90.7, 752.0], [90.8, 757.0], [90.9, 759.0], [91.0, 765.0], [91.1, 767.0], [91.2, 776.0], [91.3, 779.0], [91.4, 783.0], [91.5, 788.0], [91.6, 793.0], [91.7, 795.0], [91.8, 797.0], [91.9, 804.0], [92.0, 807.0], [92.1, 812.0], [92.2, 814.0], [92.3, 818.0], [92.4, 821.0], [92.5, 824.0], [92.6, 830.0], [92.7, 837.0], [92.8, 843.0], [92.9, 845.0], [93.0, 851.0], [93.1, 855.0], [93.2, 859.0], [93.3, 861.0], [93.4, 866.0], [93.5, 874.0], [93.6, 883.0], [93.7, 888.0], [93.8, 893.0], [93.9, 897.0], [94.0, 900.0], [94.1, 906.0], [94.2, 917.0], [94.3, 926.0], [94.4, 928.0], [94.5, 934.0], [94.6, 936.0], [94.7, 943.0], [94.8, 957.0], [94.9, 961.0], [95.0, 968.0], [95.1, 978.0], [95.2, 985.0], [95.3, 995.0], [95.4, 1003.0], [95.5, 1010.0], [95.6, 1021.0], [95.7, 1033.0], [95.8, 1043.0], [95.9, 1055.0], [96.0, 1066.0], [96.1, 1072.0], [96.2, 1082.0], [96.3, 1092.0], [96.4, 1100.0], [96.5, 1105.0], [96.6, 1116.0], [96.7, 1125.0], [96.8, 1136.0], [96.9, 1146.0], [97.0, 1159.0], [97.1, 1179.0], [97.2, 1190.0], [97.3, 1194.0], [97.4, 1204.0], [97.5, 1215.0], [97.6, 1230.0], [97.7, 1243.0], [97.8, 1268.0], [97.9, 1285.0], [98.0, 1307.0], [98.1, 1314.0], [98.2, 1330.0], [98.3, 1351.0], [98.4, 1370.0], [98.5, 1394.0], [98.6, 1412.0], [98.7, 1438.0], [98.8, 1463.0], [98.9, 1487.0], [99.0, 1515.0], [99.1, 1556.0], [99.2, 1585.0], [99.3, 1607.0], [99.4, 1643.0], [99.5, 1680.0], [99.6, 1729.0], [99.7, 1787.0], [99.8, 1839.0], [99.9, 1893.0], [100.0, 1913.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 4572.0, "series": [{"data": [[0.0, 4572.0], [600.0, 206.0], [700.0, 178.0], [200.0, 422.0], [800.0, 159.0], [900.0, 101.0], [1000.0, 80.0], [1100.0, 74.0], [300.0, 255.0], [1200.0, 45.0], [1300.0, 39.0], [1400.0, 31.0], [1500.0, 26.0], [100.0, 717.0], [400.0, 230.0], [1600.0, 21.0], [1700.0, 13.0], [1800.0, 17.0], [1900.0, 3.0], [500.0, 248.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 80.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6196.0, "series": [{"data": [[0.0, 6196.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1161.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 80.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.777589134125633, "minX": 1.6277428E12, "maxY": 146.66214285714295, "series": [{"data": [[1.62774288E12, 4.416107382550338], [1.62774287E12, 146.66214285714295], [1.62774286E12, 56.33148404993061], [1.62774285E12, 10.553621169916442], [1.62774284E12, 4.0243328100470945], [1.62774283E12, 3.303590859630034], [1.62774282E12, 2.777589134125633], [1.62774281E12, 3.5955555555555554], [1.6277428E12, 13.333333333333334]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62774288E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.0, "maxY": 1258.5156250000005, "series": [{"data": [[2.0, 20.968017057569302], [3.0, 20.79427083333332], [4.0, 25.88207547169809], [5.0, 27.756834532374114], [6.0, 34.10638297872341], [7.0, 51.12765957446808], [8.0, 42.333333333333336], [9.0, 59.158940397350996], [10.0, 172.16666666666669], [11.0, 71.54421768707485], [12.0, 79.18709677419356], [13.0, 17.983050847457626], [14.0, 94.66891891891893], [15.0, 101.6], [16.0, 69.0], [17.0, 111.87162162162161], [18.0, 94.0], [19.0, 92.42857142857143], [20.0, 91.5], [21.0, 135.8407643312102], [22.0, 136.85714285714286], [23.0, 144.8], [24.0, 158.5165562913908], [25.0, 121.33333333333334], [26.0, 51.17187500000001], [27.0, 174.0], [28.0, 150.0], [29.0, 188.0253164556963], [30.0, 185.33333333333334], [31.0, 154.5], [32.0, 132.66666666666666], [33.0, 27.0], [34.0, 203.2], [35.0, 149.8], [36.0, 241.83766233766238], [37.0, 207.1111111111111], [38.0, 145.5], [39.0, 190.5], [40.0, 237.42857142857142], [41.0, 177.57142857142858], [42.0, 260.0], [43.0, 276.65432098765433], [44.0, 240.49999999999997], [45.0, 246.4], [46.0, 175.8], [47.0, 277.85714285714283], [48.0, 209.66666666666666], [49.0, 226.2], [50.0, 261.77777777777777], [51.0, 294.1], [52.0, 190.25], [53.0, 59.999999999999964], [54.0, 330.4], [55.0, 287.33333333333326], [56.0, 247.77777777777777], [57.0, 293.71428571428567], [58.0, 312.5], [59.0, 306.5], [60.0, 289.0], [61.0, 295.0], [63.0, 269.8], [64.0, 229.4], [65.0, 402.81818181818187], [66.0, 308.6842105263158], [67.0, 65.0], [71.0, 140.0], [70.0, 127.0], [69.0, 135.0], [68.0, 54.0], [73.0, 271.4], [74.0, 253.6], [75.0, 294.6666666666667], [72.0, 141.0], [76.0, 265.0], [77.0, 534.2499999999999], [78.0, 521.0496894409933], [79.0, 412.33333333333337], [80.0, 408.6666666666667], [81.0, 390.3870967741936], [82.0, 538.9074074074074], [83.0, 504.2500000000001], [84.0, 483.38461538461536], [85.0, 489.66666666666663], [86.0, 513.2857142857142], [87.0, 224.0], [88.0, 372.8], [89.0, 313.2857142857143], [90.0, 429.7], [91.0, 471.75], [92.0, 494.5625], [93.0, 526.9166666666665], [94.0, 539.4444444444445], [95.0, 40.0], [96.0, 330.5], [97.0, 501.1282051282051], [98.0, 223.5], [99.0, 68.0], [102.0, 341.66666666666663], [103.0, 48.0], [101.0, 37.0], [100.0, 34.0], [104.0, 476.8333333333333], [105.0, 428.42857142857144], [106.0, 165.61971830985914], [107.0, 604.4], [108.0, 760.0303030303029], [109.0, 744.35], [110.0, 574.6666666666666], [111.0, 194.0], [115.0, 163.0], [112.0, 299.0], [116.0, 429.0], [119.0, 255.0], [118.0, 256.6666666666667], [117.0, 285.0], [123.0, 795.6666666666666], [122.0, 150.0], [121.0, 247.0], [120.0, 237.0], [124.0, 788.9361702127659], [125.0, 969.7692307692308], [126.0, 660.7272727272727], [127.0, 569.1250000000001], [128.0, 491.0], [129.0, 298.0], [131.0, 462.0], [133.0, 342.0], [135.0, 239.0], [132.0, 143.0], [130.0, 144.0], [137.0, 535.25], [138.0, 626.0909090909091], [139.0, 812.909090909091], [140.0, 704.1111111111111], [141.0, 902.4705882352943], [142.0, 923.4651162790695], [143.0, 922.8823529411766], [144.0, 854.7500000000001], [145.0, 833.1333333333333], [146.0, 885.4074074074075], [147.0, 959.9333333333333], [148.0, 759.2], [149.0, 664.9333333333333], [150.0, 1158.8571428571427], [151.0, 810.6666666666666], [156.0, 336.5], [154.0, 387.0], [153.0, 265.0], [152.0, 268.0], [162.0, 968.0], [166.0, 825.0], [167.0, 313.0], [169.0, 845.9615384615385], [170.0, 919.7058823529412], [171.0, 572.0833333333334], [172.0, 691.0], [175.0, 506.0], [174.0, 213.5], [176.0, 974.7142857142857], [178.0, 961.5], [179.0, 771.2941176470588], [180.0, 1146.6357615894044], [181.0, 968.5], [182.0, 906.0], [183.0, 504.32000000000005], [177.0, 470.0], [191.0, 537.0], [190.0, 457.0], [189.0, 592.0], [188.0, 844.0], [187.0, 522.0], [186.0, 451.0], [185.0, 530.0], [184.0, 872.0], [199.0, 427.0], [198.0, 693.0], [197.0, 679.0], [196.0, 714.0], [195.0, 627.0], [194.0, 443.0], [193.0, 558.0], [192.0, 633.0], [202.0, 417.5], [204.0, 701.1666666666667], [205.0, 689.375], [206.0, 611.3333333333334], [207.0, 742.9411764705883], [203.0, 525.0], [201.0, 726.0], [200.0, 322.0], [208.0, 650.2222222222222], [209.0, 696.25], [210.0, 1258.5156250000005], [211.0, 727.5], [212.0, 906.803652968036], [1.0, 14.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}, {"data": [[41.612612612612644, 219.71749361301605]], "isOverall": false, "label": "Healthy Thinking CN-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 212.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 68.4, "minX": 1.6277428E12, "maxY": 5476139.2, "series": [{"data": [[1.62774288E12, 565842.4], [1.62774287E12, 5316640.0], [1.62774286E12, 5476139.2], [1.62774285E12, 5453353.6], [1.62774284E12, 4838142.4], [1.62774283E12, 3489994.4], [1.62774282E12, 2236786.4], [1.62774281E12, 854465.7], [1.6277428E12, 11394.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62774288E12, 3397.2], [1.62774287E12, 31920.0], [1.62774286E12, 32877.6], [1.62774285E12, 32740.8], [1.62774284E12, 29047.2], [1.62774283E12, 20953.2], [1.62774282E12, 13429.2], [1.62774281E12, 5130.0], [1.6277428E12, 68.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62774288E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 17.067114093959738, "minX": 1.6277428E12, "maxY": 682.1864285714294, "series": [{"data": [[1.62774288E12, 17.067114093959738], [1.62774287E12, 682.1864285714294], [1.62774286E12, 349.6310679611653], [1.62774285E12, 68.73676880222843], [1.62774284E12, 25.291208791208774], [1.62774283E12, 21.787812840043532], [1.62774282E12, 22.27504244482171], [1.62774281E12, 32.58222222222219], [1.6277428E12, 288.6666666666667]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62774288E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 16.89261744966442, "minX": 1.6277428E12, "maxY": 662.5507142857134, "series": [{"data": [[1.62774288E12, 16.89261744966442], [1.62774287E12, 662.5507142857134], [1.62774286E12, 342.07766990291293], [1.62774285E12, 68.35654596100277], [1.62774284E12, 24.912872841444237], [1.62774283E12, 21.431991294885723], [1.62774282E12, 21.90492359932088], [1.62774281E12, 31.342222222222226], [1.6277428E12, 283.3333333333333]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62774288E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 15.39597315436241, "minX": 1.6277428E12, "maxY": 636.1221428571425, "series": [{"data": [[1.62774288E12, 15.39597315436241], [1.62774287E12, 636.1221428571425], [1.62774286E12, 331.884882108183], [1.62774285E12, 64.37883008356539], [1.62774284E12, 22.521193092621665], [1.62774283E12, 19.41675734494016], [1.62774282E12, 19.870967741935498], [1.62774281E12, 27.208888888888907], [1.6277428E12, 255.33333333333331]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62774288E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.6277428E12, "maxY": 1913.0, "series": [{"data": [[1.62774288E12, 40.0], [1.62774287E12, 1913.0], [1.62774286E12, 1250.0], [1.62774285E12, 234.0], [1.62774284E12, 95.0], [1.62774283E12, 86.0], [1.62774282E12, 157.0], [1.62774281E12, 112.0], [1.6277428E12, 742.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62774288E12, 10.0], [1.62774287E12, 11.0], [1.62774286E12, 63.0], [1.62774285E12, 13.0], [1.62774284E12, 11.0], [1.62774283E12, 10.0], [1.62774282E12, 11.0], [1.62774281E12, 12.0], [1.6277428E12, 52.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62774288E12, 24.0], [1.62774287E12, 1321.6000000000004], [1.62774286E12, 615.0], [1.62774285E12, 120.0], [1.62774284E12, 39.0], [1.62774283E12, 37.0], [1.62774282E12, 39.0], [1.62774281E12, 65.20000000000002], [1.6277428E12, 742.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62774288E12, 38.5], [1.62774287E12, 1865.7300000000002], [1.62774286E12, 830.6899999999989], [1.62774285E12, 171.62999999999988], [1.62774284E12, 59.0], [1.62774283E12, 59.799999999999955], [1.62774282E12, 100.20000000000027], [1.62774281E12, 108.22000000000003], [1.6277428E12, 742.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62774288E12, 28.0], [1.62774287E12, 1538.6500000000003], [1.62774286E12, 682.0], [1.62774285E12, 139.0], [1.62774284E12, 43.0], [1.62774283E12, 44.0], [1.62774282E12, 56.0], [1.62774281E12, 86.69999999999999], [1.6277428E12, 742.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62774288E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 942.5, "series": [{"data": [[3.0, 72.0], [8.0, 98.5], [14.0, 81.0], [16.0, 17.5], [18.0, 49.0], [22.0, 28.5], [25.0, 28.0], [29.0, 16.0], [31.0, 25.0], [32.0, 20.5], [37.0, 18.0], [38.0, 18.0], [43.0, 16.0], [45.0, 18.0], [51.0, 50.0], [54.0, 18.0], [57.0, 14.0], [60.0, 17.5], [64.0, 16.0], [68.0, 15.0], [70.0, 13.0], [71.0, 16.0], [75.0, 16.0], [77.0, 18.0], [82.0, 14.0], [85.0, 15.0], [86.0, 15.0], [84.0, 20.5], [92.0, 17.5], [97.0, 23.0], [96.0, 25.0], [103.0, 40.0], [104.0, 16.0], [108.0, 854.0], [112.0, 30.0], [115.0, 15.0], [119.0, 27.0], [117.0, 666.0], [121.0, 19.0], [126.0, 812.5], [128.0, 23.0], [130.0, 22.0], [134.0, 23.0], [135.0, 48.0], [133.0, 498.0], [142.0, 58.0], [143.0, 51.0], [138.0, 30.5], [139.0, 67.0], [140.0, 177.5], [148.0, 93.5], [145.0, 78.0], [147.0, 149.0], [153.0, 145.0], [154.0, 127.5], [152.0, 192.0], [155.0, 518.5], [162.0, 894.0], [171.0, 734.0], [169.0, 238.0], [180.0, 942.5], [226.0, 898.5], [1.0, 19.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 226.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 939.5, "series": [{"data": [[3.0, 68.0], [8.0, 93.5], [14.0, 79.5], [16.0, 17.5], [18.0, 48.0], [22.0, 27.0], [25.0, 27.0], [29.0, 16.0], [31.0, 24.0], [32.0, 19.5], [37.0, 17.0], [38.0, 17.5], [43.0, 16.0], [45.0, 18.0], [51.0, 49.0], [54.0, 17.5], [57.0, 14.0], [60.0, 17.5], [64.0, 15.5], [68.0, 14.5], [70.0, 13.0], [71.0, 16.0], [75.0, 16.0], [77.0, 16.0], [82.0, 14.0], [85.0, 15.0], [86.0, 15.0], [84.0, 20.5], [92.0, 17.5], [97.0, 23.0], [96.0, 24.5], [103.0, 40.0], [104.0, 15.0], [108.0, 786.5], [112.0, 29.0], [115.0, 15.0], [119.0, 27.0], [117.0, 630.0], [121.0, 19.0], [126.0, 761.0], [128.0, 22.0], [130.0, 21.0], [134.0, 22.0], [135.0, 47.0], [133.0, 471.0], [142.0, 58.0], [143.0, 50.5], [138.0, 30.0], [139.0, 67.0], [140.0, 177.5], [148.0, 93.0], [145.0, 78.0], [147.0, 149.0], [153.0, 144.0], [154.0, 127.0], [152.0, 192.0], [155.0, 518.0], [162.0, 880.0], [171.0, 729.0], [169.0, 238.0], [180.0, 939.5], [226.0, 898.0], [1.0, 18.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 226.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.6277428E12, "maxY": 154.4, "series": [{"data": [[1.62774288E12, 14.8], [1.62774287E12, 127.8], [1.62774286E12, 154.4], [1.62774285E12, 145.4], [1.62774284E12, 127.4], [1.62774283E12, 92.1], [1.62774282E12, 58.8], [1.62774281E12, 22.7], [1.6277428E12, 0.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62774288E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.6277428E12, "maxY": 144.2, "series": [{"data": [[1.62774288E12, 14.9], [1.62774287E12, 140.0], [1.62774286E12, 144.2], [1.62774285E12, 143.6], [1.62774284E12, 127.4], [1.62774283E12, 91.9], [1.62774282E12, 58.9], [1.62774281E12, 22.5], [1.6277428E12, 0.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62774288E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.6277428E12, "maxY": 144.2, "series": [{"data": [[1.62774288E12, 14.9], [1.62774287E12, 140.0], [1.62774286E12, 144.2], [1.62774285E12, 143.6], [1.62774284E12, 127.4], [1.62774283E12, 91.9], [1.62774282E12, 58.9], [1.62774281E12, 22.5], [1.6277428E12, 0.3]], "isOverall": false, "label": "Healthy Thinking CN-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62774288E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.6277428E12, "maxY": 144.2, "series": [{"data": [[1.62774288E12, 14.9], [1.62774287E12, 140.0], [1.62774286E12, 144.2], [1.62774285E12, 143.6], [1.62774284E12, 127.4], [1.62774283E12, 91.9], [1.62774282E12, 58.9], [1.62774281E12, 22.5], [1.6277428E12, 0.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62774288E12, "title": "Total Transactions Per Second"}},
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

