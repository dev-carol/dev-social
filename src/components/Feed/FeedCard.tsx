import UserNameSmall from "../../components/User/userNameSmall";
import { LikeButton } from "../../components/Button/LikeButton";
import { useState } from "react";

export type FeedCardProps = {
  userSrc: string;
  userName: string;
  feedSrc: string;
  defaultLiked?: boolean;
  likesCount: number;
  description: string;
};

const FeedCard = ({
  userSrc,
  userName,
  feedSrc,
  description,
  likesCount,
  defaultLiked = false,
}: FeedCardProps) => {
  const [isLiked, setIsLiked] = useState(defaultLiked);

  return (
    <div className="border border-gray-300 rounded-[4px]">
      <div className="flex flex-col items-start justify-center p-2">
        <UserNameSmall src={userSrc} name={userName} />
      </div>
      <div>
        <img
          src={feedSrc}
          alt="imagem do feed"
          className="w-full h-[400px]object-cover"
        />
      </div>
      <div>
        <div className="p-2 w-full flex justify-start">
          <LikeButton
            count={likesCount}
            isLiked={isLiked}
            onClick={() => setIsLiked((prev) => !prev)}
          />
        </div>
        <div className="pt-0 p-2 pb-2">
          <p className="text-justify leading-5">
            <strong>{userName}</strong>
            {description}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
