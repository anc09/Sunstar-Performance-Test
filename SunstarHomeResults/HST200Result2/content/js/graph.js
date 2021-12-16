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
        data: {"result": {"minY": 38.0, "minX": 0.0, "maxY": 4425.0, "series": [{"data": [[0.0, 38.0], [0.1, 39.0], [0.2, 39.0], [0.3, 40.0], [0.4, 40.0], [0.5, 40.0], [0.6, 40.0], [0.7, 41.0], [0.8, 41.0], [0.9, 41.0], [1.0, 41.0], [1.1, 41.0], [1.2, 41.0], [1.3, 41.0], [1.4, 41.0], [1.5, 41.0], [1.6, 42.0], [1.7, 42.0], [1.8, 42.0], [1.9, 42.0], [2.0, 42.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 42.0], [2.8, 42.0], [2.9, 42.0], [3.0, 42.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 43.0], [3.5, 43.0], [3.6, 43.0], [3.7, 43.0], [3.8, 43.0], [3.9, 43.0], [4.0, 43.0], [4.1, 43.0], [4.2, 43.0], [4.3, 43.0], [4.4, 43.0], [4.5, 43.0], [4.6, 44.0], [4.7, 44.0], [4.8, 44.0], [4.9, 44.0], [5.0, 44.0], [5.1, 44.0], [5.2, 44.0], [5.3, 44.0], [5.4, 44.0], [5.5, 44.0], [5.6, 44.0], [5.7, 44.0], [5.8, 44.0], [5.9, 44.0], [6.0, 44.0], [6.1, 44.0], [6.2, 44.0], [6.3, 44.0], [6.4, 45.0], [6.5, 45.0], [6.6, 45.0], [6.7, 45.0], [6.8, 45.0], [6.9, 45.0], [7.0, 45.0], [7.1, 45.0], [7.2, 45.0], [7.3, 45.0], [7.4, 45.0], [7.5, 45.0], [7.6, 45.0], [7.7, 45.0], [7.8, 45.0], [7.9, 45.0], [8.0, 45.0], [8.1, 45.0], [8.2, 45.0], [8.3, 45.0], [8.4, 45.0], [8.5, 45.0], [8.6, 45.0], [8.7, 46.0], [8.8, 46.0], [8.9, 46.0], [9.0, 46.0], [9.1, 46.0], [9.2, 46.0], [9.3, 46.0], [9.4, 46.0], [9.5, 46.0], [9.6, 46.0], [9.7, 46.0], [9.8, 46.0], [9.9, 46.0], [10.0, 46.0], [10.1, 46.0], [10.2, 46.0], [10.3, 46.0], [10.4, 46.0], [10.5, 46.0], [10.6, 46.0], [10.7, 46.0], [10.8, 46.0], [10.9, 46.0], [11.0, 47.0], [11.1, 47.0], [11.2, 47.0], [11.3, 47.0], [11.4, 47.0], [11.5, 47.0], [11.6, 47.0], [11.7, 47.0], [11.8, 47.0], [11.9, 47.0], [12.0, 47.0], [12.1, 47.0], [12.2, 47.0], [12.3, 47.0], [12.4, 47.0], [12.5, 47.0], [12.6, 47.0], [12.7, 47.0], [12.8, 47.0], [12.9, 47.0], [13.0, 47.0], [13.1, 47.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 48.0], [13.8, 48.0], [13.9, 48.0], [14.0, 48.0], [14.1, 48.0], [14.2, 48.0], [14.3, 48.0], [14.4, 48.0], [14.5, 48.0], [14.6, 48.0], [14.7, 48.0], [14.8, 48.0], [14.9, 48.0], [15.0, 48.0], [15.1, 48.0], [15.2, 48.0], [15.3, 48.0], [15.4, 48.0], [15.5, 48.0], [15.6, 48.0], [15.7, 48.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 48.0], [16.2, 49.0], [16.3, 49.0], [16.4, 49.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 49.0], [16.9, 49.0], [17.0, 49.0], [17.1, 49.0], [17.2, 49.0], [17.3, 49.0], [17.4, 49.0], [17.5, 49.0], [17.6, 49.0], [17.7, 49.0], [17.8, 49.0], [17.9, 49.0], [18.0, 49.0], [18.1, 49.0], [18.2, 49.0], [18.3, 49.0], [18.4, 49.0], [18.5, 49.0], [18.6, 49.0], [18.7, 49.0], [18.8, 50.0], [18.9, 50.0], [19.0, 50.0], [19.1, 50.0], [19.2, 50.0], [19.3, 50.0], [19.4, 50.0], [19.5, 50.0], [19.6, 50.0], [19.7, 50.0], [19.8, 50.0], [19.9, 50.0], [20.0, 50.0], [20.1, 50.0], [20.2, 50.0], [20.3, 50.0], [20.4, 50.0], [20.5, 50.0], [20.6, 50.0], [20.7, 50.0], [20.8, 51.0], [20.9, 51.0], [21.0, 51.0], [21.1, 51.0], [21.2, 51.0], [21.3, 51.0], [21.4, 51.0], [21.5, 51.0], [21.6, 51.0], [21.7, 51.0], [21.8, 51.0], [21.9, 51.0], [22.0, 51.0], [22.1, 51.0], [22.2, 51.0], [22.3, 51.0], [22.4, 51.0], [22.5, 51.0], [22.6, 51.0], [22.7, 51.0], [22.8, 51.0], [22.9, 52.0], [23.0, 52.0], [23.1, 52.0], [23.2, 52.0], [23.3, 52.0], [23.4, 52.0], [23.5, 52.0], [23.6, 52.0], [23.7, 52.0], [23.8, 52.0], [23.9, 52.0], [24.0, 52.0], [24.1, 52.0], [24.2, 52.0], [24.3, 52.0], [24.4, 52.0], [24.5, 52.0], [24.6, 52.0], [24.7, 53.0], [24.8, 53.0], [24.9, 53.0], [25.0, 53.0], [25.1, 53.0], [25.2, 53.0], [25.3, 53.0], [25.4, 53.0], [25.5, 53.0], [25.6, 53.0], [25.7, 53.0], [25.8, 53.0], [25.9, 53.0], [26.0, 53.0], [26.1, 53.0], [26.2, 53.0], [26.3, 54.0], [26.4, 54.0], [26.5, 54.0], [26.6, 54.0], [26.7, 54.0], [26.8, 54.0], [26.9, 54.0], [27.0, 54.0], [27.1, 54.0], [27.2, 54.0], [27.3, 54.0], [27.4, 54.0], [27.5, 54.0], [27.6, 54.0], [27.7, 54.0], [27.8, 54.0], [27.9, 54.0], [28.0, 54.0], [28.1, 54.0], [28.2, 55.0], [28.3, 55.0], [28.4, 55.0], [28.5, 55.0], [28.6, 55.0], [28.7, 55.0], [28.8, 55.0], [28.9, 55.0], [29.0, 55.0], [29.1, 55.0], [29.2, 55.0], [29.3, 55.0], [29.4, 55.0], [29.5, 56.0], [29.6, 56.0], [29.7, 56.0], [29.8, 56.0], [29.9, 56.0], [30.0, 56.0], [30.1, 56.0], [30.2, 56.0], [30.3, 56.0], [30.4, 56.0], [30.5, 56.0], [30.6, 57.0], [30.7, 57.0], [30.8, 57.0], [30.9, 57.0], [31.0, 57.0], [31.1, 57.0], [31.2, 57.0], [31.3, 57.0], [31.4, 57.0], [31.5, 57.0], [31.6, 57.0], [31.7, 57.0], [31.8, 58.0], [31.9, 58.0], [32.0, 58.0], [32.1, 58.0], [32.2, 58.0], [32.3, 58.0], [32.4, 58.0], [32.5, 58.0], [32.6, 58.0], [32.7, 58.0], [32.8, 58.0], [32.9, 58.0], [33.0, 59.0], [33.1, 59.0], [33.2, 59.0], [33.3, 59.0], [33.4, 59.0], [33.5, 59.0], [33.6, 59.0], [33.7, 59.0], [33.8, 59.0], [33.9, 59.0], [34.0, 60.0], [34.1, 60.0], [34.2, 60.0], [34.3, 60.0], [34.4, 60.0], [34.5, 60.0], [34.6, 60.0], [34.7, 60.0], [34.8, 60.0], [34.9, 60.0], [35.0, 60.0], [35.1, 61.0], [35.2, 61.0], [35.3, 61.0], [35.4, 61.0], [35.5, 61.0], [35.6, 61.0], [35.7, 61.0], [35.8, 61.0], [35.9, 61.0], [36.0, 62.0], [36.1, 62.0], [36.2, 62.0], [36.3, 62.0], [36.4, 62.0], [36.5, 62.0], [36.6, 62.0], [36.7, 63.0], [36.8, 63.0], [36.9, 63.0], [37.0, 63.0], [37.1, 63.0], [37.2, 63.0], [37.3, 63.0], [37.4, 63.0], [37.5, 63.0], [37.6, 64.0], [37.7, 64.0], [37.8, 64.0], [37.9, 64.0], [38.0, 64.0], [38.1, 64.0], [38.2, 64.0], [38.3, 64.0], [38.4, 64.0], [38.5, 64.0], [38.6, 65.0], [38.7, 65.0], [38.8, 65.0], [38.9, 65.0], [39.0, 65.0], [39.1, 65.0], [39.2, 65.0], [39.3, 65.0], [39.4, 66.0], [39.5, 66.0], [39.6, 66.0], [39.7, 66.0], [39.8, 66.0], [39.9, 66.0], [40.0, 66.0], [40.1, 66.0], [40.2, 67.0], [40.3, 67.0], [40.4, 67.0], [40.5, 67.0], [40.6, 67.0], [40.7, 67.0], [40.8, 67.0], [40.9, 68.0], [41.0, 68.0], [41.1, 68.0], [41.2, 68.0], [41.3, 68.0], [41.4, 68.0], [41.5, 68.0], [41.6, 69.0], [41.7, 69.0], [41.8, 69.0], [41.9, 69.0], [42.0, 69.0], [42.1, 69.0], [42.2, 70.0], [42.3, 70.0], [42.4, 70.0], [42.5, 70.0], [42.6, 70.0], [42.7, 70.0], [42.8, 71.0], [42.9, 71.0], [43.0, 71.0], [43.1, 71.0], [43.2, 71.0], [43.3, 71.0], [43.4, 72.0], [43.5, 72.0], [43.6, 72.0], [43.7, 72.0], [43.8, 72.0], [43.9, 72.0], [44.0, 72.0], [44.1, 73.0], [44.2, 73.0], [44.3, 73.0], [44.4, 73.0], [44.5, 73.0], [44.6, 73.0], [44.7, 74.0], [44.8, 74.0], [44.9, 74.0], [45.0, 74.0], [45.1, 74.0], [45.2, 75.0], [45.3, 75.0], [45.4, 75.0], [45.5, 75.0], [45.6, 76.0], [45.7, 76.0], [45.8, 76.0], [45.9, 76.0], [46.0, 76.0], [46.1, 76.0], [46.2, 76.0], [46.3, 77.0], [46.4, 77.0], [46.5, 77.0], [46.6, 77.0], [46.7, 77.0], [46.8, 77.0], [46.9, 77.0], [47.0, 78.0], [47.1, 78.0], [47.2, 78.0], [47.3, 78.0], [47.4, 79.0], [47.5, 79.0], [47.6, 79.0], [47.7, 79.0], [47.8, 79.0], [47.9, 79.0], [48.0, 80.0], [48.1, 80.0], [48.2, 80.0], [48.3, 80.0], [48.4, 81.0], [48.5, 81.0], [48.6, 81.0], [48.7, 81.0], [48.8, 81.0], [48.9, 81.0], [49.0, 81.0], [49.1, 82.0], [49.2, 82.0], [49.3, 82.0], [49.4, 82.0], [49.5, 83.0], [49.6, 83.0], [49.7, 83.0], [49.8, 83.0], [49.9, 84.0], [50.0, 84.0], [50.1, 84.0], [50.2, 84.0], [50.3, 85.0], [50.4, 85.0], [50.5, 85.0], [50.6, 85.0], [50.7, 86.0], [50.8, 86.0], [50.9, 86.0], [51.0, 87.0], [51.1, 87.0], [51.2, 87.0], [51.3, 87.0], [51.4, 88.0], [51.5, 88.0], [51.6, 88.0], [51.7, 88.0], [51.8, 88.0], [51.9, 89.0], [52.0, 89.0], [52.1, 89.0], [52.2, 89.0], [52.3, 90.0], [52.4, 90.0], [52.5, 90.0], [52.6, 91.0], [52.7, 91.0], [52.8, 91.0], [52.9, 91.0], [53.0, 92.0], [53.1, 92.0], [53.2, 92.0], [53.3, 92.0], [53.4, 92.0], [53.5, 92.0], [53.6, 93.0], [53.7, 93.0], [53.8, 93.0], [53.9, 94.0], [54.0, 94.0], [54.1, 94.0], [54.2, 94.0], [54.3, 95.0], [54.4, 95.0], [54.5, 95.0], [54.6, 95.0], [54.7, 96.0], [54.8, 96.0], [54.9, 96.0], [55.0, 97.0], [55.1, 97.0], [55.2, 97.0], [55.3, 98.0], [55.4, 98.0], [55.5, 98.0], [55.6, 99.0], [55.7, 99.0], [55.8, 99.0], [55.9, 100.0], [56.0, 100.0], [56.1, 100.0], [56.2, 100.0], [56.3, 101.0], [56.4, 101.0], [56.5, 102.0], [56.6, 102.0], [56.7, 103.0], [56.8, 103.0], [56.9, 103.0], [57.0, 104.0], [57.1, 104.0], [57.2, 104.0], [57.3, 105.0], [57.4, 106.0], [57.5, 106.0], [57.6, 107.0], [57.7, 107.0], [57.8, 107.0], [57.9, 108.0], [58.0, 108.0], [58.1, 108.0], [58.2, 109.0], [58.3, 109.0], [58.4, 110.0], [58.5, 110.0], [58.6, 111.0], [58.7, 111.0], [58.8, 112.0], [58.9, 112.0], [59.0, 113.0], [59.1, 114.0], [59.2, 114.0], [59.3, 115.0], [59.4, 115.0], [59.5, 116.0], [59.6, 116.0], [59.7, 117.0], [59.8, 118.0], [59.9, 118.0], [60.0, 119.0], [60.1, 119.0], [60.2, 119.0], [60.3, 120.0], [60.4, 120.0], [60.5, 121.0], [60.6, 121.0], [60.7, 122.0], [60.8, 122.0], [60.9, 123.0], [61.0, 123.0], [61.1, 123.0], [61.2, 124.0], [61.3, 125.0], [61.4, 125.0], [61.5, 125.0], [61.6, 126.0], [61.7, 126.0], [61.8, 127.0], [61.9, 127.0], [62.0, 128.0], [62.1, 128.0], [62.2, 129.0], [62.3, 129.0], [62.4, 130.0], [62.5, 131.0], [62.6, 131.0], [62.7, 132.0], [62.8, 132.0], [62.9, 133.0], [63.0, 133.0], [63.1, 133.0], [63.2, 134.0], [63.3, 134.0], [63.4, 135.0], [63.5, 135.0], [63.6, 136.0], [63.7, 137.0], [63.8, 137.0], [63.9, 137.0], [64.0, 138.0], [64.1, 139.0], [64.2, 140.0], [64.3, 140.0], [64.4, 142.0], [64.5, 143.0], [64.6, 143.0], [64.7, 144.0], [64.8, 144.0], [64.9, 145.0], [65.0, 146.0], [65.1, 147.0], [65.2, 147.0], [65.3, 148.0], [65.4, 148.0], [65.5, 149.0], [65.6, 150.0], [65.7, 151.0], [65.8, 152.0], [65.9, 152.0], [66.0, 153.0], [66.1, 154.0], [66.2, 155.0], [66.3, 155.0], [66.4, 156.0], [66.5, 156.0], [66.6, 157.0], [66.7, 158.0], [66.8, 159.0], [66.9, 161.0], [67.0, 161.0], [67.1, 162.0], [67.2, 163.0], [67.3, 163.0], [67.4, 164.0], [67.5, 165.0], [67.6, 166.0], [67.7, 167.0], [67.8, 167.0], [67.9, 167.0], [68.0, 168.0], [68.1, 168.0], [68.2, 170.0], [68.3, 170.0], [68.4, 171.0], [68.5, 172.0], [68.6, 172.0], [68.7, 173.0], [68.8, 174.0], [68.9, 175.0], [69.0, 175.0], [69.1, 176.0], [69.2, 176.0], [69.3, 177.0], [69.4, 178.0], [69.5, 179.0], [69.6, 179.0], [69.7, 180.0], [69.8, 181.0], [69.9, 181.0], [70.0, 182.0], [70.1, 183.0], [70.2, 184.0], [70.3, 185.0], [70.4, 187.0], [70.5, 187.0], [70.6, 188.0], [70.7, 191.0], [70.8, 191.0], [70.9, 193.0], [71.0, 193.0], [71.1, 195.0], [71.2, 195.0], [71.3, 196.0], [71.4, 199.0], [71.5, 200.0], [71.6, 202.0], [71.7, 203.0], [71.8, 205.0], [71.9, 205.0], [72.0, 207.0], [72.1, 208.0], [72.2, 210.0], [72.3, 211.0], [72.4, 212.0], [72.5, 213.0], [72.6, 214.0], [72.7, 215.0], [72.8, 217.0], [72.9, 219.0], [73.0, 221.0], [73.1, 221.0], [73.2, 222.0], [73.3, 223.0], [73.4, 224.0], [73.5, 225.0], [73.6, 227.0], [73.7, 229.0], [73.8, 229.0], [73.9, 231.0], [74.0, 233.0], [74.1, 234.0], [74.2, 235.0], [74.3, 237.0], [74.4, 239.0], [74.5, 240.0], [74.6, 241.0], [74.7, 244.0], [74.8, 245.0], [74.9, 247.0], [75.0, 250.0], [75.1, 251.0], [75.2, 252.0], [75.3, 254.0], [75.4, 255.0], [75.5, 257.0], [75.6, 259.0], [75.7, 261.0], [75.8, 262.0], [75.9, 263.0], [76.0, 264.0], [76.1, 265.0], [76.2, 267.0], [76.3, 268.0], [76.4, 270.0], [76.5, 272.0], [76.6, 273.0], [76.7, 274.0], [76.8, 276.0], [76.9, 278.0], [77.0, 279.0], [77.1, 280.0], [77.2, 281.0], [77.3, 282.0], [77.4, 283.0], [77.5, 283.0], [77.6, 286.0], [77.7, 288.0], [77.8, 290.0], [77.9, 291.0], [78.0, 293.0], [78.1, 295.0], [78.2, 295.0], [78.3, 296.0], [78.4, 298.0], [78.5, 300.0], [78.6, 303.0], [78.7, 304.0], [78.8, 306.0], [78.9, 307.0], [79.0, 309.0], [79.1, 310.0], [79.2, 312.0], [79.3, 313.0], [79.4, 314.0], [79.5, 315.0], [79.6, 316.0], [79.7, 317.0], [79.8, 318.0], [79.9, 319.0], [80.0, 321.0], [80.1, 322.0], [80.2, 323.0], [80.3, 324.0], [80.4, 324.0], [80.5, 325.0], [80.6, 327.0], [80.7, 329.0], [80.8, 330.0], [80.9, 332.0], [81.0, 334.0], [81.1, 335.0], [81.2, 336.0], [81.3, 337.0], [81.4, 338.0], [81.5, 339.0], [81.6, 341.0], [81.7, 344.0], [81.8, 346.0], [81.9, 348.0], [82.0, 350.0], [82.1, 352.0], [82.2, 353.0], [82.3, 355.0], [82.4, 356.0], [82.5, 358.0], [82.6, 360.0], [82.7, 363.0], [82.8, 364.0], [82.9, 366.0], [83.0, 367.0], [83.1, 368.0], [83.2, 369.0], [83.3, 370.0], [83.4, 372.0], [83.5, 373.0], [83.6, 375.0], [83.7, 377.0], [83.8, 379.0], [83.9, 381.0], [84.0, 383.0], [84.1, 384.0], [84.2, 385.0], [84.3, 387.0], [84.4, 389.0], [84.5, 391.0], [84.6, 391.0], [84.7, 393.0], [84.8, 394.0], [84.9, 397.0], [85.0, 399.0], [85.1, 400.0], [85.2, 401.0], [85.3, 404.0], [85.4, 404.0], [85.5, 406.0], [85.6, 408.0], [85.7, 409.0], [85.8, 410.0], [85.9, 412.0], [86.0, 413.0], [86.1, 414.0], [86.2, 416.0], [86.3, 420.0], [86.4, 422.0], [86.5, 423.0], [86.6, 425.0], [86.7, 426.0], [86.8, 427.0], [86.9, 429.0], [87.0, 430.0], [87.1, 431.0], [87.2, 433.0], [87.3, 435.0], [87.4, 436.0], [87.5, 436.0], [87.6, 438.0], [87.7, 439.0], [87.8, 440.0], [87.9, 442.0], [88.0, 443.0], [88.1, 444.0], [88.2, 446.0], [88.3, 448.0], [88.4, 449.0], [88.5, 450.0], [88.6, 451.0], [88.7, 452.0], [88.8, 453.0], [88.9, 455.0], [89.0, 456.0], [89.1, 457.0], [89.2, 460.0], [89.3, 460.0], [89.4, 461.0], [89.5, 464.0], [89.6, 465.0], [89.7, 467.0], [89.8, 468.0], [89.9, 471.0], [90.0, 472.0], [90.1, 474.0], [90.2, 475.0], [90.3, 476.0], [90.4, 477.0], [90.5, 478.0], [90.6, 480.0], [90.7, 481.0], [90.8, 482.0], [90.9, 484.0], [91.0, 486.0], [91.1, 487.0], [91.2, 488.0], [91.3, 490.0], [91.4, 491.0], [91.5, 493.0], [91.6, 494.0], [91.7, 497.0], [91.8, 498.0], [91.9, 499.0], [92.0, 500.0], [92.1, 501.0], [92.2, 503.0], [92.3, 505.0], [92.4, 508.0], [92.5, 511.0], [92.6, 513.0], [92.7, 516.0], [92.8, 523.0], [92.9, 527.0], [93.0, 532.0], [93.1, 534.0], [93.2, 545.0], [93.3, 549.0], [93.4, 552.0], [93.5, 565.0], [93.6, 568.0], [93.7, 573.0], [93.8, 580.0], [93.9, 585.0], [94.0, 595.0], [94.1, 608.0], [94.2, 614.0], [94.3, 625.0], [94.4, 631.0], [94.5, 637.0], [94.6, 647.0], [94.7, 653.0], [94.8, 659.0], [94.9, 665.0], [95.0, 671.0], [95.1, 676.0], [95.2, 680.0], [95.3, 684.0], [95.4, 688.0], [95.5, 693.0], [95.6, 698.0], [95.7, 702.0], [95.8, 705.0], [95.9, 710.0], [96.0, 712.0], [96.1, 715.0], [96.2, 719.0], [96.3, 721.0], [96.4, 726.0], [96.5, 727.0], [96.6, 731.0], [96.7, 735.0], [96.8, 741.0], [96.9, 745.0], [97.0, 753.0], [97.1, 756.0], [97.2, 759.0], [97.3, 766.0], [97.4, 774.0], [97.5, 781.0], [97.6, 787.0], [97.7, 791.0], [97.8, 800.0], [97.9, 809.0], [98.0, 819.0], [98.1, 832.0], [98.2, 839.0], [98.3, 846.0], [98.4, 859.0], [98.5, 870.0], [98.6, 882.0], [98.7, 892.0], [98.8, 901.0], [98.9, 916.0], [99.0, 943.0], [99.1, 993.0], [99.2, 1112.0], [99.3, 2002.0], [99.4, 2837.0], [99.5, 2962.0], [99.6, 3068.0], [99.7, 3112.0], [99.8, 3164.0], [99.9, 3220.0]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4064.0, "series": [{"data": [[0.0, 4064.0], [600.0, 116.0], [700.0, 157.0], [800.0, 73.0], [900.0, 24.0], [1000.0, 5.0], [1100.0, 1.0], [1300.0, 1.0], [100.0, 1135.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 1.0], [2100.0, 1.0], [2800.0, 7.0], [2900.0, 7.0], [3000.0, 13.0], [3100.0, 14.0], [200.0, 510.0], [3200.0, 3.0], [3300.0, 1.0], [4100.0, 1.0], [4200.0, 2.0], [4400.0, 1.0], [300.0, 480.0], [400.0, 503.0], [500.0, 150.0]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 57.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6700.0, "series": [{"data": [[0.0, 6700.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 519.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 57.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.9444444444444444, "minX": 1.62768434E12, "maxY": 85.44218134034152, "series": [{"data": [[1.62768442E12, 1.9444444444444444], [1.62768441E12, 76.122632103689], [1.6276844E12, 85.44218134034152], [1.62768439E12, 21.95983662355342], [1.62768438E12, 11.645627376425855], [1.62768437E12, 7.251020408163267], [1.62768436E12, 5.3099236641221434], [1.62768435E12, 3.284789644012943], [1.62768434E12, 20.0]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62768442E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 41.0, "minX": 1.0, "maxY": 1589.5777777777778, "series": [{"data": [[2.0, 48.79775280898876], [3.0, 55.370656370656356], [4.0, 49.712765957446784], [5.0, 52.480519480519455], [6.0, 57.20322580645162], [7.0, 55.90494791666674], [8.0, 57.15533980582522], [9.0, 62.59130434782606], [10.0, 61.0813008130081], [11.0, 56.17261904761907], [12.0, 70.83393501805052], [13.0, 75.98613518197573], [14.0, 95.9041095890411], [15.0, 93.0], [16.0, 112.52054794520551], [17.0, 55.06249999999998], [18.0, 120.10344827586209], [19.0, 101.46666666666665], [20.0, 193.28571428571428], [21.0, 125.60130718954251], [22.0, 102.0], [23.0, 158.15384615384622], [24.0, 124.0], [25.0, 129.25], [26.0, 137.0], [27.0, 171.4937499999999], [28.0, 144.8], [29.0, 182.79870129870127], [30.0, 115.66666666666666], [31.0, 192.88235294117646], [32.0, 154.33333333333334], [33.0, 176.25], [34.0, 214.11875000000015], [35.0, 75.3625], [36.0, 190.83333333333334], [37.0, 166.4], [38.0, 217.8181818181818], [39.0, 72.0], [41.0, 215.83333333333334], [40.0, 72.0], [42.0, 217.0], [43.0, 80.0], [44.0, 283.95238095238113], [45.0, 285.38461538461536], [46.0, 187.5], [47.0, 63.0], [48.0, 246.71428571428575], [49.0, 295.625], [50.0, 309.5], [51.0, 261.0], [52.0, 274.77777777777777], [53.0, 346.5487804878051], [54.0, 392.0], [55.0, 238.5], [56.0, 351.7777777777779], [57.0, 312.77777777777777], [58.0, 299.2], [59.0, 212.0], [60.0, 183.0], [61.0, 326.3636363636363], [62.0, 320.0], [63.0, 330.3333333333333], [64.0, 362.95], [65.0, 267.3333333333333], [66.0, 422.0909090909091], [67.0, 325.0], [68.0, 366.8], [69.0, 383.44444444444446], [70.0, 332.4], [71.0, 133.9718309859155], [72.0, 387.77777777777777], [73.0, 431.84615384615387], [74.0, 372.06896551724134], [75.0, 454.6648648648647], [76.0, 472.00000000000006], [78.0, 387.33333333333337], [79.0, 362.4137931034483], [77.0, 116.0], [80.0, 402.92307692307696], [81.0, 456.0], [82.0, 430.75], [83.0, 470.43750000000006], [84.0, 396.0], [85.0, 293.5], [86.0, 459.875], [87.0, 512.8771929824562], [88.0, 555.6666666666667], [89.0, 292.5], [90.0, 296.5], [91.0, 243.47619047619045], [92.0, 197.75], [93.0, 234.0], [95.0, 242.33333333333334], [94.0, 104.5], [96.0, 240.0], [97.0, 231.8], [98.0, 278.6666666666667], [99.0, 210.33333333333331], [100.0, 266.5], [101.0, 266.6666666666667], [102.0, 298.5], [103.0, 286.0], [104.0, 299.45454545454544], [105.0, 306.6923076923076], [106.0, 319.6666666666667], [107.0, 310.0], [108.0, 311.8], [109.0, 311.3333333333333], [110.0, 305.2], [111.0, 294.5], [112.0, 346.5789473684211], [113.0, 190.66666666666666], [114.0, 334.87499999999994], [115.0, 378.7142857142857], [116.0, 368.44444444444446], [117.0, 391.29999999999995], [118.0, 341.6], [119.0, 384.1428571428571], [120.0, 368.0], [121.0, 411.0], [122.0, 383.53846153846155], [123.0, 401.9166666666667], [124.0, 429.33333333333326], [125.0, 462.85714285714283], [126.0, 449.5], [127.0, 407.0], [128.0, 402.59999999999997], [129.0, 437.1111111111111], [130.0, 422.125], [131.0, 459.16666666666663], [132.0, 441.1000000000001], [133.0, 1589.5777777777778], [134.0, 1460.4925373134329], [135.0, 575.0], [136.0, 1427.923076923077], [137.0, 709.9285714285716], [138.0, 674.4583333333333], [139.0, 732.3], [140.0, 447.0], [141.0, 807.2068965517241], [142.0, 636.6979695431469], [1.0, 41.0]], "isOverall": false, "label": "Sunstar Search", "isController": false}, {"data": [[36.340159428257344, 200.27322704782856]], "isOverall": false, "label": "Sunstar Search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 142.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 97.5, "minX": 1.62768434E12, "maxY": 1081989.8, "series": [{"data": [[1.62768442E12, 12796.2], [1.62768441E12, 713032.7], [1.6276844E12, 1081989.8], [1.62768439E12, 1044312.1], [1.62768438E12, 934833.5], [1.62768437E12, 696682.0], [1.62768436E12, 465639.5], [1.62768435E12, 219668.1], [1.62768434E12, 3554.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62768442E12, 351.0], [1.62768441E12, 19558.5], [1.6276844E12, 29679.0], [1.62768439E12, 28645.5], [1.62768438E12, 25642.5], [1.62768437E12, 19110.0], [1.62768436E12, 12772.5], [1.62768435E12, 6025.5], [1.62768434E12, 97.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62768442E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 42.166666666666664, "minX": 1.62768434E12, "maxY": 497.9737187910651, "series": [{"data": [[1.62768442E12, 42.166666666666664], [1.62768441E12, 294.1814556331007], [1.6276844E12, 497.9737187910651], [1.62768439E12, 142.24778761061944], [1.62768438E12, 63.355893536121705], [1.62768437E12, 57.37551020408164], [1.62768436E12, 54.967938931297724], [1.62768435E12, 57.446601941747595], [1.62768434E12, 238.2]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62768442E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 42.0, "minX": 1.62768434E12, "maxY": 497.3002628120893, "series": [{"data": [[1.62768442E12, 42.0], [1.62768441E12, 293.69690927218346], [1.6276844E12, 497.3002628120893], [1.62768439E12, 141.99387338325386], [1.62768438E12, 63.1231939163498], [1.62768437E12, 57.097959183673474], [1.62768436E12, 54.59694656488548], [1.62768435E12, 57.009708737864116], [1.62768434E12, 236.8]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62768442E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 33.388888888888886, "minX": 1.62768434E12, "maxY": 477.3114323258873, "series": [{"data": [[1.62768442E12, 33.388888888888886], [1.62768441E12, 276.3718843469592], [1.6276844E12, 477.3114323258873], [1.62768439E12, 130.53641933287955], [1.62768438E12, 53.02813688212929], [1.62768437E12, 47.3857142857143], [1.62768436E12, 45.0992366412214], [1.62768435E12, 47.24271844660195], [1.62768434E12, 220.4]], "isOverall": false, "label": "Sunstar Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62768442E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 38.0, "minX": 1.62768434E12, "maxY": 4425.0, "series": [{"data": [[1.62768442E12, 48.0], [1.62768441E12, 4425.0], [1.6276844E12, 3354.0], [1.62768439E12, 337.0], [1.62768438E12, 154.0], [1.62768437E12, 143.0], [1.62768436E12, 156.0], [1.62768435E12, 165.0], [1.62768434E12, 705.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62768442E12, 39.0], [1.62768441E12, 38.0], [1.6276844E12, 68.0], [1.62768439E12, 47.0], [1.62768438E12, 40.0], [1.62768437E12, 38.0], [1.62768436E12, 40.0], [1.62768435E12, 41.0], [1.62768434E12, 86.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62768442E12, 46.2], [1.62768441E12, 799.0], [1.6276844E12, 695.8000000000002], [1.62768439E12, 213.0], [1.62768438E12, 87.0], [1.62768437E12, 79.0], [1.62768436E12, 73.0], [1.62768435E12, 76.0], [1.62768434E12, 705.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62768442E12, 48.0], [1.62768441E12, 1783.1600000000026], [1.6276844E12, 3134.7799999999997], [1.62768439E12, 272.29999999999995], [1.62768438E12, 114.83999999999992], [1.62768437E12, 105.32999999999959], [1.62768436E12, 95.43999999999994], [1.62768435E12, 152.4999999999999], [1.62768434E12, 705.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62768442E12, 48.0], [1.62768441E12, 890.8], [1.6276844E12, 758.8499999999999], [1.62768439E12, 232.0], [1.62768438E12, 96.0], [1.62768437E12, 88.0], [1.62768436E12, 82.0], [1.62768435E12, 112.0], [1.62768434E12, 705.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62768442E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 41.0, "minX": 1.0, "maxY": 781.0, "series": [{"data": [[5.0, 130.0], [14.0, 132.0], [15.0, 41.0], [20.0, 64.5], [24.0, 49.0], [27.0, 41.0], [28.0, 54.0], [30.0, 48.0], [35.0, 52.5], [38.0, 48.0], [41.0, 45.0], [44.0, 48.0], [51.0, 55.0], [55.0, 55.0], [54.0, 44.5], [57.0, 49.0], [60.0, 50.0], [64.0, 50.0], [66.0, 47.5], [71.0, 48.0], [69.0, 44.0], [74.0, 51.0], [76.0, 54.5], [81.0, 53.0], [82.0, 59.5], [84.0, 57.0], [88.0, 51.0], [90.0, 52.5], [94.0, 50.0], [96.0, 53.0], [101.0, 49.0], [103.0, 56.0], [104.0, 46.0], [106.0, 61.5], [110.0, 63.5], [114.0, 63.5], [116.0, 57.0], [123.0, 59.0], [122.0, 53.5], [125.0, 53.0], [128.0, 53.0], [135.0, 58.0], [133.0, 69.0], [131.0, 92.0], [142.0, 56.5], [140.0, 110.0], [141.0, 114.0], [139.0, 308.0], [144.0, 76.0], [147.0, 69.0], [148.0, 122.0], [150.0, 303.0], [145.0, 268.0], [157.0, 261.0], [152.0, 338.5], [159.0, 441.0], [161.0, 454.0], [169.0, 481.0], [177.0, 781.0], [218.0, 415.5], [1.0, 41.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 218.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 41.0, "minX": 1.0, "maxY": 781.0, "series": [{"data": [[5.0, 130.0], [14.0, 126.5], [15.0, 41.0], [20.0, 64.0], [24.0, 49.0], [27.0, 41.0], [28.0, 53.5], [30.0, 47.0], [35.0, 52.5], [38.0, 48.0], [41.0, 45.0], [44.0, 48.0], [51.0, 54.0], [55.0, 54.0], [54.0, 44.0], [57.0, 49.0], [60.0, 49.5], [64.0, 50.0], [66.0, 47.0], [71.0, 48.0], [69.0, 44.0], [74.0, 51.0], [76.0, 54.0], [81.0, 53.0], [82.0, 59.0], [84.0, 57.0], [88.0, 50.5], [90.0, 52.0], [94.0, 50.0], [96.0, 52.0], [101.0, 48.0], [103.0, 56.0], [104.0, 46.0], [106.0, 60.5], [110.0, 62.0], [114.0, 63.0], [116.0, 56.5], [123.0, 59.0], [122.0, 52.5], [125.0, 53.0], [128.0, 52.5], [135.0, 57.0], [133.0, 68.0], [131.0, 92.0], [142.0, 56.0], [140.0, 110.0], [141.0, 113.0], [139.0, 308.0], [144.0, 76.0], [147.0, 68.0], [148.0, 121.5], [150.0, 303.0], [145.0, 268.0], [157.0, 261.0], [152.0, 338.0], [159.0, 441.0], [161.0, 454.0], [169.0, 480.0], [177.0, 781.0], [218.0, 415.5], [1.0, 41.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 218.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.62768434E12, "maxY": 161.8, "series": [{"data": [[1.62768442E12, 1.7], [1.62768441E12, 87.0], [1.6276844E12, 161.8], [1.62768439E12, 149.7], [1.62768438E12, 131.7], [1.62768437E12, 98.3], [1.62768436E12, 65.7], [1.62768435E12, 31.2], [1.62768434E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62768442E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.62768434E12, "maxY": 152.2, "series": [{"data": [[1.62768442E12, 1.8], [1.62768441E12, 100.3], [1.6276844E12, 152.2], [1.62768439E12, 146.9], [1.62768438E12, 131.5], [1.62768437E12, 98.0], [1.62768436E12, 65.5], [1.62768435E12, 30.9], [1.62768434E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.62768442E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.62768434E12, "maxY": 152.2, "series": [{"data": [[1.62768442E12, 1.8], [1.62768441E12, 100.3], [1.6276844E12, 152.2], [1.62768439E12, 146.9], [1.62768438E12, 131.5], [1.62768437E12, 98.0], [1.62768436E12, 65.5], [1.62768435E12, 30.9], [1.62768434E12, 0.5]], "isOverall": false, "label": "Sunstar Search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62768442E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.62768434E12, "maxY": 152.2, "series": [{"data": [[1.62768442E12, 1.8], [1.62768441E12, 100.3], [1.6276844E12, 152.2], [1.62768439E12, 146.9], [1.62768438E12, 131.5], [1.62768437E12, 98.0], [1.62768436E12, 65.5], [1.62768435E12, 30.9], [1.62768434E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.62768442E12, "title": "Total Transactions Per Second"}},
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

