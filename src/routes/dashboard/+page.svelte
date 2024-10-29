<!-- Main Content -->
<main class="flex-1 p-8 overflow-auto">
	<h1 class="text-2xl font-bold mb-6">Estadisticas</h1>

	<!-- Estadisticas -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
		<div class="bg-gray-800 p-6 rounded-lg">
			<div class="flex justify-between items-center mb-4">
				<div class="flex items-center">
					<i class="fas fa-shoe-prints text-green-500 mr-2" />
					<span>Steps</span>
				</div>
				<span class="text-green-500">+7,3%</span>
			</div>
			<div class="text-3xl font-bold mb-2">83.651</div>
			<div class="h-2 bg-gray-700 rounded-full">
				<div class="h-2 bg-green-500 rounded-full" style="width: 70%;" />
			</div>
		</div>
		<div class="bg-gray-800 p-6 rounded-lg">
			<div class="flex justify-between items-center mb-4">
				<div class="flex items-center">
					<i class="fas fa-fire text-green-500 mr-2" />
					<span>Energy Burn</span>
				</div>
				<span class="text-green-500">-12,8%</span>
			</div>
			<div class="text-3xl font-bold mb-2">4.713 Kcal</div>
			<div class="h-2 bg-gray-700 rounded-full">
				<div class="h-2 bg-green-500 rounded-full" style="width: 60%;" />
			</div>
		</div>
		<div class="bg-gray-800 p-6 rounded-lg">
			<div class="flex justify-between items-center mb-4">
				<div class="flex items-center">
					<i class="fas fa-moon text-green-500 mr-2" />
					<span>Sleep</span>
				</div>
				<span class="text-green-500">+5,00%</span>
			</div>
			<div class="text-3xl font-bold mb-2">57.5 Hours</div>
			<div class="h-2 bg-gray-700 rounded-full">
				<div class="h-2 bg-green-500 rounded-full" style="width: 80%;" />
			</div>
		</div>
	</div>

	<!-- Estadisticas Semanales -->
	<h2 class="text-xl font-bold mb-4">Estadisticas Semanales</h2>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
		<div class="bg-gray-800 p-6 rounded-lg">
			<div class="flex justify-between items-center mb-4">
				<h3 class="text-lg font-semibold">Your Calories Consumption</h3>
				<i class="fas fa-ellipsis-v" />
			</div>
			<div class="h-48 flex items-end justify-between">
				<div class="flex flex-col items-center">
					<div class="w-8 bg-green-500 rounded-t" style="height: 120px;" />
					<span class="mt-2 text-xs">Mon</span>
				</div>
				<div class="flex flex-col items-center">
					<div class="w-8 bg-green-500 rounded-t" style="height: 80px;" />
					<span class="mt-2 text-xs">Tue</span>
				</div>
				<div class="flex flex-col items-center">
					<div class="w-8 bg-green-500 rounded-t" style="height: 100px;" />
					<span class="mt-2 text-xs">Wed</span>
				</div>
				<div class="flex flex-col items-center">
					<div class="w-8 bg-green-500 rounded-t" style="height: 140px;" />
					<span class="mt-2 text-xs">Thu</span>
				</div>
				<div class="flex flex-col items-center">
					<div class="w-8 bg-green-500 rounded-t" style="height: 90px;" />
					<span class="mt-2 text-xs">Fri</span>
				</div>
				<div class="flex flex-col items-center">
					<div class="w-8 bg-green-500 rounded-t" style="height: 110px;" />
					<span class="mt-2 text-xs">Sat</span>
				</div>
				<div class="flex flex-col items-center">
					<div class="w-8 bg-green-500 rounded-t" style="height: 130px;" />
					<span class="mt-2 text-xs">Sun</span>
				</div>
			</div>
		</div>
		<div class="bg-gray-800 p-6 rounded-lg">
			<div class="flex justify-between items-center mb-4">
				<h3 class="text-lg font-semibold">Weight Monitoring</h3>
				<i class="fas fa-ellipsis-v" />
			</div>
			<div class="h-48 flex items-end">
				<svg viewBox="0 0 200 100" class="w-full h-full">
					<polyline
						fill="none"
						stroke="#10B981"
						stroke-width="2"
						points="0,50 40,30 80,60 120,40 160,70 200,50"
					/>
				</svg>
			</div>
		</div>
	</div>

	<!-- Latest Meals -->
	<h2 class="text-xl font-bold mb-4">Latest Meals</h2>
	<div class="bg-gray-800 rounded-lg overflow-hidden">
		<table class="w-full">
			<thead>
				<tr class="bg-gray-700">
					<th class="p-3 text-left">Meal</th>
					<th class="p-3 text-left">Food</th>
					<th class="p-3 text-left">Calories</th>
					<th class="p-3 text-left">Amount</th>
					<th class="p-3 text-left">Carbs</th>
					<th class="p-3 text-left">Proteins</th>
					<th class="p-3 text-left">Fat</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="p-3">Breakfast</td>
					<td class="p-3">Fried Eggs</td>
					<td class="p-3">314 Kcal</td>
					<td class="p-3">160 gr</td>
					<td class="p-3">30 gr</td>
					<td class="p-3">54 gr</td>
					<td class="p-3">55 gr</td>
				</tr>
				<tr class="bg-gray-700">
					<td class="p-3">Breakfast</td>
					<td class="p-3">Kidney Beans</td>
					<td class="p-3">277 Kcal</td>
					<td class="p-3">80 gr</td>
					<td class="p-3">50 gr</td>
					<td class="p-3">12 gr</td>
					<td class="p-3">18 gr</td>
				</tr>
			</tbody>
		</table>
	</div>
</main>
