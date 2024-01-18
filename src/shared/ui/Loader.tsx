import type { FC } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loader: FC = () => {
	return (
		<div className="w-full py-10 flex justify-center">
			<AiOutlineLoading3Quarters className="fill-green animate-spin text-3xl" />
		</div>
	)
}

export default Loader
