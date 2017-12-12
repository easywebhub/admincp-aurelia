export interface ViewModelBase {
    items: Array<any>
    selectedItem: any
    selectedList: Array<any>
    filter: any
    runFilter()
    runCreate(item)
    runUpdate(item)
    runDelete(id)
    runDeleteMany(ids)
}