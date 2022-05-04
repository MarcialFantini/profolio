import image1 from '../../images/proyects/kid.jpg'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, magnam corporis voluptas labore sapiente vero numquam consequuntur autem nisi. "
export const proyects = [
    {
        id: 1,
        image: image1,
        title: 'buenas',
        text: lorem,
        textRelative: 'text-relative',
        imgBanner: "proyect-banner_img",
        active: false
    },
    {
        id: 2,
        image: image1,
        title: 'buenas',
        text: lorem,
        textRelative: 'text-relative',
        imgBanner: "proyect-banner_img",
        active: false
    },
    {
        id: 3,
        image: image1,
        title: 'buenas',
        text: lorem,
        textRelative: 'text-relative',
        imgBanner: "proyect-banner_img",
        active: false
    },

]


export const formatProyects = (proyects, onClickButton) => {
    const list = proyects.map(item => {
        return <div key={item.id} className="proyect-banner" >
            <picture className='' >
                <div className={item.textRelative}>
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                </div>
                <img className={item.imgBanner} src={item.image} alt="Banner" >
                </img>
            </picture>
            <button
                onClick={onClickButton}
                key={item.id}
                value={item.id}>
                {!item.active ? 'Ver Mas' : 'Ocultar'}
            </button>
        </div>
    })

    return list
}