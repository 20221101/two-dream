/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa8e3f3f0f8fa122f',
  
  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4e09847354a39dd4dcb6a5ba43ddcea0',

  PROVINCE: '河南',
  CITY: '许昌',
SWITCH: {
  oneTalk: true,
  horoscope: true,
},
  USERS: [{id:'oCP5y6DSfvLtkLnkTIrc8mS0ao_8',
          useTemplateId: '3TaJGwxV5mpafOvp08ZkAQ-dsQh0AvAIWzYdgj8X8h0',
          horoscopeDate: '12-27',
           festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小李同学', year: '2000', date: '11-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '小尚同学', year: '1999', date: '10-07',
        },
        {
          type: '节日', name: '过年', year: '2022', date: '01-22',
        },
      ],
            customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-11' },
        // 结婚纪念日
        { keyword: 'birthday_message.DATA', date: '2022-05-11' },
      ],
          },
    {
      // 想要发送的人的名字
      name: '小尚同学',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oCP5y6GalMA9xzDZmWZ_WJ6BhjYM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3TaJGwxV5mpafOvp08ZkAQ-dsQh0AvAIWzYdgj8X8h0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小李同学', year: '2000', date: '11-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '小尚同学', year: '1999', date: '10-07',
        },
        {
          type: '节日', name: '过年', year: '2022', date: '01-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-11' },
        // 结婚纪念日
        { keyword: 'birthday_message.DATA', date: '2022-05-11' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG
