"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getResult = exports.randomInteger = void 0;
var heroes = require('../../data/heroes.json');
var items = require('../../data/items.json');
var boots = require('../../data/boots.json');
var randomInteger = function (min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};
exports.randomInteger = randomInteger;
var getHero = function (attrs) {
    var hero = heroes[exports.randomInteger(0, heroes.length - 1)];
    for (var i = 0; i < heroes.length; i += 1) {
        if (attrs.includes(hero.attr)) {
            break;
        }
        hero = heroes[exports.randomInteger(0, heroes.length - 1)];
    }
    var talents = [
        exports.randomInteger(0, 1),
        exports.randomInteger(2, 3),
        exports.randomInteger(4, 5),
        exports.randomInteger(6, 7),
    ];
    return __assign(__assign({}, hero), { talents: talents.map(function (i) { return hero.talents[i]; }) });
};
var getBoot = function () { return boots[exports.randomInteger(0, boots.length - 1)]; };
var getItems = function () {
    if (items.length < 5) {
        return [];
    }
    var indexes = [];
    var index;
    do {
        index = exports.randomInteger(0, items.length - 1);
        if (!indexes.includes(index)) {
            indexes.push(index);
        }
    } while (indexes.length < 5);
    return indexes.map(function (i) { return items[i]; });
};
var getResult = function (attrs) { return ({
    hero: getHero(attrs),
    boot: getBoot(),
    items: getItems()
}); };
exports.getResult = getResult;
