import React from 'react'
import { ReactComponent as CaretIcon } from '../assets/caret.svg';
import { ReactComponent as FolderIcon } from '../assets/folder.svg';
import { ReactComponent as FileIcon } from '../assets/file.svg';

type Props = {
  title: string;
  level: number;
  isOpen: boolean;
  isFolder: boolean;
  onClick?: () => void;
}

function TreeItem({ title, level, isOpen, isFolder, onClick }: Props): JSX.Element {
  return (
    <div className='tree-item' onClick={onClick}>
      <span style={{ width: `calc(24px * ${level}`}}></span>
      {isFolder && <span className='tree-icon'><CaretIcon className={`caret ${isOpen && 'caret-open'}`} /></span>}
      <span className='tree-item-content'>
        <span className='tree-icon'>{ isFolder ? <FolderIcon/> : <FileIcon/> }</span>
        <span className='tree-title'>{title}</span>
      </span>
    </div>
  )
}

export default TreeItem
