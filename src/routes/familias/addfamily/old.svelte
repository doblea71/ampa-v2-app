<section class="py-2">
	<!-- Encabezado  -->
	<div class="rounded-t mb-0 px-6 py-6">
		<div class="text-center flex justify-between">
			<h6 class="text-gray-700 text-xl font-bold">Datos de Familia</h6>
			<button
				onclick={() => {
					/* Lógica para cerrar sesión */
				}}
				class="bg-green-700 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md hover:bg-green-800 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
				type="button"
			>
				Grabar
			</button>
		</div>
	</div>

	<!-- Boton para grabar -->
	<div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
		<div
			class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"
		>
			<form>
				<!-- Datos de la madre -->
				<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
					<h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
						Datos de la Madre
					</h6>
					<div class="flex flex-wrap">
						<div class="w-full lg:w-6/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="nombres_madre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Nombres
								</label>
								<input
									id="nombres_madre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Hola"
									placeholder="lucky"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-6/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="apellidos_madre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Apellidos
								</label>
								<input
									id="apellidos_madre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Jesse"
									placeholder="Jesse"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-8/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="email_madre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Correo Electrónico
								</label>
								<input
									id="email_madre"
									type="email"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="jesse@example.com"
									placeholder="madre_correo@example.com"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="movil_madre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Tlfon Móvil
								</label>
								<input
									id="movil_madre"
									type="email"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="644 45 78 95"
									placeholder="### ## ## ##"
									required
								/>
							</div>
						</div>
					</div>

					<hr class="mt-6 border-b-1 border-gray-300" />

					<h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
						Información de Contacto
					</h6>
					<div class="flex flex-wrap">
						<div class="w-full lg:w-12/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="direccion_madre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Dirección
								</label>
								<input
									id="direccion_madre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
									placeholder="Jesse"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="ciudad_madre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Ciudad
								</label>
								<input
									id="ciudad_madre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="New York"
									placeholder="New York"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="pais_madre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Pais
								</label>
								<input
									id="pais_madre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="United States"
									placeholder="United States"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="codigo_postal_madre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Código Postal
								</label>
								<input
									id="codigo_postal_madre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Código Postal"
									placeholder="# Codigo Postal"
									required
								/>
							</div>
						</div>
					</div>

					<hr class="mt-6 border-b-1 border-gray-300" />
				</div>
				<!-- Datos del padre -->
				<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
					<h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
						Datos del Padre
					</h6>
					<div class="flex flex-wrap">
						<div class="w-full lg:w-6/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="nombres_padre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Nombres
								</label>
								<input
									id="nombres_padre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Hola"
									placeholder="lucky"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-6/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="apellidos_padre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Apellidos
								</label>
								<input
									id="apellidos_padre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Jesse"
									placeholder="Jesse"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-8/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="email_padre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Correo Electrónico
								</label>
								<input
									id="email_padre"
									type="email"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="jesse@example.com"
									placeholder="padre_correo@example.com"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="movil_padre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Tlfon Móvil
								</label>
								<input
									id="movil_padre"
									type="email"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="644 45 78 95"
									placeholder="### ## ## ##"
									required
								/>
							</div>
						</div>
					</div>

					<hr class="mt-6 border-b-1 border-gray-300" />

					<h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
						Información de Contacto
					</h6>
					<div class="flex flex-wrap">
						<div class="w-full lg:w-12/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="direccion_padre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Dirección
								</label>
								<input
									id="direccion_padre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
									placeholder="Jesse"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="ciudad_padre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Ciudad
								</label>
								<input
									id="ciudad_padre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="New York"
									placeholder="New York"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="pais_padre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Pais
								</label>
								<input
									id="pais_padre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="United States"
									placeholder="United States"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="codigo_postal_padre"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Código Postal
								</label>
								<input
									id="codigo_postal_padre"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Código Postal"
									placeholder="# Codigo Postal"
									required
								/>
							</div>
						</div>
					</div>

					<hr class="mt-6 border-b-1 border-gray-300" />
				</div>
				<!-- Datos del Tutor -->
				<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
					<h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
						Datos del Tutor/ra
					</h6>
					<div class="flex flex-wrap">
						<div class="w-full lg:w-6/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="nombres_tutor"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Nombres
								</label>
								<input
									id="nombres_tutor"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Hola"
									placeholder="lucky"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-6/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="apellidos_tutor"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Apellidos
								</label>
								<input
									id="apellidos_tutor"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Jesse"
									placeholder="Jesse"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-8/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="email_tutor"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Correo Electrónico
								</label>
								<input
									id="email_tutor"
									type="email"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="jesse@example.com"
									placeholder="padre_correo@example.com"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="movil_tutor"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Tlfon Móvil
								</label>
								<input
									id="movil_tutor"
									type="email"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="644 45 78 95"
									placeholder="### ## ## ##"
									required
								/>
							</div>
						</div>
					</div>

					<hr class="mt-6 border-b-1 border-gray-300" />

					<h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
						Información de Contacto
					</h6>
					<div class="flex flex-wrap">
						<div class="w-full lg:w-12/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="direccion_tutor"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Dirección
								</label>
								<input
									id="direccion_tutor"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
									placeholder="Jesse"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="ciudad_tutor"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Ciudad
								</label>
								<input
									id="ciudad_tutor"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="New York"
									placeholder="New York"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="pais_tutor"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Pais
								</label>
								<input
									id="pais_tutor"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="United States"
									placeholder="United States"
									required
								/>
							</div>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<div class="relative w-full mb-3">
								<label
									for="codigo_postal_tutor"
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									htmlfor="grid-password"
								>
									Código Postal
								</label>
								<input
									id="codigo_postal_tutor"
									type="text"
									class="
                    border-0 px-3 py-3
                    placeholder-gray-300
                    text-black
                    bg-gray-800 rounded
                    text-sm shadow
                    focus:outline-none
                    focus:ring w-full
                    ease-linear
                    transition-all
                    duration-150"
									value="Código Postal"
									placeholder="# Codigo Postal"
									required
								/>
							</div>
						</div>
					</div>

					<hr class="mt-6 border-b-1 border-gray-300" />
				</div>
			</form>
		</div>
		<div class="flex justify-between items-center mb-4">
			<a
				href="/grabar"
				class="bg-green-700 text-white px-4 py-2 mb-4 rounded-md hover:bg-green-800 transition"
			>
				Grabar
			</a>
		</div>
	</div>
</section>
