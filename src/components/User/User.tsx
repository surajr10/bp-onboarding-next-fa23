import styles from './User.module.css'

const User = (name: string, maker: string) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{maker}</h1>
        </div>
    )
}

export default User