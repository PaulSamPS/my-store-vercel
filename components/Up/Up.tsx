import { useScrollY } from "../../hooks/useScroll"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import styles from './Up.module.scss'
import UpIcon from '../BurronIcon/up.svg'
import {ButtonIcon} from "../BurronIcon/ButtonIcon";

export const Up = (): JSX.Element => {

    const controls = useAnimation()
    const y = useScrollY()

    useEffect(() => {
        controls.start({ opacity: y/ document.body.scrollHeight })
    },[y, controls])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <motion.div
            className={ styles.up }
            animate={ controls }
            initial={{ opacity: 0 }}
        >
            <ButtonIcon appearance='white' icon='up' onClick={ scrollToTop } />
        </motion.div>
    )
}