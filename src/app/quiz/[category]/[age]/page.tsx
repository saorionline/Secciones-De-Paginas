interface AgeProperty {
    params: {
        ageCategory: string
    }
}

export default function Age(props: AgeProperty){
    const { ageCategory } = props.params
    console.log(props)
    return(
      <div>
        <h1>Quiz Age: {ageCategory}</h1>
      </div>    
      )
}