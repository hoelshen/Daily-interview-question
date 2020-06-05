const R = require('ramda')
const mocha = require('mocha')

const expectData = {
  ageLt18: [{
      name: "Uktg",
      age: 17
    },
    {
      name: "3U5",
      age: 17
    },
    {
      name: "Hu8M",
      age: 17
    },
    {
      name: "Z2d",
      age: 17
    },
    {
      name: "n0ap",
      age: 17
    },
    {
      name: "ptTc",
      age: 17
    },
    {
      name: "Hqn",
      age: 17
    },
    {
      name: "QC3",
      age: 17
    }
  ],
  males: [{
      sex: "M",
      name: "vyo",
      age: 18,
      grade: 72
    },
    {
      sex: "M",
      name: "Uktg",
      age: 17,
      grade: 86
    },
    {
      sex: "M",
      name: "3U5",
      age: 17,
      grade: 82
    },
    {
      sex: "M",
      name: "OVfZ",
      age: 19,
      grade: 54
    },
    {
      sex: "M",
      name: "5Rx",
      age: 18,
      grade: 92
    },
    {
      sex: "M",
      name: "8GPC",
      age: 18,
      grade: 79
    },
    {
      sex: "M",
      name: "Z2d",
      age: 17,
      grade: 82
    },
    {
      sex: "M",
      name: "QyKY",
      age: 19,
      grade: 59
    },
    {
      sex: "M",
      name: "VT1",
      age: 19,
      grade: 89
    },
    {
      sex: "M",
      name: "ptTc",
      age: 17,
      grade: 65
    },
    {
      sex: "M",
      name: "Xvhf",
      age: 18,
      grade: 65
    },
    {
      sex: "M",
      name: "wOR",
      age: 19,
      grade: 78
    },
    {
      sex: "M",
      name: "Hqn",
      age: 17,
      grade: 74
    }
  ],
  top10: [{
      name: "5Rx",
      grade: 92
    },
    {
      name: "VT1",
      grade: 89
    },
    {
      name: "gZW",
      grade: 87
    },
    {
      name: "Uktg",
      grade: 86
    },
    {
      name: "3U5",
      grade: 82
    },
    {
      name: "Z2d",
      grade: 82
    },
    {
      name: "NqXw",
      grade: 79
    },
    {
      name: "8GPC",
      grade: 79
    },
    {
      name: "wOR",
      grade: 78
    },
    {
      name: "jXgh",
      grade: 77
    }
  ]
};

const data = [{
    sex: "M",
    name: "vyo",
    age: 18,
    grade: 72
  },
  {
    sex: "M",
    name: "Uktg",
    age: 17,
    grade: 86
  },
  {
    sex: "F",
    name: "gZW",
    age: 18,
    grade: 87
  },
  {
    sex: "F",
    name: "NqXw",
    age: 19,
    grade: 79
  },
  {
    sex: "M",
    name: "3U5",
    age: 17,
    grade: 82
  },
  {
    sex: "M",
    name: "OVfZ",
    age: 19,
    grade: 54
  },
  {
    sex: "F",
    name: "Hu8M",
    age: 17,
    grade: 62
  },
  {
    sex: "M",
    name: "5Rx",
    age: 18,
    grade: 92
  },
  {
    sex: "M",
    name: "8GPC",
    age: 18,
    grade: 79
  },
  {
    sex: "M",
    name: "Z2d",
    age: 17,
    grade: 82
  },
  {
    sex: "M",
    name: "QyKY",
    age: 19,
    grade: 59
  },
  {
    sex: "M",
    name: "VT1",
    age: 19,
    grade: 89
  },
  {
    sex: "F",
    name: "n0ap",
    age: 17,
    grade: 58
  },
  {
    sex: "M",
    name: "ptTc",
    age: 17,
    grade: 65
  },
  {
    sex: "M",
    name: "Xvhf",
    age: 18,
    grade: 65
  },
  {
    sex: "F",
    name: "uMe1",
    age: 18,
    grade: 56
  },
  {
    sex: "F",
    name: "jXgh",
    age: 18,
    grade: 77
  },
  {
    sex: "M",
    name: "wOR",
    age: 19,
    grade: 78
  },
  {
    sex: "M",
    name: "Hqn",
    age: 17,
    grade: 74
  },
  {
    sex: "F",
    name: "QC3",
    age: 17,
    grade: 59
  }
];
const {
  curry,
  pipe,
  filter,
  prop,
  lt
} = R;
const log = R.tap(console.log);
// code here

// :: [a] -> [b] 
const getAgeUnder18 = arr => {
  // :: [a.name < 18]  -> [a]
  const min = arr.filter( item => { return item.age < 18})
  console.log('min: ', min);
  const nameAge = min.filter(item => ({...item.name , ...item.age}) )
  console.log('nameAge: ', nameAge);
  return nameAge
};

getAgeUnder18(data)
// :: [a] -> [a]
const getMales = arr => [];


// :: String -> Number -> [Object] -> [Object]
const updateUsersGradeByName = curry((name, grade, arr) => []);


// :: [a] -> [b]
const getGradeTop10 = arr => [];




mocha.setup("bdd");
var assert = chai.assert;

describe("Test", function () {
  it("1. 获取所有年龄小于18岁的对象，并返回他们的名称和年龄", function () {
    const result = getAgeUnder18(data);
    assert.deepEqual(result, expectData.ageLt18);
  });

  it("2. 查找所有男性用户", function () {
    const result = getMales(data);
    assert.deepEqual(result, expectData.males);
  });


  it("3. 更新一个指定名称用户的成绩", function () {
    const result = updateUsersGradeByName('QC3', 100, data);
    const getGrade = R.pipe(R.find(R.propEq('name', 'QC3')), R.prop('grade'));
    assert.deepEqual(getGrade(result), 100);
  });


  it("4. 取出成绩最高的10名，并返回他们的名称和分数", function () {
    const result = getGradeTop10(data);
    assert.deepEqual(result, expectData.top10);
  });

});

mocha.run();