import { useLike } from "../contexts/LikeProvider"; 

export function Like() {
    const {likeItem} = useLike()

    return (
        <>
            <h1>Like</h1>
            <ul>
                {likeItem.map((item)=>(
                    <LikeItem key={item.id} item={item}/>
                ))}
            </ul>
        </>
    )
}

function LikeItem({ item }) {
    return (
        <>
            <li className="item">
                <img width={100} src={item.img} />
                <section>
                    <div>{item.name}</div>
                    <div>{item.price}원</div>
                </section>
            </li>
        </>
    )
}