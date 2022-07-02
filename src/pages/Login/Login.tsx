import { LoginProps } from "./types";

function Login(props : LoginProps) {
    const {text} = props;

    return (
        <div>
            <h1>Login</h1>
            <p>Bem vindo a tela Login {text}.</p>
        </div>
    );
};

export default Login;