import AssignmentList from "./AssignmentList.js";


export default {
    components: { AssignmentList },

    template: `       
        <section class="space-y-6" >
            <!--  The props from the Assignment component are passed in like this using the v-bind shorthand since we want the computed value -->
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            
            <!-- We made AssignmentList generic and can now pass in data from the outside  -->
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <!-- submit.prevent is shorthand for e.preventDefault -->
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black" >
                    <input v-model="newAssignment" placeholder="New Assignment..." class="p-2" />
                    <button type="submit" class="bg-white p-2 border-l" >Add</button>
                </div>
            </form>

        </section>
    `,

    data() {
        return {
            assignments: [
                { name: "Finish project", complete: false, id: 1 },
                { name: "Read chapter 4", complete: false, id: 2 },
                { name: "Turn in homework", complete: false, id: 3 },
            ],

            newAssignment: ''

        };
    },

    // Creating a computed property removes the need for repeating code and can simply be used in the above code in a conditional statement.
    computed: {

        filters() {
            return {
                inProgress:
                    this.assignments.filter((assignment) => !assignment.complete),
                completed:
                    this.assignments.filter((assignment) => assignment.complete),

            }
        }
    },

    // The new assignments object
    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    }
}