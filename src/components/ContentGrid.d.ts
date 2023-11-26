import type { OstDocument } from 'outstatic'

type Tag = {
   value: string
   label: string
}

type Tags = {
   tags?: Tag[]
}

type Item = Tags & OstDocument

export interface IContentGridProps {
   title?: string
   items: Item[]
   priority?: boolean
}
