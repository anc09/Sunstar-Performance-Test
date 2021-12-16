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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 5177.0, "series": [{"data": [[0.0, 9.0], [0.1, 10.0], [0.2, 10.0], [0.3, 10.0], [0.4, 10.0], [0.5, 10.0], [0.6, 10.0], [0.7, 10.0], [0.8, 10.0], [0.9, 10.0], [1.0, 10.0], [1.1, 10.0], [1.2, 10.0], [1.3, 10.0], [1.4, 10.0], [1.5, 10.0], [1.6, 10.0], [1.7, 11.0], [1.8, 11.0], [1.9, 11.0], [2.0, 11.0], [2.1, 11.0], [2.2, 11.0], [2.3, 11.0], [2.4, 11.0], [2.5, 11.0], [2.6, 11.0], [2.7, 11.0], [2.8, 11.0], [2.9, 11.0], [3.0, 11.0], [3.1, 11.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 11.0], [3.6, 11.0], [3.7, 11.0], [3.8, 11.0], [3.9, 11.0], [4.0, 11.0], [4.1, 11.0], [4.2, 11.0], [4.3, 11.0], [4.4, 11.0], [4.5, 11.0], [4.6, 11.0], [4.7, 11.0], [4.8, 11.0], [4.9, 11.0], [5.0, 11.0], [5.1, 11.0], [5.2, 11.0], [5.3, 11.0], [5.4, 12.0], [5.5, 12.0], [5.6, 12.0], [5.7, 12.0], [5.8, 12.0], [5.9, 12.0], [6.0, 12.0], [6.1, 12.0], [6.2, 12.0], [6.3, 12.0], [6.4, 12.0], [6.5, 12.0], [6.6, 12.0], [6.7, 12.0], [6.8, 12.0], [6.9, 12.0], [7.0, 12.0], [7.1, 12.0], [7.2, 12.0], [7.3, 12.0], [7.4, 12.0], [7.5, 12.0], [7.6, 12.0], [7.7, 12.0], [7.8, 12.0], [7.9, 12.0], [8.0, 12.0], [8.1, 12.0], [8.2, 12.0], [8.3, 12.0], [8.4, 12.0], [8.5, 12.0], [8.6, 12.0], [8.7, 12.0], [8.8, 12.0], [8.9, 12.0], [9.0, 12.0], [9.1, 12.0], [9.2, 12.0], [9.3, 12.0], [9.4, 12.0], [9.5, 13.0], [9.6, 13.0], [9.7, 13.0], [9.8, 13.0], [9.9, 13.0], [10.0, 13.0], [10.1, 13.0], [10.2, 13.0], [10.3, 13.0], [10.4, 13.0], [10.5, 13.0], [10.6, 13.0], [10.7, 13.0], [10.8, 13.0], [10.9, 13.0], [11.0, 13.0], [11.1, 13.0], [11.2, 13.0], [11.3, 13.0], [11.4, 13.0], [11.5, 13.0], [11.6, 13.0], [11.7, 13.0], [11.8, 13.0], [11.9, 13.0], [12.0, 13.0], [12.1, 13.0], [12.2, 13.0], [12.3, 13.0], [12.4, 13.0], [12.5, 13.0], [12.6, 13.0], [12.7, 13.0], [12.8, 13.0], [12.9, 13.0], [13.0, 13.0], [13.1, 13.0], [13.2, 13.0], [13.3, 13.0], [13.4, 13.0], [13.5, 13.0], [13.6, 13.0], [13.7, 13.0], [13.8, 13.0], [13.9, 13.0], [14.0, 13.0], [14.1, 13.0], [14.2, 13.0], [14.3, 13.0], [14.4, 13.0], [14.5, 13.0], [14.6, 14.0], [14.7, 14.0], [14.8, 14.0], [14.9, 14.0], [15.0, 14.0], [15.1, 14.0], [15.2, 14.0], [15.3, 14.0], [15.4, 14.0], [15.5, 14.0], [15.6, 14.0], [15.7, 14.0], [15.8, 14.0], [15.9, 14.0], [16.0, 14.0], [16.1, 14.0], [16.2, 14.0], [16.3, 14.0], [16.4, 14.0], [16.5, 14.0], [16.6, 14.0], [16.7, 14.0], [16.8, 14.0], [16.9, 14.0], [17.0, 14.0], [17.1, 14.0], [17.2, 14.0], [17.3, 14.0], [17.4, 14.0], [17.5, 14.0], [17.6, 14.0], [17.7, 14.0], [17.8, 14.0], [17.9, 14.0], [18.0, 14.0], [18.1, 14.0], [18.2, 14.0], [18.3, 14.0], [18.4, 14.0], [18.5, 14.0], [18.6, 14.0], [18.7, 14.0], [18.8, 14.0], [18.9, 14.0], [19.0, 14.0], [19.1, 14.0], [19.2, 14.0], [19.3, 14.0], [19.4, 14.0], [19.5, 14.0], [19.6, 14.0], [19.7, 14.0], [19.8, 14.0], [19.9, 14.0], [20.0, 14.0], [20.1, 14.0], [20.2, 14.0], [20.3, 14.0], [20.4, 14.0], [20.5, 14.0], [20.6, 14.0], [20.7, 14.0], [20.8, 14.0], [20.9, 14.0], [21.0, 14.0], [21.1, 14.0], [21.2, 14.0], [21.3, 14.0], [21.4, 14.0], [21.5, 14.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 15.0], [22.7, 15.0], [22.8, 15.0], [22.9, 15.0], [23.0, 15.0], [23.1, 15.0], [23.2, 15.0], [23.3, 15.0], [23.4, 15.0], [23.5, 15.0], [23.6, 15.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 15.0], [25.3, 15.0], [25.4, 15.0], [25.5, 15.0], [25.6, 15.0], [25.7, 15.0], [25.8, 15.0], [25.9, 15.0], [26.0, 15.0], [26.1, 15.0], [26.2, 15.0], [26.3, 15.0], [26.4, 15.0], [26.5, 15.0], [26.6, 15.0], [26.7, 15.0], [26.8, 15.0], [26.9, 15.0], [27.0, 15.0], [27.1, 15.0], [27.2, 15.0], [27.3, 15.0], [27.4, 15.0], [27.5, 15.0], [27.6, 15.0], [27.7, 15.0], [27.8, 15.0], [27.9, 15.0], [28.0, 15.0], [28.1, 15.0], [28.2, 15.0], [28.3, 15.0], [28.4, 15.0], [28.5, 15.0], [28.6, 15.0], [28.7, 15.0], [28.8, 15.0], [28.9, 15.0], [29.0, 15.0], [29.1, 15.0], [29.2, 15.0], [29.3, 15.0], [29.4, 15.0], [29.5, 15.0], [29.6, 15.0], [29.7, 15.0], [29.8, 15.0], [29.9, 15.0], [30.0, 15.0], [30.1, 15.0], [30.2, 15.0], [30.3, 15.0], [30.4, 16.0], [30.5, 16.0], [30.6, 16.0], [30.7, 16.0], [30.8, 16.0], [30.9, 16.0], [31.0, 16.0], [31.1, 16.0], [31.2, 16.0], [31.3, 16.0], [31.4, 16.0], [31.5, 16.0], [31.6, 16.0], [31.7, 16.0], [31.8, 16.0], [31.9, 16.0], [32.0, 16.0], [32.1, 16.0], [32.2, 16.0], [32.3, 16.0], [32.4, 16.0], [32.5, 16.0], [32.6, 16.0], [32.7, 16.0], [32.8, 16.0], [32.9, 16.0], [33.0, 16.0], [33.1, 16.0], [33.2, 16.0], [33.3, 16.0], [33.4, 16.0], [33.5, 16.0], [33.6, 16.0], [33.7, 16.0], [33.8, 16.0], [33.9, 16.0], [34.0, 16.0], [34.1, 16.0], [34.2, 16.0], [34.3, 16.0], [34.4, 16.0], [34.5, 16.0], [34.6, 16.0], [34.7, 16.0], [34.8, 16.0], [34.9, 16.0], [35.0, 16.0], [35.1, 16.0], [35.2, 16.0], [35.3, 16.0], [35.4, 16.0], [35.5, 16.0], [35.6, 16.0], [35.7, 16.0], [35.8, 16.0], [35.9, 16.0], [36.0, 16.0], [36.1, 16.0], [36.2, 16.0], [36.3, 16.0], [36.4, 16.0], [36.5, 16.0], [36.6, 16.0], [36.7, 16.0], [36.8, 16.0], [36.9, 16.0], [37.0, 16.0], [37.1, 16.0], [37.2, 16.0], [37.3, 17.0], [37.4, 17.0], [37.5, 17.0], [37.6, 17.0], [37.7, 17.0], [37.8, 17.0], [37.9, 17.0], [38.0, 17.0], [38.1, 17.0], [38.2, 17.0], [38.3, 17.0], [38.4, 17.0], [38.5, 17.0], [38.6, 17.0], [38.7, 17.0], [38.8, 17.0], [38.9, 17.0], [39.0, 17.0], [39.1, 17.0], [39.2, 17.0], [39.3, 17.0], [39.4, 17.0], [39.5, 17.0], [39.6, 17.0], [39.7, 17.0], [39.8, 17.0], [39.9, 17.0], [40.0, 17.0], [40.1, 17.0], [40.2, 17.0], [40.3, 17.0], [40.4, 17.0], [40.5, 17.0], [40.6, 17.0], [40.7, 17.0], [40.8, 17.0], [40.9, 17.0], [41.0, 17.0], [41.1, 17.0], [41.2, 17.0], [41.3, 17.0], [41.4, 17.0], [41.5, 17.0], [41.6, 17.0], [41.7, 17.0], [41.8, 17.0], [41.9, 17.0], [42.0, 17.0], [42.1, 17.0], [42.2, 17.0], [42.3, 17.0], [42.4, 17.0], [42.5, 17.0], [42.6, 18.0], [42.7, 18.0], [42.8, 18.0], [42.9, 18.0], [43.0, 18.0], [43.1, 18.0], [43.2, 18.0], [43.3, 18.0], [43.4, 18.0], [43.5, 18.0], [43.6, 18.0], [43.7, 18.0], [43.8, 18.0], [43.9, 18.0], [44.0, 18.0], [44.1, 18.0], [44.2, 18.0], [44.3, 18.0], [44.4, 18.0], [44.5, 18.0], [44.6, 18.0], [44.7, 18.0], [44.8, 18.0], [44.9, 18.0], [45.0, 18.0], [45.1, 18.0], [45.2, 18.0], [45.3, 18.0], [45.4, 18.0], [45.5, 18.0], [45.6, 18.0], [45.7, 18.0], [45.8, 18.0], [45.9, 18.0], [46.0, 18.0], [46.1, 18.0], [46.2, 18.0], [46.3, 18.0], [46.4, 18.0], [46.5, 18.0], [46.6, 18.0], [46.7, 18.0], [46.8, 18.0], [46.9, 18.0], [47.0, 18.0], [47.1, 18.0], [47.2, 18.0], [47.3, 18.0], [47.4, 18.0], [47.5, 19.0], [47.6, 19.0], [47.7, 19.0], [47.8, 19.0], [47.9, 19.0], [48.0, 19.0], [48.1, 19.0], [48.2, 19.0], [48.3, 19.0], [48.4, 19.0], [48.5, 19.0], [48.6, 19.0], [48.7, 19.0], [48.8, 19.0], [48.9, 19.0], [49.0, 19.0], [49.1, 19.0], [49.2, 19.0], [49.3, 19.0], [49.4, 19.0], [49.5, 19.0], [49.6, 19.0], [49.7, 19.0], [49.8, 19.0], [49.9, 19.0], [50.0, 19.0], [50.1, 19.0], [50.2, 19.0], [50.3, 19.0], [50.4, 19.0], [50.5, 19.0], [50.6, 19.0], [50.7, 19.0], [50.8, 19.0], [50.9, 19.0], [51.0, 19.0], [51.1, 19.0], [51.2, 19.0], [51.3, 19.0], [51.4, 19.0], [51.5, 19.0], [51.6, 19.0], [51.7, 19.0], [51.8, 19.0], [51.9, 19.0], [52.0, 19.0], [52.1, 19.0], [52.2, 19.0], [52.3, 19.0], [52.4, 20.0], [52.5, 20.0], [52.6, 20.0], [52.7, 20.0], [52.8, 20.0], [52.9, 20.0], [53.0, 20.0], [53.1, 20.0], [53.2, 20.0], [53.3, 20.0], [53.4, 20.0], [53.5, 20.0], [53.6, 20.0], [53.7, 20.0], [53.8, 20.0], [53.9, 20.0], [54.0, 20.0], [54.1, 20.0], [54.2, 20.0], [54.3, 20.0], [54.4, 20.0], [54.5, 20.0], [54.6, 20.0], [54.7, 20.0], [54.8, 20.0], [54.9, 20.0], [55.0, 20.0], [55.1, 20.0], [55.2, 20.0], [55.3, 20.0], [55.4, 20.0], [55.5, 20.0], [55.6, 20.0], [55.7, 20.0], [55.8, 20.0], [55.9, 20.0], [56.0, 20.0], [56.1, 20.0], [56.2, 20.0], [56.3, 20.0], [56.4, 20.0], [56.5, 20.0], [56.6, 20.0], [56.7, 20.0], [56.8, 20.0], [56.9, 20.0], [57.0, 20.0], [57.1, 20.0], [57.2, 20.0], [57.3, 20.0], [57.4, 20.0], [57.5, 20.0], [57.6, 20.0], [57.7, 20.0], [57.8, 20.0], [57.9, 20.0], [58.0, 20.0], [58.1, 20.0], [58.2, 20.0], [58.3, 20.0], [58.4, 20.0], [58.5, 21.0], [58.6, 21.0], [58.7, 21.0], [58.8, 21.0], [58.9, 21.0], [59.0, 21.0], [59.1, 21.0], [59.2, 21.0], [59.3, 21.0], [59.4, 21.0], [59.5, 21.0], [59.6, 21.0], [59.7, 21.0], [59.8, 21.0], [59.9, 21.0], [60.0, 21.0], [60.1, 21.0], [60.2, 21.0], [60.3, 21.0], [60.4, 21.0], [60.5, 21.0], [60.6, 21.0], [60.7, 21.0], [60.8, 21.0], [60.9, 21.0], [61.0, 21.0], [61.1, 21.0], [61.2, 21.0], [61.3, 21.0], [61.4, 21.0], [61.5, 21.0], [61.6, 21.0], [61.7, 21.0], [61.8, 21.0], [61.9, 21.0], [62.0, 21.0], [62.1, 21.0], [62.2, 21.0], [62.3, 21.0], [62.4, 21.0], [62.5, 21.0], [62.6, 21.0], [62.7, 21.0], [62.8, 21.0], [62.9, 21.0], [63.0, 21.0], [63.1, 21.0], [63.2, 21.0], [63.3, 21.0], [63.4, 21.0], [63.5, 21.0], [63.6, 21.0], [63.7, 21.0], [63.8, 21.0], [63.9, 21.0], [64.0, 21.0], [64.1, 21.0], [64.2, 22.0], [64.3, 22.0], [64.4, 22.0], [64.5, 22.0], [64.6, 22.0], [64.7, 22.0], [64.8, 22.0], [64.9, 22.0], [65.0, 22.0], [65.1, 22.0], [65.2, 22.0], [65.3, 22.0], [65.4, 22.0], [65.5, 22.0], [65.6, 22.0], [65.7, 22.0], [65.8, 22.0], [65.9, 22.0], [66.0, 22.0], [66.1, 22.0], [66.2, 22.0], [66.3, 22.0], [66.4, 22.0], [66.5, 22.0], [66.6, 22.0], [66.7, 22.0], [66.8, 22.0], [66.9, 22.0], [67.0, 22.0], [67.1, 22.0], [67.2, 22.0], [67.3, 22.0], [67.4, 22.0], [67.5, 22.0], [67.6, 22.0], [67.7, 22.0], [67.8, 22.0], [67.9, 22.0], [68.0, 22.0], [68.1, 22.0], [68.2, 22.0], [68.3, 22.0], [68.4, 22.0], [68.5, 22.0], [68.6, 22.0], [68.7, 22.0], [68.8, 22.0], [68.9, 22.0], [69.0, 22.0], [69.1, 23.0], [69.2, 23.0], [69.3, 23.0], [69.4, 23.0], [69.5, 23.0], [69.6, 23.0], [69.7, 23.0], [69.8, 23.0], [69.9, 23.0], [70.0, 23.0], [70.1, 23.0], [70.2, 23.0], [70.3, 23.0], [70.4, 23.0], [70.5, 23.0], [70.6, 23.0], [70.7, 23.0], [70.8, 23.0], [70.9, 23.0], [71.0, 23.0], [71.1, 23.0], [71.2, 23.0], [71.3, 23.0], [71.4, 23.0], [71.5, 23.0], [71.6, 23.0], [71.7, 23.0], [71.8, 23.0], [71.9, 23.0], [72.0, 23.0], [72.1, 23.0], [72.2, 23.0], [72.3, 23.0], [72.4, 23.0], [72.5, 23.0], [72.6, 23.0], [72.7, 23.0], [72.8, 23.0], [72.9, 23.0], [73.0, 23.0], [73.1, 23.0], [73.2, 23.0], [73.3, 23.0], [73.4, 24.0], [73.5, 24.0], [73.6, 24.0], [73.7, 24.0], [73.8, 24.0], [73.9, 24.0], [74.0, 24.0], [74.1, 24.0], [74.2, 24.0], [74.3, 24.0], [74.4, 24.0], [74.5, 24.0], [74.6, 24.0], [74.7, 24.0], [74.8, 24.0], [74.9, 24.0], [75.0, 24.0], [75.1, 24.0], [75.2, 24.0], [75.3, 24.0], [75.4, 24.0], [75.5, 24.0], [75.6, 24.0], [75.7, 24.0], [75.8, 24.0], [75.9, 24.0], [76.0, 24.0], [76.1, 24.0], [76.2, 24.0], [76.3, 24.0], [76.4, 24.0], [76.5, 24.0], [76.6, 24.0], [76.7, 24.0], [76.8, 24.0], [76.9, 24.0], [77.0, 24.0], [77.1, 24.0], [77.2, 24.0], [77.3, 25.0], [77.4, 25.0], [77.5, 25.0], [77.6, 25.0], [77.7, 25.0], [77.8, 25.0], [77.9, 25.0], [78.0, 25.0], [78.1, 25.0], [78.2, 25.0], [78.3, 25.0], [78.4, 25.0], [78.5, 25.0], [78.6, 25.0], [78.7, 25.0], [78.8, 25.0], [78.9, 25.0], [79.0, 25.0], [79.1, 25.0], [79.2, 25.0], [79.3, 25.0], [79.4, 25.0], [79.5, 25.0], [79.6, 25.0], [79.7, 25.0], [79.8, 25.0], [79.9, 25.0], [80.0, 25.0], [80.1, 25.0], [80.2, 25.0], [80.3, 25.0], [80.4, 25.0], [80.5, 25.0], [80.6, 25.0], [80.7, 25.0], [80.8, 25.0], [80.9, 26.0], [81.0, 26.0], [81.1, 26.0], [81.2, 26.0], [81.3, 26.0], [81.4, 26.0], [81.5, 26.0], [81.6, 26.0], [81.7, 26.0], [81.8, 26.0], [81.9, 26.0], [82.0, 26.0], [82.1, 26.0], [82.2, 26.0], [82.3, 26.0], [82.4, 26.0], [82.5, 26.0], [82.6, 26.0], [82.7, 26.0], [82.8, 26.0], [82.9, 26.0], [83.0, 26.0], [83.1, 26.0], [83.2, 26.0], [83.3, 26.0], [83.4, 26.0], [83.5, 27.0], [83.6, 27.0], [83.7, 27.0], [83.8, 27.0], [83.9, 27.0], [84.0, 27.0], [84.1, 27.0], [84.2, 27.0], [84.3, 27.0], [84.4, 27.0], [84.5, 27.0], [84.6, 27.0], [84.7, 27.0], [84.8, 27.0], [84.9, 27.0], [85.0, 27.0], [85.1, 27.0], [85.2, 27.0], [85.3, 27.0], [85.4, 27.0], [85.5, 27.0], [85.6, 27.0], [85.7, 27.0], [85.8, 27.0], [85.9, 27.0], [86.0, 27.0], [86.1, 28.0], [86.2, 28.0], [86.3, 28.0], [86.4, 28.0], [86.5, 28.0], [86.6, 28.0], [86.7, 28.0], [86.8, 28.0], [86.9, 28.0], [87.0, 28.0], [87.1, 28.0], [87.2, 28.0], [87.3, 28.0], [87.4, 28.0], [87.5, 28.0], [87.6, 28.0], [87.7, 29.0], [87.8, 29.0], [87.9, 29.0], [88.0, 29.0], [88.1, 29.0], [88.2, 29.0], [88.3, 29.0], [88.4, 29.0], [88.5, 29.0], [88.6, 29.0], [88.7, 29.0], [88.8, 29.0], [88.9, 29.0], [89.0, 29.0], [89.1, 29.0], [89.2, 30.0], [89.3, 30.0], [89.4, 30.0], [89.5, 30.0], [89.6, 30.0], [89.7, 30.0], [89.8, 30.0], [89.9, 30.0], [90.0, 30.0], [90.1, 30.0], [90.2, 30.0], [90.3, 30.0], [90.4, 31.0], [90.5, 31.0], [90.6, 31.0], [90.7, 31.0], [90.8, 31.0], [90.9, 31.0], [91.0, 31.0], [91.1, 31.0], [91.2, 31.0], [91.3, 31.0], [91.4, 32.0], [91.5, 32.0], [91.6, 32.0], [91.7, 32.0], [91.8, 32.0], [91.9, 32.0], [92.0, 32.0], [92.1, 32.0], [92.2, 32.0], [92.3, 33.0], [92.4, 33.0], [92.5, 33.0], [92.6, 33.0], [92.7, 33.0], [92.8, 33.0], [92.9, 33.0], [93.0, 33.0], [93.1, 34.0], [93.2, 34.0], [93.3, 34.0], [93.4, 34.0], [93.5, 34.0], [93.6, 34.0], [93.7, 35.0], [93.8, 35.0], [93.9, 35.0], [94.0, 35.0], [94.1, 35.0], [94.2, 36.0], [94.3, 36.0], [94.4, 36.0], [94.5, 36.0], [94.6, 36.0], [94.7, 37.0], [94.8, 37.0], [94.9, 37.0], [95.0, 37.0], [95.1, 38.0], [95.2, 38.0], [95.3, 38.0], [95.4, 39.0], [95.5, 39.0], [95.6, 39.0], [95.7, 40.0], [95.8, 40.0], [95.9, 40.0], [96.0, 41.0], [96.1, 41.0], [96.2, 42.0], [96.3, 42.0], [96.4, 42.0], [96.5, 43.0], [96.6, 44.0], [96.7, 44.0], [96.8, 45.0], [96.9, 46.0], [97.0, 46.0], [97.1, 47.0], [97.2, 47.0], [97.3, 48.0], [97.4, 49.0], [97.5, 50.0], [97.6, 51.0], [97.7, 53.0], [97.8, 54.0], [97.9, 56.0], [98.0, 58.0], [98.1, 58.0], [98.2, 60.0], [98.3, 61.0], [98.4, 65.0], [98.5, 66.0], [98.6, 69.0], [98.7, 72.0], [98.8, 76.0], [98.9, 80.0], [99.0, 84.0], [99.1, 89.0], [99.2, 92.0], [99.3, 97.0], [99.4, 103.0], [99.5, 117.0], [99.6, 128.0], [99.7, 145.0], [99.8, 181.0], [99.9, 359.0]], "isOverall": false, "label": "Sunstar Home Japan", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 11977.0, "series": [{"data": [[0.0, 11977.0], [4400.0, 1.0], [300.0, 4.0], [600.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [100.0, 54.0], [200.0, 8.0], [400.0, 2.0], [3600.0, 1.0], [3900.0, 3.0]], "isOverall": false, "label": "Sunstar Home Japan", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12045.0, "series": [{"data": [[0.0, 12045.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.62575025E12, "maxY": 17.5, "series": [{"data": [[1.62575043E12, 3.0], [1.62575026E12, 3.717391304347826], [1.62575094E12, 3.0], [1.62575111E12, 3.0], [1.62575077E12, 3.0], [1.6257506E12, 3.0], [1.62575051E12, 3.0], [1.62575034E12, 3.0], [1.62575102E12, 3.0], [1.62575085E12, 3.0], [1.62575068E12, 3.0], [1.62575027E12, 2.0], [1.62575104E12, 3.0], [1.62575095E12, 3.0], [1.62575078E12, 3.0], [1.62575061E12, 3.0], [1.62575044E12, 3.0], [1.62575035E12, 3.0], [1.62575112E12, 3.0], [1.62575086E12, 4.212765957446808], [1.62575103E12, 3.0], [1.62575069E12, 3.0], [1.62575052E12, 3.0], [1.62575075E12, 3.0], [1.62575058E12, 3.0], [1.62575041E12, 3.0], [1.62575092E12, 3.0], [1.62575109E12, 3.0], [1.62575083E12, 3.0], [1.62575066E12, 3.0], [1.62575049E12, 3.0], [1.62575032E12, 3.0], [1.625751E12, 3.0], [1.62575059E12, 3.0], [1.62575042E12, 3.0], [1.62575025E12, 17.5], [1.6257511E12, 3.0], [1.62575093E12, 3.0], [1.62575076E12, 3.0], [1.62575067E12, 3.0], [1.6257505E12, 3.0], [1.62575033E12, 3.0], [1.62575101E12, 3.0], [1.62575084E12, 3.0], [1.6257509E12, 3.0], [1.62575107E12, 3.0], [1.62575073E12, 3.0], [1.62575056E12, 3.0], [1.62575047E12, 3.0], [1.6257503E12, 3.0], [1.62575098E12, 3.0], [1.62575115E12, 3.0], [1.62575081E12, 3.0], [1.62575064E12, 3.0], [1.62575055E12, 3.0], [1.62575038E12, 3.0], [1.62575091E12, 3.0], [1.62575074E12, 3.0], [1.62575057E12, 3.0], [1.6257504E12, 3.0], [1.62575031E12, 3.0], [1.62575108E12, 3.0], [1.62575099E12, 3.0], [1.62575082E12, 3.0], [1.62575065E12, 3.0], [1.62575048E12, 3.0], [1.62575039E12, 3.0], [1.62575088E12, 3.0], [1.62575105E12, 3.0], [1.62575079E12, 3.0], [1.62575062E12, 3.0], [1.62575045E12, 3.0], [1.62575028E12, 2.887931034482757], [1.62575096E12, 3.0], [1.62575113E12, 3.0], [1.62575087E12, 3.0], [1.6257507E12, 3.0], [1.62575053E12, 3.0], [1.62575036E12, 3.0], [1.62575106E12, 3.0], [1.62575089E12, 3.0], [1.62575072E12, 3.0], [1.62575063E12, 3.0], [1.62575046E12, 3.0], [1.62575029E12, 3.0], [1.62575114E12, 3.0], [1.62575097E12, 3.0], [1.6257508E12, 3.0], [1.62575071E12, 3.0], [1.62575054E12, 3.0], [1.62575037E12, 3.0]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575115E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 22.208845829823087, "minX": 1.0, "maxY": 5177.0, "series": [{"data": [[8.0, 27.5], [2.0, 27.04237288135594], [9.0, 63.5], [10.0, 45.0], [11.0, 2512.5], [3.0, 22.208845829823087], [12.0, 66.5], [14.0, 72.0], [15.0, 4493.0], [16.0, 3672.0], [4.0, 27.0], [1.0, 26.666666666666664], [17.0, 57.0], [18.0, 46.0], [19.0, 5177.0], [20.0, 3913.0], [5.0, 34.6], [6.0, 23.749999999999996], [7.0, 36.666666666666664]], "isOverall": false, "label": "Sunstar Home Japan", "isController": false}, {"data": [[3.015929644072018, 24.175143117895974]], "isOverall": false, "label": "Sunstar Home Japan-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 38.7, "minX": 1.62575025E12, "maxY": 993382.2, "series": [{"data": [[1.62575043E12, 79075.2], [1.62575026E12, 227337.0], [1.62575094E12, 459615.3], [1.62575111E12, 602948.4], [1.62575077E12, 286647.6], [1.6257506E12, 163092.6], [1.62575051E12, 978555.6], [1.62575034E12, 983477.9], [1.62575102E12, 869827.2], [1.62575085E12, 884653.8], [1.62575068E12, 993382.2], [1.62575027E12, 425025.1], [1.62575104E12, 973613.4], [1.62575095E12, 281699.7], [1.62575078E12, 143323.8], [1.62575061E12, 79075.2], [1.62575044E12, 261936.6], [1.62575035E12, 983481.9], [1.62575112E12, 454682.4], [1.62575086E12, 696842.0], [1.62575103E12, 993382.2], [1.62575069E12, 978555.6], [1.62575052E12, 973613.4], [1.62575075E12, 612832.8], [1.62575058E12, 464566.8], [1.62575041E12, 301474.2], [1.62575092E12, 775909.7], [1.62575109E12, 919249.2], [1.62575083E12, 711676.8], [1.62575066E12, 879711.6], [1.62575049E12, 973638.8], [1.62575032E12, 973593.7], [1.625751E12, 568353.0], [1.62575059E12, 286647.6], [1.62575042E12, 148266.0], [1.62575025E12, 29656.3], [1.6257511E12, 780867.6], [1.62575093E12, 607878.3], [1.62575076E12, 464566.8], [1.62575067E12, 968671.2], [1.6257505E12, 973618.3], [1.62575033E12, 973593.7], [1.62575101E12, 731445.6], [1.62575084E12, 864885.0], [1.6257509E12, 978535.8], [1.62575107E12, 973613.4], [1.62575073E12, 939018.0], [1.62575056E12, 790752.0], [1.62575047E12, 736387.8], [1.6257503E12, 874751.7], [1.62575098E12, 261940.4], [1.62575115E12, 14826.6], [1.62575081E12, 405260.4], [1.62575064E12, 553526.4], [1.62575055E12, 919249.2], [1.62575038E12, 775925.4], [1.62575091E12, 924172.7], [1.62575074E12, 785809.8], [1.62575057E12, 617775.0], [1.6257504E12, 444798.0], [1.62575031E12, 958767.4], [1.62575108E12, 983497.8], [1.62575099E12, 385493.0], [1.62575082E12, 568353.0], [1.62575065E12, 721561.2], [1.62575048E12, 879711.6], [1.62575039E12, 622717.2], [1.62575088E12, 978535.8], [1.62575105E12, 978555.6], [1.62575079E12, 108728.4], [1.62575062E12, 271821.0], [1.62575045E12, 415144.8], [1.62575028E12, 573284.2], [1.62575096E12, 148264.8], [1.62575113E12, 276763.2], [1.62575087E12, 978532.9], [1.6257507E12, 983513.8], [1.62575053E12, 973613.4], [1.62575036E12, 968671.2], [1.62575106E12, 968671.2], [1.62575089E12, 983477.9], [1.62575072E12, 973613.4], [1.62575063E12, 429971.4], [1.62575046E12, 558468.6], [1.62575029E12, 731430.8], [1.62575114E12, 143323.8], [1.62575097E12, 98847.6], [1.6257508E12, 252052.2], [1.62575071E12, 978559.9], [1.62575054E12, 968671.2], [1.62575037E12, 924191.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62575043E12, 206.4], [1.62575026E12, 593.4], [1.62575094E12, 1199.7], [1.62575111E12, 1573.8], [1.62575077E12, 748.2], [1.6257506E12, 425.7], [1.62575051E12, 2554.2], [1.62575034E12, 2567.1], [1.62575102E12, 2270.4], [1.62575085E12, 2309.1], [1.62575068E12, 2592.9], [1.62575027E12, 1109.4], [1.62575104E12, 2541.3], [1.62575095E12, 735.3], [1.62575078E12, 374.1], [1.62575061E12, 206.4], [1.62575044E12, 683.7], [1.62575035E12, 2567.1], [1.62575112E12, 1186.8], [1.62575086E12, 1818.9], [1.62575103E12, 2592.9], [1.62575069E12, 2554.2], [1.62575052E12, 2541.3], [1.62575075E12, 1599.6], [1.62575058E12, 1212.6], [1.62575041E12, 786.9], [1.62575092E12, 2025.3], [1.62575109E12, 2399.4], [1.62575083E12, 1857.6], [1.62575066E12, 2296.2], [1.62575049E12, 2541.3], [1.62575032E12, 2541.3], [1.625751E12, 1483.5], [1.62575059E12, 748.2], [1.62575042E12, 387.0], [1.62575025E12, 77.4], [1.6257511E12, 2038.2], [1.62575093E12, 1586.7], [1.62575076E12, 1212.6], [1.62575067E12, 2528.4], [1.6257505E12, 2541.3], [1.62575033E12, 2541.3], [1.62575101E12, 1909.2], [1.62575084E12, 2257.5], [1.6257509E12, 2554.2], [1.62575107E12, 2541.3], [1.62575073E12, 2451.0], [1.62575056E12, 2064.0], [1.62575047E12, 1922.1], [1.6257503E12, 2283.3], [1.62575098E12, 683.7], [1.62575115E12, 38.7], [1.62575081E12, 1057.8], [1.62575064E12, 1444.8], [1.62575055E12, 2399.4], [1.62575038E12, 2025.3], [1.62575091E12, 2412.3], [1.62575074E12, 2051.1], [1.62575057E12, 1612.5], [1.6257504E12, 1161.0], [1.62575031E12, 2502.6], [1.62575108E12, 2567.1], [1.62575099E12, 1006.2], [1.62575082E12, 1483.5], [1.62575065E12, 1883.4], [1.62575048E12, 2296.2], [1.62575039E12, 1625.4], [1.62575088E12, 2554.2], [1.62575105E12, 2554.2], [1.62575079E12, 283.8], [1.62575062E12, 709.5], [1.62575045E12, 1083.6], [1.62575028E12, 1496.4], [1.62575096E12, 387.0], [1.62575113E12, 722.4], [1.62575087E12, 2554.2], [1.6257507E12, 2567.1], [1.62575053E12, 2541.3], [1.62575036E12, 2528.4], [1.62575106E12, 2528.4], [1.62575089E12, 2567.1], [1.62575072E12, 2541.3], [1.62575063E12, 1122.3], [1.62575046E12, 1457.7], [1.62575029E12, 1909.2], [1.62575114E12, 374.1], [1.62575097E12, 258.0], [1.6257508E12, 657.9], [1.62575071E12, 2554.2], [1.62575054E12, 2528.4], [1.62575037E12, 2412.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575115E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 15.517241379310349, "minX": 1.62575025E12, "maxY": 2893.0, "series": [{"data": [[1.62575043E12, 19.0625], [1.62575026E12, 35.28260869565218], [1.62575094E12, 23.150537634408597], [1.62575111E12, 20.28688524590164], [1.62575077E12, 15.517241379310349], [1.6257506E12, 21.939393939393938], [1.62575051E12, 20.424242424242404], [1.62575034E12, 22.110552763819086], [1.62575102E12, 20.0340909090909], [1.62575085E12, 20.391061452513974], [1.62575068E12, 20.686567164179092], [1.62575027E12, 27.104651162790695], [1.62575104E12, 22.065989847715738], [1.62575095E12, 18.947368421052634], [1.62575078E12, 17.310344827586206], [1.62575061E12, 19.187500000000004], [1.62575044E12, 23.000000000000004], [1.62575035E12, 17.698492462311574], [1.62575112E12, 21.51086956521739], [1.62575086E12, 115.3475177304964], [1.62575103E12, 19.910447761194035], [1.62575069E12, 19.36868686868688], [1.62575052E12, 22.46192893401015], [1.62575075E12, 28.306451612903224], [1.62575058E12, 21.180851063829785], [1.62575041E12, 22.606557377049185], [1.62575092E12, 19.675159235668797], [1.62575109E12, 21.118279569892465], [1.62575083E12, 20.972222222222218], [1.62575066E12, 17.713483146067396], [1.62575049E12, 20.873096446700497], [1.62575032E12, 19.923857868020292], [1.625751E12, 29.94782608695649], [1.62575059E12, 19.999999999999996], [1.62575042E12, 20.633333333333336], [1.62575025E12, 2893.0], [1.6257511E12, 20.088607594936708], [1.62575093E12, 20.73983739837397], [1.62575076E12, 29.180851063829778], [1.62575067E12, 20.653061224489793], [1.6257505E12, 22.01522842639594], [1.62575033E12, 19.736040609137056], [1.62575101E12, 17.43243243243243], [1.62575084E12, 19.55428571428573], [1.6257509E12, 20.479797979797965], [1.62575107E12, 19.68527918781726], [1.62575073E12, 28.342105263157876], [1.62575056E12, 17.287500000000005], [1.62575047E12, 20.41610738255034], [1.6257503E12, 19.943502824858754], [1.62575098E12, 18.509433962264147], [1.62575115E12, 23.666666666666668], [1.62575081E12, 17.41463414634147], [1.62575064E12, 18.741071428571423], [1.62575055E12, 19.11290322580646], [1.62575038E12, 20.280254777070077], [1.62575091E12, 20.22994652406416], [1.62575074E12, 27.622641509433965], [1.62575057E12, 19.535999999999994], [1.6257504E12, 25.722222222222225], [1.62575031E12, 18.731958762886595], [1.62575108E12, 20.50251256281407], [1.62575099E12, 19.6923076923077], [1.62575082E12, 24.747826086956522], [1.62575065E12, 19.55479452054794], [1.62575048E12, 22.146067415730347], [1.62575039E12, 19.563492063492056], [1.62575088E12, 20.95454545454546], [1.62575105E12, 20.232323232323232], [1.62575079E12, 21.045454545454547], [1.62575062E12, 21.254545454545465], [1.62575045E12, 20.25], [1.62575028E12, 26.974137931034488], [1.62575096E12, 19.833333333333332], [1.62575113E12, 19.803571428571423], [1.62575087E12, 21.308080808080806], [1.6257507E12, 33.201005025125625], [1.62575053E12, 21.157360406091364], [1.62575036E12, 19.280612244897956], [1.62575106E12, 22.316326530612255], [1.62575089E12, 20.59798994974874], [1.62575072E12, 33.857868020304565], [1.62575063E12, 22.965517241379303], [1.62575046E12, 20.61061946902655], [1.62575029E12, 24.695945945945944], [1.62575114E12, 21.344827586206893], [1.62575097E12, 21.900000000000006], [1.6257508E12, 17.725490196078436], [1.62575071E12, 30.439393939393934], [1.62575054E12, 21.076530612244905], [1.62575037E12, 19.139037433155067]], "isOverall": false, "label": "Sunstar Home Japan", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575115E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 15.137931034482762, "minX": 1.62575025E12, "maxY": 2751.0, "series": [{"data": [[1.62575043E12, 18.812499999999996], [1.62575026E12, 33.630434782608695], [1.62575094E12, 21.161290322580644], [1.62575111E12, 18.540983606557376], [1.62575077E12, 15.137931034482762], [1.6257506E12, 20.42424242424242], [1.62575051E12, 18.878787878787886], [1.62575034E12, 21.733668341708544], [1.62575102E12, 19.698863636363633], [1.62575085E12, 18.7877094972067], [1.62575068E12, 20.422885572139283], [1.62575027E12, 26.04651162790698], [1.62575104E12, 20.426395939086287], [1.62575095E12, 17.350877192982455], [1.62575078E12, 17.103448275862068], [1.62575061E12, 17.437499999999996], [1.62575044E12, 22.792452830188676], [1.62575035E12, 17.407035175879386], [1.62575112E12, 20.054347826086957], [1.62575086E12, 106.0354609929078], [1.62575103E12, 18.855721393034827], [1.62575069E12, 19.0959595959596], [1.62575052E12, 20.79187817258883], [1.62575075E12, 25.983870967741932], [1.62575058E12, 19.989361702127656], [1.62575041E12, 22.32786885245902], [1.62575092E12, 18.019108280254773], [1.62575109E12, 19.42473118279569], [1.62575083E12, 19.2013888888889], [1.62575066E12, 17.44943820224719], [1.62575049E12, 19.720812182741106], [1.62575032E12, 19.61421319796954], [1.625751E12, 29.530434782608715], [1.62575059E12, 18.586206896551726], [1.62575042E12, 20.200000000000003], [1.62575025E12, 2751.0], [1.6257511E12, 18.474683544303797], [1.62575093E12, 19.073170731707314], [1.62575076E12, 28.031914893617014], [1.62575067E12, 20.392857142857142], [1.6257505E12, 20.43147208121829], [1.62575033E12, 19.355329949238577], [1.62575101E12, 16.959459459459456], [1.62575084E12, 17.891428571428573], [1.6257509E12, 18.833333333333332], [1.62575107E12, 18.040609137055828], [1.62575073E12, 25.942105263157902], [1.62575056E12, 16.962500000000016], [1.62575047E12, 20.114093959731534], [1.6257503E12, 19.615819209039554], [1.62575098E12, 18.24528301886792], [1.62575115E12, 22.333333333333332], [1.62575081E12, 17.134146341463417], [1.62575064E12, 18.053571428571423], [1.62575055E12, 18.489247311827953], [1.62575038E12, 19.48407643312103], [1.62575091E12, 18.60962566844919], [1.62575074E12, 25.29559748427673], [1.62575057E12, 19.264000000000003], [1.6257504E12, 25.45555555555555], [1.62575031E12, 18.479381443298966], [1.62575108E12, 18.829145728643226], [1.62575099E12, 19.307692307692307], [1.62575082E12, 23.59130434782608], [1.62575065E12, 19.232876712328775], [1.62575048E12, 21.775280898876407], [1.62575039E12, 19.206349206349216], [1.62575088E12, 19.237373737373737], [1.62575105E12, 18.646464646464644], [1.62575079E12, 20.818181818181817], [1.62575062E12, 19.436363636363645], [1.62575045E12, 19.92857142857143], [1.62575028E12, 26.36206896551725], [1.62575096E12, 18.433333333333337], [1.62575113E12, 18.339285714285715], [1.62575087E12, 19.646464646464647], [1.6257507E12, 31.472361809045225], [1.62575053E12, 19.62436548223349], [1.62575036E12, 18.984693877551024], [1.62575106E12, 20.836734693877542], [1.62575089E12, 18.97989949748743], [1.62575072E12, 31.44162436548223], [1.62575063E12, 21.218390804597696], [1.62575046E12, 20.31858407079646], [1.62575029E12, 24.236486486486488], [1.62575114E12, 19.758620689655174], [1.62575097E12, 21.299999999999997], [1.6257508E12, 17.49019607843137], [1.62575071E12, 28.03030303030304], [1.62575054E12, 19.479591836734702], [1.62575037E12, 18.540106951871653]], "isOverall": false, "label": "Sunstar Home Japan", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575115E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 12.793103448275865, "minX": 1.62575025E12, "maxY": 110.5, "series": [{"data": [[1.62575043E12, 15.562499999999998], [1.62575026E12, 25.5], [1.62575094E12, 17.817204301075268], [1.62575111E12, 15.65573770491803], [1.62575077E12, 12.793103448275865], [1.6257506E12, 16.96969696969697], [1.62575051E12, 15.944444444444443], [1.62575034E12, 18.23115577889446], [1.62575102E12, 16.60795454545454], [1.62575085E12, 15.888268156424585], [1.62575068E12, 17.1144278606965], [1.62575027E12, 20.488372093023248], [1.62575104E12, 17.147208121827404], [1.62575095E12, 14.701754385964913], [1.62575078E12, 14.379310344827584], [1.62575061E12, 14.625], [1.62575044E12, 17.547169811320753], [1.62575035E12, 14.180904522613071], [1.62575112E12, 17.09782608695652], [1.62575086E12, 16.439716312056735], [1.62575103E12, 15.800995024875625], [1.62575069E12, 15.737373737373733], [1.62575052E12, 17.81218274111675], [1.62575075E12, 20.67741935483871], [1.62575058E12, 16.85106382978723], [1.62575041E12, 19.000000000000004], [1.62575092E12, 15.203821656050962], [1.62575109E12, 16.36559139784946], [1.62575083E12, 16.124999999999993], [1.62575066E12, 14.56179775280899], [1.62575049E12, 15.522842639593911], [1.62575032E12, 16.664974619289342], [1.625751E12, 21.339130434782607], [1.62575059E12, 15.793103448275863], [1.62575042E12, 16.4], [1.62575025E12, 110.5], [1.6257511E12, 15.373417721518988], [1.62575093E12, 15.902439024390251], [1.62575076E12, 24.0531914893617], [1.62575067E12, 16.775510204081627], [1.6257505E12, 17.187817258883243], [1.62575033E12, 16.47715736040608], [1.62575101E12, 14.290540540540546], [1.62575084E12, 14.948571428571425], [1.6257509E12, 15.757575757575765], [1.62575107E12, 15.223350253807114], [1.62575073E12, 20.80526315789474], [1.62575056E12, 14.468749999999993], [1.62575047E12, 16.79194630872483], [1.6257503E12, 16.559322033898308], [1.62575098E12, 14.47169811320755], [1.62575115E12, 19.0], [1.62575081E12, 14.378048780487806], [1.62575064E12, 15.25892857142857], [1.62575055E12, 15.489247311827958], [1.62575038E12, 16.57324840764332], [1.62575091E12, 15.593582887700533], [1.62575074E12, 20.308176100628916], [1.62575057E12, 15.592], [1.6257504E12, 19.566666666666674], [1.62575031E12, 15.582474226804127], [1.62575108E12, 15.768844221105526], [1.62575099E12, 15.743589743589748], [1.62575082E12, 20.11304347826086], [1.62575065E12, 16.082191780821926], [1.62575048E12, 18.32584269662923], [1.62575039E12, 15.420634920634921], [1.62575088E12, 16.41414141414143], [1.62575105E12, 15.737373737373725], [1.62575079E12, 17.81818181818182], [1.62575062E12, 16.1090909090909], [1.62575045E12, 16.952380952380945], [1.62575028E12, 22.103448275862064], [1.62575096E12, 15.333333333333334], [1.62575113E12, 15.517857142857144], [1.62575087E12, 16.474747474747478], [1.6257507E12, 24.497487437185935], [1.62575053E12, 16.38071065989847], [1.62575036E12, 15.642857142857148], [1.62575106E12, 17.943877551020407], [1.62575089E12, 16.020100502512555], [1.62575072E12, 25.187817258883253], [1.62575063E12, 17.804597701149437], [1.62575046E12, 17.32743362831857], [1.62575029E12, 20.62162162162162], [1.62575114E12, 16.862068965517242], [1.62575097E12, 15.999999999999996], [1.6257508E12, 14.647058823529411], [1.62575071E12, 22.3989898989899], [1.62575054E12, 16.48469387755102], [1.62575037E12, 15.240641711229943]], "isOverall": false, "label": "Sunstar Home Japan", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575115E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.62575025E12, "maxY": 5177.0, "series": [{"data": [[1.62575043E12, 46.0], [1.62575026E12, 102.0], [1.62575094E12, 89.0], [1.62575111E12, 38.0], [1.62575077E12, 39.0], [1.6257506E12, 42.0], [1.62575051E12, 47.0], [1.62575034E12, 244.0], [1.62575102E12, 151.0], [1.62575085E12, 59.0], [1.62575068E12, 270.0], [1.62575027E12, 154.0], [1.62575104E12, 54.0], [1.62575095E12, 36.0], [1.62575078E12, 47.0], [1.62575061E12, 28.0], [1.62575044E12, 144.0], [1.62575035E12, 90.0], [1.62575112E12, 45.0], [1.62575086E12, 4959.0], [1.62575103E12, 122.0], [1.62575069E12, 131.0], [1.62575052E12, 67.0], [1.62575075E12, 116.0], [1.62575058E12, 117.0], [1.62575041E12, 180.0], [1.62575092E12, 48.0], [1.62575109E12, 64.0], [1.62575083E12, 43.0], [1.62575066E12, 82.0], [1.62575049E12, 122.0], [1.62575032E12, 198.0], [1.625751E12, 426.0], [1.62575059E12, 51.0], [1.62575042E12, 57.0], [1.62575025E12, 5177.0], [1.6257511E12, 53.0], [1.62575093E12, 34.0], [1.62575076E12, 426.0], [1.62575067E12, 212.0], [1.6257505E12, 91.0], [1.62575033E12, 365.0], [1.62575101E12, 104.0], [1.62575084E12, 40.0], [1.6257509E12, 61.0], [1.62575107E12, 38.0], [1.62575073E12, 361.0], [1.62575056E12, 170.0], [1.62575047E12, 145.0], [1.6257503E12, 243.0], [1.62575098E12, 51.0], [1.62575115E12, 34.0], [1.62575081E12, 73.0], [1.62575064E12, 58.0], [1.62575055E12, 95.0], [1.62575038E12, 154.0], [1.62575091E12, 66.0], [1.62575074E12, 141.0], [1.62575057E12, 103.0], [1.6257504E12, 359.0], [1.62575031E12, 90.0], [1.62575108E12, 38.0], [1.62575099E12, 54.0], [1.62575082E12, 95.0], [1.62575065E12, 134.0], [1.62575048E12, 215.0], [1.62575039E12, 65.0], [1.62575088E12, 38.0], [1.62575105E12, 71.0], [1.62575079E12, 46.0], [1.62575062E12, 45.0], [1.62575045E12, 94.0], [1.62575028E12, 153.0], [1.62575096E12, 28.0], [1.62575113E12, 36.0], [1.62575087E12, 80.0], [1.6257507E12, 257.0], [1.62575053E12, 66.0], [1.62575036E12, 285.0], [1.62575106E12, 60.0], [1.62575089E12, 70.0], [1.62575072E12, 649.0], [1.62575063E12, 92.0], [1.62575046E12, 122.0], [1.62575029E12, 218.0], [1.62575114E12, 36.0], [1.62575097E12, 70.0], [1.6257508E12, 86.0], [1.62575071E12, 190.0], [1.62575054E12, 126.0], [1.62575037E12, 136.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62575043E12, 10.0], [1.62575026E12, 17.0], [1.62575094E12, 13.0], [1.62575111E12, 13.0], [1.62575077E12, 10.0], [1.6257506E12, 14.0], [1.62575051E12, 13.0], [1.62575034E12, 10.0], [1.62575102E12, 9.0], [1.62575085E12, 13.0], [1.62575068E12, 9.0], [1.62575027E12, 13.0], [1.62575104E12, 13.0], [1.62575095E12, 13.0], [1.62575078E12, 10.0], [1.62575061E12, 14.0], [1.62575044E12, 10.0], [1.62575035E12, 9.0], [1.62575112E12, 13.0], [1.62575086E12, 13.0], [1.62575103E12, 10.0], [1.62575069E12, 9.0], [1.62575052E12, 13.0], [1.62575075E12, 20.0], [1.62575058E12, 11.0], [1.62575041E12, 10.0], [1.62575092E12, 13.0], [1.62575109E12, 13.0], [1.62575083E12, 13.0], [1.62575066E12, 10.0], [1.62575049E12, 10.0], [1.62575032E12, 9.0], [1.625751E12, 10.0], [1.62575059E12, 13.0], [1.62575042E12, 11.0], [1.62575025E12, 46.0], [1.6257511E12, 13.0], [1.62575093E12, 13.0], [1.62575076E12, 10.0], [1.62575067E12, 9.0], [1.6257505E12, 13.0], [1.62575033E12, 10.0], [1.62575101E12, 10.0], [1.62575084E12, 13.0], [1.6257509E12, 13.0], [1.62575107E12, 12.0], [1.62575073E12, 20.0], [1.62575056E12, 10.0], [1.62575047E12, 10.0], [1.6257503E12, 11.0], [1.62575098E12, 11.0], [1.62575115E12, 17.0], [1.62575081E12, 9.0], [1.62575064E12, 11.0], [1.62575055E12, 10.0], [1.62575038E12, 10.0], [1.62575091E12, 13.0], [1.62575074E12, 20.0], [1.62575057E12, 10.0], [1.6257504E12, 10.0], [1.62575031E12, 10.0], [1.62575108E12, 13.0], [1.62575099E12, 10.0], [1.62575082E12, 11.0], [1.62575065E12, 10.0], [1.62575048E12, 10.0], [1.62575039E12, 10.0], [1.62575088E12, 13.0], [1.62575105E12, 12.0], [1.62575079E12, 11.0], [1.62575062E12, 13.0], [1.62575045E12, 11.0], [1.62575028E12, 11.0], [1.62575096E12, 12.0], [1.62575113E12, 13.0], [1.62575087E12, 12.0], [1.6257507E12, 11.0], [1.62575053E12, 13.0], [1.62575036E12, 10.0], [1.62575106E12, 13.0], [1.62575089E12, 13.0], [1.62575072E12, 19.0], [1.62575063E12, 13.0], [1.62575046E12, 11.0], [1.62575029E12, 11.0], [1.62575114E12, 14.0], [1.62575097E12, 12.0], [1.6257508E12, 10.0], [1.62575071E12, 20.0], [1.62575054E12, 13.0], [1.62575037E12, 10.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62575043E12, 41.10000000000001], [1.62575026E12, 68.30000000000001], [1.62575094E12, 32.60000000000001], [1.62575111E12, 27.700000000000003], [1.62575077E12, 22.1], [1.6257506E12, 28.6], [1.62575051E12, 26.0], [1.62575034E12, 36.0], [1.62575102E12, 26.30000000000001], [1.62575085E12, 26.0], [1.62575068E12, 27.80000000000001], [1.62575027E12, 41.599999999999994], [1.62575104E12, 31.0], [1.62575095E12, 24.200000000000003], [1.62575078E12, 31.0], [1.62575061E12, 25.900000000000002], [1.62575044E12, 47.60000000000001], [1.62575035E12, 26.0], [1.62575112E12, 28.0], [1.62575086E12, 30.0], [1.62575103E12, 28.80000000000001], [1.62575069E12, 30.0], [1.62575052E12, 30.0], [1.62575075E12, 35.0], [1.62575058E12, 28.5], [1.62575041E12, 29.0], [1.62575092E12, 25.200000000000017], [1.62575109E12, 27.0], [1.62575083E12, 27.0], [1.62575066E12, 25.099999999999994], [1.62575049E12, 28.0], [1.62575032E12, 25.200000000000017], [1.625751E12, 34.400000000000006], [1.62575059E12, 25.0], [1.62575042E12, 38.70000000000003], [1.62575025E12, 5177.0], [1.6257511E12, 26.0], [1.62575093E12, 27.0], [1.62575076E12, 44.0], [1.62575067E12, 30.30000000000001], [1.6257505E12, 27.0], [1.62575033E12, 29.0], [1.62575101E12, 26.0], [1.62575084E12, 26.0], [1.6257509E12, 28.0], [1.62575107E12, 25.0], [1.62575073E12, 33.900000000000006], [1.62575056E12, 23.900000000000006], [1.62575047E12, 33.0], [1.6257503E12, 27.0], [1.62575098E12, 30.200000000000003], [1.62575115E12, 34.0], [1.62575081E12, 25.500000000000014], [1.62575064E12, 26.400000000000006], [1.62575055E12, 27.0], [1.62575038E12, 31.0], [1.62575091E12, 27.0], [1.62575074E12, 36.0], [1.62575057E12, 27.400000000000006], [1.6257504E12, 42.400000000000034], [1.62575031E12, 30.0], [1.62575108E12, 27.0], [1.62575099E12, 35.10000000000001], [1.62575082E12, 39.00000000000003], [1.62575065E12, 33.0], [1.62575048E12, 31.099999999999994], [1.62575039E12, 31.299999999999997], [1.62575088E12, 28.0], [1.62575105E12, 27.0], [1.62575079E12, 39.599999999999994], [1.62575062E12, 28.0], [1.62575045E12, 27.5], [1.62575028E12, 39.99999999999997], [1.62575096E12, 25.900000000000002], [1.62575113E12, 26.300000000000004], [1.62575087E12, 28.099999999999994], [1.6257507E12, 51.0], [1.62575053E12, 27.200000000000017], [1.62575036E12, 27.600000000000023], [1.62575106E12, 34.0], [1.62575089E12, 26.0], [1.62575072E12, 43.20000000000002], [1.62575063E12, 29.200000000000003], [1.62575046E12, 30.60000000000001], [1.62575029E12, 35.099999999999994], [1.62575114E12, 35.0], [1.62575097E12, 58.700000000000074], [1.6257508E12, 27.800000000000026], [1.62575071E12, 37.099999999999994], [1.62575054E12, 27.0], [1.62575037E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62575043E12, 46.0], [1.62575026E12, 102.0], [1.62575094E12, 89.0], [1.62575111E12, 37.30999999999999], [1.62575077E12, 39.0], [1.6257506E12, 42.0], [1.62575051E12, 39.07999999999993], [1.62575034E12, 108.0], [1.62575102E12, 139.44999999999985], [1.62575085E12, 59.0], [1.62575068E12, 141.2199999999996], [1.62575027E12, 154.0], [1.62575104E12, 46.16000000000008], [1.62575095E12, 36.0], [1.62575078E12, 47.0], [1.62575061E12, 28.0], [1.62575044E12, 144.0], [1.62575035E12, 50.0], [1.62575112E12, 45.0], [1.62575086E12, 4548.660000000013], [1.62575103E12, 79.91999999999996], [1.62575069E12, 61.69999999999936], [1.62575052E12, 53.28000000000014], [1.62575075E12, 106.25], [1.62575058E12, 117.0], [1.62575041E12, 180.0], [1.62575092E12, 42.77999999999989], [1.62575109E12, 56.16999999999996], [1.62575083E12, 40.30000000000007], [1.62575066E12, 71.7300000000001], [1.62575049E12, 109.26000000000013], [1.62575032E12, 177.42000000000021], [1.625751E12, 408.4000000000004], [1.62575059E12, 51.0], [1.62575042E12, 57.0], [1.62575025E12, 5177.0], [1.6257511E12, 48.869999999999976], [1.62575093E12, 34.0], [1.62575076E12, 426.0], [1.62575067E12, 102.39000000000013], [1.6257505E12, 61.60000000000031], [1.62575033E12, 96.4800000000028], [1.62575101E12, 74.59999999999945], [1.62575084E12, 37.72000000000003], [1.6257509E12, 46.149999999999864], [1.62575107E12, 34.08000000000004], [1.62575073E12, 109.84000000000094], [1.62575056E12, 98.6299999999984], [1.62575047E12, 134.0], [1.6257503E12, 136.13999999999984], [1.62575098E12, 51.0], [1.62575115E12, 34.0], [1.62575081E12, 73.0], [1.62575064E12, 56.83000000000004], [1.62575055E12, 88.03999999999996], [1.62575038E12, 120.93999999999929], [1.62575091E12, 41.36000000000013], [1.62575074E12, 103.80000000000035], [1.62575057E12, 102.21999999999998], [1.6257504E12, 359.0], [1.62575031E12, 75.75000000000017], [1.62575108E12, 37.0], [1.62575099E12, 54.0], [1.62575082E12, 94.68], [1.62575065E12, 106.74000000000007], [1.62575048E12, 136.0000000000008], [1.62575039E12, 63.380000000000024], [1.62575088E12, 36.01999999999998], [1.62575105E12, 45.25999999999976], [1.62575079E12, 46.0], [1.62575062E12, 45.0], [1.62575045E12, 94.0], [1.62575028E12, 148.74999999999994], [1.62575096E12, 28.0], [1.62575113E12, 36.0], [1.62575087E12, 60.19999999999982], [1.6257507E12, 123.0], [1.62575053E12, 35.62000000000032], [1.62575036E12, 131.74000000000018], [1.62575106E12, 46.420000000000016], [1.62575089E12, 46.0], [1.62575072E12, 161.94000000000509], [1.62575063E12, 92.0], [1.62575046E12, 113.73999999999997], [1.62575029E12, 168.9999999999991], [1.62575114E12, 36.0], [1.62575097E12, 70.0], [1.6257508E12, 86.0], [1.62575071E12, 181.08999999999992], [1.62575054E12, 37.7300000000001], [1.62575037E12, 82.32000000000028]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62575043E12, 46.0], [1.62575026E12, 78.25], [1.62575094E12, 41.0], [1.62575111E12, 29.849999999999994], [1.62575077E12, 26.449999999999974], [1.6257506E12, 35.699999999999974], [1.62575051E12, 29.0], [1.62575034E12, 46.0], [1.62575102E12, 49.05000000000004], [1.62575085E12, 28.0], [1.62575068E12, 51.29999999999984], [1.62575027E12, 75.24999999999979], [1.62575104E12, 33.0], [1.62575095E12, 27.599999999999966], [1.62575078E12, 43.0], [1.62575061E12, 28.0], [1.62575044E12, 67.09999999999992], [1.62575035E12, 34.0], [1.62575112E12, 33.0], [1.62575086E12, 65.00000000000011], [1.62575103E12, 38.59999999999991], [1.62575069E12, 38.099999999999966], [1.62575052E12, 37.0], [1.62575075E12, 52.75], [1.62575058E12, 31.75], [1.62575041E12, 64.39999999999995], [1.62575092E12, 27.0], [1.62575109E12, 32.0], [1.62575083E12, 30.75], [1.62575066E12, 35.04999999999998], [1.62575049E12, 34.19999999999999], [1.62575032E12, 39.89999999999995], [1.625751E12, 105.19999999999999], [1.62575059E12, 40.249999999999986], [1.62575042E12, 48.749999999999986], [1.62575025E12, 5177.0], [1.6257511E12, 29.14999999999995], [1.62575093E12, 28.799999999999997], [1.62575076E12, 57.25], [1.62575067E12, 44.299999999999955], [1.6257505E12, 30.0], [1.62575033E12, 35.19999999999999], [1.62575101E12, 31.099999999999966], [1.62575084E12, 27.0], [1.6257509E12, 34.0], [1.62575107E12, 28.099999999999994], [1.62575073E12, 41.44999999999999], [1.62575056E12, 32.799999999999955], [1.62575047E12, 38.5], [1.6257503E12, 33.19999999999999], [1.62575098E12, 34.599999999999994], [1.62575115E12, 34.0], [1.62575081E12, 33.69999999999999], [1.62575064E12, 33.69999999999999], [1.62575055E12, 34.0], [1.62575038E12, 49.0], [1.62575091E12, 28.0], [1.62575074E12, 39.0], [1.62575057E12, 52.49999999999983], [1.6257504E12, 63.550000000000054], [1.62575031E12, 42.25], [1.62575108E12, 30.0], [1.62575099E12, 39.05], [1.62575082E12, 61.0], [1.62575065E12, 43.95000000000002], [1.62575048E12, 48.099999999999966], [1.62575039E12, 44.64999999999999], [1.62575088E12, 30.0], [1.62575105E12, 34.0], [1.62575079E12, 45.39999999999999], [1.62575062E12, 31.799999999999983], [1.62575045E12, 38.75], [1.62575028E12, 85.19999999999993], [1.62575096E12, 28.0], [1.62575113E12, 28.299999999999997], [1.62575087E12, 33.0], [1.6257507E12, 70.0], [1.62575053E12, 30.0], [1.62575036E12, 41.299999999999955], [1.62575106E12, 39.0], [1.62575089E12, 30.0], [1.62575072E12, 54.39999999999998], [1.62575063E12, 35.599999999999994], [1.62575046E12, 42.19999999999999], [1.62575029E12, 58.449999999999676], [1.62575114E12, 36.0], [1.62575097E12, 69.6], [1.6257508E12, 31.799999999999997], [1.62575071E12, 45.04999999999998], [1.62575054E12, 29.149999999999977], [1.62575037E12, 38.19999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575115E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16.0, "minX": 1.0, "maxY": 21.0, "series": [{"data": [[2.0, 18.0], [8.0, 18.0], [9.0, 19.0], [10.0, 19.0], [11.0, 20.0], [3.0, 18.5], [12.0, 19.0], [13.0, 19.0], [14.0, 18.0], [15.0, 18.0], [1.0, 16.0], [4.0, 19.0], [16.0, 17.5], [17.0, 17.0], [18.0, 19.0], [19.0, 19.0], [20.0, 20.0], [5.0, 17.0], [21.0, 21.0], [22.0, 20.0], [6.0, 17.0], [7.0, 18.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14.0, "minX": 1.0, "maxY": 19.0, "series": [{"data": [[2.0, 17.0], [8.0, 17.0], [9.0, 18.0], [10.0, 18.5], [11.0, 19.0], [3.0, 18.0], [12.0, 18.0], [13.0, 18.0], [14.0, 17.0], [15.0, 17.0], [1.0, 14.0], [4.0, 18.0], [16.0, 17.0], [17.0, 16.0], [18.0, 18.0], [19.0, 18.0], [20.0, 18.0], [5.0, 17.0], [21.0, 19.0], [22.0, 18.0], [6.0, 17.0], [7.0, 17.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62575025E12, "maxY": 20.0, "series": [{"data": [[1.62575043E12, 1.7], [1.62575026E12, 4.6], [1.62575094E12, 9.2], [1.62575111E12, 12.2], [1.62575077E12, 5.8], [1.6257506E12, 3.3], [1.62575051E12, 19.8], [1.62575034E12, 19.9], [1.62575102E12, 17.7], [1.62575085E12, 18.2], [1.62575068E12, 19.9], [1.62575027E12, 8.6], [1.62575104E12, 19.8], [1.62575095E12, 5.7], [1.62575078E12, 2.9], [1.62575061E12, 1.8], [1.62575044E12, 5.2], [1.62575035E12, 19.9], [1.62575112E12, 9.2], [1.62575086E12, 13.8], [1.62575103E12, 20.0], [1.62575069E12, 19.8], [1.62575052E12, 19.7], [1.62575075E12, 12.6], [1.62575058E12, 9.4], [1.62575041E12, 6.1], [1.62575092E12, 15.6], [1.62575109E12, 18.6], [1.62575083E12, 14.4], [1.62575066E12, 17.8], [1.62575049E12, 19.7], [1.62575032E12, 19.5], [1.625751E12, 11.5], [1.62575059E12, 5.8], [1.62575042E12, 3.0], [1.62575025E12, 0.6], [1.6257511E12, 15.8], [1.62575093E12, 12.4], [1.62575076E12, 9.2], [1.62575067E12, 19.8], [1.6257505E12, 19.7], [1.62575033E12, 19.7], [1.62575101E12, 14.8], [1.62575084E12, 17.5], [1.6257509E12, 19.8], [1.62575107E12, 19.6], [1.62575073E12, 19.0], [1.62575056E12, 15.9], [1.62575047E12, 14.8], [1.6257503E12, 17.6], [1.62575098E12, 5.3], [1.62575115E12, 0.3], [1.62575081E12, 8.2], [1.62575064E12, 11.2], [1.62575055E12, 18.8], [1.62575038E12, 15.7], [1.62575091E12, 18.8], [1.62575074E12, 15.8], [1.62575057E12, 12.4], [1.6257504E12, 9.0], [1.62575031E12, 19.6], [1.62575108E12, 19.9], [1.62575099E12, 7.8], [1.62575082E12, 11.5], [1.62575065E12, 14.6], [1.62575048E12, 17.8], [1.62575039E12, 12.6], [1.62575088E12, 19.8], [1.62575105E12, 19.7], [1.62575079E12, 2.2], [1.62575062E12, 5.3], [1.62575045E12, 8.4], [1.62575028E12, 11.7], [1.62575096E12, 3.0], [1.62575113E12, 5.6], [1.62575087E12, 19.8], [1.6257507E12, 19.9], [1.62575053E12, 19.7], [1.62575036E12, 19.6], [1.62575106E12, 19.7], [1.62575089E12, 19.9], [1.62575072E12, 19.8], [1.62575063E12, 8.7], [1.62575046E12, 11.4], [1.62575029E12, 14.8], [1.62575114E12, 2.9], [1.62575097E12, 2.0], [1.6257508E12, 5.1], [1.62575071E12, 19.8], [1.62575054E12, 19.6], [1.62575037E12, 18.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575115E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62575025E12, "maxY": 20.1, "series": [{"data": [[1.62575043E12, 1.6], [1.62575026E12, 4.6], [1.62575094E12, 9.3], [1.62575111E12, 12.2], [1.62575077E12, 5.8], [1.6257506E12, 3.3], [1.62575051E12, 19.8], [1.62575034E12, 19.9], [1.62575102E12, 17.6], [1.62575085E12, 17.9], [1.62575068E12, 20.1], [1.62575027E12, 8.6], [1.62575104E12, 19.7], [1.62575095E12, 5.7], [1.62575078E12, 2.9], [1.62575061E12, 1.6], [1.62575044E12, 5.3], [1.62575035E12, 19.9], [1.62575112E12, 9.2], [1.62575086E12, 14.1], [1.62575103E12, 20.1], [1.62575069E12, 19.8], [1.62575052E12, 19.7], [1.62575075E12, 12.4], [1.62575058E12, 9.4], [1.62575041E12, 6.1], [1.62575092E12, 15.7], [1.62575109E12, 18.6], [1.62575083E12, 14.4], [1.62575066E12, 17.8], [1.62575049E12, 19.7], [1.62575032E12, 19.7], [1.625751E12, 11.5], [1.62575059E12, 5.8], [1.62575042E12, 3.0], [1.62575025E12, 0.6], [1.6257511E12, 15.8], [1.62575093E12, 12.3], [1.62575076E12, 9.4], [1.62575067E12, 19.6], [1.6257505E12, 19.7], [1.62575033E12, 19.7], [1.62575101E12, 14.8], [1.62575084E12, 17.5], [1.6257509E12, 19.8], [1.62575107E12, 19.7], [1.62575073E12, 19.0], [1.62575056E12, 16.0], [1.62575047E12, 14.9], [1.6257503E12, 17.7], [1.62575098E12, 5.3], [1.62575115E12, 0.3], [1.62575081E12, 8.2], [1.62575064E12, 11.2], [1.62575055E12, 18.6], [1.62575038E12, 15.7], [1.62575091E12, 18.7], [1.62575074E12, 15.9], [1.62575057E12, 12.5], [1.6257504E12, 9.0], [1.62575031E12, 19.4], [1.62575108E12, 19.9], [1.62575099E12, 7.8], [1.62575082E12, 11.5], [1.62575065E12, 14.6], [1.62575048E12, 17.8], [1.62575039E12, 12.6], [1.62575088E12, 19.8], [1.62575105E12, 19.8], [1.62575079E12, 2.2], [1.62575062E12, 5.5], [1.62575045E12, 8.4], [1.62575028E12, 11.6], [1.62575096E12, 3.0], [1.62575113E12, 5.6], [1.62575087E12, 19.8], [1.6257507E12, 19.9], [1.62575053E12, 19.7], [1.62575036E12, 19.6], [1.62575106E12, 19.6], [1.62575089E12, 19.9], [1.62575072E12, 19.7], [1.62575063E12, 8.7], [1.62575046E12, 11.3], [1.62575029E12, 14.8], [1.62575114E12, 2.9], [1.62575097E12, 2.0], [1.6257508E12, 5.1], [1.62575071E12, 19.8], [1.62575054E12, 19.6], [1.62575037E12, 18.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575115E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62575025E12, "maxY": 20.1, "series": [{"data": [[1.62575043E12, 1.6], [1.62575026E12, 4.6], [1.62575094E12, 9.3], [1.62575111E12, 12.2], [1.62575077E12, 5.8], [1.6257506E12, 3.3], [1.62575051E12, 19.8], [1.62575034E12, 19.9], [1.62575102E12, 17.6], [1.62575085E12, 17.9], [1.62575068E12, 20.1], [1.62575027E12, 8.6], [1.62575104E12, 19.7], [1.62575095E12, 5.7], [1.62575078E12, 2.9], [1.62575061E12, 1.6], [1.62575044E12, 5.3], [1.62575035E12, 19.9], [1.62575112E12, 9.2], [1.62575086E12, 14.1], [1.62575103E12, 20.1], [1.62575069E12, 19.8], [1.62575052E12, 19.7], [1.62575075E12, 12.4], [1.62575058E12, 9.4], [1.62575041E12, 6.1], [1.62575092E12, 15.7], [1.62575109E12, 18.6], [1.62575083E12, 14.4], [1.62575066E12, 17.8], [1.62575049E12, 19.7], [1.62575032E12, 19.7], [1.625751E12, 11.5], [1.62575059E12, 5.8], [1.62575042E12, 3.0], [1.62575025E12, 0.6], [1.6257511E12, 15.8], [1.62575093E12, 12.3], [1.62575076E12, 9.4], [1.62575067E12, 19.6], [1.6257505E12, 19.7], [1.62575033E12, 19.7], [1.62575101E12, 14.8], [1.62575084E12, 17.5], [1.6257509E12, 19.8], [1.62575107E12, 19.7], [1.62575073E12, 19.0], [1.62575056E12, 16.0], [1.62575047E12, 14.9], [1.6257503E12, 17.7], [1.62575098E12, 5.3], [1.62575115E12, 0.3], [1.62575081E12, 8.2], [1.62575064E12, 11.2], [1.62575055E12, 18.6], [1.62575038E12, 15.7], [1.62575091E12, 18.7], [1.62575074E12, 15.9], [1.62575057E12, 12.5], [1.6257504E12, 9.0], [1.62575031E12, 19.4], [1.62575108E12, 19.9], [1.62575099E12, 7.8], [1.62575082E12, 11.5], [1.62575065E12, 14.6], [1.62575048E12, 17.8], [1.62575039E12, 12.6], [1.62575088E12, 19.8], [1.62575105E12, 19.8], [1.62575079E12, 2.2], [1.62575062E12, 5.5], [1.62575045E12, 8.4], [1.62575028E12, 11.6], [1.62575096E12, 3.0], [1.62575113E12, 5.6], [1.62575087E12, 19.8], [1.6257507E12, 19.9], [1.62575053E12, 19.7], [1.62575036E12, 19.6], [1.62575106E12, 19.6], [1.62575089E12, 19.9], [1.62575072E12, 19.7], [1.62575063E12, 8.7], [1.62575046E12, 11.3], [1.62575029E12, 14.8], [1.62575114E12, 2.9], [1.62575097E12, 2.0], [1.6257508E12, 5.1], [1.62575071E12, 19.8], [1.62575054E12, 19.6], [1.62575037E12, 18.7]], "isOverall": false, "label": "Sunstar Home Japan-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575115E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62575025E12, "maxY": 20.1, "series": [{"data": [[1.62575043E12, 1.6], [1.62575026E12, 4.6], [1.62575094E12, 9.3], [1.62575111E12, 12.2], [1.62575077E12, 5.8], [1.6257506E12, 3.3], [1.62575051E12, 19.8], [1.62575034E12, 19.9], [1.62575102E12, 17.6], [1.62575085E12, 17.9], [1.62575068E12, 20.1], [1.62575027E12, 8.6], [1.62575104E12, 19.7], [1.62575095E12, 5.7], [1.62575078E12, 2.9], [1.62575061E12, 1.6], [1.62575044E12, 5.3], [1.62575035E12, 19.9], [1.62575112E12, 9.2], [1.62575086E12, 14.1], [1.62575103E12, 20.1], [1.62575069E12, 19.8], [1.62575052E12, 19.7], [1.62575075E12, 12.4], [1.62575058E12, 9.4], [1.62575041E12, 6.1], [1.62575092E12, 15.7], [1.62575109E12, 18.6], [1.62575083E12, 14.4], [1.62575066E12, 17.8], [1.62575049E12, 19.7], [1.62575032E12, 19.7], [1.625751E12, 11.5], [1.62575059E12, 5.8], [1.62575042E12, 3.0], [1.62575025E12, 0.6], [1.6257511E12, 15.8], [1.62575093E12, 12.3], [1.62575076E12, 9.4], [1.62575067E12, 19.6], [1.6257505E12, 19.7], [1.62575033E12, 19.7], [1.62575101E12, 14.8], [1.62575084E12, 17.5], [1.6257509E12, 19.8], [1.62575107E12, 19.7], [1.62575073E12, 19.0], [1.62575056E12, 16.0], [1.62575047E12, 14.9], [1.6257503E12, 17.7], [1.62575098E12, 5.3], [1.62575115E12, 0.3], [1.62575081E12, 8.2], [1.62575064E12, 11.2], [1.62575055E12, 18.6], [1.62575038E12, 15.7], [1.62575091E12, 18.7], [1.62575074E12, 15.9], [1.62575057E12, 12.5], [1.6257504E12, 9.0], [1.62575031E12, 19.4], [1.62575108E12, 19.9], [1.62575099E12, 7.8], [1.62575082E12, 11.5], [1.62575065E12, 14.6], [1.62575048E12, 17.8], [1.62575039E12, 12.6], [1.62575088E12, 19.8], [1.62575105E12, 19.8], [1.62575079E12, 2.2], [1.62575062E12, 5.5], [1.62575045E12, 8.4], [1.62575028E12, 11.6], [1.62575096E12, 3.0], [1.62575113E12, 5.6], [1.62575087E12, 19.8], [1.6257507E12, 19.9], [1.62575053E12, 19.7], [1.62575036E12, 19.6], [1.62575106E12, 19.6], [1.62575089E12, 19.9], [1.62575072E12, 19.7], [1.62575063E12, 8.7], [1.62575046E12, 11.3], [1.62575029E12, 14.8], [1.62575114E12, 2.9], [1.62575097E12, 2.0], [1.6257508E12, 5.1], [1.62575071E12, 19.8], [1.62575054E12, 19.6], [1.62575037E12, 18.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575115E12, "title": "Total Transactions Per Second"}},
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

