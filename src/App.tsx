import Button from "./components/Button/Button";
import LogoWhite from "../public/logo/dev-social-logo-white.png";
import Navbar from "./components/Navbar/Navbar/Navbar";
import NavbarLinks from "./components/Navbar/NavbarLinks/NavbarLinks";
import Input from "./components/Form/Input/Input";

const App = () => {
  return (
    <div className="App ">
      <Navbar>
        <img src={LogoWhite} alt="logo dev social" className="h-10 " />

        <div className="flex items-center justify-center gap-4">
          <NavbarLinks
            items={[
              { label: "Inicio", href: "/" },
              { label: "Explorar", href: "/explorar" },
              { label: "Entrar", href: "/entrar" },
            ]}
          />
          <Button> Criar nova conta</Button>
        </div>
      </Navbar>

      <div
        className="w-full max-w-lg m-auto flex flex-col  h-[calc(100vh-80px)] 
      items-center justify-center gap-4"
      >
        <h1 className="text-3xl ">Login</h1>
        <p className="text-lg font-bold mb-2">
          Acesse sua conta e compartilhe seu mundo!
        </p>
        <Input name="email" type="email" id="email" placeholder="E-mail" />
        <Input
          name="password"
          type="password"
          id="password"
          placeholder="Senha"
        />
        <Button className="w-full "> Conectar</Button>
        <p className="text-lg w-full text-center mt-4" >Novo na plataforma?
         <a className=" text-brandPrimary/500 font-bold ml-2" href="/cadastrar">Criar minha conta</a>
      </p>
      </div>
    </div>
  );
};

export default App;
