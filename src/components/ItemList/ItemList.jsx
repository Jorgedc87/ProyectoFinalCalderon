import { ItemCard } from "./ItemCard"

export const ItemList = ({items}) => {
  return (
      <div className="flex justify-center gap-x-3 gap-y-8 sm:justify-evenly  flex-wrap  container mx-auto mt-6 font-montserrat">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}
