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

			<!-- 类型选择 -->
			<view class="live-type-container">
				<view v-for="(item, index) in liveTypeList" :key="index" :class="['live-type-item', item.active ? 'active':'']" @click="handleClickType(item.id, index)">{{item.name}}</view>
				<view :class="['move-piece','right-move20', moveArray[moveIndex]]"></view>
			</view>

			<view class="stream-live-item-container">

				<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">

					<block v-for="(item, index) in liveList" :key="index">
						<view :class="['scroll-item']">
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
				
				liveTypeList: [
					{id: 1, name: 'For you', active: true},
					{id: 2, name: 'Following', active: false},
					{id: 3, name: 'Popular', active: false}
				],
				moveArray: ['right-move0','right-move200','right-move400'],
				moveIndex: 0,

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
		},
		
		methods: {
			
			handleClickType(id, index){
				
				this.moveIndex = index
				
				this.liveTypeList.forEach(item => {
					if(item.id == id){
						item.active = true
					}else{
						item.active = false
					}
				})
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
			
			
			// 类型选择
			.live-type-container{
				position: relative;
				display: flex;
				align-items: center;
				margin-bottom: 52rpx;
				padding: 0 20rpx;
				
				.live-type-item{
					margin-right: 60rpx;
					color: #b2c0d3;
					  font-family: "Avenir-Heavy";
					  font-size: 17px;
					  font-weight: 400;
					  transition: transform 0.5s;
				}
				
				.move-piece{
					position: absolute;
					bottom: -20rpx;
					  width: 120rpx;
					  height: 3px;
					  background: $transparent;
				}
				
				/* 向右移动10 */
				.right-move0 {
				  transition: transform 0.5s;
				  transform: translateX(0rpx);
				}
				
				.right-move200 {
				  transition: transform 0.5s;
				  transform: translateX(200rpx);
				}
				.right-move400 {
				  transition: transform 0.5s;
				  transform: translateX(400rpx);
				}
				
				.active{
					color: $font-ffffff;
				}
				
			}
			

			.stream-live-item-container {
				display: flex;
				align-items: center;
				width: 100%;

				scroll-view {
					
					white-space: nowrap; // 滚动必须加的属性
					height: 440rpx;
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

				}


			}

		}

	}
</style>
