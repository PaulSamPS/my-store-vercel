import { SidebarProps } from "./Sidebar.props"
import { Search } from "../../components"
import { useRouter } from "next/router";
import { Menu } from "../Menu/Menu"
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import Logo from '../logo.svg'


export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    const router = useRouter()

    const goToMain = () => {
        router.push({
            pathname: '/'
        })
    }

    return (
       <div className={cn(className, styles.sidebar)} { ...props }>
           <Logo
               className={styles.logo}
               onClick={ goToMain }
           />
           <Search />
            <Menu />
       </div>
    )
}