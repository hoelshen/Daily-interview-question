function toTree(arr) {
  let tree = {};
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i]['name'];
    delete arr[i].name;
    tree[name] = arr[i];
  }
  for (let i in tree) {
    if (tree[i]['parent_ind']) {
      console.log('sad', tree[i])
      tree[tree[i]['parent_ind']][i] = tree[i];

      delete tree[i]['parent_ind'];
    }
  }
  console.log('tree', tree)

  for (const key in tree) {
    console.log('key: ', key);
    return {
      [key]: tree[key]
    };
  }
}

const industry_list = [{
    parent_ind: "女装",
    name: "连衣裙"
  },
  {
    name: "女装"
  },
  {
    parent_ind: "女装",
    name: "半身裙"
  },
  {
    parent_ind: "女装",
    name: "A字裙"
  },
  {
    name: "数码"
  },
  {
    parent_ind: "数码",
    name: "电脑配件"
  },
  {
    parent_ind: "电脑配件",
    name: "内存"
  }
]

console.log('toTree', toTree(industry_list))