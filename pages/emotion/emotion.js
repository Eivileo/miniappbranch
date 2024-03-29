// pages/emotion/emotion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    show: 0,
    bardata: [
      {
        text: "树洞哇",
        itemnum: 0,
        on: 0
      },
      {
        text: "吐槽吧",
        itemnum: 1,
        on: 0
      }
    ]
  },
  sectiondata: [
    /**
     * 第一列数据
     */
    [
      {
        eimg: "../../image/ting.png",
        etext: "A beautiful girl called yuting",
        userlogo: "../../image/ting.png",
        username: "Zhou Yuting"
      }
    ],
    /**
     * 第二列数据
     */
    [
      {
        eimg: "../../image/ting2.png",
        etext: "A beautiful girl called liting",
        userlogo: "../../image/ting2.png",
        username: "Zhu Liting"
      }
    ]
  ],
  // 事件处理函数
  bartap: function (e) {
    let index = e.currentTarget.dataset.itemnum;
    let bararr = this.data.bardata;
    for (let i of bararr) {
      i.on = index;
    }
    this.setData({
      bardata: bararr,
      show: index
    });
    console.log(bararr);
  }
})
