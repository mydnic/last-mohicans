<template>
    <div class="games">
        <h1 class="subtitle is-3 has-text-white has-text-centered">
            Nous jouons à de nombreux jeux différents mais voici les principaux du moment
        </h1>
        <div class="columns has-text-centered">
            <div class="column">
                <img src="/img/games/tarkov_logo.png" alt="Tarkov">
                <h2 class="title is-4 has-text-white">On recrute!</h2>
                <p class="has-text-white">
                    Rejoignez notre serveur Discord et contactez <span class="has-text-primary">Sefyu</span>
                </p>
            </div>
            <div class="column">
                <div class="box is-radiusless">
                    <img src="/img/games/r6s_logo.png" alt="Rainbow Six Siege">
                </div>
            </div>
        </div>
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
