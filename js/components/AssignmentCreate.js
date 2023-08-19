export default {
    template: `

            <!-- submit.prevent is shorthand for e.preventDefault -->
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black flex" >
                    <input v-model="newAssignment" placeholder="New Assignment..." class="p-2" />
                    <button type="submit" class="bg-white p-2 border-l" >Add</button>
                </div>
            </form>

`,



    data() {

        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            // Child component emits and let's the parent know that there is a change. We send this to the Assignments component
            this.$emit('add', this.newAssignment)

            this.newAssignment = "";
        }
    }



}