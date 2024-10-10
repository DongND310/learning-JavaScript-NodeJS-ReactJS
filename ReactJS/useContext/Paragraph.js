import { ThemeContext } from "./ThemeContext";
import {useContext} from 'react'

function Paragraph() {
    const context = useContext(ThemeContext);
    return (
        <p className={context.theme}>
            alo alo useContext hook
        </p>
    )
}

export default Paragraph