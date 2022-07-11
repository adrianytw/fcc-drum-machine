import { useSelector } from "react-redux"

const Display = () => {

    const { text } = useSelector( (state) => state.display)

    return (
        <h2 id='display'>{text}</h2>
    )
}

export default Display