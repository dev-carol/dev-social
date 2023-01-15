import classNames from "classnames";

type Props = {
  userName: string;
  onClick?: VoidFunction;
  src?: string;
};
const UserNameSmall = ({ userName, src="../src/assets/img/avatarbatman.jpg",  onClick }: Props) => {
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
        className="w-[28px] h-[28px] rounded-[28px]"
      />
      <p className="font-bold text-yellow-500">{userName}</p>
    </div>
  );
};

export default UserNameSmall;
