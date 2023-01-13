import NavbarLinks from "../../components/Navbar/NavbarLinks/NavbarLinks";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar/Navbar";
import Button from "../../components/Button/Button";
import UserNameSmall from "../../components/User/userNameSmall";
import FeedCardList from "../../components/Feed/FeedCardList";
import UserNameLarge from "../../components/User/userNameLarge";

const FeedPage = () => {
  return (
    <>
      <Navbar>
        <Logo />
        <div className="flex items-center justify-center gap-4">
          <NavbarLinks
            items={[
              { label: "Inicio", href: "/" },
              { label: "Explorar", href: "/explorar" },
            ]}
          />
          <UserNameSmall userName="batmanoffical" onClick={() => {}} />
          <Button> Criar novo post</Button>
        </div>
      </Navbar>
      <section className="w-full  max-w-5xl  py-12 m-auto grid  grid-cols-1 lg:grid-cols-[1fr,380px]">
        <section className="w-full ">
          <FeedCardList list={new Array(5).fill({
            userName: 'Batman',
            userSrc: './src/assets/img/avatarbatman.jpg',
            defaultLiked:false,
            likesCount: 100,
            feedSrc: './src/assets/img/fotofeedbatman1.png',
            description: "Hey,Dev. O Batman está de volta! Estou esperando o seu like para esse projeto"
          })}/>
        </section>

        <section className="">
        <UserNameLarge name= "Batman"userName="batmanoffical" onClick={() => {}}/>
        </section>
      </section>
    </>
  );
};

export default FeedPage;
