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
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 27764.0, "series": [{"data": [[0.0, 11.0], [0.1, 12.0], [0.2, 12.0], [0.3, 12.0], [0.4, 12.0], [0.5, 12.0], [0.6, 12.0], [0.7, 12.0], [0.8, 13.0], [0.9, 13.0], [1.0, 13.0], [1.1, 13.0], [1.2, 13.0], [1.3, 13.0], [1.4, 14.0], [1.5, 14.0], [1.6, 14.0], [1.7, 15.0], [1.8, 15.0], [1.9, 15.0], [2.0, 16.0], [2.1, 16.0], [2.2, 16.0], [2.3, 16.0], [2.4, 16.0], [2.5, 16.0], [2.6, 17.0], [2.7, 17.0], [2.8, 17.0], [2.9, 17.0], [3.0, 17.0], [3.1, 17.0], [3.2, 17.0], [3.3, 17.0], [3.4, 17.0], [3.5, 17.0], [3.6, 17.0], [3.7, 17.0], [3.8, 18.0], [3.9, 18.0], [4.0, 18.0], [4.1, 18.0], [4.2, 18.0], [4.3, 18.0], [4.4, 18.0], [4.5, 18.0], [4.6, 18.0], [4.7, 18.0], [4.8, 18.0], [4.9, 18.0], [5.0, 18.0], [5.1, 18.0], [5.2, 18.0], [5.3, 19.0], [5.4, 19.0], [5.5, 19.0], [5.6, 19.0], [5.7, 19.0], [5.8, 19.0], [5.9, 19.0], [6.0, 19.0], [6.1, 19.0], [6.2, 19.0], [6.3, 20.0], [6.4, 20.0], [6.5, 20.0], [6.6, 20.0], [6.7, 20.0], [6.8, 20.0], [6.9, 20.0], [7.0, 20.0], [7.1, 21.0], [7.2, 21.0], [7.3, 21.0], [7.4, 21.0], [7.5, 21.0], [7.6, 21.0], [7.7, 21.0], [7.8, 21.0], [7.9, 21.0], [8.0, 21.0], [8.1, 22.0], [8.2, 22.0], [8.3, 22.0], [8.4, 22.0], [8.5, 22.0], [8.6, 22.0], [8.7, 22.0], [8.8, 22.0], [8.9, 22.0], [9.0, 22.0], [9.1, 23.0], [9.2, 23.0], [9.3, 23.0], [9.4, 23.0], [9.5, 23.0], [9.6, 23.0], [9.7, 23.0], [9.8, 23.0], [9.9, 23.0], [10.0, 23.0], [10.1, 23.0], [10.2, 23.0], [10.3, 23.0], [10.4, 23.0], [10.5, 24.0], [10.6, 24.0], [10.7, 24.0], [10.8, 24.0], [10.9, 24.0], [11.0, 24.0], [11.1, 24.0], [11.2, 24.0], [11.3, 24.0], [11.4, 24.0], [11.5, 24.0], [11.6, 24.0], [11.7, 24.0], [11.8, 24.0], [11.9, 25.0], [12.0, 25.0], [12.1, 25.0], [12.2, 25.0], [12.3, 25.0], [12.4, 25.0], [12.5, 25.0], [12.6, 25.0], [12.7, 25.0], [12.8, 25.0], [12.9, 25.0], [13.0, 25.0], [13.1, 26.0], [13.2, 26.0], [13.3, 26.0], [13.4, 26.0], [13.5, 26.0], [13.6, 26.0], [13.7, 26.0], [13.8, 26.0], [13.9, 26.0], [14.0, 27.0], [14.1, 27.0], [14.2, 27.0], [14.3, 27.0], [14.4, 27.0], [14.5, 27.0], [14.6, 27.0], [14.7, 27.0], [14.8, 27.0], [14.9, 27.0], [15.0, 27.0], [15.1, 28.0], [15.2, 28.0], [15.3, 28.0], [15.4, 28.0], [15.5, 28.0], [15.6, 28.0], [15.7, 28.0], [15.8, 28.0], [15.9, 28.0], [16.0, 28.0], [16.1, 28.0], [16.2, 28.0], [16.3, 29.0], [16.4, 29.0], [16.5, 29.0], [16.6, 29.0], [16.7, 29.0], [16.8, 29.0], [16.9, 29.0], [17.0, 29.0], [17.1, 29.0], [17.2, 29.0], [17.3, 30.0], [17.4, 30.0], [17.5, 30.0], [17.6, 30.0], [17.7, 30.0], [17.8, 30.0], [17.9, 30.0], [18.0, 30.0], [18.1, 30.0], [18.2, 30.0], [18.3, 30.0], [18.4, 30.0], [18.5, 30.0], [18.6, 31.0], [18.7, 31.0], [18.8, 31.0], [18.9, 31.0], [19.0, 31.0], [19.1, 31.0], [19.2, 31.0], [19.3, 31.0], [19.4, 31.0], [19.5, 31.0], [19.6, 31.0], [19.7, 31.0], [19.8, 32.0], [19.9, 32.0], [20.0, 32.0], [20.1, 32.0], [20.2, 32.0], [20.3, 32.0], [20.4, 32.0], [20.5, 32.0], [20.6, 32.0], [20.7, 32.0], [20.8, 32.0], [20.9, 32.0], [21.0, 32.0], [21.1, 32.0], [21.2, 32.0], [21.3, 32.0], [21.4, 33.0], [21.5, 33.0], [21.6, 33.0], [21.7, 33.0], [21.8, 33.0], [21.9, 33.0], [22.0, 33.0], [22.1, 33.0], [22.2, 33.0], [22.3, 33.0], [22.4, 33.0], [22.5, 33.0], [22.6, 33.0], [22.7, 33.0], [22.8, 33.0], [22.9, 33.0], [23.0, 34.0], [23.1, 34.0], [23.2, 34.0], [23.3, 34.0], [23.4, 34.0], [23.5, 34.0], [23.6, 34.0], [23.7, 34.0], [23.8, 34.0], [23.9, 34.0], [24.0, 34.0], [24.1, 34.0], [24.2, 34.0], [24.3, 35.0], [24.4, 35.0], [24.5, 35.0], [24.6, 35.0], [24.7, 35.0], [24.8, 35.0], [24.9, 35.0], [25.0, 35.0], [25.1, 35.0], [25.2, 35.0], [25.3, 35.0], [25.4, 35.0], [25.5, 35.0], [25.6, 35.0], [25.7, 35.0], [25.8, 35.0], [25.9, 35.0], [26.0, 36.0], [26.1, 36.0], [26.2, 36.0], [26.3, 36.0], [26.4, 36.0], [26.5, 36.0], [26.6, 36.0], [26.7, 36.0], [26.8, 36.0], [26.9, 36.0], [27.0, 36.0], [27.1, 36.0], [27.2, 36.0], [27.3, 36.0], [27.4, 36.0], [27.5, 37.0], [27.6, 37.0], [27.7, 37.0], [27.8, 37.0], [27.9, 37.0], [28.0, 37.0], [28.1, 37.0], [28.2, 37.0], [28.3, 37.0], [28.4, 37.0], [28.5, 37.0], [28.6, 37.0], [28.7, 37.0], [28.8, 37.0], [28.9, 37.0], [29.0, 37.0], [29.1, 37.0], [29.2, 38.0], [29.3, 38.0], [29.4, 38.0], [29.5, 38.0], [29.6, 38.0], [29.7, 38.0], [29.8, 38.0], [29.9, 38.0], [30.0, 38.0], [30.1, 38.0], [30.2, 38.0], [30.3, 38.0], [30.4, 38.0], [30.5, 38.0], [30.6, 38.0], [30.7, 38.0], [30.8, 39.0], [30.9, 39.0], [31.0, 39.0], [31.1, 39.0], [31.2, 39.0], [31.3, 39.0], [31.4, 39.0], [31.5, 39.0], [31.6, 39.0], [31.7, 39.0], [31.8, 39.0], [31.9, 39.0], [32.0, 39.0], [32.1, 39.0], [32.2, 39.0], [32.3, 39.0], [32.4, 39.0], [32.5, 39.0], [32.6, 40.0], [32.7, 40.0], [32.8, 40.0], [32.9, 40.0], [33.0, 40.0], [33.1, 40.0], [33.2, 40.0], [33.3, 40.0], [33.4, 40.0], [33.5, 40.0], [33.6, 40.0], [33.7, 40.0], [33.8, 40.0], [33.9, 40.0], [34.0, 40.0], [34.1, 40.0], [34.2, 40.0], [34.3, 40.0], [34.4, 40.0], [34.5, 40.0], [34.6, 40.0], [34.7, 41.0], [34.8, 41.0], [34.9, 41.0], [35.0, 41.0], [35.1, 41.0], [35.2, 41.0], [35.3, 41.0], [35.4, 41.0], [35.5, 41.0], [35.6, 41.0], [35.7, 41.0], [35.8, 41.0], [35.9, 41.0], [36.0, 41.0], [36.1, 41.0], [36.2, 41.0], [36.3, 42.0], [36.4, 42.0], [36.5, 42.0], [36.6, 42.0], [36.7, 42.0], [36.8, 42.0], [36.9, 42.0], [37.0, 42.0], [37.1, 42.0], [37.2, 42.0], [37.3, 42.0], [37.4, 42.0], [37.5, 42.0], [37.6, 42.0], [37.7, 42.0], [37.8, 42.0], [37.9, 42.0], [38.0, 42.0], [38.1, 42.0], [38.2, 43.0], [38.3, 43.0], [38.4, 43.0], [38.5, 43.0], [38.6, 43.0], [38.7, 43.0], [38.8, 43.0], [38.9, 43.0], [39.0, 43.0], [39.1, 43.0], [39.2, 43.0], [39.3, 43.0], [39.4, 43.0], [39.5, 43.0], [39.6, 43.0], [39.7, 43.0], [39.8, 43.0], [39.9, 43.0], [40.0, 44.0], [40.1, 44.0], [40.2, 44.0], [40.3, 44.0], [40.4, 44.0], [40.5, 44.0], [40.6, 44.0], [40.7, 44.0], [40.8, 44.0], [40.9, 44.0], [41.0, 44.0], [41.1, 44.0], [41.2, 44.0], [41.3, 44.0], [41.4, 44.0], [41.5, 44.0], [41.6, 44.0], [41.7, 44.0], [41.8, 45.0], [41.9, 45.0], [42.0, 45.0], [42.1, 45.0], [42.2, 45.0], [42.3, 45.0], [42.4, 45.0], [42.5, 45.0], [42.6, 45.0], [42.7, 45.0], [42.8, 45.0], [42.9, 45.0], [43.0, 45.0], [43.1, 45.0], [43.2, 45.0], [43.3, 45.0], [43.4, 45.0], [43.5, 45.0], [43.6, 46.0], [43.7, 46.0], [43.8, 46.0], [43.9, 46.0], [44.0, 46.0], [44.1, 46.0], [44.2, 46.0], [44.3, 46.0], [44.4, 46.0], [44.5, 46.0], [44.6, 46.0], [44.7, 46.0], [44.8, 46.0], [44.9, 46.0], [45.0, 46.0], [45.1, 46.0], [45.2, 47.0], [45.3, 47.0], [45.4, 47.0], [45.5, 47.0], [45.6, 47.0], [45.7, 47.0], [45.8, 47.0], [45.9, 47.0], [46.0, 47.0], [46.1, 47.0], [46.2, 47.0], [46.3, 47.0], [46.4, 47.0], [46.5, 47.0], [46.6, 47.0], [46.7, 47.0], [46.8, 47.0], [46.9, 47.0], [47.0, 47.0], [47.1, 47.0], [47.2, 47.0], [47.3, 48.0], [47.4, 48.0], [47.5, 48.0], [47.6, 48.0], [47.7, 48.0], [47.8, 48.0], [47.9, 48.0], [48.0, 48.0], [48.1, 48.0], [48.2, 48.0], [48.3, 48.0], [48.4, 48.0], [48.5, 48.0], [48.6, 48.0], [48.7, 48.0], [48.8, 48.0], [48.9, 48.0], [49.0, 48.0], [49.1, 48.0], [49.2, 48.0], [49.3, 48.0], [49.4, 49.0], [49.5, 49.0], [49.6, 49.0], [49.7, 49.0], [49.8, 49.0], [49.9, 49.0], [50.0, 49.0], [50.1, 49.0], [50.2, 49.0], [50.3, 49.0], [50.4, 49.0], [50.5, 49.0], [50.6, 49.0], [50.7, 49.0], [50.8, 49.0], [50.9, 49.0], [51.0, 49.0], [51.1, 49.0], [51.2, 50.0], [51.3, 50.0], [51.4, 50.0], [51.5, 50.0], [51.6, 50.0], [51.7, 50.0], [51.8, 50.0], [51.9, 50.0], [52.0, 50.0], [52.1, 50.0], [52.2, 50.0], [52.3, 50.0], [52.4, 50.0], [52.5, 50.0], [52.6, 50.0], [52.7, 50.0], [52.8, 50.0], [52.9, 50.0], [53.0, 51.0], [53.1, 51.0], [53.2, 51.0], [53.3, 51.0], [53.4, 51.0], [53.5, 51.0], [53.6, 51.0], [53.7, 51.0], [53.8, 51.0], [53.9, 51.0], [54.0, 51.0], [54.1, 51.0], [54.2, 51.0], [54.3, 51.0], [54.4, 51.0], [54.5, 51.0], [54.6, 51.0], [54.7, 51.0], [54.8, 51.0], [54.9, 52.0], [55.0, 52.0], [55.1, 52.0], [55.2, 52.0], [55.3, 52.0], [55.4, 52.0], [55.5, 52.0], [55.6, 52.0], [55.7, 52.0], [55.8, 52.0], [55.9, 52.0], [56.0, 52.0], [56.1, 52.0], [56.2, 52.0], [56.3, 52.0], [56.4, 52.0], [56.5, 52.0], [56.6, 52.0], [56.7, 52.0], [56.8, 53.0], [56.9, 53.0], [57.0, 53.0], [57.1, 53.0], [57.2, 53.0], [57.3, 53.0], [57.4, 53.0], [57.5, 53.0], [57.6, 53.0], [57.7, 53.0], [57.8, 53.0], [57.9, 53.0], [58.0, 53.0], [58.1, 53.0], [58.2, 53.0], [58.3, 53.0], [58.4, 54.0], [58.5, 54.0], [58.6, 54.0], [58.7, 54.0], [58.8, 54.0], [58.9, 54.0], [59.0, 54.0], [59.1, 54.0], [59.2, 54.0], [59.3, 54.0], [59.4, 54.0], [59.5, 54.0], [59.6, 54.0], [59.7, 54.0], [59.8, 54.0], [59.9, 54.0], [60.0, 54.0], [60.1, 55.0], [60.2, 55.0], [60.3, 55.0], [60.4, 55.0], [60.5, 55.0], [60.6, 55.0], [60.7, 55.0], [60.8, 55.0], [60.9, 55.0], [61.0, 55.0], [61.1, 55.0], [61.2, 55.0], [61.3, 55.0], [61.4, 55.0], [61.5, 55.0], [61.6, 55.0], [61.7, 55.0], [61.8, 55.0], [61.9, 55.0], [62.0, 55.0], [62.1, 55.0], [62.2, 55.0], [62.3, 55.0], [62.4, 56.0], [62.5, 56.0], [62.6, 56.0], [62.7, 56.0], [62.8, 56.0], [62.9, 56.0], [63.0, 56.0], [63.1, 56.0], [63.2, 56.0], [63.3, 56.0], [63.4, 56.0], [63.5, 56.0], [63.6, 56.0], [63.7, 56.0], [63.8, 56.0], [63.9, 56.0], [64.0, 56.0], [64.1, 56.0], [64.2, 56.0], [64.3, 57.0], [64.4, 57.0], [64.5, 57.0], [64.6, 57.0], [64.7, 57.0], [64.8, 57.0], [64.9, 57.0], [65.0, 57.0], [65.1, 57.0], [65.2, 57.0], [65.3, 57.0], [65.4, 57.0], [65.5, 57.0], [65.6, 57.0], [65.7, 57.0], [65.8, 57.0], [65.9, 57.0], [66.0, 58.0], [66.1, 58.0], [66.2, 58.0], [66.3, 58.0], [66.4, 58.0], [66.5, 58.0], [66.6, 58.0], [66.7, 58.0], [66.8, 58.0], [66.9, 58.0], [67.0, 58.0], [67.1, 58.0], [67.2, 58.0], [67.3, 58.0], [67.4, 58.0], [67.5, 58.0], [67.6, 58.0], [67.7, 58.0], [67.8, 59.0], [67.9, 59.0], [68.0, 59.0], [68.1, 59.0], [68.2, 59.0], [68.3, 59.0], [68.4, 59.0], [68.5, 59.0], [68.6, 59.0], [68.7, 59.0], [68.8, 59.0], [68.9, 59.0], [69.0, 59.0], [69.1, 59.0], [69.2, 59.0], [69.3, 59.0], [69.4, 59.0], [69.5, 60.0], [69.6, 60.0], [69.7, 60.0], [69.8, 60.0], [69.9, 60.0], [70.0, 60.0], [70.1, 60.0], [70.2, 60.0], [70.3, 60.0], [70.4, 60.0], [70.5, 60.0], [70.6, 60.0], [70.7, 60.0], [70.8, 60.0], [70.9, 60.0], [71.0, 60.0], [71.1, 60.0], [71.2, 60.0], [71.3, 60.0], [71.4, 61.0], [71.5, 61.0], [71.6, 61.0], [71.7, 61.0], [71.8, 61.0], [71.9, 61.0], [72.0, 61.0], [72.1, 61.0], [72.2, 61.0], [72.3, 61.0], [72.4, 61.0], [72.5, 61.0], [72.6, 61.0], [72.7, 61.0], [72.8, 61.0], [72.9, 61.0], [73.0, 62.0], [73.1, 62.0], [73.2, 62.0], [73.3, 62.0], [73.4, 62.0], [73.5, 62.0], [73.6, 62.0], [73.7, 62.0], [73.8, 62.0], [73.9, 62.0], [74.0, 62.0], [74.1, 62.0], [74.2, 62.0], [74.3, 62.0], [74.4, 63.0], [74.5, 63.0], [74.6, 63.0], [74.7, 63.0], [74.8, 63.0], [74.9, 63.0], [75.0, 63.0], [75.1, 63.0], [75.2, 63.0], [75.3, 63.0], [75.4, 63.0], [75.5, 63.0], [75.6, 63.0], [75.7, 63.0], [75.8, 63.0], [75.9, 63.0], [76.0, 63.0], [76.1, 63.0], [76.2, 63.0], [76.3, 63.0], [76.4, 63.0], [76.5, 63.0], [76.6, 64.0], [76.7, 64.0], [76.8, 64.0], [76.9, 64.0], [77.0, 64.0], [77.1, 64.0], [77.2, 64.0], [77.3, 64.0], [77.4, 64.0], [77.5, 64.0], [77.6, 64.0], [77.7, 64.0], [77.8, 64.0], [77.9, 64.0], [78.0, 64.0], [78.1, 65.0], [78.2, 65.0], [78.3, 65.0], [78.4, 65.0], [78.5, 65.0], [78.6, 65.0], [78.7, 65.0], [78.8, 65.0], [78.9, 65.0], [79.0, 65.0], [79.1, 65.0], [79.2, 65.0], [79.3, 65.0], [79.4, 65.0], [79.5, 66.0], [79.6, 66.0], [79.7, 66.0], [79.8, 66.0], [79.9, 66.0], [80.0, 66.0], [80.1, 66.0], [80.2, 66.0], [80.3, 66.0], [80.4, 66.0], [80.5, 66.0], [80.6, 66.0], [80.7, 66.0], [80.8, 66.0], [80.9, 67.0], [81.0, 67.0], [81.1, 67.0], [81.2, 67.0], [81.3, 67.0], [81.4, 67.0], [81.5, 67.0], [81.6, 67.0], [81.7, 67.0], [81.8, 67.0], [81.9, 67.0], [82.0, 67.0], [82.1, 67.0], [82.2, 67.0], [82.3, 67.0], [82.4, 67.0], [82.5, 68.0], [82.6, 68.0], [82.7, 68.0], [82.8, 68.0], [82.9, 68.0], [83.0, 68.0], [83.1, 68.0], [83.2, 68.0], [83.3, 68.0], [83.4, 68.0], [83.5, 68.0], [83.6, 68.0], [83.7, 68.0], [83.8, 69.0], [83.9, 69.0], [84.0, 69.0], [84.1, 69.0], [84.2, 69.0], [84.3, 69.0], [84.4, 69.0], [84.5, 69.0], [84.6, 69.0], [84.7, 69.0], [84.8, 69.0], [84.9, 69.0], [85.0, 69.0], [85.1, 69.0], [85.2, 70.0], [85.3, 70.0], [85.4, 70.0], [85.5, 70.0], [85.6, 70.0], [85.7, 70.0], [85.8, 70.0], [85.9, 70.0], [86.0, 70.0], [86.1, 70.0], [86.2, 70.0], [86.3, 71.0], [86.4, 71.0], [86.5, 71.0], [86.6, 71.0], [86.7, 71.0], [86.8, 71.0], [86.9, 71.0], [87.0, 71.0], [87.1, 71.0], [87.2, 71.0], [87.3, 71.0], [87.4, 71.0], [87.5, 72.0], [87.6, 72.0], [87.7, 72.0], [87.8, 72.0], [87.9, 72.0], [88.0, 72.0], [88.1, 72.0], [88.2, 73.0], [88.3, 73.0], [88.4, 73.0], [88.5, 73.0], [88.6, 73.0], [88.7, 73.0], [88.8, 73.0], [88.9, 73.0], [89.0, 73.0], [89.1, 74.0], [89.2, 74.0], [89.3, 74.0], [89.4, 74.0], [89.5, 74.0], [89.6, 74.0], [89.7, 74.0], [89.8, 74.0], [89.9, 74.0], [90.0, 75.0], [90.1, 75.0], [90.2, 75.0], [90.3, 75.0], [90.4, 75.0], [90.5, 75.0], [90.6, 75.0], [90.7, 76.0], [90.8, 76.0], [90.9, 76.0], [91.0, 76.0], [91.1, 76.0], [91.2, 76.0], [91.3, 77.0], [91.4, 77.0], [91.5, 77.0], [91.6, 77.0], [91.7, 77.0], [91.8, 77.0], [91.9, 78.0], [92.0, 78.0], [92.1, 78.0], [92.2, 78.0], [92.3, 78.0], [92.4, 79.0], [92.5, 79.0], [92.6, 79.0], [92.7, 79.0], [92.8, 79.0], [92.9, 79.0], [93.0, 79.0], [93.1, 79.0], [93.2, 79.0], [93.3, 80.0], [93.4, 80.0], [93.5, 80.0], [93.6, 80.0], [93.7, 81.0], [93.8, 81.0], [93.9, 81.0], [94.0, 81.0], [94.1, 82.0], [94.2, 82.0], [94.3, 82.0], [94.4, 82.0], [94.5, 83.0], [94.6, 83.0], [94.7, 83.0], [94.8, 83.0], [94.9, 84.0], [95.0, 84.0], [95.1, 84.0], [95.2, 84.0], [95.3, 84.0], [95.4, 85.0], [95.5, 85.0], [95.6, 85.0], [95.7, 85.0], [95.8, 85.0], [95.9, 86.0], [96.0, 86.0], [96.1, 86.0], [96.2, 87.0], [96.3, 87.0], [96.4, 87.0], [96.5, 88.0], [96.6, 88.0], [96.7, 88.0], [96.8, 88.0], [96.9, 88.0], [97.0, 89.0], [97.1, 90.0], [97.2, 90.0], [97.3, 91.0], [97.4, 91.0], [97.5, 91.0], [97.6, 92.0], [97.7, 92.0], [97.8, 93.0], [97.9, 93.0], [98.0, 94.0], [98.1, 95.0], [98.2, 96.0], [98.3, 98.0], [98.4, 99.0], [98.5, 100.0], [98.6, 101.0], [98.7, 102.0], [98.8, 103.0], [98.9, 106.0], [99.0, 109.0], [99.1, 112.0], [99.2, 115.0], [99.3, 118.0], [99.4, 123.0], [99.5, 133.0], [99.6, 144.0], [99.7, 7195.0], [99.8, 14513.0], [99.9, 21609.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 5698.0, "series": [{"data": [[0.0, 5698.0], [10300.0, 1.0], [10500.0, 1.0], [11500.0, 1.0], [200.0, 1.0], [14500.0, 2.0], [17200.0, 1.0], [17400.0, 1.0], [18000.0, 1.0], [20600.0, 1.0], [21600.0, 1.0], [23800.0, 1.0], [23900.0, 1.0], [24500.0, 1.0], [100.0, 69.0], [26700.0, 1.0], [7100.0, 2.0], [7000.0, 1.0], [27700.0, 1.0], [7300.0, 1.0], [7800.0, 1.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 27700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5767.0, "series": [{"data": [[0.0, 5767.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.62775058E12, "maxY": 20.0, "series": [{"data": [[1.62775058E12, 20.0], [1.62775059E12, 16.0], [1.6277506E12, 9.0], [1.62775061E12, 9.821180555555562], [1.62775062E12, 9.010196649672245], [1.62775063E12, 9.894830659536552], [1.62775064E12, 11.14303030303031], [1.62775065E12, 3.9102040816326533], [1.62775066E12, 3.0]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62775066E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 63.332305319969294, "minX": 2.0, "maxY": 11997.5, "series": [{"data": [[8.0, 214.34146341463403], [2.0, 1057.6153846153843], [9.0, 110.93167701863354], [10.0, 75.4729119638826], [11.0, 63.332305319969294], [12.0, 75.22941176470586], [3.0, 83.3667546174143], [13.0, 130.05291005290994], [14.0, 78.25354969574036], [15.0, 10300.0], [16.0, 7871.0], [4.0, 11997.5], [17.0, 7050.0], [18.0, 7318.0], [19.0, 7156.0], [20.0, 7195.0], [5.0, 221.6030534351145], [6.0, 118.20350877192998], [7.0, 64.35652173913049]], "isOverall": false, "label": "Press Release", "isController": false}, {"data": [[9.526952315134768, 104.53800967518953]], "isOverall": false, "label": "Press Release-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 16.5, "minX": 1.62775058E12, "maxY": 7022990.7, "series": [{"data": [[1.62775058E12, 4175.2], [1.62775059E12, 29218.0], [1.6277506E12, 29221.8], [1.62775061E12, 2403516.9], [1.62775062E12, 5729337.3], [1.62775063E12, 7022990.7], [1.62775064E12, 6881537.0], [1.62775065E12, 2044721.0], [1.62775066E12, 4172.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62775058E12, 16.5], [1.62775059E12, 115.5], [1.6277506E12, 115.5], [1.62775061E12, 9504.0], [1.62775062E12, 22654.5], [1.62775063E12, 27769.5], [1.62775064E12, 27208.5], [1.62775065E12, 8085.0], [1.62775066E12, 16.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62775066E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 19.77755102040815, "minX": 1.62775058E12, "maxY": 17710.85714285714, "series": [{"data": [[1.62775058E12, 7195.0], [1.62775059E12, 8836.142857142857], [1.6277506E12, 17710.85714285714], [1.62775061E12, 285.79340277777806], [1.62775062E12, 51.836853605243924], [1.62775063E12, 45.70291146761733], [1.62775064E12, 54.312121212121234], [1.62775065E12, 19.77755102040815], [1.62775066E12, 29.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62775066E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 19.222448979591828, "minX": 1.62775058E12, "maxY": 17652.857142857145, "series": [{"data": [[1.62775058E12, 7116.0], [1.62775059E12, 8730.714285714286], [1.6277506E12, 17652.857142857145], [1.62775061E12, 283.55208333333303], [1.62775062E12, 50.37290604515659], [1.62775063E12, 45.33749257278665], [1.62775064E12, 53.69151515151518], [1.62775065E12, 19.222448979591828], [1.62775066E12, 29.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62775066E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 16.18571428571428, "minX": 1.62775058E12, "maxY": 555.0, "series": [{"data": [[1.62775058E12, 555.0], [1.62775059E12, 101.71428571428571], [1.6277506E12, 63.42857142857143], [1.62775061E12, 58.303819444444436], [1.62775062E12, 45.78659868900224], [1.62775063E12, 42.06714200831843], [1.62775064E12, 49.42181818181817], [1.62775065E12, 16.18571428571428], [1.62775066E12, 26.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62775066E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.62775058E12, "maxY": 27764.0, "series": [{"data": [[1.62775058E12, 7195.0], [1.62775059E12, 11570.0], [1.6277506E12, 21609.0], [1.62775061E12, 27764.0], [1.62775062E12, 144.0], [1.62775063E12, 101.0], [1.62775064E12, 138.0], [1.62775065E12, 49.0], [1.62775066E12, 29.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62775058E12, 7195.0], [1.62775059E12, 7050.0], [1.6277506E12, 14513.0], [1.62775061E12, 16.0], [1.62775062E12, 14.0], [1.62775063E12, 13.0], [1.62775064E12, 14.0], [1.62775065E12, 11.0], [1.62775066E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62775058E12, 7195.0], [1.62775059E12, 11570.0], [1.6277506E12, 21609.0], [1.62775061E12, 90.30000000000007], [1.62775062E12, 74.0], [1.62775063E12, 65.0], [1.62775064E12, 73.0], [1.62775065E12, 27.0], [1.62775066E12, 29.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62775058E12, 7195.0], [1.62775059E12, 11570.0], [1.6277506E12, 21609.0], [1.62775061E12, 5648.6400000004305], [1.62775062E12, 101.0], [1.62775063E12, 86.16000000000008], [1.62775064E12, 109.0], [1.62775065E12, 42.0], [1.62775066E12, 29.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62775058E12, 7195.0], [1.62775059E12, 11570.0], [1.6277506E12, 21609.0], [1.62775061E12, 100.14999999999998], [1.62775062E12, 80.0], [1.62775063E12, 72.0], [1.62775064E12, 83.0], [1.62775065E12, 30.0], [1.62775066E12, 29.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62775066E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 17.0, "minX": 1.0, "maxY": 13910.0, "series": [{"data": [[2.0, 13910.0], [41.0, 18.0], [55.0, 17.0], [68.0, 17.5], [81.0, 19.0], [86.0, 75.5], [94.0, 18.0], [107.0, 82.0], [108.0, 23.0], [115.0, 76.0], [117.0, 47.0], [119.0, 52.0], [120.0, 43.5], [123.0, 37.0], [125.0, 48.0], [129.0, 60.0], [135.0, 57.0], [134.0, 33.0], [147.0, 62.0], [148.0, 41.5], [149.0, 38.5], [159.0, 37.0], [160.0, 47.0], [161.0, 41.0], [162.0, 42.0], [166.0, 40.0], [174.0, 57.0], [173.0, 50.0], [178.0, 42.5], [176.0, 43.0], [179.0, 53.0], [183.0, 58.0], [181.0, 67.5], [184.0, 63.0], [14.0, 20.0], [1.0, 13041.5], [20.0, 27.0], [28.0, 19.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[149.0, 30.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 184.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 13879.5, "series": [{"data": [[2.0, 13879.5], [41.0, 17.0], [55.0, 16.0], [68.0, 17.0], [81.0, 18.0], [86.0, 74.0], [94.0, 18.0], [107.0, 81.0], [108.0, 22.0], [115.0, 74.0], [117.0, 46.0], [119.0, 50.0], [120.0, 42.0], [123.0, 36.0], [125.0, 46.0], [129.0, 58.0], [135.0, 54.0], [134.0, 31.0], [147.0, 60.5], [148.0, 40.0], [149.0, 38.0], [159.0, 36.0], [160.0, 46.0], [161.0, 41.0], [162.0, 42.0], [166.0, 40.0], [174.0, 57.0], [173.0, 50.0], [178.0, 42.5], [176.0, 43.0], [179.0, 52.0], [183.0, 57.0], [181.0, 67.0], [184.0, 63.0], [14.0, 20.0], [1.0, 12984.0], [20.0, 26.0], [28.0, 18.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[149.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 184.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.62775058E12, "maxY": 168.6, "series": [{"data": [[1.62775058E12, 2.0], [1.62775061E12, 57.6], [1.62775062E12, 137.4], [1.62775063E12, 168.6], [1.62775064E12, 164.4], [1.62775065E12, 48.7], [1.62775066E12, 0.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62775066E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.62775058E12, "maxY": 168.3, "series": [{"data": [[1.62775064E12, 0.1]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLException", "isController": false}, {"data": [[1.62775058E12, 0.1], [1.62775059E12, 0.7], [1.6277506E12, 0.7], [1.62775061E12, 57.6], [1.62775062E12, 137.3], [1.62775063E12, 168.3], [1.62775064E12, 164.9], [1.62775065E12, 49.0], [1.62775066E12, 0.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62775066E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.62775058E12, "maxY": 168.3, "series": [{"data": [[1.62775064E12, 0.1]], "isOverall": false, "label": "Press Release-failure", "isController": false}, {"data": [[1.62775058E12, 0.1], [1.62775059E12, 0.7], [1.6277506E12, 0.7], [1.62775061E12, 57.6], [1.62775062E12, 137.3], [1.62775063E12, 168.3], [1.62775064E12, 164.9], [1.62775065E12, 49.0], [1.62775066E12, 0.1]], "isOverall": false, "label": "Press Release-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62775066E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.62775058E12, "maxY": 168.3, "series": [{"data": [[1.62775058E12, 0.1], [1.62775059E12, 0.7], [1.6277506E12, 0.7], [1.62775061E12, 57.6], [1.62775062E12, 137.3], [1.62775063E12, 168.3], [1.62775064E12, 164.9], [1.62775065E12, 49.0], [1.62775066E12, 0.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62775064E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62775066E12, "title": "Total Transactions Per Second"}},
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

