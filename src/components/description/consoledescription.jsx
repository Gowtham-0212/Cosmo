import React from 'react'

function consoledescription({chosen}) {
  return (
    <ul>
       
<li>
    Experience immersive gaming with the <b>{chosen.name}</b> from{" "}
    <b>{chosen.brand}</b>, designed to deliver powerful performance and an
    exciting gaming experience for players of all levels.
</li>

<li>
    With advanced hardware and smooth performance, the <b>{chosen.name}</b>
    {" "}provides detailed graphics, responsive gameplay, and fast loading for a
    wide range of games and entertainment.
</li>

<li>
    Enjoy your favourite games, movies, and digital entertainment on a
    compatible display, making the console a great choice for gaming and
    home entertainment.
</li>

<li>
    Combining powerful performance, modern technology, and convenient
    entertainment features, the <b>{chosen.name}</b> is a great choice for
    gamers looking for a reliable and immersive gaming experience.
</li>
    </ul>
  )
}

export default consoledescription