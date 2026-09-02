import React from 'react'

function controller({chosen}) {
  return (
    <ul>
<li>
    Enhance your gaming experience with the <b>{chosen.name}</b> from{" "}
    <b>{chosen.brand}</b>, designed to provide comfortable and responsive
    control during your favourite games.
</li>

<li>
    With its ergonomic design and intuitive button layout, the{" "}
    <b>{chosen.name}</b> offers comfortable handling for extended gaming
    sessions.
</li>

<li>
    Enjoy precise controls and responsive gameplay, making it suitable for
    a wide range of games and gaming styles.
</li>

<li>
    Combining comfort, performance, and convenient controls, the{" "}
    <b>{chosen.name}</b> is a great choice for gamers looking for a reliable
    and enjoyable gaming experience.
</li>
    </ul>
  )
}

export default controller