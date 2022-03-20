let optionA = {
  title: {
    text: '分类统计',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },

  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      label: {
        show: true,
        fontSize: 14,
        color: 'inherit'
      },

      center: ['50%', '60%']
    }
  ]
};
let optionB = {
  title: {
    text: '分类趋势',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  radar: [
    {
      indicator: [
        { name: 'Brand', max: 100 },
        { name: 'Content', max: 100 },
        { name: 'Usability', max: 100 },
        { name: 'Function', max: 100 },
        { name: 'Function', max: 100 },
      ],

      radius: 65,
      axisName: {
        color: '#636e72'
      },
      center: ['50%', '60%']

    }
  ],
  series: [
    {
      type: 'radar',
      tooltip: {
        trigger: 'item'
      },
      areaStyle: {},
      data: [
        {
          value: [60, 73, 85, 40],
          name: '分类情况'
        }
      ]
    },


  ]
};
let optionC = {

  title: {
    text: '当周博客频率',
    left: 'center'
  },

  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [1, 1, 1, 1, 1, 1, 1],
      type: 'line',
      smooth: true,

    }
  ],
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  }

};
export {
  optionA,
  optionB,
  optionC
};