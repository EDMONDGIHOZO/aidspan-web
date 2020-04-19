<template>
    
</template>

<script>

import Header from '@/components/layouts/client/Header.vue';
import Mobile from '@/components/layouts/client/mobileMenu.vue';
import Menubar from '@/components/layouts/client/menubar.vue';
import Footer from '@/components/layouts/client/Footer.vue';

export default {

    //**register the components */
    components : {
        'header': Header,
        'mobile': Mobile,
        'menu': Menubar,
        'footer': Footer
    }
}
</script>