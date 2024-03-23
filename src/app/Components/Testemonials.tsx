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
            message: "1. Essa é a primeira mensagem",
            name: "Bruno",
            nationality: "Brasileiro, eTA Canadense"
        },
        {
            message: "2. Essa é a segunda mensagem",
            name: "Cristiano",
            nationality: "Português, eTA Canadiano"
        },
        {
            message: "3. Essa é a terceira mensagem",
            name: "Gustavo",
            nationality: "Espanhol, eTA Canadiense"
        },
        {
            message: "4. Essa é a quarta mensagem",
            name: "Guilherme",
            nationality: "Mexicano, eTA Canadiense"
        },
        {
            message: "5. Essa é a quinta mensagem",
            name: "John Doe",
            nationality: "Brasileiro, eTA Nova Zelândia"
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

