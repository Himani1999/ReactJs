const InputwithLabel = (props) =>{
    return(
        <>
                <div className="form-group">
                    <label for={props.forLabel}><b>{props.labelName}: </b></label>
                    <input type={props.inputType} name={props.name} onChange={e => props.changeHander(e)} className="form-control" placeholder={props.placeholder} />
                </div>
        </>
    );
}

export default InputwithLabel;



