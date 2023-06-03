import './Button.scss'

const Button = ({height, width, buttonName, icon}) => {
    return (
        <button className="button" style={{height: height, width: width}}>{icon}{buttonName}</button>
    )
}

export default Button