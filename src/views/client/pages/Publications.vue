<template>
	<div class="wrapper">
		<div class="titler">
			<h3>Publications</h3>
		</div>

		<v-row class="wrapper">
			<v-col cols="12" md="8">
				<div class="list-container">
					<div class="search">
						<v-text-field
							label="search for publication"
							background-color="white"
							outlined
							dense
						></v-text-field>
					</div>

					<div class="pubs">
						<pub-box />
					</div>
				</div>
			</v-col>
			<v-col cols="12" md="4">
				<v-list dense color="primary" rounded dark>
					<v-subheader class="tit">CATEGORIES</v-subheader>
					<v-list-item-group v-model="select_pub" color="primary">
						<v-list-item v-for="(item, i) in items" :key="i">
							<v-list-item-content>
								<v-list-item-title v-text="item.text"></v-list-item-title>
							</v-list-item-content>
							<v-list-item-avatar>
							23
							</v-list-item-avatar>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import PubBox from "@/components/helpers/publicationBox.vue";
export default {
	name: "publications",
	data() {
		return {
			items: [
				{ text: "Guides", icon: "mdi-clock" },
				{ text: "Reports", icon: "mdi-account" },
			],
		};
	},
	components: {
		"pub-box": PubBox,
	},
};
</script>

<style lang="scss" scoped>
.titler h3 {
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 40px;
	line-height: 60px;
	/* identical to box height */
	color: #a6acbe;
}

.list-container {
	background: rgba(196, 196, 196, 0.12);
	border: 1px solid #eeeeee;
	box-sizing: border-box;
	border-radius: 6px;
	padding: 13px;
}

.categories {
	background: #00adef;
	border: 1px solid #eeeeee;
	box-sizing: border-box;
	border-radius: 6px;
	padding: 14px;
}

.search {
	padding: 13px;
}

.tit {
  font-size: 20px;
	text-transform: uppercase;
	color: white;
}
</style>
