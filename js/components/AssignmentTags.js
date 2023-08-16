export default {
    template: `
        <div class="flex gap-2">
        <!-- We then update the value when clicking on the button to the value of the modelValue -->
        <button 
        @click="$emit('update:currentTag', tag)"
        v-for="tag in tags" 
        class="border rounded px-2 py-1 text-xs"
        :class="{
            'border-blue-500 text-blue-500': tag === currentTag
        }"
        >{{ tag }}</button>
    </div>
    `,

    // Use modelValue as a prop to pass in the value of v-model. modelValue is equal to whatever the current tag is
    props: {
        initialTags: Array,
        currentTag: String,
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}