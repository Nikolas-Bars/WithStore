import React, {useState} from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import hacker from './../../../img/hacker.png'
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatusThunk, isOwner, savePhoto}) =>{

    const [editMode, setEditMode] = useState(false)

    if (!profile){  //если props.profile = null или undefined
        return <Preloader />
    }

    const onMainPhotoSelected =(e)=>{
        if(e.target.files.length > 0){
            savePhoto(e.target.files[0])
        }
    }

    const onEditMode =()=> {
        debugger
        setEditMode(!editMode)
    }
    const onSubmit =(formData)=>{
        console.log(formData)
    }

    return  (
        <div>
            {/* <div>
                <img className={s.img} src="https://static.prian.ru/uploads/2021_07/1/20210701133751780428393.jpg" />
            </div>*/}
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={profile.photos.small || hacker}/><br/>
                {isOwner && <input type={'file'}
                                   onChange={onMainPhotoSelected}/>}


                {editMode
                    ? <ProfileDataForm profile={profile} goToEditMode={onEditMode} isOwner={isOwner} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} editMode={editMode} goToEditMode={onEditMode} isOwner={isOwner}/>  }


                <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/>

             </div>
        </div>
);
}
export default ProfileInfo;


export const ProfileData =({profile, editMode, goToEditMode, isOwner})=>{
    return(
        <div>

            <div>
                <b>Full name:</b>  {profile.fullName}  {isOwner && <button onClick={goToEditMode}>editMode</button>}
            </div>

            <div>
                <b>Немного обо мне:</b>  {profile.aboutMe}
            </div>

            <div>
                <b>Ищу ли я работу?</b>{profile.lookingForAJob ? <h3>Нет</h3> : <span>      ДА</span> }
            </div>

            <div>
                <b>My professional skills</b>{profile.lookingForAJobDescription}
            </div>

            <div>КОНТАКТЫ:
                <b>{Object.keys(profile.contacts).map(k => {
                    return <Contact key={k} contactTitle={k} contactValue={profile.contacts[k]}/>
                } )}</b>
            </div>

        </div>


    )
}



export const Contact =({contactTitle, contactValue})=>{
    return (
        <div className={s.contact}>
            {contactTitle}:{contactValue}
        </div>
    )
}

