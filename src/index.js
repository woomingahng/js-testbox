var initialData = [
  {
    ID: 1,
    FirstName: "Sally"
  },
  {
    ID: 2,
    FirstName: "Jim"
  },
  {
    ID: 3,
    FirstName: "Bob"
  }
];

var newData = [
  {
    ID: 2,
    FirstName: "Jim"
  },
  {
    ID: 4,
    FirstName: "Tom"
  },
  {
    ID: 5,
    FirstName: "George"
  }
];

var ids = initialData.reduce((map, cur) => {
  map[cur.ID] = "x";
  return map;
}, {});
console.log(ids);
var merged = [...initialData, ...newData.filter((d) => !ids[d.ID])];

console.log(merged);
