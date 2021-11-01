import React from "react";
import {Contact} from "./ProfileInfo";
import s from "./ProfileInfo.module.css"
import {CreateField, Input, textArea} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {reduxForm} from "redux-form";
import styles from './../../common/FormsControls/FormsControl.module.css'

const ProfileDataForm =({handleSubmit, profile, error})=>{
    return (
        <form onSubmit={handleSubmit}>

            <button>Save</button>

            {error && <div className={styles.FormSummuryError}>
                {error}
            </div>}

            <div>
                <b>aFull name:</b>  {CreateField('Full name','fullName', Input,[required])}
            </div>

            <div>
                <b>Ищу ли я работу?</b> {CreateField(null, 'lookingForAJob', Input, null, {type: 'checkbox'})}
            </div>

            <div>
                <b>My professional skills</b> {CreateField('My professional skills', 'lookingForAJobDescription', textArea)}
            </div>

            <div>
                <b>Немного обо мне:</b> {CreateField('Немного обо мне:', 'aboutMe', textArea)}
            </div>
            <div>КОНТАКТЫ:
                  <b>{Object.keys(profile.contacts).map(k => {
                    return <div key={k} className={s.contact}>
                        <b>{k}{CreateField(k,'contacts.' + k, Input,)}</b>
                    </div>
                } )}</b>
            </div>





            {/* <div>КОНТАКТЫ:
                <b>{Object.keys(profile.contacts).map(k => {
                    return <Contact key={k} contactTitle={k} contactValue={profile.contacts[k]}/>
                } )}</b>
            </div>*/}

        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm