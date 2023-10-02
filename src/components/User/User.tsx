import styles from './User.module.css'

interface UserProps {
    name: string;
    maker: string;
}

const User: React.FC<UserProps> = ({name, maker}) => {
    return (
        <div>
            <h1>Name</h1>
            <p>{name}</p>
            <h1>Maker</h1>
            <p>{maker}</p>
        </div>
    )
}

export default User