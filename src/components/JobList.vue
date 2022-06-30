<template>
	<div class="job-list">
		<p>Ordered by {{ order }}</p>
		<transition-group name="list" tag="ul" class="p-0">
			<li
				v-for="job in orderedJobs"
				:key="job.id"
				class="bg-white px-7 py-8 my-5 rounded-md list-none"
			>
				<h2 class="mt-0 mx-0 mb-3 capitalize text-2xl font-bold">
					{{ job.title }} in {{ job.location }}
				</h2>
				<div class="salary">
					<img
						src="../assets/rupee.svg"
						alt="rupee icon"
						class="w-6"
					/>
					<p class="text-salary font-bold mt-3 mb-3">
						{{ job.salary }} rupees
					</p>
				</div>
				<div class="description">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Reprehenderit ex suscipit sed? Tenetur,
						repellendus et quas voluptates aut quisquam molestias
						quis dicta vel voluptate nostrum tempore asperiores
						fugiat neque pariatur!
					</p>
				</div>
			</li>
		</transition-group>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";

export default defineComponent({
	name: "JobList",
	props: {
		jobs: {
			required: true,
			type: Array as PropType<Job[]>,
		},
		order: {
			required: true,
			type: String as PropType<OrderTerm>,
		},
	},
	setup(props) {
		const orderedJobs = computed(() => {
			return [...props.jobs].sort((a: Job, b: Job) => {
				return a[props.order] > b[props.order] ? 1 : -1;
			}); //to avoid mutation of the props jobs array
		});

		return { orderedJobs };
	},
});
</script>

<style scoped>
.job-list {
	@apply max-w-5xl my-10 mx-auto;
}

.salary {
	@apply flex;
}

.list-move {
	/* transition: all 1s; */
	@apply transition-all duration-1000;
}
</style>
