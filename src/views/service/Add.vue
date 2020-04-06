<template>
<div class="dashboard grey lighten-5 ma-4">
    <h1 class="font-weight-thin grey-text ma-5"> {{title}}</h1>

    <v-container class="">

        <v-card flat class="mydata pa-6">
            <v-layout column wrap>
                <v-form v-model="valid">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-flex>
                      
                            <div class="d-flex flex-row-reverse">
                                <v-btn  rounded outlined color="primary"  dark> Save</v-btn>
                            </div>
                     
                         </v-flex>
                    </v-container>
                </v-form>
            </v-layout>
        </v-card>

    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: null,
            //form
            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }

    },
    mounted: function () {
        return this.$route.params.id == null ? this.title = "Add Services" : this.title = "Edit Services"

    }
}
</script>

<style scoped>

</style>
