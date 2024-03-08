import {
    PublicServiceCode,
    PublicServiceContextMenu,
    PublicServiceContextMenuType,
    PublicServiceSettings,
    PublicServiceStatus,
    SessionType,
} from '@diia-inhouse/types'

export default class PublicServiceGenerator {
    getPublicServiceContextMenu(contextMenuItems: PublicServiceContextMenu[] = []): PublicServiceContextMenu[] {
        return [{ type: PublicServiceContextMenuType.faqCategory, name: 'contextItemName' }, ...contextMenuItems]
    }

    getPublicServiceSettings(serviceSettings: Partial<PublicServiceSettings> = {}): PublicServiceSettings {
        return {
            id: '123',
            code: PublicServiceCode.criminalRecordCertificate,
            name: 'criminalRecordCertificate',
            status: PublicServiceStatus.active,
            sessionTypes: [SessionType.User],
            contextMenu: this.getPublicServiceContextMenu(),
            categories: [],
            segments: [],
            sortOrder: 0,
            locales: {},
            ...serviceSettings,
        }
    }
}
