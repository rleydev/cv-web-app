import { Link } from 'react-router-dom'

const CustomLink = ({path, children}) => {
    return (
        <Link className='custom-link' to={path}>
           {children}
        </Link>
    )
}

export default CustomLink