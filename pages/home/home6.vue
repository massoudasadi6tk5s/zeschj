<template>
	<view class="body">
		
		<view class="search-container">
			<search6></search6>
		</view>
		
		<view class="live-container">
			<live6></live6>
		</view>
		
		<view class="appeal-container">
			<appeal6></appeal6>
		</view>
		
		
	</view>
</template>

<script>
	
	import search6 from '../../components/search/search6.vue'
	import live6 from '../../components/live/live6.vue'
	import appeal6 from '../../components/appeal/appeal6.vue'
	
	export default {
		components: {
			search6,
			live6,
			appeal6
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
