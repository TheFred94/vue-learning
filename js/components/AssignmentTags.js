export default {
    template: `
        <div class="flex gap-2">
        <!-- We then update the value when clicking on the button to the value of the modelValue -->
        <button 
        @click="$emit('update:modelValue', tag)"
        v-for="tag in tags" 
        class="border rounded px-2 py-1 text-xs"
        :class="{
            'border-blue-500 text-blue-500': tag === modelValue
        }"
        >{{ tag }}</button>
    </div>
    `,

    // Use modelValue as a prop to pass in the value of v-model
    props: {
        initialTags: Array,
        modelValue: String,
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}