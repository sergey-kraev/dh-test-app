import React, { useState } from 'react'
import { getContent } from '../requests';
import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { modifyData } from '../store/tree';
import { Folder as FolderType } from '../types'
import File from './File'
import TreeItem from './TreeItem';

function Folder({ title, id, children, level }: FolderType): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const { loadedIds } = useAppSelector((state: RootState) => state.tree)
  const dispatch = useAppDispatch();

  const loadNewData = () => {
    setIsOpen(!isOpen)
    if (loadedIds.includes(id)) {
      return;
    }
    getContent(id).then(data => {
      dispatch(modifyData(data));
    })
  }

  return (
    <>
      <TreeItem title={title} level={level} isOpen={isOpen} isFolder onClick={loadNewData}/>
      {
        isOpen && children && children.map((elem) => {
          if ((elem as any).children) {
            return <Folder {...elem as FolderType} level={level + 1} key={elem.id}/>
          }
          return <File {...elem} level={level + 1} key={elem.id}/>
        })
      }
    </>
  )
}

export default Folder
