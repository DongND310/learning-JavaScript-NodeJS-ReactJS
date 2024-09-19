import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums']
function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    // callback luon duoc goi sau khi component mounted
    useEffect(() => {
        console.log('title changed')
        // document.title = title
        
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }

            // showGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
        {
            tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? { color: '#fff', backgroundColor: '#333'} : {}}
                    onClick={() => setType(tab)}>
                    {tab}
                </button>
            ))
        }
            <input 
                value = {title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style ={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}>
                    Go to Top
                </button>
            )}
        </div>
    )
}

export default Content;