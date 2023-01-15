import Navbar from "../../components/Navbar/Navbar/Navbar";
import UserDetailed from "../../components/User/userDeitailed";

import PostViewModal from "../../components/Modal/PostViewModal";
import { useState } from "react";
import FeedGrid from "../../components/Feed/FeedGrid";

const ProfilePage = () => {
  const [isPostViewModalVisible, setPostViewModalVisible] = useState(false)
 
  return (
    <>
      <Navbar
        links={[
          { label: "Inicio", href: "/" },
          { label: "Explorar", href: "/explorar" },
        ]}
      />
      <PostViewModal isVisible={isPostViewModalVisible} setIsVisible={setPostViewModalVisible}/>
      <section className="w-full  max-w-5xl py-12 m-auto ">
        <section className="w-full flex items-center justify-center p-4">
          <UserDetailed
            userName="batman"
            name="Batman"
            postsCount={5}
            followersCount={10000}
            followingCount={10}
            biography="Combate o crime pela noite e programar pelo dia. Esse é o Batman que você ainda não conheceu!"
          />
        </section>
        <section className="w-full p-4">
          <FeedGrid
            onClick={(item) => setPostViewModalVisible(true)}
            items={new Array(9).fill({
              imgSrc: "https://wallpaperaccess.com/full/7321167.png",
              description: "Finge que tem uma legenda legal aqui",
            })}
          />
        </section>
      </section>
    </>
  );
};

export default ProfilePage;
