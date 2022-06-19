<template>
	<view class="body">
		
		<!-- 搜索框 -->
		<view class="search-container">
			<search3></search3>
		</view>
		
		<!-- 直播部分 -->
		<view class="live-container">
			<live3></live3>
		</view>
		
		
		<!-- list -->
		<view class="appeal-container">
			<appeal3></appeal3>
		</view>
		
	</view>
</template>

<script>
	
	import search3 from '../../components/search/search3.vue'
	import live3 from '../../components/live/live3.vue'
	import appeal3 from '../../components/appeal/appeal3.vue'
	
	export default {
		components: {
			search3,
			live3,
			appeal3
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
			margin-top: 48rpx;
			margin-bottom: 60rpx;
			padding: 0 30rpx;


		}

	}
</style>
