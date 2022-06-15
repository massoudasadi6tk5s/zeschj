<template>
	<view class="body">
		
		<!-- 搜索框 -->
		<view class="search-container">
			<search4></search4>
		</view>
		
		<!-- 直播部分 -->
		<view class="live-container">
			<live4></live4>
		</view>
		
		
		<!-- list -->
		<view class="appeal-container">
			<appeal4></appeal4>
		</view>
		
	</view>
</template>

<script>
	
	import search4 from '../../components/search/search4.vue'
	import live4 from '../../components/live/live4.vue'
	import appeal4 from '../../components/appeal/appeal4.vue'
	
	export default {
		components: {
			search4,
			live4,
			appeal4
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
