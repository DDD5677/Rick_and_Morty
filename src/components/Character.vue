<template>
	<div class="character-cart">
		<div class="img-box">
			<img :src="character.image" alt="">
		</div>
		<div class="content">
			<h2 class="name">
				<RouterLink :to="{ name: 'home' }">{{ character.name }}</RouterLink>
			</h2>
			<div class="status"><span class="dot"
					:class="{ 'gray': character.status === 'unknown', 'green': character.status === 'Alive' }"></span>{{
				character.status
			}} - {{ character.species }}</div>
			<div class="item">
				<span class="label">Last known location:</span>
				<RouterLink to="/">{{ character.location.name }}</RouterLink>
			</div>
			<div class="item">
				<span class="label">First seen in:</span>
				<RouterLink to="/" class="origin">{{ character.origin.name }}</RouterLink>
			</div>
		</div>
	</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
	character: {
		type: Object,
		requiered: true
	}
})
</script>

<style lang="scss" scoped>
.character-cart {
	display: flex;
	background: rgb(60, 62, 68);
	border-radius: 0.5rem;
	overflow: hidden;

	.img-box {
		width: 230px;
		height: 220px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.content {
		flex-grow: 1;
		padding: 15px;
		font-size: 16px;
		font-weight: 500;
		color: #fff;



		.name {
			margin-bottom: 3px;
			font-size: 1.5rem;
			font-weight: 800;

			a {
				color: #fff;

				&:hover {
					color: rgb(255, 152, 0);
				}
			}
		}

		.status {
			text-transform: capitalize;

			.dot {
				display: inline-block;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				margin-right: 10px;
				background-color: rgb(214, 61, 46);

				&.green {
					background-color: rgb(85, 204, 68);
				}

				&.gray {
					background-color: rgb(158, 158, 158);
				}
			}
		}

		.item {
			margin-top: 20px;

			a {
				font-size: 18px;
				color: #fafafa;
				font-weight: 400;

				&:hover {
					color: rgb(255, 152, 0);
				}
			}

			.label {
				display: block;
				color: rgb(158, 158, 158);
			}

			.origin {
				text-transform: capitalize;
			}
		}
	}

	@media(max-width:580px) {
		flex-direction: column;

		.img-box {
			width: 100%;
			height: 300px;
		}
	}
}
</style>