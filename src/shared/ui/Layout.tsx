import type { FC, PropsWithChildren } from 'react'

interface LayoutProps {
	title: string
	className?: string
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
	title,
	children,
	className
}) => {
	return (
		<main className="text-black flex flex-col gap-10 py-8 px-4 sm:px-10 lg:px-14 bg-[#f5fced] min-h-full h-max">
			<h1 className="font-bold text-3xl leading-10 text-green">{title}</h1>
			<section className={className}>{children}</section>
		</main>
	)
}

export default Layout
