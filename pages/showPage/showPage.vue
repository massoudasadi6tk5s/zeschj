<template>
	<view class="body">
		<view class="page-item" v-for="(item, index) in pageList" :key="index">
			<view class="word">{{item.word}}</view>
			<view class="page-img" @click="handleGoToPage(item)">
				<image :src="item.pageImg"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageList: [{
					id: 1,
					word: 'welcome',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/welcome.jpg',
					url: '/pages/welcome/welcome/welcome'
				},{
					id: 2,
					word: 'login',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/login.jpg',
					url: '/pages/welcome/login/login'
				},{
					id: 3,
					word: 'forgotPassword',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/forgotPassword.jpg',
					url: '/pages/welcome/forgotPassword/forgotPassword'
				},{
					id: 4,
					word: 'signUp',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/signUp.jpg',
					url: '/pages/welcome/signUp/signUp'
				},{
					id: 5,
					word: 'enableNotifications',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/enableNotifications.jpg',
					url: '/pages/welcome/enableNotifications/enableNotifications'
				},{
					id: 6,
					word: 'InviteFriends',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/InviteFriends.jpg',
					url: '/pages/welcome/inviteFriends/inviteFriends'
				},{
					id: 7,
					word: 'home1',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/home1.jpg',
					tabbar: true,
					url: '/pages/home/home'
				},{
					id: 8,
					word: 'home2',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/home2.jpg',
					url: '/pages/home/home2'
				},{
					id: 9,
					word: 'home3',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/home3.jpg',
					url: '/pages/home/home3'
				},{
					id: 10,
					word: 'home4',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/home4.jpg',
					url: '/pages/home/home4'
				}
				,{
					id: 11,
					word: 'home5',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/home5.jpg',
					url: '/pages/home/home5'
				},{
					id: 12,
					word: 'home6',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/home6.jpg',
					url: '/pages/home/home6'
				},{
					id: 13,
					word: 'search',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/search.jpg',
					url: '/pages/other/search'
				},{
					id: 14,
					word: 'stream1',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/stream1.jpg',
					url: '/pages/streams/stream1'
				},{
					id: 15,
					word: 'stream2',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/stream2.jpg',
					url: '/pages/streams/stream2'
				},
				{
					id: 16,
					tabbar: true,
					word: 'stream3',
					pageImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/showPage/stream3.jpg',
					url: '/pages/streams/stream3'
				}]
			};
		},
		
		methods: {
			handleGoToPage(item){
				
				if(item.tabbar){
					uni.switchTab({
						url: item.url
					})
				}else{
					uni.navigateTo({
						url: item.url
					})
				}
				
				
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
		display: grid;
		grid-row-gap: 40rpx;
		padding: 60rpx 0;
		align-items: center;
		justify-content: center;
		grid-template-columns: 30% 30% 30%;
		grid-template-rows: 30% 30% 30%;
		height: 100%;
		width: 100%;
		

		.page-item {
			display: flex;
			flex-direction: column;
			align-items: center;

			.word {
				font-size: 12px;
				color: $font-ffffff;
			}

			.page-img {
				margin-top: 10rpx;
				width: 207rpx;
				height: 450rpx;
				
				image{
					width: 207rpx;
					height: 450rpx;
				}
				
			}

		}

	}
</style>
