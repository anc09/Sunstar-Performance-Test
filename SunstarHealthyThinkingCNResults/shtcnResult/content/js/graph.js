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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 5443.0, "series": [{"data": [[0.0, 7.0], [0.1, 8.0], [0.2, 8.0], [0.3, 9.0], [0.4, 9.0], [0.5, 9.0], [0.6, 9.0], [0.7, 9.0], [0.8, 9.0], [0.9, 9.0], [1.0, 9.0], [1.1, 9.0], [1.2, 9.0], [1.3, 9.0], [1.4, 9.0], [1.5, 9.0], [1.6, 9.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 9.0], [2.6, 10.0], [2.7, 10.0], [2.8, 10.0], [2.9, 10.0], [3.0, 10.0], [3.1, 10.0], [3.2, 10.0], [3.3, 10.0], [3.4, 10.0], [3.5, 10.0], [3.6, 10.0], [3.7, 10.0], [3.8, 10.0], [3.9, 10.0], [4.0, 10.0], [4.1, 10.0], [4.2, 10.0], [4.3, 10.0], [4.4, 10.0], [4.5, 10.0], [4.6, 10.0], [4.7, 10.0], [4.8, 10.0], [4.9, 10.0], [5.0, 10.0], [5.1, 10.0], [5.2, 10.0], [5.3, 10.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 10.0], [6.2, 10.0], [6.3, 10.0], [6.4, 10.0], [6.5, 10.0], [6.6, 10.0], [6.7, 11.0], [6.8, 11.0], [6.9, 11.0], [7.0, 11.0], [7.1, 11.0], [7.2, 11.0], [7.3, 11.0], [7.4, 11.0], [7.5, 11.0], [7.6, 11.0], [7.7, 11.0], [7.8, 11.0], [7.9, 11.0], [8.0, 11.0], [8.1, 11.0], [8.2, 11.0], [8.3, 11.0], [8.4, 11.0], [8.5, 11.0], [8.6, 11.0], [8.7, 11.0], [8.8, 11.0], [8.9, 11.0], [9.0, 11.0], [9.1, 11.0], [9.2, 11.0], [9.3, 11.0], [9.4, 11.0], [9.5, 11.0], [9.6, 11.0], [9.7, 11.0], [9.8, 11.0], [9.9, 11.0], [10.0, 11.0], [10.1, 12.0], [10.2, 12.0], [10.3, 12.0], [10.4, 12.0], [10.5, 12.0], [10.6, 12.0], [10.7, 12.0], [10.8, 12.0], [10.9, 12.0], [11.0, 12.0], [11.1, 12.0], [11.2, 12.0], [11.3, 12.0], [11.4, 12.0], [11.5, 12.0], [11.6, 12.0], [11.7, 12.0], [11.8, 12.0], [11.9, 12.0], [12.0, 12.0], [12.1, 12.0], [12.2, 12.0], [12.3, 12.0], [12.4, 12.0], [12.5, 12.0], [12.6, 12.0], [12.7, 12.0], [12.8, 12.0], [12.9, 12.0], [13.0, 12.0], [13.1, 12.0], [13.2, 12.0], [13.3, 12.0], [13.4, 12.0], [13.5, 12.0], [13.6, 12.0], [13.7, 12.0], [13.8, 12.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 12.0], [14.7, 12.0], [14.8, 12.0], [14.9, 12.0], [15.0, 12.0], [15.1, 12.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 13.0], [15.8, 13.0], [15.9, 13.0], [16.0, 13.0], [16.1, 13.0], [16.2, 13.0], [16.3, 13.0], [16.4, 13.0], [16.5, 13.0], [16.6, 13.0], [16.7, 13.0], [16.8, 13.0], [16.9, 13.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 13.0], [17.6, 13.0], [17.7, 13.0], [17.8, 13.0], [17.9, 13.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 13.0], [19.7, 13.0], [19.8, 13.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 13.0], [22.0, 13.0], [22.1, 13.0], [22.2, 13.0], [22.3, 13.0], [22.4, 13.0], [22.5, 13.0], [22.6, 13.0], [22.7, 13.0], [22.8, 13.0], [22.9, 13.0], [23.0, 13.0], [23.1, 13.0], [23.2, 13.0], [23.3, 13.0], [23.4, 13.0], [23.5, 13.0], [23.6, 13.0], [23.7, 13.0], [23.8, 13.0], [23.9, 13.0], [24.0, 13.0], [24.1, 14.0], [24.2, 14.0], [24.3, 14.0], [24.4, 14.0], [24.5, 14.0], [24.6, 14.0], [24.7, 14.0], [24.8, 14.0], [24.9, 14.0], [25.0, 14.0], [25.1, 14.0], [25.2, 14.0], [25.3, 14.0], [25.4, 14.0], [25.5, 14.0], [25.6, 14.0], [25.7, 14.0], [25.8, 14.0], [25.9, 14.0], [26.0, 14.0], [26.1, 14.0], [26.2, 14.0], [26.3, 14.0], [26.4, 14.0], [26.5, 14.0], [26.6, 14.0], [26.7, 14.0], [26.8, 14.0], [26.9, 14.0], [27.0, 14.0], [27.1, 14.0], [27.2, 14.0], [27.3, 14.0], [27.4, 14.0], [27.5, 14.0], [27.6, 14.0], [27.7, 14.0], [27.8, 14.0], [27.9, 14.0], [28.0, 14.0], [28.1, 14.0], [28.2, 14.0], [28.3, 14.0], [28.4, 14.0], [28.5, 14.0], [28.6, 14.0], [28.7, 14.0], [28.8, 14.0], [28.9, 14.0], [29.0, 14.0], [29.1, 14.0], [29.2, 14.0], [29.3, 14.0], [29.4, 14.0], [29.5, 14.0], [29.6, 14.0], [29.7, 14.0], [29.8, 14.0], [29.9, 14.0], [30.0, 14.0], [30.1, 14.0], [30.2, 14.0], [30.3, 14.0], [30.4, 14.0], [30.5, 14.0], [30.6, 14.0], [30.7, 14.0], [30.8, 14.0], [30.9, 14.0], [31.0, 14.0], [31.1, 15.0], [31.2, 15.0], [31.3, 15.0], [31.4, 15.0], [31.5, 15.0], [31.6, 15.0], [31.7, 15.0], [31.8, 15.0], [31.9, 15.0], [32.0, 15.0], [32.1, 15.0], [32.2, 15.0], [32.3, 15.0], [32.4, 15.0], [32.5, 15.0], [32.6, 15.0], [32.7, 15.0], [32.8, 15.0], [32.9, 15.0], [33.0, 15.0], [33.1, 15.0], [33.2, 15.0], [33.3, 15.0], [33.4, 15.0], [33.5, 15.0], [33.6, 15.0], [33.7, 15.0], [33.8, 15.0], [33.9, 15.0], [34.0, 15.0], [34.1, 15.0], [34.2, 15.0], [34.3, 15.0], [34.4, 15.0], [34.5, 15.0], [34.6, 15.0], [34.7, 15.0], [34.8, 15.0], [34.9, 15.0], [35.0, 15.0], [35.1, 15.0], [35.2, 15.0], [35.3, 15.0], [35.4, 15.0], [35.5, 15.0], [35.6, 15.0], [35.7, 15.0], [35.8, 15.0], [35.9, 16.0], [36.0, 16.0], [36.1, 16.0], [36.2, 16.0], [36.3, 16.0], [36.4, 16.0], [36.5, 16.0], [36.6, 16.0], [36.7, 16.0], [36.8, 16.0], [36.9, 16.0], [37.0, 16.0], [37.1, 16.0], [37.2, 16.0], [37.3, 16.0], [37.4, 16.0], [37.5, 16.0], [37.6, 16.0], [37.7, 16.0], [37.8, 16.0], [37.9, 16.0], [38.0, 16.0], [38.1, 16.0], [38.2, 16.0], [38.3, 16.0], [38.4, 16.0], [38.5, 16.0], [38.6, 16.0], [38.7, 16.0], [38.8, 16.0], [38.9, 16.0], [39.0, 16.0], [39.1, 16.0], [39.2, 16.0], [39.3, 16.0], [39.4, 16.0], [39.5, 16.0], [39.6, 16.0], [39.7, 16.0], [39.8, 16.0], [39.9, 16.0], [40.0, 17.0], [40.1, 17.0], [40.2, 17.0], [40.3, 17.0], [40.4, 17.0], [40.5, 17.0], [40.6, 17.0], [40.7, 17.0], [40.8, 17.0], [40.9, 17.0], [41.0, 17.0], [41.1, 17.0], [41.2, 17.0], [41.3, 17.0], [41.4, 17.0], [41.5, 17.0], [41.6, 17.0], [41.7, 17.0], [41.8, 17.0], [41.9, 17.0], [42.0, 17.0], [42.1, 17.0], [42.2, 17.0], [42.3, 17.0], [42.4, 17.0], [42.5, 17.0], [42.6, 17.0], [42.7, 17.0], [42.8, 17.0], [42.9, 17.0], [43.0, 17.0], [43.1, 17.0], [43.2, 17.0], [43.3, 17.0], [43.4, 17.0], [43.5, 17.0], [43.6, 18.0], [43.7, 18.0], [43.8, 18.0], [43.9, 18.0], [44.0, 18.0], [44.1, 18.0], [44.2, 18.0], [44.3, 18.0], [44.4, 18.0], [44.5, 18.0], [44.6, 18.0], [44.7, 18.0], [44.8, 18.0], [44.9, 18.0], [45.0, 18.0], [45.1, 18.0], [45.2, 18.0], [45.3, 18.0], [45.4, 18.0], [45.5, 18.0], [45.6, 18.0], [45.7, 18.0], [45.8, 18.0], [45.9, 18.0], [46.0, 18.0], [46.1, 18.0], [46.2, 18.0], [46.3, 18.0], [46.4, 18.0], [46.5, 18.0], [46.6, 18.0], [46.7, 19.0], [46.8, 19.0], [46.9, 19.0], [47.0, 19.0], [47.1, 19.0], [47.2, 19.0], [47.3, 19.0], [47.4, 19.0], [47.5, 19.0], [47.6, 19.0], [47.7, 19.0], [47.8, 19.0], [47.9, 19.0], [48.0, 19.0], [48.1, 19.0], [48.2, 19.0], [48.3, 19.0], [48.4, 19.0], [48.5, 19.0], [48.6, 19.0], [48.7, 19.0], [48.8, 19.0], [48.9, 19.0], [49.0, 19.0], [49.1, 19.0], [49.2, 19.0], [49.3, 19.0], [49.4, 19.0], [49.5, 19.0], [49.6, 19.0], [49.7, 19.0], [49.8, 19.0], [49.9, 19.0], [50.0, 19.0], [50.1, 19.0], [50.2, 19.0], [50.3, 19.0], [50.4, 19.0], [50.5, 19.0], [50.6, 19.0], [50.7, 19.0], [50.8, 19.0], [50.9, 19.0], [51.0, 19.0], [51.1, 19.0], [51.2, 19.0], [51.3, 19.0], [51.4, 19.0], [51.5, 19.0], [51.6, 19.0], [51.7, 19.0], [51.8, 19.0], [51.9, 19.0], [52.0, 19.0], [52.1, 19.0], [52.2, 19.0], [52.3, 20.0], [52.4, 20.0], [52.5, 20.0], [52.6, 20.0], [52.7, 20.0], [52.8, 20.0], [52.9, 20.0], [53.0, 20.0], [53.1, 20.0], [53.2, 20.0], [53.3, 20.0], [53.4, 20.0], [53.5, 20.0], [53.6, 20.0], [53.7, 20.0], [53.8, 20.0], [53.9, 20.0], [54.0, 20.0], [54.1, 20.0], [54.2, 20.0], [54.3, 20.0], [54.4, 20.0], [54.5, 20.0], [54.6, 20.0], [54.7, 20.0], [54.8, 20.0], [54.9, 20.0], [55.0, 20.0], [55.1, 20.0], [55.2, 20.0], [55.3, 20.0], [55.4, 20.0], [55.5, 20.0], [55.6, 20.0], [55.7, 20.0], [55.8, 20.0], [55.9, 20.0], [56.0, 20.0], [56.1, 20.0], [56.2, 20.0], [56.3, 20.0], [56.4, 20.0], [56.5, 20.0], [56.6, 20.0], [56.7, 20.0], [56.8, 20.0], [56.9, 20.0], [57.0, 20.0], [57.1, 20.0], [57.2, 20.0], [57.3, 20.0], [57.4, 20.0], [57.5, 20.0], [57.6, 20.0], [57.7, 20.0], [57.8, 20.0], [57.9, 20.0], [58.0, 20.0], [58.1, 20.0], [58.2, 20.0], [58.3, 20.0], [58.4, 20.0], [58.5, 20.0], [58.6, 20.0], [58.7, 20.0], [58.8, 20.0], [58.9, 21.0], [59.0, 21.0], [59.1, 21.0], [59.2, 21.0], [59.3, 21.0], [59.4, 21.0], [59.5, 21.0], [59.6, 21.0], [59.7, 21.0], [59.8, 21.0], [59.9, 21.0], [60.0, 21.0], [60.1, 21.0], [60.2, 21.0], [60.3, 21.0], [60.4, 21.0], [60.5, 21.0], [60.6, 21.0], [60.7, 21.0], [60.8, 21.0], [60.9, 21.0], [61.0, 21.0], [61.1, 21.0], [61.2, 21.0], [61.3, 21.0], [61.4, 21.0], [61.5, 21.0], [61.6, 21.0], [61.7, 21.0], [61.8, 21.0], [61.9, 21.0], [62.0, 21.0], [62.1, 21.0], [62.2, 21.0], [62.3, 21.0], [62.4, 21.0], [62.5, 21.0], [62.6, 21.0], [62.7, 21.0], [62.8, 21.0], [62.9, 21.0], [63.0, 21.0], [63.1, 21.0], [63.2, 21.0], [63.3, 21.0], [63.4, 21.0], [63.5, 21.0], [63.6, 21.0], [63.7, 21.0], [63.8, 21.0], [63.9, 21.0], [64.0, 21.0], [64.1, 21.0], [64.2, 21.0], [64.3, 21.0], [64.4, 21.0], [64.5, 21.0], [64.6, 21.0], [64.7, 21.0], [64.8, 21.0], [64.9, 22.0], [65.0, 22.0], [65.1, 22.0], [65.2, 22.0], [65.3, 22.0], [65.4, 22.0], [65.5, 22.0], [65.6, 22.0], [65.7, 22.0], [65.8, 22.0], [65.9, 22.0], [66.0, 22.0], [66.1, 22.0], [66.2, 22.0], [66.3, 22.0], [66.4, 22.0], [66.5, 22.0], [66.6, 22.0], [66.7, 22.0], [66.8, 22.0], [66.9, 22.0], [67.0, 22.0], [67.1, 22.0], [67.2, 22.0], [67.3, 22.0], [67.4, 22.0], [67.5, 22.0], [67.6, 22.0], [67.7, 22.0], [67.8, 22.0], [67.9, 22.0], [68.0, 22.0], [68.1, 22.0], [68.2, 22.0], [68.3, 22.0], [68.4, 22.0], [68.5, 22.0], [68.6, 22.0], [68.7, 22.0], [68.8, 22.0], [68.9, 22.0], [69.0, 22.0], [69.1, 22.0], [69.2, 22.0], [69.3, 22.0], [69.4, 22.0], [69.5, 22.0], [69.6, 22.0], [69.7, 22.0], [69.8, 22.0], [69.9, 23.0], [70.0, 23.0], [70.1, 23.0], [70.2, 23.0], [70.3, 23.0], [70.4, 23.0], [70.5, 23.0], [70.6, 23.0], [70.7, 23.0], [70.8, 23.0], [70.9, 23.0], [71.0, 23.0], [71.1, 23.0], [71.2, 23.0], [71.3, 23.0], [71.4, 23.0], [71.5, 23.0], [71.6, 23.0], [71.7, 23.0], [71.8, 23.0], [71.9, 23.0], [72.0, 23.0], [72.1, 23.0], [72.2, 23.0], [72.3, 23.0], [72.4, 23.0], [72.5, 23.0], [72.6, 23.0], [72.7, 23.0], [72.8, 23.0], [72.9, 23.0], [73.0, 23.0], [73.1, 23.0], [73.2, 23.0], [73.3, 23.0], [73.4, 23.0], [73.5, 23.0], [73.6, 23.0], [73.7, 23.0], [73.8, 23.0], [73.9, 23.0], [74.0, 23.0], [74.1, 23.0], [74.2, 23.0], [74.3, 23.0], [74.4, 23.0], [74.5, 23.0], [74.6, 23.0], [74.7, 23.0], [74.8, 23.0], [74.9, 24.0], [75.0, 24.0], [75.1, 24.0], [75.2, 24.0], [75.3, 24.0], [75.4, 24.0], [75.5, 24.0], [75.6, 24.0], [75.7, 24.0], [75.8, 24.0], [75.9, 24.0], [76.0, 24.0], [76.1, 24.0], [76.2, 24.0], [76.3, 24.0], [76.4, 24.0], [76.5, 24.0], [76.6, 24.0], [76.7, 24.0], [76.8, 24.0], [76.9, 24.0], [77.0, 24.0], [77.1, 24.0], [77.2, 24.0], [77.3, 24.0], [77.4, 24.0], [77.5, 24.0], [77.6, 24.0], [77.7, 24.0], [77.8, 24.0], [77.9, 24.0], [78.0, 24.0], [78.1, 24.0], [78.2, 24.0], [78.3, 24.0], [78.4, 24.0], [78.5, 24.0], [78.6, 24.0], [78.7, 24.0], [78.8, 24.0], [78.9, 24.0], [79.0, 24.0], [79.1, 24.0], [79.2, 24.0], [79.3, 25.0], [79.4, 25.0], [79.5, 25.0], [79.6, 25.0], [79.7, 25.0], [79.8, 25.0], [79.9, 25.0], [80.0, 25.0], [80.1, 25.0], [80.2, 25.0], [80.3, 25.0], [80.4, 25.0], [80.5, 25.0], [80.6, 25.0], [80.7, 25.0], [80.8, 25.0], [80.9, 25.0], [81.0, 25.0], [81.1, 25.0], [81.2, 25.0], [81.3, 25.0], [81.4, 25.0], [81.5, 25.0], [81.6, 25.0], [81.7, 25.0], [81.8, 25.0], [81.9, 25.0], [82.0, 25.0], [82.1, 25.0], [82.2, 25.0], [82.3, 25.0], [82.4, 25.0], [82.5, 26.0], [82.6, 26.0], [82.7, 26.0], [82.8, 26.0], [82.9, 26.0], [83.0, 26.0], [83.1, 26.0], [83.2, 26.0], [83.3, 26.0], [83.4, 26.0], [83.5, 26.0], [83.6, 26.0], [83.7, 26.0], [83.8, 26.0], [83.9, 26.0], [84.0, 26.0], [84.1, 26.0], [84.2, 26.0], [84.3, 26.0], [84.4, 26.0], [84.5, 26.0], [84.6, 26.0], [84.7, 26.0], [84.8, 26.0], [84.9, 26.0], [85.0, 27.0], [85.1, 27.0], [85.2, 27.0], [85.3, 27.0], [85.4, 27.0], [85.5, 27.0], [85.6, 27.0], [85.7, 27.0], [85.8, 27.0], [85.9, 27.0], [86.0, 27.0], [86.1, 27.0], [86.2, 27.0], [86.3, 27.0], [86.4, 27.0], [86.5, 27.0], [86.6, 27.0], [86.7, 27.0], [86.8, 27.0], [86.9, 28.0], [87.0, 28.0], [87.1, 28.0], [87.2, 28.0], [87.3, 28.0], [87.4, 28.0], [87.5, 28.0], [87.6, 28.0], [87.7, 28.0], [87.8, 28.0], [87.9, 28.0], [88.0, 28.0], [88.1, 28.0], [88.2, 28.0], [88.3, 28.0], [88.4, 29.0], [88.5, 29.0], [88.6, 29.0], [88.7, 29.0], [88.8, 29.0], [88.9, 29.0], [89.0, 29.0], [89.1, 29.0], [89.2, 29.0], [89.3, 29.0], [89.4, 29.0], [89.5, 30.0], [89.6, 30.0], [89.7, 30.0], [89.8, 30.0], [89.9, 30.0], [90.0, 30.0], [90.1, 30.0], [90.2, 30.0], [90.3, 31.0], [90.4, 31.0], [90.5, 31.0], [90.6, 31.0], [90.7, 31.0], [90.8, 31.0], [90.9, 32.0], [91.0, 32.0], [91.1, 32.0], [91.2, 32.0], [91.3, 32.0], [91.4, 33.0], [91.5, 33.0], [91.6, 33.0], [91.7, 34.0], [91.8, 34.0], [91.9, 34.0], [92.0, 35.0], [92.1, 35.0], [92.2, 35.0], [92.3, 35.0], [92.4, 36.0], [92.5, 36.0], [92.6, 37.0], [92.7, 37.0], [92.8, 37.0], [92.9, 38.0], [93.0, 38.0], [93.1, 39.0], [93.2, 39.0], [93.3, 40.0], [93.4, 41.0], [93.5, 42.0], [93.6, 42.0], [93.7, 43.0], [93.8, 44.0], [93.9, 44.0], [94.0, 44.0], [94.1, 45.0], [94.2, 45.0], [94.3, 46.0], [94.4, 46.0], [94.5, 46.0], [94.6, 47.0], [94.7, 47.0], [94.8, 47.0], [94.9, 47.0], [95.0, 48.0], [95.1, 48.0], [95.2, 48.0], [95.3, 49.0], [95.4, 49.0], [95.5, 49.0], [95.6, 49.0], [95.7, 49.0], [95.8, 50.0], [95.9, 50.0], [96.0, 50.0], [96.1, 50.0], [96.2, 50.0], [96.3, 51.0], [96.4, 51.0], [96.5, 51.0], [96.6, 51.0], [96.7, 52.0], [96.8, 52.0], [96.9, 52.0], [97.0, 52.0], [97.1, 53.0], [97.2, 53.0], [97.3, 53.0], [97.4, 53.0], [97.5, 54.0], [97.6, 54.0], [97.7, 54.0], [97.8, 55.0], [97.9, 55.0], [98.0, 55.0], [98.1, 56.0], [98.2, 56.0], [98.3, 57.0], [98.4, 58.0], [98.5, 58.0], [98.6, 59.0], [98.7, 60.0], [98.8, 61.0], [98.9, 62.0], [99.0, 63.0], [99.1, 65.0], [99.2, 66.0], [99.3, 68.0], [99.4, 72.0], [99.5, 78.0], [99.6, 84.0], [99.7, 95.0], [99.8, 123.0], [99.9, 153.0], [100.0, 5443.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 11987.0, "series": [{"data": [[0.0, 11987.0], [300.0, 1.0], [5000.0, 1.0], [5300.0, 2.0], [5400.0, 1.0], [100.0, 27.0], [3200.0, 1.0], [3500.0, 1.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12015.0, "series": [{"data": [[0.0, 12015.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.75, "minX": 1.62575325E12, "maxY": 3.666666666666667, "series": [{"data": [[1.62575376E12, 3.0], [1.62575393E12, 3.0], [1.6257541E12, 3.0], [1.62575333E12, 3.0], [1.6257535E12, 3.0], [1.62575367E12, 3.0], [1.62575384E12, 3.0], [1.62575401E12, 3.0], [1.62575341E12, 3.0], [1.62575358E12, 3.0], [1.62575375E12, 3.0], [1.6257536E12, 3.0], [1.62575377E12, 3.0], [1.62575394E12, 3.0], [1.62575411E12, 3.0], [1.62575334E12, 3.0], [1.62575351E12, 3.0], [1.62575368E12, 3.0], [1.62575385E12, 3.0], [1.62575402E12, 3.0], [1.62575325E12, 3.666666666666667], [1.62575342E12, 3.0], [1.62575359E12, 3.0], [1.62575408E12, 3.0], [1.62575331E12, 3.0], [1.62575348E12, 3.0], [1.62575365E12, 3.0], [1.62575382E12, 3.0], [1.62575399E12, 3.0], [1.62575339E12, 3.0], [1.62575356E12, 3.0], [1.62575373E12, 3.0], [1.6257539E12, 3.0], [1.62575407E12, 3.0], [1.62575392E12, 3.0], [1.62575409E12, 3.0], [1.62575332E12, 3.0], [1.62575349E12, 3.0], [1.62575366E12, 3.0], [1.62575383E12, 3.0], [1.625754E12, 3.0], [1.6257534E12, 3.0], [1.62575357E12, 3.0], [1.62575374E12, 3.0], [1.62575391E12, 3.0], [1.62575329E12, 3.0], [1.62575346E12, 3.0], [1.62575363E12, 3.0], [1.6257538E12, 3.0], [1.62575397E12, 3.0], [1.62575414E12, 3.0], [1.62575337E12, 3.0], [1.62575354E12, 3.0], [1.62575371E12, 3.0], [1.62575388E12, 3.0], [1.62575405E12, 3.0], [1.6257533E12, 3.0], [1.62575347E12, 3.0], [1.62575364E12, 3.0], [1.62575381E12, 3.0], [1.62575398E12, 3.0], [1.62575415E12, 2.75], [1.62575338E12, 3.0], [1.62575355E12, 3.0], [1.62575372E12, 3.0], [1.62575389E12, 3.0], [1.62575406E12, 3.0], [1.62575344E12, 3.0], [1.62575361E12, 3.0], [1.62575378E12, 3.0], [1.62575395E12, 3.0], [1.62575412E12, 3.0], [1.62575335E12, 3.0], [1.62575352E12, 3.0], [1.62575369E12, 3.0], [1.62575386E12, 3.301886792452831], [1.62575403E12, 3.0], [1.62575326E12, 2.8214285714285707], [1.62575343E12, 3.0], [1.62575328E12, 3.0], [1.62575345E12, 3.0], [1.62575362E12, 3.0], [1.62575379E12, 3.0], [1.62575396E12, 3.0], [1.62575413E12, 3.0], [1.62575336E12, 3.0], [1.62575353E12, 3.0], [1.6257537E12, 3.0], [1.62575387E12, 3.0], [1.62575404E12, 3.0], [1.62575327E12, 3.0]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575415E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.0, "maxY": 5034.0, "series": [{"data": [[8.0, 136.0], [4.0, 39.5], [2.0, 39.25], [1.0, 29.500000000000004], [9.0, 5034.0], [10.0, 3582.0], [5.0, 16.0], [6.0, 25.941176470588236], [3.0, 22.296219013437938], [7.0, 3244.0]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}, {"data": [[3.0040761999833525, 23.30704600282837]], "isOverall": false, "label": "Healthy Thinking CN-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 91.2, "minX": 1.62575325E12, "maxY": 935019.8, "series": [{"data": [[1.62575376E12, 409367.2], [1.62575393E12, 539608.8], [1.6257541E12, 721044.5], [1.62575333E12, 921056.4], [1.6257535E12, 916424.3], [1.62575367E12, 916424.3], [1.62575384E12, 851297.7], [1.62575401E12, 693133.1], [1.62575341E12, 251202.6], [1.62575358E12, 418671.0], [1.62575375E12, 567531.8], [1.6257536E12, 125601.3], [1.62575377E12, 269810.2], [1.62575394E12, 427965.6], [1.62575411E12, 562879.9], [1.62575334E12, 921056.4], [1.62575351E12, 916424.3], [1.62575368E12, 930380.0], [1.62575385E12, 641966.0], [1.62575402E12, 832690.1], [1.62575325E12, 83742.2], [1.62575342E12, 116297.5], [1.62575359E12, 274462.1], [1.62575408E12, 911772.4], [1.62575331E12, 907113.5], [1.62575348E12, 818734.4], [1.62575365E12, 697785.0], [1.62575382E12, 553576.1], [1.62575399E12, 404715.3], [1.62575339E12, 548924.2], [1.62575356E12, 716392.6], [1.62575373E12, 860601.5], [1.6257539E12, 921056.4], [1.62575407E12, 916424.3], [1.62575392E12, 707074.3], [1.62575409E12, 860614.0], [1.62575332E12, 921057.1], [1.62575349E12, 911772.4], [1.62575366E12, 828038.2], [1.62575383E12, 697785.0], [1.625754E12, 548924.2], [1.6257534E12, 414019.1], [1.62575357E12, 548924.2], [1.62575374E12, 707088.8], [1.62575391E12, 865249.1], [1.62575329E12, 702421.8], [1.62575346E12, 553576.1], [1.62575363E12, 404715.3], [1.6257538E12, 251202.6], [1.62575397E12, 102341.8], [1.62575414E12, 116297.5], [1.62575337E12, 855967.7], [1.62575354E12, 916424.3], [1.62575371E12, 907120.5], [1.62575388E12, 921056.4], [1.62575405E12, 902468.6], [1.6257533E12, 846627.6], [1.62575347E12, 697785.0], [1.62575364E12, 544272.3], [1.62575381E12, 390759.6], [1.62575398E12, 246550.7], [1.62575415E12, 18607.6], [1.62575338E12, 707090.2], [1.62575355E12, 851297.7], [1.62575372E12, 921076.2], [1.62575389E12, 911752.8], [1.62575406E12, 911772.4], [1.62575344E12, 246550.7], [1.62575361E12, 88386.1], [1.62575378E12, 120949.4], [1.62575395E12, 274456.2], [1.62575412E12, 423322.9], [1.62575335E12, 935019.8], [1.62575352E12, 921076.2], [1.62575369E12, 916424.3], [1.62575386E12, 739620.5], [1.62575403E12, 921076.2], [1.62575326E12, 260507.7], [1.62575343E12, 111645.6], [1.62575328E12, 548913.1], [1.62575345E12, 404715.3], [1.62575362E12, 260506.4], [1.62575379E12, 111645.6], [1.62575396E12, 130252.5], [1.62575413E12, 251202.6], [1.62575336E12, 925728.1], [1.62575353E12, 921076.2], [1.6257537E12, 921076.2], [1.62575387E12, 911748.8], [1.62575404E12, 921076.2], [1.62575327E12, 395406.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62575376E12, 2006.4], [1.62575393E12, 2644.8], [1.6257541E12, 3534.0], [1.62575333E12, 4514.4], [1.6257535E12, 4491.6], [1.62575367E12, 4491.6], [1.62575384E12, 4172.4], [1.62575401E12, 3397.2], [1.62575341E12, 1231.2], [1.62575358E12, 2052.0], [1.62575375E12, 2781.6], [1.6257536E12, 615.6], [1.62575377E12, 1322.4], [1.62575394E12, 2097.6], [1.62575411E12, 2758.8], [1.62575334E12, 4514.4], [1.62575351E12, 4491.6], [1.62575368E12, 4560.0], [1.62575385E12, 3146.4], [1.62575402E12, 4081.2], [1.62575325E12, 410.4], [1.62575342E12, 570.0], [1.62575359E12, 1345.2], [1.62575408E12, 4468.8], [1.62575331E12, 4446.0], [1.62575348E12, 4012.8], [1.62575365E12, 3420.0], [1.62575382E12, 2713.2], [1.62575399E12, 1983.6], [1.62575339E12, 2690.4], [1.62575356E12, 3511.2], [1.62575373E12, 4218.0], [1.6257539E12, 4514.4], [1.62575407E12, 4491.6], [1.62575392E12, 3465.6], [1.62575409E12, 4218.0], [1.62575332E12, 4514.4], [1.62575349E12, 4468.8], [1.62575366E12, 4058.4], [1.62575383E12, 3420.0], [1.625754E12, 2690.4], [1.6257534E12, 2029.2], [1.62575357E12, 2690.4], [1.62575374E12, 3465.6], [1.62575391E12, 4240.8], [1.62575329E12, 3442.8], [1.62575346E12, 2713.2], [1.62575363E12, 1983.6], [1.6257538E12, 1231.2], [1.62575397E12, 501.6], [1.62575414E12, 570.0], [1.62575337E12, 4195.2], [1.62575354E12, 4491.6], [1.62575371E12, 4446.0], [1.62575388E12, 4514.4], [1.62575405E12, 4423.2], [1.6257533E12, 4149.6], [1.62575347E12, 3420.0], [1.62575364E12, 2667.6], [1.62575381E12, 1915.2], [1.62575398E12, 1208.4], [1.62575415E12, 91.2], [1.62575338E12, 3465.6], [1.62575355E12, 4172.4], [1.62575372E12, 4514.4], [1.62575389E12, 4468.8], [1.62575406E12, 4468.8], [1.62575344E12, 1208.4], [1.62575361E12, 433.2], [1.62575378E12, 592.8], [1.62575395E12, 1345.2], [1.62575412E12, 2074.8], [1.62575335E12, 4582.8], [1.62575352E12, 4514.4], [1.62575369E12, 4491.6], [1.62575386E12, 3625.2], [1.62575403E12, 4514.4], [1.62575326E12, 1276.8], [1.62575343E12, 547.2], [1.62575328E12, 2690.4], [1.62575345E12, 1983.6], [1.62575362E12, 1276.8], [1.62575379E12, 547.2], [1.62575396E12, 638.4], [1.62575413E12, 1231.2], [1.62575336E12, 4537.2], [1.62575353E12, 4514.4], [1.6257537E12, 4514.4], [1.62575387E12, 4468.8], [1.62575404E12, 4514.4], [1.62575327E12, 1938.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575415E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 13.142857142857142, "minX": 1.62575325E12, "maxY": 695.6111111111112, "series": [{"data": [[1.62575376E12, 25.136363636363626], [1.62575393E12, 14.344827586206893], [1.6257541E12, 55.31612903225805], [1.62575333E12, 24.898989898989907], [1.6257535E12, 19.492385786802043], [1.62575367E12, 14.670050761421319], [1.62575384E12, 23.62841530054646], [1.62575401E12, 17.825503355704708], [1.62575341E12, 18.388888888888893], [1.62575358E12, 20.06666666666666], [1.62575375E12, 24.032786885245898], [1.6257536E12, 21.037037037037035], [1.62575377E12, 23.517241379310345], [1.62575394E12, 15.282608695652172], [1.62575411E12, 53.55371900826445], [1.62575334E12, 24.808080808080803], [1.62575351E12, 20.162436548223347], [1.62575368E12, 16.005000000000006], [1.62575385E12, 21.89855072463768], [1.62575402E12, 18.776536312849156], [1.62575325E12, 695.6111111111112], [1.62575342E12, 14.64], [1.62575359E12, 19.271186440677965], [1.62575408E12, 13.551020408163268], [1.62575331E12, 24.892307692307686], [1.62575348E12, 20.93181818181817], [1.62575365E12, 15.319999999999999], [1.62575382E12, 25.378151260504207], [1.62575399E12, 18.528735632183913], [1.62575339E12, 15.847457627118642], [1.62575356E12, 19.45454545454545], [1.62575373E12, 22.52432432432432], [1.6257539E12, 18.8030303030303], [1.62575407E12, 13.48223350253807], [1.62575392E12, 14.138157894736844], [1.62575409E12, 42.31891891891893], [1.62575332E12, 25.429292929292927], [1.62575349E12, 19.99489795918367], [1.62575366E12, 15.185393258426968], [1.62575383E12, 26.01333333333333], [1.625754E12, 20.245762711864394], [1.6257534E12, 19.15730337078652], [1.62575357E12, 18.59322033898306], [1.62575374E12, 23.97368421052631], [1.62575391E12, 16.327956989247305], [1.62575329E12, 22.437086092715237], [1.62575346E12, 21.546218487394967], [1.62575363E12, 15.781609195402297], [1.6257538E12, 24.462962962962965], [1.62575397E12, 20.363636363636367], [1.62575414E12, 50.16], [1.62575337E12, 15.570652173913045], [1.62575354E12, 19.802030456852815], [1.62575371E12, 14.93846153846154], [1.62575388E12, 20.095959595959606], [1.62575405E12, 14.4020618556701], [1.6257533E12, 20.329670329670343], [1.62575347E12, 19.546666666666674], [1.62575364E12, 14.871794871794872], [1.62575381E12, 24.714285714285722], [1.62575398E12, 19.50943396226415], [1.62575415E12, 54.5], [1.62575338E12, 15.809210526315786], [1.62575355E12, 19.371584699453546], [1.62575372E12, 16.702020202020197], [1.62575389E12, 17.999999999999996], [1.62575406E12, 14.882653061224495], [1.62575344E12, 18.754716981132077], [1.62575361E12, 15.578947368421053], [1.62575378E12, 23.846153846153854], [1.62575395E12, 14.0], [1.62575412E12, 53.395604395604416], [1.62575335E12, 24.40796019900498], [1.62575352E12, 19.595959595959588], [1.62575369E12, 15.604060913705581], [1.62575386E12, 121.18867924528304], [1.62575403E12, 16.095959595959584], [1.62575326E12, 28.767857142857142], [1.62575343E12, 21.333333333333332], [1.62575328E12, 24.711864406779668], [1.62575345E12, 20.275862068965523], [1.62575362E12, 18.446428571428573], [1.62575379E12, 24.750000000000004], [1.62575396E12, 13.142857142857142], [1.62575413E12, 52.74074074074075], [1.62575336E12, 25.407035175879397], [1.62575353E12, 19.434343434343422], [1.6257537E12, 18.36868686868687], [1.62575387E12, 18.53571428571429], [1.62575404E12, 14.136363636363635], [1.62575327E12, 26.717647058823534]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575415E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 12.964285714285715, "minX": 1.62575325E12, "maxY": 656.111111111111, "series": [{"data": [[1.62575376E12, 22.874999999999996], [1.62575393E12, 14.103448275862066], [1.6257541E12, 47.92258064516128], [1.62575333E12, 22.49494949494951], [1.6257535E12, 17.908629441624363], [1.62575367E12, 14.456852791878177], [1.62575384E12, 21.338797814207645], [1.62575401E12, 16.382550335570468], [1.62575341E12, 17.88888888888889], [1.62575358E12, 18.511111111111116], [1.62575375E12, 21.565573770491802], [1.6257536E12, 19.703703703703706], [1.62575377E12, 21.241379310344833], [1.62575394E12, 14.934782608695652], [1.62575411E12, 46.0578512396694], [1.62575334E12, 22.565656565656592], [1.62575351E12, 18.527918781725894], [1.62575368E12, 15.64], [1.62575385E12, 20.137681159420303], [1.62575402E12, 17.26256983240224], [1.62575325E12, 656.111111111111], [1.62575342E12, 14.399999999999999], [1.62575359E12, 17.847457627118644], [1.62575408E12, 13.29591836734693], [1.62575331E12, 22.676923076923085], [1.62575348E12, 19.420454545454554], [1.62575365E12, 15.013333333333334], [1.62575382E12, 23.01680672268908], [1.62575399E12, 17.034482758620683], [1.62575339E12, 15.440677966101694], [1.62575356E12, 17.772727272727284], [1.62575373E12, 20.713513513513522], [1.6257539E12, 17.141414141414135], [1.62575407E12, 13.101522842639584], [1.62575392E12, 13.901315789473683], [1.62575409E12, 37.30270270270272], [1.62575332E12, 23.19696969696971], [1.62575349E12, 18.4642857142857], [1.62575366E12, 14.837078651685395], [1.62575383E12, 23.720000000000002], [1.625754E12, 18.720338983050848], [1.6257534E12, 18.808988764044948], [1.62575357E12, 17.237288135593236], [1.62575374E12, 21.73684210526315], [1.62575391E12, 15.5752688172043], [1.62575329E12, 21.119205298013238], [1.62575346E12, 19.88235294117647], [1.62575363E12, 15.540229885057473], [1.6257538E12, 22.055555555555557], [1.62575397E12, 18.90909090909091], [1.62575414E12, 42.92000000000001], [1.62575337E12, 15.16304347826086], [1.62575354E12, 18.360406091370574], [1.62575371E12, 14.71282051282051], [1.62575388E12, 18.570707070707073], [1.62575405E12, 14.06701030927835], [1.6257533E12, 18.890109890109898], [1.62575347E12, 18.080000000000002], [1.62575364E12, 14.56410256410256], [1.62575381E12, 22.392857142857142], [1.62575398E12, 17.698113207547173], [1.62575415E12, 47.25], [1.62575338E12, 15.526315789473681], [1.62575355E12, 17.879781420765024], [1.62575372E12, 16.338383838383844], [1.62575389E12, 16.459183673469383], [1.62575406E12, 14.627551020408163], [1.62575344E12, 17.094339622641513], [1.62575361E12, 15.31578947368421], [1.62575378E12, 21.42307692307692], [1.62575395E12, 13.711864406779664], [1.62575412E12, 46.01098901098899], [1.62575335E12, 22.169154228855717], [1.62575352E12, 18.191919191919194], [1.62575369E12, 15.329949238578678], [1.62575386E12, 116.70440251572327], [1.62575403E12, 15.338383838383834], [1.62575326E12, 26.892857142857142], [1.62575343E12, 20.04166666666666], [1.62575328E12, 22.999999999999996], [1.62575345E12, 18.632183908045977], [1.62575362E12, 18.14285714285714], [1.62575379E12, 22.458333333333336], [1.62575396E12, 12.964285714285715], [1.62575413E12, 45.3148148148148], [1.62575336E12, 22.914572864321606], [1.62575353E12, 17.873737373737363], [1.6257537E12, 17.984848484848488], [1.62575387E12, 17.025510204081634], [1.62575404E12, 13.853535353535356], [1.62575327E12, 25.211764705882352]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575415E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 11.106598984771573, "minX": 1.62575325E12, "maxY": 50.11111111111111, "series": [{"data": [[1.62575376E12, 18.45454545454546], [1.62575393E12, 12.068965517241377], [1.6257541E12, 36.79354838709678], [1.62575333E12, 18.217171717171713], [1.6257535E12, 14.939086294416233], [1.62575367E12, 12.19796954314721], [1.62575384E12, 16.961748633879772], [1.62575401E12, 13.677852348993282], [1.62575341E12, 15.074074074074074], [1.62575358E12, 15.533333333333337], [1.62575375E12, 17.614754098360653], [1.6257536E12, 16.88888888888889], [1.62575377E12, 17.258620689655178], [1.62575394E12, 12.978260869565217], [1.62575411E12, 34.942148760330596], [1.62575334E12, 18.171717171717184], [1.62575351E12, 15.629441624365489], [1.62575368E12, 12.95], [1.62575385E12, 15.927536231884057], [1.62575402E12, 14.413407821229058], [1.62575325E12, 50.11111111111111], [1.62575342E12, 12.48], [1.62575359E12, 15.000000000000004], [1.62575408E12, 11.545918367346934], [1.62575331E12, 17.712820512820514], [1.62575348E12, 16.607954545454536], [1.62575365E12, 12.599999999999994], [1.62575382E12, 18.630252100840334], [1.62575399E12, 14.35632183908046], [1.62575339E12, 12.932203389830507], [1.62575356E12, 14.863636363636367], [1.62575373E12, 16.24864864864865], [1.6257539E12, 14.363636363636369], [1.62575407E12, 11.106598984771573], [1.62575392E12, 11.500000000000002], [1.62575409E12, 27.789189189189184], [1.62575332E12, 18.732323232323235], [1.62575349E12, 15.576530612244902], [1.62575366E12, 12.803370786516862], [1.62575383E12, 19.02666666666667], [1.625754E12, 15.737288135593223], [1.6257534E12, 16.0], [1.62575357E12, 14.186440677966102], [1.62575374E12, 17.500000000000007], [1.62575391E12, 11.795698924731186], [1.62575329E12, 17.6158940397351], [1.62575346E12, 16.605042016806728], [1.62575363E12, 12.678160919540232], [1.6257538E12, 17.796296296296294], [1.62575397E12, 15.81818181818182], [1.62575414E12, 32.480000000000004], [1.62575337E12, 12.195652173913047], [1.62575354E12, 15.512690355329951], [1.62575371E12, 12.538461538461535], [1.62575388E12, 15.616161616161614], [1.62575405E12, 11.819587628865978], [1.6257533E12, 15.95054945054945], [1.62575347E12, 15.146666666666667], [1.62575364E12, 12.709401709401707], [1.62575381E12, 18.71428571428571], [1.62575398E12, 14.69811320754717], [1.62575415E12, 36.0], [1.62575338E12, 12.901315789473681], [1.62575355E12, 14.978142076502731], [1.62575372E12, 14.267676767676768], [1.62575389E12, 13.795918367346939], [1.62575406E12, 12.321428571428575], [1.62575344E12, 14.301886792452832], [1.62575361E12, 11.31578947368421], [1.62575378E12, 16.846153846153843], [1.62575395E12, 11.186440677966102], [1.62575412E12, 34.76923076923079], [1.62575335E12, 17.676616915422883], [1.62575352E12, 15.136363636363638], [1.62575369E12, 13.106598984771576], [1.62575386E12, 14.402515723270431], [1.62575403E12, 12.89898989898989], [1.62575326E12, 22.142857142857146], [1.62575343E12, 17.125], [1.62575328E12, 19.440677966101703], [1.62575345E12, 15.436781609195405], [1.62575362E12, 15.339285714285714], [1.62575379E12, 18.125000000000004], [1.62575396E12, 11.249999999999998], [1.62575413E12, 35.05555555555556], [1.62575336E12, 18.1859296482412], [1.62575353E12, 15.075757575757578], [1.6257537E12, 14.86868686868686], [1.62575387E12, 14.352040816326534], [1.62575404E12, 11.54545454545455], [1.62575327E12, 20.588235294117638]], "isOverall": false, "label": "Healthy Thinking CN", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575415E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.62575325E12, "maxY": 5443.0, "series": [{"data": [[1.62575376E12, 73.0], [1.62575393E12, 146.0], [1.6257541E12, 168.0], [1.62575333E12, 105.0], [1.6257535E12, 65.0], [1.62575367E12, 55.0], [1.62575384E12, 78.0], [1.62575401E12, 36.0], [1.62575341E12, 98.0], [1.62575358E12, 37.0], [1.62575375E12, 55.0], [1.6257536E12, 55.0], [1.62575377E12, 31.0], [1.62575394E12, 78.0], [1.62575411E12, 146.0], [1.62575334E12, 64.0], [1.62575351E12, 40.0], [1.62575368E12, 124.0], [1.62575385E12, 141.0], [1.62575402E12, 32.0], [1.62575325E12, 5034.0], [1.62575342E12, 27.0], [1.62575359E12, 28.0], [1.62575408E12, 42.0], [1.62575331E12, 53.0], [1.62575348E12, 89.0], [1.62575365E12, 143.0], [1.62575382E12, 70.0], [1.62575399E12, 30.0], [1.62575339E12, 68.0], [1.62575356E12, 39.0], [1.62575373E12, 65.0], [1.6257539E12, 40.0], [1.62575407E12, 91.0], [1.62575392E12, 92.0], [1.62575409E12, 160.0], [1.62575332E12, 57.0], [1.62575349E12, 37.0], [1.62575366E12, 78.0], [1.62575383E12, 314.0], [1.625754E12, 52.0], [1.6257534E12, 62.0], [1.62575357E12, 35.0], [1.62575374E12, 61.0], [1.62575391E12, 78.0], [1.62575329E12, 58.0], [1.62575346E12, 44.0], [1.62575363E12, 65.0], [1.6257538E12, 48.0], [1.62575397E12, 46.0], [1.62575414E12, 65.0], [1.62575337E12, 68.0], [1.62575354E12, 42.0], [1.62575371E12, 51.0], [1.62575388E12, 43.0], [1.62575405E12, 153.0], [1.6257533E12, 186.0], [1.62575347E12, 41.0], [1.62575364E12, 52.0], [1.62575381E12, 53.0], [1.62575398E12, 34.0], [1.62575415E12, 59.0], [1.62575338E12, 63.0], [1.62575355E12, 66.0], [1.62575372E12, 180.0], [1.62575389E12, 34.0], [1.62575406E12, 119.0], [1.62575344E12, 29.0], [1.62575361E12, 25.0], [1.62575378E12, 40.0], [1.62575395E12, 69.0], [1.62575412E12, 87.0], [1.62575335E12, 58.0], [1.62575352E12, 42.0], [1.62575369E12, 73.0], [1.62575386E12, 5443.0], [1.62575403E12, 127.0], [1.62575326E12, 45.0], [1.62575343E12, 53.0], [1.62575328E12, 69.0], [1.62575345E12, 31.0], [1.62575362E12, 198.0], [1.62575379E12, 30.0], [1.62575396E12, 23.0], [1.62575413E12, 87.0], [1.62575336E12, 68.0], [1.62575353E12, 95.0], [1.6257537E12, 141.0], [1.62575387E12, 46.0], [1.62575404E12, 95.0], [1.62575327E12, 68.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62575376E12, 18.0], [1.62575393E12, 8.0], [1.6257541E12, 44.0], [1.62575333E12, 19.0], [1.6257535E12, 12.0], [1.62575367E12, 8.0], [1.62575384E12, 19.0], [1.62575401E12, 11.0], [1.62575341E12, 9.0], [1.62575358E12, 13.0], [1.62575375E12, 18.0], [1.6257536E12, 12.0], [1.62575377E12, 19.0], [1.62575394E12, 9.0], [1.62575411E12, 44.0], [1.62575334E12, 18.0], [1.62575351E12, 13.0], [1.62575368E12, 8.0], [1.62575385E12, 12.0], [1.62575402E12, 12.0], [1.62575325E12, 23.0], [1.62575342E12, 10.0], [1.62575359E12, 12.0], [1.62575408E12, 8.0], [1.62575331E12, 14.0], [1.62575348E12, 12.0], [1.62575365E12, 9.0], [1.62575382E12, 19.0], [1.62575399E12, 12.0], [1.62575339E12, 9.0], [1.62575356E12, 12.0], [1.62575373E12, 8.0], [1.6257539E12, 11.0], [1.62575407E12, 7.0], [1.62575392E12, 8.0], [1.62575409E12, 9.0], [1.62575332E12, 19.0], [1.62575349E12, 12.0], [1.62575366E12, 8.0], [1.62575383E12, 19.0], [1.625754E12, 12.0], [1.6257534E12, 9.0], [1.62575357E12, 12.0], [1.62575374E12, 19.0], [1.62575391E12, 8.0], [1.62575329E12, 14.0], [1.62575346E12, 12.0], [1.62575363E12, 9.0], [1.6257538E12, 19.0], [1.62575397E12, 9.0], [1.62575414E12, 44.0], [1.62575337E12, 8.0], [1.62575354E12, 12.0], [1.62575371E12, 8.0], [1.62575388E12, 12.0], [1.62575405E12, 8.0], [1.6257533E12, 13.0], [1.62575347E12, 12.0], [1.62575364E12, 9.0], [1.62575381E12, 19.0], [1.62575398E12, 12.0], [1.62575415E12, 49.0], [1.62575338E12, 9.0], [1.62575355E12, 12.0], [1.62575372E12, 9.0], [1.62575389E12, 11.0], [1.62575406E12, 9.0], [1.62575344E12, 12.0], [1.62575361E12, 10.0], [1.62575378E12, 19.0], [1.62575395E12, 9.0], [1.62575412E12, 44.0], [1.62575335E12, 18.0], [1.62575352E12, 12.0], [1.62575369E12, 8.0], [1.62575386E12, 12.0], [1.62575403E12, 8.0], [1.62575326E12, 17.0], [1.62575343E12, 13.0], [1.62575328E12, 13.0], [1.62575345E12, 12.0], [1.62575362E12, 9.0], [1.62575379E12, 19.0], [1.62575396E12, 9.0], [1.62575413E12, 44.0], [1.62575336E12, 18.0], [1.62575353E12, 12.0], [1.6257537E12, 8.0], [1.62575387E12, 12.0], [1.62575404E12, 9.0], [1.62575327E12, 16.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62575376E12, 32.0], [1.62575393E12, 18.0], [1.6257541E12, 64.80000000000001], [1.62575333E12, 29.0], [1.6257535E12, 26.0], [1.62575367E12, 20.0], [1.62575384E12, 28.0], [1.62575401E12, 24.0], [1.62575341E12, 24.0], [1.62575358E12, 26.0], [1.62575375E12, 28.700000000000003], [1.6257536E12, 32.59999999999998], [1.62575377E12, 27.0], [1.62575394E12, 22.400000000000006], [1.62575411E12, 61.8], [1.62575334E12, 30.0], [1.62575351E12, 26.0], [1.62575368E12, 21.0], [1.62575385E12, 27.10000000000001], [1.62575402E12, 24.0], [1.62575325E12, 3727.200000000002], [1.62575342E12, 22.400000000000002], [1.62575359E12, 27.0], [1.62575408E12, 19.0], [1.62575331E12, 32.0], [1.62575348E12, 28.0], [1.62575365E12, 21.900000000000006], [1.62575382E12, 32.0], [1.62575399E12, 25.0], [1.62575339E12, 22.10000000000001], [1.62575356E12, 25.0], [1.62575373E12, 31.0], [1.6257539E12, 25.0], [1.62575407E12, 16.0], [1.62575392E12, 19.0], [1.62575409E12, 64.0], [1.62575332E12, 32.0], [1.62575349E12, 27.0], [1.62575366E12, 21.0], [1.62575383E12, 28.0], [1.625754E12, 27.10000000000001], [1.6257534E12, 32.0], [1.62575357E12, 25.0], [1.62575374E12, 29.0], [1.62575391E12, 23.30000000000001], [1.62575329E12, 31.600000000000023], [1.62575346E12, 31.0], [1.62575363E12, 22.200000000000003], [1.6257538E12, 34.0], [1.62575397E12, 39.0], [1.62575414E12, 54.400000000000006], [1.62575337E12, 26.0], [1.62575354E12, 27.0], [1.62575371E12, 21.400000000000006], [1.62575388E12, 28.0], [1.62575405E12, 17.5], [1.6257533E12, 26.0], [1.62575347E12, 25.900000000000006], [1.62575364E12, 20.0], [1.62575381E12, 28.5], [1.62575398E12, 28.0], [1.62575415E12, 59.0], [1.62575338E12, 21.0], [1.62575355E12, 25.0], [1.62575372E12, 23.0], [1.62575389E12, 24.0], [1.62575406E12, 19.0], [1.62575344E12, 25.200000000000003], [1.62575361E12, 24.0], [1.62575378E12, 29.0], [1.62575395E12, 19.0], [1.62575412E12, 63.8], [1.62575335E12, 29.0], [1.62575352E12, 25.099999999999994], [1.62575369E12, 24.0], [1.62575386E12, 26.0], [1.62575403E12, 23.099999999999994], [1.62575326E12, 37.60000000000001], [1.62575343E12, 37.0], [1.62575328E12, 36.70000000000006], [1.62575345E12, 28.0], [1.62575362E12, 27.0], [1.62575379E12, 29.0], [1.62575396E12, 17.400000000000006], [1.62575413E12, 60.0], [1.62575336E12, 32.0], [1.62575353E12, 25.099999999999994], [1.6257537E12, 29.099999999999994], [1.62575387E12, 24.30000000000001], [1.62575404E12, 18.0], [1.62575327E12, 37.400000000000006]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62575376E12, 73.0], [1.62575393E12, 128.48999999999984], [1.6257541E12, 143.3599999999999], [1.62575333E12, 95.09999999999991], [1.6257535E12, 51.28000000000014], [1.62575367E12, 35.400000000000205], [1.62575384E12, 51.11999999999989], [1.62575401E12, 35.0], [1.62575341E12, 98.0], [1.62575358E12, 37.0], [1.62575375E12, 51.779999999999944], [1.6257536E12, 55.0], [1.62575377E12, 31.0], [1.62575394E12, 78.0], [1.62575411E12, 131.92000000000007], [1.62575334E12, 55.08999999999992], [1.62575351E12, 36.08000000000004], [1.62575368E12, 84.97000000000003], [1.62575385E12, 112.91999999999894], [1.62575402E12, 30.399999999999977], [1.62575325E12, 5034.0], [1.62575342E12, 27.0], [1.62575359E12, 28.0], [1.62575408E12, 29.390000000000015], [1.62575331E12, 50.119999999999976], [1.62575348E12, 68.20999999999972], [1.62575365E12, 86.900000000001], [1.62575382E12, 64.99999999999993], [1.62575399E12, 30.0], [1.62575339E12, 65.15000000000003], [1.62575356E12, 37.89999999999998], [1.62575373E12, 65.0], [1.6257539E12, 39.00999999999999], [1.62575407E12, 47.88000000000045], [1.62575392E12, 63.90999999999994], [1.62575409E12, 148.81999999999982], [1.62575332E12, 49.07999999999993], [1.62575349E12, 36.03], [1.62575366E12, 63.78000000000014], [1.62575383E12, 211.49000000000183], [1.625754E12, 50.860000000000014], [1.6257534E12, 62.0], [1.62575357E12, 34.24000000000001], [1.62575374E12, 58.349999999999994], [1.62575391E12, 77.13], [1.62575329E12, 57.47999999999999], [1.62575346E12, 43.39999999999999], [1.62575363E12, 65.0], [1.6257538E12, 48.0], [1.62575397E12, 46.0], [1.62575414E12, 65.0], [1.62575337E12, 63.75000000000003], [1.62575354E12, 41.02000000000001], [1.62575371E12, 42.35999999999993], [1.62575388E12, 41.01999999999998], [1.62575405E12, 72.25000000000097], [1.6257533E12, 66.4799999999982], [1.62575347E12, 35.3900000000001], [1.62575364E12, 50.19999999999993], [1.62575381E12, 53.0], [1.62575398E12, 34.0], [1.62575415E12, 59.0], [1.62575338E12, 61.41], [1.62575355E12, 58.43999999999997], [1.62575372E12, 54.269999999998845], [1.62575389E12, 29.150000000000006], [1.62575406E12, 65.65000000000006], [1.62575344E12, 29.0], [1.62575361E12, 25.0], [1.62575378E12, 40.0], [1.62575395E12, 69.0], [1.62575412E12, 87.0], [1.62575335E12, 53.93999999999997], [1.62575352E12, 41.00999999999999], [1.62575369E12, 63.2000000000001], [1.62575386E12, 5400.400000000001], [1.62575403E12, 61.6599999999994], [1.62575326E12, 45.0], [1.62575343E12, 53.0], [1.62575328E12, 67.67000000000002], [1.62575345E12, 31.0], [1.62575362E12, 198.0], [1.62575379E12, 30.0], [1.62575396E12, 23.0], [1.62575413E12, 87.0], [1.62575336E12, 65.0], [1.62575353E12, 46.489999999999554], [1.6257537E12, 107.33999999999969], [1.62575387E12, 34.360000000000014], [1.62575404E12, 43.51999999999953], [1.62575327E12, 68.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62575376E12, 36.099999999999994], [1.62575393E12, 22.14999999999999], [1.6257541E12, 83.0], [1.62575333E12, 35.04999999999998], [1.6257535E12, 32.19999999999999], [1.62575367E12, 28.0], [1.62575384E12, 31.0], [1.62575401E12, 27.0], [1.62575341E12, 31.25], [1.62575358E12, 28.700000000000017], [1.62575375E12, 31.849999999999994], [1.6257536E12, 55.0], [1.62575377E12, 28.099999999999994], [1.62575394E12, 27.349999999999994], [1.62575411E12, 72.89999999999999], [1.62575334E12, 35.099999999999966], [1.62575351E12, 29.0], [1.62575368E12, 29.94999999999999], [1.62575385E12, 43.44999999999985], [1.62575402E12, 27.0], [1.62575325E12, 5034.0], [1.62575342E12, 25.799999999999997], [1.62575359E12, 28.0], [1.62575408E12, 21.0], [1.62575331E12, 37.39999999999998], [1.62575348E12, 35.150000000000006], [1.62575365E12, 27.0], [1.62575382E12, 39.0], [1.62575399E12, 28.0], [1.62575339E12, 27.54999999999997], [1.62575356E12, 27.25], [1.62575373E12, 35.39999999999998], [1.6257539E12, 27.0], [1.62575407E12, 24.0], [1.62575392E12, 22.349999999999994], [1.62575409E12, 83.39999999999998], [1.62575332E12, 39.04999999999998], [1.62575349E12, 29.299999999999955], [1.62575366E12, 27.0], [1.62575383E12, 32.89999999999998], [1.625754E12, 35.05], [1.6257534E12, 48.5], [1.62575357E12, 27.049999999999997], [1.62575374E12, 31.349999999999994], [1.62575391E12, 28.0], [1.62575329E12, 41.0], [1.62575346E12, 37.0], [1.62575363E12, 28.0], [1.6257538E12, 41.5], [1.62575397E12, 44.94999999999999], [1.62575414E12, 61.99999999999999], [1.62575337E12, 31.0], [1.62575354E12, 32.0], [1.62575371E12, 25.399999999999977], [1.62575388E12, 31.0], [1.62575405E12, 22.0], [1.6257533E12, 30.0], [1.62575347E12, 27.0], [1.62575364E12, 27.0], [1.62575381E12, 35.25], [1.62575398E12, 30.299999999999997], [1.62575415E12, 59.0], [1.62575338E12, 28.69999999999999], [1.62575355E12, 32.0], [1.62575372E12, 32.04999999999998], [1.62575389E12, 26.149999999999977], [1.62575406E12, 25.0], [1.62575344E12, 27.599999999999994], [1.62575361E12, 25.0], [1.62575378E12, 36.149999999999984], [1.62575395E12, 21.0], [1.62575412E12, 72.99999999999996], [1.62575335E12, 36.89999999999998], [1.62575352E12, 28.0], [1.62575369E12, 33.099999999999994], [1.62575386E12, 35.0], [1.62575403E12, 26.0], [1.62575326E12, 42.15], [1.62575343E12, 51.75], [1.62575328E12, 51.05], [1.62575345E12, 29.599999999999994], [1.62575362E12, 31.15], [1.62575379E12, 29.75], [1.62575396E12, 22.099999999999994], [1.62575413E12, 68.0], [1.62575336E12, 42.0], [1.62575353E12, 27.099999999999966], [1.6257537E12, 43.04999999999998], [1.62575387E12, 26.149999999999977], [1.62575404E12, 23.0], [1.62575327E12, 44.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575415E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 17.0, "minX": 1.0, "maxY": 22.0, "series": [{"data": [[2.0, 21.5], [8.0, 20.0], [9.0, 21.0], [10.0, 22.0], [11.0, 18.0], [3.0, 18.5], [12.0, 20.0], [13.0, 19.0], [14.0, 21.0], [15.0, 20.0], [1.0, 20.0], [4.0, 21.0], [16.0, 19.0], [17.0, 18.0], [18.0, 20.0], [19.0, 18.0], [5.0, 21.0], [20.0, 17.0], [21.0, 21.0], [22.0, 19.0], [6.0, 21.0], [7.0, 20.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16.0, "minX": 1.0, "maxY": 20.5, "series": [{"data": [[2.0, 20.0], [8.0, 18.0], [9.0, 19.0], [10.0, 20.5], [11.0, 17.0], [3.0, 17.0], [12.0, 19.0], [13.0, 18.0], [14.0, 19.0], [15.0, 18.0], [1.0, 19.0], [4.0, 19.0], [16.0, 17.0], [17.0, 17.0], [18.0, 18.0], [19.0, 17.0], [5.0, 19.0], [20.0, 16.0], [21.0, 19.0], [22.0, 17.0], [6.0, 19.0], [7.0, 18.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.62575325E12, "maxY": 20.0, "series": [{"data": [[1.62575376E12, 8.8], [1.62575393E12, 11.6], [1.6257541E12, 15.5], [1.62575333E12, 20.0], [1.6257535E12, 19.6], [1.62575367E12, 19.6], [1.62575384E12, 18.2], [1.62575401E12, 14.9], [1.62575341E12, 5.4], [1.62575358E12, 9.0], [1.62575375E12, 12.1], [1.6257536E12, 2.7], [1.62575377E12, 5.8], [1.62575394E12, 9.2], [1.62575411E12, 12.1], [1.62575334E12, 19.7], [1.62575351E12, 19.7], [1.62575368E12, 20.0], [1.62575385E12, 14.1], [1.62575402E12, 18.0], [1.62575325E12, 1.8], [1.62575342E12, 2.5], [1.62575359E12, 5.9], [1.62575408E12, 19.6], [1.62575331E12, 19.5], [1.62575348E12, 17.7], [1.62575365E12, 15.0], [1.62575382E12, 11.8], [1.62575399E12, 8.7], [1.62575339E12, 11.8], [1.62575356E12, 15.4], [1.62575373E12, 18.5], [1.6257539E12, 19.8], [1.62575407E12, 19.7], [1.62575392E12, 15.2], [1.62575409E12, 18.5], [1.62575332E12, 19.8], [1.62575349E12, 19.6], [1.62575366E12, 17.9], [1.62575383E12, 15.1], [1.625754E12, 11.8], [1.6257534E12, 8.9], [1.62575357E12, 11.8], [1.62575374E12, 15.3], [1.62575391E12, 18.6], [1.62575329E12, 15.1], [1.62575346E12, 11.9], [1.62575363E12, 8.7], [1.6257538E12, 5.4], [1.62575397E12, 2.2], [1.62575414E12, 2.6], [1.62575337E12, 18.4], [1.62575354E12, 19.7], [1.62575371E12, 19.5], [1.62575388E12, 19.7], [1.62575405E12, 19.6], [1.6257533E12, 18.2], [1.62575347E12, 15.0], [1.62575364E12, 11.7], [1.62575381E12, 8.5], [1.62575398E12, 5.3], [1.62575415E12, 0.3], [1.62575338E12, 15.2], [1.62575355E12, 18.3], [1.62575372E12, 19.8], [1.62575389E12, 19.6], [1.62575406E12, 19.4], [1.62575344E12, 5.3], [1.62575361E12, 1.9], [1.62575378E12, 2.6], [1.62575395E12, 5.9], [1.62575412E12, 9.1], [1.62575335E12, 20.0], [1.62575352E12, 19.9], [1.62575369E12, 19.7], [1.62575386E12, 15.6], [1.62575403E12, 19.7], [1.62575326E12, 5.6], [1.62575343E12, 2.4], [1.62575328E12, 11.8], [1.62575345E12, 8.7], [1.62575362E12, 5.6], [1.62575379E12, 2.4], [1.62575396E12, 2.8], [1.62575413E12, 5.4], [1.62575336E12, 19.9], [1.62575353E12, 19.7], [1.6257537E12, 19.8], [1.62575387E12, 19.7], [1.62575404E12, 19.8], [1.62575327E12, 8.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575415E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.62575325E12, "maxY": 20.1, "series": [{"data": [[1.62575376E12, 8.8], [1.62575393E12, 11.6], [1.6257541E12, 15.5], [1.62575333E12, 19.8], [1.6257535E12, 19.7], [1.62575367E12, 19.7], [1.62575384E12, 18.3], [1.62575401E12, 14.9], [1.62575341E12, 5.4], [1.62575358E12, 9.0], [1.62575375E12, 12.2], [1.6257536E12, 2.7], [1.62575377E12, 5.8], [1.62575394E12, 9.2], [1.62575411E12, 12.1], [1.62575334E12, 19.8], [1.62575351E12, 19.7], [1.62575368E12, 20.0], [1.62575385E12, 13.8], [1.62575402E12, 17.9], [1.62575325E12, 1.8], [1.62575342E12, 2.5], [1.62575359E12, 5.9], [1.62575408E12, 19.6], [1.62575331E12, 19.5], [1.62575348E12, 17.6], [1.62575365E12, 15.0], [1.62575382E12, 11.9], [1.62575399E12, 8.7], [1.62575339E12, 11.8], [1.62575356E12, 15.4], [1.62575373E12, 18.5], [1.6257539E12, 19.8], [1.62575407E12, 19.7], [1.62575392E12, 15.2], [1.62575409E12, 18.5], [1.62575332E12, 19.8], [1.62575349E12, 19.6], [1.62575366E12, 17.8], [1.62575383E12, 15.0], [1.625754E12, 11.8], [1.6257534E12, 8.9], [1.62575357E12, 11.8], [1.62575374E12, 15.2], [1.62575391E12, 18.6], [1.62575329E12, 15.1], [1.62575346E12, 11.9], [1.62575363E12, 8.7], [1.6257538E12, 5.4], [1.62575397E12, 2.2], [1.62575414E12, 2.5], [1.62575337E12, 18.4], [1.62575354E12, 19.7], [1.62575371E12, 19.5], [1.62575388E12, 19.8], [1.62575405E12, 19.4], [1.6257533E12, 18.2], [1.62575347E12, 15.0], [1.62575364E12, 11.7], [1.62575381E12, 8.4], [1.62575398E12, 5.3], [1.62575415E12, 0.4], [1.62575338E12, 15.2], [1.62575355E12, 18.3], [1.62575372E12, 19.8], [1.62575389E12, 19.6], [1.62575406E12, 19.6], [1.62575344E12, 5.3], [1.62575361E12, 1.9], [1.62575378E12, 2.6], [1.62575395E12, 5.9], [1.62575412E12, 9.1], [1.62575335E12, 20.1], [1.62575352E12, 19.8], [1.62575369E12, 19.7], [1.62575386E12, 15.9], [1.62575403E12, 19.8], [1.62575326E12, 5.6], [1.62575343E12, 2.4], [1.62575328E12, 11.8], [1.62575345E12, 8.7], [1.62575362E12, 5.6], [1.62575379E12, 2.4], [1.62575396E12, 2.8], [1.62575413E12, 5.4], [1.62575336E12, 19.9], [1.62575353E12, 19.8], [1.6257537E12, 19.8], [1.62575387E12, 19.6], [1.62575404E12, 19.8], [1.62575327E12, 8.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62575415E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.62575325E12, "maxY": 20.1, "series": [{"data": [[1.62575376E12, 8.8], [1.62575393E12, 11.6], [1.6257541E12, 15.5], [1.62575333E12, 19.8], [1.6257535E12, 19.7], [1.62575367E12, 19.7], [1.62575384E12, 18.3], [1.62575401E12, 14.9], [1.62575341E12, 5.4], [1.62575358E12, 9.0], [1.62575375E12, 12.2], [1.6257536E12, 2.7], [1.62575377E12, 5.8], [1.62575394E12, 9.2], [1.62575411E12, 12.1], [1.62575334E12, 19.8], [1.62575351E12, 19.7], [1.62575368E12, 20.0], [1.62575385E12, 13.8], [1.62575402E12, 17.9], [1.62575325E12, 1.8], [1.62575342E12, 2.5], [1.62575359E12, 5.9], [1.62575408E12, 19.6], [1.62575331E12, 19.5], [1.62575348E12, 17.6], [1.62575365E12, 15.0], [1.62575382E12, 11.9], [1.62575399E12, 8.7], [1.62575339E12, 11.8], [1.62575356E12, 15.4], [1.62575373E12, 18.5], [1.6257539E12, 19.8], [1.62575407E12, 19.7], [1.62575392E12, 15.2], [1.62575409E12, 18.5], [1.62575332E12, 19.8], [1.62575349E12, 19.6], [1.62575366E12, 17.8], [1.62575383E12, 15.0], [1.625754E12, 11.8], [1.6257534E12, 8.9], [1.62575357E12, 11.8], [1.62575374E12, 15.2], [1.62575391E12, 18.6], [1.62575329E12, 15.1], [1.62575346E12, 11.9], [1.62575363E12, 8.7], [1.6257538E12, 5.4], [1.62575397E12, 2.2], [1.62575414E12, 2.5], [1.62575337E12, 18.4], [1.62575354E12, 19.7], [1.62575371E12, 19.5], [1.62575388E12, 19.8], [1.62575405E12, 19.4], [1.6257533E12, 18.2], [1.62575347E12, 15.0], [1.62575364E12, 11.7], [1.62575381E12, 8.4], [1.62575398E12, 5.3], [1.62575415E12, 0.4], [1.62575338E12, 15.2], [1.62575355E12, 18.3], [1.62575372E12, 19.8], [1.62575389E12, 19.6], [1.62575406E12, 19.6], [1.62575344E12, 5.3], [1.62575361E12, 1.9], [1.62575378E12, 2.6], [1.62575395E12, 5.9], [1.62575412E12, 9.1], [1.62575335E12, 20.1], [1.62575352E12, 19.8], [1.62575369E12, 19.7], [1.62575386E12, 15.9], [1.62575403E12, 19.8], [1.62575326E12, 5.6], [1.62575343E12, 2.4], [1.62575328E12, 11.8], [1.62575345E12, 8.7], [1.62575362E12, 5.6], [1.62575379E12, 2.4], [1.62575396E12, 2.8], [1.62575413E12, 5.4], [1.62575336E12, 19.9], [1.62575353E12, 19.8], [1.6257537E12, 19.8], [1.62575387E12, 19.6], [1.62575404E12, 19.8], [1.62575327E12, 8.5]], "isOverall": false, "label": "Healthy Thinking CN-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575415E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.62575325E12, "maxY": 20.1, "series": [{"data": [[1.62575376E12, 8.8], [1.62575393E12, 11.6], [1.6257541E12, 15.5], [1.62575333E12, 19.8], [1.6257535E12, 19.7], [1.62575367E12, 19.7], [1.62575384E12, 18.3], [1.62575401E12, 14.9], [1.62575341E12, 5.4], [1.62575358E12, 9.0], [1.62575375E12, 12.2], [1.6257536E12, 2.7], [1.62575377E12, 5.8], [1.62575394E12, 9.2], [1.62575411E12, 12.1], [1.62575334E12, 19.8], [1.62575351E12, 19.7], [1.62575368E12, 20.0], [1.62575385E12, 13.8], [1.62575402E12, 17.9], [1.62575325E12, 1.8], [1.62575342E12, 2.5], [1.62575359E12, 5.9], [1.62575408E12, 19.6], [1.62575331E12, 19.5], [1.62575348E12, 17.6], [1.62575365E12, 15.0], [1.62575382E12, 11.9], [1.62575399E12, 8.7], [1.62575339E12, 11.8], [1.62575356E12, 15.4], [1.62575373E12, 18.5], [1.6257539E12, 19.8], [1.62575407E12, 19.7], [1.62575392E12, 15.2], [1.62575409E12, 18.5], [1.62575332E12, 19.8], [1.62575349E12, 19.6], [1.62575366E12, 17.8], [1.62575383E12, 15.0], [1.625754E12, 11.8], [1.6257534E12, 8.9], [1.62575357E12, 11.8], [1.62575374E12, 15.2], [1.62575391E12, 18.6], [1.62575329E12, 15.1], [1.62575346E12, 11.9], [1.62575363E12, 8.7], [1.6257538E12, 5.4], [1.62575397E12, 2.2], [1.62575414E12, 2.5], [1.62575337E12, 18.4], [1.62575354E12, 19.7], [1.62575371E12, 19.5], [1.62575388E12, 19.8], [1.62575405E12, 19.4], [1.6257533E12, 18.2], [1.62575347E12, 15.0], [1.62575364E12, 11.7], [1.62575381E12, 8.4], [1.62575398E12, 5.3], [1.62575415E12, 0.4], [1.62575338E12, 15.2], [1.62575355E12, 18.3], [1.62575372E12, 19.8], [1.62575389E12, 19.6], [1.62575406E12, 19.6], [1.62575344E12, 5.3], [1.62575361E12, 1.9], [1.62575378E12, 2.6], [1.62575395E12, 5.9], [1.62575412E12, 9.1], [1.62575335E12, 20.1], [1.62575352E12, 19.8], [1.62575369E12, 19.7], [1.62575386E12, 15.9], [1.62575403E12, 19.8], [1.62575326E12, 5.6], [1.62575343E12, 2.4], [1.62575328E12, 11.8], [1.62575345E12, 8.7], [1.62575362E12, 5.6], [1.62575379E12, 2.4], [1.62575396E12, 2.8], [1.62575413E12, 5.4], [1.62575336E12, 19.9], [1.62575353E12, 19.8], [1.6257537E12, 19.8], [1.62575387E12, 19.6], [1.62575404E12, 19.8], [1.62575327E12, 8.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62575415E12, "title": "Total Transactions Per Second"}},
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

