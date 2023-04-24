<template>
    <v-card
            outlined
            flat
            class="fill-height"
    >
        <div class="text-left d-flex flex-no-wrap justify-space-between">
            <v-avatar
                    class="ma-3"
                    size="125"

            >
                <v-img :src="imageUrl"></v-img>
            </v-avatar>
            <div>
                <v-card-title
                        class="text-h5"
                >{{ name }}
                </v-card-title>

                <v-card-subtitle>{{ position }}</v-card-subtitle>
                <v-card-text>
                    {{ quote }}
                </v-card-text>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    props: ['name', 'position', 'imageUrl', 'quote']
}
</script>

<style lang="scss" scoped>

</style>