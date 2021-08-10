import { SecondaryButton } from './button';
import Image from 'next/image';
import React from 'react';

export default function AdvertisingInicio(props) {
	return (
		<div className="mt-6 w-45 flex flex-col  pb-5  rounded-xl shadow-lg">
			<div className="flex relative w-full h-1/3 rounded-x">
				<div className="inline-block absolute bg-myYellow w-full h-10 rounded-lg -bottom-3 z-0"></div>
				<img
					src={props.imagen.src}
					alt={props.imagen.alt}
					className=" w-full h-52 rounded-xl z-10 object-cover"
				/>
			</div>
			<div className="flex flex-col justify-center items-center w-full px-8 mt-10">
				<p className="text-lg mb-4 leading-tight text-gray-500">
					{props.content}
				</p>

				<div className="w-full flex justify-end">
					<SecondaryButton
						text={`Vuela desde ${props.price}`}
						customStyle="w-2/4"
					/>
				</div>
			</div>
		</div>
	);
}
