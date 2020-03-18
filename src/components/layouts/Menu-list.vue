<template>
<div id="menu">
    <v-list id="menu">
        <v-list-group v-for="menu in menus" :key="menu.title" v-model="menu.active" :prepend-icon="menu.action" no-action>
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title>
                        <v-btn text router :to="menu.route">{{menu.title}}</v-btn>
                    </v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item v-for="subMenu in menu.submenus" :key="subMenu.title">
                <v-list-item-content>
                    <v-list-item-title class="submenu">
                        <v-btn router :to="subMenu.route">{{subMenu.title}}</v-btn>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>
    </v-list>
</div>
</template>

<script>
export default {
    data() {
        return {
            mobMenu: false
        };
    },
    computed: {
        logo() {
            return this.$store.state.logo;
        },
        appTitle() {
            return this.$store.state.appTitle;
        },
        appIcon() {
            return this.$store.state.appIcon;
        },
        icons() {
            return this.$store.state.icons;
        },
        menus() {
            return this.$store.state.menus;
        }
    }
}
</script>
