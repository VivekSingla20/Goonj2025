import Image from "next/image"

import styles from  "./eventCard.module.scss"
export default function eventCard({src,alt,width,desc,height,setpopup, contact, link, registerDesc, registerLink, setEvent}:eventCardProp){
    const handelClick = () =>{
        setpopup(true)
        setEvent(
        {src:src,
            alt:alt,
            width:width,
            height:height,
            desc:desc,
            contact:contact,
            link:link,
            registerDesc:registerDesc,
            registerLink:registerLink,
            setpopup:setpopup,
        }
        )
    }
    return(
        <div className={styles.container} >
            <div className={styles.imgSection}>
                <Image
                onClick={handelClick}
                className={styles.img}
                src={src}
                alt={alt}
                width={width}
                height={height}
                />
            </div>
            <div className={styles.details}>
                <p>{alt}</p>
            </div>
        </div>
    )
}