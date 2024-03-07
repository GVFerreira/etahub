'use client'

import { Splide, SplideSlide, SplideTrack  } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/react-splide/css'

export default function Testemonials() {
    const options = {
        type: "loop",
        perPage: 2,
        extensions: ({ AutoScroll }),
        focus: 'left',
        autoStart: true,
        rewind: true,
        pauseOnHover: true,
        autoScroll: {
            speed: 1,
        }
    }

    const testemonials = [
        {
            message: "1. Essa é a primeira mensagem",
            name: "Nome do Cliente",
            nationality: "Brasileiro, eTA Canadense"
        },
        {
            message: "2. Essa é a segunda mensagem",
            name: "Nome do Cliente",
            nationality: "Brasileiro, eTA Canadense"
        },
        {
            message: "3. Essa é a terceira mensagem",
            name: "Nome do Cliente",
            nationality: "Brasileiro, eTA Canadense"
        },
        {
            message: "4. Essa é a quarta mensagem",
            name: "Nome do Cliente",
            nationality: "Brasileiro, eTA Canadense"
        },
        {
            message: "5. Essa é a quinta mensagem",
            name: "Nome do Cliente",
            nationality: "Brasileiro, eTA Canadense"
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
                                        <div className="flex flex-col gap-2 text-center">
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

