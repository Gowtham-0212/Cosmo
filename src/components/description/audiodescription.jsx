import React from 'react'

function audiodescription({chosen}) {
  return (
    <ul>

        <li>
            Enjoy an immersive audio experience with the <b>{chosen.name}</b> from{" "}
            <b>{chosen.brand}</b>, designed to deliver clear, detailed, and enjoyable
            sound for music, movies, gaming, and everyday entertainment.
        </li>

        <li>
            With its high-quality audio performance, the <b>{chosen.name}</b> delivers
            balanced sound with clear vocals, rich tones, and powerful audio for an
            engaging listening experience.
        </li>

        <li>
            Designed for convenient everyday use, it combines reliable performance with
            a comfortable and user-friendly design, making it suitable for entertainment
            at home, work, or on the go.
        </li>

        <li>
            With its combination of sound quality, performance, and convenience, the{" "}
            <b>{chosen.name}</b> is a great choice for anyone looking for an enjoyable
            and reliable audio experience.
        </li>
    </ul>
  )
}

export default audiodescription