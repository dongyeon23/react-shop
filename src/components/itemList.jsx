import { Item } from "./item"

export function ItemList({filterdItems}) {
    return (
        <>
            <ul>
            {filterdItems.map((item) => (<Item key={item.id} item={item} />
            ))}
            </ul>
        </>
    )
}
