
<script>

	import {userLogin} from 'api/user.js'
	
	export default {

		globalData: {
			
		},

		onLaunch: async function() {
			
			let result = await userLogin()
			console.log(result)
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
