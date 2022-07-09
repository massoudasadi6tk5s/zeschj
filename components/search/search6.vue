<template>
	<view>
		<view class="search-container">
			
			<view class="stories">Stories</view>
		
			<!-- 搜索框 -->
			<view class="search-input-container">
				<image :src="searchIcon"></image>
				<view class="search-word">Search</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		name:"search6",
		data() {
			return {
				searchIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/search.png',
			};
		},
		//此处定义传入的参数
		props: { 
		},
		// 定义变量 或者 加载默认数据
		watch: {},
		methods: {
			
		}
	}
</script>

<style lang="scss">
		.search-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 28rpx;
			
			.stories{
				 color: $font-ffffff;
				  font-family: "Avenir-Heavy";
				  font-size: 34px;
				  font-weight: 400;
			}

			.search-input-container {
				display: flex;
				align-items: center;
				  width: 432rpx;
				height: 72rpx;
				background: rgba(142, 142, 147, 0.12);
				border-radius: 50rpx;

				image {
					margin-left: 30rpx;
					width: 48rpx;
					height: 48rpx;
				}

				.search-word {
					margin-left: 14rpx;
					color: $font-4e586e;
					font-family: "Avenir-Book";
					font-size: 15px;
					font-weight: 400;
				}

			}


		}

</style>
