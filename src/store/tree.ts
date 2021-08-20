import { createSlice } from '@reduxjs/toolkit'
import { Folder as FolderType } from '../types'

function findItem(child: FolderType, payload: FolderType): any {
  if (child.id === payload.id) return payload
  if (child.children && child.children.length > 0) {
    child.children = child.children.map((c: FolderType) => findItem(c, payload))
  }
  return child
}

export const treeSlice = createSlice({
  name: 'tree',
  initialState: {
    data: {} as FolderType,
    loadedIds: [] as number[],
  },
  reducers: {
    setInitialData: (state, action) => {
      state.data = action.payload
    },
    modifyData: (state, action) => {
      let res = []
      if (state.data.children) {
        res = state.data.children.map(child => findItem(child, action.payload))
      }
      state.loadedIds = [...state.loadedIds, action.payload.id]
      state.data.children = res
    },
  },
})

export const { setInitialData, modifyData } = treeSlice.actions

export default treeSlice.reducer