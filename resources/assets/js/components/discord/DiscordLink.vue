<template>
    <div class="has-text-white">
        <a :href="link" target="_blank" class="button is-light">
            <span class="icon is-small">
                <i class="zmdi zmdi-link"></i>
            </span>
            <span v-text="link"></span>
        </a>
    </div>
</template>

<script>
import Config from '../../config';

export default {
    mounted() {
        this.link = Config.discordLink;
    },
    data () {
        return {
            link: null
        }
    }
}
</script>
