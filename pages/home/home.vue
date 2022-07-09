<template>
	<view class="body">

		<!-- 搜索框 -->
		<view class="search-container">
			<search1></search1>
		</view>

		<!-- 直播部分 -->
		<view class="live-container">
			<live1></live1>
		</view>


		<!-- list -->
		<view class="appeal-container">

			<appeal1></appeal1>

		</view>

	</view>
</template>

<script>
	import appeal1 from '../../components/appeal/appeal1.vue'
	import live1 from '../../components/live/live1.vue'
	import search1 from '../../components/search/search1.vue'

	export default {
		components: {
			appeal1,
			live1,
			search1
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
