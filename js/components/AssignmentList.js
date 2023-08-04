import Assignment from "./Assignment.js"

export default {

    components: { Assignment },

    template: `
            <section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{ title }}</h2>

    <ul class="border border-gray-600 divide-y divide-gray-600">
        <!-- Pass in the prop assignment which is an object coming from the 'Assignment'-component -->
        <assignment
        :assignment="assignment"
        v-for="assignment in assignments"
        :key="assignment.id"></assignment>
    </ul>

  </section>
  `,

    props: {
        assignments: Array,
        title: String
    }
}