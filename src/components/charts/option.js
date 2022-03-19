let optionA = {
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 3350,
            name: '直接访问'
          },
          {
            value: 234,
            name: '联盟广告'
          },
          {
            value: 1548,
            name: '搜索引擎'
          }
        ],
        label: {
            normal: {
              show: true,
              fontSize: 14,
              color: 'auto'
            }
          }

      }
    ]
};
let optionB = {

    tooltip: {
      trigger: 'axis'
    },
    radar: [
      {
        indicator: [
          { text: 'Brand', max: 100 },
          { text: 'Content', max: 100 },
          { text: 'Usability', max: 100 },
          { text: 'Function', max: 100 },
          { text: 'Function', max: 100 },
        ],
        
        radius: 80,
        axisName: {
            color: '#636e72'
        }
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
            name: 'A Software'
          }
        ]
      },
     
    
    ]
  };
export {
    optionA,
    optionB
}; 