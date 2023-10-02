import Header from "@/components/Header"
import ListItem from "@/components/ListItem"
export default function Home() {
  return (
    <div className="
    bg-neutral-900
    rounded-lg
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
    ">
      <Header>
        <div className="mb-2">
          <h1 className="
          text-white
          text-3xl
          font-semibold">
            Welcome back
          </h1>
          <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          mt-4
          gap-4
          ">
            <ListItem
            image="/images/liked.png"
            name="Liked Songs"
            href="liked" />
            <ListItem
            image="/images/juice.png"
            name="This is Juice WRLD"
            href="juice" />
            <ListItem
            image="/images/bmth.png"
            name="This is Bring Me The Horizon"
            href="bmth" />
            <ListItem
            image="/images/kendrick.png"
            name="This is Kendrick Lamar"
            href="kendrick" />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest songs
          </h1>
        </div>
        <div>
          to do: create list of song`s cards
        </div>
      </div>
      </div>
  )
}
