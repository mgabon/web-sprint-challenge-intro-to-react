// Write your Character component here
const Characters = props => {

const characters = props.characters

    return (
        <div className="characters">
            {
characters.map( person => (
    <h1 key={person.name}>{person.name}</h1>
)) 
}
        </div>
)
}

export default Characters;