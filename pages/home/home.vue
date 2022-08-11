<template>
	<view class="body">

		<!-- 搜索框 -->
		<view class="search-container">
			<search1></search1>
		</view>

		<!-- 直播部分 -->
		<!-- <view class="live-container">
			<live1></live1>
		</view> -->


		<!-- list -->
		<view class="appeal-container">

			<appeal5></appeal5>

		</view>

	</view>
</template>

<script>
	import appeal1 from '../../components/appeal/appeal1.vue'
	import appeal5 from '../../components/appeal/appeal5.vue'
	import live1 from '../../components/live/live1.vue'
	import search1 from '../../components/search/search1.vue'
	
	import {pageQueryAppeal} from '../../api/appeal.js'

	export default {
		components: {
			appeal1,
			appeal5,
			live1,
			search1
		},
		data() {
			return {
				
				// 分页查询诉求参数
				appealPageData: {
					current: 1,
					size: 10,
					total: 0,
					records: []
				},
				// 诉求额外条件
				appealQueryCondition: {
					longitude: '',
					latitude: ''
				}

			};
		},
		
		
		async onLoad() {
			
			await this.handlePageQueryAppeal()
			
		},
		
		
		methods: {
			
			// 分页查询诉求
			async handlePageQueryAppeal(){
				
				let {current, size, records} = this.appealPageData
				
				let data = {
					current, size
				}
				Object.assign(data, this.appealQueryCondition)
				
				let resultData = await pageQueryAppeal(data)
				
				resultData.result.records = records.concat(resultData.result.records)
				
				this.pageData = resultData.result
				
				
			}
			
		}
		
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		width: 100%;
		background-color: $bg-gray-dark;
	}

	.body {
		height: 100%;
		width: 100%;

		.search-container{
			
			margin-top: 96rpx;
		}

		.live-container {}

		.appeal-container {
			margin-top: 60rpx;
			margin-bottom: 60rpx;
			padding: 0 30rpx;


		}

	}
</style>
