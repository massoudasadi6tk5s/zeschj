<template>
	<view class="body">
		
		<!-- 铃铛图标 -->
		<view class="notification-icon-container">
			<view class="icon-bgc">
				<image class="notification-icon" src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/enableNotifications/9-bell%404x.png"></image>
			</view>
		</view>
		
		<!-- 文字 -->
		<view class="word-container">
			<view class="title">
				<text>Turn on</text>
				<text>Notifications</text>
			</view>
			<view class="describe">
				<text>Enable push notifications to let send you personal news and updates</text>
			</view>
		</view>
		
		<!-- 按钮容器 -->
		<view class="btn-container">
			<view class="btn-switch-container">
				<view class="btn-word">Turn on notifications</view>
				<switch checked />
			</view>
		</view>
		
		
				
	</view>
</template>

<script>
	export default {
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
		display: flex;
		flex-direction: column;
		align-items: center;
		
		
		height: 100%;
		width: 100%;
		
		
		.notification-icon-container{
			display: flex;
			align-items: center;
			justify-content: center;
			  margin-top: 230rpx;
			  width: 436rpx;
			  height: 436rpx;
			  background: rgba(0,0,0,0.2);
			  border-radius: 50%;
			  
			  .icon-bgc{
			display: flex;
			align-items: center;
			justify-content: center;
				  border-radius: 50%;
				    width: 376rpx;
				    height: 376rpx;
				    background: rgba(0,0,0,0.2);
					
					.notification-icon{
						
						  width: 164rpx;
						  height: 210rpx;
						
						}
					
			  }
			
		}
		
		
		.word-container{
			margin-top: 110rpx;
			
			.title{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				color: $font-ffffff;
				  font-family: "Avenir-Black";
				  font-size: 34px;
				  font-weight: 400;
			}
			.describe{
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 20rpx;
				padding: 0 60rpx;
				text-align: center;
				color: #ffffff;
				font-family: "Avenir-Book";
				font-size: 17px;
				font-weight: 400;
			}
			
			
			
		}
		
		
		.btn-container{
			width: 88%;
			margin-top: 80rpx;
			 
			 .btn-switch-container{
				 display: flex;
				 align-items: center;
				 justify-content: space-between;
				  height: 134rpx;
				  padding: 0 20rpx;
				   border-radius: 8px;
				   background: #ffffff;
				   
				   .btn-word{
					   margin-left: 20rpx;
					     color: #0a1f44;
					     font-family: "Avenir-Book";
					     font-size: 17px;
					     font-weight: 400;
				   }
				   
				   
			 }
			 
		}
		
		
		}
</style>
