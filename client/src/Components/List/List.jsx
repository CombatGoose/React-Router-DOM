import Item from '../Item/Item'
import FormEdit from '../formEdit/FormEdit'
import './list.scss'

const List = (props) => {

const ProductsCollection = props.products.map(item => {
    if(item.status === "open") {
        return (
            <Item
            deleteProductItem={props.deleteProductItem}
            changeStatusProduct={props.changeStatusProduct}
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            />
        )
    } else {
        return <FormEdit
         key={item.id}
         id={item.id}
         cancelChangeProduct={props.cancelChangeProduct}
         saveChangeProduct={props.saveChangeProduct}
         />
    }
})

    return (
        <ul className="list">
            {ProductsCollection}
        </ul>
    )
}

export default List