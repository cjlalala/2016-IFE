var pageIndex;
var List;
var _quesNaire = JSON.parse(window.localStorage.getItem('_quesNaire'));
//得到该问卷的题目数组
$(document).ready(function(){
  pageIndex = dataHandle.getHash();
  List = _quesNaire[pageIndex].problem;
  dataHandle.addCanvas();
  dataHandle.showChart();
});

var dataHandle={
  //得到页面的哈希值，哈希值与问卷的id绑定
  getHash:function(){
    var thisId = window.location.hash;
    for(var item in _quesNaire){
      if('#'+_quesNaire[item].id == thisId){
        return item;
      }
    }
  },
  //为页面添加元素
  addCanvas:function(){
    var strChart = [];
    $('#listName').text(_quesNaire[pageIndex].name);
    for(var item in List){
      var num = parseInt(item) + 1;
      strChart.push("<div><h3>Q"+num+" "+List[item].title+"</h3><canvas id='problem_"+item+"' width='626px' height='266px'></canvas></div>");
    }
    $("#chartArea").html(strChart.join(""));
  },
  //显示图表
  showChart:function(){
    for(var item in List){
      var newId = 'problem_'+item;
      var myChart = echarts.init(document.getElementById(newId));
      if(List[item].type == 'radio'){
        var option = {
            backgroundColor: '#fff',
            title: {
                text: '单选题',
                subtext: '',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 20
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}:{c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                formatter: function() {
                    var oa = ['选项一','选项二','选项三','选项四','选项五'];
                    for (var i = 0; i < option.series[0].data.length; i++) {
                            return oa[i] + '     ';
                    }
                }
            },
            series: [{
                type: 'pie',
                selectedMode: 'single',
                radius: ['45%', '58%'],
                color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
                name: dataHandle.getAnswer(item),
                label: {
                    normal: {
                      formatter:'{c} ({d}%)',
                        textStyle: {
                            fontSize: 18,
                            color: '#235894'
                        }
                    }
                },
                labelLine: {
                   normal: {
                       lineStyle: {
                           color: '#235894'
                       }
                   }
                },
                data: dataHandle.randomData(List[item].answer,100)
            }]
        };
      }
      if(List[item].type == 'checkbox') {
        var colorList = ['#59c5a7', '#51b8fe', '#fa827d', '#ffa55d', '#9c7de1', '#5d9eff', '#ffdb5d', '#ee82ed', '#8fca5f', '#b995f5'];
        var option = {
                backgroundColor: '#fff',
                color: colorList,
                xAxis: {
                    type: 'category',
                    data: dataHandle.getAnswer(item),//x轴的数据是每个选项
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#51b8fe',
                            width: 2
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'red'
                        }
                    }
                },
                yAxis: {
                    name: '人数',
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: '#999'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#51b8fe',
                            width: 2
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    }
                },
                series: [{
                    name: '问卷结果分布图',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    data: dataHandle.randomData(List[item].answer,100),//根据选项的多少得到随机数据
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            offset: [0, -5],
                            textStyle: {
                                fontSize: 20
                            },
                            formatter: function(params) {
                                return params.data.name;
                            }
                        }
                    }
                }],
                barCategoryGap: '60%'
          };
      }
      if(List[item].type == 'textarea'){
        var option = {
              tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              series: [{
                  name: '用户属性',
                  type: 'pie',
                  radius: '55%',
                  center: ['45%', '50%'],
                  data: [{
                      value: parseInt(Math.random()*400),
                      name: '有效填写'
                  }, {
                      value: parseInt(Math.random()*150),
                      name: '无效填写'
                  }],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  },
                  itemStyle: {
                      normal: {
                          label: {
                              show: true,
                              //position:'inside',
                              formatter: '{b} : {c} ({d}%)',
                              textStyle: {
                                  fontSize: 20
                              },
                          }
                      },
                      labelLine: {
                          show: true
                      }
                    }
                }]
            };
      }
      myChart.setOption(option);
    }
  },
  //根据选项的多少生成随机数据
  randomData:function(len,count){
    var arr = [];
    for(var i in len){
      arr.push(parseInt(Math.random()*count));
    }
    return arr;
  },
  //得到选项的数组
  getAnswer:function(i){
    var arr = [];
    for(var key in List[i].answer){
      arr.push(List[i].answer[key])
    }
    return arr;
  }
}
