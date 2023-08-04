import Assignment from "./Assignment.js"

export default {

    components: { Assignment },

    template: `
            <section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{ title }}
        <span>({{assignments.length}})</span>
    </h2>

    <div class="flex gap-2">
        <button v-for="tag in tags" class="border rounded px-2 py-1 text-xs">{{ tag }}</button>
    </div>

    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
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
    },

    computed: {
        tags() {
            return ['science', 'math', 'reading'];
        }
    }
}