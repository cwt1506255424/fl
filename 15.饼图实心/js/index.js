$(document).ready(function() {
		//页面交互、数据
		var myChart1 = echarts.init(document.getElementById('echarts_data1'));
		var rightDatas = [
			{
				'name': '火警',
				'value': 8
			  },
			  {
				'name': '故障',
				'value': 20
			  },
			  {
				'name': '反馈',
				'value': 22
			  }
	];
	var data = [
		{
			'name': '火警',
			'value': 8
		  },
		  {
			'name': '故障',
			'value': 20
		  },
		  {
			'name': '反馈',
			'value': 22
		  }
];
	let rightDataArr = [];
	rightDatas.map((item)=>{
	  rightDataArr.push(item.name);
	});


// 数据整理
let total = data.reduce((a, b) => {
    return a + b.value
}, 0);
	arrName = getArrayValue(data, "name");
	arrValue = getArrayValue(data, "value");

	function getArrayValue(array, key) {
		var key = key || "value";
		var res = [];
		if (array) {
			array.forEach(function(t) {
				res.push(t[key]);
			});
		}
		return res;
	}












	objData = array2obj(data, "name");
	console.log(objData)
	function array2obj(array, key) {
		var resObj = {};
		for (var i = 0; i < array.length; i++) {
			resObj[array[i][key]] = array[i];
		}
		return resObj;
	}
		var total_rightDatas = 0;
		for (var i = 0; i < rightDatas.length; i++) {
			total_rightDatas += rightDatas[i].value;
		}

		function echart1() {
			var option1 = {
				legend: {
					orient: 'vertical',
					x: '85%',
					y: 'bottom',   
					// data: arrName,
					// data:rightDataArr,
					icon: 'circle',
					// textStyle: {
					//   color: '#6ccce1',
					//   fontSize: 14,
					// }, 
					textStyle: {
						fontSize: 14,
						rich: {
							name: {
								color: "#333333",
								padding: [10, 5, 30, 5],
								// align: 'right'
								// width: 60
							},
							percent: {
								fontSize: 18,
								padding: [0, 5, 0, 5],
								// align: 'right'
							}
						}
					},
					// formatter: function(name) {
					// 	return  name +(objData[name].value) 
					// },
					formatter: function(name) {
						let res = data.filter(v => v.name === name);
						let percent = ((res[0].value * 100) / total).toFixed(2);
						return (
							"{name| " + name + "}\n{percent|" + percent + "%}"
						);
					},
					// formatter: function(params) {
					// 	console.log(params)
					// 	let item = objData[params];
					// 	console.log(item)
					// 	return item.name +'\n'+item.value;
					// },
				  },
				  color: ['#9b6dd9', '#5cd97b', '#d8ce4b', '#5992d7', '#62fefa'],

				grid: {
					bottom: 150,
					left: 100,
					right: '10%'
				},
			
				tooltip: {
					formatter:function (parms){
						var str= `${parms.marker}${parms.data.name}:${parms.data.value}人(${parms.percent}%)`
						  return str ;
					  },
				},
				series: [
					// 主要展示层的
					{
						radius: ['0', '110'],
						type: 'pie',
						label: {
							
							normal: {
								show: true,
								formatter: (params)=>{
									return params.percent+'%';
								},
								textStyle: {
									fontSize: 16,
								},
								position: 'outside'
							},
							emphasis: {
								show: true
							}
						},
						name: "信息统计",
						clockWise:false,　　　　　　//默认逆时针
						startAngle: 100, //起始角度
						// avoidLabelOverlap: true,
						data: rightDatas,
					},
				]
			};
			
			myChart1.setOption(option1);
		};
		echart1();
		
});