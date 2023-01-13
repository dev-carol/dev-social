import FeedGridItems, { FeedGridItemsProps } from "./FeedGridItems";

type Props = {
    items: FeedGridItemsProps[]
}

 const FeedGrid = ({items}: Props) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      {items.map((item, index)=> (
        <FeedGridItems key={index }{...item}/>
      ))}
    </div>
  )
}
export default FeedGrid;