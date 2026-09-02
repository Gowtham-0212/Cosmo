import React from 'react'

function wheel({chosen}) {
  return (
    <ul>
<li>
    Take your racing experience to the next level with the <b>{chosen.name}</b>{" "}
    from <b>{chosen.brand}</b>, designed to provide immersive and responsive
    control for racing games.
</li>

<li>
    With its realistic design and precise controls, the <b>{chosen.name}</b>
    helps deliver a more engaging and enjoyable driving experience.
</li>

<li>
    Designed for comfortable and reliable use, it is suitable for racing
    enthusiasts looking to enjoy greater control and immersion during gameplay.
</li>

<li>
    Combining performance, comfort, and immersive gameplay, the{" "}
    <b>{chosen.name}</b> is a great addition to a modern gaming setup.
</li>
    </ul>
  )
}

export default wheel