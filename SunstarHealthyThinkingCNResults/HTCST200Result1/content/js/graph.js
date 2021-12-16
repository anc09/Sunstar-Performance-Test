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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 1272.0, "series": [{"data": [[0.0, 10.0], [0.1, 11.0], [0.2, 11.0], [0.3, 11.0], [0.4, 11.0], [0.5, 11.0], [0.6, 11.0], [0.7, 11.0], [0.8, 11.0], [0.9, 11.0], [1.0, 11.0], [1.1, 11.0], [1.2, 11.0], [1.3, 11.0], [1.4, 11.0], [1.5, 11.0], [1.6, 11.0], [1.7, 11.0], [1.8, 12.0], [1.9, 12.0], [2.0, 12.0], [2.1, 12.0], [2.2, 12.0], [2.3, 12.0], [2.4, 12.0], [2.5, 12.0], [2.6, 12.0], [2.7, 12.0], [2.8, 12.0], [2.9, 12.0], [3.0, 12.0], [3.1, 12.0], [3.2, 12.0], [3.3, 12.0], [3.4, 12.0], [3.5, 12.0], [3.6, 12.0], [3.7, 12.0], [3.8, 12.0], [3.9, 12.0], [4.0, 12.0], [4.1, 12.0], [4.2, 12.0], [4.3, 12.0], [4.4, 12.0], [4.5, 12.0], [4.6, 12.0], [4.7, 12.0], [4.8, 13.0], [4.9, 13.0], [5.0, 13.0], [5.1, 13.0], [5.2, 13.0], [5.3, 13.0], [5.4, 13.0], [5.5, 13.0], [5.6, 13.0], [5.7, 13.0], [5.8, 13.0], [5.9, 13.0], [6.0, 13.0], [6.1, 13.0], [6.2, 13.0], [6.3, 13.0], [6.4, 13.0], [6.5, 13.0], [6.6, 13.0], [6.7, 13.0], [6.8, 13.0], [6.9, 13.0], [7.0, 13.0], [7.1, 13.0], [7.2, 13.0], [7.3, 13.0], [7.4, 13.0], [7.5, 13.0], [7.6, 13.0], [7.7, 13.0], [7.8, 13.0], [7.9, 13.0], [8.0, 13.0], [8.1, 14.0], [8.2, 14.0], [8.3, 14.0], [8.4, 14.0], [8.5, 14.0], [8.6, 14.0], [8.7, 14.0], [8.8, 14.0], [8.9, 14.0], [9.0, 14.0], [9.1, 14.0], [9.2, 14.0], [9.3, 14.0], [9.4, 14.0], [9.5, 14.0], [9.6, 14.0], [9.7, 14.0], [9.8, 14.0], [9.9, 14.0], [10.0, 14.0], [10.1, 14.0], [10.2, 14.0], [10.3, 14.0], [10.4, 14.0], [10.5, 14.0], [10.6, 14.0], [10.7, 14.0], [10.8, 14.0], [10.9, 14.0], [11.0, 14.0], [11.1, 14.0], [11.2, 14.0], [11.3, 14.0], [11.4, 14.0], [11.5, 14.0], [11.6, 14.0], [11.7, 14.0], [11.8, 14.0], [11.9, 14.0], [12.0, 15.0], [12.1, 15.0], [12.2, 15.0], [12.3, 15.0], [12.4, 15.0], [12.5, 15.0], [12.6, 15.0], [12.7, 15.0], [12.8, 15.0], [12.9, 15.0], [13.0, 15.0], [13.1, 15.0], [13.2, 15.0], [13.3, 15.0], [13.4, 15.0], [13.5, 15.0], [13.6, 15.0], [13.7, 15.0], [13.8, 15.0], [13.9, 15.0], [14.0, 15.0], [14.1, 15.0], [14.2, 15.0], [14.3, 15.0], [14.4, 15.0], [14.5, 15.0], [14.6, 15.0], [14.7, 15.0], [14.8, 15.0], [14.9, 15.0], [15.0, 15.0], [15.1, 15.0], [15.2, 15.0], [15.3, 15.0], [15.4, 15.0], [15.5, 15.0], [15.6, 15.0], [15.7, 15.0], [15.8, 15.0], [15.9, 15.0], [16.0, 15.0], [16.1, 15.0], [16.2, 15.0], [16.3, 16.0], [16.4, 16.0], [16.5, 16.0], [16.6, 16.0], [16.7, 16.0], [16.8, 16.0], [16.9, 16.0], [17.0, 16.0], [17.1, 16.0], [17.2, 16.0], [17.3, 16.0], [17.4, 16.0], [17.5, 16.0], [17.6, 16.0], [17.7, 16.0], [17.8, 16.0], [17.9, 16.0], [18.0, 16.0], [18.1, 16.0], [18.2, 16.0], [18.3, 16.0], [18.4, 16.0], [18.5, 16.0], [18.6, 16.0], [18.7, 16.0], [18.8, 16.0], [18.9, 16.0], [19.0, 16.0], [19.1, 16.0], [19.2, 16.0], [19.3, 16.0], [19.4, 17.0], [19.5, 17.0], [19.6, 17.0], [19.7, 17.0], [19.8, 17.0], [19.9, 17.0], [20.0, 17.0], [20.1, 17.0], [20.2, 17.0], [20.3, 17.0], [20.4, 17.0], [20.5, 17.0], [20.6, 17.0], [20.7, 17.0], [20.8, 17.0], [20.9, 17.0], [21.0, 17.0], [21.1, 17.0], [21.2, 17.0], [21.3, 17.0], [21.4, 17.0], [21.5, 17.0], [21.6, 17.0], [21.7, 17.0], [21.8, 17.0], [21.9, 18.0], [22.0, 18.0], [22.1, 18.0], [22.2, 18.0], [22.3, 18.0], [22.4, 18.0], [22.5, 18.0], [22.6, 18.0], [22.7, 18.0], [22.8, 18.0], [22.9, 18.0], [23.0, 18.0], [23.1, 18.0], [23.2, 18.0], [23.3, 18.0], [23.4, 18.0], [23.5, 18.0], [23.6, 18.0], [23.7, 18.0], [23.8, 18.0], [23.9, 18.0], [24.0, 18.0], [24.1, 18.0], [24.2, 18.0], [24.3, 18.0], [24.4, 18.0], [24.5, 18.0], [24.6, 19.0], [24.7, 19.0], [24.8, 19.0], [24.9, 19.0], [25.0, 19.0], [25.1, 19.0], [25.2, 19.0], [25.3, 19.0], [25.4, 19.0], [25.5, 19.0], [25.6, 19.0], [25.7, 19.0], [25.8, 19.0], [25.9, 19.0], [26.0, 19.0], [26.1, 19.0], [26.2, 19.0], [26.3, 19.0], [26.4, 19.0], [26.5, 19.0], [26.6, 19.0], [26.7, 20.0], [26.8, 20.0], [26.9, 20.0], [27.0, 20.0], [27.1, 20.0], [27.2, 20.0], [27.3, 20.0], [27.4, 20.0], [27.5, 20.0], [27.6, 20.0], [27.7, 20.0], [27.8, 20.0], [27.9, 20.0], [28.0, 20.0], [28.1, 20.0], [28.2, 20.0], [28.3, 20.0], [28.4, 20.0], [28.5, 21.0], [28.6, 21.0], [28.7, 21.0], [28.8, 21.0], [28.9, 21.0], [29.0, 21.0], [29.1, 21.0], [29.2, 21.0], [29.3, 21.0], [29.4, 21.0], [29.5, 21.0], [29.6, 21.0], [29.7, 21.0], [29.8, 21.0], [29.9, 21.0], [30.0, 21.0], [30.1, 22.0], [30.2, 22.0], [30.3, 22.0], [30.4, 22.0], [30.5, 22.0], [30.6, 22.0], [30.7, 22.0], [30.8, 22.0], [30.9, 22.0], [31.0, 22.0], [31.1, 22.0], [31.2, 22.0], [31.3, 22.0], [31.4, 22.0], [31.5, 22.0], [31.6, 22.0], [31.7, 23.0], [31.8, 23.0], [31.9, 23.0], [32.0, 23.0], [32.1, 23.0], [32.2, 23.0], [32.3, 23.0], [32.4, 23.0], [32.5, 23.0], [32.6, 23.0], [32.7, 23.0], [32.8, 23.0], [32.9, 23.0], [33.0, 23.0], [33.1, 23.0], [33.2, 23.0], [33.3, 23.0], [33.4, 24.0], [33.5, 24.0], [33.6, 24.0], [33.7, 24.0], [33.8, 24.0], [33.9, 24.0], [34.0, 24.0], [34.1, 24.0], [34.2, 24.0], [34.3, 24.0], [34.4, 24.0], [34.5, 24.0], [34.6, 24.0], [34.7, 25.0], [34.8, 25.0], [34.9, 25.0], [35.0, 25.0], [35.1, 25.0], [35.2, 25.0], [35.3, 25.0], [35.4, 25.0], [35.5, 25.0], [35.6, 25.0], [35.7, 25.0], [35.8, 25.0], [35.9, 25.0], [36.0, 26.0], [36.1, 26.0], [36.2, 26.0], [36.3, 26.0], [36.4, 26.0], [36.5, 26.0], [36.6, 26.0], [36.7, 26.0], [36.8, 26.0], [36.9, 26.0], [37.0, 26.0], [37.1, 27.0], [37.2, 27.0], [37.3, 27.0], [37.4, 27.0], [37.5, 27.0], [37.6, 27.0], [37.7, 27.0], [37.8, 27.0], [37.9, 27.0], [38.0, 27.0], [38.1, 28.0], [38.2, 28.0], [38.3, 28.0], [38.4, 28.0], [38.5, 28.0], [38.6, 28.0], [38.7, 28.0], [38.8, 28.0], [38.9, 28.0], [39.0, 28.0], [39.1, 28.0], [39.2, 29.0], [39.3, 29.0], [39.4, 29.0], [39.5, 29.0], [39.6, 29.0], [39.7, 29.0], [39.8, 29.0], [39.9, 29.0], [40.0, 29.0], [40.1, 29.0], [40.2, 29.0], [40.3, 30.0], [40.4, 30.0], [40.5, 30.0], [40.6, 30.0], [40.7, 30.0], [40.8, 30.0], [40.9, 30.0], [41.0, 30.0], [41.1, 30.0], [41.2, 30.0], [41.3, 31.0], [41.4, 31.0], [41.5, 31.0], [41.6, 31.0], [41.7, 31.0], [41.8, 31.0], [41.9, 31.0], [42.0, 31.0], [42.1, 31.0], [42.2, 31.0], [42.3, 32.0], [42.4, 32.0], [42.5, 32.0], [42.6, 32.0], [42.7, 32.0], [42.8, 32.0], [42.9, 32.0], [43.0, 32.0], [43.1, 32.0], [43.2, 32.0], [43.3, 33.0], [43.4, 33.0], [43.5, 33.0], [43.6, 33.0], [43.7, 33.0], [43.8, 33.0], [43.9, 33.0], [44.0, 33.0], [44.1, 33.0], [44.2, 34.0], [44.3, 34.0], [44.4, 34.0], [44.5, 34.0], [44.6, 34.0], [44.7, 34.0], [44.8, 34.0], [44.9, 34.0], [45.0, 34.0], [45.1, 34.0], [45.2, 35.0], [45.3, 35.0], [45.4, 35.0], [45.5, 35.0], [45.6, 35.0], [45.7, 35.0], [45.8, 35.0], [45.9, 35.0], [46.0, 35.0], [46.1, 35.0], [46.2, 36.0], [46.3, 36.0], [46.4, 36.0], [46.5, 36.0], [46.6, 36.0], [46.7, 36.0], [46.8, 36.0], [46.9, 36.0], [47.0, 36.0], [47.1, 37.0], [47.2, 37.0], [47.3, 37.0], [47.4, 37.0], [47.5, 37.0], [47.6, 37.0], [47.7, 37.0], [47.8, 37.0], [47.9, 38.0], [48.0, 38.0], [48.1, 38.0], [48.2, 38.0], [48.3, 38.0], [48.4, 38.0], [48.5, 38.0], [48.6, 39.0], [48.7, 39.0], [48.8, 39.0], [48.9, 39.0], [49.0, 39.0], [49.1, 39.0], [49.2, 39.0], [49.3, 40.0], [49.4, 40.0], [49.5, 40.0], [49.6, 40.0], [49.7, 40.0], [49.8, 40.0], [49.9, 40.0], [50.0, 40.0], [50.1, 40.0], [50.2, 41.0], [50.3, 41.0], [50.4, 41.0], [50.5, 41.0], [50.6, 41.0], [50.7, 41.0], [50.8, 42.0], [50.9, 42.0], [51.0, 42.0], [51.1, 42.0], [51.2, 42.0], [51.3, 42.0], [51.4, 43.0], [51.5, 43.0], [51.6, 43.0], [51.7, 43.0], [51.8, 43.0], [51.9, 43.0], [52.0, 43.0], [52.1, 43.0], [52.2, 44.0], [52.3, 44.0], [52.4, 44.0], [52.5, 44.0], [52.6, 44.0], [52.7, 44.0], [52.8, 44.0], [52.9, 45.0], [53.0, 45.0], [53.1, 45.0], [53.2, 45.0], [53.3, 45.0], [53.4, 46.0], [53.5, 46.0], [53.6, 46.0], [53.7, 46.0], [53.8, 46.0], [53.9, 46.0], [54.0, 46.0], [54.1, 47.0], [54.2, 47.0], [54.3, 47.0], [54.4, 47.0], [54.5, 47.0], [54.6, 48.0], [54.7, 48.0], [54.8, 48.0], [54.9, 48.0], [55.0, 48.0], [55.1, 49.0], [55.2, 49.0], [55.3, 49.0], [55.4, 49.0], [55.5, 49.0], [55.6, 50.0], [55.7, 50.0], [55.8, 50.0], [55.9, 51.0], [56.0, 51.0], [56.1, 51.0], [56.2, 51.0], [56.3, 51.0], [56.4, 52.0], [56.5, 52.0], [56.6, 52.0], [56.7, 52.0], [56.8, 53.0], [56.9, 53.0], [57.0, 53.0], [57.1, 53.0], [57.2, 53.0], [57.3, 54.0], [57.4, 54.0], [57.5, 54.0], [57.6, 55.0], [57.7, 55.0], [57.8, 55.0], [57.9, 55.0], [58.0, 55.0], [58.1, 56.0], [58.2, 56.0], [58.3, 56.0], [58.4, 57.0], [58.5, 57.0], [58.6, 58.0], [58.7, 58.0], [58.8, 58.0], [58.9, 58.0], [59.0, 59.0], [59.1, 59.0], [59.2, 59.0], [59.3, 60.0], [59.4, 60.0], [59.5, 60.0], [59.6, 60.0], [59.7, 60.0], [59.8, 61.0], [59.9, 61.0], [60.0, 61.0], [60.1, 62.0], [60.2, 62.0], [60.3, 63.0], [60.4, 63.0], [60.5, 64.0], [60.6, 64.0], [60.7, 65.0], [60.8, 65.0], [60.9, 65.0], [61.0, 66.0], [61.1, 66.0], [61.2, 67.0], [61.3, 67.0], [61.4, 67.0], [61.5, 68.0], [61.6, 68.0], [61.7, 69.0], [61.8, 70.0], [61.9, 70.0], [62.0, 70.0], [62.1, 71.0], [62.2, 72.0], [62.3, 72.0], [62.4, 72.0], [62.5, 73.0], [62.6, 73.0], [62.7, 74.0], [62.8, 74.0], [62.9, 75.0], [63.0, 75.0], [63.1, 75.0], [63.2, 76.0], [63.3, 76.0], [63.4, 76.0], [63.5, 77.0], [63.6, 77.0], [63.7, 78.0], [63.8, 78.0], [63.9, 78.0], [64.0, 79.0], [64.1, 79.0], [64.2, 79.0], [64.3, 80.0], [64.4, 80.0], [64.5, 81.0], [64.6, 81.0], [64.7, 81.0], [64.8, 82.0], [64.9, 83.0], [65.0, 83.0], [65.1, 83.0], [65.2, 84.0], [65.3, 84.0], [65.4, 84.0], [65.5, 85.0], [65.6, 86.0], [65.7, 86.0], [65.8, 87.0], [65.9, 87.0], [66.0, 88.0], [66.1, 88.0], [66.2, 89.0], [66.3, 89.0], [66.4, 90.0], [66.5, 90.0], [66.6, 91.0], [66.7, 91.0], [66.8, 92.0], [66.9, 92.0], [67.0, 92.0], [67.1, 93.0], [67.2, 94.0], [67.3, 95.0], [67.4, 95.0], [67.5, 95.0], [67.6, 96.0], [67.7, 96.0], [67.8, 97.0], [67.9, 98.0], [68.0, 98.0], [68.1, 98.0], [68.2, 99.0], [68.3, 99.0], [68.4, 100.0], [68.5, 100.0], [68.6, 101.0], [68.7, 103.0], [68.8, 103.0], [68.9, 104.0], [69.0, 105.0], [69.1, 105.0], [69.2, 106.0], [69.3, 106.0], [69.4, 107.0], [69.5, 107.0], [69.6, 108.0], [69.7, 109.0], [69.8, 109.0], [69.9, 110.0], [70.0, 111.0], [70.1, 111.0], [70.2, 112.0], [70.3, 112.0], [70.4, 114.0], [70.5, 114.0], [70.6, 115.0], [70.7, 115.0], [70.8, 116.0], [70.9, 117.0], [71.0, 117.0], [71.1, 118.0], [71.2, 119.0], [71.3, 119.0], [71.4, 120.0], [71.5, 120.0], [71.6, 121.0], [71.7, 122.0], [71.8, 122.0], [71.9, 123.0], [72.0, 123.0], [72.1, 124.0], [72.2, 125.0], [72.3, 125.0], [72.4, 126.0], [72.5, 126.0], [72.6, 127.0], [72.7, 127.0], [72.8, 128.0], [72.9, 128.0], [73.0, 130.0], [73.1, 131.0], [73.2, 131.0], [73.3, 132.0], [73.4, 133.0], [73.5, 134.0], [73.6, 135.0], [73.7, 136.0], [73.8, 137.0], [73.9, 139.0], [74.0, 139.0], [74.1, 140.0], [74.2, 141.0], [74.3, 142.0], [74.4, 143.0], [74.5, 143.0], [74.6, 144.0], [74.7, 145.0], [74.8, 146.0], [74.9, 147.0], [75.0, 147.0], [75.1, 148.0], [75.2, 149.0], [75.3, 150.0], [75.4, 150.0], [75.5, 151.0], [75.6, 151.0], [75.7, 152.0], [75.8, 153.0], [75.9, 154.0], [76.0, 154.0], [76.1, 155.0], [76.2, 156.0], [76.3, 158.0], [76.4, 159.0], [76.5, 160.0], [76.6, 160.0], [76.7, 161.0], [76.8, 163.0], [76.9, 164.0], [77.0, 165.0], [77.1, 166.0], [77.2, 166.0], [77.3, 167.0], [77.4, 168.0], [77.5, 169.0], [77.6, 170.0], [77.7, 171.0], [77.8, 172.0], [77.9, 172.0], [78.0, 174.0], [78.1, 175.0], [78.2, 176.0], [78.3, 177.0], [78.4, 178.0], [78.5, 179.0], [78.6, 180.0], [78.7, 181.0], [78.8, 182.0], [78.9, 183.0], [79.0, 183.0], [79.1, 184.0], [79.2, 185.0], [79.3, 185.0], [79.4, 186.0], [79.5, 187.0], [79.6, 188.0], [79.7, 188.0], [79.8, 189.0], [79.9, 191.0], [80.0, 191.0], [80.1, 192.0], [80.2, 193.0], [80.3, 193.0], [80.4, 194.0], [80.5, 195.0], [80.6, 195.0], [80.7, 196.0], [80.8, 197.0], [80.9, 198.0], [81.0, 199.0], [81.1, 200.0], [81.2, 201.0], [81.3, 203.0], [81.4, 204.0], [81.5, 204.0], [81.6, 205.0], [81.7, 206.0], [81.8, 207.0], [81.9, 207.0], [82.0, 209.0], [82.1, 210.0], [82.2, 211.0], [82.3, 211.0], [82.4, 211.0], [82.5, 212.0], [82.6, 214.0], [82.7, 214.0], [82.8, 215.0], [82.9, 216.0], [83.0, 218.0], [83.1, 219.0], [83.2, 220.0], [83.3, 222.0], [83.4, 224.0], [83.5, 224.0], [83.6, 225.0], [83.7, 227.0], [83.8, 228.0], [83.9, 230.0], [84.0, 231.0], [84.1, 233.0], [84.2, 234.0], [84.3, 235.0], [84.4, 236.0], [84.5, 236.0], [84.6, 238.0], [84.7, 239.0], [84.8, 240.0], [84.9, 242.0], [85.0, 242.0], [85.1, 245.0], [85.2, 246.0], [85.3, 247.0], [85.4, 248.0], [85.5, 250.0], [85.6, 252.0], [85.7, 253.0], [85.8, 254.0], [85.9, 256.0], [86.0, 258.0], [86.1, 259.0], [86.2, 260.0], [86.3, 261.0], [86.4, 262.0], [86.5, 263.0], [86.6, 264.0], [86.7, 266.0], [86.8, 267.0], [86.9, 268.0], [87.0, 269.0], [87.1, 271.0], [87.2, 273.0], [87.3, 275.0], [87.4, 276.0], [87.5, 277.0], [87.6, 278.0], [87.7, 280.0], [87.8, 282.0], [87.9, 283.0], [88.0, 284.0], [88.1, 285.0], [88.2, 286.0], [88.3, 288.0], [88.4, 293.0], [88.5, 294.0], [88.6, 295.0], [88.7, 298.0], [88.8, 300.0], [88.9, 302.0], [89.0, 303.0], [89.1, 305.0], [89.2, 306.0], [89.3, 308.0], [89.4, 310.0], [89.5, 314.0], [89.6, 315.0], [89.7, 319.0], [89.8, 321.0], [89.9, 323.0], [90.0, 324.0], [90.1, 326.0], [90.2, 328.0], [90.3, 331.0], [90.4, 333.0], [90.5, 336.0], [90.6, 339.0], [90.7, 341.0], [90.8, 343.0], [90.9, 344.0], [91.0, 348.0], [91.1, 351.0], [91.2, 355.0], [91.3, 356.0], [91.4, 358.0], [91.5, 360.0], [91.6, 363.0], [91.7, 365.0], [91.8, 368.0], [91.9, 371.0], [92.0, 373.0], [92.1, 376.0], [92.2, 378.0], [92.3, 380.0], [92.4, 381.0], [92.5, 383.0], [92.6, 387.0], [92.7, 389.0], [92.8, 393.0], [92.9, 396.0], [93.0, 399.0], [93.1, 400.0], [93.2, 403.0], [93.3, 405.0], [93.4, 408.0], [93.5, 411.0], [93.6, 414.0], [93.7, 418.0], [93.8, 420.0], [93.9, 423.0], [94.0, 425.0], [94.1, 427.0], [94.2, 430.0], [94.3, 432.0], [94.4, 437.0], [94.5, 440.0], [94.6, 444.0], [94.7, 449.0], [94.8, 452.0], [94.9, 462.0], [95.0, 468.0], [95.1, 471.0], [95.2, 476.0], [95.3, 481.0], [95.4, 485.0], [95.5, 490.0], [95.6, 494.0], [95.7, 498.0], [95.8, 502.0], [95.9, 505.0], [96.0, 509.0], [96.1, 519.0], [96.2, 528.0], [96.3, 531.0], [96.4, 536.0], [96.5, 542.0], [96.6, 547.0], [96.7, 550.0], [96.8, 554.0], [96.9, 559.0], [97.0, 565.0], [97.1, 572.0], [97.2, 576.0], [97.3, 578.0], [97.4, 588.0], [97.5, 597.0], [97.6, 603.0], [97.7, 607.0], [97.8, 612.0], [97.9, 617.0], [98.0, 628.0], [98.1, 633.0], [98.2, 645.0], [98.3, 661.0], [98.4, 675.0], [98.5, 686.0], [98.6, 696.0], [98.7, 704.0], [98.8, 719.0], [98.9, 732.0], [99.0, 760.0], [99.1, 794.0], [99.2, 826.0], [99.3, 892.0], [99.4, 934.0], [99.5, 969.0], [99.6, 1017.0], [99.7, 1046.0], [99.8, 1101.0], [99.9, 1136.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 4891.0, "series": [{"data": [[0.0, 4891.0], [600.0, 81.0], [700.0, 33.0], [200.0, 556.0], [800.0, 16.0], [900.0, 18.0], [1000.0, 15.0], [1100.0, 13.0], [300.0, 304.0], [1200.0, 2.0], [100.0, 906.0], [400.0, 193.0], [500.0, 127.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 302.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6853.0, "series": [{"data": [[0.0, 6853.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 302.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62774125E12, "maxY": 61.70934699103721, "series": [{"data": [[1.62774125E12, 8.8], [1.62774126E12, 2.18941504178273], [1.62774127E12, 3.510144927536231], [1.62774128E12, 3.919338159255427], [1.62774129E12, 5.142419601837665], [1.6277413E12, 13.827203331020131], [1.62774131E12, 61.70934699103721], [1.62774132E12, 35.1702668360864], [1.62774133E12, 1.6666666666666667]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62774133E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 17.258823529411767, "minX": 1.0, "maxY": 996.1379310344829, "series": [{"data": [[2.0, 21.60410094637223], [3.0, 19.431111111111118], [4.0, 24.454631379962173], [5.0, 28.33453237410071], [6.0, 34.61867704280158], [7.0, 33.822014051522224], [8.0, 57.71428571428572], [9.0, 36.25], [10.0, 74.52941176470587], [11.0, 17.258823529411767], [12.0, 83.02777777777784], [13.0, 74.5], [14.0, 91.5095541401274], [15.0, 135.66666666666666], [16.0, 101.74358974358977], [17.0, 99.22222222222223], [18.0, 135.25], [19.0, 121.89932885906039], [20.0, 215.4], [21.0, 91.83333333333333], [22.0, 140.94871794871798], [23.0, 39.411111111111104], [24.0, 105.0], [25.0, 127.6], [26.0, 161.09615384615375], [27.0, 202.8], [28.0, 190.5], [29.0, 138.4], [30.0, 165.85714285714286], [31.0, 188.06707317073176], [32.0, 169.54545454545453], [33.0, 157.25], [34.0, 151.66666666666666], [35.0, 173.625], [36.0, 226.92810457516345], [37.0, 174.0], [38.0, 229.8], [39.0, 189.25], [41.0, 206.0], [42.0, 210.625], [43.0, 271.1676646706587], [44.0, 228.75], [45.0, 230.57142857142858], [46.0, 42.74683544303797], [47.0, 240.28571428571428], [48.0, 233.25], [49.0, 275.6666666666667], [50.0, 266.25], [51.0, 170.5], [52.0, 277.1111111111111], [53.0, 315.8125], [54.0, 297.0], [55.0, 57.0], [56.0, 103.0], [57.0, 304.1428571428571], [58.0, 358.7142857142857], [59.0, 312.20000000000005], [60.0, 310.75], [61.0, 518.4], [62.0, 375.5375000000001], [63.0, 193.25], [64.0, 141.6], [65.0, 225.5], [66.0, 160.5], [67.0, 164.42857142857142], [68.0, 157.0], [69.0, 150.71428571428572], [71.0, 161.0], [70.0, 97.0], [72.0, 154.75], [73.0, 139.33333333333334], [74.0, 168.99999999999997], [75.0, 161.33333333333334], [76.0, 194.72727272727272], [77.0, 133.5], [78.0, 160.66666666666666], [79.0, 212.16666666666669], [80.0, 194.00000000000003], [82.0, 243.5], [83.0, 149.0], [81.0, 70.0], [84.0, 740.7272727272726], [85.0, 996.1379310344829], [86.0, 505.7434210526316], [87.0, 514.1428571428572], [88.0, 415.8333333333333], [89.0, 471.9333333333333], [90.0, 464.62499999999994], [91.0, 450.35714285714283], [92.0, 384.8477801268499], [1.0, 27.05]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}, {"data": [[21.976519916142575, 115.65157232704411]], "isOverall": false, "label": "Healthy Thinking CN-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 92.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 68.4, "minX": 1.62774125E12, "maxY": 5931851.2, "series": [{"data": [[1.62774125E12, 151904.0], [1.62774126E12, 1363338.4], [1.62774127E12, 2620344.0], [1.62774128E12, 3672279.2], [1.62774129E12, 4959665.6], [1.6277413E12, 5472341.6], [1.62774131E12, 5931851.2], [1.62774132E12, 2988711.2], [1.62774133E12, 11392.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62774125E12, 912.0], [1.62774126E12, 8185.2], [1.62774127E12, 15732.0], [1.62774128E12, 22047.6], [1.62774129E12, 29776.8], [1.6277413E12, 32854.8], [1.62774131E12, 35613.6], [1.62774132E12, 17943.6], [1.62774133E12, 68.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62774133E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 21.22028985507244, "minX": 1.62774125E12, "maxY": 358.2592829705508, "series": [{"data": [[1.62774125E12, 107.94999999999999], [1.62774126E12, 24.345403899721465], [1.62774127E12, 21.22028985507244], [1.62774128E12, 23.641158221303], [1.62774129E12, 28.241194486983158], [1.6277413E12, 90.72449687716853], [1.62774131E12, 358.2592829705508], [1.62774132E12, 63.04701397712835], [1.62774133E12, 30.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62774133E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 20.907246376811592, "minX": 1.62774125E12, "maxY": 356.92829705505756, "series": [{"data": [[1.62774125E12, 102.17499999999998], [1.62774126E12, 23.587743732590525], [1.62774127E12, 20.907246376811592], [1.62774128E12, 23.32574974146847], [1.62774129E12, 27.909647779479357], [1.6277413E12, 90.4018043025675], [1.62774131E12, 356.92829705505756], [1.62774132E12, 62.703939008894665], [1.62774133E12, 30.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62774133E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 18.702898550724626, "minX": 1.62774125E12, "maxY": 346.1927016645336, "series": [{"data": [[1.62774125E12, 93.375], [1.62774126E12, 21.16713091922006], [1.62774127E12, 18.702898550724626], [1.62774128E12, 21.050672182006206], [1.62774129E12, 25.32924961715159], [1.6277413E12, 86.00485773768214], [1.62774131E12, 346.1927016645336], [1.62774132E12, 59.41423125794149], [1.62774133E12, 27.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62774133E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.62774125E12, "maxY": 1272.0, "series": [{"data": [[1.62774125E12, 676.0], [1.62774126E12, 108.0], [1.62774127E12, 84.0], [1.62774128E12, 151.0], [1.62774129E12, 324.0], [1.6277413E12, 240.0], [1.62774131E12, 1272.0], [1.62774132E12, 675.0], [1.62774133E12, 46.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62774125E12, 20.0], [1.62774126E12, 12.0], [1.62774127E12, 11.0], [1.62774128E12, 11.0], [1.62774129E12, 11.0], [1.6277413E12, 14.0], [1.62774131E12, 76.0], [1.62774132E12, 10.0], [1.62774133E12, 19.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62774125E12, 184.2], [1.62774126E12, 42.0], [1.62774127E12, 36.0], [1.62774128E12, 40.200000000000045], [1.62774129E12, 46.0], [1.6277413E12, 149.0], [1.62774131E12, 611.4000000000001], [1.62774132E12, 183.0], [1.62774133E12, 46.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62774125E12, 676.0], [1.62774126E12, 83.99999999999989], [1.62774127E12, 69.09000000000003], [1.62774128E12, 74.31999999999994], [1.62774129E12, 62.0], [1.6277413E12, 185.73999999999978], [1.62774131E12, 1095.329999999999], [1.62774132E12, 462.1600000000001], [1.62774133E12, 46.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62774125E12, 186.95], [1.62774126E12, 52.0], [1.62774127E12, 45.44999999999993], [1.62774128E12, 49.0], [1.62774129E12, 52.0], [1.6277413E12, 161.0], [1.62774131E12, 734.5499999999997], [1.62774132E12, 282.5999999999999], [1.62774133E12, 46.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62774133E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 12.0, "minX": 1.0, "maxY": 497.0, "series": [{"data": [[3.0, 78.0], [7.0, 177.0], [13.0, 128.0], [15.0, 15.0], [17.0, 35.0], [21.0, 26.0], [24.0, 25.0], [27.0, 18.0], [28.0, 13.0], [31.0, 16.0], [35.0, 17.0], [37.0, 18.0], [41.0, 19.0], [40.0, 12.0], [43.0, 24.0], [48.0, 28.0], [52.0, 17.0], [54.0, 15.0], [55.0, 12.0], [56.0, 14.0], [59.0, 28.0], [61.0, 16.0], [66.0, 15.0], [64.0, 16.0], [69.0, 12.0], [72.0, 15.5], [74.0, 15.0], [78.0, 28.5], [81.0, 17.0], [80.0, 14.0], [84.0, 21.0], [88.0, 21.0], [90.0, 19.0], [95.0, 18.0], [94.0, 15.0], [97.0, 16.0], [100.0, 15.0], [108.0, 36.0], [109.0, 37.0], [117.0, 25.0], [116.0, 22.0], [123.0, 38.0], [121.0, 34.0], [126.0, 19.0], [127.0, 22.0], [131.0, 19.0], [130.0, 30.0], [135.0, 21.0], [134.0, 70.0], [136.0, 49.0], [143.0, 58.5], [138.0, 226.0], [145.0, 18.0], [147.0, 44.0], [149.0, 178.0], [152.0, 195.0], [153.0, 117.0], [157.0, 181.0], [158.0, 227.5], [162.0, 497.0], [176.0, 150.0], [190.0, 462.5], [1.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 190.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 12.0, "minX": 1.0, "maxY": 496.5, "series": [{"data": [[3.0, 67.0], [7.0, 160.0], [13.0, 126.0], [15.0, 14.0], [17.0, 31.0], [21.0, 24.0], [24.0, 24.0], [27.0, 18.0], [28.0, 13.0], [31.0, 16.0], [35.0, 16.0], [37.0, 18.0], [41.0, 18.0], [40.0, 12.0], [43.0, 23.0], [48.0, 27.0], [52.0, 16.5], [54.0, 14.5], [55.0, 12.0], [56.0, 14.0], [59.0, 28.0], [61.0, 16.0], [66.0, 15.0], [64.0, 16.0], [69.0, 12.0], [72.0, 15.0], [74.0, 14.5], [78.0, 27.5], [81.0, 17.0], [80.0, 14.0], [84.0, 21.0], [88.0, 20.5], [90.0, 19.0], [95.0, 17.0], [94.0, 14.0], [97.0, 16.0], [100.0, 15.0], [108.0, 36.0], [109.0, 37.0], [117.0, 25.0], [116.0, 21.0], [123.0, 37.0], [121.0, 34.0], [126.0, 19.0], [127.0, 22.0], [131.0, 19.0], [130.0, 30.0], [135.0, 20.0], [134.0, 69.0], [136.0, 48.5], [143.0, 58.0], [138.0, 225.0], [145.0, 18.0], [147.0, 44.0], [149.0, 178.0], [152.0, 195.0], [153.0, 117.0], [157.0, 181.0], [158.0, 227.0], [162.0, 496.5], [176.0, 150.0], [190.0, 462.5], [1.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 190.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62774125E12, "maxY": 158.5, "series": [{"data": [[1.62774125E12, 4.0], [1.62774126E12, 36.0], [1.62774127E12, 69.1], [1.62774128E12, 96.8], [1.62774129E12, 130.7], [1.6277413E12, 146.3], [1.62774131E12, 158.5], [1.62774132E12, 73.8], [1.62774133E12, 0.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62774133E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62774125E12, "maxY": 156.2, "series": [{"data": [[1.62774125E12, 4.0], [1.62774126E12, 35.9], [1.62774127E12, 69.0], [1.62774128E12, 96.7], [1.62774129E12, 130.6], [1.6277413E12, 144.1], [1.62774131E12, 156.2], [1.62774132E12, 78.7], [1.62774133E12, 0.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62774133E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62774125E12, "maxY": 156.2, "series": [{"data": [[1.62774125E12, 4.0], [1.62774126E12, 35.9], [1.62774127E12, 69.0], [1.62774128E12, 96.7], [1.62774129E12, 130.6], [1.6277413E12, 144.1], [1.62774131E12, 156.2], [1.62774132E12, 78.7], [1.62774133E12, 0.3]], "isOverall": false, "label": "Healthy Thinking CN-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62774133E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62774125E12, "maxY": 156.2, "series": [{"data": [[1.62774125E12, 4.0], [1.62774126E12, 35.9], [1.62774127E12, 69.0], [1.62774128E12, 96.7], [1.62774129E12, 130.6], [1.6277413E12, 144.1], [1.62774131E12, 156.2], [1.62774132E12, 78.7], [1.62774133E12, 0.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62774133E12, "title": "Total Transactions Per Second"}},
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

