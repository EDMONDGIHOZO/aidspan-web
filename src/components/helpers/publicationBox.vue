<template>
	<div class="container">
		<div class="box">
			<v-card rounded flat>
				<v-card-title>
					domestic financing for HIV
				</v-card-title>
				<div class="subti">
					<v-card-subtitle>
						author: kitumaine
					</v-card-subtitle>
					<v-card-subtitle>
						published at 23 dec 2021
					</v-card-subtitle>
				</div>

				<v-card-text class="font-weight-bold">
					<p>
						{{ description | str_limit }}
					</p>
				</v-card-text>
				<v-divider></v-divider>
				<v-card-actions>
					<div class="download-buttons">
						<div class="files">
							<span>files</span>
							<v-btn color="secondary" icon>
								<v-icon>mdi-file-pdf</v-icon>
							</v-btn>
							<v-btn color="success" icon>
								<v-icon>mdi-file-word</v-icon>
							</v-btn>
						</div>
                        <div class="type">
                            <v-chip color="secondary">guide</v-chip>
                        </div>
					</div>
				</v-card-actions>
			</v-card>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			description:
				"loredsfgsdfgdsfgdsfgdfsgdfgdfgdfgdsfgdfvdfvdsfvdfbdfbfdbsdfbsdfbsdfbdsdf",
		};
	},
};
</script>

<style lang="scss" scoped>
.subti {
	display: flex;
	justify-content: space-between;
	flex-direction: row;
}

.download-buttons {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}
</style>
