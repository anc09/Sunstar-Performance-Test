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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 5613.0, "series": [{"data": [[0.0, 8.0], [0.1, 8.0], [0.2, 9.0], [0.3, 9.0], [0.4, 9.0], [0.5, 9.0], [0.6, 9.0], [0.7, 9.0], [0.8, 9.0], [0.9, 9.0], [1.0, 9.0], [1.1, 9.0], [1.2, 9.0], [1.3, 9.0], [1.4, 9.0], [1.5, 9.0], [1.6, 9.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 9.0], [2.3, 10.0], [2.4, 10.0], [2.5, 10.0], [2.6, 10.0], [2.7, 10.0], [2.8, 10.0], [2.9, 10.0], [3.0, 10.0], [3.1, 10.0], [3.2, 10.0], [3.3, 10.0], [3.4, 10.0], [3.5, 10.0], [3.6, 10.0], [3.7, 10.0], [3.8, 10.0], [3.9, 10.0], [4.0, 10.0], [4.1, 10.0], [4.2, 10.0], [4.3, 10.0], [4.4, 10.0], [4.5, 10.0], [4.6, 10.0], [4.7, 10.0], [4.8, 10.0], [4.9, 10.0], [5.0, 10.0], [5.1, 10.0], [5.2, 10.0], [5.3, 10.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 10.0], [6.2, 10.0], [6.3, 10.0], [6.4, 10.0], [6.5, 11.0], [6.6, 11.0], [6.7, 11.0], [6.8, 11.0], [6.9, 11.0], [7.0, 11.0], [7.1, 11.0], [7.2, 11.0], [7.3, 11.0], [7.4, 11.0], [7.5, 11.0], [7.6, 11.0], [7.7, 11.0], [7.8, 11.0], [7.9, 11.0], [8.0, 11.0], [8.1, 11.0], [8.2, 11.0], [8.3, 11.0], [8.4, 11.0], [8.5, 11.0], [8.6, 11.0], [8.7, 11.0], [8.8, 11.0], [8.9, 11.0], [9.0, 11.0], [9.1, 11.0], [9.2, 11.0], [9.3, 11.0], [9.4, 11.0], [9.5, 11.0], [9.6, 11.0], [9.7, 11.0], [9.8, 11.0], [9.9, 11.0], [10.0, 11.0], [10.1, 11.0], [10.2, 11.0], [10.3, 12.0], [10.4, 12.0], [10.5, 12.0], [10.6, 12.0], [10.7, 12.0], [10.8, 12.0], [10.9, 12.0], [11.0, 12.0], [11.1, 12.0], [11.2, 12.0], [11.3, 12.0], [11.4, 12.0], [11.5, 12.0], [11.6, 12.0], [11.7, 12.0], [11.8, 12.0], [11.9, 12.0], [12.0, 12.0], [12.1, 12.0], [12.2, 12.0], [12.3, 12.0], [12.4, 12.0], [12.5, 12.0], [12.6, 12.0], [12.7, 12.0], [12.8, 12.0], [12.9, 12.0], [13.0, 12.0], [13.1, 12.0], [13.2, 12.0], [13.3, 12.0], [13.4, 12.0], [13.5, 12.0], [13.6, 12.0], [13.7, 12.0], [13.8, 12.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 13.0], [14.7, 13.0], [14.8, 13.0], [14.9, 13.0], [15.0, 13.0], [15.1, 13.0], [15.2, 13.0], [15.3, 13.0], [15.4, 13.0], [15.5, 13.0], [15.6, 13.0], [15.7, 13.0], [15.8, 13.0], [15.9, 13.0], [16.0, 13.0], [16.1, 13.0], [16.2, 13.0], [16.3, 13.0], [16.4, 13.0], [16.5, 13.0], [16.6, 13.0], [16.7, 13.0], [16.8, 13.0], [16.9, 13.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 13.0], [17.6, 13.0], [17.7, 13.0], [17.8, 13.0], [17.9, 13.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 13.0], [19.7, 13.0], [19.8, 13.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 14.0], [24.2, 14.0], [24.3, 14.0], [24.4, 14.0], [24.5, 14.0], [24.6, 14.0], [24.7, 14.0], [24.8, 14.0], [24.9, 14.0], [25.0, 14.0], [25.1, 14.0], [25.2, 14.0], [25.3, 14.0], [25.4, 14.0], [25.5, 14.0], [25.6, 14.0], [25.7, 14.0], [25.8, 14.0], [25.9, 14.0], [26.0, 14.0], [26.1, 14.0], [26.2, 14.0], [26.3, 14.0], [26.4, 14.0], [26.5, 14.0], [26.6, 14.0], [26.7, 14.0], [26.8, 14.0], [26.9, 14.0], [27.0, 14.0], [27.1, 14.0], [27.2, 15.0], [27.3, 15.0], [27.4, 15.0], [27.5, 15.0], [27.6, 15.0], [27.7, 15.0], [27.8, 15.0], [27.9, 15.0], [28.0, 15.0], [28.1, 15.0], [28.2, 15.0], [28.3, 15.0], [28.4, 15.0], [28.5, 15.0], [28.6, 15.0], [28.7, 15.0], [28.8, 15.0], [28.9, 15.0], [29.0, 15.0], [29.1, 15.0], [29.2, 15.0], [29.3, 15.0], [29.4, 15.0], [29.5, 15.0], [29.6, 15.0], [29.7, 15.0], [29.8, 15.0], [29.9, 15.0], [30.0, 15.0], [30.1, 15.0], [30.2, 15.0], [30.3, 15.0], [30.4, 15.0], [30.5, 15.0], [30.6, 15.0], [30.7, 15.0], [30.8, 16.0], [30.9, 16.0], [31.0, 16.0], [31.1, 16.0], [31.2, 16.0], [31.3, 16.0], [31.4, 16.0], [31.5, 16.0], [31.6, 16.0], [31.7, 16.0], [31.8, 16.0], [31.9, 16.0], [32.0, 16.0], [32.1, 16.0], [32.2, 16.0], [32.3, 16.0], [32.4, 16.0], [32.5, 16.0], [32.6, 16.0], [32.7, 16.0], [32.8, 16.0], [32.9, 16.0], [33.0, 16.0], [33.1, 16.0], [33.2, 16.0], [33.3, 16.0], [33.4, 16.0], [33.5, 16.0], [33.6, 16.0], [33.7, 16.0], [33.8, 17.0], [33.9, 17.0], [34.0, 17.0], [34.1, 17.0], [34.2, 17.0], [34.3, 17.0], [34.4, 17.0], [34.5, 17.0], [34.6, 17.0], [34.7, 17.0], [34.8, 17.0], [34.9, 17.0], [35.0, 17.0], [35.1, 17.0], [35.2, 17.0], [35.3, 17.0], [35.4, 17.0], [35.5, 17.0], [35.6, 17.0], [35.7, 17.0], [35.8, 17.0], [35.9, 17.0], [36.0, 17.0], [36.1, 18.0], [36.2, 18.0], [36.3, 18.0], [36.4, 18.0], [36.5, 18.0], [36.6, 18.0], [36.7, 18.0], [36.8, 18.0], [36.9, 18.0], [37.0, 18.0], [37.1, 18.0], [37.2, 18.0], [37.3, 18.0], [37.4, 18.0], [37.5, 18.0], [37.6, 18.0], [37.7, 18.0], [37.8, 18.0], [37.9, 18.0], [38.0, 18.0], [38.1, 18.0], [38.2, 18.0], [38.3, 18.0], [38.4, 18.0], [38.5, 18.0], [38.6, 18.0], [38.7, 18.0], [38.8, 18.0], [38.9, 19.0], [39.0, 19.0], [39.1, 19.0], [39.2, 19.0], [39.3, 19.0], [39.4, 19.0], [39.5, 19.0], [39.6, 19.0], [39.7, 19.0], [39.8, 19.0], [39.9, 19.0], [40.0, 19.0], [40.1, 19.0], [40.2, 19.0], [40.3, 19.0], [40.4, 19.0], [40.5, 19.0], [40.6, 19.0], [40.7, 19.0], [40.8, 19.0], [40.9, 19.0], [41.0, 19.0], [41.1, 19.0], [41.2, 19.0], [41.3, 19.0], [41.4, 19.0], [41.5, 19.0], [41.6, 19.0], [41.7, 19.0], [41.8, 19.0], [41.9, 19.0], [42.0, 19.0], [42.1, 19.0], [42.2, 19.0], [42.3, 19.0], [42.4, 19.0], [42.5, 19.0], [42.6, 19.0], [42.7, 19.0], [42.8, 19.0], [42.9, 19.0], [43.0, 19.0], [43.1, 19.0], [43.2, 19.0], [43.3, 19.0], [43.4, 19.0], [43.5, 20.0], [43.6, 20.0], [43.7, 20.0], [43.8, 20.0], [43.9, 20.0], [44.0, 20.0], [44.1, 20.0], [44.2, 20.0], [44.3, 20.0], [44.4, 20.0], [44.5, 20.0], [44.6, 20.0], [44.7, 20.0], [44.8, 20.0], [44.9, 20.0], [45.0, 20.0], [45.1, 20.0], [45.2, 20.0], [45.3, 20.0], [45.4, 20.0], [45.5, 20.0], [45.6, 20.0], [45.7, 20.0], [45.8, 20.0], [45.9, 20.0], [46.0, 20.0], [46.1, 20.0], [46.2, 20.0], [46.3, 20.0], [46.4, 20.0], [46.5, 20.0], [46.6, 20.0], [46.7, 20.0], [46.8, 20.0], [46.9, 20.0], [47.0, 20.0], [47.1, 20.0], [47.2, 20.0], [47.3, 20.0], [47.4, 20.0], [47.5, 20.0], [47.6, 20.0], [47.7, 20.0], [47.8, 20.0], [47.9, 20.0], [48.0, 20.0], [48.1, 20.0], [48.2, 20.0], [48.3, 20.0], [48.4, 21.0], [48.5, 21.0], [48.6, 21.0], [48.7, 21.0], [48.8, 21.0], [48.9, 21.0], [49.0, 21.0], [49.1, 21.0], [49.2, 21.0], [49.3, 21.0], [49.4, 21.0], [49.5, 21.0], [49.6, 21.0], [49.7, 21.0], [49.8, 21.0], [49.9, 21.0], [50.0, 21.0], [50.1, 21.0], [50.2, 21.0], [50.3, 21.0], [50.4, 21.0], [50.5, 21.0], [50.6, 21.0], [50.7, 21.0], [50.8, 21.0], [50.9, 21.0], [51.0, 21.0], [51.1, 21.0], [51.2, 21.0], [51.3, 21.0], [51.4, 21.0], [51.5, 21.0], [51.6, 21.0], [51.7, 21.0], [51.8, 21.0], [51.9, 21.0], [52.0, 21.0], [52.1, 21.0], [52.2, 22.0], [52.3, 22.0], [52.4, 22.0], [52.5, 22.0], [52.6, 22.0], [52.7, 22.0], [52.8, 22.0], [52.9, 22.0], [53.0, 22.0], [53.1, 22.0], [53.2, 22.0], [53.3, 22.0], [53.4, 22.0], [53.5, 22.0], [53.6, 22.0], [53.7, 22.0], [53.8, 22.0], [53.9, 22.0], [54.0, 22.0], [54.1, 22.0], [54.2, 22.0], [54.3, 22.0], [54.4, 22.0], [54.5, 22.0], [54.6, 22.0], [54.7, 22.0], [54.8, 22.0], [54.9, 22.0], [55.0, 22.0], [55.1, 22.0], [55.2, 22.0], [55.3, 23.0], [55.4, 23.0], [55.5, 23.0], [55.6, 23.0], [55.7, 23.0], [55.8, 23.0], [55.9, 23.0], [56.0, 23.0], [56.1, 23.0], [56.2, 23.0], [56.3, 23.0], [56.4, 23.0], [56.5, 23.0], [56.6, 23.0], [56.7, 23.0], [56.8, 23.0], [56.9, 23.0], [57.0, 23.0], [57.1, 23.0], [57.2, 23.0], [57.3, 23.0], [57.4, 23.0], [57.5, 23.0], [57.6, 23.0], [57.7, 23.0], [57.8, 23.0], [57.9, 23.0], [58.0, 23.0], [58.1, 24.0], [58.2, 24.0], [58.3, 24.0], [58.4, 24.0], [58.5, 24.0], [58.6, 24.0], [58.7, 24.0], [58.8, 24.0], [58.9, 24.0], [59.0, 24.0], [59.1, 24.0], [59.2, 24.0], [59.3, 24.0], [59.4, 24.0], [59.5, 24.0], [59.6, 24.0], [59.7, 24.0], [59.8, 24.0], [59.9, 24.0], [60.0, 24.0], [60.1, 24.0], [60.2, 24.0], [60.3, 25.0], [60.4, 25.0], [60.5, 25.0], [60.6, 25.0], [60.7, 25.0], [60.8, 25.0], [60.9, 25.0], [61.0, 25.0], [61.1, 25.0], [61.2, 25.0], [61.3, 25.0], [61.4, 25.0], [61.5, 25.0], [61.6, 25.0], [61.7, 25.0], [61.8, 25.0], [61.9, 26.0], [62.0, 26.0], [62.1, 26.0], [62.2, 26.0], [62.3, 26.0], [62.4, 26.0], [62.5, 26.0], [62.6, 26.0], [62.7, 26.0], [62.8, 26.0], [62.9, 26.0], [63.0, 27.0], [63.1, 27.0], [63.2, 27.0], [63.3, 27.0], [63.4, 27.0], [63.5, 27.0], [63.6, 27.0], [63.7, 27.0], [63.8, 28.0], [63.9, 28.0], [64.0, 28.0], [64.1, 28.0], [64.2, 28.0], [64.3, 29.0], [64.4, 29.0], [64.5, 29.0], [64.6, 29.0], [64.7, 30.0], [64.8, 30.0], [64.9, 30.0], [65.0, 31.0], [65.1, 31.0], [65.2, 32.0], [65.3, 32.0], [65.4, 32.0], [65.5, 33.0], [65.6, 34.0], [65.7, 34.0], [65.8, 35.0], [65.9, 36.0], [66.0, 36.0], [66.1, 37.0], [66.2, 38.0], [66.3, 39.0], [66.4, 41.0], [66.5, 42.0], [66.6, 43.0], [66.7, 43.0], [66.8, 43.0], [66.9, 44.0], [67.0, 44.0], [67.1, 44.0], [67.2, 44.0], [67.3, 44.0], [67.4, 44.0], [67.5, 44.0], [67.6, 44.0], [67.7, 44.0], [67.8, 44.0], [67.9, 45.0], [68.0, 45.0], [68.1, 45.0], [68.2, 45.0], [68.3, 45.0], [68.4, 45.0], [68.5, 45.0], [68.6, 45.0], [68.7, 45.0], [68.8, 45.0], [68.9, 45.0], [69.0, 45.0], [69.1, 45.0], [69.2, 46.0], [69.3, 46.0], [69.4, 46.0], [69.5, 46.0], [69.6, 46.0], [69.7, 46.0], [69.8, 46.0], [69.9, 46.0], [70.0, 46.0], [70.1, 46.0], [70.2, 46.0], [70.3, 46.0], [70.4, 46.0], [70.5, 46.0], [70.6, 46.0], [70.7, 47.0], [70.8, 47.0], [70.9, 47.0], [71.0, 47.0], [71.1, 47.0], [71.2, 47.0], [71.3, 47.0], [71.4, 47.0], [71.5, 47.0], [71.6, 47.0], [71.7, 47.0], [71.8, 47.0], [71.9, 47.0], [72.0, 47.0], [72.1, 47.0], [72.2, 47.0], [72.3, 47.0], [72.4, 47.0], [72.5, 47.0], [72.6, 47.0], [72.7, 47.0], [72.8, 47.0], [72.9, 47.0], [73.0, 48.0], [73.1, 48.0], [73.2, 48.0], [73.3, 48.0], [73.4, 48.0], [73.5, 48.0], [73.6, 48.0], [73.7, 48.0], [73.8, 48.0], [73.9, 48.0], [74.0, 48.0], [74.1, 48.0], [74.2, 48.0], [74.3, 48.0], [74.4, 48.0], [74.5, 48.0], [74.6, 48.0], [74.7, 48.0], [74.8, 48.0], [74.9, 48.0], [75.0, 48.0], [75.1, 48.0], [75.2, 48.0], [75.3, 48.0], [75.4, 48.0], [75.5, 48.0], [75.6, 48.0], [75.7, 48.0], [75.8, 48.0], [75.9, 48.0], [76.0, 48.0], [76.1, 48.0], [76.2, 48.0], [76.3, 49.0], [76.4, 49.0], [76.5, 49.0], [76.6, 49.0], [76.7, 49.0], [76.8, 49.0], [76.9, 49.0], [77.0, 49.0], [77.1, 49.0], [77.2, 49.0], [77.3, 49.0], [77.4, 49.0], [77.5, 49.0], [77.6, 49.0], [77.7, 49.0], [77.8, 49.0], [77.9, 49.0], [78.0, 49.0], [78.1, 49.0], [78.2, 49.0], [78.3, 49.0], [78.4, 49.0], [78.5, 49.0], [78.6, 49.0], [78.7, 49.0], [78.8, 49.0], [78.9, 50.0], [79.0, 50.0], [79.1, 50.0], [79.2, 50.0], [79.3, 50.0], [79.4, 50.0], [79.5, 50.0], [79.6, 50.0], [79.7, 50.0], [79.8, 50.0], [79.9, 50.0], [80.0, 50.0], [80.1, 50.0], [80.2, 50.0], [80.3, 50.0], [80.4, 50.0], [80.5, 50.0], [80.6, 50.0], [80.7, 50.0], [80.8, 50.0], [80.9, 50.0], [81.0, 50.0], [81.1, 50.0], [81.2, 50.0], [81.3, 50.0], [81.4, 50.0], [81.5, 50.0], [81.6, 50.0], [81.7, 50.0], [81.8, 51.0], [81.9, 51.0], [82.0, 51.0], [82.1, 51.0], [82.2, 51.0], [82.3, 51.0], [82.4, 51.0], [82.5, 51.0], [82.6, 51.0], [82.7, 51.0], [82.8, 51.0], [82.9, 51.0], [83.0, 51.0], [83.1, 51.0], [83.2, 51.0], [83.3, 51.0], [83.4, 51.0], [83.5, 51.0], [83.6, 51.0], [83.7, 51.0], [83.8, 51.0], [83.9, 51.0], [84.0, 51.0], [84.1, 51.0], [84.2, 51.0], [84.3, 51.0], [84.4, 51.0], [84.5, 51.0], [84.6, 52.0], [84.7, 52.0], [84.8, 52.0], [84.9, 52.0], [85.0, 52.0], [85.1, 52.0], [85.2, 52.0], [85.3, 52.0], [85.4, 52.0], [85.5, 52.0], [85.6, 52.0], [85.7, 52.0], [85.8, 52.0], [85.9, 52.0], [86.0, 52.0], [86.1, 52.0], [86.2, 52.0], [86.3, 52.0], [86.4, 52.0], [86.5, 52.0], [86.6, 52.0], [86.7, 52.0], [86.8, 52.0], [86.9, 52.0], [87.0, 52.0], [87.1, 52.0], [87.2, 53.0], [87.3, 53.0], [87.4, 53.0], [87.5, 53.0], [87.6, 53.0], [87.7, 53.0], [87.8, 53.0], [87.9, 53.0], [88.0, 53.0], [88.1, 53.0], [88.2, 53.0], [88.3, 53.0], [88.4, 53.0], [88.5, 53.0], [88.6, 53.0], [88.7, 53.0], [88.8, 53.0], [88.9, 53.0], [89.0, 53.0], [89.1, 53.0], [89.2, 54.0], [89.3, 54.0], [89.4, 54.0], [89.5, 54.0], [89.6, 54.0], [89.7, 54.0], [89.8, 54.0], [89.9, 54.0], [90.0, 54.0], [90.1, 54.0], [90.2, 54.0], [90.3, 54.0], [90.4, 54.0], [90.5, 54.0], [90.6, 54.0], [90.7, 54.0], [90.8, 54.0], [90.9, 55.0], [91.0, 55.0], [91.1, 55.0], [91.2, 55.0], [91.3, 55.0], [91.4, 55.0], [91.5, 55.0], [91.6, 55.0], [91.7, 55.0], [91.8, 55.0], [91.9, 55.0], [92.0, 55.0], [92.1, 56.0], [92.2, 56.0], [92.3, 56.0], [92.4, 56.0], [92.5, 56.0], [92.6, 56.0], [92.7, 56.0], [92.8, 56.0], [92.9, 56.0], [93.0, 57.0], [93.1, 57.0], [93.2, 57.0], [93.3, 57.0], [93.4, 57.0], [93.5, 57.0], [93.6, 57.0], [93.7, 58.0], [93.8, 58.0], [93.9, 58.0], [94.0, 58.0], [94.1, 58.0], [94.2, 58.0], [94.3, 58.0], [94.4, 59.0], [94.5, 59.0], [94.6, 59.0], [94.7, 59.0], [94.8, 59.0], [94.9, 60.0], [95.0, 60.0], [95.1, 60.0], [95.2, 60.0], [95.3, 61.0], [95.4, 61.0], [95.5, 61.0], [95.6, 62.0], [95.7, 62.0], [95.8, 63.0], [95.9, 63.0], [96.0, 63.0], [96.1, 63.0], [96.2, 64.0], [96.3, 64.0], [96.4, 64.0], [96.5, 65.0], [96.6, 65.0], [96.7, 66.0], [96.8, 67.0], [96.9, 67.0], [97.0, 68.0], [97.1, 68.0], [97.2, 68.0], [97.3, 69.0], [97.4, 70.0], [97.5, 70.0], [97.6, 72.0], [97.7, 72.0], [97.8, 73.0], [97.9, 74.0], [98.0, 74.0], [98.1, 76.0], [98.2, 77.0], [98.3, 79.0], [98.4, 80.0], [98.5, 82.0], [98.6, 84.0], [98.7, 86.0], [98.8, 87.0], [98.9, 90.0], [99.0, 92.0], [99.1, 93.0], [99.2, 96.0], [99.3, 103.0], [99.4, 105.0], [99.5, 114.0], [99.6, 126.0], [99.7, 134.0], [99.8, 156.0], [99.9, 214.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 12025.0, "series": [{"data": [[0.0, 12025.0], [4600.0, 1.0], [300.0, 2.0], [5500.0, 2.0], [5600.0, 1.0], [100.0, 75.0], [400.0, 2.0], [200.0, 5.0], [3500.0, 1.0], [4000.0, 1.0]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12109.0, "series": [{"data": [[0.0, 12109.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.973684210526316, "minX": 1.62575447E12, "maxY": 19.0, "series": [{"data": [[1.62575503E12, 3.0], [1.62575486E12, 3.0], [1.62575469E12, 2.7681159420289845], [1.62575452E12, 2.0], [1.62575512E12, 3.0], [1.62575529E12, 3.0], [1.62575495E12, 3.0], [1.62575478E12, 3.0], [1.62575461E12, 2.0], [1.62575521E12, 3.0], [1.62575504E12, 3.0], [1.62575487E12, 3.0], [1.6257547E12, 3.0], [1.62575453E12, 2.0], [1.6257553E12, 3.0], [1.62575513E12, 3.0], [1.62575496E12, 3.0], [1.62575479E12, 3.0], [1.62575462E12, 2.0], [1.62575522E12, 3.0], [1.62575505E12, 3.0], [1.62575488E12, 3.0], [1.62575518E12, 3.0], [1.62575535E12, 3.0], [1.62575501E12, 3.0], [1.62575484E12, 3.0], [1.62575467E12, 2.0], [1.6257545E12, 2.0], [1.6257551E12, 3.0], [1.62575527E12, 3.0], [1.62575493E12, 3.0], [1.62575476E12, 3.0], [1.62575459E12, 2.0], [1.62575536E12, 3.0], [1.62575519E12, 3.0], [1.62575502E12, 3.0], [1.62575485E12, 3.0], [1.62575468E12, 2.0], [1.62575451E12, 2.0], [1.62575528E12, 3.0], [1.62575511E12, 3.0], [1.62575494E12, 3.0], [1.62575477E12, 3.0], [1.6257546E12, 2.0], [1.6257552E12, 3.0], [1.62575537E12, 2.857142857142857], [1.62575516E12, 3.0], [1.62575533E12, 3.0], [1.62575499E12, 3.0], [1.62575482E12, 3.0], [1.62575465E12, 2.0], [1.62575448E12, 8.370370370370368], [1.62575508E12, 3.660000000000001], [1.62575525E12, 3.0], [1.62575491E12, 3.0], [1.62575474E12, 3.0], [1.62575457E12, 2.0], [1.62575534E12, 3.0], [1.62575517E12, 3.0], [1.625755E12, 3.0], [1.62575483E12, 3.0], [1.62575466E12, 2.0], [1.62575449E12, 1.973684210526316], [1.62575526E12, 3.0], [1.62575509E12, 3.0], [1.62575492E12, 3.0], [1.62575475E12, 3.0], [1.62575458E12, 2.0], [1.62575471E12, 3.0], [1.62575454E12, 2.0], [1.62575514E12, 3.0], [1.62575531E12, 3.0], [1.62575497E12, 3.0], [1.6257548E12, 3.0], [1.62575463E12, 2.0], [1.62575506E12, 3.0], [1.62575523E12, 3.0], [1.62575489E12, 3.0], [1.62575472E12, 3.0], [1.62575455E12, 2.0], [1.62575532E12, 3.0], [1.62575515E12, 3.0], [1.62575498E12, 3.0], [1.62575481E12, 3.0], [1.62575464E12, 2.0], [1.62575447E12, 19.0], [1.62575524E12, 3.0], [1.62575507E12, 3.0], [1.6257549E12, 3.0], [1.62575473E12, 3.0], [1.62575456E12, 2.0]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575537E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20.234988880652338, "minX": 1.0, "maxY": 4673.0, "series": [{"data": [[8.0, 25.0], [2.0, 20.234988880652338], [9.0, 37.0], [10.0, 47.375], [11.0, 32.0], [12.0, 58.0], [3.0, 33.087462622810804], [13.0, 88.0], [14.0, 77.0], [15.0, 43.0], [16.0, 36.0], [4.0, 81.0], [1.0, 32.0], [17.0, 3527.0], [18.0, 48.0], [19.0, 4037.0], [20.0, 4673.0], [5.0, 1902.3333333333335], [6.0, 341.1428571428571], [7.0, 27.0]], "isOverall": false, "label": "Press Release", "isController": false}, {"data": [[2.798349153941397, 32.25233182005785]], "isOverall": false, "label": "Press Release-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 49.5, "minX": 1.62575447E12, "maxY": 998520.0, "series": [{"data": [[1.62575503E12, 359467.2], [1.62575486E12, 519230.4], [1.62575469E12, 688978.8], [1.62575452E12, 848725.0], [1.62575512E12, 998500.0], [1.62575529E12, 988546.0], [1.62575495E12, 973557.0], [1.62575478E12, 823779.0], [1.62575461E12, 688978.8], [1.62575521E12, 369452.4], [1.62575504E12, 519230.4], [1.62575487E12, 683986.2], [1.6257547E12, 858727.2], [1.62575453E12, 988530.8], [1.6257553E12, 983542.2], [1.62575513E12, 988520.2], [1.62575496E12, 848742.0], [1.62575479E12, 669008.4], [1.62575462E12, 529215.6], [1.62575522E12, 524223.0], [1.62575505E12, 683986.2], [1.62575488E12, 863719.8], [1.62575518E12, 184723.6], [1.62575535E12, 354479.8], [1.62575501E12, 79881.6], [1.62575484E12, 214681.8], [1.62575467E12, 389425.4], [1.6257545E12, 544183.3], [1.6257551E12, 998500.0], [1.62575527E12, 983542.2], [1.62575493E12, 978549.6], [1.62575476E12, 993527.4], [1.62575459E12, 978549.6], [1.62575536E12, 194712.8], [1.62575519E12, 74889.0], [1.62575502E12, 209689.2], [1.62575485E12, 374445.0], [1.62575468E12, 544193.4], [1.62575451E12, 693957.5], [1.62575528E12, 983554.4], [1.62575511E12, 998500.0], [1.62575494E12, 983542.2], [1.62575477E12, 958579.2], [1.6257546E12, 848742.0], [1.6257552E12, 214681.8], [1.62575537E12, 34948.2], [1.62575516E12, 509235.0], [1.62575533E12, 659023.2], [1.62575499E12, 339496.8], [1.62575482E12, 174741.0], [1.62575465E12, 99854.6], [1.62575448E12, 134802.3], [1.62575508E12, 499251.0], [1.62575525E12, 983542.2], [1.62575491E12, 998520.0], [1.62575474E12, 988534.8], [1.62575457E12, 998500.0], [1.62575534E12, 514242.5], [1.62575517E12, 359460.0], [1.625755E12, 194711.4], [1.62575483E12, 79881.6], [1.62575466E12, 219675.0], [1.62575449E12, 379442.6], [1.62575526E12, 988534.8], [1.62575509E12, 998488.5], [1.62575492E12, 998520.0], [1.62575475E12, 978549.6], [1.62575458E12, 998520.0], [1.62575471E12, 978549.6], [1.62575454E12, 998500.8], [1.62575514E12, 828755.6], [1.62575531E12, 968564.4], [1.62575497E12, 683986.2], [1.6257548E12, 519230.4], [1.62575463E12, 359467.2], [1.62575506E12, 853734.6], [1.62575523E12, 683986.2], [1.62575489E12, 988534.8], [1.62575472E12, 973557.0], [1.62575455E12, 998500.0], [1.62575532E12, 838756.8], [1.62575515E12, 654017.5], [1.62575498E12, 499260.0], [1.62575481E12, 349482.0], [1.62575464E12, 204696.6], [1.62575447E12, 14980.6], [1.62575524E12, 833764.2], [1.62575507E12, 963571.8], [1.6257549E12, 998520.0], [1.62575473E12, 983542.2], [1.62575456E12, 998500.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62575503E12, 1188.0], [1.62575486E12, 1716.0], [1.62575469E12, 2277.0], [1.62575452E12, 2805.0], [1.62575512E12, 3300.0], [1.62575529E12, 3267.0], [1.62575495E12, 3217.5], [1.62575478E12, 2722.5], [1.62575461E12, 2277.0], [1.62575521E12, 1221.0], [1.62575504E12, 1716.0], [1.62575487E12, 2260.5], [1.6257547E12, 2838.0], [1.62575453E12, 3267.0], [1.6257553E12, 3250.5], [1.62575513E12, 3267.0], [1.62575496E12, 2805.0], [1.62575479E12, 2211.0], [1.62575462E12, 1749.0], [1.62575522E12, 1732.5], [1.62575505E12, 2260.5], [1.62575488E12, 2854.5], [1.62575518E12, 610.5], [1.62575535E12, 1171.5], [1.62575501E12, 264.0], [1.62575484E12, 709.5], [1.62575467E12, 1287.0], [1.6257545E12, 1798.5], [1.6257551E12, 3300.0], [1.62575527E12, 3250.5], [1.62575493E12, 3234.0], [1.62575476E12, 3283.5], [1.62575459E12, 3234.0], [1.62575536E12, 643.5], [1.62575519E12, 247.5], [1.62575502E12, 693.0], [1.62575485E12, 1237.5], [1.62575468E12, 1798.5], [1.62575451E12, 2293.5], [1.62575528E12, 3250.5], [1.62575511E12, 3300.0], [1.62575494E12, 3250.5], [1.62575477E12, 3168.0], [1.6257546E12, 2805.0], [1.6257552E12, 709.5], [1.62575537E12, 115.5], [1.62575516E12, 1683.0], [1.62575533E12, 2178.0], [1.62575499E12, 1122.0], [1.62575482E12, 577.5], [1.62575465E12, 330.0], [1.62575448E12, 445.5], [1.62575508E12, 1650.0], [1.62575525E12, 3250.5], [1.62575491E12, 3300.0], [1.62575474E12, 3267.0], [1.62575457E12, 3300.0], [1.62575534E12, 1699.5], [1.62575517E12, 1188.0], [1.625755E12, 643.5], [1.62575483E12, 264.0], [1.62575466E12, 726.0], [1.62575449E12, 1254.0], [1.62575526E12, 3267.0], [1.62575509E12, 3300.0], [1.62575492E12, 3300.0], [1.62575475E12, 3234.0], [1.62575458E12, 3300.0], [1.62575471E12, 3234.0], [1.62575454E12, 3300.0], [1.62575514E12, 2739.0], [1.62575531E12, 3201.0], [1.62575497E12, 2260.5], [1.6257548E12, 1716.0], [1.62575463E12, 1188.0], [1.62575506E12, 2821.5], [1.62575523E12, 2260.5], [1.62575489E12, 3267.0], [1.62575472E12, 3217.5], [1.62575455E12, 3300.0], [1.62575532E12, 2772.0], [1.62575515E12, 2161.5], [1.62575498E12, 1650.0], [1.62575481E12, 1155.0], [1.62575464E12, 676.5], [1.62575447E12, 49.5], [1.62575524E12, 2755.5], [1.62575507E12, 3184.5], [1.6257549E12, 3300.0], [1.62575473E12, 3250.5], [1.62575456E12, 3300.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575537E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.62575447E12, "maxY": 2919.333333333333, "series": [{"data": [[1.62575503E12, 19.45833333333333], [1.62575486E12, 54.97115384615383], [1.62575469E12, 57.289855072463766], [1.62575452E12, 18.435294117647057], [1.62575512E12, 54.61000000000002], [1.62575529E12, 23.080808080808083], [1.62575495E12, 30.682051282051283], [1.62575478E12, 20.072727272727274], [1.62575461E12, 17.137681159420282], [1.62575521E12, 52.28378378378378], [1.62575504E12, 18.53846153846154], [1.62575487E12, 56.7883211678832], [1.6257547E12, 54.063953488372086], [1.62575453E12, 16.25757575757576], [1.6257553E12, 23.12182741116752], [1.62575513E12, 44.545454545454554], [1.62575496E12, 56.02352941176469], [1.62575479E12, 18.940298507462682], [1.62575462E12, 17.839622641509436], [1.62575522E12, 45.35238095238096], [1.62575505E12, 18.313868613138677], [1.62575488E12, 55.4393063583815], [1.62575518E12, 54.37837837837838], [1.62575535E12, 16.535211267605632], [1.62575501E12, 42.75000000000001], [1.62575484E12, 54.55813953488371], [1.62575467E12, 53.98717948717949], [1.6257545E12, 21.614678899082566], [1.6257551E12, 52.97999999999999], [1.62575527E12, 18.50761421319797], [1.62575493E12, 13.045918367346934], [1.62575476E12, 14.306532663316586], [1.62575459E12, 15.65816326530612], [1.62575536E12, 14.179487179487179], [1.62575519E12, 50.00000000000001], [1.62575502E12, 19.452380952380953], [1.62575485E12, 53.79999999999999], [1.62575468E12, 54.02752293577984], [1.62575451E12, 19.352517985611506], [1.62575528E12, 20.050761421319798], [1.62575511E12, 54.66500000000003], [1.62575494E12, 13.59390862944163], [1.62575477E12, 15.776041666666666], [1.6257546E12, 20.50588235294117], [1.6257552E12, 55.930232558139544], [1.62575537E12, 11.0], [1.62575516E12, 27.74509803921568], [1.62575533E12, 24.333333333333325], [1.62575499E12, 54.69117647058824], [1.62575482E12, 18.857142857142858], [1.62575465E12, 41.449999999999996], [1.62575448E12, 172.59259259259267], [1.62575508E12, 225.6400000000003], [1.62575525E12, 18.446700507614217], [1.62575491E12, 54.34000000000003], [1.62575474E12, 14.545454545454541], [1.62575457E12, 13.540000000000003], [1.62575534E12, 23.66990291262136], [1.62575517E12, 54.56944444444445], [1.625755E12, 58.53846153846154], [1.62575483E12, 35.43750000000001], [1.62575466E12, 58.72727272727274], [1.62575449E12, 22.56578947368421], [1.62575526E12, 19.63636363636365], [1.62575509E12, 51.11], [1.62575492E12, 37.150000000000006], [1.62575475E12, 14.255102040816324], [1.62575458E12, 12.424999999999999], [1.62575471E12, 34.35714285714288], [1.62575454E12, 14.555000000000003], [1.62575514E12, 19.301204819277103], [1.62575531E12, 22.59278350515463], [1.62575497E12, 54.036496350364956], [1.6257548E12, 19.50961538461538], [1.62575463E12, 18.819444444444443], [1.62575506E12, 18.15204678362573], [1.62575523E12, 19.277372262773724], [1.62575489E12, 53.53030303030302], [1.62575472E12, 18.210256410256406], [1.62575455E12, 13.039999999999992], [1.62575532E12, 25.76190476190475], [1.62575515E12, 17.450381679389313], [1.62575498E12, 51.90999999999999], [1.62575481E12, 19.41428571428572], [1.62575464E12, 16.926829268292686], [1.62575447E12, 2919.333333333333], [1.62575524E12, 18.22155688622754], [1.62575507E12, 28.3678756476684], [1.6257549E12, 61.074999999999974], [1.62575473E12, 15.477157360406096], [1.62575456E12, 12.665000000000003]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575537E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 10.714285714285714, "minX": 1.62575447E12, "maxY": 2788.666666666667, "series": [{"data": [[1.62575503E12, 17.90277777777778], [1.62575486E12, 47.72115384615384], [1.62575469E12, 49.86231884057972], [1.62575452E12, 17.01764705882352], [1.62575512E12, 47.179999999999986], [1.62575529E12, 20.7929292929293], [1.62575495E12, 27.379487179487178], [1.62575478E12, 18.436363636363627], [1.62575461E12, 15.659420289855069], [1.62575521E12, 45.02702702702702], [1.62575504E12, 17.048076923076916], [1.62575487E12, 49.43065693430658], [1.6257547E12, 46.70348837209299], [1.62575453E12, 15.409090909090908], [1.6257553E12, 20.842639593908622], [1.62575513E12, 38.63636363636362], [1.62575496E12, 48.605882352941194], [1.62575479E12, 17.223880597014915], [1.62575462E12, 16.311320754716988], [1.62575522E12, 39.38095238095239], [1.62575505E12, 16.766423357664227], [1.62575488E12, 48.052023121387265], [1.62575518E12, 46.86486486486487], [1.62575535E12, 16.309859154929576], [1.62575501E12, 37.9375], [1.62575484E12, 47.325581395348834], [1.62575467E12, 46.71794871794873], [1.6257545E12, 20.110091743119263], [1.6257551E12, 45.61500000000001], [1.62575527E12, 16.964467005076155], [1.62575493E12, 12.724489795918371], [1.62575476E12, 13.974874371859293], [1.62575459E12, 14.505102040816327], [1.62575536E12, 13.769230769230768], [1.62575519E12, 42.46666666666667], [1.62575502E12, 17.78571428571428], [1.62575485E12, 46.506666666666675], [1.62575468E12, 46.72477064220184], [1.62575451E12, 17.92086330935252], [1.62575528E12, 18.3502538071066], [1.62575511E12, 47.29999999999998], [1.62575494E12, 13.309644670050755], [1.62575477E12, 14.802083333333329], [1.6257546E12, 18.670588235294108], [1.6257552E12, 48.51162790697675], [1.62575537E12, 10.714285714285714], [1.62575516E12, 24.686274509803923], [1.62575533E12, 22.060606060606055], [1.62575499E12, 47.24999999999999], [1.62575482E12, 17.228571428571428], [1.62575465E12, 36.4], [1.62575448E12, 162.5925925925926], [1.62575508E12, 213.85999999999996], [1.62575525E12, 16.984771573604064], [1.62575491E12, 46.97500000000003], [1.62575474E12, 14.212121212121215], [1.62575457E12, 13.225000000000005], [1.62575534E12, 21.67961165048544], [1.62575517E12, 47.000000000000014], [1.625755E12, 51.128205128205124], [1.62575483E12, 30.9375], [1.62575466E12, 51.22727272727273], [1.62575449E12, 20.815789473684216], [1.62575526E12, 18.1969696969697], [1.62575509E12, 43.64999999999999], [1.62575492E12, 32.83], [1.62575475E12, 13.928571428571432], [1.62575458E12, 11.945000000000002], [1.62575471E12, 30.714285714285715], [1.62575454E12, 14.224999999999998], [1.62575514E12, 17.813253012048186], [1.62575531E12, 20.28865979381444], [1.62575497E12, 46.613138686131435], [1.6257548E12, 18.009615384615387], [1.62575463E12, 17.27777777777778], [1.62575506E12, 16.67251461988303], [1.62575523E12, 17.53284671532847], [1.62575489E12, 46.18181818181816], [1.62575472E12, 17.815384615384616], [1.62575455E12, 12.595000000000002], [1.62575532E12, 23.33928571428572], [1.62575515E12, 16.007633587786266], [1.62575498E12, 44.47], [1.62575481E12, 17.742857142857137], [1.62575464E12, 15.390243902439023], [1.62575447E12, 2788.666666666667], [1.62575524E12, 16.676646706586823], [1.62575507E12, 25.108808290155448], [1.6257549E12, 53.20000000000001], [1.62575473E12, 15.192893401015235], [1.62575456E12, 12.375000000000002]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575537E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.714285714285715, "minX": 1.62575447E12, "maxY": 158.66666666666666, "series": [{"data": [[1.62575503E12, 14.611111111111107], [1.62575486E12, 36.461538461538474], [1.62575469E12, 38.17391304347825], [1.62575452E12, 14.123529411764704], [1.62575512E12, 35.57500000000001], [1.62575529E12, 16.66161616161617], [1.62575495E12, 21.81538461538461], [1.62575478E12, 15.569696969696961], [1.62575461E12, 13.0072463768116], [1.62575521E12, 34.36486486486487], [1.62575504E12, 14.451923076923071], [1.62575487E12, 38.53284671532848], [1.6257547E12, 35.15116279069765], [1.62575453E12, 12.46969696969698], [1.6257553E12, 17.121827411167516], [1.62575513E12, 29.545454545454536], [1.62575496E12, 37.764705882352935], [1.62575479E12, 14.507462686567159], [1.62575462E12, 13.405660377358489], [1.62575522E12, 30.7904761904762], [1.62575505E12, 14.087591240875913], [1.62575488E12, 37.07514450867052], [1.62575518E12, 36.5135135135135], [1.62575535E12, 11.507042253521126], [1.62575501E12, 25.5], [1.62575484E12, 36.139534883720934], [1.62575467E12, 34.96153846153846], [1.6257545E12, 16.724770642201836], [1.6257551E12, 34.415000000000006], [1.62575527E12, 14.309644670050762], [1.62575493E12, 10.979591836734695], [1.62575476E12, 12.150753768844224], [1.62575459E12, 12.158163265306126], [1.62575536E12, 11.94871794871795], [1.62575519E12, 32.46666666666667], [1.62575502E12, 15.238095238095239], [1.62575485E12, 35.99999999999999], [1.62575468E12, 35.29357798165137], [1.62575451E12, 14.856115107913674], [1.62575528E12, 14.598984771573614], [1.62575511E12, 35.88999999999996], [1.62575494E12, 11.568527918781726], [1.62575477E12, 12.645833333333337], [1.6257546E12, 15.52352941176471], [1.6257552E12, 36.627906976744185], [1.62575537E12, 8.714285714285715], [1.62575516E12, 19.87254901960784], [1.62575533E12, 17.977272727272727], [1.62575499E12, 35.544117647058826], [1.62575482E12, 14.37142857142857], [1.62575465E12, 27.5], [1.62575448E12, 33.66666666666665], [1.62575508E12, 38.72000000000001], [1.62575525E12, 14.005076142131976], [1.62575491E12, 35.344999999999985], [1.62575474E12, 11.969696969696974], [1.62575457E12, 11.104999999999995], [1.62575534E12, 16.864077669902898], [1.62575517E12, 36.26388888888888], [1.625755E12, 39.41025641025641], [1.62575483E12, 24.25], [1.62575466E12, 37.81818181818182], [1.62575449E12, 16.77631578947367], [1.62575526E12, 15.020202020202024], [1.62575509E12, 32.93499999999999], [1.62575492E12, 25.319999999999997], [1.62575475E12, 11.897959183673475], [1.62575458E12, 10.230000000000002], [1.62575471E12, 24.045918367346903], [1.62575454E12, 11.909999999999998], [1.62575514E12, 14.84939759036145], [1.62575531E12, 16.474226804123706], [1.62575497E12, 36.07299270072995], [1.6257548E12, 14.971153846153841], [1.62575463E12, 13.763888888888886], [1.62575506E12, 13.988304093567251], [1.62575523E12, 14.715328467153284], [1.62575489E12, 34.722222222222186], [1.62575472E12, 15.635897435897439], [1.62575455E12, 10.525], [1.62575532E12, 18.874999999999993], [1.62575515E12, 13.412213740458018], [1.62575498E12, 34.35999999999998], [1.62575481E12, 15.04285714285714], [1.62575464E12, 12.68292682926829], [1.62575447E12, 158.66666666666666], [1.62575524E12, 13.874251497005982], [1.62575507E12, 20.145077720207254], [1.6257549E12, 40.524999999999984], [1.62575473E12, 12.93908629441624], [1.62575456E12, 10.614999999999998]], "isOverall": false, "label": "Press Release", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575537E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.62575447E12, "maxY": 5613.0, "series": [{"data": [[1.62575503E12, 140.0], [1.62575486E12, 168.0], [1.62575469E12, 141.0], [1.62575452E12, 29.0], [1.62575512E12, 171.0], [1.62575529E12, 52.0], [1.62575495E12, 92.0], [1.62575478E12, 67.0], [1.62575461E12, 35.0], [1.62575521E12, 72.0], [1.62575504E12, 68.0], [1.62575487E12, 426.0], [1.6257547E12, 137.0], [1.62575453E12, 59.0], [1.6257553E12, 38.0], [1.62575513E12, 134.0], [1.62575496E12, 395.0], [1.62575479E12, 45.0], [1.62575462E12, 33.0], [1.62575522E12, 95.0], [1.62575505E12, 39.0], [1.62575488E12, 476.0], [1.62575518E12, 104.0], [1.62575535E12, 121.0], [1.62575501E12, 153.0], [1.62575484E12, 113.0], [1.62575467E12, 92.0], [1.6257545E12, 103.0], [1.6257551E12, 156.0], [1.62575527E12, 39.0], [1.62575493E12, 44.0], [1.62575476E12, 43.0], [1.62575459E12, 44.0], [1.62575536E12, 27.0], [1.62575519E12, 54.0], [1.62575502E12, 32.0], [1.62575485E12, 130.0], [1.62575468E12, 85.0], [1.62575451E12, 42.0], [1.62575528E12, 72.0], [1.62575511E12, 163.0], [1.62575494E12, 47.0], [1.62575477E12, 32.0], [1.6257546E12, 57.0], [1.6257552E12, 211.0], [1.62575537E12, 14.0], [1.62575516E12, 91.0], [1.62575533E12, 53.0], [1.62575499E12, 107.0], [1.62575482E12, 30.0], [1.62575465E12, 76.0], [1.62575448E12, 3527.0], [1.62575508E12, 5613.0], [1.62575525E12, 80.0], [1.62575491E12, 168.0], [1.62575474E12, 80.0], [1.62575457E12, 134.0], [1.62575534E12, 91.0], [1.62575517E12, 102.0], [1.625755E12, 169.0], [1.62575483E12, 58.0], [1.62575466E12, 111.0], [1.62575449E12, 44.0], [1.62575526E12, 151.0], [1.62575509E12, 104.0], [1.62575492E12, 165.0], [1.62575475E12, 79.0], [1.62575458E12, 103.0], [1.62575471E12, 172.0], [1.62575454E12, 92.0], [1.62575514E12, 40.0], [1.62575531E12, 41.0], [1.62575497E12, 218.0], [1.6257548E12, 39.0], [1.62575463E12, 57.0], [1.62575506E12, 27.0], [1.62575523E12, 65.0], [1.62575489E12, 137.0], [1.62575472E12, 99.0], [1.62575455E12, 109.0], [1.62575532E12, 75.0], [1.62575515E12, 35.0], [1.62575498E12, 79.0], [1.62575481E12, 30.0], [1.62575464E12, 23.0], [1.62575447E12, 4673.0], [1.62575524E12, 32.0], [1.62575507E12, 132.0], [1.6257549E12, 362.0], [1.62575473E12, 132.0], [1.62575456E12, 67.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62575503E12, 12.0], [1.62575486E12, 44.0], [1.62575469E12, 43.0], [1.62575452E12, 13.0], [1.62575512E12, 43.0], [1.62575529E12, 18.0], [1.62575495E12, 8.0], [1.62575478E12, 12.0], [1.62575461E12, 12.0], [1.62575521E12, 43.0], [1.62575504E12, 12.0], [1.62575487E12, 45.0], [1.6257547E12, 43.0], [1.62575453E12, 9.0], [1.6257553E12, 18.0], [1.62575513E12, 12.0], [1.62575496E12, 44.0], [1.62575479E12, 12.0], [1.62575462E12, 12.0], [1.62575522E12, 12.0], [1.62575505E12, 11.0], [1.62575488E12, 44.0], [1.62575518E12, 44.0], [1.62575535E12, 8.0], [1.62575501E12, 15.0], [1.62575484E12, 43.0], [1.62575467E12, 44.0], [1.6257545E12, 13.0], [1.6257551E12, 43.0], [1.62575527E12, 12.0], [1.62575493E12, 8.0], [1.62575476E12, 9.0], [1.62575459E12, 8.0], [1.62575536E12, 8.0], [1.62575519E12, 44.0], [1.62575502E12, 12.0], [1.62575485E12, 44.0], [1.62575468E12, 44.0], [1.62575451E12, 13.0], [1.62575528E12, 11.0], [1.62575511E12, 43.0], [1.62575494E12, 8.0], [1.62575477E12, 8.0], [1.6257546E12, 12.0], [1.6257552E12, 43.0], [1.62575537E12, 8.0], [1.62575516E12, 12.0], [1.62575533E12, 18.0], [1.62575499E12, 45.0], [1.62575482E12, 12.0], [1.62575465E12, 13.0], [1.62575448E12, 25.0], [1.62575508E12, 43.0], [1.62575525E12, 11.0], [1.62575491E12, 43.0], [1.62575474E12, 8.0], [1.62575457E12, 8.0], [1.62575534E12, 10.0], [1.62575517E12, 43.0], [1.625755E12, 44.0], [1.62575483E12, 14.0], [1.62575466E12, 43.0], [1.62575449E12, 15.0], [1.62575526E12, 12.0], [1.62575509E12, 43.0], [1.62575492E12, 8.0], [1.62575475E12, 8.0], [1.62575458E12, 8.0], [1.62575471E12, 9.0], [1.62575454E12, 9.0], [1.62575514E12, 12.0], [1.62575531E12, 18.0], [1.62575497E12, 43.0], [1.6257548E12, 12.0], [1.62575463E12, 12.0], [1.62575506E12, 12.0], [1.62575523E12, 11.0], [1.62575489E12, 42.0], [1.62575472E12, 8.0], [1.62575455E12, 9.0], [1.62575532E12, 19.0], [1.62575515E12, 12.0], [1.62575498E12, 43.0], [1.62575481E12, 12.0], [1.62575464E12, 12.0], [1.62575447E12, 48.0], [1.62575524E12, 12.0], [1.62575507E12, 12.0], [1.6257549E12, 43.0], [1.62575473E12, 9.0], [1.62575456E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62575503E12, 23.0], [1.62575486E12, 72.5], [1.62575469E12, 70.0], [1.62575452E12, 23.0], [1.62575512E12, 63.0], [1.62575529E12, 27.0], [1.62575495E12, 55.0], [1.62575478E12, 26.0], [1.62575461E12, 24.0], [1.62575521E12, 63.0], [1.62575504E12, 25.0], [1.62575487E12, 61.0], [1.6257547E12, 64.0], [1.62575453E12, 23.0], [1.6257553E12, 28.0], [1.62575513E12, 59.0], [1.62575496E12, 62.900000000000006], [1.62575479E12, 24.0], [1.62575462E12, 24.0], [1.62575522E12, 59.0], [1.62575505E12, 24.0], [1.62575488E12, 61.0], [1.62575518E12, 74.00000000000003], [1.62575535E12, 21.799999999999997], [1.62575501E12, 83.00000000000007], [1.62575484E12, 66.20000000000002], [1.62575467E12, 63.10000000000001], [1.6257545E12, 26.0], [1.6257551E12, 62.900000000000006], [1.62575527E12, 24.0], [1.62575493E12, 16.0], [1.62575476E12, 19.0], [1.62575459E12, 23.0], [1.62575536E12, 21.0], [1.62575519E12, 53.4], [1.62575502E12, 24.700000000000003], [1.62575485E12, 65.4], [1.62575468E12, 63.0], [1.62575451E12, 25.0], [1.62575528E12, 25.0], [1.62575511E12, 66.70000000000002], [1.62575494E12, 19.0], [1.62575477E12, 22.0], [1.6257546E12, 33.0], [1.6257552E12, 64.20000000000002], [1.62575537E12, 14.0], [1.62575516E12, 52.7], [1.62575533E12, 30.700000000000003], [1.62575499E12, 69.4], [1.62575482E12, 26.0], [1.62575465E12, 70.60000000000002], [1.62575448E12, 79.19999999999999], [1.62575508E12, 98.70000000000007], [1.62575525E12, 23.0], [1.62575491E12, 65.9], [1.62575474E12, 20.0], [1.62575457E12, 18.0], [1.62575534E12, 28.0], [1.62575517E12, 68.0], [1.625755E12, 69.0], [1.62575483E12, 56.6], [1.62575466E12, 82.0], [1.62575449E12, 28.299999999999997], [1.62575526E12, 25.0], [1.62575509E12, 57.0], [1.62575492E12, 56.0], [1.62575475E12, 19.0], [1.62575458E12, 15.0], [1.62575471E12, 58.0], [1.62575454E12, 20.0], [1.62575514E12, 28.0], [1.62575531E12, 26.0], [1.62575497E12, 61.2], [1.6257548E12, 26.0], [1.62575463E12, 23.400000000000006], [1.62575506E12, 23.0], [1.62575523E12, 25.200000000000003], [1.62575489E12, 64.1], [1.62575472E12, 26.0], [1.62575455E12, 17.900000000000006], [1.62575532E12, 34.099999999999994], [1.62575515E12, 23.0], [1.62575498E12, 59.0], [1.62575481E12, 24.9], [1.62575464E12, 22.0], [1.62575447E12, 4673.0], [1.62575524E12, 23.0], [1.62575507E12, 51.0], [1.6257549E12, 87.80000000000001], [1.62575473E12, 20.0], [1.62575456E12, 16.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62575503E12, 140.0], [1.62575486E12, 166.4500000000001], [1.62575469E12, 137.87999999999988], [1.62575452E12, 29.0], [1.62575512E12, 169.58000000000038], [1.62575529E12, 38.13999999999987], [1.62575495E12, 92.0], [1.62575478E12, 47.8600000000001], [1.62575461E12, 33.43999999999994], [1.62575521E12, 72.0], [1.62575504E12, 66.50000000000009], [1.62575487E12, 317.7000000000013], [1.6257547E12, 112.18000000000035], [1.62575453E12, 55.039999999999964], [1.6257553E12, 38.0], [1.62575513E12, 118.15999999999985], [1.62575496E12, 279.9799999999987], [1.62575479E12, 40.450000000000074], [1.62575462E12, 32.78999999999998], [1.62575522E12, 93.73999999999995], [1.62575505E12, 37.48000000000002], [1.62575488E12, 190.3599999999965], [1.62575518E12, 104.0], [1.62575535E12, 121.0], [1.62575501E12, 153.0], [1.62575484E12, 113.0], [1.62575467E12, 92.0], [1.6257545E12, 97.00000000000034], [1.6257551E12, 115.88000000000011], [1.62575527E12, 36.06000000000003], [1.62575493E12, 39.150000000000006], [1.62575476E12, 42.0], [1.62575459E12, 36.24000000000001], [1.62575536E12, 27.0], [1.62575519E12, 54.0], [1.62575502E12, 32.0], [1.62575485E12, 130.0], [1.62575468E12, 84.20000000000005], [1.62575451E12, 40.79999999999998], [1.62575528E12, 70.04000000000002], [1.62575511E12, 155.80000000000018], [1.62575494E12, 31.320000000000164], [1.62575477E12, 29.20999999999998], [1.6257546E12, 49.18999999999991], [1.6257552E12, 211.0], [1.62575537E12, 14.0], [1.62575516E12, 90.85], [1.62575533E12, 50.3599999999999], [1.62575499E12, 107.0], [1.62575482E12, 30.0], [1.62575465E12, 76.0], [1.62575448E12, 3527.0], [1.62575508E12, 5612.58], [1.62575525E12, 63.340000000000174], [1.62575491E12, 125.7800000000002], [1.62575474E12, 45.34999999999968], [1.62575457E12, 82.91000000000008], [1.62575534E12, 90.15999999999987], [1.62575517E12, 102.0], [1.625755E12, 169.0], [1.62575483E12, 58.0], [1.62575466E12, 111.0], [1.62575449E12, 44.0], [1.62575526E12, 65.85999999999922], [1.62575509E12, 95.90000000000009], [1.62575492E12, 126.70000000000027], [1.62575475E12, 57.660000000000025], [1.62575458E12, 49.91000000000008], [1.62575471E12, 134.17000000000004], [1.62575454E12, 75.93000000000006], [1.62575514E12, 37.32000000000005], [1.62575531E12, 39.10000000000002], [1.62575497E12, 169.74000000000058], [1.6257548E12, 39.0], [1.62575463E12, 57.0], [1.62575506E12, 27.0], [1.62575523E12, 54.74000000000012], [1.62575489E12, 102.34999999999968], [1.62575472E12, 96.11999999999998], [1.62575455E12, 36.99000000000001], [1.62575532E12, 59.82000000000005], [1.62575515E12, 34.360000000000014], [1.62575498E12, 78.96999999999998], [1.62575481E12, 30.0], [1.62575464E12, 23.0], [1.62575447E12, 4673.0], [1.62575524E12, 29.95999999999998], [1.62575507E12, 80.30000000000013], [1.6257549E12, 211.26000000000067], [1.62575473E12, 100.64000000000033], [1.62575456E12, 39.92000000000007]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62575503E12, 23.349999999999994], [1.62575486E12, 82.5], [1.62575469E12, 94.14999999999995], [1.62575452E12, 25.0], [1.62575512E12, 80.0], [1.62575529E12, 29.0], [1.62575495E12, 62.19999999999999], [1.62575478E12, 35.0], [1.62575461E12, 26.0], [1.62575521E12, 68.25], [1.62575504E12, 28.0], [1.62575487E12, 77.0], [1.6257547E12, 72.0], [1.62575453E12, 26.0], [1.6257553E12, 29.0], [1.62575513E12, 70.04999999999998], [1.62575496E12, 70.0], [1.62575479E12, 25.5], [1.62575462E12, 25.64999999999999], [1.62575522E12, 67.0], [1.62575505E12, 25.19999999999999], [1.62575488E12, 66.29999999999998], [1.62575518E12, 86.00000000000003], [1.62575535E12, 31.599999999999966], [1.62575501E12, 153.0], [1.62575484E12, 84.6], [1.62575467E12, 73.19999999999999], [1.6257545E12, 27.0], [1.6257551E12, 73.94999999999999], [1.62575527E12, 27.299999999999983], [1.62575493E12, 18.149999999999977], [1.62575476E12, 22.0], [1.62575459E12, 26.149999999999977], [1.62575536E12, 25.0], [1.62575519E12, 54.0], [1.62575502E12, 29.250000000000007], [1.62575485E12, 72.4], [1.62575468E12, 70.0], [1.62575451E12, 28.0], [1.62575528E12, 30.099999999999994], [1.62575511E12, 81.0], [1.62575494E12, 22.0], [1.62575477E12, 24.0], [1.6257546E12, 37.89999999999998], [1.6257552E12, 74.99999999999997], [1.62575537E12, 14.0], [1.62575516E12, 56.0], [1.62575533E12, 34.349999999999994], [1.62575499E12, 84.99999999999994], [1.62575482E12, 26.799999999999983], [1.62575465E12, 75.8], [1.62575448E12, 2151.399999999993], [1.62575508E12, 130.39999999999986], [1.62575525E12, 26.099999999999994], [1.62575491E12, 72.84999999999997], [1.62575474E12, 24.049999999999983], [1.62575457E12, 22.0], [1.62575534E12, 41.19999999999996], [1.62575517E12, 82.89999999999992], [1.625755E12, 145.0], [1.62575483E12, 58.0], [1.62575466E12, 94.5], [1.62575449E12, 32.599999999999966], [1.62575526E12, 27.049999999999983], [1.62575509E12, 63.0], [1.62575492E12, 65.84999999999997], [1.62575475E12, 22.149999999999977], [1.62575458E12, 17.0], [1.62575471E12, 75.0], [1.62575454E12, 25.0], [1.62575514E12, 31.30000000000001], [1.62575531E12, 28.25], [1.62575497E12, 73.19999999999999], [1.6257548E12, 29.25], [1.62575463E12, 29.74999999999997], [1.62575506E12, 24.0], [1.62575523E12, 32.0], [1.62575489E12, 75.04999999999998], [1.62575472E12, 36.599999999999966], [1.62575455E12, 21.94999999999999], [1.62575532E12, 40.0], [1.62575515E12, 26.0], [1.62575498E12, 64.89999999999998], [1.62575481E12, 27.900000000000006], [1.62575464E12, 22.9], [1.62575447E12, 4673.0], [1.62575524E12, 25.0], [1.62575507E12, 56.0], [1.6257549E12, 107.89999999999998], [1.62575473E12, 26.0], [1.62575456E12, 19.94999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575537E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 18.5, "minX": 1.0, "maxY": 47.5, "series": [{"data": [[2.0, 28.0], [8.0, 45.0], [9.0, 24.0], [10.0, 45.0], [11.0, 23.0], [3.0, 47.0], [12.0, 23.0], [13.0, 21.0], [14.0, 21.0], [15.0, 22.0], [1.0, 47.0], [16.0, 21.0], [4.0, 47.5], [17.0, 23.0], [18.0, 21.0], [19.0, 18.5], [5.0, 47.0], [20.0, 19.0], [21.0, 23.0], [22.0, 18.5], [6.0, 23.0], [7.0, 45.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 17.0, "minX": 1.0, "maxY": 41.0, "series": [{"data": [[2.0, 26.0], [8.0, 38.0], [9.0, 21.5], [10.0, 39.0], [11.0, 20.0], [3.0, 41.0], [12.0, 21.0], [13.0, 19.0], [14.0, 19.0], [15.0, 20.0], [1.0, 40.0], [16.0, 19.0], [4.0, 40.5], [17.0, 21.0], [18.0, 19.0], [19.0, 17.0], [5.0, 40.0], [20.0, 18.0], [21.0, 21.5], [22.0, 18.0], [6.0, 20.5], [7.0, 39.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.62575447E12, "maxY": 20.0, "series": [{"data": [[1.62575503E12, 7.2], [1.62575486E12, 10.4], [1.62575469E12, 13.8], [1.62575452E12, 17.0], [1.62575512E12, 20.0], [1.62575529E12, 19.8], [1.62575495E12, 19.6], [1.62575478E12, 16.4], [1.62575461E12, 13.8], [1.62575521E12, 7.4], [1.62575504E12, 10.4], [1.62575487E12, 13.8], [1.6257547E12, 17.3], [1.62575453E12, 19.8], [1.6257553E12, 19.8], [1.62575513E12, 19.7], [1.62575496E12, 17.0], [1.62575479E12, 13.5], [1.62575462E12, 10.6], [1.62575522E12, 10.5], [1.62575505E12, 13.7], [1.62575488E12, 17.3], [1.62575518E12, 3.7], [1.62575535E12, 7.1], [1.62575501E12, 1.5], [1.62575484E12, 4.3], [1.62575467E12, 7.8], [1.6257545E12, 10.9], [1.6257551E12, 20.0], [1.62575527E12, 19.7], [1.62575493E12, 19.6], [1.62575476E12, 19.9], [1.62575459E12, 19.7], [1.62575536E12, 3.9], [1.62575519E12, 1.5], [1.62575502E12, 4.2], [1.62575485E12, 7.5], [1.62575468E12, 10.9], [1.62575451E12, 13.9], [1.62575528E12, 19.7], [1.62575511E12, 20.0], [1.62575494E12, 19.7], [1.62575477E12, 19.3], [1.6257546E12, 16.9], [1.6257552E12, 4.3], [1.62575537E12, 0.7], [1.62575516E12, 10.2], [1.62575533E12, 13.2], [1.62575499E12, 6.8], [1.62575482E12, 3.5], [1.62575465E12, 2.0], [1.62575448E12, 2.6], [1.62575508E12, 10.1], [1.62575525E12, 19.6], [1.62575491E12, 20.0], [1.62575474E12, 19.8], [1.62575457E12, 20.0], [1.62575534E12, 10.3], [1.62575517E12, 7.2], [1.625755E12, 4.0], [1.62575483E12, 1.6], [1.62575466E12, 4.4], [1.62575449E12, 7.6], [1.62575526E12, 19.8], [1.62575509E12, 20.0], [1.62575492E12, 19.9], [1.62575475E12, 19.6], [1.62575458E12, 20.0], [1.62575471E12, 19.5], [1.62575454E12, 20.0], [1.62575514E12, 16.7], [1.62575531E12, 19.3], [1.62575497E12, 13.6], [1.6257548E12, 10.3], [1.62575463E12, 7.2], [1.62575506E12, 17.1], [1.62575523E12, 13.7], [1.62575489E12, 19.8], [1.62575472E12, 19.5], [1.62575455E12, 20.0], [1.62575532E12, 16.8], [1.62575515E12, 13.0], [1.62575498E12, 10.0], [1.62575481E12, 7.0], [1.62575464E12, 4.1], [1.62575447E12, 0.4], [1.62575524E12, 16.8], [1.62575507E12, 19.3], [1.6257549E12, 20.0], [1.62575473E12, 19.7], [1.62575456E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575537E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62575447E12, "maxY": 20.0, "series": [{"data": [[1.62575503E12, 7.2], [1.62575486E12, 10.4], [1.62575469E12, 13.8], [1.62575452E12, 17.0], [1.62575512E12, 20.0], [1.62575529E12, 19.8], [1.62575495E12, 19.5], [1.62575478E12, 16.5], [1.62575461E12, 13.8], [1.62575521E12, 7.4], [1.62575504E12, 10.4], [1.62575487E12, 13.7], [1.6257547E12, 17.2], [1.62575453E12, 19.8], [1.6257553E12, 19.7], [1.62575513E12, 19.8], [1.62575496E12, 17.0], [1.62575479E12, 13.4], [1.62575462E12, 10.6], [1.62575522E12, 10.5], [1.62575505E12, 13.7], [1.62575488E12, 17.3], [1.62575518E12, 3.7], [1.62575535E12, 7.1], [1.62575501E12, 1.6], [1.62575484E12, 4.3], [1.62575467E12, 7.8], [1.6257545E12, 10.9], [1.6257551E12, 20.0], [1.62575527E12, 19.7], [1.62575493E12, 19.6], [1.62575476E12, 19.9], [1.62575459E12, 19.6], [1.62575536E12, 3.9], [1.62575519E12, 1.5], [1.62575502E12, 4.2], [1.62575485E12, 7.5], [1.62575468E12, 10.9], [1.62575451E12, 13.9], [1.62575528E12, 19.7], [1.62575511E12, 20.0], [1.62575494E12, 19.7], [1.62575477E12, 19.2], [1.6257546E12, 17.0], [1.6257552E12, 4.3], [1.62575537E12, 0.7], [1.62575516E12, 10.2], [1.62575533E12, 13.2], [1.62575499E12, 6.8], [1.62575482E12, 3.5], [1.62575465E12, 2.0], [1.62575448E12, 2.7], [1.62575508E12, 10.0], [1.62575525E12, 19.7], [1.62575491E12, 20.0], [1.62575474E12, 19.8], [1.62575457E12, 20.0], [1.62575534E12, 10.3], [1.62575517E12, 7.2], [1.625755E12, 3.9], [1.62575483E12, 1.6], [1.62575466E12, 4.4], [1.62575449E12, 7.6], [1.62575526E12, 19.8], [1.62575509E12, 20.0], [1.62575492E12, 20.0], [1.62575475E12, 19.6], [1.62575458E12, 20.0], [1.62575471E12, 19.6], [1.62575454E12, 20.0], [1.62575514E12, 16.6], [1.62575531E12, 19.4], [1.62575497E12, 13.7], [1.6257548E12, 10.4], [1.62575463E12, 7.2], [1.62575506E12, 17.1], [1.62575523E12, 13.7], [1.62575489E12, 19.8], [1.62575472E12, 19.5], [1.62575455E12, 20.0], [1.62575532E12, 16.8], [1.62575515E12, 13.1], [1.62575498E12, 10.0], [1.62575481E12, 7.0], [1.62575464E12, 4.1], [1.62575447E12, 0.3], [1.62575524E12, 16.7], [1.62575507E12, 19.3], [1.6257549E12, 20.0], [1.62575473E12, 19.7], [1.62575456E12, 20.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575537E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62575447E12, "maxY": 20.0, "series": [{"data": [[1.62575503E12, 7.2], [1.62575486E12, 10.4], [1.62575469E12, 13.8], [1.62575452E12, 17.0], [1.62575512E12, 20.0], [1.62575529E12, 19.8], [1.62575495E12, 19.5], [1.62575478E12, 16.5], [1.62575461E12, 13.8], [1.62575521E12, 7.4], [1.62575504E12, 10.4], [1.62575487E12, 13.7], [1.6257547E12, 17.2], [1.62575453E12, 19.8], [1.6257553E12, 19.7], [1.62575513E12, 19.8], [1.62575496E12, 17.0], [1.62575479E12, 13.4], [1.62575462E12, 10.6], [1.62575522E12, 10.5], [1.62575505E12, 13.7], [1.62575488E12, 17.3], [1.62575518E12, 3.7], [1.62575535E12, 7.1], [1.62575501E12, 1.6], [1.62575484E12, 4.3], [1.62575467E12, 7.8], [1.6257545E12, 10.9], [1.6257551E12, 20.0], [1.62575527E12, 19.7], [1.62575493E12, 19.6], [1.62575476E12, 19.9], [1.62575459E12, 19.6], [1.62575536E12, 3.9], [1.62575519E12, 1.5], [1.62575502E12, 4.2], [1.62575485E12, 7.5], [1.62575468E12, 10.9], [1.62575451E12, 13.9], [1.62575528E12, 19.7], [1.62575511E12, 20.0], [1.62575494E12, 19.7], [1.62575477E12, 19.2], [1.6257546E12, 17.0], [1.6257552E12, 4.3], [1.62575537E12, 0.7], [1.62575516E12, 10.2], [1.62575533E12, 13.2], [1.62575499E12, 6.8], [1.62575482E12, 3.5], [1.62575465E12, 2.0], [1.62575448E12, 2.7], [1.62575508E12, 10.0], [1.62575525E12, 19.7], [1.62575491E12, 20.0], [1.62575474E12, 19.8], [1.62575457E12, 20.0], [1.62575534E12, 10.3], [1.62575517E12, 7.2], [1.625755E12, 3.9], [1.62575483E12, 1.6], [1.62575466E12, 4.4], [1.62575449E12, 7.6], [1.62575526E12, 19.8], [1.62575509E12, 20.0], [1.62575492E12, 20.0], [1.62575475E12, 19.6], [1.62575458E12, 20.0], [1.62575471E12, 19.6], [1.62575454E12, 20.0], [1.62575514E12, 16.6], [1.62575531E12, 19.4], [1.62575497E12, 13.7], [1.6257548E12, 10.4], [1.62575463E12, 7.2], [1.62575506E12, 17.1], [1.62575523E12, 13.7], [1.62575489E12, 19.8], [1.62575472E12, 19.5], [1.62575455E12, 20.0], [1.62575532E12, 16.8], [1.62575515E12, 13.1], [1.62575498E12, 10.0], [1.62575481E12, 7.0], [1.62575464E12, 4.1], [1.62575447E12, 0.3], [1.62575524E12, 16.7], [1.62575507E12, 19.3], [1.6257549E12, 20.0], [1.62575473E12, 19.7], [1.62575456E12, 20.0]], "isOverall": false, "label": "Press Release-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575537E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62575447E12, "maxY": 20.0, "series": [{"data": [[1.62575503E12, 7.2], [1.62575486E12, 10.4], [1.62575469E12, 13.8], [1.62575452E12, 17.0], [1.62575512E12, 20.0], [1.62575529E12, 19.8], [1.62575495E12, 19.5], [1.62575478E12, 16.5], [1.62575461E12, 13.8], [1.62575521E12, 7.4], [1.62575504E12, 10.4], [1.62575487E12, 13.7], [1.6257547E12, 17.2], [1.62575453E12, 19.8], [1.6257553E12, 19.7], [1.62575513E12, 19.8], [1.62575496E12, 17.0], [1.62575479E12, 13.4], [1.62575462E12, 10.6], [1.62575522E12, 10.5], [1.62575505E12, 13.7], [1.62575488E12, 17.3], [1.62575518E12, 3.7], [1.62575535E12, 7.1], [1.62575501E12, 1.6], [1.62575484E12, 4.3], [1.62575467E12, 7.8], [1.6257545E12, 10.9], [1.6257551E12, 20.0], [1.62575527E12, 19.7], [1.62575493E12, 19.6], [1.62575476E12, 19.9], [1.62575459E12, 19.6], [1.62575536E12, 3.9], [1.62575519E12, 1.5], [1.62575502E12, 4.2], [1.62575485E12, 7.5], [1.62575468E12, 10.9], [1.62575451E12, 13.9], [1.62575528E12, 19.7], [1.62575511E12, 20.0], [1.62575494E12, 19.7], [1.62575477E12, 19.2], [1.6257546E12, 17.0], [1.6257552E12, 4.3], [1.62575537E12, 0.7], [1.62575516E12, 10.2], [1.62575533E12, 13.2], [1.62575499E12, 6.8], [1.62575482E12, 3.5], [1.62575465E12, 2.0], [1.62575448E12, 2.7], [1.62575508E12, 10.0], [1.62575525E12, 19.7], [1.62575491E12, 20.0], [1.62575474E12, 19.8], [1.62575457E12, 20.0], [1.62575534E12, 10.3], [1.62575517E12, 7.2], [1.625755E12, 3.9], [1.62575483E12, 1.6], [1.62575466E12, 4.4], [1.62575449E12, 7.6], [1.62575526E12, 19.8], [1.62575509E12, 20.0], [1.62575492E12, 20.0], [1.62575475E12, 19.6], [1.62575458E12, 20.0], [1.62575471E12, 19.6], [1.62575454E12, 20.0], [1.62575514E12, 16.6], [1.62575531E12, 19.4], [1.62575497E12, 13.7], [1.6257548E12, 10.4], [1.62575463E12, 7.2], [1.62575506E12, 17.1], [1.62575523E12, 13.7], [1.62575489E12, 19.8], [1.62575472E12, 19.5], [1.62575455E12, 20.0], [1.62575532E12, 16.8], [1.62575515E12, 13.1], [1.62575498E12, 10.0], [1.62575481E12, 7.0], [1.62575464E12, 4.1], [1.62575447E12, 0.3], [1.62575524E12, 16.7], [1.62575507E12, 19.3], [1.6257549E12, 20.0], [1.62575473E12, 19.7], [1.62575456E12, 20.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575537E12, "title": "Total Transactions Per Second"}},
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

