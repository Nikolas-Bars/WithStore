import React from "react";

export const required = values =>{
    if(values) return undefined
    return 'error'
}

export const maxLengthCreator = (maxLength) => (values) => {
    if(values.length > maxLength) return `max length ${maxLength}`
    return undefined
}

export const minLengthCreator = (minLength) => (values) =>{
    if(values.length < minLength) return `min length ${minLength}`
    return undefined
}

