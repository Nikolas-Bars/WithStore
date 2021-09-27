import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    ActivateEditMode =()=>{
       this.setState({
           editMode: true
       })
    }

    deActivateEditMode =()=>{
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)
    }

    oneChange =(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        console.log('dwqd')
    }

    render() {
        return (<div>
                {this.state.editMode &&  <input autoFocus={true} onBlur={this.deActivateEditMode} onChange={this.oneChange} value={this.state.status}/>}
                {!this.state.editMode && <span  onDoubleClick={this.ActivateEditMode}>{this.props.status  || '-------'}</span>}
            </div>

        )
    }
}

export default ProfileStatus