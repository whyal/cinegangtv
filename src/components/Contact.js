const Contact = () => {
	return (
		<>
			<h1 className='font-semibold text-6xl text-center mt-10'>Get in touch</h1>
			<form className='px-10 py-6 w-[50%]'>
				<label className='font-semibold text-slate-600' for='email'>
					Email:
				</label>
				<input
					type='email'
					id='email'
					class='my-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
					placeholder='Email'
				/>
				<label className='font-semibold text-slate-600' for='name'>
					Name:
				</label>
				<input
					type='text'
					id='name'
					class='my-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
					placeholder='Name'
				/>
				<button class='rounded-full bg-orange-500 px-4 py-2 my-2 text-white'>Submit</button>
			</form>
		</>
	);
};

export default Contact;
