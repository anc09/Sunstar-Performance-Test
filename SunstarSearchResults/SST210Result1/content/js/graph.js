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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 1944.0, "series": [{"data": [[0.0, 10.0], [0.1, 10.0], [0.2, 10.0], [0.3, 10.0], [0.4, 10.0], [0.5, 10.0], [0.6, 10.0], [0.7, 10.0], [0.8, 10.0], [0.9, 11.0], [1.0, 11.0], [1.1, 11.0], [1.2, 11.0], [1.3, 11.0], [1.4, 11.0], [1.5, 11.0], [1.6, 11.0], [1.7, 11.0], [1.8, 11.0], [1.9, 11.0], [2.0, 11.0], [2.1, 11.0], [2.2, 11.0], [2.3, 11.0], [2.4, 11.0], [2.5, 11.0], [2.6, 11.0], [2.7, 11.0], [2.8, 11.0], [2.9, 11.0], [3.0, 11.0], [3.1, 11.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 11.0], [3.6, 11.0], [3.7, 11.0], [3.8, 11.0], [3.9, 11.0], [4.0, 11.0], [4.1, 11.0], [4.2, 11.0], [4.3, 11.0], [4.4, 11.0], [4.5, 11.0], [4.6, 11.0], [4.7, 11.0], [4.8, 11.0], [4.9, 12.0], [5.0, 12.0], [5.1, 12.0], [5.2, 12.0], [5.3, 12.0], [5.4, 12.0], [5.5, 12.0], [5.6, 12.0], [5.7, 12.0], [5.8, 12.0], [5.9, 12.0], [6.0, 12.0], [6.1, 12.0], [6.2, 12.0], [6.3, 12.0], [6.4, 12.0], [6.5, 12.0], [6.6, 12.0], [6.7, 12.0], [6.8, 12.0], [6.9, 12.0], [7.0, 12.0], [7.1, 12.0], [7.2, 12.0], [7.3, 12.0], [7.4, 12.0], [7.5, 12.0], [7.6, 12.0], [7.7, 12.0], [7.8, 12.0], [7.9, 12.0], [8.0, 12.0], [8.1, 12.0], [8.2, 12.0], [8.3, 12.0], [8.4, 12.0], [8.5, 12.0], [8.6, 12.0], [8.7, 13.0], [8.8, 13.0], [8.9, 13.0], [9.0, 13.0], [9.1, 13.0], [9.2, 13.0], [9.3, 13.0], [9.4, 13.0], [9.5, 13.0], [9.6, 13.0], [9.7, 13.0], [9.8, 13.0], [9.9, 13.0], [10.0, 13.0], [10.1, 13.0], [10.2, 13.0], [10.3, 13.0], [10.4, 13.0], [10.5, 13.0], [10.6, 13.0], [10.7, 13.0], [10.8, 13.0], [10.9, 13.0], [11.0, 13.0], [11.1, 13.0], [11.2, 13.0], [11.3, 13.0], [11.4, 13.0], [11.5, 13.0], [11.6, 13.0], [11.7, 13.0], [11.8, 13.0], [11.9, 14.0], [12.0, 14.0], [12.1, 14.0], [12.2, 14.0], [12.3, 14.0], [12.4, 14.0], [12.5, 14.0], [12.6, 14.0], [12.7, 14.0], [12.8, 14.0], [12.9, 14.0], [13.0, 14.0], [13.1, 14.0], [13.2, 14.0], [13.3, 14.0], [13.4, 14.0], [13.5, 14.0], [13.6, 14.0], [13.7, 14.0], [13.8, 14.0], [13.9, 14.0], [14.0, 14.0], [14.1, 14.0], [14.2, 14.0], [14.3, 14.0], [14.4, 14.0], [14.5, 14.0], [14.6, 14.0], [14.7, 14.0], [14.8, 14.0], [14.9, 14.0], [15.0, 14.0], [15.1, 15.0], [15.2, 15.0], [15.3, 15.0], [15.4, 15.0], [15.5, 15.0], [15.6, 15.0], [15.7, 15.0], [15.8, 15.0], [15.9, 15.0], [16.0, 15.0], [16.1, 15.0], [16.2, 15.0], [16.3, 15.0], [16.4, 15.0], [16.5, 15.0], [16.6, 15.0], [16.7, 15.0], [16.8, 15.0], [16.9, 15.0], [17.0, 15.0], [17.1, 15.0], [17.2, 15.0], [17.3, 15.0], [17.4, 15.0], [17.5, 15.0], [17.6, 16.0], [17.7, 16.0], [17.8, 16.0], [17.9, 16.0], [18.0, 16.0], [18.1, 16.0], [18.2, 16.0], [18.3, 16.0], [18.4, 16.0], [18.5, 16.0], [18.6, 16.0], [18.7, 16.0], [18.8, 16.0], [18.9, 16.0], [19.0, 16.0], [19.1, 16.0], [19.2, 16.0], [19.3, 16.0], [19.4, 16.0], [19.5, 16.0], [19.6, 16.0], [19.7, 17.0], [19.8, 17.0], [19.9, 17.0], [20.0, 17.0], [20.1, 17.0], [20.2, 17.0], [20.3, 17.0], [20.4, 17.0], [20.5, 17.0], [20.6, 17.0], [20.7, 17.0], [20.8, 17.0], [20.9, 17.0], [21.0, 17.0], [21.1, 17.0], [21.2, 17.0], [21.3, 17.0], [21.4, 17.0], [21.5, 18.0], [21.6, 18.0], [21.7, 18.0], [21.8, 18.0], [21.9, 18.0], [22.0, 18.0], [22.1, 18.0], [22.2, 18.0], [22.3, 18.0], [22.4, 18.0], [22.5, 18.0], [22.6, 18.0], [22.7, 18.0], [22.8, 18.0], [22.9, 18.0], [23.0, 19.0], [23.1, 19.0], [23.2, 19.0], [23.3, 19.0], [23.4, 19.0], [23.5, 19.0], [23.6, 19.0], [23.7, 19.0], [23.8, 19.0], [23.9, 19.0], [24.0, 19.0], [24.1, 19.0], [24.2, 19.0], [24.3, 19.0], [24.4, 19.0], [24.5, 19.0], [24.6, 19.0], [24.7, 20.0], [24.8, 20.0], [24.9, 20.0], [25.0, 20.0], [25.1, 20.0], [25.2, 20.0], [25.3, 20.0], [25.4, 20.0], [25.5, 20.0], [25.6, 20.0], [25.7, 20.0], [25.8, 20.0], [25.9, 20.0], [26.0, 20.0], [26.1, 20.0], [26.2, 20.0], [26.3, 21.0], [26.4, 21.0], [26.5, 21.0], [26.6, 21.0], [26.7, 21.0], [26.8, 21.0], [26.9, 21.0], [27.0, 21.0], [27.1, 21.0], [27.2, 21.0], [27.3, 21.0], [27.4, 21.0], [27.5, 21.0], [27.6, 21.0], [27.7, 21.0], [27.8, 21.0], [27.9, 22.0], [28.0, 22.0], [28.1, 22.0], [28.2, 22.0], [28.3, 22.0], [28.4, 22.0], [28.5, 22.0], [28.6, 22.0], [28.7, 22.0], [28.8, 22.0], [28.9, 22.0], [29.0, 22.0], [29.1, 23.0], [29.2, 23.0], [29.3, 23.0], [29.4, 23.0], [29.5, 23.0], [29.6, 23.0], [29.7, 23.0], [29.8, 23.0], [29.9, 23.0], [30.0, 23.0], [30.1, 23.0], [30.2, 23.0], [30.3, 23.0], [30.4, 23.0], [30.5, 23.0], [30.6, 24.0], [30.7, 24.0], [30.8, 24.0], [30.9, 24.0], [31.0, 24.0], [31.1, 24.0], [31.2, 24.0], [31.3, 24.0], [31.4, 24.0], [31.5, 24.0], [31.6, 24.0], [31.7, 24.0], [31.8, 24.0], [31.9, 24.0], [32.0, 24.0], [32.1, 25.0], [32.2, 25.0], [32.3, 25.0], [32.4, 25.0], [32.5, 25.0], [32.6, 25.0], [32.7, 25.0], [32.8, 25.0], [32.9, 25.0], [33.0, 25.0], [33.1, 25.0], [33.2, 26.0], [33.3, 26.0], [33.4, 26.0], [33.5, 26.0], [33.6, 26.0], [33.7, 26.0], [33.8, 26.0], [33.9, 26.0], [34.0, 26.0], [34.1, 26.0], [34.2, 26.0], [34.3, 27.0], [34.4, 27.0], [34.5, 27.0], [34.6, 27.0], [34.7, 27.0], [34.8, 27.0], [34.9, 27.0], [35.0, 27.0], [35.1, 27.0], [35.2, 27.0], [35.3, 27.0], [35.4, 27.0], [35.5, 28.0], [35.6, 28.0], [35.7, 28.0], [35.8, 28.0], [35.9, 28.0], [36.0, 28.0], [36.1, 28.0], [36.2, 28.0], [36.3, 29.0], [36.4, 29.0], [36.5, 29.0], [36.6, 29.0], [36.7, 29.0], [36.8, 29.0], [36.9, 29.0], [37.0, 29.0], [37.1, 29.0], [37.2, 29.0], [37.3, 30.0], [37.4, 30.0], [37.5, 30.0], [37.6, 30.0], [37.7, 30.0], [37.8, 30.0], [37.9, 30.0], [38.0, 30.0], [38.1, 30.0], [38.2, 30.0], [38.3, 31.0], [38.4, 31.0], [38.5, 31.0], [38.6, 31.0], [38.7, 31.0], [38.8, 31.0], [38.9, 31.0], [39.0, 31.0], [39.1, 31.0], [39.2, 32.0], [39.3, 32.0], [39.4, 32.0], [39.5, 32.0], [39.6, 32.0], [39.7, 32.0], [39.8, 32.0], [39.9, 32.0], [40.0, 32.0], [40.1, 33.0], [40.2, 33.0], [40.3, 33.0], [40.4, 33.0], [40.5, 33.0], [40.6, 33.0], [40.7, 33.0], [40.8, 33.0], [40.9, 34.0], [41.0, 34.0], [41.1, 34.0], [41.2, 34.0], [41.3, 34.0], [41.4, 34.0], [41.5, 35.0], [41.6, 35.0], [41.7, 35.0], [41.8, 35.0], [41.9, 35.0], [42.0, 35.0], [42.1, 35.0], [42.2, 35.0], [42.3, 35.0], [42.4, 36.0], [42.5, 36.0], [42.6, 36.0], [42.7, 36.0], [42.8, 36.0], [42.9, 36.0], [43.0, 36.0], [43.1, 36.0], [43.2, 37.0], [43.3, 37.0], [43.4, 37.0], [43.5, 37.0], [43.6, 37.0], [43.7, 37.0], [43.8, 38.0], [43.9, 38.0], [44.0, 38.0], [44.1, 38.0], [44.2, 38.0], [44.3, 38.0], [44.4, 39.0], [44.5, 39.0], [44.6, 39.0], [44.7, 39.0], [44.8, 39.0], [44.9, 40.0], [45.0, 40.0], [45.1, 40.0], [45.2, 40.0], [45.3, 40.0], [45.4, 40.0], [45.5, 41.0], [45.6, 41.0], [45.7, 41.0], [45.8, 41.0], [45.9, 41.0], [46.0, 41.0], [46.1, 42.0], [46.2, 42.0], [46.3, 42.0], [46.4, 42.0], [46.5, 42.0], [46.6, 43.0], [46.7, 43.0], [46.8, 43.0], [46.9, 43.0], [47.0, 43.0], [47.1, 43.0], [47.2, 44.0], [47.3, 44.0], [47.4, 44.0], [47.5, 44.0], [47.6, 44.0], [47.7, 44.0], [47.8, 44.0], [47.9, 45.0], [48.0, 45.0], [48.1, 45.0], [48.2, 45.0], [48.3, 46.0], [48.4, 46.0], [48.5, 46.0], [48.6, 46.0], [48.7, 46.0], [48.8, 47.0], [48.9, 47.0], [49.0, 47.0], [49.1, 47.0], [49.2, 47.0], [49.3, 48.0], [49.4, 48.0], [49.5, 48.0], [49.6, 48.0], [49.7, 49.0], [49.8, 49.0], [49.9, 49.0], [50.0, 50.0], [50.1, 50.0], [50.2, 50.0], [50.3, 51.0], [50.4, 51.0], [50.5, 52.0], [50.6, 52.0], [50.7, 52.0], [50.8, 53.0], [50.9, 53.0], [51.0, 54.0], [51.1, 54.0], [51.2, 54.0], [51.3, 55.0], [51.4, 55.0], [51.5, 56.0], [51.6, 56.0], [51.7, 56.0], [51.8, 57.0], [51.9, 57.0], [52.0, 57.0], [52.1, 58.0], [52.2, 58.0], [52.3, 58.0], [52.4, 59.0], [52.5, 59.0], [52.6, 59.0], [52.7, 60.0], [52.8, 60.0], [52.9, 61.0], [53.0, 61.0], [53.1, 61.0], [53.2, 62.0], [53.3, 62.0], [53.4, 62.0], [53.5, 63.0], [53.6, 63.0], [53.7, 63.0], [53.8, 64.0], [53.9, 64.0], [54.0, 65.0], [54.1, 65.0], [54.2, 66.0], [54.3, 66.0], [54.4, 66.0], [54.5, 67.0], [54.6, 67.0], [54.7, 68.0], [54.8, 68.0], [54.9, 69.0], [55.0, 69.0], [55.1, 69.0], [55.2, 70.0], [55.3, 70.0], [55.4, 71.0], [55.5, 71.0], [55.6, 72.0], [55.7, 72.0], [55.8, 72.0], [55.9, 73.0], [56.0, 73.0], [56.1, 74.0], [56.2, 74.0], [56.3, 75.0], [56.4, 76.0], [56.5, 76.0], [56.6, 77.0], [56.7, 78.0], [56.8, 78.0], [56.9, 79.0], [57.0, 79.0], [57.1, 80.0], [57.2, 80.0], [57.3, 81.0], [57.4, 82.0], [57.5, 82.0], [57.6, 83.0], [57.7, 83.0], [57.8, 84.0], [57.9, 84.0], [58.0, 86.0], [58.1, 86.0], [58.2, 87.0], [58.3, 88.0], [58.4, 89.0], [58.5, 89.0], [58.6, 91.0], [58.7, 92.0], [58.8, 94.0], [58.9, 95.0], [59.0, 95.0], [59.1, 96.0], [59.2, 97.0], [59.3, 98.0], [59.4, 98.0], [59.5, 99.0], [59.6, 99.0], [59.7, 101.0], [59.8, 101.0], [59.9, 102.0], [60.0, 103.0], [60.1, 104.0], [60.2, 104.0], [60.3, 105.0], [60.4, 107.0], [60.5, 107.0], [60.6, 107.0], [60.7, 108.0], [60.8, 109.0], [60.9, 110.0], [61.0, 111.0], [61.1, 111.0], [61.2, 111.0], [61.3, 112.0], [61.4, 113.0], [61.5, 114.0], [61.6, 115.0], [61.7, 115.0], [61.8, 116.0], [61.9, 117.0], [62.0, 117.0], [62.1, 118.0], [62.2, 119.0], [62.3, 120.0], [62.4, 120.0], [62.5, 122.0], [62.6, 122.0], [62.7, 123.0], [62.8, 123.0], [62.9, 125.0], [63.0, 126.0], [63.1, 126.0], [63.2, 127.0], [63.3, 127.0], [63.4, 128.0], [63.5, 130.0], [63.6, 130.0], [63.7, 131.0], [63.8, 131.0], [63.9, 132.0], [64.0, 133.0], [64.1, 134.0], [64.2, 134.0], [64.3, 135.0], [64.4, 136.0], [64.5, 137.0], [64.6, 138.0], [64.7, 139.0], [64.8, 140.0], [64.9, 142.0], [65.0, 143.0], [65.1, 144.0], [65.2, 145.0], [65.3, 145.0], [65.4, 146.0], [65.5, 147.0], [65.6, 148.0], [65.7, 149.0], [65.8, 151.0], [65.9, 152.0], [66.0, 152.0], [66.1, 153.0], [66.2, 155.0], [66.3, 156.0], [66.4, 157.0], [66.5, 159.0], [66.6, 160.0], [66.7, 162.0], [66.8, 163.0], [66.9, 164.0], [67.0, 165.0], [67.1, 166.0], [67.2, 167.0], [67.3, 167.0], [67.4, 168.0], [67.5, 169.0], [67.6, 171.0], [67.7, 172.0], [67.8, 174.0], [67.9, 175.0], [68.0, 176.0], [68.1, 178.0], [68.2, 181.0], [68.3, 182.0], [68.4, 184.0], [68.5, 185.0], [68.6, 186.0], [68.7, 186.0], [68.8, 188.0], [68.9, 189.0], [69.0, 191.0], [69.1, 194.0], [69.2, 195.0], [69.3, 196.0], [69.4, 197.0], [69.5, 198.0], [69.6, 199.0], [69.7, 200.0], [69.8, 200.0], [69.9, 202.0], [70.0, 203.0], [70.1, 204.0], [70.2, 205.0], [70.3, 206.0], [70.4, 207.0], [70.5, 208.0], [70.6, 209.0], [70.7, 210.0], [70.8, 212.0], [70.9, 213.0], [71.0, 215.0], [71.1, 216.0], [71.2, 219.0], [71.3, 220.0], [71.4, 220.0], [71.5, 223.0], [71.6, 223.0], [71.7, 224.0], [71.8, 226.0], [71.9, 227.0], [72.0, 229.0], [72.1, 230.0], [72.2, 231.0], [72.3, 233.0], [72.4, 235.0], [72.5, 237.0], [72.6, 239.0], [72.7, 240.0], [72.8, 242.0], [72.9, 244.0], [73.0, 245.0], [73.1, 246.0], [73.2, 248.0], [73.3, 251.0], [73.4, 253.0], [73.5, 256.0], [73.6, 259.0], [73.7, 261.0], [73.8, 261.0], [73.9, 263.0], [74.0, 265.0], [74.1, 266.0], [74.2, 267.0], [74.3, 270.0], [74.4, 272.0], [74.5, 274.0], [74.6, 275.0], [74.7, 277.0], [74.8, 279.0], [74.9, 281.0], [75.0, 283.0], [75.1, 284.0], [75.2, 287.0], [75.3, 289.0], [75.4, 291.0], [75.5, 293.0], [75.6, 295.0], [75.7, 298.0], [75.8, 301.0], [75.9, 303.0], [76.0, 305.0], [76.1, 307.0], [76.2, 308.0], [76.3, 311.0], [76.4, 315.0], [76.5, 318.0], [76.6, 320.0], [76.7, 321.0], [76.8, 323.0], [76.9, 326.0], [77.0, 329.0], [77.1, 332.0], [77.2, 333.0], [77.3, 336.0], [77.4, 340.0], [77.5, 343.0], [77.6, 344.0], [77.7, 347.0], [77.8, 350.0], [77.9, 352.0], [78.0, 356.0], [78.1, 358.0], [78.2, 361.0], [78.3, 364.0], [78.4, 366.0], [78.5, 369.0], [78.6, 374.0], [78.7, 379.0], [78.8, 381.0], [78.9, 384.0], [79.0, 387.0], [79.1, 391.0], [79.2, 395.0], [79.3, 397.0], [79.4, 399.0], [79.5, 401.0], [79.6, 403.0], [79.7, 406.0], [79.8, 409.0], [79.9, 412.0], [80.0, 413.0], [80.1, 415.0], [80.2, 417.0], [80.3, 418.0], [80.4, 421.0], [80.5, 423.0], [80.6, 427.0], [80.7, 429.0], [80.8, 431.0], [80.9, 432.0], [81.0, 434.0], [81.1, 436.0], [81.2, 439.0], [81.3, 442.0], [81.4, 444.0], [81.5, 448.0], [81.6, 450.0], [81.7, 452.0], [81.8, 454.0], [81.9, 458.0], [82.0, 461.0], [82.1, 463.0], [82.2, 466.0], [82.3, 469.0], [82.4, 471.0], [82.5, 474.0], [82.6, 476.0], [82.7, 479.0], [82.8, 483.0], [82.9, 487.0], [83.0, 491.0], [83.1, 492.0], [83.2, 494.0], [83.3, 496.0], [83.4, 500.0], [83.5, 507.0], [83.6, 513.0], [83.7, 519.0], [83.8, 521.0], [83.9, 525.0], [84.0, 529.0], [84.1, 530.0], [84.2, 533.0], [84.3, 535.0], [84.4, 537.0], [84.5, 540.0], [84.6, 543.0], [84.7, 546.0], [84.8, 547.0], [84.9, 554.0], [85.0, 559.0], [85.1, 563.0], [85.2, 565.0], [85.3, 566.0], [85.4, 567.0], [85.5, 570.0], [85.6, 572.0], [85.7, 575.0], [85.8, 578.0], [85.9, 579.0], [86.0, 583.0], [86.1, 585.0], [86.2, 588.0], [86.3, 593.0], [86.4, 596.0], [86.5, 601.0], [86.6, 604.0], [86.7, 608.0], [86.8, 611.0], [86.9, 616.0], [87.0, 619.0], [87.1, 623.0], [87.2, 626.0], [87.3, 630.0], [87.4, 632.0], [87.5, 634.0], [87.6, 638.0], [87.7, 641.0], [87.8, 645.0], [87.9, 647.0], [88.0, 651.0], [88.1, 653.0], [88.2, 655.0], [88.3, 657.0], [88.4, 660.0], [88.5, 666.0], [88.6, 669.0], [88.7, 672.0], [88.8, 675.0], [88.9, 678.0], [89.0, 682.0], [89.1, 688.0], [89.2, 690.0], [89.3, 693.0], [89.4, 698.0], [89.5, 703.0], [89.6, 706.0], [89.7, 708.0], [89.8, 709.0], [89.9, 712.0], [90.0, 716.0], [90.1, 723.0], [90.2, 727.0], [90.3, 731.0], [90.4, 735.0], [90.5, 736.0], [90.6, 742.0], [90.7, 745.0], [90.8, 749.0], [90.9, 751.0], [91.0, 754.0], [91.1, 757.0], [91.2, 762.0], [91.3, 766.0], [91.4, 770.0], [91.5, 773.0], [91.6, 776.0], [91.7, 779.0], [91.8, 779.0], [91.9, 783.0], [92.0, 787.0], [92.1, 790.0], [92.2, 792.0], [92.3, 795.0], [92.4, 799.0], [92.5, 803.0], [92.6, 806.0], [92.7, 810.0], [92.8, 811.0], [92.9, 816.0], [93.0, 821.0], [93.1, 827.0], [93.2, 829.0], [93.3, 832.0], [93.4, 836.0], [93.5, 838.0], [93.6, 842.0], [93.7, 848.0], [93.8, 853.0], [93.9, 858.0], [94.0, 861.0], [94.1, 864.0], [94.2, 870.0], [94.3, 876.0], [94.4, 879.0], [94.5, 885.0], [94.6, 892.0], [94.7, 903.0], [94.8, 908.0], [94.9, 913.0], [95.0, 919.0], [95.1, 928.0], [95.2, 931.0], [95.3, 935.0], [95.4, 942.0], [95.5, 946.0], [95.6, 954.0], [95.7, 965.0], [95.8, 973.0], [95.9, 981.0], [96.0, 984.0], [96.1, 995.0], [96.2, 1007.0], [96.3, 1014.0], [96.4, 1019.0], [96.5, 1028.0], [96.6, 1037.0], [96.7, 1052.0], [96.8, 1060.0], [96.9, 1065.0], [97.0, 1071.0], [97.1, 1079.0], [97.2, 1089.0], [97.3, 1092.0], [97.4, 1101.0], [97.5, 1115.0], [97.6, 1120.0], [97.7, 1130.0], [97.8, 1147.0], [97.9, 1154.0], [98.0, 1167.0], [98.1, 1179.0], [98.2, 1189.0], [98.3, 1207.0], [98.4, 1212.0], [98.5, 1229.0], [98.6, 1236.0], [98.7, 1255.0], [98.8, 1272.0], [98.9, 1278.0], [99.0, 1293.0], [99.1, 1307.0], [99.2, 1327.0], [99.3, 1366.0], [99.4, 1384.0], [99.5, 1444.0], [99.6, 1468.0], [99.7, 1489.0], [99.8, 1536.0], [99.9, 1645.0], [100.0, 1944.0]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4449.0, "series": [{"data": [[0.0, 4449.0], [600.0, 223.0], [700.0, 223.0], [200.0, 455.0], [800.0, 167.0], [900.0, 112.0], [1000.0, 91.0], [1100.0, 65.0], [300.0, 272.0], [1200.0, 59.0], [1300.0, 29.0], [1400.0, 22.0], [1500.0, 11.0], [400.0, 295.0], [100.0, 751.0], [1600.0, 5.0], [1700.0, 3.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 230.0]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6225.0, "series": [{"data": [[0.0, 6225.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1219.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.8350515463917554, "minX": 1.62767521E12, "maxY": 131.81006378455024, "series": [{"data": [[1.62767527E12, 60.13994743758215], [1.62767526E12, 10.827709978463746], [1.62767525E12, 4.890587288817379], [1.62767524E12, 3.6143931256713224], [1.62767523E12, 2.8350515463917554], [1.62767522E12, 2.9473684210526305], [1.62767521E12, 13.0], [1.62767529E12, 3.344594594594596], [1.62767528E12, 131.81006378455024]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62767529E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 18.0626043405676, "minX": 1.0, "maxY": 1050.8809523809525, "series": [{"data": [[2.0, 19.854870775347905], [3.0, 18.0626043405676], [4.0, 21.83999999999997], [5.0, 31.414173228346467], [6.0, 30.532846715328464], [7.0, 42.311435523114355], [8.0, 56.33333333333333], [9.0, 63.77777777777774], [10.0, 39.80882352941175], [11.0, 75.16438356164383], [12.0, 67.5], [13.0, 90.70547945205475], [14.0, 88.33333333333333], [15.0, 53.75], [16.0, 107.16107382550335], [17.0, 72.6], [18.0, 81.57142857142857], [19.0, 122.66037735849049], [20.0, 98.6], [21.0, 26.968750000000007], [22.0, 143.4620689655172], [23.0, 151.33333333333334], [24.0, 156.33333333333331], [25.0, 144.0], [26.0, 168.84615384615384], [27.0, 138.4], [28.0, 123.5], [29.0, 92.0], [30.0, 149.85714285714286], [31.0, 164.83333333333334], [32.0, 202.80368098159508], [33.0, 158.0], [35.0, 181.42857142857144], [34.0, 28.0], [36.0, 198.28571428571428], [37.0, 157.0], [38.0, 242.65217391304355], [39.0, 123.5], [40.0, 194.0714285714286], [41.0, 216.0], [42.0, 150.85714285714286], [43.0, 34.68965517241377], [44.0, 178.6], [45.0, 246.08333333333334], [46.0, 241.57142857142856], [47.0, 235.33333333333331], [48.0, 269.08333333333337], [49.0, 217.0], [50.0, 306.0], [51.0, 221.25000000000003], [52.0, 270.8], [53.0, 323.9625668449198], [54.0, 235.5], [55.0, 257.5], [56.0, 292.7], [57.0, 297.29999999999995], [58.0, 330.8636363636363], [59.0, 250.75], [60.0, 284.0], [61.0, 327.6], [62.0, 375.72222222222223], [63.0, 407.75], [64.0, 401.92307692307696], [65.0, 416.5], [66.0, 277.7142857142857], [67.0, 359.0], [68.0, 321.4285714285714], [69.0, 375.0588235294117], [70.0, 399.62500000000006], [71.0, 356.7142857142857], [72.0, 388.6153846153846], [73.0, 324.75], [74.0, 391.72727272727275], [75.0, 442.5833333333333], [76.0, 382.3333333333333], [77.0, 421.0909090909092], [78.0, 422.6363636363636], [79.0, 422.1428571428571], [80.0, 417.33333333333337], [81.0, 408.6060606060607], [82.0, 236.0], [83.0, 292.3333333333333], [84.0, 363.6], [85.0, 508.6666666666667], [86.0, 395.0], [87.0, 77.19480519480518], [88.0, 577.9259259259259], [89.0, 475.6], [90.0, 478.84], [91.0, 531.6666666666666], [92.0, 558.9285714285714], [94.0, 340.25], [95.0, 519.9375], [93.0, 71.0], [96.0, 554.0294117647062], [98.0, 525.2857142857143], [99.0, 566.0344827586207], [97.0, 205.0], [100.0, 485.55999999999995], [103.0, 145.0], [102.0, 99.0], [101.0, 283.0], [105.0, 412.0], [106.0, 409.66666666666663], [107.0, 413.0], [104.0, 83.0], [109.0, 705.9145299145302], [110.0, 352.8333333333333], [111.0, 664.3048780487807], [108.0, 146.0], [112.0, 477.3255813953489], [115.0, 198.0], [114.0, 200.0], [113.0, 198.0], [116.0, 470.0], [119.0, 385.0], [118.0, 210.0], [123.0, 332.0], [122.0, 410.6666666666667], [120.0, 206.0], [127.0, 486.0], [126.0, 320.0], [125.0, 236.0], [124.0, 240.0], [135.0, 826.6578947368421], [134.0, 399.0], [133.0, 327.0], [132.0, 263.0], [131.0, 295.0], [130.0, 565.0], [129.0, 216.0], [128.0, 364.0], [136.0, 877.2222222222222], [137.0, 768.4666666666665], [138.0, 728.595744680851], [139.0, 810.4285714285714], [140.0, 553.6666666666666], [141.0, 776.5], [142.0, 657.3999999999997], [143.0, 582.0], [149.0, 788.5], [151.0, 578.0], [150.0, 452.0], [148.0, 429.0], [147.0, 667.0], [145.0, 642.0], [144.0, 477.0], [153.0, 608.25], [154.0, 575.6], [155.0, 895.6], [156.0, 826.5], [157.0, 1050.8809523809525], [158.0, 880.0], [159.0, 979.8636363636365], [152.0, 675.0], [160.0, 541.5], [161.0, 918.8317757009347], [163.0, 400.5], [165.0, 526.0], [167.0, 283.0], [166.0, 293.0], [164.0, 500.0], [162.0, 610.0], [168.0, 596.0], [170.0, 495.0], [172.0, 524.5], [173.0, 716.4], [174.0, 819.0], [175.0, 908.2350427350432], [171.0, 412.0], [169.0, 196.0], [1.0, 23.0]], "isOverall": false, "label": "Sunstar Search", "isController": false}, {"data": [[40.37942122186484, 216.17751875669867]], "isOverall": false, "label": "Sunstar Search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 175.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 126.6, "minX": 1.62767521E12, "maxY": 989453.5, "series": [{"data": [[1.62767527E12, 989453.5], [1.62767526E12, 905843.0], [1.62767525E12, 808333.6], [1.62767524E12, 605454.4], [1.62767523E12, 378209.8], [1.62767522E12, 148836.6], [1.62767521E12, 3591.8], [1.62767529E12, 96000.7], [1.62767528E12, 917783.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62767527E12, 31987.7], [1.62767526E12, 29282.6], [1.62767525E12, 26127.3], [1.62767524E12, 19568.3], [1.62767523E12, 12234.3], [1.62767522E12, 4790.7], [1.62767521E12, 126.6], [1.62767529E12, 3112.7], [1.62767528E12, 29661.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62767529E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 17.66666666666665, "minX": 1.62767521E12, "maxY": 627.5138199858271, "series": [{"data": [[1.62767527E12, 362.6570302233903], [1.62767526E12, 73.50969131371149], [1.62767525E12, 28.030571198712792], [1.62767524E12, 19.794844253490883], [1.62767523E12, 17.66666666666665], [1.62767522E12, 25.94736842105263], [1.62767521E12, 155.66666666666669], [1.62767529E12, 22.709459459459467], [1.62767528E12, 627.5138199858271]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62767529E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 17.371134020618545, "minX": 1.62767521E12, "maxY": 625.4748405386258, "series": [{"data": [[1.62767527E12, 360.3994743758211], [1.62767526E12, 73.19310839913848], [1.62767525E12, 27.683829444891394], [1.62767524E12, 19.482277121374885], [1.62767523E12, 17.371134020618545], [1.62767522E12, 25.517543859649123], [1.62767521E12, 154.66666666666669], [1.62767529E12, 22.540540540540533], [1.62767528E12, 625.4748405386258]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62767529E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 15.883161512027492, "minX": 1.62767521E12, "maxY": 607.9064493267181, "series": [{"data": [[1.62767527E12, 351.42312746386335], [1.62767526E12, 69.85068198133519], [1.62767525E12, 25.51971037811744], [1.62767524E12, 17.833512352309352], [1.62767523E12, 15.883161512027492], [1.62767522E12, 23.131578947368414], [1.62767521E12, 145.5], [1.62767529E12, 19.439189189189182], [1.62767528E12, 607.9064493267181]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62767529E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.62767521E12, "maxY": 1944.0, "series": [{"data": [[1.62767527E12, 953.0], [1.62767526E12, 201.0], [1.62767525E12, 157.0], [1.62767524E12, 81.0], [1.62767523E12, 82.0], [1.62767522E12, 139.0], [1.62767521E12, 472.0], [1.62767529E12, 41.0], [1.62767528E12, 1944.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62767527E12, 96.0], [1.62767526E12, 12.0], [1.62767525E12, 10.0], [1.62767524E12, 10.0], [1.62767523E12, 10.0], [1.62767522E12, 12.0], [1.62767521E12, 72.0], [1.62767529E12, 13.0], [1.62767528E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62767527E12, 630.0], [1.62767526E12, 130.0], [1.62767525E12, 47.0], [1.62767524E12, 33.0], [1.62767523E12, 28.700000000000045], [1.62767522E12, 56.39999999999998], [1.62767521E12, 472.0], [1.62767529E12, 29.0], [1.62767528E12, 1179.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62767527E12, 828.54], [1.62767526E12, 177.05999999999995], [1.62767525E12, 67.55999999999995], [1.62767524E12, 56.0], [1.62767523E12, 70.33999999999992], [1.62767522E12, 134.26000000000005], [1.62767521E12, 472.0], [1.62767529E12, 39.52999999999997], [1.62767528E12, 1538.6399999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62767527E12, 728.6999999999998], [1.62767526E12, 146.0], [1.62767525E12, 53.0], [1.62767524E12, 41.0], [1.62767523E12, 40.0], [1.62767522E12, 81.54999999999998], [1.62767521E12, 472.0], [1.62767529E12, 31.0], [1.62767528E12, 1305.3999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62767529E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 12.0, "minX": 1.0, "maxY": 1019.0, "series": [{"data": [[6.0, 101.5], [10.0, 63.5], [15.0, 35.5], [18.0, 29.0], [23.0, 19.0], [25.0, 17.0], [30.0, 19.0], [32.0, 17.5], [36.0, 16.0], [39.0, 16.0], [42.0, 19.5], [43.0, 21.0], [51.0, 16.0], [54.0, 13.0], [56.0, 13.5], [57.0, 22.0], [61.0, 13.0], [63.0, 13.0], [68.0, 13.0], [70.0, 12.5], [75.0, 14.0], [72.0, 25.0], [78.0, 14.0], [81.0, 20.0], [85.0, 22.0], [88.0, 13.0], [90.0, 14.0], [97.0, 18.0], [98.0, 15.0], [100.0, 12.0], [101.0, 31.0], [106.0, 13.5], [108.0, 32.5], [113.0, 20.0], [118.0, 14.0], [120.0, 18.0], [123.0, 36.0], [127.0, 16.0], [125.0, 44.0], [135.0, 29.0], [142.0, 93.0], [139.0, 19.0], [143.0, 23.0], [141.0, 74.0], [137.0, 210.0], [146.0, 33.5], [144.0, 131.0], [151.0, 116.0], [147.0, 134.0], [148.0, 169.5], [157.0, 205.0], [154.0, 277.0], [158.0, 626.0], [153.0, 1019.0], [161.0, 428.0], [163.0, 707.0], [178.0, 725.5], [205.0, 709.0], [1.0, 24.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 205.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 12.0, "minX": 1.0, "maxY": 1019.0, "series": [{"data": [[6.0, 101.5], [10.0, 63.0], [15.0, 35.5], [18.0, 26.5], [23.0, 19.0], [25.0, 17.0], [30.0, 18.0], [32.0, 17.0], [36.0, 16.0], [39.0, 15.0], [42.0, 19.0], [43.0, 21.0], [51.0, 16.0], [54.0, 13.0], [56.0, 13.0], [57.0, 22.0], [61.0, 13.0], [63.0, 13.0], [68.0, 13.0], [70.0, 12.0], [75.0, 13.0], [72.0, 25.0], [78.0, 14.0], [81.0, 20.0], [85.0, 22.0], [88.0, 13.0], [90.0, 13.5], [97.0, 17.0], [98.0, 15.0], [100.0, 12.0], [101.0, 30.5], [106.0, 13.0], [108.0, 32.0], [113.0, 20.0], [118.0, 14.0], [120.0, 18.0], [123.0, 35.0], [127.0, 15.0], [125.0, 44.0], [135.0, 29.0], [142.0, 93.0], [139.0, 19.0], [143.0, 22.0], [141.0, 74.0], [137.0, 201.5], [146.0, 33.0], [144.0, 131.0], [151.0, 116.0], [147.0, 134.0], [148.0, 169.5], [157.0, 205.0], [154.0, 275.5], [158.0, 610.5], [153.0, 1019.0], [161.0, 426.0], [163.0, 706.0], [178.0, 725.5], [205.0, 708.0], [1.0, 24.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 205.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.62767521E12, "maxY": 161.1, "series": [{"data": [[1.62767527E12, 161.1], [1.62767526E12, 141.3], [1.62767525E12, 124.1], [1.62767524E12, 93.4], [1.62767523E12, 58.3], [1.62767522E12, 22.8], [1.62767521E12, 0.6], [1.62767529E12, 14.7], [1.62767528E12, 130.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62767529E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.62767521E12, "maxY": 152.2, "series": [{"data": [[1.62767527E12, 152.2], [1.62767526E12, 139.3], [1.62767525E12, 124.3], [1.62767524E12, 93.1], [1.62767523E12, 58.2], [1.62767522E12, 22.8], [1.62767521E12, 0.6], [1.62767529E12, 14.8], [1.62767528E12, 141.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62767529E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.62767521E12, "maxY": 152.2, "series": [{"data": [[1.62767527E12, 152.2], [1.62767526E12, 139.3], [1.62767525E12, 124.3], [1.62767524E12, 93.1], [1.62767523E12, 58.2], [1.62767522E12, 22.8], [1.62767521E12, 0.6], [1.62767529E12, 14.8], [1.62767528E12, 141.1]], "isOverall": false, "label": "Sunstar Search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62767529E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.62767521E12, "maxY": 152.2, "series": [{"data": [[1.62767527E12, 152.2], [1.62767526E12, 139.3], [1.62767525E12, 124.3], [1.62767524E12, 93.1], [1.62767523E12, 58.2], [1.62767522E12, 22.8], [1.62767521E12, 0.6], [1.62767529E12, 14.8], [1.62767528E12, 141.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62767529E12, "title": "Total Transactions Per Second"}},
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

