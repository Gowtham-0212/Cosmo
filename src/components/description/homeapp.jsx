import React from 'react'

function homeapp({chosen}) {
  return (
    <ul> 
        { chosen.type=="Washing" && <>
            <li>
                Make your everyday laundry easier with the <b>{chosen.name}</b> from{" "}
                <b>{chosen.brand}</b>, designed to provide efficient and convenient washing
                performance for your household needs.
            </li>

            <li>
                With its reliable washing performance and practical features, the{" "}
                <b>{chosen.name}</b> helps deliver effective cleaning while making laundry
                care simple and convenient.
            </li>

            <li>
                Designed for everyday use, it offers a convenient solution for handling
                different types of clothes and regular laundry requirements.
            </li>

            <li>
                Combining performance, convenience, and modern functionality, the{" "}
                <b>{chosen.name}</b> is a reliable addition to your home appliances.
            </li> </>
        }
        { chosen.type=="AC" && <>
                <li>
                    Enjoy a comfortable indoor environment with the <b>{chosen.name}</b> from{" "}
                    <b>{chosen.brand}</b>, designed to deliver efficient and reliable cooling
                    for your home or workspace.
                </li>

                <li>
                    With powerful cooling performance and modern technology, the{" "}
                    <b>{chosen.name}</b> helps maintain a pleasant temperature even during hot
                    weather conditions.
                </li>

                <li>
                    Designed for convenient everyday use, it provides reliable performance and
                    practical features to make your indoor space more comfortable.
                </li>

                <li>
                    Combining efficient cooling, convenience, and dependable performance, the{" "}
                    <b>{chosen.name}</b> is a great addition to your home or office.
                </li> </>
        }
        { chosen.type=="fridge" && <>
                <li>
    Keep your food fresh and organised with the <b>{chosen.name}</b> from{" "}
    <b>{chosen.brand}</b>, designed to provide reliable cooling and convenient
    storage for your everyday household needs.
</li>

<li>
    With its efficient cooling performance and spacious storage, the{" "}
    <b>{chosen.name}</b> helps preserve fruits, vegetables, beverages, and other
    food items for longer.
</li>

<li>
    Designed for convenient everyday use, it offers practical compartments and
    organised storage to make it easier to manage your groceries.
</li>

<li>
    Combining reliable cooling, useful storage, and modern functionality, the{" "}
    <b>{chosen.name}</b> is a dependable addition to your home appliances.
</li> </>
        }
        { chosen.type=="airfryer" && <>
<li>
    Enjoy delicious meals with the <b>{chosen.name}</b> from{" "}
    <b>{chosen.brand}</b>, designed to make everyday cooking more convenient
    and enjoyable.
</li>

<li>
    Using efficient hot air circulation technology, the <b>{chosen.name}</b>
    helps cook a variety of foods with a crispy texture while using little or
    no oil compared with traditional deep frying.
</li>

<li>
    Designed for convenient everyday use, it is suitable for preparing snacks,
    vegetables, meat, and many of your favourite meals quickly and easily.
</li>

<li>
    Combining convenience, versatility, and modern cooking technology, the{" "}
    <b>{chosen.name}</b> is a great addition to your kitchen appliances.
</li>
</>
        }
        { chosen.type=="vacuumcleaner" && <>

<li>
    Keep your home clean and tidy with the <b>{chosen.name}</b> from{" "}
    <b>{chosen.brand}</b>, designed to provide convenient and effective cleaning
    for your everyday household needs.
</li>

<li>
    With reliable suction performance, the <b>{chosen.name}</b> helps remove
    dust, dirt, and everyday debris from different areas of your home.
</li>

<li>
    Designed for convenient everyday use, it makes cleaning floors and other
    surfaces easier while helping you maintain a cleaner living space.
</li>

<li>
    Combining cleaning performance, convenience, and practical functionality,
    the <b>{chosen.name}</b> is a useful addition to your home appliances.
</li>

</>
        }
        { chosen.type=="heater" && <>

<li>
    Stay warm and comfortable with the <b>{chosen.name}</b> from{" "}
    <b>{chosen.brand}</b>, designed to provide reliable heating for your home
    or workspace during colder conditions.
</li>

<li>
    With efficient heating performance, the <b>{chosen.name}</b> helps create a
    comfortable indoor environment and provides warmth when you need it.
</li>

<li>
    Designed for convenient everyday use, it offers practical functionality and
    reliable performance for maintaining a pleasant temperature indoors.
</li>

<li>
    Combining efficient heating, convenience, and dependable performance, the{" "}
    <b>{chosen.name}</b> is a useful addition to your home appliances.
</li>

</>
        }
        { chosen.type=="grinder" && <>


<li>
    Make your everyday food preparation easier with the <b>{chosen.name}</b>{" "}
    from <b>{chosen.brand}</b>, designed to provide convenient and reliable
    grinding performance for your kitchen needs.
</li>

<li>
    With its efficient performance, the <b>{chosen.name}</b> helps you grind
    spices, prepare ingredients, and handle a variety of everyday food
    preparation tasks with ease.
</li>

<li>
    Designed for convenient everyday use, it offers practical functionality to
    make preparing meals quicker and easier in your kitchen.
</li>

<li>
    Combining performance, convenience, and dependable functionality, the{" "}
    <b>{chosen.name}</b> is a useful addition to your everyday kitchen
    appliances.
</li>

</>
        }
    

    </ul>
  )
}

export default homeapp