interface ObjectiveProperty {
    params: {
        objectiveCategory: string
    }
}

export default function Obejctive(props: ObjectiveProperty){
    const { objectiveCategory } = props.params;
    console.log(props);
    console.log(objectiveCategory);
    return(
        <h1>Objective: {objectiveCategory}</h1>
    )
}