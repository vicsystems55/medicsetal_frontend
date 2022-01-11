<template >
    <div>
            <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">My Leads</h1>
                </div>
                
            </div>

                <div class="container table-responsive">

                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="lead in leads" :key="lead.index">
                                <td>#</td>
                                <td>{{lead.name}}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>

                            </tr>
                        </tbody>
                    </table>


                </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            leads: [],
        }
    },

    methods: {
        get_leads (){
            this.axios({
                    method: 'get',
                    url: process.env.VUE_APP_URL+'/api/get_leads',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                    },
            })
            .then((response)=>{

                // alert('hello')
                
                this.leads = response.data.leads
                console.log(response)


            })
            .catch((response)=>{
                console.log(response)
            })
        }
    },

    mounted() {
        this.get_leads()
    },
}
</script>