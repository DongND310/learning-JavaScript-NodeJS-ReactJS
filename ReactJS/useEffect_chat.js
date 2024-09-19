import { useEffect, useState } from "react";

const lessons = [
    {
        id: 1,
        name: 'ls1'
    },
    {
        id: 2,
        name: 'ls2'
    },
    {
        id: 3,
        name: 'ls3'
    },
    
]

function Content() {

    const [lessonId, setLessonId] = useState(1)

    const handleComment = ({detail}) => {
        console.log(detail)
    }

    useEffect(() => {
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])


 
    return (
        <div>
           <ul>
            {lessons.map((lesson) => (
                <li 
                    key={lesson.id}
                    style={{
                        color: lessonId === lesson.id ? 'red' : '#333'
                    }}
                    onClick={() => setLessonId(lesson.id)}
                    >
                    {lesson.name}
                </li>
            ))}

           </ul>
        </div>
    )
}

export default Content;