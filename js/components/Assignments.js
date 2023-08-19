import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";


export default {
    components: { AssignmentList, AssignmentCreate },

    template: `       
        <section class="flex gap-8" >
            <!--  The props from the Assignment component are passed in like this using the v-bind shorthand since we want the computed value -->
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <!-- Components listens for its child through a custom event called 'add' -->
            <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <!-- We made AssignmentList generic and can now pass in data from the outside  -->
            <assignment-list 
            v-if="showCompleted"
            :assignments="filters.completed" 
            title="Completed" 
            can-toggle
            @toggle="showCompleted = !showCompleted"
        ></assignment-list>


        </section>
    `,

    data() {
        return {
            assignments: [
            ],
            showCompleted: true,
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

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            })
    },

    // The new assignments object
    methods: {
        add(name) {
            this.assignments.push({
                name,
                completed: false,
                id: this.assignments.length + 1
            });




        }
    }
}