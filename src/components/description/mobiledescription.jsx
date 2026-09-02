
function mobiledescription({chosen}) {
  return (
        <>
            <ul>
                 <li>
                        Experience powerful performance with the <b>{chosen.name}</b> from{" "}
                        <b>{chosen.brand}</b>. Featuring a stunning <b>{chosen.display}</b> display,
                        this smartphone delivers an immersive viewing experience for entertainment,
                        gaming, browsing, and everyday use.
                    </li>

                    <li>
                        With <b>{chosen.ram}</b> RAM and <b>{chosen.storage}</b> storage,
                        the <b>{chosen.name}</b> provides smooth multitasking and plenty of
                        space for your apps, photos, videos, and files.
                    </li>

                    <li>
                        The device is equipped with a <b>{chosen.battery}</b> battery, giving
                        you dependable power throughout your day. Whether you're watching videos,
                        browsing social media, or staying connected, it is designed to keep up
                        with your daily activities.
                    </li>
                    
                    <li>
                         Designed with a combination of performance, style, functionality, and
                        convenience, the <b>{chosen.name}</b> is suitable for a wide range of
                        users. From entertainment and photography to gaming, communication, and
                        productivity, this smartphone is built to provide a dependable experience
                        for everyday use.
                    </li> 
            </ul>
        </>
  )
}

export default mobiledescription