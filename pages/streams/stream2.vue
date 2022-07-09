<template>
	<view class="body">

		<!-- 背景 -->
		<view class="bg-container">
			<image class="bg" mode="aspectFill" :src="photos2"></image>
			<image class="shadow" mode="aspectFill" :src="shadow"></image>
		</view>

		<!-- 头部 -->
		<view class="header-body-container">
			<view class="header-body">

				<!-- 用户信息 -->
				<view class="user-info-container">
					<image class="head" :src="head2"></image>
					<view class="nickname-live-time">
						<view class="nickname">Russell Lee</view>
						<view class="live-time">01:08:30</view>
					</view>
				</view>

				<!-- 删除按钮 -->
				<view class="del-btn">
					<image :src="close"></image>
				</view>

			</view>
		</view>

		<!-- 底部 -->
		<view class="bottom-body-container">


			<view class="stream-live-item-container">

				<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">

					<block v-for="(item, index) in liveList" :key="index">
						<view :class="['scroll-item', item.active ? 'active':'']">
							<image class="bg" mode="aspectFill" :src="item.photo"></image>
							<image class="shadow" mode="aspectFill" :src="rectangle1"></image>

							<!-- 直播时间 -->
							<view class="live-time">{{item.time}}</view>

							<!-- 个人信息 -->
							<view class="user-live-container">
								<image class="head-portrait" :src="item.head"></image>
								<view class="nickname">{{item.name}}</view>
							</view>

						</view>
					</block>


				</scroll-view>

			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				head2: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/head2.png',
				close: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/close-btn.png',
				photos2: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/photos2.png',
				shadow: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/shadow.png',

				rectangle1: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/rectangle1.png',

				liveList: [{
					id: 1,
					active: true,
					time: '03:20',
					photo: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/photos2.png',
					head: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/head2.png',
					name: 'Lena Sutton'
				},{
					id: 2,
					active: false,
					time: '07:45',
					photo: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/photos3.png',
					head: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/head3.png',
					name: 'Allie Burke'
				},{
					id: 3,
					active: false,
					time: '02:21',
					photo: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/photos4.png',
					head: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/head4.png',
					name: 'Isaiah Martin'
				}]

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
		background-color: $bg-gray-dark;

		.bg-container {
			position: relative;
			height: 100%;
			width: 100%;

			.bg {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
			}

			.shadow {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
			}
		}


		.header-body-container {
			position: fixed;
			top: 100rpx;
			width: 100%;

			.header-body {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 40rpx;

				.user-info-container {
					display: flex;
					align-items: center;

					.head {
						width: 88rpx;
						height: 88rpx;
						border-radius: 50%;
					}

					.nickname-live-time {
						margin-left: 16rpx;

						.nickname {
							color: $font-ffffff;
							font-family: "Avenir-Heavy";
							font-size: 17px;
							font-weight: 400;
						}

						.live-time {
							color: $font-ffffff;
							font-family: "Avenir-Book";
							font-size: 15px;
							font-weight: 400;
						}

					}


				}

				.del-btn {
					image {
						width: 80rpx;
						height: 80rpx;
					}
				}

			}

		}

		.bottom-body-container {
			position: fixed;
			bottom: 68rpx;
			width: 100%;

			.stream-live-item-container {
				width: 100%;

				scroll-view {
					white-space: nowrap; // 滚动必须加的属性
					width: 100%;

					.scroll-item {
						position: relative;
						display: inline-flex;
						margin-left: 20rpx;
						width: 260rpx;
						height: 410rpx;
						border-radius: 8px;
						background: #d8d8d8;

						.bg {
							position: absolute;
							top: 0;
							left: 0;
							height: 100%;
							width: 100%;
							border-radius: 8px;
						}

						.shadow {
							position: absolute;
							top: 0;
							left: 0;
							height: 100%;
							width: 100%;
							border-radius: 8px;
						}

						.live-time {
							position: absolute;
							top: 12rpx;
							right: 16rpx;
							color: $font-ffffff;
							font-family: "Avenir-Heavy";
							font-size: 11px;
							font-weight: 400;
						}

						.user-live-container {
							position: absolute;
							bottom: 12rpx;
							display: flex;
							align-items: center;

							.head-portrait {
								margin-left: 24rpx;
								width: 48rpx;
								height: 48rpx;
								border-radius: 50%;
							}

							.nickname {
								margin-left: 16rpx;
								widows: 160rpx;
								color: $font-ffffff;
								font-family: "Avenir-Heavy";
								font-size: 11px;
								font-weight: 400;
								overflow: hidden;
								text-overflow: ellipsis; //超出部分以省略号显示
								white-space: nowrap;
							}

						}


					}

					.active {
						border: solid #ffffff;
					}

				}


			}

		}

	}
</style>
