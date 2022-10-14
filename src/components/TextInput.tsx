import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
	children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
	return (
		<div className='py-4 px-3 flex items-center gap-3 rounded outline-none bg-gray-800 focus-within:ring-2 ring-cyan-300'>
			{children}
		</div>
	);
}
export interface TextInputIconProps {
	children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
	return <Slot className='w-5 h-6 text-gray-400'>{children}</Slot>;
}

export interface TextInputInputProps
	extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
	return (
		<input
			className='outline-none text-gray-100 text-xs placeholder:text-gray-400 bg-transparent flex-1'
			{...props}
		/>
	);
}

export const TextInput = {
	Root: TextInputRoot,
	Input: TextInputInput,
	Icon: TextInputIcon,
};
