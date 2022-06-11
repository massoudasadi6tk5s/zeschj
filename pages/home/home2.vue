<template>
	<view class="body">
		
		<!-- 搜索框 -->
		<view class="search-container">
			<search2></search2>
		</view>
		
		<!-- 直播部分 -->
		<view class="live-container">
			<live2></live2>
		</view>
		
		
		<!-- list -->
		<view class="appeal-container">
		
		
		</view>
		
	</view>
</template>

<script>
	
	import search2 from '../../components/search/search2.vue'
	import live2 from '../../components/live/live2.vue'
	
	export default {
		components: {
			search2,
			live2
		},
		data() {
			return {
				
			};
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
