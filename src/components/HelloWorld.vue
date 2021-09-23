<template>
	<div class="chart">
		{{JSON.stringify(option)}}
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			option_bar: {
				type: Object
			},
		},
		data(){
			return{
				defaultOption: {
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
				option:{}
			}
		},
		methods:{
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.chart{
		height: 100%;
	}
</style>
