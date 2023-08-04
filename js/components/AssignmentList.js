import Assignment from "./Assignment.js"

export default {

    components: { Assignment },

    template: `
            <section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{ title }}
        <span>({{assignments.length}})</span>
    </h2>

    <div class="flex gap-2">
        <button 
        @click="currentTag = tag"
        v-for="tag in tags" 
        class="border rounded px-2 py-1 text-xs"
        :class="{
            'border-blue-500 text-blue-500': tag === currentTag
        }"
        >{{ tag }}</button>
    </div>

    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
        <!-- Pass in the prop assignment which is an object coming from the 'Assignment'-component -->
        <assignment
        :assignment="assignment"
        v-for="assignment in filteredAssignments"
        :key="assignment.id"
    ></assignment>
    </ul>



  </section>
  `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        };

    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag)
        },

        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))]
        }
    }
}