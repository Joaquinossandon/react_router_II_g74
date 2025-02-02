import { Button, Container, Form } from "react-bootstrap"
import { useUser } from "../context/UserContext"

function Login() {

    const { signIn } = useUser()

    return (
        <Container className="mt-4">
            <h1>Login</h1>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={() => signIn()} >
                    Submit
                </Button>
            </Form>
        </Container >
    )
}

export default Login