import { Footer } from "../../components/Footer/Footer";
import CadastroForm from "../../components/Form/CadastroForm";
import "./CadastroUser.css"; // Aquele CSS do primeiro post (min-height: 100vh)

export function CadastroUser(){
    return(
        <div className="Cadastro">
            {/* Adicione uma classe para centralizar o conteúdo verticalmente */}
            <main className="content-center">
                <CadastroForm />
            </main>
            
            <Footer />
        </div>
    )
}