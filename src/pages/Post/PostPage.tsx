import FileInput from "../../components/Form/Input/InputFile";
import Button from "../../components/Button/Button";

import Navbar from "../../components/Navbar/Navbar/Navbar";
import TextArea from "../../components/Form/Input/TextArea";

const PostPage = () => {
  return (
    <>
      <Navbar
        links={[
          { label: "Inicio", href: "/" },
          { label: "Explorar", href: "/explorar" },
        ]}
      />
      <div className="w-full max-w-5xl m-auto py-12 flex flex-col gap-4">
        <FileInput 
        label="Imagens"
        name="photo" id="photo" />
        <TextArea
        label="Descrição"
          name="description"
          id="dscription"
          placeholder="Descreva algo aqui..."
        />

        <div>
          <Button>Salvar</Button>
        </div>
      </div>
    </>
  );
};

export default PostPage;
