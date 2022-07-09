<template>
	<view class="body">
		
		<!-- 搜索框 -->
		<view class="search-container">
			<search3></search3>
		</view>
		
		<!-- list -->
		<view class="appeal-container">
			<appeal5></appeal5>
		</view>
		
	</view>
</template>

<script>
	
	import search3 from '../../components/search/search3.vue'
	import appeal5 from '../../components/appeal/appeal5.vue'
	
	export default {
		components: {
			search3,
			appeal5
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
		
		.appeal-container {
			margin-top: 48rpx;
			margin-bottom: 60rpx;
			padding: 0 20rpx;
		
		
		}
		
	}
</style>
