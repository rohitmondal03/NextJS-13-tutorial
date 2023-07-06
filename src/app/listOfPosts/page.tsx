import Image from "next/image";


// const getPostsData = async () => {
//     const res = await fetch(
//         "https://my-json-server.typicode.com/typicode/demo/posts",
//     )

//     return res.json();
// }

const getDogData = async () => {
    const res = await fetch(
        "https://dog.ceo/api/breeds/image/random", {
        cache: "no-store",
        // so that the data data is not stored in static way.

        // next: {
        //     revalidate: 10
        //     // to request data after required no. of seconds
        // }
    })

    return res.json();
}


export default async function Navbar() {
    const [ dogData] = await Promise.all([
        // getPostsData(),
        getDogData()
    ])

    return (
        <div>
            {/* {posts.map((post: any) => (
                <p>{post.title}</p>
            ))} */}


            <Image src={dogData.message} alt="dog" width={300} height={300} />
        </div>
    )
}