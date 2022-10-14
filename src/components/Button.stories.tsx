import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
	title: 'Compoonents/Button',
	component: Button,
	args: {
		children: 'Create account',
		size: 'md',
	},
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
