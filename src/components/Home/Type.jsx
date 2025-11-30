import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Desarrolladora Backend Java/Spring Boot",
                    "Desarrolladora de Microservicios",
                    "Especialista en APIs REST & Cloud",
                    "Apasionada por Código Limpio y Escalable"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default Type