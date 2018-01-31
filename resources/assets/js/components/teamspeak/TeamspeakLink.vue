<template>
    <div class="has-text-white">
        <a :href="link" class="button is-light">
            <span class="icon is-small">
                <i class="zmdi zmdi-open-in-new"></i>
            </span>
            <span>last-mohicans.net</span>
        </a>
    </div>
</template>

<script>
import Config from '../../config';

export default {
    data () {
        return {
            link: 'ts3server://last-mohicans.net'
        }
    }
}
</script>
