import {
    PublicServiceContextMenu,
    PublicServiceContextMenuType,
    PublicServiceSettings,
    PublicServiceStatus,
} from '@diia-inhouse/design-system'

export default class PublicServiceGenerator {
    getPublicServiceContextMenu(contextMenuItems: PublicServiceContextMenu[] = []): PublicServiceContextMenu[] {
        return [{ type: PublicServiceContextMenuType.faqCategory, name: 'contextItemName' }, ...contextMenuItems]
    }

    getPublicServiceSettings(serviceSettings: Partial<PublicServiceSettings> = {}): PublicServiceSettings {
        return {
            id: '123',
            code: 'penalties',
            name: 'penalties',
            status: PublicServiceStatus.active,
            contextMenu: this.getPublicServiceContextMenu(),
            categories: [],
            sortOrder: 0,
            locales: {},
            ...serviceSettings,
        }
    }
}
