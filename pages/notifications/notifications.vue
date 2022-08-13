<template>
	<view class="body">
		
		
		<!-- 动态标签部分 -->
		<view class="dynamic-tag-container">
			<view class="dynamic-tag">
				<dynamicTag1></dynamicTag1>
			</view>
		</view>
		
		<!-- 动态部分 -->
		<view class="dynamic-container">
			
			<dynamic1 class="dynamic-item" v-for="item in 3"></dynamic1>
			
		</view>
		
	</view>
</template>

<script>
	
	import dynamic1 from '../../components/dynamic/dynamic1.vue'
	import dynamicTag1 from '../../components/dynamic/dynamicTag1.vue'
	
	export default {
		components: {
			dynamic1,
			dynamicTag1
		},
		data() {
			return {
				
			}
		},
		methods: {
			
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
	}
	
	// 动态标签部分
	.dynamic-tag-container{
		margin-top: 40rpx;
		padding: 0 30rpx;
		
		.dynamic-tag{
			border-radius: 8rpx;
			background: $bg-gray-dark;
			box-shadow: 0px 3rpx 20rpx rgba(0, 0, 0, 0.5);
		}
		
		
		
	}
	
	// 动态部分
	.dynamic-container{
		padding: 30rpx 30rpx;
		
		.dynamic-item{
			margin-bottom: 20rpx;
		}
		
	}
	
</style>
