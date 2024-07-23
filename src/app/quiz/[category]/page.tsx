interface CategoryProperty {
    params: {
        category: string
    }
}

export default function Category(props: CategoryProperty){
    const { category } = props.params
    console.log(props)
    return(
        <h1>Category: {category}</h1>
    )
}