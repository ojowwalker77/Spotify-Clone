"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import {FaPlay} from "react-icons/fa"

interface ListItemProps {
    image: string
    name: string
    href: string
}
const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href
}) => {
    const router = useRouter()

    const onClick = () => {
        // add auth 
        router.push(href)
    }
    return (
      <div>
        <button
        onClick={onClick}
        className="
        relative
        group
        flex
        items-center
        rounded-md
        overflow-hidden
        gap-x-6
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-4
        max-h-[64px]
        min-w-[300px]
        max-w-[280px]"

        >
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image
                className="object-cover"
                fill
                src={image}
                alt="Image"/>
            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            <div className="absolut
            transition
            opacity-0
            rounded-full
            flex
            items-center
            justify-center
            bg-green-500
            p-4
            drop-shadow-md
            right-5
            group-hover:opacity-100
            hover:scale-110">
                <FaPlay className="text-black"/>
            </div>
        </button>
        </div>     
    )
}
export default ListItem