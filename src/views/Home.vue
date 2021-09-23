<template>
	<div class="main">
		<div ref="chart1" class="chart"></div>
		<div ref="chart2" class="chart"></div>
		<div ref="chart3" class="chart"></div>
		<div ref="chart4" class="chart"></div>
		<div ref="chart5" class="chart"></div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue';
	import china from '@/assets/map/china.json';

	export default {
		name: 'Home',
		components: {
			HelloWorld
		},
		data() {
			return {
				//柱状图
				option_bar: {
					grid: {
						left: '15%',
						bottom: 30,
						width: 'auto',
						height: 'auto'
					},
					tooltip: {
						show: true,
						trigger: 'item'
					},
					legend: {
						show: true,
						top: 8,
						textStyle: {
							color: "#333",
						},
					},
					xAxis: {
						show: true,
						type: 'category',
						scale: false,
						axisLine: {
							show: true,
							lineStyle: {
								color: '#333',
								width: 1,
								type: 'solid'
							}
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: true
						},
						splitLine: {
							show: false
						}
					},
					yAxis: {
						show: true,
						type: 'value',
						scale: false,
						axisLine: {
							show: true,
							lineStyle: {
								color: '#333',
								width: 1,
								type: 'solid'
							}
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: true
						},
						splitLine: {
							show: true,
							lineStyle: {
								opacity: 0.5,
							},
						}
					},
					series: [{
						type: 'bar',
						seriesLayoutBy: 'row',
						showBackground: true,
						backgroundStyle: {
							color: '#876ED722',
						},
					}, {
						type: 'bar',
						seriesLayoutBy: 'row',
						label: {
							show: true,
							position: 'top',
						},
						itemStyle: {
							borderRadius: [100, 100, 0, 0]
						},
					}, {
						type: 'bar',
						seriesLayoutBy: 'row',
						stack: 'type',
					}, {
						type: 'bar',
						seriesLayoutBy: 'row',
						stack: 'type',
					}],
					textStyle: {
						color: "#333",
					},
					// color: ['#60D3F3', '#FF0000', '#FFCF00', '#28EF64'],
					dataset: {
						source: [
							['2016', '2017', '2018', '2019', '2020'],
							[40, 50, 55, 45, 60],
							[50, 50, 60, 70, 70],
							[20, 30, 25, 15, 50],
							[20, 20, 30, 30, 10]
						],
						dimensions: ['时间', '销量', '库存', '种类一', '种类二'],
						sourceHeader: false,
					},
				},
				//折线图
				option_line: {
					grid: {
						left: '15%',
						bottom: 30,
						width: 'auto',
						height: 'auto'
					},
					tooltip: {
						show: true,
						trigger: 'axis'
					},
					legend: {
						show: true,
						top: 8,
						textStyle: {
							color: "#333",
						},
					},
					xAxis: {
						show: true,
						type: 'time',
						scale: true,
						boundaryGap: ['10%', '10%'],
						axisLine: {
							show: true,
							lineStyle: {
								color: '#333',
								width: 1,
								type: 'solid'
							}
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: true,
							formatter: '{MM}-{dd}',
						},
						splitLine: {
							show: false
						},
					},
					yAxis: {
						show: true,
						type: 'value',
						scale: false,
						axisLine: {
							show: true,
							lineStyle: {
								color: '#333',
								width: 1,
								type: 'solid'
							}
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: true
						},
						splitLine: {
							show: true,
						}
					},
					series: [{
						type: 'line',
						seriesLayoutBy: 'row',
						step: 'middle',
						encode: {
							x: '时间',
							y: '阶段',
							seriesName: 1,
						},
					}, {
						type: 'line',
						seriesLayoutBy: 'row',
						smooth: true,
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#A9F16C' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#E3FB71' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						},
						encode: {
							x: '时间',
							y: '量能',
							seriesName: 2,
						},
					}],
					textStyle: {
						color: "#333",
					},
					// color: ['#2dc0e8', '#c9447e', '#d5d822', '#75d78a'],
					dataset: {
						source: [
							[this.$moment('2021-01-01').valueOf(), this.$moment('2021-01-02').valueOf(), this.$moment('2021-01-03').valueOf(),
								this.$moment('2021-01-04').valueOf(), this.$moment('2021-01-05').valueOf()
							],
							[1, 2, 3, 4, 3],
							[0.5, 0.8, 2, 2.8, 3.2]
						],
						dimensions: ['时间', '阶段', '量能'],
						sourceHeader: false,
					},
				},
				//饼图
				option_pie: {
					tooltip: {
						show: true,
						trigger: 'item'
					},
					legend: {
						show: true,
						left: 'center',
						top: 10,
						orient: 'horizontal',
						textStyle: {
							color: "#333",
						},
					},
					series: [{
						type: 'pie',
						seriesLayoutBy: 'row',
						center: ['50%', '55%'],
						radius: [0, '30%'],
					}, {
						type: 'pie',
						seriesLayoutBy: 'row',
						center: ['50%', '55%'],
						radius: ['50%', '70%'],
						itemStyle: {
							borderRadius: 10,
						},
						encode: {
							itemName: '种类',
							value: '油脂含量',
							seriesName: '油脂含量',
						},
					}],
					textStyle: {
						color: "#333",
					},
					// color: ['#FF0000', '#FF7400', '#28EF64', '#60D3F3'],
					dataset: {
						source: [
							['蛋糕一', '蛋糕二', '蛋糕三', '蛋糕四'],
							[2.3, 6.5, 0.5, 4.9],
							[0.1, 0.12, 0.15, 0.08]
						],
						dimensions: ['种类', '分量', '油脂含量'],
						sourceHeader: false,
					},
				},
				//地图
				option_map: {
					tooltip: {
						show: true,
						trigger: 'item'
					},
					visualMap: [{
						type: 'continuous',
						min: 0,
						max: 555,
						realtime: false,
						orient: 'horizontal',
						calculable: true,
						left: 10,
						bottom: 10,
						color: ['#f40', '#f90', '#39d'],
						textStyle: {
							color: "#333",
						},
					}],
					series: [{
						type: 'map',
						map: 'china',
						seriesLayoutBy: 'row',
						roam: true,
						label: {
							show: false,
							color: "#fb0",
						},
						itemStyle: {
							areaColor: '#eee',
							borderColor: '#777',
							borderType: 'dashed',
						},
						emphasis: {
							label: {
								show: true,
								color: "#fb0",
							},
							itemStyle: {
								areaColor: '#6ad',
							},
						},
						select: {
							label: {
								show: true,
								color: "#b93",
								formatter: '{a}:{c}'
							},
							itemStyle: {
								areaColor: '#257',
							},
						},
						datasetIndex: 0,
						encode: {
							itemName: '省份',
							value: '指数',
							seriesName: '指数',
						},
					}],
					textStyle: {
						color: "#333",
					},
					dataset: {
						source: [
							['江苏省', '西藏自治区', '黑龙江省'],
							[20, 319, 500],
						],
						dimensions: ['省份', '指数'],
						sourceHeader: false,
					},
				},
				//地图散点
				option_map_scatter: {
					geo: {
						show: true,
						map: 'china',
						roam: true,
						label: {
							show: false,
							color: '#f90',
						},
						itemStyle: {
							areaColor: '#777',
							borderColor: '#333',
						},
						emphasis: {
							label: {
								show: true,
								color: '#f90',
							},
							itemStyle: {
								areaColor: '#6ad',
								borderColor: '#257',
							},
						},
						selectedMode: false,
					},
					tooltip: {
						show: true,
						trigger: 'item'
					},
					series: [{
						type: 'scatter',
						coordinateSystem: 'geo',
						encode: {
							lng: 'lng',
							lat: 'lat',
							value: '热力',
						},
					}],
					textStyle: {
						color: "#333",
					},
					dataset: {
						source: [
							[121.15, 31.89, 90],
							[116.46, 39.92, 77],
						],
						dimensions: ['lng', 'lat', '热力'],
						sourceHeader: false,
					},
				},
			};
		},
		mounted() {
			this.chart1 = this.$echarts.init(this.$refs.chart1);
			this.chart1.setOption(this.option_bar);
			this.chart2 = this.$echarts.init(this.$refs.chart2);
			this.chart2.setOption(this.option_line);
			this.chart3 = this.$echarts.init(this.$refs.chart3);
			this.chart3.setOption(this.option_pie);
			this.$echarts.registerMap('china', china);
			this.chart4 = this.$echarts.init(this.$refs.chart4);
			this.chart4.setOption(this.option_map);
			this.chart5 = this.$echarts.init(this.$refs.chart5);
			this.chart5.setOption(this.option_map_scatter);
			common.mergeObj()
		}
	};
</script>

<style scoped lang="scss">
	.main {
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		overflow-y: auto;

		.chart {
			width: 400px;
			height: 300px;
			margin: 20px 30px;
			background-color: #eee;
			border-radius: 10px;
		}
	}
</style>
