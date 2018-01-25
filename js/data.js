'use strict';


var data = [
    [
        {type: 'ss', color: 'green', index: null},
        {type: 'ss', color: 'green', index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'track', color: null, index: 19},
        {type: 'track', color: null, index: 20},
        {type: 'track', color: 'blue', index: 21},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'ss', color: 'blue', index: null},
        {type: 'ss', color: 'blue', index: null},
    ], [
        {type: 'ss', color: 'green', index: null},
        {type: 'ss', color: 'green', index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'track', color: null, index: 18},
        {type: 'home', color: 'blue', index: 49},
        {type: 'track', color: null, index: 22},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'ss', color: 'blue', index: null},
        {type: 'ss', color: 'blue', index: null},
    ], [
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'track', color: null, index: 17},
        {type: 'home', color: 'blue', index: 50},
        {type: 'track', color: null, index: 23},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
    ], [
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'track', color: null, index: 16},
        {type: 'home', color: 'blue', index: 51},
        {type: 'track', color: null, index: 24},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
    ], [
        {type: 'track', color: 'green', index: 11},
        {type: 'track', color: null, index: 12},
        {type: 'track', color: null, index: 13},
        {type: 'track', color: null, index: 14},
        {type: 'track', color: null, index: 15},
        {type: 'home', color: 'blue', index: 52},
        {type: 'track', color: null, index: 25},
        {type: 'track', color: null, index: 26},
        {type: 'track', color: null, index: 27},
        {type: 'track', color: null, index: 28},
        {type: 'track', color: null, index: 29},
    ], [
        {type: 'track', color: null, index: 10},
        {type: 'home', color: 'green', index: 45},
        {type: 'home', color: 'green', index: 46},
        {type: 'home', color: 'green', index: 47},
        {type: 'home', color: 'green', index: 48},
        {type: null, color: null, index: null},
        {type: 'home', color: 'yellow', index: 56},
        {type: 'home', color: 'yellow', index: 55},
        {type: 'home', color: 'yellow', index: 54},
        {type: 'home', color: 'yellow', index: 53},
        {type: 'track', color: null, index: 30},
    ], [
        {type: 'track', color: null, index: 9},
        {type: 'track', color: null, index: 8},
        {type: 'track', color: null, index: 7},
        {type: 'track', color: null, index: 6},
        {type: 'track', color: null, index: 5},
        {type: 'home', color: 'red', index: 44},
        {type: 'track', color: null, index: 35},
        {type: 'track', color: null, index: 34},
        {type: 'track', color: null, index: 33},
        {type: 'track', color: null, index: 32},
        {type: 'track', color: 'yellow', index: 31},
    ], [
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'track', color: null, index: 4},
        {type: 'home', color: 'red', index: 43},
        {type: 'track', color: null, index: 36},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
    ], [
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'track', color: null, index: 3},
        {type: 'home', color: 'red', index: 42},
        {type: 'track', color: null, index: 37},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
    ], [
        {type: 'ss', color: 'red', index: null},
        {type: 'ss', color: 'red', index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'track', color: null, index: 2},
        {type: 'home', color: 'red', index: 41},
        {type: 'track', color: null, index: 38},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'ss', color: 'yellow', index: null},
        {type: 'ss', color: 'yellow', index: null},
    ], [
        {type: 'ss', color: 'red', index: null},
        {type: 'ss', color: 'red', index: null},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'track', color: 'red', index: 1},
        {type: 'track', color: null, index: 40},
        {type: 'track', color: null, index: 39},
        {type: null, color: null, index: null},
        {type: null, color: null, index: null},
        {type: 'ss', color: 'yellow', index: null},
        {type: 'ss', color: 'yellow', index: null},
    ]
];