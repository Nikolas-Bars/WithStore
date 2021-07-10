import React from 'react'
import s from './Setting.module.css'

const Setting = (props) => {
    return (
        <div className={s.setting}>
            <p>Настройки Вашей страницы. Выберите нужный пункт.</p>
            <ul>
                <li><a href='#' className={s.a_setting}>Изменить личные данные</a></li>
                <li><a href='#' className={s.a_setting}>Настройки публичности аккаунта</a></li>
                <li><a href='#' className={s.a_setting}>Настройка уведомлений</a></li>
            </ul>
        </div>
    )
}

export default Setting;