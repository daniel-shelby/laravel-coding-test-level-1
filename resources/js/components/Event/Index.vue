<template>
    <div class="container">
        <table class="table table-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="event in events" :key="event.id">
                    <td>{{ event.name }}</td>
                    <td>{{ event.slug }}</td>
                    <td>{{ event.created_at }}</td>
                    <td>
                        <router-link :to="{name: 'EditEvent', params: {id: event.id}}">Edit</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            events: {}
        }
    },
    created() {
        axios.get('api/v1/events')
        .then(resp => {
            this.events = resp.data
        })
    },
    // methods: {
    //     init(){
    //         axios.get('api/events')
    //         .then((resp) => {
    //             this.events = resp.data
    //         })
    //     }
    // },
}
</script>
