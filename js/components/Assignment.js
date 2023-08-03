export default {

    template: `
    <li>
        <label
          >{{ assignment.name }}
          <!-- Binds the value of the input to the complete property in the assignments object -->
          <input
            type="checkbox"
            v-model="assignment.complete"
          />
        </label>
      </li>
    `,

    props: {
        assignment: Object
    }
}