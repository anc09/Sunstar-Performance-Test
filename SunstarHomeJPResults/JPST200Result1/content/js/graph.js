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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 2907.0, "series": [{"data": [[0.0, 10.0], [0.1, 11.0], [0.2, 11.0], [0.3, 11.0], [0.4, 12.0], [0.5, 12.0], [0.6, 12.0], [0.7, 12.0], [0.8, 12.0], [0.9, 13.0], [1.0, 13.0], [1.1, 13.0], [1.2, 13.0], [1.3, 13.0], [1.4, 13.0], [1.5, 14.0], [1.6, 14.0], [1.7, 14.0], [1.8, 14.0], [1.9, 14.0], [2.0, 14.0], [2.1, 14.0], [2.2, 15.0], [2.3, 15.0], [2.4, 15.0], [2.5, 15.0], [2.6, 15.0], [2.7, 15.0], [2.8, 15.0], [2.9, 15.0], [3.0, 15.0], [3.1, 15.0], [3.2, 15.0], [3.3, 16.0], [3.4, 16.0], [3.5, 16.0], [3.6, 16.0], [3.7, 16.0], [3.8, 16.0], [3.9, 16.0], [4.0, 16.0], [4.1, 16.0], [4.2, 16.0], [4.3, 16.0], [4.4, 16.0], [4.5, 17.0], [4.6, 17.0], [4.7, 17.0], [4.8, 17.0], [4.9, 17.0], [5.0, 17.0], [5.1, 17.0], [5.2, 17.0], [5.3, 17.0], [5.4, 18.0], [5.5, 18.0], [5.6, 18.0], [5.7, 18.0], [5.8, 18.0], [5.9, 18.0], [6.0, 18.0], [6.1, 18.0], [6.2, 18.0], [6.3, 18.0], [6.4, 18.0], [6.5, 19.0], [6.6, 19.0], [6.7, 19.0], [6.8, 19.0], [6.9, 19.0], [7.0, 19.0], [7.1, 19.0], [7.2, 19.0], [7.3, 19.0], [7.4, 19.0], [7.5, 19.0], [7.6, 19.0], [7.7, 19.0], [7.8, 19.0], [7.9, 19.0], [8.0, 19.0], [8.1, 20.0], [8.2, 20.0], [8.3, 20.0], [8.4, 20.0], [8.5, 20.0], [8.6, 20.0], [8.7, 20.0], [8.8, 20.0], [8.9, 20.0], [9.0, 20.0], [9.1, 20.0], [9.2, 20.0], [9.3, 20.0], [9.4, 20.0], [9.5, 20.0], [9.6, 20.0], [9.7, 21.0], [9.8, 21.0], [9.9, 21.0], [10.0, 21.0], [10.1, 21.0], [10.2, 21.0], [10.3, 21.0], [10.4, 21.0], [10.5, 21.0], [10.6, 21.0], [10.7, 21.0], [10.8, 21.0], [10.9, 21.0], [11.0, 21.0], [11.1, 21.0], [11.2, 21.0], [11.3, 21.0], [11.4, 21.0], [11.5, 21.0], [11.6, 21.0], [11.7, 21.0], [11.8, 21.0], [11.9, 22.0], [12.0, 22.0], [12.1, 22.0], [12.2, 22.0], [12.3, 22.0], [12.4, 22.0], [12.5, 22.0], [12.6, 22.0], [12.7, 22.0], [12.8, 22.0], [12.9, 22.0], [13.0, 22.0], [13.1, 22.0], [13.2, 22.0], [13.3, 22.0], [13.4, 22.0], [13.5, 22.0], [13.6, 22.0], [13.7, 22.0], [13.8, 22.0], [13.9, 22.0], [14.0, 22.0], [14.1, 22.0], [14.2, 22.0], [14.3, 23.0], [14.4, 23.0], [14.5, 23.0], [14.6, 23.0], [14.7, 23.0], [14.8, 23.0], [14.9, 23.0], [15.0, 23.0], [15.1, 23.0], [15.2, 23.0], [15.3, 23.0], [15.4, 23.0], [15.5, 23.0], [15.6, 23.0], [15.7, 23.0], [15.8, 23.0], [15.9, 23.0], [16.0, 23.0], [16.1, 23.0], [16.2, 23.0], [16.3, 23.0], [16.4, 23.0], [16.5, 24.0], [16.6, 24.0], [16.7, 24.0], [16.8, 24.0], [16.9, 24.0], [17.0, 24.0], [17.1, 24.0], [17.2, 24.0], [17.3, 24.0], [17.4, 24.0], [17.5, 24.0], [17.6, 24.0], [17.7, 24.0], [17.8, 24.0], [17.9, 24.0], [18.0, 24.0], [18.1, 24.0], [18.2, 24.0], [18.3, 24.0], [18.4, 24.0], [18.5, 24.0], [18.6, 25.0], [18.7, 25.0], [18.8, 25.0], [18.9, 25.0], [19.0, 25.0], [19.1, 25.0], [19.2, 25.0], [19.3, 25.0], [19.4, 25.0], [19.5, 25.0], [19.6, 25.0], [19.7, 25.0], [19.8, 25.0], [19.9, 25.0], [20.0, 25.0], [20.1, 25.0], [20.2, 25.0], [20.3, 25.0], [20.4, 25.0], [20.5, 25.0], [20.6, 25.0], [20.7, 26.0], [20.8, 26.0], [20.9, 26.0], [21.0, 26.0], [21.1, 26.0], [21.2, 26.0], [21.3, 26.0], [21.4, 26.0], [21.5, 26.0], [21.6, 26.0], [21.7, 26.0], [21.8, 26.0], [21.9, 26.0], [22.0, 26.0], [22.1, 26.0], [22.2, 26.0], [22.3, 26.0], [22.4, 26.0], [22.5, 26.0], [22.6, 26.0], [22.7, 26.0], [22.8, 26.0], [22.9, 27.0], [23.0, 27.0], [23.1, 27.0], [23.2, 27.0], [23.3, 27.0], [23.4, 27.0], [23.5, 27.0], [23.6, 27.0], [23.7, 27.0], [23.8, 27.0], [23.9, 27.0], [24.0, 27.0], [24.1, 27.0], [24.2, 27.0], [24.3, 27.0], [24.4, 27.0], [24.5, 27.0], [24.6, 27.0], [24.7, 27.0], [24.8, 27.0], [24.9, 27.0], [25.0, 27.0], [25.1, 27.0], [25.2, 28.0], [25.3, 28.0], [25.4, 28.0], [25.5, 28.0], [25.6, 28.0], [25.7, 28.0], [25.8, 28.0], [25.9, 28.0], [26.0, 28.0], [26.1, 28.0], [26.2, 28.0], [26.3, 28.0], [26.4, 28.0], [26.5, 28.0], [26.6, 28.0], [26.7, 28.0], [26.8, 28.0], [26.9, 28.0], [27.0, 28.0], [27.1, 28.0], [27.2, 28.0], [27.3, 29.0], [27.4, 29.0], [27.5, 29.0], [27.6, 29.0], [27.7, 29.0], [27.8, 29.0], [27.9, 29.0], [28.0, 29.0], [28.1, 29.0], [28.2, 29.0], [28.3, 29.0], [28.4, 29.0], [28.5, 29.0], [28.6, 29.0], [28.7, 29.0], [28.8, 29.0], [28.9, 29.0], [29.0, 29.0], [29.1, 29.0], [29.2, 29.0], [29.3, 29.0], [29.4, 30.0], [29.5, 30.0], [29.6, 30.0], [29.7, 30.0], [29.8, 30.0], [29.9, 30.0], [30.0, 30.0], [30.1, 30.0], [30.2, 30.0], [30.3, 30.0], [30.4, 30.0], [30.5, 30.0], [30.6, 30.0], [30.7, 30.0], [30.8, 30.0], [30.9, 30.0], [31.0, 30.0], [31.1, 30.0], [31.2, 30.0], [31.3, 30.0], [31.4, 31.0], [31.5, 31.0], [31.6, 31.0], [31.7, 31.0], [31.8, 31.0], [31.9, 31.0], [32.0, 31.0], [32.1, 31.0], [32.2, 31.0], [32.3, 31.0], [32.4, 31.0], [32.5, 31.0], [32.6, 31.0], [32.7, 31.0], [32.8, 31.0], [32.9, 31.0], [33.0, 31.0], [33.1, 31.0], [33.2, 31.0], [33.3, 32.0], [33.4, 32.0], [33.5, 32.0], [33.6, 32.0], [33.7, 32.0], [33.8, 32.0], [33.9, 32.0], [34.0, 32.0], [34.1, 32.0], [34.2, 32.0], [34.3, 32.0], [34.4, 32.0], [34.5, 32.0], [34.6, 32.0], [34.7, 32.0], [34.8, 33.0], [34.9, 33.0], [35.0, 33.0], [35.1, 33.0], [35.2, 33.0], [35.3, 33.0], [35.4, 33.0], [35.5, 33.0], [35.6, 33.0], [35.7, 33.0], [35.8, 33.0], [35.9, 33.0], [36.0, 33.0], [36.1, 33.0], [36.2, 33.0], [36.3, 34.0], [36.4, 34.0], [36.5, 34.0], [36.6, 34.0], [36.7, 34.0], [36.8, 34.0], [36.9, 34.0], [37.0, 34.0], [37.1, 34.0], [37.2, 34.0], [37.3, 34.0], [37.4, 34.0], [37.5, 35.0], [37.6, 35.0], [37.7, 35.0], [37.8, 35.0], [37.9, 35.0], [38.0, 35.0], [38.1, 35.0], [38.2, 35.0], [38.3, 35.0], [38.4, 36.0], [38.5, 36.0], [38.6, 36.0], [38.7, 36.0], [38.8, 36.0], [38.9, 36.0], [39.0, 36.0], [39.1, 36.0], [39.2, 36.0], [39.3, 36.0], [39.4, 36.0], [39.5, 37.0], [39.6, 37.0], [39.7, 37.0], [39.8, 37.0], [39.9, 37.0], [40.0, 37.0], [40.1, 37.0], [40.2, 37.0], [40.3, 37.0], [40.4, 38.0], [40.5, 38.0], [40.6, 38.0], [40.7, 38.0], [40.8, 38.0], [40.9, 38.0], [41.0, 38.0], [41.1, 39.0], [41.2, 39.0], [41.3, 39.0], [41.4, 39.0], [41.5, 39.0], [41.6, 39.0], [41.7, 39.0], [41.8, 39.0], [41.9, 40.0], [42.0, 40.0], [42.1, 40.0], [42.2, 40.0], [42.3, 40.0], [42.4, 40.0], [42.5, 40.0], [42.6, 41.0], [42.7, 41.0], [42.8, 41.0], [42.9, 41.0], [43.0, 41.0], [43.1, 41.0], [43.2, 41.0], [43.3, 41.0], [43.4, 41.0], [43.5, 42.0], [43.6, 42.0], [43.7, 42.0], [43.8, 42.0], [43.9, 42.0], [44.0, 42.0], [44.1, 42.0], [44.2, 42.0], [44.3, 42.0], [44.4, 43.0], [44.5, 43.0], [44.6, 43.0], [44.7, 43.0], [44.8, 43.0], [44.9, 43.0], [45.0, 43.0], [45.1, 44.0], [45.2, 44.0], [45.3, 44.0], [45.4, 44.0], [45.5, 44.0], [45.6, 44.0], [45.7, 44.0], [45.8, 44.0], [45.9, 45.0], [46.0, 45.0], [46.1, 45.0], [46.2, 45.0], [46.3, 45.0], [46.4, 45.0], [46.5, 46.0], [46.6, 46.0], [46.7, 46.0], [46.8, 46.0], [46.9, 47.0], [47.0, 47.0], [47.1, 47.0], [47.2, 47.0], [47.3, 47.0], [47.4, 47.0], [47.5, 48.0], [47.6, 48.0], [47.7, 48.0], [47.8, 48.0], [47.9, 48.0], [48.0, 48.0], [48.1, 49.0], [48.2, 49.0], [48.3, 49.0], [48.4, 49.0], [48.5, 50.0], [48.6, 50.0], [48.7, 50.0], [48.8, 50.0], [48.9, 50.0], [49.0, 51.0], [49.1, 51.0], [49.2, 51.0], [49.3, 51.0], [49.4, 52.0], [49.5, 52.0], [49.6, 52.0], [49.7, 52.0], [49.8, 52.0], [49.9, 53.0], [50.0, 53.0], [50.1, 53.0], [50.2, 53.0], [50.3, 53.0], [50.4, 54.0], [50.5, 54.0], [50.6, 54.0], [50.7, 54.0], [50.8, 55.0], [50.9, 55.0], [51.0, 55.0], [51.1, 55.0], [51.2, 56.0], [51.3, 56.0], [51.4, 56.0], [51.5, 56.0], [51.6, 56.0], [51.7, 57.0], [51.8, 57.0], [51.9, 58.0], [52.0, 58.0], [52.1, 58.0], [52.2, 58.0], [52.3, 59.0], [52.4, 60.0], [52.5, 60.0], [52.6, 60.0], [52.7, 61.0], [52.8, 61.0], [52.9, 62.0], [53.0, 62.0], [53.1, 63.0], [53.2, 63.0], [53.3, 64.0], [53.4, 64.0], [53.5, 64.0], [53.6, 65.0], [53.7, 65.0], [53.8, 66.0], [53.9, 66.0], [54.0, 67.0], [54.1, 67.0], [54.2, 68.0], [54.3, 68.0], [54.4, 68.0], [54.5, 69.0], [54.6, 69.0], [54.7, 70.0], [54.8, 70.0], [54.9, 71.0], [55.0, 71.0], [55.1, 72.0], [55.2, 72.0], [55.3, 72.0], [55.4, 73.0], [55.5, 74.0], [55.6, 74.0], [55.7, 74.0], [55.8, 75.0], [55.9, 75.0], [56.0, 76.0], [56.1, 76.0], [56.2, 77.0], [56.3, 77.0], [56.4, 78.0], [56.5, 78.0], [56.6, 79.0], [56.7, 79.0], [56.8, 79.0], [56.9, 79.0], [57.0, 80.0], [57.1, 80.0], [57.2, 80.0], [57.3, 81.0], [57.4, 81.0], [57.5, 81.0], [57.6, 82.0], [57.7, 82.0], [57.8, 83.0], [57.9, 83.0], [58.0, 83.0], [58.1, 84.0], [58.2, 84.0], [58.3, 84.0], [58.4, 85.0], [58.5, 86.0], [58.6, 86.0], [58.7, 87.0], [58.8, 87.0], [58.9, 88.0], [59.0, 88.0], [59.1, 89.0], [59.2, 89.0], [59.3, 90.0], [59.4, 91.0], [59.5, 91.0], [59.6, 92.0], [59.7, 93.0], [59.8, 93.0], [59.9, 94.0], [60.0, 95.0], [60.1, 95.0], [60.2, 96.0], [60.3, 96.0], [60.4, 97.0], [60.5, 98.0], [60.6, 99.0], [60.7, 99.0], [60.8, 100.0], [60.9, 100.0], [61.0, 101.0], [61.1, 102.0], [61.2, 103.0], [61.3, 103.0], [61.4, 104.0], [61.5, 105.0], [61.6, 106.0], [61.7, 106.0], [61.8, 107.0], [61.9, 107.0], [62.0, 108.0], [62.1, 109.0], [62.2, 110.0], [62.3, 110.0], [62.4, 110.0], [62.5, 111.0], [62.6, 111.0], [62.7, 112.0], [62.8, 112.0], [62.9, 113.0], [63.0, 113.0], [63.1, 114.0], [63.2, 115.0], [63.3, 115.0], [63.4, 116.0], [63.5, 116.0], [63.6, 117.0], [63.7, 118.0], [63.8, 119.0], [63.9, 119.0], [64.0, 120.0], [64.1, 121.0], [64.2, 121.0], [64.3, 122.0], [64.4, 122.0], [64.5, 123.0], [64.6, 124.0], [64.7, 124.0], [64.8, 125.0], [64.9, 126.0], [65.0, 127.0], [65.1, 127.0], [65.2, 127.0], [65.3, 129.0], [65.4, 131.0], [65.5, 131.0], [65.6, 132.0], [65.7, 133.0], [65.8, 134.0], [65.9, 135.0], [66.0, 136.0], [66.1, 137.0], [66.2, 138.0], [66.3, 139.0], [66.4, 140.0], [66.5, 142.0], [66.6, 143.0], [66.7, 144.0], [66.8, 145.0], [66.9, 146.0], [67.0, 147.0], [67.1, 148.0], [67.2, 149.0], [67.3, 150.0], [67.4, 151.0], [67.5, 151.0], [67.6, 152.0], [67.7, 153.0], [67.8, 156.0], [67.9, 156.0], [68.0, 157.0], [68.1, 159.0], [68.2, 160.0], [68.3, 161.0], [68.4, 162.0], [68.5, 163.0], [68.6, 163.0], [68.7, 164.0], [68.8, 165.0], [68.9, 166.0], [69.0, 167.0], [69.1, 167.0], [69.2, 168.0], [69.3, 169.0], [69.4, 170.0], [69.5, 171.0], [69.6, 173.0], [69.7, 173.0], [69.8, 174.0], [69.9, 175.0], [70.0, 176.0], [70.1, 177.0], [70.2, 179.0], [70.3, 181.0], [70.4, 183.0], [70.5, 183.0], [70.6, 184.0], [70.7, 186.0], [70.8, 187.0], [70.9, 188.0], [71.0, 189.0], [71.1, 191.0], [71.2, 192.0], [71.3, 193.0], [71.4, 193.0], [71.5, 195.0], [71.6, 196.0], [71.7, 196.0], [71.8, 197.0], [71.9, 198.0], [72.0, 199.0], [72.1, 200.0], [72.2, 201.0], [72.3, 202.0], [72.4, 203.0], [72.5, 203.0], [72.6, 204.0], [72.7, 206.0], [72.8, 207.0], [72.9, 208.0], [73.0, 209.0], [73.1, 211.0], [73.2, 211.0], [73.3, 212.0], [73.4, 213.0], [73.5, 214.0], [73.6, 216.0], [73.7, 217.0], [73.8, 219.0], [73.9, 220.0], [74.0, 222.0], [74.1, 223.0], [74.2, 224.0], [74.3, 225.0], [74.4, 227.0], [74.5, 231.0], [74.6, 231.0], [74.7, 233.0], [74.8, 237.0], [74.9, 240.0], [75.0, 241.0], [75.1, 243.0], [75.2, 245.0], [75.3, 246.0], [75.4, 248.0], [75.5, 250.0], [75.6, 251.0], [75.7, 254.0], [75.8, 256.0], [75.9, 260.0], [76.0, 262.0], [76.1, 264.0], [76.2, 269.0], [76.3, 271.0], [76.4, 273.0], [76.5, 275.0], [76.6, 276.0], [76.7, 278.0], [76.8, 279.0], [76.9, 284.0], [77.0, 287.0], [77.1, 289.0], [77.2, 290.0], [77.3, 292.0], [77.4, 294.0], [77.5, 295.0], [77.6, 295.0], [77.7, 296.0], [77.8, 299.0], [77.9, 300.0], [78.0, 301.0], [78.1, 303.0], [78.2, 305.0], [78.3, 307.0], [78.4, 308.0], [78.5, 312.0], [78.6, 315.0], [78.7, 317.0], [78.8, 318.0], [78.9, 320.0], [79.0, 322.0], [79.1, 324.0], [79.2, 325.0], [79.3, 326.0], [79.4, 327.0], [79.5, 329.0], [79.6, 331.0], [79.7, 333.0], [79.8, 335.0], [79.9, 336.0], [80.0, 338.0], [80.1, 339.0], [80.2, 341.0], [80.3, 343.0], [80.4, 344.0], [80.5, 346.0], [80.6, 347.0], [80.7, 348.0], [80.8, 350.0], [80.9, 352.0], [81.0, 354.0], [81.1, 356.0], [81.2, 359.0], [81.3, 360.0], [81.4, 362.0], [81.5, 363.0], [81.6, 365.0], [81.7, 366.0], [81.8, 368.0], [81.9, 369.0], [82.0, 370.0], [82.1, 372.0], [82.2, 374.0], [82.3, 375.0], [82.4, 378.0], [82.5, 380.0], [82.6, 382.0], [82.7, 383.0], [82.8, 383.0], [82.9, 384.0], [83.0, 385.0], [83.1, 387.0], [83.2, 388.0], [83.3, 391.0], [83.4, 392.0], [83.5, 394.0], [83.6, 395.0], [83.7, 398.0], [83.8, 400.0], [83.9, 401.0], [84.0, 404.0], [84.1, 406.0], [84.2, 407.0], [84.3, 411.0], [84.4, 413.0], [84.5, 415.0], [84.6, 419.0], [84.7, 421.0], [84.8, 423.0], [84.9, 427.0], [85.0, 429.0], [85.1, 433.0], [85.2, 436.0], [85.3, 438.0], [85.4, 440.0], [85.5, 443.0], [85.6, 444.0], [85.7, 447.0], [85.8, 448.0], [85.9, 452.0], [86.0, 454.0], [86.1, 457.0], [86.2, 460.0], [86.3, 463.0], [86.4, 465.0], [86.5, 466.0], [86.6, 471.0], [86.7, 475.0], [86.8, 478.0], [86.9, 483.0], [87.0, 490.0], [87.1, 493.0], [87.2, 496.0], [87.3, 501.0], [87.4, 504.0], [87.5, 506.0], [87.6, 511.0], [87.7, 513.0], [87.8, 516.0], [87.9, 520.0], [88.0, 523.0], [88.1, 529.0], [88.2, 533.0], [88.3, 537.0], [88.4, 539.0], [88.5, 544.0], [88.6, 546.0], [88.7, 549.0], [88.8, 551.0], [88.9, 554.0], [89.0, 557.0], [89.1, 560.0], [89.2, 565.0], [89.3, 568.0], [89.4, 571.0], [89.5, 573.0], [89.6, 575.0], [89.7, 577.0], [89.8, 580.0], [89.9, 585.0], [90.0, 588.0], [90.1, 591.0], [90.2, 594.0], [90.3, 599.0], [90.4, 602.0], [90.5, 605.0], [90.6, 609.0], [90.7, 613.0], [90.8, 616.0], [90.9, 618.0], [91.0, 620.0], [91.1, 622.0], [91.2, 624.0], [91.3, 627.0], [91.4, 631.0], [91.5, 635.0], [91.6, 639.0], [91.7, 644.0], [91.8, 648.0], [91.9, 652.0], [92.0, 655.0], [92.1, 657.0], [92.2, 660.0], [92.3, 663.0], [92.4, 666.0], [92.5, 670.0], [92.6, 674.0], [92.7, 676.0], [92.8, 680.0], [92.9, 688.0], [93.0, 693.0], [93.1, 696.0], [93.2, 700.0], [93.3, 703.0], [93.4, 707.0], [93.5, 712.0], [93.6, 714.0], [93.7, 717.0], [93.8, 719.0], [93.9, 723.0], [94.0, 725.0], [94.1, 727.0], [94.2, 731.0], [94.3, 734.0], [94.4, 736.0], [94.5, 739.0], [94.6, 742.0], [94.7, 750.0], [94.8, 755.0], [94.9, 757.0], [95.0, 763.0], [95.1, 769.0], [95.2, 773.0], [95.3, 778.0], [95.4, 783.0], [95.5, 787.0], [95.6, 791.0], [95.7, 794.0], [95.8, 803.0], [95.9, 810.0], [96.0, 816.0], [96.1, 823.0], [96.2, 827.0], [96.3, 835.0], [96.4, 840.0], [96.5, 846.0], [96.6, 852.0], [96.7, 854.0], [96.8, 863.0], [96.9, 868.0], [97.0, 875.0], [97.1, 884.0], [97.2, 890.0], [97.3, 895.0], [97.4, 900.0], [97.5, 909.0], [97.6, 918.0], [97.7, 934.0], [97.8, 944.0], [97.9, 952.0], [98.0, 961.0], [98.1, 968.0], [98.2, 981.0], [98.3, 989.0], [98.4, 994.0], [98.5, 999.0], [98.6, 1011.0], [98.7, 1028.0], [98.8, 1046.0], [98.9, 1062.0], [99.0, 1074.0], [99.1, 1088.0], [99.2, 1097.0], [99.3, 1125.0], [99.4, 1138.0], [99.5, 1160.0], [99.6, 1195.0], [99.7, 1228.0], [99.8, 1277.0], [99.9, 1415.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4380.0, "series": [{"data": [[0.0, 4380.0], [600.0, 205.0], [700.0, 186.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [200.0, 417.0], [800.0, 117.0], [900.0, 80.0], [1000.0, 51.0], [1100.0, 29.0], [300.0, 426.0], [1200.0, 16.0], [1300.0, 4.0], [1400.0, 4.0], [1500.0, 1.0], [100.0, 818.0], [400.0, 252.0], [500.0, 222.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6294.0, "series": [{"data": [[0.0, 6294.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 913.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.1363636363636362, "minX": 1.62773658E12, "maxY": 94.19599303135882, "series": [{"data": [[1.62773661E12, 5.213612565445026], [1.6277366E12, 3.368932038834948], [1.62773663E12, 15.832394366197187], [1.62773662E12, 6.107226107226103], [1.62773659E12, 3.0422535211267596], [1.62773658E12, 18.5], [1.62773665E12, 94.19599303135882], [1.62773664E12, 72.78605935127689], [1.62773666E12, 2.1363636363636362]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62773666E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 24.0, "minX": 1.0, "maxY": 2194.75, "series": [{"data": [[2.0, 25.414012738853494], [3.0, 30.671772428884058], [4.0, 28.566225165562912], [5.0, 27.6176142697882], [6.0, 32.64338235294115], [7.0, 37.17182130584193], [8.0, 63.31654676258993], [9.0, 45.14285714285714], [10.0, 52.81603773584912], [11.0, 72.33333333333333], [12.0, 84.42957746478872], [13.0, 88.6], [14.0, 93.60645161290319], [15.0, 48.333333333333336], [16.0, 110.48666666666668], [17.0, 106.5], [18.0, 118.27922077922074], [19.0, 94.6], [20.0, 32.03703703703705], [21.0, 24.0], [22.0, 144.37662337662337], [23.0, 119.66666666666666], [24.0, 156.0], [25.0, 103.6], [26.0, 171.69536423841058], [27.0, 138.75], [28.0, 139.25], [29.0, 158.55555555555554], [30.0, 203.88590604026845], [31.0, 32.0], [32.0, 189.16666666666666], [33.0, 151.85714285714286], [34.0, 118.5], [35.0, 214.38888888888889], [36.0, 145.6], [37.0, 242.5], [38.0, 256.54999999999995], [39.0, 221.66666666666669], [40.0, 60.18181818181817], [41.0, 215.33333333333331], [42.0, 232.4], [43.0, 210.25], [45.0, 220.44444444444446], [44.0, 77.0], [46.0, 238.66666666666666], [47.0, 265.3333333333333], [49.0, 196.33333333333334], [48.0, 50.0], [50.0, 290.77777777777777], [51.0, 325.9281437125749], [52.0, 340.75], [53.0, 287.375], [54.0, 307.75], [55.0, 279.0909090909091], [56.0, 286.3333333333333], [57.0, 336.4000000000001], [59.0, 280.8888888888889], [58.0, 50.0], [60.0, 373.81764705882347], [61.0, 366.0], [63.0, 290.62499999999994], [62.0, 39.0], [64.0, 297.1333333333334], [65.0, 317.3], [66.0, 265.37500000000006], [67.0, 247.61538461538458], [68.0, 417.25], [69.0, 326.0], [71.0, 302.22222222222223], [70.0, 31.0], [72.0, 283.1], [73.0, 449.46808510638294], [74.0, 426.84090909090907], [75.0, 339.6875], [78.0, 56.5], [79.0, 59.5], [77.0, 58.0], [76.0, 46.0], [80.0, 207.5], [83.0, 257.2307692307692], [81.0, 113.96969696969694], [84.0, 319.0], [85.0, 364.7], [86.0, 404.66666666666663], [87.0, 536.1666666666666], [88.0, 444.83333333333337], [89.0, 295.5], [91.0, 366.0], [90.0, 375.3333333333333], [92.0, 229.0], [94.0, 331.6666666666667], [95.0, 467.6666666666667], [93.0, 119.0], [98.0, 514.9166666666667], [99.0, 509.375], [97.0, 375.0], [96.0, 273.0], [100.0, 608.5409836065575], [101.0, 616.0], [102.0, 314.6666666666667], [103.0, 455.3333333333333], [104.0, 591.1612903225806], [105.0, 642.9565217391305], [106.0, 648.85], [107.0, 630.2857142857148], [110.0, 1026.6666666666667], [111.0, 814.0], [109.0, 609.0], [108.0, 533.0], [112.0, 864.5], [115.0, 799.0], [114.0, 835.0], [113.0, 782.0], [119.0, 794.0], [118.0, 836.0], [117.0, 845.0], [116.0, 789.0], [123.0, 772.0], [121.0, 870.0], [127.0, 572.0], [126.0, 460.0], [125.0, 796.0], [124.0, 721.0], [130.0, 445.3333333333333], [131.0, 534.0], [134.0, 363.0], [135.0, 347.0], [133.0, 444.0], [132.0, 448.0], [129.0, 365.0], [128.0, 341.0], [136.0, 464.5], [137.0, 534.0], [138.0, 453.6666666666667], [139.0, 585.6], [140.0, 598.1999999999999], [143.0, 941.6363636363637], [142.0, 659.0], [141.0, 394.0], [144.0, 661.5454545454544], [145.0, 875.7500000000001], [146.0, 790.9999999999999], [147.0, 874.2], [148.0, 693.4666666666667], [149.0, 483.99999999999994], [150.0, 450.3333333333333], [151.0, 554.7777777777778], [154.0, 2194.75], [155.0, 832.2307692307693], [156.0, 830.0952380952382], [157.0, 869.2692307692308], [159.0, 293.0], [158.0, 130.0], [153.0, 237.0], [161.0, 527.375], [162.0, 678.6866952789701], [160.0, 272.0], [1.0, 36.19047619047619]], "isOverall": false, "label": "Press Release", "isController": false}, {"data": [[34.621411732075984, 185.6065732908056]], "isOverall": false, "label": "Press Release-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 162.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 99.0, "minX": 1.62773658E12, "maxY": 6046700.4, "series": [{"data": [[1.62773661E12, 3985215.0], [1.6277366E12, 2578914.0], [1.62773663E12, 5925660.0], [1.62773662E12, 5370651.0], [1.62773659E12, 1185144.0], [1.62773658E12, 25040.3], [1.62773665E12, 4790604.0], [1.62773664E12, 6046700.4], [1.62773666E12, 183612.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62773661E12, 15757.5], [1.6277366E12, 10197.0], [1.62773663E12, 23430.0], [1.62773662E12, 21235.5], [1.62773659E12, 4686.0], [1.62773658E12, 99.0], [1.62773665E12, 18942.0], [1.62773664E12, 23908.5], [1.62773666E12, 726.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62773666E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 14.999999999999998, "minX": 1.62773658E12, "maxY": 428.16632160110447, "series": [{"data": [[1.62773661E12, 32.588481675392636], [1.6277366E12, 30.357605177993495], [1.62773663E12, 105.89999999999996], [1.62773662E12, 30.51437451437454], [1.62773659E12, 32.08450704225353], [1.62773658E12, 149.5], [1.62773665E12, 407.4860627177695], [1.62773664E12, 428.16632160110447], [1.62773666E12, 14.999999999999998]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62773666E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 14.818181818181818, "minX": 1.62773658E12, "maxY": 421.9254658385093, "series": [{"data": [[1.62773661E12, 31.717277486910984], [1.6277366E12, 29.736245954692563], [1.62773663E12, 104.42816901408447], [1.62773662E12, 29.766122766122763], [1.62773659E12, 31.15140845070425], [1.62773658E12, 146.16666666666666], [1.62773665E12, 405.3362369337981], [1.62773664E12, 421.9254658385093], [1.62773666E12, 14.818181818181818]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62773666E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 13.318181818181818, "minX": 1.62773658E12, "maxY": 409.6211180124223, "series": [{"data": [[1.62773661E12, 27.321465968586406], [1.6277366E12, 25.998381877022656], [1.62773663E12, 99.51549295774645], [1.62773662E12, 25.795648795648816], [1.62773659E12, 27.232394366197212], [1.62773658E12, 134.16666666666669], [1.62773665E12, 390.85452961672445], [1.62773664E12, 409.6211180124223], [1.62773666E12, 13.318181818181818]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62773666E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.62773658E12, "maxY": 2907.0, "series": [{"data": [[1.62773661E12, 80.0], [1.6277366E12, 121.0], [1.62773663E12, 252.0], [1.62773662E12, 72.0], [1.62773659E12, 120.0], [1.62773658E12, 518.0], [1.62773665E12, 2907.0], [1.62773664E12, 1517.0], [1.62773666E12, 27.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62773661E12, 13.0], [1.6277366E12, 13.0], [1.62773663E12, 16.0], [1.62773662E12, 13.0], [1.62773659E12, 17.0], [1.62773658E12, 54.0], [1.62773665E12, 10.0], [1.62773664E12, 112.0], [1.62773666E12, 11.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62773661E12, 50.0], [1.6277366E12, 46.0], [1.62773663E12, 173.0], [1.62773662E12, 46.0], [1.62773659E12, 44.0], [1.62773658E12, 518.0], [1.62773665E12, 978.0], [1.62773664E12, 709.0], [1.62773666E12, 24.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62773661E12, 72.0], [1.6277366E12, 86.80999999999995], [1.62773663E12, 219.0], [1.62773662E12, 59.11999999999989], [1.62773659E12, 111.44999999999993], [1.62773658E12, 518.0], [1.62773665E12, 1235.57], [1.62773664E12, 1111.0], [1.62773666E12, 27.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62773661E12, 56.19999999999993], [1.6277366E12, 57.049999999999955], [1.62773663E12, 195.0], [1.62773662E12, 51.0], [1.62773659E12, 57.5], [1.62773658E12, 518.0], [1.62773665E12, 1073.1], [1.62773664E12, 784.0], [1.62773666E12, 26.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62773666E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14.0, "minX": 1.0, "maxY": 846.5, "series": [{"data": [[2.0, 286.0], [4.0, 84.5], [6.0, 110.5], [15.0, 14.0], [17.0, 56.0], [22.0, 33.5], [24.0, 32.0], [27.0, 14.0], [28.0, 29.0], [31.0, 26.0], [33.0, 26.0], [38.0, 27.0], [41.0, 25.0], [42.0, 15.0], [44.0, 26.0], [47.0, 26.0], [50.0, 26.0], [52.0, 44.5], [54.0, 16.5], [58.0, 30.0], [61.0, 26.0], [65.0, 23.5], [67.0, 16.0], [70.0, 25.0], [74.0, 26.5], [76.0, 32.0], [82.0, 27.0], [81.0, 15.0], [84.0, 29.0], [88.0, 27.0], [91.0, 28.0], [93.0, 27.0], [98.0, 29.0], [99.0, 28.0], [96.0, 23.0], [101.0, 26.0], [107.0, 610.0], [108.0, 41.0], [111.0, 44.0], [115.0, 29.0], [113.0, 653.0], [112.0, 39.0], [116.0, 24.0], [120.0, 29.0], [124.0, 29.0], [126.0, 25.0], [129.0, 47.0], [136.0, 34.0], [140.0, 67.0], [138.0, 76.0], [137.0, 285.0], [141.0, 296.0], [145.0, 29.0], [150.0, 122.0], [144.0, 132.5], [151.0, 176.0], [154.0, 219.0], [156.0, 344.0], [158.0, 373.5], [157.0, 827.0], [168.0, 503.5], [178.0, 523.0], [177.0, 639.0], [184.0, 846.5], [1.0, 17.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 184.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14.0, "minX": 1.0, "maxY": 846.5, "series": [{"data": [[2.0, 280.0], [4.0, 82.5], [6.0, 108.5], [15.0, 14.0], [17.0, 54.0], [22.0, 31.0], [24.0, 30.5], [27.0, 14.0], [28.0, 27.5], [31.0, 26.0], [33.0, 25.0], [38.0, 26.5], [41.0, 24.0], [42.0, 15.0], [44.0, 25.5], [47.0, 25.0], [50.0, 26.0], [52.0, 43.5], [54.0, 16.5], [58.0, 27.5], [61.0, 25.0], [65.0, 23.0], [67.0, 16.0], [70.0, 24.0], [74.0, 25.5], [76.0, 31.0], [82.0, 26.0], [81.0, 15.0], [84.0, 28.5], [88.0, 27.0], [91.0, 27.0], [93.0, 27.0], [98.0, 28.0], [99.0, 27.0], [96.0, 23.0], [101.0, 25.0], [107.0, 579.0], [108.0, 40.0], [111.0, 42.0], [115.0, 28.0], [113.0, 652.0], [112.0, 38.5], [116.0, 24.0], [120.0, 27.5], [124.0, 28.0], [126.0, 24.5], [129.0, 45.0], [136.0, 33.0], [140.0, 66.5], [138.0, 75.0], [137.0, 276.5], [141.0, 291.0], [145.0, 28.0], [150.0, 121.0], [144.0, 131.5], [151.0, 175.0], [154.0, 216.5], [156.0, 340.0], [158.0, 370.5], [157.0, 789.0], [168.0, 473.0], [178.0, 522.5], [177.0, 639.0], [184.0, 846.5], [1.0, 17.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 184.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.62773658E12, "maxY": 156.4, "series": [{"data": [[1.62773661E12, 95.6], [1.6277366E12, 62.0], [1.62773663E12, 144.6], [1.62773662E12, 128.7], [1.62773659E12, 28.5], [1.62773658E12, 0.6], [1.62773665E12, 100.3], [1.62773664E12, 156.4], [1.62773666E12, 4.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62773666E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.62773658E12, "maxY": 144.9, "series": [{"data": [[1.62773661E12, 95.5], [1.6277366E12, 61.8], [1.62773663E12, 142.0], [1.62773662E12, 128.7], [1.62773659E12, 28.4], [1.62773658E12, 0.6], [1.62773665E12, 114.8], [1.62773664E12, 144.9], [1.62773666E12, 4.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62773666E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.62773658E12, "maxY": 144.9, "series": [{"data": [[1.62773661E12, 95.5], [1.6277366E12, 61.8], [1.62773663E12, 142.0], [1.62773662E12, 128.7], [1.62773659E12, 28.4], [1.62773658E12, 0.6], [1.62773665E12, 114.8], [1.62773664E12, 144.9], [1.62773666E12, 4.4]], "isOverall": false, "label": "Press Release-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62773666E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.62773658E12, "maxY": 144.9, "series": [{"data": [[1.62773661E12, 95.5], [1.6277366E12, 61.8], [1.62773663E12, 142.0], [1.62773662E12, 128.7], [1.62773659E12, 28.4], [1.62773658E12, 0.6], [1.62773665E12, 114.8], [1.62773664E12, 144.9], [1.62773666E12, 4.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62773666E12, "title": "Total Transactions Per Second"}},
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

