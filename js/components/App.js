import AppButton from "./AppButton.js";

export default {
  template: `
  <section v-show="inProgressAssignments.length">
    <h2 class="font-bold mb-2">In progress</h2>

    <ul>
      <!-- Dynamically creates a list of assigments from the assignments object -->
      <li
        v-for="assignment in inProgressAssignments"
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
`
};
