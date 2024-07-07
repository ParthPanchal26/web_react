import { useParams } from "react-router-dom"

function User() {
    const { id } = useParams();

    return (
        <>
            <div className="bg-gray-300 p-5 m-5 rounded-lg border-gray-500 border-2">
                <div className="text-2xl text-white text-center font-bold duration-300"> Pass any number in URL just like: /user/123</div>
                <div className="text-5xl text-white text-center font-bold duration-300"> User: {id}</div>
            </div>
        </>
    )
}

export default User