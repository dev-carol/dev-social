import classNames from "classnames";

type Props = {
  onClick?: VoidFunction;
  userName: string;
  name: string;
  src?: string;
};
const UserNameLarge = ({ userName, name, src="../src/assets/img/avatarbatman.jpg",  onClick }: Props) => {
  return (
    <div
    className={classNames('flex items-center justify-center gap-2', {
      'cursor-pointer': !!onClick,
    })}
    onClick={onClick}
  >
      
      <img
        src={src}
        alt={userName}
        className="w-[58px] h-[58px] rounded-[58px]"
      />
      <div >
      <p className="font-bold text-yellow-500">{userName}</p>
      <p className="text-lg leading-4">{name}</p>
      </div>
   
    </div>
  );
};

export default UserNameLarge;
