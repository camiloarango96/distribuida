const tipos = {
	primary: 'text-white bg-primary font-bold',
	secondary: 'text-white bg-secondary',
	terceary: 'bg-gray-300',
};

export function PrimaryButton(props) {
	return (
		<button
			onClick={props.onclick}
			className={`text-center text-sm px-5 py-2 rounded-custom ${tipos.primary} ${props.customStyle}`}
		>
			{props.text}
		</button>
	);
}

export function SecondaryButton(props) {
	return (
		<button
			onClick={props.onclick}
			className={`text-center text-sm px-5 py-2 rounded-custom ${tipos.secondary} ${props.customStyle}`}
		>
			{props.text}
		</button>
	);
}

export function TercearyButton(props) {
	return (
		<button
			onClick={props.onclick}
			className={`text-center text-sm px-5 py-2 rounded-custom ${tipos.terceary} ${props.customStyle}`}
		>
			{props.text}
		</button>
	);
}
