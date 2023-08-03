import AssignmentList from "./AssignmentList.js";


export default {
    components: { AssignmentList },

    template: `
            
        <section class="space-y-6" >
            <!--  The props from the Assignment component are passed in like this using the v-bind shorthand since we want the computed value -->
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            
            <!-- We made AssignmentList generic and can now pass in data from the outside  -->
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>


    `,

    data() {
        return {
            assignments: [
                { name: "Finish project", complete: false, id: 1 },
                { name: "Read chapter 4", complete: false, id: 2 },
                { name: "Turn in homework", complete: false, id: 3 },
            ],
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
}