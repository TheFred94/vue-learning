export default {

  template: `
    <li>
        <label class="p-2 flex justify-between items-center" 
          >{{ assignment.name }}
          <!-- Binds the value of the input to the complete property in the assignments object -->
          <input class="ml-4"
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