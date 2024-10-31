import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

function Home() {
    const [chars, setChars] = useState([])
    const { user } = useUser()
    const navigate = useNavigate()

    const getChars = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const resJson = await res.json()
        setChars(resJson.results)
    }

    const goToChar = (charId) => {
        navigate(`/personaje/${charId}`)
    }

    useEffect(() => {
        getChars()
    }, [])

    return (
        <>
            <Container>
                <h1>Home</h1>
                <Row xs={1} lg={4} className='g-4'>
                    {chars.map(char => (
                        <Col key={`char-${char.id}`}>
                            <Card>
                                <Card.Img variant="top" src={char.image} />
                                <Card.Body>
                                    <Card.Title>{char.name}</Card.Title>
                                    <Button disabled={!user} className="btn btn-primary" onClick={() => goToChar(char.id)}>Ir al personaje</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Home