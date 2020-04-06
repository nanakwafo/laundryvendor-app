<template>
<div class="dashboard grey lighten-5 ma-4">
    <h1 class="font-weight-thin grey-text ma-5"> Services</h1>

    <v-container class="">

        <v-card flat class="mydata pa-6">

            <v-card-title>
                <div class="text-center ">
                    <v-btn small rounded outlined color="primary" @click="$router.push('add')" dark> New Service</v-btn>
                </div>
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts" :search="search">

                <template v-slot:item.actions="{ item }">
                    <v-icon color="primary" small  class="mr-2 " @click="$router.push({ path: `/edit/${item.id}` })">
                        mdi-pencil
                    </v-icon>
                    <v-icon small color="red"  >
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>

        </v-card>

    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            headers: [{
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Calories',
                    value: 'calories'
                },
                {
                    text: 'Fat (g)',
                    value: 'fat'
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false
                },

            ],
            desserts: [{
                    id: 1,
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,

                },
                {
                    id: 2,
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,

                },
                {
                    id: 3,
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,

                },
                {
                    id: 4,
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,

                },
                {
                    id: 5,
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,

                },
                {
                    id: 6,
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,

                },
                {
                    id: 7,
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,

                },
                {
                    id: 8,
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,

                },
                {
                    id: 9,
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,

                },
                {
                    id: 10,
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,

                },
            ],
        }

    },

}
</script>

<style scoped>

</style>
