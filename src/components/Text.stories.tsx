import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
	title: 'Compoonents/Text',
	component: Text,
	args: {
		children: 'Lorem Ipsum',
	},
	argTypes: {
		size: {
			defaultValue: 'md',
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
	args: {
		size: 'sm',
	},
};
export const Large: StoryObj<TextProps> = {
	args: {
		size: 'lg',
	},
};
export const customComponent: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: <p>Testando</p>,
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		asChild: {
			table: {
				disable: true,
			},
		},
	},
};
