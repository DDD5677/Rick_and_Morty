<template>
	<footer>
		<div class="container">
			<div class="menu">
				<ul>
					<li><a href="#">Characters: 826</a></li>
					<li><a href="#">Locations: 126</a></li>
					<li><a href="#">Episodes: 51</a></li>
				</ul>

			</div>
			<h4>Created by <span>Djumakulov Danisher</span></h4>
			<h5>Thanks to <span>Mr. Axel Fuhrmann</span> for amazing API</h5>

		</div>
	</footer>
</template>


<style lang="scss" scoped>
footer {
	padding: 80px 0;
	background-color: rgb(32, 35, 41);
	color: rgb(158, 158, 158);

	.container {
		text-align: center;
	}


	.menu {
		font-size: 18px;
		text-transform: uppercase;
		font-weight: 700;
		margin-bottom: 30px;

		@media(max-width:580px) {
			font-size: 14px;
		}

		ul {
			padding: 0;
			display: flex;
			gap: 25px;
			justify-content: center;
		}

		a {
			color: rgb(158, 158, 158);

			&:hover {
				color: rgb(255, 152, 0);
			}
		}
	}

	h4 {
		margin-bottom: 8px;
	}

	span {
		color: rgb(255, 152, 0);

	}
}
</style>