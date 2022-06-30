<template>
	<div class="app">
		<header>
			<div class="title">
				<img
					src="./assets/heart.svg"
					alt="heart svg"
					class="w-16 mr-5"
				/>
				<h1 class="font-hylia tracking-mySpacing text-5xl">
					Hyrule Jobs
				</h1>
			</div>

			<div class="order">
				<button @click="handleClick('title')">Order by Title</button>
				<button @click="handleClick('salary')">Order by Salary</button>
				<button @click="handleClick('location')">
					Order by Location
				</button>
			</div>
		</header>
		<JobList :jobs="jobs" :order="order" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Job from "./types/Job";
import OrderTerm from "./types/OrderTerm";
import JobList from "./components/JobList.vue";

export default defineComponent({
	name: "App",
	components: { JobList },
	setup() {
		const jobs = ref<Job[]>([
			{
				title: "farm worker",
				location: "lon lon ranch",
				salary: 30000,
				id: "1",
			},
			{
				title: "quarryman",
				location: "death mountain",
				salary: 40000,
				id: "2",
			},
			{
				title: "flute player",
				location: "the lost woods",
				salary: 35000,
				id: "3",
			},
			{
				title: "fisherman",
				location: "lake hylia",
				salary: 21000,
				id: "4",
			},
			{
				title: "prison guard",
				location: "gerudo valley",
				salary: 32000,
				id: "5",
			},
		]);

		const order = ref<OrderTerm>("title");

		const handleClick = (term: OrderTerm) => {
			order.value = term;
		};

		return { jobs, handleClick, order };
	},
});
</script>

<style scoped>
header {
	@apply text-center;
}

header .order {
	@apply mt-5;
}

button {
	@apply mt-10 mb-0 mx-3 text-btn bg-btnBg border-solid border-2 border-btn py-2 px-4 rounded-md cursor-pointer font-bold;
}

.title {
	@apply flex justify-center items-center mt-12;
}
</style>
