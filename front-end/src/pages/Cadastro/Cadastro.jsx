import { Footer } from "../../components/Footer/Footer"
import BookForm from "../../components/Form/BookForm"
import "./Cadastro.css"

export function Cadastro(){
    return(
        <div className="Cadastro">
            <main>
                <BookForm />
            </main>
            
            <Footer />
        </div>
    )
}