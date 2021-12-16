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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 5391.0, "series": [{"data": [[0.0, 8.0], [0.1, 8.0], [0.2, 8.0], [0.3, 8.0], [0.4, 8.0], [0.5, 9.0], [0.6, 9.0], [0.7, 9.0], [0.8, 9.0], [0.9, 9.0], [1.0, 9.0], [1.1, 9.0], [1.2, 9.0], [1.3, 9.0], [1.4, 9.0], [1.5, 9.0], [1.6, 9.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 9.0], [2.6, 9.0], [2.7, 9.0], [2.8, 9.0], [2.9, 9.0], [3.0, 9.0], [3.1, 9.0], [3.2, 9.0], [3.3, 9.0], [3.4, 9.0], [3.5, 9.0], [3.6, 9.0], [3.7, 9.0], [3.8, 9.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 9.0], [4.5, 9.0], [4.6, 9.0], [4.7, 10.0], [4.8, 10.0], [4.9, 10.0], [5.0, 10.0], [5.1, 10.0], [5.2, 10.0], [5.3, 10.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 10.0], [6.2, 10.0], [6.3, 10.0], [6.4, 10.0], [6.5, 10.0], [6.6, 10.0], [6.7, 10.0], [6.8, 10.0], [6.9, 10.0], [7.0, 10.0], [7.1, 10.0], [7.2, 10.0], [7.3, 10.0], [7.4, 10.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 10.0], [9.0, 10.0], [9.1, 10.0], [9.2, 10.0], [9.3, 10.0], [9.4, 10.0], [9.5, 10.0], [9.6, 10.0], [9.7, 10.0], [9.8, 10.0], [9.9, 10.0], [10.0, 10.0], [10.1, 10.0], [10.2, 10.0], [10.3, 10.0], [10.4, 10.0], [10.5, 10.0], [10.6, 10.0], [10.7, 10.0], [10.8, 10.0], [10.9, 10.0], [11.0, 10.0], [11.1, 10.0], [11.2, 10.0], [11.3, 10.0], [11.4, 11.0], [11.5, 11.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 11.0], [12.1, 11.0], [12.2, 11.0], [12.3, 11.0], [12.4, 11.0], [12.5, 11.0], [12.6, 11.0], [12.7, 11.0], [12.8, 11.0], [12.9, 11.0], [13.0, 11.0], [13.1, 11.0], [13.2, 11.0], [13.3, 11.0], [13.4, 11.0], [13.5, 11.0], [13.6, 11.0], [13.7, 11.0], [13.8, 11.0], [13.9, 11.0], [14.0, 11.0], [14.1, 11.0], [14.2, 11.0], [14.3, 11.0], [14.4, 11.0], [14.5, 11.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 11.0], [15.1, 11.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 11.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 11.0], [16.7, 11.0], [16.8, 11.0], [16.9, 11.0], [17.0, 12.0], [17.1, 12.0], [17.2, 12.0], [17.3, 12.0], [17.4, 12.0], [17.5, 12.0], [17.6, 12.0], [17.7, 12.0], [17.8, 12.0], [17.9, 12.0], [18.0, 12.0], [18.1, 12.0], [18.2, 12.0], [18.3, 12.0], [18.4, 12.0], [18.5, 12.0], [18.6, 12.0], [18.7, 12.0], [18.8, 12.0], [18.9, 12.0], [19.0, 12.0], [19.1, 12.0], [19.2, 12.0], [19.3, 12.0], [19.4, 12.0], [19.5, 12.0], [19.6, 12.0], [19.7, 12.0], [19.8, 12.0], [19.9, 12.0], [20.0, 12.0], [20.1, 12.0], [20.2, 12.0], [20.3, 12.0], [20.4, 12.0], [20.5, 12.0], [20.6, 12.0], [20.7, 12.0], [20.8, 12.0], [20.9, 12.0], [21.0, 12.0], [21.1, 12.0], [21.2, 12.0], [21.3, 12.0], [21.4, 12.0], [21.5, 12.0], [21.6, 12.0], [21.7, 12.0], [21.8, 12.0], [21.9, 12.0], [22.0, 12.0], [22.1, 12.0], [22.2, 12.0], [22.3, 12.0], [22.4, 12.0], [22.5, 12.0], [22.6, 12.0], [22.7, 12.0], [22.8, 13.0], [22.9, 13.0], [23.0, 13.0], [23.1, 13.0], [23.2, 13.0], [23.3, 13.0], [23.4, 13.0], [23.5, 13.0], [23.6, 13.0], [23.7, 13.0], [23.8, 13.0], [23.9, 13.0], [24.0, 13.0], [24.1, 13.0], [24.2, 13.0], [24.3, 13.0], [24.4, 13.0], [24.5, 13.0], [24.6, 13.0], [24.7, 13.0], [24.8, 13.0], [24.9, 13.0], [25.0, 13.0], [25.1, 13.0], [25.2, 13.0], [25.3, 13.0], [25.4, 13.0], [25.5, 13.0], [25.6, 13.0], [25.7, 13.0], [25.8, 13.0], [25.9, 13.0], [26.0, 13.0], [26.1, 13.0], [26.2, 13.0], [26.3, 13.0], [26.4, 13.0], [26.5, 13.0], [26.6, 13.0], [26.7, 13.0], [26.8, 13.0], [26.9, 13.0], [27.0, 13.0], [27.1, 13.0], [27.2, 13.0], [27.3, 13.0], [27.4, 13.0], [27.5, 13.0], [27.6, 13.0], [27.7, 13.0], [27.8, 13.0], [27.9, 13.0], [28.0, 13.0], [28.1, 13.0], [28.2, 13.0], [28.3, 13.0], [28.4, 13.0], [28.5, 13.0], [28.6, 13.0], [28.7, 13.0], [28.8, 13.0], [28.9, 13.0], [29.0, 13.0], [29.1, 13.0], [29.2, 13.0], [29.3, 13.0], [29.4, 13.0], [29.5, 13.0], [29.6, 13.0], [29.7, 13.0], [29.8, 13.0], [29.9, 13.0], [30.0, 13.0], [30.1, 13.0], [30.2, 13.0], [30.3, 13.0], [30.4, 14.0], [30.5, 14.0], [30.6, 14.0], [30.7, 14.0], [30.8, 14.0], [30.9, 14.0], [31.0, 14.0], [31.1, 14.0], [31.2, 14.0], [31.3, 14.0], [31.4, 14.0], [31.5, 14.0], [31.6, 14.0], [31.7, 14.0], [31.8, 14.0], [31.9, 14.0], [32.0, 14.0], [32.1, 14.0], [32.2, 14.0], [32.3, 14.0], [32.4, 14.0], [32.5, 14.0], [32.6, 14.0], [32.7, 14.0], [32.8, 14.0], [32.9, 14.0], [33.0, 14.0], [33.1, 14.0], [33.2, 14.0], [33.3, 14.0], [33.4, 14.0], [33.5, 14.0], [33.6, 14.0], [33.7, 14.0], [33.8, 14.0], [33.9, 14.0], [34.0, 14.0], [34.1, 14.0], [34.2, 14.0], [34.3, 14.0], [34.4, 14.0], [34.5, 14.0], [34.6, 14.0], [34.7, 14.0], [34.8, 14.0], [34.9, 14.0], [35.0, 14.0], [35.1, 14.0], [35.2, 14.0], [35.3, 14.0], [35.4, 14.0], [35.5, 14.0], [35.6, 14.0], [35.7, 14.0], [35.8, 14.0], [35.9, 14.0], [36.0, 14.0], [36.1, 14.0], [36.2, 14.0], [36.3, 14.0], [36.4, 14.0], [36.5, 14.0], [36.6, 14.0], [36.7, 14.0], [36.8, 14.0], [36.9, 14.0], [37.0, 14.0], [37.1, 15.0], [37.2, 15.0], [37.3, 15.0], [37.4, 15.0], [37.5, 15.0], [37.6, 15.0], [37.7, 15.0], [37.8, 15.0], [37.9, 15.0], [38.0, 15.0], [38.1, 15.0], [38.2, 15.0], [38.3, 15.0], [38.4, 15.0], [38.5, 15.0], [38.6, 15.0], [38.7, 15.0], [38.8, 15.0], [38.9, 15.0], [39.0, 15.0], [39.1, 15.0], [39.2, 15.0], [39.3, 15.0], [39.4, 15.0], [39.5, 15.0], [39.6, 15.0], [39.7, 15.0], [39.8, 15.0], [39.9, 15.0], [40.0, 15.0], [40.1, 15.0], [40.2, 15.0], [40.3, 15.0], [40.4, 15.0], [40.5, 15.0], [40.6, 15.0], [40.7, 15.0], [40.8, 15.0], [40.9, 15.0], [41.0, 15.0], [41.1, 15.0], [41.2, 15.0], [41.3, 15.0], [41.4, 15.0], [41.5, 15.0], [41.6, 15.0], [41.7, 16.0], [41.8, 16.0], [41.9, 16.0], [42.0, 16.0], [42.1, 16.0], [42.2, 16.0], [42.3, 16.0], [42.4, 16.0], [42.5, 16.0], [42.6, 16.0], [42.7, 16.0], [42.8, 16.0], [42.9, 16.0], [43.0, 16.0], [43.1, 16.0], [43.2, 16.0], [43.3, 16.0], [43.4, 16.0], [43.5, 16.0], [43.6, 16.0], [43.7, 16.0], [43.8, 16.0], [43.9, 16.0], [44.0, 16.0], [44.1, 16.0], [44.2, 16.0], [44.3, 16.0], [44.4, 16.0], [44.5, 16.0], [44.6, 16.0], [44.7, 16.0], [44.8, 17.0], [44.9, 17.0], [45.0, 17.0], [45.1, 17.0], [45.2, 17.0], [45.3, 17.0], [45.4, 17.0], [45.5, 17.0], [45.6, 17.0], [45.7, 17.0], [45.8, 17.0], [45.9, 17.0], [46.0, 17.0], [46.1, 17.0], [46.2, 17.0], [46.3, 17.0], [46.4, 17.0], [46.5, 17.0], [46.6, 17.0], [46.7, 17.0], [46.8, 17.0], [46.9, 17.0], [47.0, 17.0], [47.1, 17.0], [47.2, 17.0], [47.3, 17.0], [47.4, 17.0], [47.5, 17.0], [47.6, 17.0], [47.7, 17.0], [47.8, 18.0], [47.9, 18.0], [48.0, 18.0], [48.1, 18.0], [48.2, 18.0], [48.3, 18.0], [48.4, 18.0], [48.5, 18.0], [48.6, 18.0], [48.7, 18.0], [48.8, 18.0], [48.9, 18.0], [49.0, 18.0], [49.1, 18.0], [49.2, 18.0], [49.3, 18.0], [49.4, 18.0], [49.5, 18.0], [49.6, 18.0], [49.7, 18.0], [49.8, 18.0], [49.9, 18.0], [50.0, 18.0], [50.1, 18.0], [50.2, 18.0], [50.3, 18.0], [50.4, 18.0], [50.5, 18.0], [50.6, 18.0], [50.7, 18.0], [50.8, 18.0], [50.9, 18.0], [51.0, 18.0], [51.1, 18.0], [51.2, 18.0], [51.3, 18.0], [51.4, 18.0], [51.5, 18.0], [51.6, 18.0], [51.7, 18.0], [51.8, 18.0], [51.9, 18.0], [52.0, 18.0], [52.1, 18.0], [52.2, 18.0], [52.3, 19.0], [52.4, 19.0], [52.5, 19.0], [52.6, 19.0], [52.7, 19.0], [52.8, 19.0], [52.9, 19.0], [53.0, 19.0], [53.1, 19.0], [53.2, 19.0], [53.3, 19.0], [53.4, 19.0], [53.5, 19.0], [53.6, 19.0], [53.7, 19.0], [53.8, 19.0], [53.9, 19.0], [54.0, 19.0], [54.1, 19.0], [54.2, 19.0], [54.3, 19.0], [54.4, 19.0], [54.5, 19.0], [54.6, 19.0], [54.7, 19.0], [54.8, 19.0], [54.9, 19.0], [55.0, 19.0], [55.1, 19.0], [55.2, 19.0], [55.3, 19.0], [55.4, 19.0], [55.5, 19.0], [55.6, 19.0], [55.7, 19.0], [55.8, 19.0], [55.9, 19.0], [56.0, 19.0], [56.1, 19.0], [56.2, 19.0], [56.3, 19.0], [56.4, 19.0], [56.5, 19.0], [56.6, 19.0], [56.7, 19.0], [56.8, 19.0], [56.9, 19.0], [57.0, 19.0], [57.1, 19.0], [57.2, 19.0], [57.3, 19.0], [57.4, 19.0], [57.5, 19.0], [57.6, 19.0], [57.7, 19.0], [57.8, 19.0], [57.9, 19.0], [58.0, 19.0], [58.1, 19.0], [58.2, 19.0], [58.3, 19.0], [58.4, 19.0], [58.5, 19.0], [58.6, 20.0], [58.7, 20.0], [58.8, 20.0], [58.9, 20.0], [59.0, 20.0], [59.1, 20.0], [59.2, 20.0], [59.3, 20.0], [59.4, 20.0], [59.5, 20.0], [59.6, 20.0], [59.7, 20.0], [59.8, 20.0], [59.9, 20.0], [60.0, 20.0], [60.1, 20.0], [60.2, 20.0], [60.3, 20.0], [60.4, 20.0], [60.5, 20.0], [60.6, 20.0], [60.7, 20.0], [60.8, 20.0], [60.9, 20.0], [61.0, 20.0], [61.1, 20.0], [61.2, 20.0], [61.3, 20.0], [61.4, 20.0], [61.5, 20.0], [61.6, 20.0], [61.7, 20.0], [61.8, 20.0], [61.9, 20.0], [62.0, 20.0], [62.1, 20.0], [62.2, 20.0], [62.3, 20.0], [62.4, 20.0], [62.5, 20.0], [62.6, 20.0], [62.7, 20.0], [62.8, 20.0], [62.9, 20.0], [63.0, 20.0], [63.1, 20.0], [63.2, 20.0], [63.3, 20.0], [63.4, 20.0], [63.5, 20.0], [63.6, 20.0], [63.7, 20.0], [63.8, 20.0], [63.9, 20.0], [64.0, 20.0], [64.1, 20.0], [64.2, 20.0], [64.3, 20.0], [64.4, 20.0], [64.5, 21.0], [64.6, 21.0], [64.7, 21.0], [64.8, 21.0], [64.9, 21.0], [65.0, 21.0], [65.1, 21.0], [65.2, 21.0], [65.3, 21.0], [65.4, 21.0], [65.5, 21.0], [65.6, 21.0], [65.7, 21.0], [65.8, 21.0], [65.9, 21.0], [66.0, 21.0], [66.1, 21.0], [66.2, 21.0], [66.3, 21.0], [66.4, 21.0], [66.5, 21.0], [66.6, 21.0], [66.7, 21.0], [66.8, 21.0], [66.9, 21.0], [67.0, 21.0], [67.1, 21.0], [67.2, 21.0], [67.3, 21.0], [67.4, 21.0], [67.5, 21.0], [67.6, 21.0], [67.7, 21.0], [67.8, 21.0], [67.9, 21.0], [68.0, 21.0], [68.1, 21.0], [68.2, 21.0], [68.3, 21.0], [68.4, 21.0], [68.5, 21.0], [68.6, 21.0], [68.7, 21.0], [68.8, 21.0], [68.9, 21.0], [69.0, 21.0], [69.1, 21.0], [69.2, 21.0], [69.3, 21.0], [69.4, 21.0], [69.5, 21.0], [69.6, 21.0], [69.7, 21.0], [69.8, 21.0], [69.9, 22.0], [70.0, 22.0], [70.1, 22.0], [70.2, 22.0], [70.3, 22.0], [70.4, 22.0], [70.5, 22.0], [70.6, 22.0], [70.7, 22.0], [70.8, 22.0], [70.9, 22.0], [71.0, 22.0], [71.1, 22.0], [71.2, 22.0], [71.3, 22.0], [71.4, 22.0], [71.5, 22.0], [71.6, 22.0], [71.7, 22.0], [71.8, 22.0], [71.9, 22.0], [72.0, 22.0], [72.1, 22.0], [72.2, 22.0], [72.3, 22.0], [72.4, 22.0], [72.5, 22.0], [72.6, 22.0], [72.7, 22.0], [72.8, 22.0], [72.9, 22.0], [73.0, 22.0], [73.1, 22.0], [73.2, 22.0], [73.3, 22.0], [73.4, 22.0], [73.5, 22.0], [73.6, 22.0], [73.7, 22.0], [73.8, 22.0], [73.9, 22.0], [74.0, 22.0], [74.1, 22.0], [74.2, 22.0], [74.3, 22.0], [74.4, 22.0], [74.5, 22.0], [74.6, 22.0], [74.7, 23.0], [74.8, 23.0], [74.9, 23.0], [75.0, 23.0], [75.1, 23.0], [75.2, 23.0], [75.3, 23.0], [75.4, 23.0], [75.5, 23.0], [75.6, 23.0], [75.7, 23.0], [75.8, 23.0], [75.9, 23.0], [76.0, 23.0], [76.1, 23.0], [76.2, 23.0], [76.3, 23.0], [76.4, 23.0], [76.5, 23.0], [76.6, 23.0], [76.7, 23.0], [76.8, 23.0], [76.9, 23.0], [77.0, 23.0], [77.1, 23.0], [77.2, 23.0], [77.3, 23.0], [77.4, 23.0], [77.5, 23.0], [77.6, 23.0], [77.7, 23.0], [77.8, 23.0], [77.9, 23.0], [78.0, 23.0], [78.1, 23.0], [78.2, 23.0], [78.3, 23.0], [78.4, 23.0], [78.5, 23.0], [78.6, 23.0], [78.7, 23.0], [78.8, 24.0], [78.9, 24.0], [79.0, 24.0], [79.1, 24.0], [79.2, 24.0], [79.3, 24.0], [79.4, 24.0], [79.5, 24.0], [79.6, 24.0], [79.7, 24.0], [79.8, 24.0], [79.9, 24.0], [80.0, 24.0], [80.1, 24.0], [80.2, 24.0], [80.3, 24.0], [80.4, 24.0], [80.5, 24.0], [80.6, 24.0], [80.7, 24.0], [80.8, 24.0], [80.9, 24.0], [81.0, 24.0], [81.1, 24.0], [81.2, 24.0], [81.3, 24.0], [81.4, 24.0], [81.5, 24.0], [81.6, 24.0], [81.7, 24.0], [81.8, 24.0], [81.9, 24.0], [82.0, 25.0], [82.1, 25.0], [82.2, 25.0], [82.3, 25.0], [82.4, 25.0], [82.5, 25.0], [82.6, 25.0], [82.7, 25.0], [82.8, 25.0], [82.9, 25.0], [83.0, 25.0], [83.1, 25.0], [83.2, 25.0], [83.3, 25.0], [83.4, 25.0], [83.5, 25.0], [83.6, 25.0], [83.7, 25.0], [83.8, 25.0], [83.9, 25.0], [84.0, 25.0], [84.1, 25.0], [84.2, 25.0], [84.3, 25.0], [84.4, 25.0], [84.5, 25.0], [84.6, 25.0], [84.7, 26.0], [84.8, 26.0], [84.9, 26.0], [85.0, 26.0], [85.1, 26.0], [85.2, 26.0], [85.3, 26.0], [85.4, 26.0], [85.5, 26.0], [85.6, 26.0], [85.7, 26.0], [85.8, 26.0], [85.9, 26.0], [86.0, 26.0], [86.1, 26.0], [86.2, 26.0], [86.3, 26.0], [86.4, 26.0], [86.5, 26.0], [86.6, 26.0], [86.7, 27.0], [86.8, 27.0], [86.9, 27.0], [87.0, 27.0], [87.1, 27.0], [87.2, 27.0], [87.3, 27.0], [87.4, 27.0], [87.5, 27.0], [87.6, 27.0], [87.7, 27.0], [87.8, 27.0], [87.9, 27.0], [88.0, 27.0], [88.1, 27.0], [88.2, 27.0], [88.3, 28.0], [88.4, 28.0], [88.5, 28.0], [88.6, 28.0], [88.7, 28.0], [88.8, 28.0], [88.9, 28.0], [89.0, 28.0], [89.1, 28.0], [89.2, 28.0], [89.3, 28.0], [89.4, 28.0], [89.5, 28.0], [89.6, 28.0], [89.7, 29.0], [89.8, 29.0], [89.9, 29.0], [90.0, 29.0], [90.1, 29.0], [90.2, 29.0], [90.3, 29.0], [90.4, 29.0], [90.5, 30.0], [90.6, 30.0], [90.7, 30.0], [90.8, 30.0], [90.9, 30.0], [91.0, 30.0], [91.1, 30.0], [91.2, 30.0], [91.3, 30.0], [91.4, 30.0], [91.5, 31.0], [91.6, 31.0], [91.7, 31.0], [91.8, 31.0], [91.9, 31.0], [92.0, 32.0], [92.1, 32.0], [92.2, 32.0], [92.3, 32.0], [92.4, 32.0], [92.5, 33.0], [92.6, 33.0], [92.7, 33.0], [92.8, 33.0], [92.9, 34.0], [93.0, 34.0], [93.1, 34.0], [93.2, 35.0], [93.3, 35.0], [93.4, 35.0], [93.5, 36.0], [93.6, 36.0], [93.7, 37.0], [93.8, 37.0], [93.9, 38.0], [94.0, 38.0], [94.1, 38.0], [94.2, 39.0], [94.3, 40.0], [94.4, 40.0], [94.5, 41.0], [94.6, 42.0], [94.7, 43.0], [94.8, 44.0], [94.9, 45.0], [95.0, 46.0], [95.1, 46.0], [95.2, 47.0], [95.3, 47.0], [95.4, 48.0], [95.5, 48.0], [95.6, 48.0], [95.7, 48.0], [95.8, 48.0], [95.9, 49.0], [96.0, 49.0], [96.1, 49.0], [96.2, 50.0], [96.3, 50.0], [96.4, 50.0], [96.5, 51.0], [96.6, 51.0], [96.7, 51.0], [96.8, 51.0], [96.9, 52.0], [97.0, 52.0], [97.1, 52.0], [97.2, 52.0], [97.3, 52.0], [97.4, 53.0], [97.5, 53.0], [97.6, 53.0], [97.7, 54.0], [97.8, 54.0], [97.9, 54.0], [98.0, 55.0], [98.1, 55.0], [98.2, 55.0], [98.3, 55.0], [98.4, 56.0], [98.5, 56.0], [98.6, 56.0], [98.7, 57.0], [98.8, 57.0], [98.9, 58.0], [99.0, 59.0], [99.1, 60.0], [99.2, 61.0], [99.3, 63.0], [99.4, 65.0], [99.5, 68.0], [99.6, 72.0], [99.7, 78.0], [99.8, 92.0], [99.9, 130.0], [100.0, 5391.0]], "isOverall": false, "label": "Sunstar Home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 12272.0, "series": [{"data": [[0.0, 12272.0], [4100.0, 1.0], [5100.0, 1.0], [5300.0, 1.0], [3100.0, 1.0], [100.0, 13.0], [200.0, 3.0], [3900.0, 1.0]], "isOverall": false, "label": "Sunstar Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12288.0, "series": [{"data": [[0.0, 12288.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.8, "minX": 1.62572425E12, "maxY": 18.0, "series": [{"data": [[1.62572429E12, 2.0], [1.62572506E12, 2.0], [1.62572446E12, 2.0], [1.62572489E12, 2.0], [1.62572463E12, 2.0], [1.62572472E12, 2.0], [1.62572515E12, 1.8], [1.62572498E12, 2.0], [1.62572438E12, 2.0], [1.62572455E12, 2.0], [1.62572464E12, 2.0], [1.62572481E12, 2.0], [1.62572507E12, 2.0], [1.6257249E12, 2.0], [1.6257243E12, 2.0], [1.62572447E12, 2.0], [1.62572456E12, 2.0], [1.62572473E12, 2.0], [1.62572499E12, 2.0], [1.62572482E12, 2.0], [1.62572439E12, 2.0], [1.62572448E12, 2.0], [1.62572465E12, 2.0], [1.62572491E12, 2.0], [1.62572431E12, 2.0], [1.6257244E12, 2.0], [1.62572457E12, 2.0], [1.62572474E12, 2.0], [1.62572508E12, 2.0], [1.62572483E12, 2.0], [1.62572432E12, 2.0], [1.62572449E12, 2.0], [1.62572466E12, 2.0], [1.625725E12, 2.0], [1.62572441E12, 2.0], [1.62572458E12, 2.0], [1.62572509E12, 2.0], [1.62572475E12, 2.0], [1.62572492E12, 2.0], [1.62572433E12, 2.0], [1.6257245E12, 2.0], [1.62572501E12, 2.0], [1.62572467E12, 2.0], [1.62572484E12, 2.0], [1.62572476E12, 2.0], [1.62572425E12, 18.0], [1.6257251E12, 2.0], [1.62572442E12, 2.0], [1.62572493E12, 2.0], [1.62572459E12, 2.0], [1.62572468E12, 2.0], [1.62572502E12, 2.0], [1.62572434E12, 2.0], [1.62572485E12, 2.0], [1.62572451E12, 2.0], [1.6257246E12, 2.0], [1.62572477E12, 2.0], [1.62572511E12, 2.0], [1.62572494E12, 2.0], [1.62572426E12, 4.325000000000001], [1.62572443E12, 2.0], [1.62572452E12, 2.0], [1.62572469E12, 2.0], [1.62572512E12, 2.0], [1.62572503E12, 2.0], [1.62572486E12, 2.4275362318840576], [1.62572435E12, 2.0], [1.62572444E12, 2.0], [1.62572461E12, 2.0], [1.62572478E12, 2.0], [1.62572504E12, 2.0], [1.62572495E12, 2.0], [1.62572427E12, 2.0], [1.62572436E12, 2.0], [1.62572453E12, 2.0], [1.6257247E12, 2.0], [1.62572513E12, 2.0], [1.62572496E12, 2.0], [1.62572487E12, 2.0], [1.62572428E12, 2.0], [1.62572445E12, 2.0], [1.62572462E12, 2.0], [1.62572505E12, 2.0], [1.62572479E12, 2.0], [1.62572488E12, 2.0], [1.62572437E12, 2.0], [1.62572514E12, 2.0], [1.62572454E12, 2.0], [1.62572497E12, 2.0], [1.62572471E12, 2.0], [1.6257248E12, 2.0]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62572515E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 19.88002944062819, "minX": 1.0, "maxY": 5391.0, "series": [{"data": [[8.0, 66.0], [2.0, 19.88002944062819], [9.0, 59.0], [10.0, 141.0], [11.0, 61.0], [12.0, 49.0], [3.0, 95.5], [13.0, 75.0], [14.0, 69.0], [15.0, 41.0], [16.0, 65.0], [4.0, 286.5416666666667], [1.0, 34.64285714285714], [17.0, 3197.0], [18.0, 5391.0], [19.0, 52.0], [20.0, 3981.0], [5.0, 65.7], [6.0, 84.0], [7.0, 68.0]], "isOverall": false, "label": "Sunstar Home", "isController": false}, {"data": [[2.018791181973482, 21.5327422110143]], "isOverall": false, "label": "Sunstar Home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 63.0, "minX": 1.62572425E12, "maxY": 867827.4, "series": [{"data": [[1.62572429E12, 630355.0], [1.62572506E12, 863520.0], [1.62572446E12, 500841.6], [1.62572489E12, 863501.5], [1.62572463E12, 354043.2], [1.62572472E12, 863520.0], [1.62572515E12, 21588.0], [1.62572498E12, 215880.0], [1.62572438E12, 708087.8], [1.62572455E12, 828979.2], [1.62572464E12, 492206.4], [1.62572481E12, 358360.8], [1.62572507E12, 863520.0], [1.6257249E12, 863500.0], [1.6257243E12, 768515.0], [1.62572447E12, 639004.8], [1.62572456E12, 695133.6], [1.62572473E12, 824661.6], [1.62572499E12, 358360.8], [1.62572482E12, 500841.6], [1.62572439E12, 561288.0], [1.62572448E12, 764215.2], [1.62572465E12, 630369.6], [1.62572491E12, 833277.5], [1.62572431E12, 859182.5], [1.6257244E12, 427442.4], [1.62572457E12, 561288.0], [1.62572474E12, 703768.8], [1.62572508E12, 863520.0], [1.62572483E12, 634687.2], [1.62572432E12, 863500.0], [1.62572449E12, 863520.0], [1.62572466E12, 764215.2], [1.625725E12, 500846.1], [1.62572441E12, 293596.8], [1.62572458E12, 423124.8], [1.62572509E12, 833296.8], [1.62572475E12, 561288.0], [1.62572492E12, 699435.0], [1.62572433E12, 863500.0], [1.6257245E12, 863520.0], [1.62572501E12, 630370.4], [1.62572467E12, 859202.4], [1.62572484E12, 781485.6], [1.62572476E12, 436077.6], [1.62572425E12, 21594.8], [1.6257251E12, 699451.2], [1.62572442E12, 151116.0], [1.62572493E12, 561275.0], [1.62572459E12, 289279.2], [1.62572468E12, 863520.0], [1.62572502E12, 768533.6], [1.62572434E12, 863500.0], [1.62572485E12, 768543.8], [1.62572451E12, 863520.0], [1.6257246E12, 146798.4], [1.62572477E12, 284961.6], [1.62572511E12, 561288.0], [1.62572494E12, 436069.0], [1.62572426E12, 172706.5], [1.62572443E12, 90669.6], [1.62572452E12, 863535.0], [1.62572469E12, 863520.0], [1.62572512E12, 431760.0], [1.62572503E12, 859202.4], [1.62572486E12, 595809.6], [1.62572435E12, 863508.0], [1.62572444E12, 220197.6], [1.62572461E12, 86352.0], [1.62572478E12, 155433.6], [1.62572504E12, 863520.0], [1.62572495E12, 289273.3], [1.62572427E12, 362675.0], [1.62572436E12, 863520.0], [1.62572453E12, 863523.6], [1.6257247E12, 863520.0], [1.62572513E12, 280644.0], [1.62572496E12, 155432.1], [1.62572487E12, 863494.5], [1.62572428E12, 496513.9], [1.62572445E12, 358360.8], [1.62572462E12, 211562.4], [1.62572505E12, 863520.0], [1.62572479E12, 90669.6], [1.62572488E12, 867827.4], [1.62572437E12, 828994.6], [1.62572514E12, 151116.0], [1.62572454E12, 863520.0], [1.62572497E12, 90669.6], [1.62572471E12, 863520.0], [1.6257248E12, 211562.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62572429E12, 1839.6], [1.62572506E12, 2520.0], [1.62572446E12, 1461.6], [1.62572489E12, 2520.0], [1.62572463E12, 1033.2], [1.62572472E12, 2520.0], [1.62572515E12, 63.0], [1.62572498E12, 630.0], [1.62572438E12, 2066.4], [1.62572455E12, 2419.2], [1.62572464E12, 1436.4], [1.62572481E12, 1045.8], [1.62572507E12, 2520.0], [1.6257249E12, 2520.0], [1.6257243E12, 2242.8], [1.62572447E12, 1864.8], [1.62572456E12, 2028.6], [1.62572473E12, 2406.6], [1.62572499E12, 1045.8], [1.62572482E12, 1461.6], [1.62572439E12, 1638.0], [1.62572448E12, 2230.2], [1.62572465E12, 1839.6], [1.62572491E12, 2431.8], [1.62572431E12, 2507.4], [1.6257244E12, 1247.4], [1.62572457E12, 1638.0], [1.62572474E12, 2053.8], [1.62572508E12, 2520.0], [1.62572483E12, 1852.2], [1.62572432E12, 2520.0], [1.62572449E12, 2520.0], [1.62572466E12, 2230.2], [1.625725E12, 1461.6], [1.62572441E12, 856.8], [1.62572458E12, 1234.8], [1.62572509E12, 2431.8], [1.62572475E12, 1638.0], [1.62572492E12, 2041.2], [1.62572433E12, 2520.0], [1.6257245E12, 2520.0], [1.62572501E12, 1839.6], [1.62572467E12, 2507.4], [1.62572484E12, 2280.6], [1.62572476E12, 1272.6], [1.62572425E12, 63.0], [1.6257251E12, 2041.2], [1.62572442E12, 441.0], [1.62572493E12, 1638.0], [1.62572459E12, 844.2], [1.62572468E12, 2520.0], [1.62572502E12, 2242.8], [1.62572434E12, 2520.0], [1.62572485E12, 2242.8], [1.62572451E12, 2520.0], [1.6257246E12, 428.4], [1.62572477E12, 831.6], [1.62572511E12, 1638.0], [1.62572494E12, 1272.6], [1.62572426E12, 504.0], [1.62572443E12, 264.6], [1.62572452E12, 2520.0], [1.62572469E12, 2520.0], [1.62572512E12, 1260.0], [1.62572503E12, 2507.4], [1.62572486E12, 1738.8], [1.62572435E12, 2520.0], [1.62572444E12, 642.6], [1.62572461E12, 252.0], [1.62572478E12, 453.6], [1.62572504E12, 2520.0], [1.62572495E12, 844.2], [1.62572427E12, 1058.4], [1.62572436E12, 2520.0], [1.62572453E12, 2520.0], [1.6257247E12, 2520.0], [1.62572513E12, 819.0], [1.62572496E12, 453.6], [1.62572487E12, 2520.0], [1.62572428E12, 1449.0], [1.62572445E12, 1045.8], [1.62572462E12, 617.4], [1.62572505E12, 2520.0], [1.62572479E12, 264.6], [1.62572488E12, 2532.6], [1.62572437E12, 2419.2], [1.62572514E12, 441.0], [1.62572454E12, 2520.0], [1.62572497E12, 264.6], [1.62572471E12, 2520.0], [1.6257248E12, 617.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62572515E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 10.2, "minX": 1.62572425E12, "maxY": 2537.2, "series": [{"data": [[1.62572429E12, 27.726027397260278], [1.62572506E12, 17.90000000000001], [1.62572446E12, 14.21551724137931], [1.62572489E12, 11.315], [1.62572463E12, 13.170731707317076], [1.62572472E12, 18.985000000000003], [1.62572515E12, 10.2], [1.62572498E12, 22.299999999999997], [1.62572438E12, 15.530487804878055], [1.62572455E12, 19.60416666666667], [1.62572464E12, 12.456140350877197], [1.62572481E12, 22.32530120481928], [1.62572507E12, 17.490000000000006], [1.6257249E12, 13.190000000000003], [1.6257243E12, 31.022471910112362], [1.62572447E12, 14.040540540540542], [1.62572456E12, 19.006211180124225], [1.62572473E12, 19.638743455497387], [1.62572499E12, 22.361445783132528], [1.62572482E12, 16.32758620689655], [1.62572439E12, 15.830769230769233], [1.62572448E12, 15.423728813559322], [1.62572465E12, 13.102739726027394], [1.62572491E12, 12.176165803108807], [1.62572431E12, 25.552763819095475], [1.6257244E12, 14.19191919191919], [1.62572457E12, 19.27692307692307], [1.62572474E12, 18.165644171779146], [1.62572508E12, 17.87500000000002], [1.62572483E12, 12.571428571428575], [1.62572432E12, 27.18999999999999], [1.62572449E12, 13.639999999999997], [1.62572466E12, 14.209039548022595], [1.625725E12, 20.97413793103448], [1.62572441E12, 16.897058823529417], [1.62572458E12, 14.673469387755096], [1.62572509E12, 18.07772020725388], [1.62572475E12, 17.676923076923078], [1.62572492E12, 11.549382716049381], [1.62572433E12, 24.375000000000004], [1.6257245E12, 14.734999999999994], [1.62572501E12, 17.4931506849315], [1.62572467E12, 16.195979899497484], [1.62572484E12, 11.596685082872922], [1.62572476E12, 20.000000000000007], [1.62572425E12, 2537.2], [1.6257251E12, 17.067901234567906], [1.62572442E12, 15.02857142857143], [1.62572493E12, 12.769230769230765], [1.62572459E12, 12.910447761194028], [1.62572468E12, 18.749999999999993], [1.62572502E12, 17.612359550561806], [1.62572434E12, 23.929999999999986], [1.62572485E12, 32.35955056179775], [1.62572451E12, 12.834999999999999], [1.6257246E12, 13.676470588235293], [1.62572477E12, 22.803030303030308], [1.62572511E12, 17.06923076923077], [1.62572494E12, 18.0990099009901], [1.62572426E12, 51.04999999999999], [1.62572443E12, 18.19047619047619], [1.62572452E12, 18.640000000000004], [1.62572469E12, 18.085000000000008], [1.62572512E12, 15.509999999999993], [1.62572503E12, 16.90954773869347], [1.62572486E12, 123.84057971014491], [1.62572435E12, 24.530000000000005], [1.62572444E12, 13.843137254901963], [1.62572461E12, 14.1], [1.62572478E12, 22.749999999999996], [1.62572504E12, 18.484999999999996], [1.62572495E12, 22.268656716417908], [1.62572427E12, 31.309523809523803], [1.62572436E12, 26.500000000000004], [1.62572453E12, 21.255000000000003], [1.6257247E12, 18.244999999999997], [1.62572513E12, 11.8], [1.62572496E12, 23.805555555555546], [1.62572487E12, 53.154999999999994], [1.62572428E12, 30.373913043478254], [1.62572445E12, 13.987951807228923], [1.62572462E12, 12.081632653061222], [1.62572505E12, 18.240000000000002], [1.62572479E12, 25.809523809523803], [1.62572488E12, 32.71144278606967], [1.62572437E12, 19.44791666666666], [1.62572514E12, 13.714285714285715], [1.62572454E12, 20.30000000000002], [1.62572497E12, 23.714285714285715], [1.62572471E12, 17.93000000000001], [1.6257248E12, 22.081632653061227]], "isOverall": false, "label": "Sunstar Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62572515E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.62572425E12, "maxY": 2432.8, "series": [{"data": [[1.62572429E12, 25.589041095890412], [1.62572506E12, 16.40500000000001], [1.62572446E12, 13.974137931034484], [1.62572489E12, 11.095000000000004], [1.62572463E12, 12.914634146341461], [1.62572472E12, 17.460000000000004], [1.62572515E12, 10.0], [1.62572498E12, 19.980000000000004], [1.62572438E12, 15.298780487804883], [1.62572455E12, 18.166666666666664], [1.62572464E12, 12.184210526315786], [1.62572481E12, 20.132530120481928], [1.62572507E12, 16.015000000000004], [1.6257249E12, 12.874999999999993], [1.6257243E12, 28.831460674157317], [1.62572447E12, 13.78378378378379], [1.62572456E12, 17.254658385093162], [1.62572473E12, 18.18848167539266], [1.62572499E12, 19.8433734939759], [1.62572482E12, 15.215517241379303], [1.62572439E12, 15.6], [1.62572448E12, 15.045197740112993], [1.62572465E12, 12.904109589041099], [1.62572491E12, 11.896373056994822], [1.62572431E12, 23.36683417085427], [1.6257244E12, 13.959595959595962], [1.62572457E12, 17.769230769230777], [1.62572474E12, 16.80981595092024], [1.62572508E12, 16.279999999999987], [1.62572483E12, 12.326530612244897], [1.62572432E12, 25.130000000000006], [1.62572449E12, 13.325000000000005], [1.62572466E12, 13.966101694915256], [1.625725E12, 19.146551724137932], [1.62572441E12, 16.63235294117647], [1.62572458E12, 13.897959183673466], [1.62572509E12, 16.51295336787565], [1.62572475E12, 16.230769230769223], [1.62572492E12, 11.043209876543212], [1.62572433E12, 22.304999999999996], [1.6257245E12, 14.289999999999996], [1.62572501E12, 16.171232876712327], [1.62572467E12, 15.256281407035177], [1.62572484E12, 11.303867403314923], [1.62572476E12, 18.26732673267327], [1.62572425E12, 2432.8], [1.6257251E12, 15.537037037037036], [1.62572442E12, 14.714285714285714], [1.62572493E12, 12.430769230769235], [1.62572459E12, 12.626865671641788], [1.62572468E12, 17.369999999999997], [1.62572502E12, 16.151685393258422], [1.62572434E12, 21.705000000000002], [1.62572485E12, 28.792134831460675], [1.62572451E12, 12.609999999999998], [1.6257246E12, 13.264705882352942], [1.62572477E12, 20.42424242424243], [1.62572511E12, 15.46153846153846], [1.62572494E12, 16.910891089108922], [1.62572426E12, 48.47500000000001], [1.62572443E12, 17.999999999999996], [1.62572452E12, 17.645000000000014], [1.62572469E12, 16.6], [1.62572512E12, 14.450000000000001], [1.62572503E12, 15.497487437185928], [1.62572486E12, 110.9057971014493], [1.62572435E12, 22.36999999999999], [1.62572444E12, 13.588235294117647], [1.62572461E12, 14.0], [1.62572478E12, 20.055555555555554], [1.62572504E12, 16.93], [1.62572495E12, 20.029850746268657], [1.62572427E12, 29.23809523809523], [1.62572436E12, 24.184999999999995], [1.62572453E12, 19.85], [1.6257247E12, 16.79499999999999], [1.62572513E12, 11.384615384615387], [1.62572496E12, 21.58333333333333], [1.62572487E12, 45.81], [1.62572428E12, 28.243478260869566], [1.62572445E12, 13.698795180722895], [1.62572462E12, 11.755102040816329], [1.62572505E12, 16.70499999999999], [1.62572479E12, 23.523809523809522], [1.62572488E12, 28.91542288557212], [1.62572437E12, 18.572916666666657], [1.62572514E12, 13.514285714285716], [1.62572454E12, 18.889999999999997], [1.62572497E12, 21.380952380952387], [1.62572471E12, 16.525000000000002], [1.6257248E12, 19.693877551020403]], "isOverall": false, "label": "Sunstar Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62572515E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.8, "minX": 1.62572425E12, "maxY": 126.2, "series": [{"data": [[1.62572429E12, 21.34246575342465], [1.62572506E12, 13.594999999999997], [1.62572446E12, 11.793103448275863], [1.62572489E12, 9.44], [1.62572463E12, 11.365853658536583], [1.62572472E12, 14.819999999999999], [1.62572515E12, 8.8], [1.62572498E12, 15.899999999999993], [1.62572438E12, 13.390243902439027], [1.62572455E12, 15.48958333333333], [1.62572464E12, 10.684210526315791], [1.62572481E12, 16.08433734939759], [1.62572507E12, 13.369999999999997], [1.6257249E12, 11.165000000000003], [1.6257243E12, 24.078651685393247], [1.62572447E12, 12.074324324324326], [1.62572456E12, 14.670807453416149], [1.62572473E12, 15.460732984293191], [1.62572499E12, 16.168674698795172], [1.62572482E12, 12.577586206896555], [1.62572439E12, 13.846153846153843], [1.62572448E12, 13.028248587570618], [1.62572465E12, 10.952054794520553], [1.62572491E12, 10.08808290155441], [1.62572431E12, 19.261306532663315], [1.6257244E12, 12.202020202020199], [1.62572457E12, 15.08461538461538], [1.62572474E12, 14.061349693251532], [1.62572508E12, 13.554999999999994], [1.62572483E12, 10.517006802721086], [1.62572432E12, 20.769999999999982], [1.62572449E12, 11.404999999999992], [1.62572466E12, 12.146892655367232], [1.625725E12, 15.155172413793107], [1.62572441E12, 14.10294117647059], [1.62572458E12, 12.020408163265305], [1.62572509E12, 13.823834196891198], [1.62572475E12, 13.63076923076923], [1.62572492E12, 9.56172839506173], [1.62572433E12, 18.260000000000012], [1.6257245E12, 12.264999999999995], [1.62572501E12, 13.301369863013694], [1.62572467E12, 12.90452261306533], [1.62572484E12, 9.707182320441987], [1.62572476E12, 15.178217821782175], [1.62572425E12, 126.2], [1.6257251E12, 12.820987654320994], [1.62572442E12, 12.457142857142857], [1.62572493E12, 10.692307692307692], [1.62572459E12, 11.149253731343283], [1.62572468E12, 14.719999999999995], [1.62572502E12, 13.353932584269666], [1.62572434E12, 17.875000000000007], [1.62572485E12, 22.426966292134818], [1.62572451E12, 10.980000000000002], [1.6257246E12, 10.70588235294118], [1.62572477E12, 16.545454545454547], [1.62572511E12, 12.684615384615384], [1.62572494E12, 13.198019801980202], [1.62572426E12, 39.57500000000001], [1.62572443E12, 15.61904761904762], [1.62572452E12, 14.950000000000005], [1.62572469E12, 13.869999999999997], [1.62572512E12, 11.98], [1.62572503E12, 12.753768844221113], [1.62572486E12, 36.99999999999998], [1.62572435E12, 17.805], [1.62572444E12, 12.137254901960782], [1.62572461E12, 12.25], [1.62572478E12, 16.02777777777778], [1.62572504E12, 14.119999999999994], [1.62572495E12, 15.880597014925375], [1.62572427E12, 24.05952380952381], [1.62572436E12, 19.96500000000002], [1.62572453E12, 16.95499999999998], [1.6257247E12, 14.115000000000002], [1.62572513E12, 9.846153846153843], [1.62572496E12, 17.25], [1.62572487E12, 35.794999999999995], [1.62572428E12, 23.078260869565216], [1.62572445E12, 11.795180722891567], [1.62572462E12, 10.265306122448978], [1.62572505E12, 14.02], [1.62572479E12, 19.80952380952381], [1.62572488E12, 23.09452736318407], [1.62572437E12, 15.67708333333334], [1.62572514E12, 11.77142857142857], [1.62572454E12, 16.224999999999994], [1.62572497E12, 17.714285714285705], [1.62572471E12, 13.864999999999998], [1.6257248E12, 16.04081632653061]], "isOverall": false, "label": "Sunstar Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62572515E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.62572425E12, "maxY": 5391.0, "series": [{"data": [[1.62572429E12, 55.0], [1.62572506E12, 46.0], [1.62572446E12, 38.0], [1.62572489E12, 28.0], [1.62572463E12, 62.0], [1.62572472E12, 45.0], [1.62572515E12, 12.0], [1.62572498E12, 40.0], [1.62572438E12, 32.0], [1.62572455E12, 54.0], [1.62572464E12, 26.0], [1.62572481E12, 55.0], [1.62572507E12, 37.0], [1.6257249E12, 40.0], [1.6257243E12, 122.0], [1.62572447E12, 55.0], [1.62572456E12, 66.0], [1.62572473E12, 73.0], [1.62572499E12, 42.0], [1.62572482E12, 54.0], [1.62572439E12, 46.0], [1.62572448E12, 42.0], [1.62572465E12, 162.0], [1.62572491E12, 117.0], [1.62572431E12, 41.0], [1.6257244E12, 34.0], [1.62572457E12, 31.0], [1.62572474E12, 49.0], [1.62572508E12, 37.0], [1.62572483E12, 54.0], [1.62572432E12, 110.0], [1.62572449E12, 47.0], [1.62572466E12, 60.0], [1.625725E12, 122.0], [1.62572441E12, 161.0], [1.62572458E12, 27.0], [1.62572509E12, 45.0], [1.62572475E12, 39.0], [1.62572492E12, 40.0], [1.62572433E12, 78.0], [1.6257245E12, 198.0], [1.62572501E12, 38.0], [1.62572467E12, 48.0], [1.62572484E12, 23.0], [1.62572476E12, 32.0], [1.62572425E12, 5391.0], [1.6257251E12, 31.0], [1.62572442E12, 41.0], [1.62572493E12, 52.0], [1.62572459E12, 40.0], [1.62572468E12, 39.0], [1.62572502E12, 48.0], [1.62572434E12, 44.0], [1.62572485E12, 97.0], [1.62572451E12, 65.0], [1.6257246E12, 27.0], [1.62572477E12, 43.0], [1.62572511E12, 26.0], [1.62572494E12, 99.0], [1.62572426E12, 141.0], [1.62572443E12, 51.0], [1.62572452E12, 60.0], [1.62572469E12, 34.0], [1.62572512E12, 44.0], [1.62572503E12, 39.0], [1.62572486E12, 5105.0], [1.62572435E12, 126.0], [1.62572444E12, 30.0], [1.62572461E12, 54.0], [1.62572478E12, 43.0], [1.62572504E12, 40.0], [1.62572495E12, 41.0], [1.62572427E12, 42.0], [1.62572436E12, 83.0], [1.62572453E12, 54.0], [1.6257247E12, 43.0], [1.62572513E12, 31.0], [1.62572496E12, 45.0], [1.62572487E12, 102.0], [1.62572428E12, 130.0], [1.62572445E12, 29.0], [1.62572462E12, 18.0], [1.62572505E12, 51.0], [1.62572479E12, 40.0], [1.62572488E12, 114.0], [1.62572437E12, 70.0], [1.62572514E12, 50.0], [1.62572454E12, 36.0], [1.62572497E12, 33.0], [1.62572471E12, 33.0], [1.6257248E12, 37.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62572429E12, 19.0], [1.62572506E12, 12.0], [1.62572446E12, 9.0], [1.62572489E12, 8.0], [1.62572463E12, 8.0], [1.62572472E12, 12.0], [1.62572515E12, 9.0], [1.62572498E12, 19.0], [1.62572438E12, 8.0], [1.62572455E12, 12.0], [1.62572464E12, 9.0], [1.62572481E12, 19.0], [1.62572507E12, 12.0], [1.6257249E12, 8.0], [1.6257243E12, 20.0], [1.62572447E12, 8.0], [1.62572456E12, 12.0], [1.62572473E12, 12.0], [1.62572499E12, 18.0], [1.62572482E12, 9.0], [1.62572439E12, 9.0], [1.62572448E12, 9.0], [1.62572465E12, 8.0], [1.62572491E12, 8.0], [1.62572431E12, 20.0], [1.6257244E12, 9.0], [1.62572457E12, 12.0], [1.62572474E12, 11.0], [1.62572508E12, 11.0], [1.62572483E12, 8.0], [1.62572432E12, 18.0], [1.62572449E12, 8.0], [1.62572466E12, 8.0], [1.625725E12, 12.0], [1.62572441E12, 9.0], [1.62572458E12, 8.0], [1.62572509E12, 11.0], [1.62572475E12, 12.0], [1.62572492E12, 8.0], [1.62572433E12, 19.0], [1.6257245E12, 8.0], [1.62572501E12, 12.0], [1.62572467E12, 8.0], [1.62572484E12, 9.0], [1.62572476E12, 12.0], [1.62572425E12, 52.0], [1.6257251E12, 11.0], [1.62572442E12, 9.0], [1.62572493E12, 8.0], [1.62572459E12, 8.0], [1.62572468E12, 12.0], [1.62572502E12, 12.0], [1.62572434E12, 19.0], [1.62572485E12, 9.0], [1.62572451E12, 8.0], [1.6257246E12, 9.0], [1.62572477E12, 18.0], [1.62572511E12, 12.0], [1.62572494E12, 8.0], [1.62572426E12, 26.0], [1.62572443E12, 11.0], [1.62572452E12, 9.0], [1.62572469E12, 12.0], [1.62572512E12, 9.0], [1.62572503E12, 12.0], [1.62572486E12, 43.0], [1.62572435E12, 19.0], [1.62572444E12, 9.0], [1.62572461E12, 9.0], [1.62572478E12, 19.0], [1.62572504E12, 12.0], [1.62572495E12, 18.0], [1.62572427E12, 25.0], [1.62572436E12, 18.0], [1.62572453E12, 13.0], [1.6257247E12, 12.0], [1.62572513E12, 8.0], [1.62572496E12, 19.0], [1.62572487E12, 43.0], [1.62572428E12, 22.0], [1.62572445E12, 9.0], [1.62572462E12, 8.0], [1.62572505E12, 12.0], [1.62572479E12, 20.0], [1.62572488E12, 9.0], [1.62572437E12, 10.0], [1.62572514E12, 9.0], [1.62572454E12, 13.0], [1.62572497E12, 19.0], [1.62572471E12, 12.0], [1.6257248E12, 18.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62572429E12, 32.0], [1.62572506E12, 23.0], [1.62572446E12, 22.299999999999997], [1.62572489E12, 15.0], [1.62572463E12, 15.700000000000003], [1.62572472E12, 25.0], [1.62572515E12, 12.0], [1.62572498E12, 24.0], [1.62572438E12, 20.0], [1.62572455E12, 25.0], [1.62572464E12, 17.5], [1.62572481E12, 25.0], [1.62572507E12, 21.0], [1.6257249E12, 18.900000000000006], [1.6257243E12, 45.099999999999994], [1.62572447E12, 19.0], [1.62572456E12, 23.80000000000001], [1.62572473E12, 26.0], [1.62572499E12, 26.0], [1.62572482E12, 24.0], [1.62572439E12, 20.900000000000006], [1.62572448E12, 25.200000000000017], [1.62572465E12, 17.30000000000001], [1.62572491E12, 15.599999999999994], [1.62572431E12, 30.0], [1.6257244E12, 19.0], [1.62572457E12, 24.0], [1.62572474E12, 23.0], [1.62572508E12, 22.0], [1.62572483E12, 17.0], [1.62572432E12, 33.0], [1.62572449E12, 18.0], [1.62572466E12, 23.0], [1.625725E12, 25.299999999999997], [1.62572441E12, 20.1], [1.62572458E12, 23.0], [1.62572509E12, 24.0], [1.62572475E12, 22.0], [1.62572492E12, 14.700000000000017], [1.62572433E12, 29.0], [1.6257245E12, 19.0], [1.62572501E12, 22.30000000000001], [1.62572467E12, 23.0], [1.62572484E12, 15.0], [1.62572476E12, 25.0], [1.62572425E12, 5391.0], [1.6257251E12, 22.0], [1.62572442E12, 22.4], [1.62572493E12, 17.0], [1.62572459E12, 17.0], [1.62572468E12, 24.0], [1.62572502E12, 23.0], [1.62572434E12, 28.0], [1.62572485E12, 57.0], [1.62572451E12, 17.0], [1.6257246E12, 23.0], [1.62572477E12, 27.300000000000004], [1.62572511E12, 21.0], [1.62572494E12, 25.0], [1.62572426E12, 83.1], [1.62572443E12, 29.400000000000006], [1.62572452E12, 26.0], [1.62572469E12, 23.0], [1.62572512E12, 20.900000000000006], [1.62572503E12, 22.0], [1.62572486E12, 68.0], [1.62572435E12, 28.0], [1.62572444E12, 17.800000000000004], [1.62572461E12, 16.900000000000002], [1.62572478E12, 30.0], [1.62572504E12, 24.0], [1.62572495E12, 26.0], [1.62572427E12, 36.5], [1.62572436E12, 36.0], [1.62572453E12, 26.0], [1.6257247E12, 23.0], [1.62572513E12, 15.399999999999999], [1.62572496E12, 30.300000000000004], [1.62572487E12, 60.0], [1.62572428E12, 37.400000000000006], [1.62572445E12, 19.0], [1.62572462E12, 15.0], [1.62572505E12, 22.0], [1.62572479E12, 37.8], [1.62572488E12, 57.0], [1.62572437E12, 27.0], [1.62572514E12, 22.0], [1.62572454E12, 26.0], [1.62572497E12, 31.400000000000002], [1.62572471E12, 23.0], [1.6257248E12, 24.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62572429E12, 54.53], [1.62572506E12, 40.950000000000045], [1.62572446E12, 37.66], [1.62572489E12, 23.99000000000001], [1.62572463E12, 62.0], [1.62572472E12, 39.0], [1.62572515E12, 12.0], [1.62572498E12, 40.0], [1.62572438E12, 32.0], [1.62572455E12, 40.0499999999999], [1.62572464E12, 26.0], [1.62572481E12, 55.0], [1.62572507E12, 28.99000000000001], [1.6257249E12, 37.940000000000055], [1.6257243E12, 96.72000000000025], [1.62572447E12, 51.07999999999993], [1.62572456E12, 41.81999999999982], [1.62572473E12, 57.35999999999973], [1.62572499E12, 42.0], [1.62572482E12, 49.409999999999954], [1.62572439E12, 42.589999999999975], [1.62572448E12, 42.0], [1.62572465E12, 104.66000000000014], [1.62572491E12, 52.14000000000016], [1.62572431E12, 38.0], [1.6257244E12, 34.0], [1.62572457E12, 29.44999999999999], [1.62572474E12, 47.71999999999997], [1.62572508E12, 31.960000000000036], [1.62572483E12, 51.60000000000005], [1.62572432E12, 89.0], [1.62572449E12, 40.950000000000045], [1.62572466E12, 47.51999999999998], [1.625725E12, 106.86999999999985], [1.62572441E12, 161.0], [1.62572458E12, 27.0], [1.62572509E12, 42.18000000000001], [1.62572475E12, 38.06999999999999], [1.62572492E12, 34.33000000000004], [1.62572433E12, 52.950000000000045], [1.6257245E12, 43.950000000000045], [1.62572501E12, 38.0], [1.62572467E12, 38.0], [1.62572484E12, 22.180000000000007], [1.62572476E12, 31.960000000000008], [1.62572425E12, 5391.0], [1.6257251E12, 29.74000000000001], [1.62572442E12, 41.0], [1.62572493E12, 47.96999999999997], [1.62572459E12, 40.0], [1.62572468E12, 38.940000000000055], [1.62572502E12, 43.26000000000005], [1.62572434E12, 42.99000000000001], [1.62572485E12, 81.20000000000016], [1.62572451E12, 34.98000000000002], [1.6257246E12, 27.0], [1.62572477E12, 43.0], [1.62572511E12, 25.689999999999998], [1.62572494E12, 98.26000000000015], [1.62572426E12, 141.0], [1.62572443E12, 51.0], [1.62572452E12, 40.92000000000007], [1.62572469E12, 32.960000000000036], [1.62572512E12, 43.95999999999998], [1.62572503E12, 34.0], [1.62572486E12, 4727.479999999986], [1.62572435E12, 59.90000000000009], [1.62572444E12, 30.0], [1.62572461E12, 54.0], [1.62572478E12, 43.0], [1.62572504E12, 37.950000000000045], [1.62572495E12, 41.0], [1.62572427E12, 42.0], [1.62572436E12, 71.8900000000001], [1.62572453E12, 37.99000000000001], [1.6257247E12, 33.0], [1.62572513E12, 31.0], [1.62572496E12, 45.0], [1.62572487E12, 86.91000000000008], [1.62572428E12, 117.52000000000027], [1.62572445E12, 29.0], [1.62572462E12, 18.0], [1.62572505E12, 42.940000000000055], [1.62572479E12, 40.0], [1.62572488E12, 90.65999999999983], [1.62572437E12, 47.679999999999836], [1.62572514E12, 50.0], [1.62572454E12, 32.99000000000001], [1.62572497E12, 33.0], [1.62572471E12, 30.980000000000018], [1.6257248E12, 37.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62572429E12, 36.650000000000006], [1.62572506E12, 24.94999999999999], [1.62572446E12, 28.299999999999983], [1.62572489E12, 16.94999999999999], [1.62572463E12, 20.69999999999999], [1.62572472E12, 29.94999999999999], [1.62572515E12, 12.0], [1.62572498E12, 27.799999999999983], [1.62572438E12, 23.0], [1.62572455E12, 29.349999999999994], [1.62572464E12, 22.0], [1.62572481E12, 27.0], [1.62572507E12, 23.94999999999999], [1.6257249E12, 23.94999999999999], [1.6257243E12, 55.14999999999995], [1.62572447E12, 24.199999999999932], [1.62572456E12, 24.0], [1.62572473E12, 32.799999999999955], [1.62572499E12, 29.799999999999997], [1.62572482E12, 24.14999999999999], [1.62572439E12, 26.44999999999999], [1.62572448E12, 34.0], [1.62572465E12, 19.650000000000006], [1.62572491E12, 18.299999999999983], [1.62572431E12, 32.0], [1.6257244E12, 24.0], [1.62572457E12, 25.0], [1.62572474E12, 25.799999999999983], [1.62572508E12, 24.0], [1.62572483E12, 27.19999999999999], [1.62572432E12, 37.94999999999999], [1.62572449E12, 22.94999999999999], [1.62572466E12, 28.0], [1.625725E12, 27.0], [1.62572441E12, 23.0], [1.62572458E12, 24.0], [1.62572509E12, 29.299999999999983], [1.62572475E12, 24.0], [1.62572492E12, 18.0], [1.62572433E12, 32.94999999999999], [1.6257245E12, 24.0], [1.62572501E12, 26.0], [1.62572467E12, 28.0], [1.62572484E12, 17.0], [1.62572476E12, 27.89999999999999], [1.62572425E12, 5391.0], [1.6257251E12, 24.0], [1.62572442E12, 32.99999999999996], [1.62572493E12, 22.899999999999977], [1.62572459E12, 24.399999999999977], [1.62572468E12, 26.0], [1.62572502E12, 24.0], [1.62572434E12, 30.94999999999999], [1.62572485E12, 60.04999999999998], [1.62572451E12, 20.899999999999977], [1.6257246E12, 26.25], [1.62572477E12, 29.949999999999996], [1.62572511E12, 21.44999999999999], [1.62572494E12, 27.89999999999999], [1.62572426E12, 102.44999999999996], [1.62572443E12, 48.99999999999997], [1.62572452E12, 27.0], [1.62572469E12, 25.0], [1.62572512E12, 23.0], [1.62572503E12, 23.0], [1.62572486E12, 88.34999999999988], [1.62572435E12, 33.94999999999999], [1.62572444E12, 21.4], [1.62572461E12, 52.14999999999998], [1.62572478E12, 32.79999999999998], [1.62572504E12, 27.94999999999999], [1.62572495E12, 28.599999999999994], [1.62572427E12, 38.75], [1.62572436E12, 40.94999999999999], [1.62572453E12, 29.0], [1.6257247E12, 25.0], [1.62572513E12, 18.39999999999999], [1.62572496E12, 39.04999999999999], [1.62572487E12, 66.0], [1.62572428E12, 41.599999999999966], [1.62572445E12, 22.799999999999997], [1.62572462E12, 17.0], [1.62572505E12, 28.0], [1.62572479E12, 39.8], [1.62572488E12, 62.89999999999998], [1.62572437E12, 33.349999999999994], [1.62572514E12, 36.39999999999993], [1.62572454E12, 28.0], [1.62572497E12, 32.9], [1.62572471E12, 25.0], [1.6257248E12, 27.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62572515E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14.0, "minX": 1.0, "maxY": 56.0, "series": [{"data": [[8.0, 19.0], [2.0, 21.0], [9.0, 20.0], [10.0, 17.0], [11.0, 18.0], [3.0, 19.0], [12.0, 15.0], [13.0, 15.0], [14.0, 15.0], [15.0, 14.0], [1.0, 20.0], [4.0, 19.0], [16.0, 15.0], [17.0, 16.0], [18.0, 14.0], [19.0, 17.0], [5.0, 18.0], [20.0, 19.0], [21.0, 21.0], [22.0, 22.0], [23.0, 56.0], [6.0, 20.0], [7.0, 17.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14.0, "minX": 1.0, "maxY": 47.0, "series": [{"data": [[8.0, 17.0], [2.0, 19.0], [9.0, 18.0], [10.0, 16.0], [11.0, 16.5], [3.0, 17.0], [12.0, 15.0], [13.0, 14.0], [14.0, 15.0], [15.0, 14.0], [1.0, 18.0], [4.0, 17.0], [16.0, 14.0], [17.0, 15.0], [18.0, 14.0], [19.0, 16.0], [5.0, 16.0], [20.0, 17.0], [21.0, 19.0], [22.0, 20.0], [23.0, 47.0], [6.0, 18.0], [7.0, 17.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.62572425E12, "maxY": 20.0, "series": [{"data": [[1.62572429E12, 14.6], [1.62572506E12, 20.0], [1.62572446E12, 11.6], [1.62572489E12, 20.0], [1.62572463E12, 8.2], [1.62572472E12, 20.0], [1.62572515E12, 0.5], [1.62572498E12, 5.0], [1.62572438E12, 16.3], [1.62572455E12, 19.2], [1.62572464E12, 11.4], [1.62572481E12, 8.3], [1.62572507E12, 20.0], [1.6257249E12, 20.0], [1.6257243E12, 17.8], [1.62572447E12, 14.8], [1.62572456E12, 16.1], [1.62572473E12, 19.2], [1.62572499E12, 8.2], [1.62572482E12, 11.5], [1.62572439E12, 13.0], [1.62572448E12, 17.7], [1.62572465E12, 14.6], [1.62572491E12, 19.3], [1.62572431E12, 19.9], [1.6257244E12, 9.9], [1.62572457E12, 13.0], [1.62572474E12, 16.3], [1.62572508E12, 20.0], [1.62572483E12, 14.8], [1.62572432E12, 20.0], [1.62572449E12, 20.0], [1.62572466E12, 17.7], [1.625725E12, 11.6], [1.62572441E12, 6.8], [1.62572458E12, 9.8], [1.62572509E12, 19.3], [1.62572475E12, 13.0], [1.62572492E12, 16.2], [1.62572433E12, 20.0], [1.6257245E12, 20.0], [1.62572501E12, 14.6], [1.62572467E12, 19.9], [1.62572484E12, 18.0], [1.62572476E12, 10.0], [1.62572425E12, 0.5], [1.6257251E12, 16.2], [1.62572442E12, 3.5], [1.62572493E12, 13.0], [1.62572459E12, 6.7], [1.62572468E12, 20.0], [1.62572502E12, 17.8], [1.62572434E12, 20.0], [1.62572485E12, 18.0], [1.62572451E12, 20.0], [1.6257246E12, 3.4], [1.62572477E12, 6.7], [1.62572511E12, 13.0], [1.62572494E12, 10.1], [1.62572426E12, 4.0], [1.62572443E12, 2.1], [1.62572452E12, 20.0], [1.62572469E12, 20.0], [1.62572512E12, 10.0], [1.62572503E12, 19.9], [1.62572486E12, 13.7], [1.62572435E12, 20.0], [1.62572444E12, 5.1], [1.62572461E12, 2.0], [1.62572478E12, 3.5], [1.62572504E12, 20.0], [1.62572495E12, 6.8], [1.62572427E12, 8.4], [1.62572436E12, 20.0], [1.62572453E12, 20.0], [1.6257247E12, 20.0], [1.62572513E12, 6.5], [1.62572496E12, 3.5], [1.62572487E12, 20.0], [1.62572428E12, 11.5], [1.62572445E12, 8.3], [1.62572462E12, 4.9], [1.62572505E12, 20.0], [1.62572479E12, 2.1], [1.62572488E12, 20.0], [1.62572437E12, 19.3], [1.62572514E12, 3.5], [1.62572454E12, 20.0], [1.62572497E12, 2.2], [1.62572471E12, 20.0], [1.6257248E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62572515E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.62572425E12, "maxY": 20.1, "series": [{"data": [[1.62572429E12, 14.6], [1.62572506E12, 20.0], [1.62572446E12, 11.6], [1.62572489E12, 20.0], [1.62572463E12, 8.2], [1.62572472E12, 20.0], [1.62572515E12, 0.5], [1.62572498E12, 5.0], [1.62572438E12, 16.4], [1.62572455E12, 19.2], [1.62572464E12, 11.4], [1.62572481E12, 8.3], [1.62572507E12, 20.0], [1.6257249E12, 20.0], [1.6257243E12, 17.8], [1.62572447E12, 14.8], [1.62572456E12, 16.1], [1.62572473E12, 19.1], [1.62572499E12, 8.3], [1.62572482E12, 11.6], [1.62572439E12, 13.0], [1.62572448E12, 17.7], [1.62572465E12, 14.6], [1.62572491E12, 19.3], [1.62572431E12, 19.9], [1.6257244E12, 9.9], [1.62572457E12, 13.0], [1.62572474E12, 16.3], [1.62572508E12, 20.0], [1.62572483E12, 14.7], [1.62572432E12, 20.0], [1.62572449E12, 20.0], [1.62572466E12, 17.7], [1.625725E12, 11.6], [1.62572441E12, 6.8], [1.62572458E12, 9.8], [1.62572509E12, 19.3], [1.62572475E12, 13.0], [1.62572492E12, 16.2], [1.62572433E12, 20.0], [1.6257245E12, 20.0], [1.62572501E12, 14.6], [1.62572467E12, 19.9], [1.62572484E12, 18.1], [1.62572476E12, 10.1], [1.62572425E12, 0.5], [1.6257251E12, 16.2], [1.62572442E12, 3.5], [1.62572493E12, 13.0], [1.62572459E12, 6.7], [1.62572468E12, 20.0], [1.62572502E12, 17.8], [1.62572434E12, 20.0], [1.62572485E12, 17.8], [1.62572451E12, 20.0], [1.6257246E12, 3.4], [1.62572477E12, 6.6], [1.62572511E12, 13.0], [1.62572494E12, 10.1], [1.62572426E12, 4.0], [1.62572443E12, 2.1], [1.62572452E12, 20.0], [1.62572469E12, 20.0], [1.62572512E12, 10.0], [1.62572503E12, 19.9], [1.62572486E12, 13.8], [1.62572435E12, 20.0], [1.62572444E12, 5.1], [1.62572461E12, 2.0], [1.62572478E12, 3.6], [1.62572504E12, 20.0], [1.62572495E12, 6.7], [1.62572427E12, 8.4], [1.62572436E12, 20.0], [1.62572453E12, 20.0], [1.6257247E12, 20.0], [1.62572513E12, 6.5], [1.62572496E12, 3.6], [1.62572487E12, 20.0], [1.62572428E12, 11.5], [1.62572445E12, 8.3], [1.62572462E12, 4.9], [1.62572505E12, 20.0], [1.62572479E12, 2.1], [1.62572488E12, 20.1], [1.62572437E12, 19.2], [1.62572514E12, 3.5], [1.62572454E12, 20.0], [1.62572497E12, 2.1], [1.62572471E12, 20.0], [1.6257248E12, 4.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62572515E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.62572425E12, "maxY": 20.1, "series": [{"data": [[1.62572429E12, 14.6], [1.62572506E12, 20.0], [1.62572446E12, 11.6], [1.62572489E12, 20.0], [1.62572463E12, 8.2], [1.62572472E12, 20.0], [1.62572515E12, 0.5], [1.62572498E12, 5.0], [1.62572438E12, 16.4], [1.62572455E12, 19.2], [1.62572464E12, 11.4], [1.62572481E12, 8.3], [1.62572507E12, 20.0], [1.6257249E12, 20.0], [1.6257243E12, 17.8], [1.62572447E12, 14.8], [1.62572456E12, 16.1], [1.62572473E12, 19.1], [1.62572499E12, 8.3], [1.62572482E12, 11.6], [1.62572439E12, 13.0], [1.62572448E12, 17.7], [1.62572465E12, 14.6], [1.62572491E12, 19.3], [1.62572431E12, 19.9], [1.6257244E12, 9.9], [1.62572457E12, 13.0], [1.62572474E12, 16.3], [1.62572508E12, 20.0], [1.62572483E12, 14.7], [1.62572432E12, 20.0], [1.62572449E12, 20.0], [1.62572466E12, 17.7], [1.625725E12, 11.6], [1.62572441E12, 6.8], [1.62572458E12, 9.8], [1.62572509E12, 19.3], [1.62572475E12, 13.0], [1.62572492E12, 16.2], [1.62572433E12, 20.0], [1.6257245E12, 20.0], [1.62572501E12, 14.6], [1.62572467E12, 19.9], [1.62572484E12, 18.1], [1.62572476E12, 10.1], [1.62572425E12, 0.5], [1.6257251E12, 16.2], [1.62572442E12, 3.5], [1.62572493E12, 13.0], [1.62572459E12, 6.7], [1.62572468E12, 20.0], [1.62572502E12, 17.8], [1.62572434E12, 20.0], [1.62572485E12, 17.8], [1.62572451E12, 20.0], [1.6257246E12, 3.4], [1.62572477E12, 6.6], [1.62572511E12, 13.0], [1.62572494E12, 10.1], [1.62572426E12, 4.0], [1.62572443E12, 2.1], [1.62572452E12, 20.0], [1.62572469E12, 20.0], [1.62572512E12, 10.0], [1.62572503E12, 19.9], [1.62572486E12, 13.8], [1.62572435E12, 20.0], [1.62572444E12, 5.1], [1.62572461E12, 2.0], [1.62572478E12, 3.6], [1.62572504E12, 20.0], [1.62572495E12, 6.7], [1.62572427E12, 8.4], [1.62572436E12, 20.0], [1.62572453E12, 20.0], [1.6257247E12, 20.0], [1.62572513E12, 6.5], [1.62572496E12, 3.6], [1.62572487E12, 20.0], [1.62572428E12, 11.5], [1.62572445E12, 8.3], [1.62572462E12, 4.9], [1.62572505E12, 20.0], [1.62572479E12, 2.1], [1.62572488E12, 20.1], [1.62572437E12, 19.2], [1.62572514E12, 3.5], [1.62572454E12, 20.0], [1.62572497E12, 2.1], [1.62572471E12, 20.0], [1.6257248E12, 4.9]], "isOverall": false, "label": "Sunstar Home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62572515E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.62572425E12, "maxY": 20.1, "series": [{"data": [[1.62572429E12, 14.6], [1.62572506E12, 20.0], [1.62572446E12, 11.6], [1.62572489E12, 20.0], [1.62572463E12, 8.2], [1.62572472E12, 20.0], [1.62572515E12, 0.5], [1.62572498E12, 5.0], [1.62572438E12, 16.4], [1.62572455E12, 19.2], [1.62572464E12, 11.4], [1.62572481E12, 8.3], [1.62572507E12, 20.0], [1.6257249E12, 20.0], [1.6257243E12, 17.8], [1.62572447E12, 14.8], [1.62572456E12, 16.1], [1.62572473E12, 19.1], [1.62572499E12, 8.3], [1.62572482E12, 11.6], [1.62572439E12, 13.0], [1.62572448E12, 17.7], [1.62572465E12, 14.6], [1.62572491E12, 19.3], [1.62572431E12, 19.9], [1.6257244E12, 9.9], [1.62572457E12, 13.0], [1.62572474E12, 16.3], [1.62572508E12, 20.0], [1.62572483E12, 14.7], [1.62572432E12, 20.0], [1.62572449E12, 20.0], [1.62572466E12, 17.7], [1.625725E12, 11.6], [1.62572441E12, 6.8], [1.62572458E12, 9.8], [1.62572509E12, 19.3], [1.62572475E12, 13.0], [1.62572492E12, 16.2], [1.62572433E12, 20.0], [1.6257245E12, 20.0], [1.62572501E12, 14.6], [1.62572467E12, 19.9], [1.62572484E12, 18.1], [1.62572476E12, 10.1], [1.62572425E12, 0.5], [1.6257251E12, 16.2], [1.62572442E12, 3.5], [1.62572493E12, 13.0], [1.62572459E12, 6.7], [1.62572468E12, 20.0], [1.62572502E12, 17.8], [1.62572434E12, 20.0], [1.62572485E12, 17.8], [1.62572451E12, 20.0], [1.6257246E12, 3.4], [1.62572477E12, 6.6], [1.62572511E12, 13.0], [1.62572494E12, 10.1], [1.62572426E12, 4.0], [1.62572443E12, 2.1], [1.62572452E12, 20.0], [1.62572469E12, 20.0], [1.62572512E12, 10.0], [1.62572503E12, 19.9], [1.62572486E12, 13.8], [1.62572435E12, 20.0], [1.62572444E12, 5.1], [1.62572461E12, 2.0], [1.62572478E12, 3.6], [1.62572504E12, 20.0], [1.62572495E12, 6.7], [1.62572427E12, 8.4], [1.62572436E12, 20.0], [1.62572453E12, 20.0], [1.6257247E12, 20.0], [1.62572513E12, 6.5], [1.62572496E12, 3.6], [1.62572487E12, 20.0], [1.62572428E12, 11.5], [1.62572445E12, 8.3], [1.62572462E12, 4.9], [1.62572505E12, 20.0], [1.62572479E12, 2.1], [1.62572488E12, 20.1], [1.62572437E12, 19.2], [1.62572514E12, 3.5], [1.62572454E12, 20.0], [1.62572497E12, 2.1], [1.62572471E12, 20.0], [1.6257248E12, 4.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62572515E12, "title": "Total Transactions Per Second"}},
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

