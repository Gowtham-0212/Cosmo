import React from 'react'

function tv({chosen}) {
  return (
    <ul>
      
<li>
    Enjoy an immersive entertainment experience with the <b>{chosen.name}</b>{" "}
    from <b>{chosen.brand}</b>, designed to deliver stunning visuals for
    movies, TV shows, sports, and gaming.
</li>

<li>
    Featuring a high-quality <b>{chosen.display}</b> display, the{" "}
    <b>{chosen.name}</b> provides clear, detailed, and vibrant visuals for an
    enjoyable viewing experience.
</li>

<li>
    With modern entertainment features and reliable performance, this TV makes
    it easy to enjoy your favourite movies, shows, and other content from the
    comfort of your home.
</li>

<li>
    Combining impressive picture quality, convenient features, and a modern
    design, the <b>{chosen.name}</b> is a great addition to your home
    entertainment setup.
</li>

    </ul>
  )
}

export default tv