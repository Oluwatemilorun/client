import React, { CSSProperties, HTMLAttributes } from 'react'

import {
	Typography,
	NoSsr,
	Paper,
	MenuItem,
	TextField
} from '@material-ui/core'
import { BaseTextFieldProps } from '@material-ui/core/TextField'
import { Omit } from '@material-ui/types'

import {
	Cancel
} from '@material-ui/icons'

import _Select from 'react-select'

import { Styles } from './style'
import { Theme } from '@/lib'

const NoOptionsMessage = (props) => {
	return (
		<Typography
			color="textSecondary"
			className={props.selectProps.classes.noOptionsMessage}
			{...props.innerProps}
		>
			{props.children}
		</Typography>
	)
}

const inputComponent = ({ inputRef, ...props }) => {
	return <div ref={inputRef} {...props} />
}

const Control = (props) => {
	const {
		children,
		innerProps,
		innerRef,
		selectProps: { classes, TextFieldProps },
	} = props

	return (
		<TextField
			fullWidth
			InputProps={{
				inputComponent,
				inputProps: {
					className: classes.input,
					ref: innerRef,
					children,
					...innerProps,
				},
			}}
			{...TextFieldProps}
		/>
	)
}

const Option = (props) => {
	return (
		<MenuItem
			ref={props.innerRef}
			selected={props.isFocused}
			component="div"
			style={{
				fontWeight: props.isSelected ? 500 : 400,
			}}
			{...props.innerProps}
		>
			{props.children}
		</MenuItem>
	)
}

const Placeholder = (props) => {
	const { selectProps, innerProps = {}, children } = props
	return (
		<Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
			{children}
		</Typography>
	)
}

const SelectValue = (props) => {
	return (
		<Typography className={props.selectProps.classes.SelectValue} {...props.innerProps}>
			{props.children}
		</Typography>
	)
}

const ValueContainer = (props) => {
	return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>
}

const Menu = (props) => {
	return (
		<Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
			{props.children}
		</Paper>
	)
}

const components = {
	Control,
	Menu,
	NoOptionsMessage,
	Option,
	Placeholder,
	SelectValue,
	ValueContainer,
}

export const Autocompelete = () => {
	const classes = Styles()

	const [Select, setSelect] = useState(null)

	const handleChange = (value) => {
		setSelect(value)
	}

	const selectStyles = {
		input: (base) => ({
			...base,
			color: Theme.palette.text.primary,
			'& input': {
				font: 'inherit',
			},
		}),
	}

	return (
		<div className={classes.root}>
			<NoSsr>
				<_Select
					classes={classes}
					styles={selectStyles}
					inputId="react-select-single"
					TextFieldProps={{
						label: 'Country',
						InputLabelProps: {
							htmlFor: 'react-select-single',
							shrink: true,
						},
					}}
					placeholder="Search a country (start with a)"
					options={suggestions}
					components={components}
					value={Select}
					onChange={handleChange}
				/>
			</NoSsr>
		</div>
	)
}