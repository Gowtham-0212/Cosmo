
function cameras({chosen}) {
  return (
    <ul>
        <li>
            Capture stunning photos and videos with the <b>{chosen.name}</b> from <b>{chosen.brand}</b>. Designed for photography enthusiasts and everyday creators, it delivers detailed images and high-quality video for a wide range of shooting situations. 
        </li>

        <li> 
            Featuring a <b>{chosen.megapixels}</b> camera sensor and <b>{chosen.lens}</b> lens, the camera provides excellent image quality with sharp details and vibrant colours.
        </li>

        <li>
            Its versatile design makes it suitable for landscapes, portraits, travel, events, and everyday photography, giving you the flexibility to capture memorable moments with ease.
        </li>

        <li>
            With its combination of image quality, performance, and convenient features, the <b>{chosen.name}</b> is a reliable choice for photographers and content creators looking to enhance their photography experience.
        </li>
    </ul>
  )
}

export default cameras