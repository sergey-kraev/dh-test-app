import React from 'react'
import { File as FileType } from '../types'
import TreeItem from './TreeItem';


function File({ title, level }: FileType): JSX.Element {
  return (
    <TreeItem title={title} level={level + 1}  isOpen={false} isFolder={false}/>
  )
}

export default File
