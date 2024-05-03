'use client'

import { useEffect, useState } from 'react'

import { Splide, SplideSlide, SplideTrack  } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function Testemonials() {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth)
            const updateDimensions = () => {
                setWidth(window.innerWidth)
            }
            window.addEventListener('resize', updateDimensions)
            return () => {
                window.removeEventListener('resize', updateDimensions)
            }
        }
    }, [])

    const options = {
        type: "loop",
        perPage: width < 1320 ? 1 : 2,
        focus: 'left',
        rewind: true,
        pauseOnHover: true,
    }

    const testemonials = [
        {
            message: "Gostei da seriedade e vou indicar para amigos meus. ",
            name: "Gilson S.",
            nationality: "Minas Gerais"
        },
        {
            message: "Muito obrigado pela sua pronta atenção à minha solicitação. Desculpe pelos erros no preenchimento. São esses atendimentos que fazem a gente continuar acreditando. Valeu!",
            name: "João Carlos M.",
            nationality: "Rio Grande do Sul"
        },
        {
            message: "Ufa! Você foi fantástico! Não sei como agradecer. Muito grata mesmo. ",
            name: "Lucia B.",
            nationality: "Ceará"
        },
        {
            message: "Sim! Eu e minha madrinha já recebemos nossas eTAs! Foi incrivelmente rápido. Obrigada!",
            name: "Paula T.",
            nationality: "Paraná"
        }
    ]

    return (
        <div className="wrapper">
            <Splide options={ options } hasTrack={ false } >
                <div style={ { position: 'relative' } }>
                    <SplideTrack>
                        {
                            testemonials.map((element, index) => {
                                return (
                                    <SplideSlide key={ index }>
                                        <div className="flex flex-col gap-2 text-center px-12 min-h-48">
                                            <q className="text-2xl font-bold">{element.message}</q>
                                            <cite>{element.name}</cite>
                                            <span>{element.nationality}</span>
                                        </div>
                                    </SplideSlide>
                                )
                            })
                        }
                    </SplideTrack>
                </div>
            </Splide>
        </div>
    )
}

