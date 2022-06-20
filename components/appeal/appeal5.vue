<template>
	<view>

		<view class="tag-item-container">
			<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
				<block v-for="item in appealTagList" :key="id">
					<view :class="['tag-word', 'tag-item', item.active ? 'tag-active':'']">{{item.name}}</view>
				</block>
			</scroll-view>
		</view>

		<view class="dynamic-item-container">
			
			<!-- 第一个 -->
			<view class="item-container">
				<view class="dynamic-item"></view>
			</view>
			
			<!-- 第二个 -->
			<view class="item-container">
				<view class="dynamic-item"></view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: "appeal5",
		data() {
			return {
				testHead1: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval%404x5.png',
				otherIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/other.png',
				postImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/post3-1.png',
				pstImgMask: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/post3-mask.png',
				likeIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/like.png',
				commentIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/comment.png',
				shareIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/share.png',

				appealTagList: [{
						id: 1,
						name: 'Popular',
						active: true
					},
					{
						id: 2,
						name: 'Latest',
						active: false
					},
					{
						id: 3,
						name: 'Friends',
						active: false
					}
				],

				tagList: [{
						id: 1,
						tagName: '#relax'
					},
					{
						id: 2,
						tagName: '#travel'
					}
				],





			};
		},
		methods: {},
		//此处定义传入的参数
		props: {},
		// 定义变量 或者 加载默认数据
		watch: {}
	}
</script>


<style lang="scss">
	// 标签 容器
	.tag-item-container {

		scroll-view {
			white-space: nowrap; // 滚动必须加的属性
			width: 100%;

			.tag-word {
				position: relative;
				display: inline-flex;
				margin-right: 108rpx;
				font-family: "Avenir-Heavy";
				font-size: 34px;
				font-weight: 400;
			}

			.tag-item {
				color: $graybase-gray6;

			}

			.tag-active {
				color: $font-ffffff;
			}

		}


	}
	
	.dynamic-item-container{
		display: grid;
		grid-column-gap: 16rpx;
		grid-template-columns: 1fr 1fr;
		
		
		.item-container{
			margin-top: 64rpx;
			
			.dynamic-item{
				height: 400rpx;
				border-radius: 8rpx;
				background: $bg-gray-dark;
				box-shadow: 0px 3rpx 20rpx rgba(0, 0, 0, 0.5);
			}
			
		}
		
		
		
	}


</style>
