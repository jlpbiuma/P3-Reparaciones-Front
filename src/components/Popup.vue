<script setup>
import { useAuthStore } from '../stores/authStore'
import API from '../services/api'

</script>

<template>
	<div class="popup">
		<div class="popup-inner">
			You want to delete your profile?
			<br>
			<button class="popup-close" @click="accept">
				Yes
			</button>
			<button class="popup-close" @click="noAccept">
				No
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			authStore: useAuthStore()
		}
	},
	methods: {
		async accept() {
			const response = await API.deleteUserprofile(this.authStore.id, this.authStore.token)
			this.$emit("close-popup",true)
			
		},
		noAccept() {
			this.$emit("close-popup",false)
		}
	}
}
</script>

<style lang="scss" scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
	
	display: flex;
	align-items: center;
	justify-content: center;
	.popup-inner {
		background: #FFF;
		padding: 32px;
	}
}
</style>