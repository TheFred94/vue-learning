import AssignmentList from "./AssignmentList.js";


export default {
    components: { AssignmentList },

    template: `
            
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>

        <!-- Only show this section if we have assignments that are completed and that array is more than 0 -->
         <!-- Use either v-show or v-if depending on the usecase. v-show automatically adds display:none -->
         <section
          v-show="completedAssignments.length"
        class="mt-8"
         >
     <h2 class="font-bold mb-2">Completed</h2>

        <ul>
      <!-- Dynamically creates a list of assigments from the assignments object -->
      <li
        v-for="assignment in completedAssignments"
        :key="assignment.id"
      >
        <label
          >{{ assignment.name }}
          <!-- Binds the value of the input to the complete property in the assignments object -->
          <input
            type="checkbox"
            v-model="assignment.complete"
          />
        </label>
      </li>
        </ul>
     <!-- <pre>{{assignments}}</pre> -->
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
        completedAssignments() {
            return this.assignments.filter((assignment) => assignment.complete);
        },
        inProgressAssignments() {
            return this.assignments.filter((assignment) => !assignment.complete);
        },
    },
}