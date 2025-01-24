'use client'
import { Popover, PopoverButton, PopoverPanel, CloseButton } from '@headlessui/react'
import {deleteUrl, toggleActive} from '@/services/db-actions'

function PopoverDropdown({id, url} : {id: string, url: string}) {

    const handleToggle = async () => {
        const result = await toggleActive(id)
        if (result) {
            console.log('result', result)

        }
    }

    const handleDelete = async () => {
        alert('Are you sure?')
        const result = await deleteUrl(id)
        if (result) {
            console.log('result', result)
        }
    }

    return (
        <Popover className="relative" key={id}>
            <PopoverButton>Action</PopoverButton>
            <PopoverPanel anchor="bottom start" className="flex flex-col bg-white/15 backdrop-blur-lg rounded">
                <CloseButton as={'button'} type={'button'} onClick={handleToggle} className={'p-2.5 text-start hover:bg-white/10 transition-all duration-300'}>Toggle State</CloseButton>
                <CloseButton as={'a'} className={'p-2.5 text-start hover:bg-white/10 transition-all duration-300'} href={url} target="_blank" rel="noopener noreferrer">Visit Link</CloseButton>
                <CloseButton as={'button'} type={'button'} onClick={handleDelete} className={'p-2.5 text-start hover:bg-white/10 text-red-600 transition-all duration-300'}>Delete</CloseButton>
            </PopoverPanel>
        </Popover>
    )
}

export default PopoverDropdown