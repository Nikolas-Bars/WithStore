export type photosType = {
    small: string | null
    large: string | null
}

export type postType ={
    id: string | number
    message: string
    likeCounts: string | number
}

export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type UsersType = {
    id: number
    name: string
    status: string
    photos: photosType
    followed: boolean
}