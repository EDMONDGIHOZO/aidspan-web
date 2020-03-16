<template>
	<v-footer padless>
		<v-container>
			<v-row no-gutters>
				<v-col cols="4" xs-12>
					<v-card>
						<c-card-content>
							<a
								class="twitter-timeline"
								data-width="221"
								data-height="200"
								href="https://twitter.com/aidspan?ref_src=twsrc%5Etfw"
								>Tweets by aidspan</a
							>
						</c-card-content>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<v-card class="flex" flat tile>
			<v-card-title class="primary">
				<strong class="subheading"
					>Get connected with us on social networks!</strong
				>
				<v-spacer></v-spacer>
				<v-btn v-for="icon in icons" :key="icon.icon" class="mx-4" dark icon>
					<v-icon size="24px">{{ icon.icon }}</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text class="py-2 text-center">
				{{ new Date().getFullYear() }} — <strong>AIDSPAN</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<script>
export default {
	computed: {
		icons() {
			return this.$store.state.icons;
        },
    }
};
</script>
