<template>
    <div class="has-text-centered home">
        <h1 class="title is-1 has-text-white is-spaced">
            Last-Mohicans Team
        </h1>
        <h1 class="subtitle is-3 has-text-white">
            Nous rejoindre sur
        </h1>
        <div class="columns is-centered is-vcentered">
            <div class="column is-3">
                <img src="/img/Discord-logo.png" alt="Discord">
                <discord-link></discord-link>
            </div>
            <div class="column is-3 is-offset-3">
                <img src="/img/teamspeak_small.png" alt="Teamspeak">
                <teamspeak-link></teamspeak-link>
            </div>
        </div>
        <router-link class="button is-primary is-large cta is-outlined" to="/games">Nos Jeux</router-link>
    </div>
</template>

<script>
export default {
    components: {
        'discord-link': require('../components/discord/DiscordLink'),
        'teamspeak-link': require('../components/teamspeak/TeamspeakLink'),
    }
}
</script>
