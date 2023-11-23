import React, { Suspense } from 'react'
import { useImage } from 'react-image'

function MyImageComponent() {
    const { src } = useImage({
        srcList: 'assets/IMG_1364.JPEG',
    })

    return <img src={src} />
}

export default function AboutMe() {
    return (
        <div>
            <div id="me-image" alt="man-with-coffee-in-hand" >
            <Suspense>
                <MyImageComponent />
            </Suspense>
            </div>

            <section id="about-me" class="headers">About Me</section>
            <p id="me"> Hello! My name is Ali Aldawoodi and have a passion for coding. I never had realized it, and for most of
                my life never gave it a shot up until only a few months ago. Well I am very glad that life has lead me to
                this point as I never knew or felt for sure about what purpose and contribution I could make for society.
                Now I do and am very glad to share it with you! </p>
        </div>
    );
}