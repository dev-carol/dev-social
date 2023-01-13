
export type FeedGridItemsProps = {
    description?: string;
    imgSrc: string;
}


const FeedGridItems = ({description, imgSrc}: FeedGridItemsProps) => {
  return (
    <div>
        <img src={imgSrc} alt={description} title={description} className="w-full object-contain"/>
    </div>
  )
}
export default FeedGridItems;