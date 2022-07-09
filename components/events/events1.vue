<template>
	<view>
		<view class="title">Events</view>
		<view class="events-item-container">
			<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
				<block v-for="item in eventsList" :key="id">
					<view class="events-item">
						<!-- 图片 -->
						<view class="events-img">
							<image mode="aspectFill" :src="item.img">
							</image>
							<!-- 直播tag -->
							<view class="live-tag-container" v-if="item.live">
								<image :src="liveTag"></image>
								<view class="live-word">LIVE</view>
							</view>
						</view>
					
						<!-- 名称 时间 地点 -->
						<view class="name-time-addr-container">
							<view class="event-name">{{item.name}}</view>
							<view class="time-addr-container">
								<view class="time">{{item.time}}</view>
								<view class="vertical-line">|</view>
								<view class="addr">{{item.addr}}</view>
							</view>
						</view>
					</view>
				</block>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "events1",
		data() {
			return {

				liveTag: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-white%404x.png',

				eventsList: [{
						id: 1,
						img: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/events1.png',
						name: 'LIVE - On the Radio',
						addr: 'Freedom Trail',
						time: '10:30',
						live: true
					},
					{
						id: 2,
						img: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/events2.png',
						name: 'Happy new Year !',
						addr: 'Fort Sumter',
						time: '09:30',
						live: false
					},
					{
						id: 3,
						img: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/events3.png',
						name: 'Google I/O',
						addr: 'Washington DC',
						time: '08:30',
						live: false
					},
				]
			};
		}
	}
</script>

<style lang="scss">
	.title {
		padding: 0 30rpx;
		color: #ffffff;
		font-family: "Avenir-Heavy";
		font-size: 34px;
		font-weight: 400;
	}

	.events-item-container {
		scroll-view {
			white-space: nowrap;
			padding: 0 30rpx;
			margin-top: 28rpx;

			.events-item {
				display: inline-flex;
				flex-direction: column;
				margin-right: 40rpx;

				.events-img {
					position: relative;

					image {
						width: 270rpx;
						height: 270rpx;
						border-radius: 8px;
					}

					.live-tag-container {
						position: absolute;
						top: 20rpx;
						right: 20rpx;
						display: flex;
						align-items: center;
						justify-content: space-evenly;
						width: 104rpx;
						height: 36rpx;
						background: $btn-f78-f54;
						border-radius: 25px;
						z-index: 2;

						image {
							width: 32rpx;
							height: 32rpx;
						}

						.live-word {
							color: $font-ffffff;
							font-family: "Avenir-Heavy";
							font-size: 11px;
							font-weight: 400;
						}

					}


				}

				.name-time-addr-container {
					display: flex;
					flex-direction: column;
					margin-top: 30rpx;
					width: 270rpx;

					.event-name {
						overflow: hidden;
						text-overflow: ellipsis; //超出部分以省略号显示
						white-space: nowrap;
						width: 270rpx;
						color: $font-ffffff;
						font-family: "Avenir-Heavy";
						font-size: 14px;
						font-weight: 400;
						text-align: left;
					}
					
					.time-addr-container{
						display: flex;
						justify-content: space-between;
						width: 270rpx;
						  color: $font-4e586e;
						  font-family: "Avenir-Book";
						  font-size: 13px;
						  font-weight: 400;
						  
						.time{
							
						}
						
						.vertical-line{
							
						}
						
						.addr{
							width: 180rpx;
							overflow: hidden;    
							 	text-overflow: ellipsis;      //超出部分以省略号显示
							 	white-space: nowrap;
						}
						
						
						
					}


				}

			}

		}
	}
</style>
