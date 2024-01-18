import type { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
	href: string
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ href, children }) => {
	return (
		<Link
			to={href}
			className="bg-green hover:bg-green/90 active:opacity-75 text-[#f5fced] text-sm leading-none px-4 py-2 rounded-md w-max"
		>
			{children}
		</Link>
	)
}

export default Button
