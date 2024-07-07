// import { ChevronLeft, ChevronRight, Heart, Share } from 'lucide-react'
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

    return (
        <div className="sp text-white bg-slate-950 mx-auto max-w-7xl px-2 py-10 lg:px-0">
            <div className="overflow-hidden">
                <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
                    <div className="items-start justify-evenly lg:flex lg:space-x-8">
                        <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                            <div className="w-full xl:flex xl:flex-row-reverse">
                                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                                    <div className="relative flex items-center justify-center">
                                        <img
                                            alt="Product gallery 1"
                                            src={data.avatar_url}
                                            width={450}
                                            height={450}
                                            className="rounded-full object-cover md:h-[300px] md:w-full lg:h-full"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
                            <div className="pb-5">
                                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">Name: {data.name}</h2>
                                <p className="mt-4 font-semibold">Follower: {data.followers}</p>
                                <p className="mt-4 font-semibold">Following: {data.following}</p>
                            </div>
                            <div className="pb-5">
                                <p className="mt-4 font-semibold">UserName: {data.login}</p>
                                <p className="mt-4 font-semibold">Public Repos: {data.public_repos}</p>
                                <p className="mt-4 font-semibold">location: {data.location}</p>
                            </div>
                            <div className="mb-0 pt-0.5">
                                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                                    Social Links:
                                </h4>
                                <ul className="flex flex-wrap space-x-2">
                                    <Link to={data.html_url} target='_blank'>
                                        <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                                            GitHub
                                        </li>
                                    </Link>
                                    <Link to="https://www.linkedin.com/in/parth-panchal-0abaa1268/" target='_blank'>
                                        <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                                            LinkedIn
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                            <div className="pb-2" />
                            <div className="pt-6 xl:pt-8">
                                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                                    Bio:
                                </h3>
                                <p className="text-sm">
                                    {data.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ParthPanchal26');
    return response.json();
}