export function Item({item}) {
    return (
        <li className="item">
            <img width={100} src={item.img} />
            <section>
                <div>{item.name}</div>
                <div>{item.price}원</div>
            </section>
        </li>
    )
}