const Label = ({color, text}) => {
    color = "FF8E8E";
    return ( 
        <span className="label" style={{backgroundColor: '#FF8E8E'}}>
            <span>{text}</span>
        </span>
     );
}

export default Label;