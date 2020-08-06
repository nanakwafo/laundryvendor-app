<template>
<v-app id="inspire">
    <v-navigation-drawer color="amber lighten-1" v-model="drawer" app>
        <v-layout column class="align-center">
            <v-flex class="mt-5 ">
                <v-avatar size="100">
                    <img src="/img/avatar1.png" alt="">
                </v-avatar>
                <p class="ma-0 pa-0">
                    <span class="primary--text font-weight-thin caption"> Kwafo Nana Mensah </span>
                </p>

                <p class="ma-0 pa-0">
                    <v-chip class="ma-2 white--text primary" x-small>
                        Account Verified
                    </v-chip>

                </p>

            </v-flex>
        </v-layout>
        <v-list dense>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="primary--text">{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="primary--text font-weight-thin caption">{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <div class="text-center ">
            <v-btn small rounded outlined color="primary" @click="goOnline(1)" dark>Go Online</v-btn>
        </div>
    </v-navigation-drawer>

    <v-app-bar app flat class="grey lighten-5">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title class="text-uppercase grey--text">

            <span class="font-weight-light"> On demand </span>
            <span> Laundry</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <Chat class="mx-3" />

        <v-icon @click="$router.push('/')" small right>exit_to_app</v-icon>

    </v-app-bar>

    <v-content class="grey lighten-5">
        <router-view></router-view>
    </v-content>

</v-app>
</template>

<script>
import io from 'socket.io-client';
import Chat from './Chat'
export default {
    props: {
        source: String,
    },
    components: {
        Chat
    },
    data() {
        return {
            username: "",
            socket: io("http://3.16.196.105:3000"),
            messages: [],
            users: [],
            room: "abc123",

            drawer: null,
            links: [{
                    icon: 'dashboard',
                    text: 'Dashboard',
                    route: '/dashboard'
                },
                {
                    icon: 'local_laundry_service',
                    text: 'Service',
                    route: '/service'
                },
                {
                    icon: 'person',
                    text: 'Profile',
                    route: '/profile'
                },

            ],
            items: [{
                    title: 'Dashboard'
                },

                {
                    title: 'Service'
                },

                {
                    title: 'Profile'
                },

            ],
        }

    },
      methods: {
        goOnline: function (id) {
            let vendor = {
                id: id,
                online: true
            };
            console.log(vendor);
            this.socket.emit('goOnline', vendor);
        },
        goOffline: function (id) {
            let vendor = {
                id: id,
                offline: false
            };
            console.log(vendor);
            this.socket.emit('goOffline', vendor);
        }
      
    },
}
</script>
