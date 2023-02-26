<template>
    <div class="container">
        this is edit event
        <form @submit.prevent="updateEvent">
            <label>Name</label>
            <input type="text" v-model="event.name" required>
            <label>Slug</label>
            <input type="text" v-model="event.slug" required>
            <button type="submit">Update</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            event: {}
        }
    },
    created() {
        axios.get(`/api/v1/events/${this.$route.params.id}`)
        .then(resp => {
            this.event = resp.data
        })
    },
    methods: {
        updateEvent() {
            let payload = new FormData();
            payload.append('name', this.event.name)
            payload.append('slug', this.event.slug)
            payload.append('_method', 'PATCH')

            axios.post(`/api/v1/events/${this.$route.params.id}`, payload)
            .then(resp => {
                this.$router.push({name: 'EventList'})
            })
        }
    }
}
</script>
