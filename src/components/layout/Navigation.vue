<template>
    <span>
        <v-navigation-drawer app v-model="drawer" dark disable-resize-watcher>
            <v-list>
                <v-list-item href="/">
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            {{ title }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                v-for="link in links"
                :key="link.title"
                link
                :href="link.url"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ link.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase" href="/">
                <span>{{ title }}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn v-for="link in links"
                :key="link.title"
                text
                class="hidden-sm-and-down"
                :href="link.url"
            >
                <span class="mr-2">{{ link.title }}</span>
            </v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    title: 'Example',
    drawer: false,
    links: [
      {
        title: 'Example 1',
        url: '/#/1'
      },
      {
        title: 'Example 2',
        url: '/#/2'
      }
    ]
  })
}
</script>
