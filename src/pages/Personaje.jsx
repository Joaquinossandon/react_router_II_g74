import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom"

function Personaje() {
    const navigate = useNavigate()
    const { idPersonaje } = useParams();
    const [personaje, setPersonaje] = useState({})

    const getChar = async () => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
        const resJson = await res.json()
        setPersonaje(resJson)
    }

    useEffect(() => {
        getChar()
    }, [])

    return (
        <>
            <Container>
                <Button variant="primary" className="fs-2 my-4" onClick={() => navigate(-1)}>⬅️</Button>
                <Row>
                    <Col>
                        <img src={personaje.image} alt="" />
                        <h1>{personaje.name}</h1>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Personaje