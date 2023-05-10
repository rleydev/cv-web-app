import './Button.scss'

const Button = ({height, width, buttonName}) => {
    return (
        <button className="button" style={{height: height, width: width}}>{buttonName}</button>
    )
}

export default Button