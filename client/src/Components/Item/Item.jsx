import '../List/List'

const Item = (props) => {

    const onDelete = () => {
        props.deleteProductItem(props.id)
    }

    const onEdit = () => {
        props.changeStatusProduct(props.id)
    }

    return (
        <li className="list_item">
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>Edit</button>
        </li>
    )
}

export default Item