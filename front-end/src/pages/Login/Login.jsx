import { Footer } from "../../components/Footer/Footer"
import LoginForm from "../../components/Form/LoginForm"
import "./Login.css"

export function Login(){
    return(
        <div className="Login">
            <main>
                <LoginForm />
            </main>
            
            <Footer />
        </div>
    )
}