<template>
	<view class="body">
		
		<image class="bg-img" mode="aspectFill" :src="bgImg"></image>
		<image class="bg-img-mask" mode="aspectFill" :src="bgImgCopy"></image>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bgImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/other/postDetails/Rectangle%20Copy%208%404x.png',
				bgImgCopy: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/other/postDetails/Rectangle%20Copy%209%404x.png'
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
		position: relative;
		height: 100%;
		width: 100%;
		
		.bg-img{
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
		}
		.bg-img-mask{
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
		}
		
	}
</style>
