
<script>

	import {userLogin} from 'api/user.js'
	
	export default {

		globalData: {
			
		},

		onLaunch: async function() {
			
			await userLogin()
			
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
