const { contextBridge } = require("electron");

const KEY = "mar1_bookings";

const read = function () {
  try {
    return JSON.parse(window.localStorage.getItem(KEY)) || [];
  } catch (e) {
    return [];
  }
};

const write = function (list) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
};

contextBridge.exposeInMainWorld("bookings", {
  list: read,
  save: function (booking) {
    var list = read();
    var i = list.findIndex(function (x) { return x.id === booking.id; });
    if (i > -1) { list[i] = booking; write(list); }
    return list;
  },
  remove: function (id) {
    var list = read().filter(function (x) { return x.id !== id; });
    write(list);
    return list;
  },
  clear: function () {
    window.localStorage.removeItem(KEY);
    return [];
  }
});
