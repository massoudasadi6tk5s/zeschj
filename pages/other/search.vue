<template>
	<view class="body">
		<view class="search-title">Search</view>
		<view class="search-input-container">
			<view class="search-input">
				<image :src="searchIcon"></image>
				<input placeholder-class="search-p" placeholder="Search" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/search.png',
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
		
		.search-title{
			margin-top: 212rpx;
			margin-left: 30rpx;
			  color: $font-ffffff;
			  font-family: "Avenir-Heavy";
			  font-size: 34px;
			  font-weight: 400;
		}
		
		.search-input-container{
			
			padding: 0 30rpx;
			
			.search-input{
				display: flex;
				align-items: center;
				margin-top: 40rpx;
				height: 72rpx;
				border-radius: 10px;
				background: rgba(142,142,147,0.12);
				
				image {
					margin-left: 30rpx;
					width: 48rpx;
					height: 48rpx;
				}
				
				input{
					margin-left: 14rpx;
					width: 580rpx;
					color: $font-ffffff;
					font-family: "Avenir-Book";
					font-size: 15px;
					font-weight: 400;
				}
				
				.search-p{
					
					  color: $font-4e586e;
					  font-family: "Avenir-Book";
					  font-size: 15px;
					  font-weight: 400;
				}
				
			}
			
			
		}
		
	}
</style>
