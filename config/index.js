export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wx55a2c121d48f3b79  ",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "0a75aca6b3d4218191e2630df7b574a8",
  TEMPLATE_ID:"OFVNkwvc_W23DtSX9wFQEyNx5FVtobqli8PG_8U3yZU	",
  USERS:{"oGvB-6VDmh-ZJacMXMdmklBAKYXs,oGvB-6XwHzR7aH3YXM05M_HVm67o"},
  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,
    city:true,
    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },

  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "代号303号宇航员将永远对Dawn进行守望",
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "宝贝",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oGvB-6VDmh-ZJacMXMdmklBAKYXs",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "OFVNkwvc_W23DtSX9wFQEyNx5FVtobqli8PG_8U3yZU",
      // 所在省份
      province: "贵州",
      // 所在城市
      city: "安顺",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '12-27',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2021-11-27"},
       
      ]
    },
    {
      name: "宝贝",
      id: "oGvB-6VDmh-ZJacMXMdmklBAKYXs",
      useTemplateId: "OFVNkwvc_W23DtSX9wFQEyNx5FVtobqli8PG_8U3yZU",
      province: "贵州",
      city: "安顺",
      openUrl: "https://wangxinleo.cn",
      festivals: [],
      customizedDateList: []
    },
   
    
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "OFVNkwvc_W23DtSX9wFQEyNx5FVtobqli8PG_8U3yZU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "Dawn",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oGvB-6XwHzR7aH3YXM05M_HVm67o",
    },
    // 你可以不断按格式往下增加
    // ...
  ],



 
