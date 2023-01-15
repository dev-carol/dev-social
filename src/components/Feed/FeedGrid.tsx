import FeedGridItems, { FeedGridItemProps } from "./FeedGridItems";


type Props = {
  items: FeedGridItemProps[];
  onClick: (item: FeedGridItemProps) => void;
};

 const FeedGrid = ({ items, onClick }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      {items.map((item, index) => (
        <FeedGridItems key={index} {...item} onClick={() => onClick(item)} />
      ))}
    </div>
  );
}

export default FeedGrid;