<template>
	<view class="body">

		<view class="invite-friends-rectangle">
			<view class="invite-friends-word">Invite Friends</view>
		</view>

		<view class="friends-container">
			<view class="friends-item" v-for="(item, index) in friendList" :key="item.id">
				
				<view class="friends-item-top">
					
					<view class="head-portrait-name-container">
						<image class="head-portrait" :src="item.headPortrait"></image>
						<view class="name-signature-container">
							<view class="name">{{item.name}}</view>
							<view class="signature">{{item.signature}}</view>
						</view>
					</view>
					
					<view class="icon-container">
						<image :src=" item.isAdd ? confirmIcon : addIcon"></image>
					</view>
					
				</view>
				
				<view class="line"></view>

			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				friendList: [{
					id: 1,
					headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/inviteFriends/1.png',
					name: 'Patrick Osborne',
					signature: 'You’re friends on Facebook',
					isAdd: true
				},{
					id: 2,
					headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/inviteFriends/2.png',
					name: 'Caleb Klein',
					signature: 'You’re friends on Facebook',
					isAdd: false
				},{
					id: 3,
					headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/inviteFriends/3.png',
					name: 'Lois Conner',
					signature: 'You’re friends on Facebook',
					isAdd: true
				},{
					id: 4,
					headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/inviteFriends/4.png',
					name: 'Jerome Gonzales',
					signature: 'You’re friends on Facebook',
					isAdd: false
					
				},{
					id: 5,
					headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/inviteFriends/5.png',
					name: 'Edith Owen',
					signature: 'You’re friends on Facebook',
					isAdd: true
				},{
					id: 6,
					headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/inviteFriends/6.png',
					name: 'Steven Thornton',
					signature: 'You’re friends on Facebook',
					isAdd: true
				},{
					id: 7,
					headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/inviteFriends/7.png',
					name: 'Brent Figueroa',
					signature: 'You’re friends on Facebook',
					isAdd: false
				},{
					id: 8,
					headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/inviteFriends/8.png',
					name: 'Melvin Bridges',
					signature: 'You’re friends on Facebook',
					isAdd: true
				}],

				confirmIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/inviteFriends/confirm.png',
				addIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/inviteFriends/add.png'

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

		.invite-friends-rectangle {
			position: sticky;
			top: -100rpx;
			width: 100%;
			height: 336rpx;
			background: $bg-gray-dark;
			box-shadow: 0px 0px 4px;
			z-index: 2;

			.invite-friends-word {
				position: absolute;
				left: 30rpx;
				bottom: 42rpx;
				color: $font-ffffff;
				font-family: "Avenir-Heavy";
				font-size: 34px;
			}

		}

		.friends-container {
			margin-top: 44rpx;
			padding-left: 32rpx;

			.friends-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 30rpx;
				width: 100%;
				
				.friends-item-top{
					display: flex;
					align-items: center;
					justify-content: space-between;;
					width: 100%;
					
					.head-portrait-name-container {
						display: flex;
						align-items: flex-end;
					
						.head-portrait {
							width: 100rpx;
							height: 100rpx;
							border-radius: 50%;
						}
					
						.name-signature-container {
							display: flex;
							flex-direction: column;
							justify-content: flex-end;
							margin-left: 30rpx;
					
							.name {
								margin-bottom: 10rpx;
								color: $font-ffffff;
								font-family: "SFProText-Bold";
								font-size: 14px;
								font-weight: 400;
							}
					
							.signature {
								color: $font-4e586e;
								font-family: "Avenir-Medium";
								font-size: 14px;
							}
					
						}
					
					}
					.icon-container {
						margin-right: 22rpx;
						image {
							width: 60rpx;
							height: 60rpx;
						}
					}
				}
				
				.line{
					margin-top: 30rpx;
					  opacity: 0.2;
					  width: 100%;
					  border: solid 1px ;

				}
				



			}

		}

	}
</style>
