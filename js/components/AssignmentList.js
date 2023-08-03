export default {

    template: `
            <section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{ title }}</h2>

    <ul>
      <!-- Dynamically creates a list of assigments from the assignments object -->
      <li
        v-for="assignment in assignments"
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

    props: {
        assignments: Array,
        title: String
    }
}