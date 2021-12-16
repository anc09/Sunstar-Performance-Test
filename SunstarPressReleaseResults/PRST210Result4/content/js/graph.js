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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 749.0, "series": [{"data": [[0.0, 10.0], [0.1, 10.0], [0.2, 10.0], [0.3, 10.0], [0.4, 10.0], [0.5, 10.0], [0.6, 10.0], [0.7, 10.0], [0.8, 10.0], [0.9, 10.0], [1.0, 10.0], [1.1, 10.0], [1.2, 10.0], [1.3, 10.0], [1.4, 10.0], [1.5, 11.0], [1.6, 11.0], [1.7, 11.0], [1.8, 11.0], [1.9, 11.0], [2.0, 11.0], [2.1, 11.0], [2.2, 11.0], [2.3, 11.0], [2.4, 11.0], [2.5, 11.0], [2.6, 11.0], [2.7, 11.0], [2.8, 11.0], [2.9, 11.0], [3.0, 11.0], [3.1, 11.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 11.0], [3.6, 11.0], [3.7, 11.0], [3.8, 11.0], [3.9, 11.0], [4.0, 11.0], [4.1, 11.0], [4.2, 11.0], [4.3, 11.0], [4.4, 11.0], [4.5, 11.0], [4.6, 11.0], [4.7, 11.0], [4.8, 11.0], [4.9, 11.0], [5.0, 12.0], [5.1, 12.0], [5.2, 12.0], [5.3, 12.0], [5.4, 12.0], [5.5, 12.0], [5.6, 12.0], [5.7, 12.0], [5.8, 12.0], [5.9, 12.0], [6.0, 12.0], [6.1, 12.0], [6.2, 12.0], [6.3, 12.0], [6.4, 12.0], [6.5, 12.0], [6.6, 12.0], [6.7, 12.0], [6.8, 12.0], [6.9, 12.0], [7.0, 12.0], [7.1, 12.0], [7.2, 12.0], [7.3, 12.0], [7.4, 12.0], [7.5, 12.0], [7.6, 12.0], [7.7, 12.0], [7.8, 12.0], [7.9, 12.0], [8.0, 12.0], [8.1, 12.0], [8.2, 12.0], [8.3, 13.0], [8.4, 13.0], [8.5, 13.0], [8.6, 13.0], [8.7, 13.0], [8.8, 13.0], [8.9, 13.0], [9.0, 13.0], [9.1, 13.0], [9.2, 13.0], [9.3, 13.0], [9.4, 13.0], [9.5, 13.0], [9.6, 13.0], [9.7, 13.0], [9.8, 13.0], [9.9, 13.0], [10.0, 13.0], [10.1, 13.0], [10.2, 13.0], [10.3, 13.0], [10.4, 13.0], [10.5, 13.0], [10.6, 13.0], [10.7, 13.0], [10.8, 13.0], [10.9, 13.0], [11.0, 13.0], [11.1, 13.0], [11.2, 13.0], [11.3, 13.0], [11.4, 13.0], [11.5, 13.0], [11.6, 13.0], [11.7, 14.0], [11.8, 14.0], [11.9, 14.0], [12.0, 14.0], [12.1, 14.0], [12.2, 14.0], [12.3, 14.0], [12.4, 14.0], [12.5, 14.0], [12.6, 14.0], [12.7, 14.0], [12.8, 14.0], [12.9, 14.0], [13.0, 14.0], [13.1, 14.0], [13.2, 14.0], [13.3, 14.0], [13.4, 14.0], [13.5, 14.0], [13.6, 14.0], [13.7, 14.0], [13.8, 14.0], [13.9, 14.0], [14.0, 14.0], [14.1, 14.0], [14.2, 14.0], [14.3, 14.0], [14.4, 14.0], [14.5, 14.0], [14.6, 14.0], [14.7, 14.0], [14.8, 14.0], [14.9, 14.0], [15.0, 14.0], [15.1, 14.0], [15.2, 14.0], [15.3, 14.0], [15.4, 15.0], [15.5, 15.0], [15.6, 15.0], [15.7, 15.0], [15.8, 15.0], [15.9, 15.0], [16.0, 15.0], [16.1, 15.0], [16.2, 15.0], [16.3, 15.0], [16.4, 15.0], [16.5, 15.0], [16.6, 15.0], [16.7, 15.0], [16.8, 15.0], [16.9, 15.0], [17.0, 15.0], [17.1, 15.0], [17.2, 15.0], [17.3, 15.0], [17.4, 15.0], [17.5, 15.0], [17.6, 15.0], [17.7, 15.0], [17.8, 15.0], [17.9, 15.0], [18.0, 15.0], [18.1, 15.0], [18.2, 16.0], [18.3, 16.0], [18.4, 16.0], [18.5, 16.0], [18.6, 16.0], [18.7, 16.0], [18.8, 16.0], [18.9, 16.0], [19.0, 16.0], [19.1, 16.0], [19.2, 16.0], [19.3, 16.0], [19.4, 16.0], [19.5, 16.0], [19.6, 16.0], [19.7, 16.0], [19.8, 16.0], [19.9, 16.0], [20.0, 16.0], [20.1, 16.0], [20.2, 16.0], [20.3, 17.0], [20.4, 17.0], [20.5, 17.0], [20.6, 17.0], [20.7, 17.0], [20.8, 17.0], [20.9, 17.0], [21.0, 17.0], [21.1, 17.0], [21.2, 17.0], [21.3, 17.0], [21.4, 17.0], [21.5, 17.0], [21.6, 17.0], [21.7, 17.0], [21.8, 18.0], [21.9, 18.0], [22.0, 18.0], [22.1, 18.0], [22.2, 18.0], [22.3, 18.0], [22.4, 18.0], [22.5, 18.0], [22.6, 18.0], [22.7, 18.0], [22.8, 18.0], [22.9, 18.0], [23.0, 18.0], [23.1, 18.0], [23.2, 18.0], [23.3, 18.0], [23.4, 18.0], [23.5, 19.0], [23.6, 19.0], [23.7, 19.0], [23.8, 19.0], [23.9, 19.0], [24.0, 19.0], [24.1, 19.0], [24.2, 19.0], [24.3, 19.0], [24.4, 19.0], [24.5, 19.0], [24.6, 19.0], [24.7, 19.0], [24.8, 19.0], [24.9, 19.0], [25.0, 19.0], [25.1, 19.0], [25.2, 20.0], [25.3, 20.0], [25.4, 20.0], [25.5, 20.0], [25.6, 20.0], [25.7, 20.0], [25.8, 20.0], [25.9, 20.0], [26.0, 20.0], [26.1, 20.0], [26.2, 20.0], [26.3, 20.0], [26.4, 20.0], [26.5, 20.0], [26.6, 20.0], [26.7, 20.0], [26.8, 21.0], [26.9, 21.0], [27.0, 21.0], [27.1, 21.0], [27.2, 21.0], [27.3, 21.0], [27.4, 21.0], [27.5, 21.0], [27.6, 21.0], [27.7, 21.0], [27.8, 21.0], [27.9, 21.0], [28.0, 21.0], [28.1, 22.0], [28.2, 22.0], [28.3, 22.0], [28.4, 22.0], [28.5, 22.0], [28.6, 22.0], [28.7, 22.0], [28.8, 22.0], [28.9, 22.0], [29.0, 22.0], [29.1, 22.0], [29.2, 22.0], [29.3, 22.0], [29.4, 22.0], [29.5, 22.0], [29.6, 22.0], [29.7, 22.0], [29.8, 22.0], [29.9, 23.0], [30.0, 23.0], [30.1, 23.0], [30.2, 23.0], [30.3, 23.0], [30.4, 23.0], [30.5, 23.0], [30.6, 23.0], [30.7, 23.0], [30.8, 23.0], [30.9, 23.0], [31.0, 23.0], [31.1, 23.0], [31.2, 23.0], [31.3, 23.0], [31.4, 23.0], [31.5, 23.0], [31.6, 23.0], [31.7, 23.0], [31.8, 24.0], [31.9, 24.0], [32.0, 24.0], [32.1, 24.0], [32.2, 24.0], [32.3, 24.0], [32.4, 24.0], [32.5, 24.0], [32.6, 24.0], [32.7, 24.0], [32.8, 24.0], [32.9, 24.0], [33.0, 24.0], [33.1, 24.0], [33.2, 24.0], [33.3, 25.0], [33.4, 25.0], [33.5, 25.0], [33.6, 25.0], [33.7, 25.0], [33.8, 25.0], [33.9, 25.0], [34.0, 25.0], [34.1, 25.0], [34.2, 25.0], [34.3, 25.0], [34.4, 26.0], [34.5, 26.0], [34.6, 26.0], [34.7, 26.0], [34.8, 26.0], [34.9, 26.0], [35.0, 26.0], [35.1, 26.0], [35.2, 26.0], [35.3, 26.0], [35.4, 26.0], [35.5, 26.0], [35.6, 27.0], [35.7, 27.0], [35.8, 27.0], [35.9, 27.0], [36.0, 27.0], [36.1, 27.0], [36.2, 27.0], [36.3, 27.0], [36.4, 27.0], [36.5, 27.0], [36.6, 27.0], [36.7, 27.0], [36.8, 27.0], [36.9, 27.0], [37.0, 28.0], [37.1, 28.0], [37.2, 28.0], [37.3, 28.0], [37.4, 28.0], [37.5, 28.0], [37.6, 28.0], [37.7, 28.0], [37.8, 28.0], [37.9, 28.0], [38.0, 28.0], [38.1, 28.0], [38.2, 29.0], [38.3, 29.0], [38.4, 29.0], [38.5, 29.0], [38.6, 29.0], [38.7, 29.0], [38.8, 29.0], [38.9, 29.0], [39.0, 29.0], [39.1, 29.0], [39.2, 29.0], [39.3, 29.0], [39.4, 29.0], [39.5, 30.0], [39.6, 30.0], [39.7, 30.0], [39.8, 30.0], [39.9, 30.0], [40.0, 30.0], [40.1, 30.0], [40.2, 30.0], [40.3, 30.0], [40.4, 30.0], [40.5, 30.0], [40.6, 30.0], [40.7, 31.0], [40.8, 31.0], [40.9, 31.0], [41.0, 31.0], [41.1, 31.0], [41.2, 31.0], [41.3, 31.0], [41.4, 31.0], [41.5, 31.0], [41.6, 31.0], [41.7, 32.0], [41.8, 32.0], [41.9, 32.0], [42.0, 32.0], [42.1, 32.0], [42.2, 32.0], [42.3, 32.0], [42.4, 32.0], [42.5, 32.0], [42.6, 32.0], [42.7, 32.0], [42.8, 32.0], [42.9, 32.0], [43.0, 32.0], [43.1, 33.0], [43.2, 33.0], [43.3, 33.0], [43.4, 33.0], [43.5, 33.0], [43.6, 33.0], [43.7, 33.0], [43.8, 33.0], [43.9, 33.0], [44.0, 33.0], [44.1, 34.0], [44.2, 34.0], [44.3, 34.0], [44.4, 34.0], [44.5, 34.0], [44.6, 34.0], [44.7, 34.0], [44.8, 34.0], [44.9, 34.0], [45.0, 34.0], [45.1, 34.0], [45.2, 35.0], [45.3, 35.0], [45.4, 35.0], [45.5, 35.0], [45.6, 35.0], [45.7, 35.0], [45.8, 35.0], [45.9, 35.0], [46.0, 35.0], [46.1, 35.0], [46.2, 36.0], [46.3, 36.0], [46.4, 36.0], [46.5, 36.0], [46.6, 36.0], [46.7, 36.0], [46.8, 36.0], [46.9, 36.0], [47.0, 36.0], [47.1, 36.0], [47.2, 36.0], [47.3, 37.0], [47.4, 37.0], [47.5, 37.0], [47.6, 37.0], [47.7, 37.0], [47.8, 37.0], [47.9, 37.0], [48.0, 37.0], [48.1, 38.0], [48.2, 38.0], [48.3, 38.0], [48.4, 38.0], [48.5, 38.0], [48.6, 38.0], [48.7, 38.0], [48.8, 38.0], [48.9, 38.0], [49.0, 39.0], [49.1, 39.0], [49.2, 39.0], [49.3, 39.0], [49.4, 39.0], [49.5, 39.0], [49.6, 39.0], [49.7, 39.0], [49.8, 39.0], [49.9, 40.0], [50.0, 40.0], [50.1, 40.0], [50.2, 40.0], [50.3, 40.0], [50.4, 40.0], [50.5, 40.0], [50.6, 40.0], [50.7, 40.0], [50.8, 41.0], [50.9, 41.0], [51.0, 41.0], [51.1, 41.0], [51.2, 41.0], [51.3, 41.0], [51.4, 41.0], [51.5, 42.0], [51.6, 42.0], [51.7, 42.0], [51.8, 42.0], [51.9, 42.0], [52.0, 42.0], [52.1, 42.0], [52.2, 42.0], [52.3, 43.0], [52.4, 43.0], [52.5, 43.0], [52.6, 43.0], [52.7, 43.0], [52.8, 43.0], [52.9, 43.0], [53.0, 43.0], [53.1, 44.0], [53.2, 44.0], [53.3, 44.0], [53.4, 44.0], [53.5, 44.0], [53.6, 44.0], [53.7, 44.0], [53.8, 44.0], [53.9, 44.0], [54.0, 45.0], [54.1, 45.0], [54.2, 45.0], [54.3, 45.0], [54.4, 45.0], [54.5, 45.0], [54.6, 45.0], [54.7, 45.0], [54.8, 45.0], [54.9, 46.0], [55.0, 46.0], [55.1, 46.0], [55.2, 46.0], [55.3, 46.0], [55.4, 46.0], [55.5, 46.0], [55.6, 47.0], [55.7, 47.0], [55.8, 47.0], [55.9, 47.0], [56.0, 47.0], [56.1, 47.0], [56.2, 47.0], [56.3, 47.0], [56.4, 47.0], [56.5, 48.0], [56.6, 48.0], [56.7, 48.0], [56.8, 48.0], [56.9, 48.0], [57.0, 48.0], [57.1, 49.0], [57.2, 49.0], [57.3, 49.0], [57.4, 49.0], [57.5, 49.0], [57.6, 49.0], [57.7, 49.0], [57.8, 50.0], [57.9, 50.0], [58.0, 50.0], [58.1, 50.0], [58.2, 50.0], [58.3, 50.0], [58.4, 51.0], [58.5, 51.0], [58.6, 51.0], [58.7, 51.0], [58.8, 51.0], [58.9, 51.0], [59.0, 51.0], [59.1, 52.0], [59.2, 52.0], [59.3, 52.0], [59.4, 52.0], [59.5, 53.0], [59.6, 53.0], [59.7, 53.0], [59.8, 53.0], [59.9, 54.0], [60.0, 54.0], [60.1, 54.0], [60.2, 54.0], [60.3, 54.0], [60.4, 55.0], [60.5, 55.0], [60.6, 55.0], [60.7, 55.0], [60.8, 55.0], [60.9, 56.0], [61.0, 56.0], [61.1, 56.0], [61.2, 56.0], [61.3, 56.0], [61.4, 57.0], [61.5, 57.0], [61.6, 57.0], [61.7, 57.0], [61.8, 57.0], [61.9, 58.0], [62.0, 58.0], [62.1, 58.0], [62.2, 59.0], [62.3, 59.0], [62.4, 59.0], [62.5, 59.0], [62.6, 60.0], [62.7, 60.0], [62.8, 60.0], [62.9, 60.0], [63.0, 61.0], [63.1, 61.0], [63.2, 61.0], [63.3, 62.0], [63.4, 62.0], [63.5, 62.0], [63.6, 62.0], [63.7, 63.0], [63.8, 63.0], [63.9, 63.0], [64.0, 63.0], [64.1, 63.0], [64.2, 64.0], [64.3, 64.0], [64.4, 64.0], [64.5, 64.0], [64.6, 65.0], [64.7, 65.0], [64.8, 65.0], [64.9, 66.0], [65.0, 66.0], [65.1, 67.0], [65.2, 67.0], [65.3, 67.0], [65.4, 68.0], [65.5, 68.0], [65.6, 68.0], [65.7, 69.0], [65.8, 69.0], [65.9, 69.0], [66.0, 70.0], [66.1, 70.0], [66.2, 71.0], [66.3, 71.0], [66.4, 71.0], [66.5, 72.0], [66.6, 72.0], [66.7, 72.0], [66.8, 73.0], [66.9, 73.0], [67.0, 74.0], [67.1, 74.0], [67.2, 75.0], [67.3, 75.0], [67.4, 76.0], [67.5, 76.0], [67.6, 76.0], [67.7, 77.0], [67.8, 77.0], [67.9, 78.0], [68.0, 78.0], [68.1, 79.0], [68.2, 79.0], [68.3, 80.0], [68.4, 80.0], [68.5, 80.0], [68.6, 81.0], [68.7, 82.0], [68.8, 82.0], [68.9, 82.0], [69.0, 83.0], [69.1, 83.0], [69.2, 83.0], [69.3, 84.0], [69.4, 84.0], [69.5, 85.0], [69.6, 85.0], [69.7, 86.0], [69.8, 87.0], [69.9, 87.0], [70.0, 87.0], [70.1, 88.0], [70.2, 88.0], [70.3, 89.0], [70.4, 90.0], [70.5, 90.0], [70.6, 91.0], [70.7, 91.0], [70.8, 91.0], [70.9, 92.0], [71.0, 93.0], [71.1, 93.0], [71.2, 94.0], [71.3, 94.0], [71.4, 95.0], [71.5, 95.0], [71.6, 96.0], [71.7, 97.0], [71.8, 97.0], [71.9, 97.0], [72.0, 98.0], [72.1, 98.0], [72.2, 99.0], [72.3, 99.0], [72.4, 99.0], [72.5, 100.0], [72.6, 100.0], [72.7, 101.0], [72.8, 101.0], [72.9, 102.0], [73.0, 102.0], [73.1, 103.0], [73.2, 103.0], [73.3, 104.0], [73.4, 104.0], [73.5, 104.0], [73.6, 105.0], [73.7, 105.0], [73.8, 106.0], [73.9, 106.0], [74.0, 107.0], [74.1, 107.0], [74.2, 108.0], [74.3, 108.0], [74.4, 108.0], [74.5, 109.0], [74.6, 110.0], [74.7, 111.0], [74.8, 111.0], [74.9, 111.0], [75.0, 112.0], [75.1, 113.0], [75.2, 114.0], [75.3, 115.0], [75.4, 115.0], [75.5, 116.0], [75.6, 116.0], [75.7, 118.0], [75.8, 119.0], [75.9, 119.0], [76.0, 119.0], [76.1, 120.0], [76.2, 120.0], [76.3, 121.0], [76.4, 122.0], [76.5, 122.0], [76.6, 123.0], [76.7, 123.0], [76.8, 124.0], [76.9, 124.0], [77.0, 125.0], [77.1, 125.0], [77.2, 126.0], [77.3, 126.0], [77.4, 127.0], [77.5, 128.0], [77.6, 128.0], [77.7, 129.0], [77.8, 131.0], [77.9, 131.0], [78.0, 132.0], [78.1, 134.0], [78.2, 134.0], [78.3, 135.0], [78.4, 136.0], [78.5, 137.0], [78.6, 138.0], [78.7, 139.0], [78.8, 139.0], [78.9, 140.0], [79.0, 142.0], [79.1, 143.0], [79.2, 144.0], [79.3, 145.0], [79.4, 146.0], [79.5, 147.0], [79.6, 148.0], [79.7, 149.0], [79.8, 149.0], [79.9, 150.0], [80.0, 151.0], [80.1, 152.0], [80.2, 154.0], [80.3, 155.0], [80.4, 156.0], [80.5, 157.0], [80.6, 157.0], [80.7, 158.0], [80.8, 159.0], [80.9, 160.0], [81.0, 161.0], [81.1, 161.0], [81.2, 163.0], [81.3, 164.0], [81.4, 166.0], [81.5, 167.0], [81.6, 168.0], [81.7, 169.0], [81.8, 170.0], [81.9, 172.0], [82.0, 173.0], [82.1, 174.0], [82.2, 175.0], [82.3, 176.0], [82.4, 177.0], [82.5, 178.0], [82.6, 179.0], [82.7, 181.0], [82.8, 182.0], [82.9, 183.0], [83.0, 184.0], [83.1, 185.0], [83.2, 187.0], [83.3, 188.0], [83.4, 189.0], [83.5, 190.0], [83.6, 191.0], [83.7, 192.0], [83.8, 193.0], [83.9, 194.0], [84.0, 195.0], [84.1, 196.0], [84.2, 199.0], [84.3, 200.0], [84.4, 202.0], [84.5, 203.0], [84.6, 205.0], [84.7, 206.0], [84.8, 208.0], [84.9, 208.0], [85.0, 210.0], [85.1, 211.0], [85.2, 211.0], [85.3, 213.0], [85.4, 214.0], [85.5, 215.0], [85.6, 217.0], [85.7, 219.0], [85.8, 219.0], [85.9, 220.0], [86.0, 222.0], [86.1, 225.0], [86.2, 227.0], [86.3, 228.0], [86.4, 229.0], [86.5, 230.0], [86.6, 231.0], [86.7, 233.0], [86.8, 235.0], [86.9, 236.0], [87.0, 237.0], [87.1, 238.0], [87.2, 239.0], [87.3, 240.0], [87.4, 241.0], [87.5, 242.0], [87.6, 243.0], [87.7, 245.0], [87.8, 246.0], [87.9, 248.0], [88.0, 249.0], [88.1, 251.0], [88.2, 252.0], [88.3, 254.0], [88.4, 256.0], [88.5, 258.0], [88.6, 259.0], [88.7, 261.0], [88.8, 262.0], [88.9, 263.0], [89.0, 264.0], [89.1, 266.0], [89.2, 269.0], [89.3, 271.0], [89.4, 274.0], [89.5, 276.0], [89.6, 279.0], [89.7, 280.0], [89.8, 281.0], [89.9, 284.0], [90.0, 286.0], [90.1, 289.0], [90.2, 293.0], [90.3, 295.0], [90.4, 298.0], [90.5, 301.0], [90.6, 303.0], [90.7, 305.0], [90.8, 307.0], [90.9, 309.0], [91.0, 311.0], [91.1, 313.0], [91.2, 316.0], [91.3, 318.0], [91.4, 319.0], [91.5, 322.0], [91.6, 324.0], [91.7, 326.0], [91.8, 329.0], [91.9, 331.0], [92.0, 333.0], [92.1, 335.0], [92.2, 338.0], [92.3, 338.0], [92.4, 340.0], [92.5, 343.0], [92.6, 345.0], [92.7, 346.0], [92.8, 347.0], [92.9, 347.0], [93.0, 349.0], [93.1, 352.0], [93.2, 353.0], [93.3, 355.0], [93.4, 357.0], [93.5, 359.0], [93.6, 361.0], [93.7, 363.0], [93.8, 365.0], [93.9, 367.0], [94.0, 368.0], [94.1, 370.0], [94.2, 372.0], [94.3, 374.0], [94.4, 376.0], [94.5, 379.0], [94.6, 380.0], [94.7, 383.0], [94.8, 386.0], [94.9, 387.0], [95.0, 390.0], [95.1, 392.0], [95.2, 395.0], [95.3, 397.0], [95.4, 399.0], [95.5, 401.0], [95.6, 403.0], [95.7, 405.0], [95.8, 408.0], [95.9, 409.0], [96.0, 412.0], [96.1, 415.0], [96.2, 422.0], [96.3, 424.0], [96.4, 427.0], [96.5, 431.0], [96.6, 435.0], [96.7, 438.0], [96.8, 441.0], [96.9, 449.0], [97.0, 453.0], [97.1, 457.0], [97.2, 460.0], [97.3, 462.0], [97.4, 465.0], [97.5, 470.0], [97.6, 471.0], [97.7, 474.0], [97.8, 481.0], [97.9, 483.0], [98.0, 485.0], [98.1, 489.0], [98.2, 492.0], [98.3, 499.0], [98.4, 506.0], [98.5, 508.0], [98.6, 515.0], [98.7, 520.0], [98.8, 527.0], [98.9, 534.0], [99.0, 542.0], [99.1, 548.0], [99.2, 559.0], [99.3, 568.0], [99.4, 584.0], [99.5, 589.0], [99.6, 608.0], [99.7, 616.0], [99.8, 634.0], [99.9, 688.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 5485.0, "series": [{"data": [[0.0, 5485.0], [300.0, 376.0], [600.0, 27.0], [700.0, 6.0], [200.0, 473.0], [100.0, 891.0], [400.0, 219.0], [500.0, 95.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 127.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7445.0, "series": [{"data": [[0.0, 7445.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 127.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.62775592E12, "maxY": 52.75735950044601, "series": [{"data": [[1.62775594E12, 3.07469512195122], [1.62775595E12, 3.473415132924335], [1.62775592E12, 19.75], [1.62775593E12, 2.74013157894737], [1.62775598E12, 38.13662239089182], [1.62775599E12, 52.75735950044601], [1.62775596E12, 4.848554033485536], [1.62775597E12, 8.232291001914492], [1.627756E12, 2.0]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.627756E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 19.397106109324785, "minX": 2.0, "maxY": 447.7999999999999, "series": [{"data": [[2.0, 19.397106109324785], [3.0, 19.41918294849025], [4.0, 22.46839546191248], [5.0, 28.632218844984752], [6.0, 29.42170818505339], [7.0, 41.67295597484278], [8.0, 43.02089552238805], [9.0, 54.2012195121951], [10.0, 64.17177914110435], [11.0, 44.11688311688312], [12.0, 78.96178343949043], [13.0, 120.0], [14.0, 90.12499999999999], [16.0, 94.87499999999999], [17.0, 100.2105263157895], [18.0, 135.4], [19.0, 58.5], [20.0, 124.2048192771084], [21.0, 115.78571428571429], [22.0, 73.9707317073171], [23.0, 114.5], [24.0, 144.5953757225433], [26.0, 138.33333333333334], [27.0, 143.0], [28.0, 154.75], [29.0, 172.2471264367816], [30.0, 144.0], [31.0, 104.5], [32.0, 162.8], [33.0, 147.33333333333334], [34.0, 155.57142857142858], [35.0, 214.13333333333338], [36.0, 133.0], [37.0, 189.375], [38.0, 199.58333333333334], [39.0, 148.75], [40.0, 116.5], [41.0, 222.75000000000003], [42.0, 252.9411764705883], [43.0, 228.99999999999997], [44.0, 91.62500000000003], [45.0, 234.0], [46.0, 256.8571428571429], [47.0, 264.0], [48.0, 245.7142857142857], [49.0, 259.8], [50.0, 250.5], [51.0, 267.0], [52.0, 277.1111111111111], [53.0, 283.25], [54.0, 310.0], [55.0, 274.68749999999994], [56.0, 318.6], [57.0, 356.0], [58.0, 326.0], [59.0, 265.0], [60.0, 340.75], [61.0, 307.12500000000006], [62.0, 322.64285714285717], [63.0, 318.135135135135], [64.0, 412.71942446043164], [65.0, 357.0], [66.0, 357.2727272727273], [67.0, 333.8333333333333], [68.0, 368.8823529411765], [69.0, 303.25], [70.0, 297.6], [71.0, 382.27272727272725], [72.0, 333.25], [75.0, 192.0], [74.0, 131.0], [73.0, 176.0], [76.0, 430.7936507936508], [77.0, 447.7999999999999], [78.0, 331.0], [79.0, 142.0], [80.0, 341.0], [81.0, 404.16666666666663], [82.0, 352.8571428571429], [83.0, 337.6], [84.0, 405.7], [85.0, 365.12500000000006], [86.0, 299.57142857142856], [87.0, 344.7142857142857], [88.0, 349.0], [89.0, 322.1230769230768]], "isOverall": false, "label": "Press Release", "isController": false}, {"data": [[19.031431590068618, 95.80071315372405]], "isOverall": false, "label": "Press Release-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 89.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 66.0, "minX": 1.62775592E12, "maxY": 6597513.0, "series": [{"data": [[1.62775594E12, 2737488.0], [1.62775595E12, 4081194.0], [1.62775592E12, 16692.0], [1.62775593E12, 1268592.0], [1.62775598E12, 6597513.0], [1.62775599E12, 4677933.0], [1.62775596E12, 5483322.0], [1.62775597E12, 6539091.0], [1.627756E12, 196131.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62775594E12, 10824.0], [1.62775595E12, 16137.0], [1.62775592E12, 66.0], [1.62775593E12, 5016.0], [1.62775598E12, 26086.5], [1.62775599E12, 18496.5], [1.62775596E12, 21681.0], [1.62775597E12, 25855.5], [1.627756E12, 775.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.627756E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 17.750000000000007, "minX": 1.62775592E12, "maxY": 225.93801391524335, "series": [{"data": [[1.62775594E12, 17.750000000000007], [1.62775595E12, 21.967280163599177], [1.62775592E12, 182.75], [1.62775593E12, 29.763157894736842], [1.62775598E12, 225.93801391524335], [1.62775599E12, 190.7145405887602], [1.62775596E12, 24.989345509893504], [1.62775597E12, 49.51435864709643], [1.627756E12, 22.80851063829786]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.627756E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 17.36280487804877, "minX": 1.62775592E12, "maxY": 224.21758380771618, "series": [{"data": [[1.62775594E12, 17.36280487804877], [1.62775595E12, 21.592024539877315], [1.62775592E12, 175.25], [1.62775593E12, 27.944078947368425], [1.62775598E12, 224.21758380771618], [1.62775599E12, 188.86173059768058], [1.62775596E12, 24.59512937595125], [1.62775597E12, 49.21952776005112], [1.627756E12, 22.14893617021277]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.627756E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 15.782012195121942, "minX": 1.62775592E12, "maxY": 217.16761543326993, "series": [{"data": [[1.62775594E12, 15.782012195121942], [1.62775595E12, 19.88036809815954], [1.62775592E12, 166.5], [1.62775593E12, 25.52631578947369], [1.62775598E12, 217.16761543326993], [1.62775599E12, 181.52096342551272], [1.62775596E12, 22.439878234398805], [1.62775597E12, 46.015954052329256], [1.627756E12, 19.446808510638295]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.627756E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.62775592E12, "maxY": 749.0, "series": [{"data": [[1.62775594E12, 105.0], [1.62775595E12, 122.0], [1.62775592E12, 515.0], [1.62775593E12, 270.0], [1.62775598E12, 714.0], [1.62775599E12, 749.0], [1.62775596E12, 100.0], [1.62775597E12, 132.0], [1.627756E12, 49.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62775594E12, 10.0], [1.62775595E12, 10.0], [1.62775592E12, 49.0], [1.62775593E12, 11.0], [1.62775598E12, 33.0], [1.62775599E12, 13.0], [1.62775596E12, 10.0], [1.62775597E12, 13.0], [1.627756E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62775594E12, 28.0], [1.62775595E12, 40.0], [1.62775592E12, 515.0], [1.62775593E12, 43.0], [1.62775598E12, 396.0], [1.62775599E12, 470.0], [1.62775596E12, 41.0], [1.62775597E12, 80.0], [1.627756E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62775594E12, 66.8599999999999], [1.62775595E12, 91.26000000000022], [1.62775592E12, 515.0], [1.62775593E12, 264.0], [1.62775598E12, 574.0800000000004], [1.62775599E12, 646.8999999999999], [1.62775596E12, 63.0], [1.62775597E12, 102.63999999999987], [1.627756E12, 49.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62775594E12, 37.0], [1.62775595E12, 49.049999999999955], [1.62775592E12, 515.0], [1.62775593E12, 69.75], [1.62775598E12, 463.89999999999986], [1.62775599E12, 530.0], [1.62775596E12, 48.0], [1.62775597E12, 88.59999999999991], [1.627756E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.627756E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 12.0, "minX": 1.0, "maxY": 421.0, "series": [{"data": [[4.0, 83.5], [11.0, 261.0], [15.0, 24.0], [18.0, 33.0], [23.0, 23.0], [25.0, 21.0], [30.0, 18.5], [32.0, 15.0], [37.0, 17.0], [39.0, 14.0], [43.0, 14.0], [44.0, 32.0], [46.0, 31.5], [50.0, 24.5], [52.0, 23.5], [54.0, 16.0], [56.0, 13.0], [61.0, 15.0], [63.0, 12.0], [68.0, 14.0], [71.0, 15.0], [74.0, 17.5], [76.0, 12.0], [83.0, 18.0], [85.0, 13.0], [87.0, 12.0], [86.0, 39.5], [90.0, 12.5], [91.0, 32.0], [97.0, 14.0], [102.0, 13.0], [100.0, 28.0], [107.0, 26.5], [106.0, 56.5], [109.0, 34.0], [113.0, 35.0], [122.0, 37.5], [127.0, 16.0], [131.0, 18.0], [133.0, 28.0], [135.0, 22.0], [139.0, 23.0], [147.0, 26.0], [151.0, 43.0], [150.0, 310.5], [144.0, 92.5], [155.0, 48.5], [154.0, 107.5], [153.0, 72.0], [156.0, 130.5], [157.0, 211.0], [160.0, 35.0], [164.0, 149.5], [165.0, 101.0], [162.0, 139.0], [167.0, 417.0], [163.0, 159.0], [168.0, 44.0], [181.0, 421.0], [1.0, 23.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 181.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 12.0, "minX": 1.0, "maxY": 411.0, "series": [{"data": [[4.0, 75.0], [11.0, 232.0], [15.0, 23.0], [18.0, 31.5], [23.0, 21.0], [25.0, 20.0], [30.0, 18.0], [32.0, 15.0], [37.0, 16.0], [39.0, 13.0], [43.0, 13.0], [44.0, 30.5], [46.0, 30.5], [50.0, 24.0], [52.0, 22.5], [54.0, 15.0], [56.0, 13.0], [61.0, 14.0], [63.0, 12.0], [68.0, 13.0], [71.0, 15.0], [74.0, 16.5], [76.0, 12.0], [83.0, 18.0], [85.0, 12.0], [87.0, 12.0], [86.0, 39.0], [90.0, 12.0], [91.0, 31.0], [97.0, 13.0], [102.0, 12.0], [100.0, 28.0], [107.0, 26.0], [106.0, 56.0], [109.0, 34.0], [113.0, 35.0], [122.0, 37.5], [127.0, 16.0], [131.0, 17.0], [133.0, 27.0], [135.0, 22.0], [139.0, 22.0], [147.0, 26.0], [151.0, 43.0], [150.0, 306.5], [144.0, 92.0], [155.0, 48.5], [154.0, 107.0], [153.0, 72.0], [156.0, 130.0], [157.0, 211.0], [160.0, 34.5], [164.0, 149.0], [165.0, 100.0], [162.0, 139.0], [167.0, 411.0], [163.0, 159.0], [168.0, 44.0], [181.0, 409.0], [1.0, 23.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 181.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.62775592E12, "maxY": 164.4, "series": [{"data": [[1.62775594E12, 65.6], [1.62775595E12, 98.1], [1.62775592E12, 0.4], [1.62775593E12, 30.5], [1.62775598E12, 164.4], [1.62775599E12, 104.5], [1.62775596E12, 131.3], [1.62775597E12, 157.8], [1.627756E12, 4.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.627756E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.62775592E12, "maxY": 158.1, "series": [{"data": [[1.62775594E12, 65.6], [1.62775595E12, 97.8], [1.62775592E12, 0.4], [1.62775593E12, 30.4], [1.62775598E12, 158.1], [1.62775599E12, 112.1], [1.62775596E12, 131.4], [1.62775597E12, 156.7], [1.627756E12, 4.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.627756E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.62775592E12, "maxY": 158.1, "series": [{"data": [[1.62775594E12, 65.6], [1.62775595E12, 97.8], [1.62775592E12, 0.4], [1.62775593E12, 30.4], [1.62775598E12, 158.1], [1.62775599E12, 112.1], [1.62775596E12, 131.4], [1.62775597E12, 156.7], [1.627756E12, 4.7]], "isOverall": false, "label": "Press Release-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.627756E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.62775592E12, "maxY": 158.1, "series": [{"data": [[1.62775594E12, 65.6], [1.62775595E12, 97.8], [1.62775592E12, 0.4], [1.62775593E12, 30.4], [1.62775598E12, 158.1], [1.62775599E12, 112.1], [1.62775596E12, 131.4], [1.62775597E12, 156.7], [1.627756E12, 4.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.627756E12, "title": "Total Transactions Per Second"}},
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

