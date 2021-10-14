import { SearchProps } from "./Search.props"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import React, { useState } from "react"
import { useRouter } from "next/router"
import styles from './Search.module.scss'
import cn from 'classnames'
import GlassIcon from './glass.svg'


export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('')
    const router = useRouter()

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        })
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key == 'Enter') {
            goToSearch()
        }
    }

    return (
        <div className={ cn(className, styles.search) } { ...props }>
            <Input
                className={ styles.input }
                placeholder='Поиск...'
                value={ search }
                onChange={ (e) => setSearch(e.target.value) }
                onKeyDown={ handleKeyDown }
            />
            <Button
                appearance='primary'
                className={ styles.button }
                onClick={ goToSearch }
                aria-label='Поиск по сайту'
            >
                <GlassIcon />
            </Button>
        </div>
    )
}